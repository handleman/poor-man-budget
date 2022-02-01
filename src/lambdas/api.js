'use strict';
//login/logout/register API
const login = require('./login.js');
const logout = require('./logout.js');
const register = require('./register.js');

// debit api
const getMonthlydDebitList = require('./getMonthlydDebitList.js');

module.exports.login = login;
module.exports.logout = logout;
module.exports.register = register;


module.exports.getMonthlydDebitList = getMonthlydDebitList;
