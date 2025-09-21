module.exports = (sequelize, DataTypes) => {
  const Argument = sequelize.define('Argument', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    debate_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    timestamps: true,
    freezeTableName: true,
    tableName: "arguments",
  });

  Argument.associate = models => {
    Argument.belongsTo(models.User, { foreignKey: 'user_id', as: 'author' });
    Argument.belongsTo(models.Debate, { foreignKey: 'debate_id', as: 'debate' });
  };

  return Argument;
};