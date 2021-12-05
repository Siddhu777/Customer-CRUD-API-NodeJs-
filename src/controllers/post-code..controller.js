const PostCodeModel = require('../models/post-code.model')


//get State And City by PostCode
exports.StateCityById = async (req,res) =>{
    try{
        const address = await PostCodeModel.getStateCityById(req.params.id);
        return res.send(address)
    } catch (error){
        err
    }
}