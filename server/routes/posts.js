const express = require("express");
const router = express.Router();

const { getPosts, addPost, updatePosts, deletePost, uploadImage } = require("../controllers/posts");

router.route("/").get(getPosts);
router.route("/").post(addPost);
router.route("/:id").put(updatePosts);
router.route("/:id").delete(deletePost);
router.route("/postimage").post(uploadImage);


module.exports = router;
