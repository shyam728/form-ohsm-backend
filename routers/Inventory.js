const express = require('express');
const router = express.Router();

const userdata = require('../Controllers/Inventory');

router.get('/getinventory', userdata.alldata);
router.post('/createinventory', userdata.create);
router.get('/getinventory/:Userid', userdata.onedata); // Use ':Userid' to match the parameter in the controller
router.put('/getinventory/:Userid', userdata.update); // Use ':Userid' to match the parameter in the controller
router.delete('/getinventory/:Userid', userdata.delete); // Use ':Userid' to match the parameter in the controller

module.exports = router;
