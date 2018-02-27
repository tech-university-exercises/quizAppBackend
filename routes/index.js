const mergeAnswersAndRating = require('./getQuestionAndAnswer');
const fetchDB = require('./getAnswersFromDB');
const loginOrSignup = require('./loginOrSignup');

module.exports = [].concat(mergeAnswersAndRating, fetchDB, loginOrSignup);
