module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    optionsMarked: DataTypes.JSON,
    score: DataTypes.INTEGER,
    maxMarks: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return users;
};
