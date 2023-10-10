module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Users',{
        fullname: {
            type: DataTypes.STRING,
            allownull: false,
        },
        email: {
            type: DataTypes.STRING,
            allownull: false,
        },
        password: {
            type: DataTypes.STRING,
            allownull: false,
        },
        refId: {
            type: DataTypes.STRING,
            allownull: false,
        },
    })
};

User.associate = (models) => {
    User.hasMany(models.Referal, {
        onDelete: 'cascade',
    });

    return User;
};