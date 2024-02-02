const User = require('../models/user');
//const Order = require('../models/order');

exports.addresses = async (req, res) => {
  try {
    const {userId, address} = req.body;

    //find the user by the Userid
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }

    //add the new address to the user's addresses array
    user.addresses.push(address);

    //save the updated user in te backend
    await user.save();

    res.status(200).json({message: 'Address created Successfully'});
  } catch (error) {
    res.status(500).json({message: 'Error addding address'});
  }
};
// Address by user id
exports.addressesById = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }

    const addresses = user.addresses;
    res.status(200).json({addresses});
  } catch (error) {
    res.status(500).json({message: 'Error retrieveing the addresses'});
  }
};
