  // YOUR CODE GOES HERE

let updateWidget2 = function(data) {

  console.log("Got weather data: ", data)

      //weatherPic = '.card-img-top bg-primary img-fluid'
      currentCity = data.name
      currentTemp = Math.round(data.main.temp)
      weatherCode = data.weather[0].icon
      weatherLink = ("http://openweathermap.org/img/w/"+weatherCode+".png")

      console.log(weatherLink)
      console.log(weatherCode)
      //weatherURL = http://openweathermap.org/img/w/01d.png

      $('.card-text').html("It is "+ currentTemp +" degrees outside.")
      $('.card-title').html(currentCity)
      $('.card-img-top').attr("src",weatherLink)


    //  document.getElementById("weatherPic").src="http://openweathermap.org/img/w/"+weatherCode+".png";

    //$(weatherPic).attr("http://openweathermap.org/img/w/"+weatherCode+".png")

      //console.log(weatherPic)

      //$(".card-img-top bg-primary img-fluid").attr("src","http://openweathermap.org/img/w/"+weatherCode+".png")

//<img class="card-img-top bg-primary img-fluid" src="http://openweathermap.org/img/w/01d.png">
        console.log(currentCity, data)
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

  // YOUR CODE GOES HERE

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.
  /*
    let updateWidget = function(data) {

    console.log("Got weather data: ", data)

  //YOUR code

      currentTemp = Math.round(data.main.temp)
      currentIcon = data.weather[0].icon
  //  let currentURL = http://openweathermap.org/img/w/01d.png

        $('.card-text').html("It is "+ currentTemp +" degrees outside.")

        //  console.log(navigator.geolocation)

  }
  */

/*
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
