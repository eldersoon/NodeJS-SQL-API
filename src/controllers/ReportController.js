const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {

    async show(req, res){
        //Here we must to find all email ended with 'gmail.com'
        //And live in Maceio street
        //And users that know React JS or React Native 

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: { 
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include: [
                { association: 'addresses', where: {street: 'Rua Maceio'} },
                { 
                    association: 'techs',
                    required: false, 
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    }
                }
            ]
        })

        return res.json(users);
    }
}