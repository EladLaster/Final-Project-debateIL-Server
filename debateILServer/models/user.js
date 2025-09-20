
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    password: { type: DataTypes.STRING, allowNull: false },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: { 
      type: DataTypes.ENUM('male', 'female'), 
      allowNull: false, 
      defaultValue: 'male' 
    },
    avatarUrl: { 
      type: DataTypes.STRING, 
      allowNull: true 
    }
  }, {
    timestamps: true
  });

 User.associate = models => {
  User.hasMany(models.Argument, { foreignKey: 'user_id', as: 'arguments' });
};


  return User;
};
