const { type } = require("express/lib/response");

     //global variables//
    const apiKey = "4c192ee4cdf6417351e8c9e5e0e46371";
    const apiUrl = " http://localhost:4800";

    const zipCodeElement = document.getElementById('zip');
    const feelingsCodeElement = document.getElementById('feelings');
    const dateElement = document.getElementById('date');
    const tempElement = document.getElementById('temp');
    const contentElement = document.getElementById('content');

    const catchError =(error) => console.log.error('Some error has been => ', error);

    //event listener to add function to existing 

    document.getElementById('generate').addEventListener('click', onGenerate);

    //post data to API
    function onGenerate(){
        debugger
        let data = {
            zipCode: zipCodeElement.value,
            content: feelingsCodeElement.value,
            date: new Date()
        };

     //post data to api for f\get zip code
     getZipCodeInformation(data.zipCode)
     .then(zipInfo => {
        //return and show alert if city is not found
        if(zipInfo.cod != 200)
            return alert(zipInfo.message)

        //now post data to server for saving and displayin holder section
        data.temp = zipInfo.list[0].main.temp;
        postDataServer(data);
     }).catch(catchError);
    };

//get zip code information from api//
    async function getZipCodeInformation(zipCode) {
      return await
      (await 
        fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}${apiKey}`)).json()
    }


    //post data server for saving
    async function postDataServer(data) {
        debugger
        let response = await fetch (`${apiUrl}postData`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(data),   
    });
    try {
        if(!response.ok) {
            alert('Process Not Successfuly');
            return;
        }

        response.json().then(data => {
            if(response.ok)
            updateUI();//update UI now
            else
            alert('Process not Successfuly');
        }) .catch(catchError);

    } catch(error){
        catchError(error);
    }
    }

    //update UI//

    async function updateUI(){
        debugger
        let response = await fetch(`${apiUrl}getALL`);
        try{
            response.json().then(data => { 
                dateElement.innerHTML = `Date Is: ${data.date}`;
                tempElement.innerHTML = `Temp Is: ${data.temp}`;
                contentElement.innerHTML = `My feelings Is: ${data.content}`;
            }).catch(catchError);
        }catch (error) {
            catchError(error);
        }
    } 
    