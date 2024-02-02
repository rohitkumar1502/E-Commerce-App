const express = require('express');
const router = express.Router();

//import controller
const {register} = require('../controllers/Register');
const {verify} = require('../controllers/verify');
const {login} = require('../controllers/login');
const {addresses, addressesById} = require('../controllers/addresses');
const {orders, ordersUserById} = require('../controllers/orders');
const {profile} = require('../controllers/profile');
//define todo api
router.post('/register', register);
router.get('/verify/:token', verify);
router.post('/login', login);
router.post('/addresses', addresses);
// Address by user id
router.get('/addresses/:userId', addressesById);
router.post('/orders', orders);
router.get('/profile/:userId', profile);
router.get('/orders/:userId', ordersUserById);
module.exports = router;
