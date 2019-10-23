const { Model, DataTypes } = require('sequelize');

/**
 * INIT RECEIVES sequelize - this is the connection
 * with the DATABASE 
 */

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models){
        this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addresses' }),
        this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })
    }
}

module.exports = User;