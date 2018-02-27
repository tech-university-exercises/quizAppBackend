module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('questionBanks', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    questionId: {
      unique: true,
      type: Sequelize.INTEGER,
    },
    question: {
      type: Sequelize.STRING,
    },
    options: {
      type: Sequelize.STRING,
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
  down: queryInterface => queryInterface.dropTable('questionBanks'),
};
