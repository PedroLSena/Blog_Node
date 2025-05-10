const postsModel = require('../models/postModel');

const adminController = {

    //Get /admin
    index: (req, res) => {
        const posts = postsModel.getAllPosts();
        return res.render('admin', { posts });
    },
    
    create: (req, res) => {
        return res.render('newPostForm');
    },
    save: (req, res) => {
        const { title, content } = req.body;
        postsModel.createPost(title, content); // Corrigido
        return res.redirect('/admin');
    },
}

module.exports = adminController;