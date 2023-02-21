 const cors = require ('cors');
 const express = require('express');
 const bodyParser = require('body-parser');
 const path= require('path')

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
 app.use(express.static(path.join(__dirname, '..','website')));

 //setup server "node"
 app.listen(port, () => {
    console.log(`server Running On: http://localhost:${port}`);
 });



 //require express to run server 

 //get all data by the localhost

 app.get('/getAll', (request, response) => {
    console.log('here to get all')
    response.send(projectData).status(200).end();
 });





 //post data
 app.post('/postData', (request, response) => {
    console.log('here to get post data', request.body)

    //post data now
    projectData={
        temp:request.body.temp,
        date:request.body.date,
        content:request.body.content
  };
  response.send(projectData).status(200).end();
 });