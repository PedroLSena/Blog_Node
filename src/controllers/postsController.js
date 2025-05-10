const postsModel = require('../models/postModel');

const postsController ={
    index: (req, res)=>{
        const posts = postsModel.getAllPosts();

        return res.render('index', {posts});
    },
    //Get post [id]
    show: (req, res)=>{
        const id = req.params.id;

        const post = postsModel.getPostById(id);
        return res.render('post', {post});
    }
}


module.exports = postsController