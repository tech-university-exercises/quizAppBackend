const mergeAnswersAndRating = require('./getQuestionAndAnswer');
const fetchDB = require('./getAnswersFromDB');

module.exports = [].concat(mergeAnswersAndRating, fetchDB);
