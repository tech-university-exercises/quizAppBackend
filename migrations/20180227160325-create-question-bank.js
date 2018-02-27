module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('question_banks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    questionId: {
      type: Sequelize.INTEGER,
      unique: true,
    },
    question: {
      type: Sequelize.STRING,
    },
    options: {
      type: Sequelize.JSON,
    },
    correct: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('question_banks'),
};
