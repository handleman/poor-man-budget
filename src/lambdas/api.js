'use strict';
//login/logout/register API
const login = require('./login.js');
const logout = require('./logout.js');
const register = require('./register.js');

// debit api
const getMonthlyDebitList = require('./getMonthlyDebitList.js');
const postMonthlyDebit = require('./postMonthlyDebit.js');
const deleteDebit = require('./deleteDebit.js');

//obligations api
const getMonthlyObligationList = require('./getMonthlyObligationList.js');
const postMonthlyObligation = require('./postMonthlyObligation.js');
const deleteObligation = require('./deleteObligation.js');

//credits api
const getMonthlyCreditList = require('./getMonthlyCreditList.js');
const postCredit = require('./postCredit.js');
const deleteCredit = require('./deleteCredit.js');


module.exports.login = login;
module.exports.logout = logout;
module.exports.register = register;


module.exports.getMonthlyDebitList = getMonthlyDebitList;
module.exports.postMonthlyDebit = postMonthlyDebit;
module.exports.deleteDebit = deleteDebit;

module.exports.getMonthlyObligationList = getMonthlyObligationList;
module.exports.postMonthlyObligation = postMonthlyObligation;
module.exports.deleteObligation = deleteObligation;

module.exports.getMonthlyCreditList = getMonthlyCreditList;
module.exports.postCredit = postCredit;
module.exports.deleteCredit = deleteCredit;
