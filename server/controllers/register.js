//newUser

const User = require('../models/user');
const {emailVerifications} = require('./emailVerifications');
const crypto = require('crypto');
exports.register = async (req, res) => {
  try {
    const {name, email, password} = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({email});
    if (existingUser) {
      console.log('Email already registered:', email); // Debugging statement
      return res.status(400).json({message: 'Email already registered'});
    }

    // Create a new user
    const newUser = new User({name, email, password});

    // Generate and store the verification token
    newUser.verificationToken = crypto.randomBytes(20).toString('hex');

    // Save the user to the database
    await newUser.save();

    // Debugging statement to verify data
    console.log('New User Registered:', newUser);

    // Send verification email to the user
    // Use your preferred email service or library to send the email
    emailVerifications(newUser.email, newUser.verificationToken);

    res.status(201).json({
      message:
        'Registration successful. Please check your email for verification.',
    });
  } catch (error) {
    console.log('Error during registration:', error); // Debugging statement
    res.status(500).json({message: 'Registration failed'});
  }
};
