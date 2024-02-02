const User = require('../models/user');
//const Order = require('../models/order');
exports.verify = async (req, res) => {
  try {
    const token = req.params.token;

    //Find the user witht the given verification token
    const user = await User.findOne({verificationToken: token});
    if (!user) {
      return res.status(404).json({message: 'Invalid verification token'});
    }

    //Mark the user as verified
    user.verified = true;
    user.verificationToken = undefined;

    await user.save();

    res.status(200).json({message: 'Email verified successfully'});
  } catch (error) {
    res.status(500).json({message: 'Email Verificatioion Failed'});
  }
};
