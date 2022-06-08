module.exports = (sequelize, Sequelize) => {
  const People = sequelize.define(
    'people',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
  return People;
};
