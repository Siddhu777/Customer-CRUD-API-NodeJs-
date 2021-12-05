var conn = require('../../config/db.config');

var PanDetails = function(pan_dtls){
    this.PanNumber = pan_dtls.PanNumber;
    this.Name = pan_dtls.Name;
    this.CreatedDate = new Date();
    // this.created_at = new Date();
    // this.updated_at = new Date();
    this.IsActive = pan_dtls.IsActive ? pan_dtls.IsActive : 1;
}


//get pan details by Pan
PanDetails.getPanDetailsById = (id) => {
    return new Promise((resolve,reject) => {
        conn.query('select Name FROM tblpandetails WHERE PanNumber=?',id,(err,res) => {
            if(err){
                return reject(err)
            }else{
                return resolve(res)
            }
        })
    })
}


module.exports = PanDetails;