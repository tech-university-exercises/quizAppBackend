const mergeAnswersAndRating = require('./getQuestionAndAnswer');
const fetchDB = require('./getAnswersFromDB');
const loginOrSignup = require('./loginOrSignup');
const markAnswer = require('./markAnswer');

module.exports = [].concat(mergeAnswersAndRating, fetchDB, loginOrSignup, markAnswer);
