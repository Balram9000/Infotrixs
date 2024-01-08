let data;
const inputBox = document.getElementById("input-box")
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("StateName");
const cityName = document.getElementById("CityName");
const Humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windspeed");
const Temperature = document.getElementById("temperature");
const logoImage = document.getElementById("logoimage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value) {
        alert("Please Enter The City Name");
        return;
    }
    const City = inputBox.value;
    // Fetch Details
    const fetchData = await fetch(`http://api.weatherapi.com/v1/current.json?key=41af5e93fd144321b09162814240801&q=Hyderabad`);
    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

    // Displaying the Data in html
    countryName.innerHTML = data.location.country;
    stateName.innerHTML = data.location.region;
    cityName.innerHTML = data.location.name;
    Humidity.innerHTML = data.current.humidity;
    windSpeed.innerHTML = data.current.wind_kph;
    Temperature.innerHTML = data.current.temp_c;
    logoImage.src = data.current.condition.icon;
    weatherStatus.innerHTML = data.current.condition.text;

    // End.
};


