const express = require('express');
const postsController = require('./controllers/postsController');
const adminController = require('./controllers/adminController');

const router = express.Router();

// User
router.get('/', postsController.index);
router.get('/posts/:id', postsController.show);

// Admin
router.get('/admin', adminController.index);
router.get('/admin/create', adminController.create);
router.post('/admin/create', adminController.save); // Certifique-se de que esta rota está configurada

module.exports = router;