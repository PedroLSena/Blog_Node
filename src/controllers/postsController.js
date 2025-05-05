const postsModel = require('../models/postModel');

const postsController ={
    index: (req, res)=>{
        const posts = postsModel.getAllPosts();

        res.render('index', {posts});
    }
}

module.exports = postsController