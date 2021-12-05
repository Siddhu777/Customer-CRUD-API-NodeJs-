const PanDetailsModel = require('../models/pan-details.model')


//Get Company by Pan
exports.PanDetailsById = async (req,res) =>{
    try{
        const Name = await PanDetailsModel.getPanDetailsById(req.params.id);
        return res.send(Name)
    } catch (error){
        err
    }
}