const mergeAnswersAndRating = require('./getQuestionAndAnswer');
const fetchDB = require('./getAnswersFromDB');
const loginOrSignup = require('./loginOrSignup');
const markAnswer = require('./markAnswer');
const setScore = require('./setScore');
const getScore = require('./getScorers');
const getHighScore = require('./getHighScorers');

module.exports = [].concat(
  mergeAnswersAndRating, fetchDB, loginOrSignup,
  markAnswer, setScore, getHighScore, getScore,
);
