'use strict';
module.exports = function (app) {
    var todoList = require('../controller/appController');

    app.route('/api/posts')
        .get(todoList.list_all_posts)
        .post(todoList.create_a_post);

    app.route('/api/post/:id')
        .get(todoList.read_a_post)
        .put(todoList.update_a_post)
        .delete(todoList.delete_a_post);

    app.route('/api/users')
        .get(todoList.list_all_users)
        .post(todoList.create_a_user);

    app.route('/api/comment/:id')
        .get(todoList.read_a_comment)
        .put(todoList.update_a_comment)
        .delete(todoList.delete_a_comment);

    app.route('/api/comments')
        .post(todoList.create_a_comment);

    app.route('/api/comments/:post_id')
        .get(todoList.list_all_comments);

    app.route('/api/user')
        .post(todoList.create_a_user);

    app.route('/api/search/:string')
        .get(todoList.get_search);
};