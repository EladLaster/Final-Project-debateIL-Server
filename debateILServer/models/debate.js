module.exports = (sequelize, DataTypes) => {
  const Debate = sequelize.define(
    "Debate",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM("scheduled", "live", "finished"),
        defaultValue: "scheduled",
        allowNull: false,
      },
      user1_id: { type: DataTypes.UUID, allowNull: true },
      user2_id: { type: DataTypes.UUID, allowNull: true },
      score_user1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      score_user2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "debates"
    }
  );

  Debate.associate = (models) => {
    Debate.hasMany(models.Argument, {
      foreignKey: "debate_id",
      as: "arguments",
    });
  };

  return Debate;
};
