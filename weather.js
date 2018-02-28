  // YOUR CODE GOES HERE

let updateWidget2 = function(data) {

  console.log("Got weather data: ", data)

      currentCity = data.name
      currentTemp = Math.round(data.main.temp)
      weatherCode = data.weather[0].icon
      weatherLink = ("http://openweathermap.org/img/w/"+weatherCode+".png")
        //Reference only: weatherURL = http://openweathermap.org/img/w/01d.png

          console.log(weatherLink)
          console.log(weatherCode)
          console.log(currentCity)
          console.log(currentTemp)

      $('.card-text').html("It is "+ currentTemp +" degrees outside.")
      $('.card-title').html(currentCity)
      $('.card-img-top').attr("src",weatherLink)

    // Found this alternate way to change img source but was not needed
    //  document.getElementById("weatherPic").src="http://openweathermap.org/img/w/"+weatherCode+".png";

  }


  let getWeather = function(data) {

    navigator.geolocation.getCurrentPosition(position)

  }


  let position = function(location) {

    let latitude = location.coords.latitude.toFixed(4)
      console.log(latitude)
    let longitude = location.coords.longitude.toFixed(4)
      console.log(longitude)

    let apiKey = 'addb3bc4132b4fe7aa66481701aadafa'; // Added my key
    let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'

    weatherServiceURL += 'lat=' + latitude
    weatherServiceURL += '&lon=' + longitude
    weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget2).catch(displayError);

  }

$('#get_forecast').on('click',getWeather);


  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.


/* COMMENTED OUT THE FIXED LOCATION FROM PART 1 - FOR REFERENCE ONLY
let getWeather = function(event) {
  let latitude = '48.8566';
  let longitude = '2.3522';
  let apiKey = 'addb3bc4132b4fe7aa66481701aadafa'; // Added my key

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget2).catch(displayError);
  }
*/

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
