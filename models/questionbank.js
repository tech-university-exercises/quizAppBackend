module.exports = (sequelize, DataTypes) => {
  const questionBank = sequelize.define('questionBank', {
    questionId: {
      type: DataTypes.INTEGER,
      unique: true,
    },
    question: DataTypes.STRING,
    options: DataTypes.STRING,
    correct: DataTypes.STRING,
  }, {
    classMethods: {
      associate(/* models */) {
        // associations can be defined here
      },
    },
  });
  return questionBank;
};
