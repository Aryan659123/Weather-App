const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');


const datahide = document.querySelector('.middle_layer');
 
    
            // Updating       
            let curr = document.getElementById("date");
            let now = new Date();
            const getCurrent = ()=> { 
            // *** To get Current day from Current date :- 
            var weekday = new Array(7);
            weekday[0] = "Sun";
            weekday[1] = "Mon";
            weekday[2] = "Tue";
            weekday[3] = "Wed";
            weekday[4] = "Thur";
            weekday[5] = "Fri";
            weekday[6] = "Sat";
            // const d = new Date(); // Date on pc
            // console.log(d.toLocaleDateString()); // Date on pc = 1/11/2024
            // console.log(d.toLocaleTimeString()); // Time on pc = 10:45:48 AM
            // console.log(d.getDay()); // Number for day like 4 for thursday 
            // So console.log(now.getDay()); // Prints day number 0-Sn and 6-St
            var day = weekday[now.getDay()]; // Prints name of day from weekday Array using day number
    
            // *** To get Current month from Current date 
            var months = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ];
            var month = months[now.getMonth()]; // start from 1-jan to 12-dec'
    
            // *** 
            var date = now.getDate();
            return `${day}   &nbsp &nbsp &nbsp  ${month} ${date}`;
          };
          curr.innerHTML = getCurrent(); // Calling above function to see results
          // getCurrent() returns day, month, date, hours, mins, periods
          // and we put getCurrent() in curr and curr = document.getElementById("date") which is where we put it in webpage
          // Also we put data of getCurrent in getCurrent by

          
const getInfo = async(event) => {
    event.preventDefault();
    // Create account on openweathermap API :- 
    // Current Weather for API se API Link :-  
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    // In API keys :- 
    // ca17ef9f36265517487e90dd3b5ff1b8
    // Put API key and Location name in that link :- 
    // https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=ca17ef9f36265517487e90dd3b5ff1b8
    // Type this website above then it will show data of pune or whatever city name we write
    
    let cityVal = cityName.value; 
    if(cityVal === ""){
        city_name.innerText = "Plz, Write city name before you search";
        datahide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ca17ef9f36265517487e90dd3b5ff1b8`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp ;
            
            
            const tempMood = arrData[0].weather[0].main
            // Condition to check sunny or cloudy 
            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class= 'fas  fa-sun'  style='color: #eccc68;'></i>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class= 'fas  fa-cloud'  style='color: #ADD8E6;'></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class= 'fas  fa-cloud-rain'  style='color: #a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class= 'fas  fa-sun'  style='color: #eccc68;'></i>";
            }

            datahide.classList.remove('data_hide');
        }
        catch{
            city_name.innerText = "Plz, Write city name correctly"
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);



