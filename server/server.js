 const cors = require ('cors');
 const express = require('express');
 const bodyParser = require('body-parser');

 //listen port
 const port = 4800;

 //setup empty js objecs to act as enppoint for all routes
 projectData = {};

 //start up an intance of app
 const app = express();



 //meddleware
 //here we are configuting express to use body-parser as middle-ware
 app.use(bodyParser.urlencoded({ extends:false }));
 app.use(bodyParser.json());

 //cors
 app.use(cors());

 //inicialize the main proyect folder
 app.use(express.static('website'));

 //setup server "node"
 app.listen(port, () => {
    console.log(`server Running On: http://localhost:${port}`);
 });


