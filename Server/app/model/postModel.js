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
    sql.query("SELECT p.title, p.body, u.username FROM post p INNER JOIN user u WHERE u.id = p.user_id", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Post;