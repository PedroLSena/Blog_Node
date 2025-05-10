const postsModel = require('../models/postModel');

const adminController = {

    //Get /admin
    index: (req, res)=>{
        const posts = postsModel.getAllPosts();

        return res.render('admin', {posts});
    },
    //get /admin/create
    //post /admin/create
    //get /admin/edit/post/:id
    //post /admin/update/post/:id
}

module.exports = adminController