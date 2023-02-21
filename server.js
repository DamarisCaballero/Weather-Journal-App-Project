    const projectData = {};

    const express = require('express');

    const app = express();

    //parse the json files coming from the client side.......
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));

    app.use(express.static("website"));

    const cors = require('cors');
   
    app.use(cors());


    app.post('/add', async (req, res) => {
        const info = await req.body;
        projectData = info;
        res.send(projectData);
    });


    app.get("/all", async (req, res) => {
        if(projectData){
            res.send(projectData);
        }
    });


    // Setup empty JS object to act as endpoint for all routes
    // Express to run server and routes

    // Start up an instance of app

    /* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
  