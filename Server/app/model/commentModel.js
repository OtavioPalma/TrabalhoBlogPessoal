'user strict';
var sql = require('../db');

var Comment = function (comment) {
    this.title = comment.title;
    this.body = comment.body;
    this.email = comment.email;
    this.post_id = comment.post_id;
};

Comment.createComment = function (newComment, result) {
    sql.query("INSERT INTO comment (title, body, email, post_id) VALUES ('" +
        newComment.title + "', '" +
        newComment.body + "', '" +
        newComment.email + "', '" +
        newComment.post_id + "')",
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });
};

Comment.getAllComments = function (postId, result) {
    sql.query("SELECT c.post_id, c.title, c.body, c.email, DATE_FORMAT(c.createdAt, '%d/%m/%Y às %H:%i') AS createdAt FROM comment c INNER JOIN post p ON c.post_id = p.id WHERE p.id = ? ORDER BY c.createdAt", postId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Comment;