'use strict';

var Post = require('../model/postModel');
var User = require('../model/userModel');

exports.list_all_posts = function (req, res) {
    Post.getAllPosts(function (err, post) {
        if (err)
            res.send(err);
        res.send(post);
    });
};

exports.create_a_post = function (req, res) {
    var new_post = new Post(req.body);
    Post.createPost(new_post, function (err, post) {
        if (err)
            res.send(err);
        res.json(post);
    });
};

exports.list_all_users = function (req, res) {
    User.getAllUsers(function (err, user) {
        if (err)
            res.send(err);
        res.send(user);
    });
};

exports.create_a_user = function (req, res) {
    var new_user = new User(req.body);
    User.createUser(new_user, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};