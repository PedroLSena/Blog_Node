const { get } = require("http");
const { post } = require("../routes");
const { title } = require("process");

let posts = [{id:1, title:"Post 1", content:"Conteudo do post 1", createdAt: new Date(), updateAt: new Date()},
{id:2, title:"Post 2", content:"Conteudo do post 2", createdAt: new Date(), updateAt: new Date()},
{id:3, title:"Post 3", content:"Conteudo do post 3", createdAt: new Date(), updateAt: new Date()}];


const postModel = {
    getAllPosts(){
        return posts
    },
    getPostById(id){
        posts.find(post => post.id == id);
    },
    createPost(title, content){

        if(title == undefined || title == "" || content == undefined || content == ""){
            const post ={
                id:Date.now().toString(),
                title: title,
                content: content,
                createdAt: new Date(),
                updateAt: new Date()
            }
        }else{
            window.alert("Campos nao preenchidos");
        }
    },
    savePost(post){
        post.unshift(post);
    },
    updatePost(id, updatePost){
        const index = posts.findIndex(post => post.id == id);
        posts[index] = {...posts[index], ...updatePost, updateAt: new Date()};
        
    },
    deletePost(id){
        posts = posts.filter(post => post.id != id);
    }
}

module.exports = postModel;