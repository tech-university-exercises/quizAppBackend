module.exports = (sequelize, DataTypes) => {
  const questionBank = sequelize.define('question_bank', {
    questionId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    question: DataTypes.STRING,
    options: DataTypes.JSON,
    correct: DataTypes.STRING,
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return questionBank;
};
