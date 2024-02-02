const User = require('../models/user');
//const Order = require('../models/order');

exports.profile = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }

    res.status(200).json({user});
  } catch (error) {
    res.status(500).json({message: 'Error retrieving the user profile'});
  }
};
