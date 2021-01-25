const homeService = require('../Service/homeService')

async function getNames(req, res){
    try{
        let result = await homeService.getNames(req.query['name']);
        if(result){
            res.status(200).json({
                success: true,
                message: result
            })
        }else{
            throw new Error(`Results were not found!!!`);
        }
    }catch(err){
        res.status(400).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = { getNames }