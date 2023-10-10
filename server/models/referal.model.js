module.exports = (sequelize, DataTypes) => {
    const Referal = sequelize.define('Referal',{
    referralId: {
      type: DataTypes.STRING,
      //Set it to be unique
    },
    referralLink: {
      type: DataTypes.STRING,
      //Set it to be unique
    },
  });

  Referal.associate = (models) => {
    Referal.belongsTo(models.Users, {
        foreignKey: {
            allowNull: false,
        },
    });
  }

  return Referal;
}