const crypto = require('crypto');
const User = require('../models/user');
//const Order = require('../models/order');
const jwt = require('jsonwebtoken');
const generateSecretKey = () => {
  const secretKey = crypto.randomBytes(32).toString('hex');

  return secretKey;
};

const secretKey = generateSecretKey();

// API
exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;

    //check if the user exists
    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({message: 'Invalid email or password'});
    }

    //check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({message: 'Invalid password'});
    }

    //generate a token
    const token = jwt.sign({userId: user._id}, secretKey);

    res.status(200).json({token});
  } catch (error) {
    res.status(500).json({message: 'Login Failed'});
  }
};
