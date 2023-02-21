setTimeout(() =>{
    document.querySelector("body").style.opacity = '1';
  },300);
  


const generate = document.querySelector("#generate");
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const feelings = document.getElementById('feelings');
const coming = document.querySelector(".coming");
const key = "&appid=a9a2c0598720047fa9f01191e0f24ef7&units=imperial";
const temp = document.getElementById('temp');
const content = document.getElementById('content');
const city = document.getElementById('city');
const weather = document.getElementById('weather');
const date = document.getElementById('date');
const errorMessage = document.getElementById('message');
const baseURI = "https://api.openweathermap.org/data/2.5/weather?zip=";
const requestForm = "https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}";
let d = new Date();
let newDate = d.toDateString();


const getData = async (url) =>{
    try {   
           const response = await fetch(url);
            const result = await response.json();
            if(result.cod != 200){
                return result;
                
            }
            return result;
        }catch(e) {
        console.log(e.message);
    }
};
/* Global Variables */

// Create a new date instance dynamically with JS
//let d = new Date();
//let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();