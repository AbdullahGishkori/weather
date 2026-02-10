const apikey= "991b66c5c094da877e61c8e42f9aaaca"

function getWeather(){

    let city= document.getElementById("city").value; 
if(city==="")
{
 
    alert("please entry a city name");
return;
}
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
      document.getElementById("cityname").innerText=data.name
      document.getElementById("temp").innerText="Temperature:" + data.main.temp + " °C";
            document.getElementById("weather").innerText = "Weather: " + data.weather[0].description;
})
}
