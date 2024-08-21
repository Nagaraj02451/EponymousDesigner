const express = require('express');
const { newsletter } = require('../controllers/newletter');


const router = express.Router();

router.route('/news').post(newsletter);


module.exports = router;
