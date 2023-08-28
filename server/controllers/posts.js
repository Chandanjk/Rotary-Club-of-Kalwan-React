const Post = require("../models/post");
var fs = require('fs');

const getPosts = async (req, res) => {
  const post_data = await Post.find(req.query);
  console.log("get")
  res.status(200).json( post_data );
};

const addPost = async (req, res) => {
  const post = req.body;
  console.log("post")
  const post_data = await Post.create(post)
  res.status(200).json(post_data);
};

const updatePosts = async (req, res) => {
  const post = req.body;
  const _id = req.params.id;
  console.log("put")
  const post_data = await Post.updateOne({_id} , post)
  if(post_data.acknowledged === true){
    res.status(200).json(post);
  }else{
    res.status(404).json("No Data Found");
  }
}

const deletePost = async (req, res) => {
  const _id = req.params.id;
  console.log("delete")
  req.body.images.map((image) => {
    fs.rmSync(`${process.env.IMAGES_PATH}upload_posts/${image}`,{force:true})
  })
  const post_data = await Post.deleteOne({_id : _id})
  res.status(200).json(post_data);
}

const uploadImage = async (req, res) => {
  const newpath = `${process.env.IMAGES_PATH}upload_posts`;
  const files = req.files.file;
  const prefix = req.prefix;
  console.log(prefix)
  let status = [];
  files.map((file) => {
    file.mv(`${newpath}/${file.name}`, (err) => {
      if (err) {
        status = [...status, {name: file.name , status: "Upload FAILED" , error: err }]
      }else{
        status = [...status, {name: file.name , status: "Upload PASS" , error: ""}]
      }
    });
  })
  res.status(200).send({status});
}

module.exports = { getPosts, addPost, updatePosts, deletePost, uploadImage };
