'user strict';
var sql = require('../db');

var User = function (user) {
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
};

User.createUser = function (newUser, result) {
    sql.query("INSERT INTO user (name, username, email) VALUES ('" +
        newUser.name + "', '" +
        newUser.username + "', '" +
        newUser.email + "')",
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res.insertId);
            }
        });
};

User.getAllUsers = function (result) {
    sql.query("SELECT id, username FROM user", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = User;