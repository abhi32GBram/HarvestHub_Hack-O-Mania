const express = require('express');
const router = express.Router();
const folderController = require('../controllers/folderController');

// Folder routes
router.post('/folders', folderController.createFolder);
module.exports = router;
