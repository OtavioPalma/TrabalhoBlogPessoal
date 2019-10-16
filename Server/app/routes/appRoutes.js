'use strict';
module.exports = function (app) {
    var todoList = require('../controller/appController');

    app.route('/api/posts')
        .get(todoList.list_all_posts)
        .post(todoList.create_a_post);

    app.route('/api/users')
        .get(todoList.list_all_users)
        .post(todoList.create_a_user);
};