const express = require('express');
const postsController = require('./controllers/postsController');
const adminController = require('./controllers/adminController');

const router = express.Router();

router.get('/', postsController.index)
router.get('/posts/:id', postsController.show)
router.get('/admin', adminController.index);

module.exports = router;