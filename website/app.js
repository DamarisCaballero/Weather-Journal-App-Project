
     //global variables//
    const apiKey = "&appid=a9a2c0598720047fa9f01191e0f24ef7&units=imperial";
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
        }) catch(catchError);
    }
    }













/////////////////////////////////////////////////////////////////////
    const projectData = async(data)=>{
     try{
        if(data.cod != 200){
            return data;
        }
        
            const info = {
                date: newDate,
                temp: Math.round(data.main.temp),
                content: feelings.value,
                city: data.name,
                weather: data.weather[0].description,
                country: data.sys.country,
             };
             return info;
        
    }catch(e){
        console.log(e);
    }
};


const postData = async (url='', data={})=>{
    const response = await fetch(url, {
        method: 'POST',
        credentials:"same-origin",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    });
    try {
        const result = await response.json();
        return result;
    }catch (err) {
        console.error(err);
    }
};


const retrieveData = async (url) => {
   const response = await fetch(url);
   try{
       const result = await response.json();
       return result;
   }catch (err) {
       console.error(err);
   }
};

const updateUI = async (info) => {
    if(!info.message){
        city.innerHTML = info.city + ", " + info.country;
        weather.innerHTML = info.weather;
        temp.innerHTML = `${info.temp}&#176`;
        content.innerHTML = info.content? info.content  : "What do you feel &#128517;";
        date.innerHTML = info.date;
        message.innerHTML = "";
        document.querySelector(".weather-info").style.opacity = "1";
        setTimeout(async ()=> {
        document.querySelector(".api-input").style.opacity = "1";
            document.querySelector(".api-input").style.display="flex";
            document.querySelector(".api-input").scrollIntoView();
        }, 1000);
        if(info.temp < 32){
            document.querySelector("img").setAttribute("src", "./images/snow.png");
        }else if(info.temp>80){
            document.querySelector("img").setAttribute("src", "./images/hot.png");
        }else{
            document.querySelector("img").setAttribute("src", "https://freepngimg.com/thumb/weather/23698-6-weather-transparent-background.png");
        }
    }else{
        document.querySelector(".weather-info").style.opacity = "1";
        setTimeout(async ()=> {
        document.querySelector(".api-input").style.opacity = "0";
            document.querySelector(".api-input").style.display="none";
            message.innerHTML = info.message;
        },1000);
   
    }
};

generate.addEventListener("click", (e)=>{
    e.preventDefault();
    const madeURL = `${baseURI}${zip.value},${country.value}${key}`;
    getData(madeURL);
    then((data)=>{
    projectData(data);
    then((info)=>{
   
    postData("/add", info);
    then((data)=>{
    
        retrieveData("/all");
        then(data=>{
    
        updateUI(data);
        });
    });
    });
    
    });
});

 