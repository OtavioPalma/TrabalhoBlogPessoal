'user strict';
var sql = require('../db');

var Post = function (post) {
    this.title = post.title;
    this.body = post.body;
    this.userId = post.userId;
};

Post.createPost = function (newPost, result) {
    sql.query("INSERT INTO post (title, body, user_id) VALUES ('" +
        newPost.title + "', '" +
        newPost.body + "', '" +
        newPost.userId + "')",
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });
};

Post.getAllPosts = function (result) {
    sql.query("SELECT p.id, p.title, p.body, u.username, DATE_FORMAT(p.createdAt, '%d/%m/%Y às %H:%i') AS createdAt FROM post p INNER JOIN user u ON u.id = p.user_id ORDER BY p.createdAt DESC", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

Post.getPostById = function (postId, result) {
    sql.query("SELECT p.title, p.body, u.username, DATE_FORMAT(p.createdAt, '%d/%m/%Y às %H:%i') AS createdAt FROM post p INNER JOIN user u ON u.id = p.user_id WHERE p.id = " + postId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Post;