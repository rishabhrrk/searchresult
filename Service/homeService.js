const Names = require('../Model/names');
const { Sequelize,Op } = require("sequelize");

class HomeService{
    async getNames(name){
        try{
            const rows = await Names.findAll({
                attributes: [
                    'name',
                    [Sequelize.fn('SUM',Sequelize.col('count')), 'count']
                ],
                where: {
                    Name: {
                        [Op.like]: '%' + name + '%'
                    } 
                },
                group: 'name',
                order: [[Sequelize.fn('SUM',Sequelize.col('count')),'DESC']],
                limit: 7
            });
            return rows;
        }catch(err){
            console.log(`${err}`);
        }
    }
}

module.exports = new HomeService();