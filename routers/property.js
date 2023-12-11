const express = require('express');
const router = express.Router();

const userdata = require('../Controllers/Property');

router.get('/getproperty', userdata.alldata);
router.post('/createproperty', userdata.create);
router.get('/getproperty/:Userid', userdata.onedata); // Use ':Userid' to match the parameter in the controller
router.put('/getproperty/:Userid', userdata.update); // Use ':Userid' to match the parameter in the controller
router.delete('/getproperty/:Userid', userdata.delete); // Use ':Userid' to match the parameter in the controller

module.exports = router;
