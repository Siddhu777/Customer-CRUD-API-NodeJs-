const express = require('express');
const bodyParser = require('body-parser')
//create express app
const app = express()

var cors = require('cors');
app.use(cors())

//setup the server port
const port = process.env.PORT || 5000;

//parse request data  content type applcation/json
app.use(bodyParser.json());
//parse request data content type applcation/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//define root route
app.get('/', (req,res) => { 
    res.send("hello World ")
})

//import Postcode route
const PostcodesRoute = require('./src/routes/post-code..route')
//Create Postcode routes
app.use('/api/get_postcode_details', PostcodesRoute)

//import Pan Details route
const PanDetailsRoute = require('./src/routes/pan-details.route')
//Create Pan Details routes
app.use('/api/verify_pan', PanDetailsRoute)



//listen to the port
app.listen(port, () =>{
    console.log(`Express Server Is Runnig At Port ${port}`);
})