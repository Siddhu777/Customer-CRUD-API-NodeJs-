var conn = require('../../config/db.config');

var PostCode = function(PostCodedetails){
    this.PostCode = PostCodedetails.PostCode;
    this.StateId = PostCodedetails.StateId;
    this.CityId = PostCodedetails.CityId;
    this.CreatedDate = new Date();
    this.IsActive = PostCodedetails.IsActive ? PostCodedetails.IsActive : 1;
}


//get State And City by PostCode
PostCode.getStateCityById = (id) => {
    return new Promise((resolve,reject) => {
        conn.query('select s.State,c.City FROM tbladdress as a JOIN tblcity as c on a.CityId = c.CityId JOIN tblstate as s on s.StateId = a.StateId WHERE PostCode =?',id,(err,res) => {
            if(err){
                return reject(err)
            }else{
                return resolve(res)
            }
        })
    })
}


module.exports = PostCode;