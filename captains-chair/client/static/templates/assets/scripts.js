const URI = "http://localhost:5000/";

$(document).ready(() => {
  getDate();
  getCurrentWeather();
  getTwitterTrends();
});

function getDate() {
  $.get(URI + "date/long", (data, status) => {
    $(".date-header").html("<h1>" + data.date + "</h1>");
  });
}

function getCurrentWeather() {
  $.get(URI + "/weather/current", (data, status) => {
    $(".icon").html("<img src='http://openweathermap.org/img/wn/" + data.icon + "@2x.png'" + "/>");
    $(".weather").html("<ul>" + 
      "<li>" + data.weather + "</li>" +
      "<li>Temp: " + data.temp + " Feels like: " + data.feels_like + "</li>" +
      "<li>Sunrise: " + data.sunrise + " Sunset: " + data.sunset + "</li>");
  });
}

function getTwitterTrends() {
  $.get(URI + "/twitter/trends", (data, status) => {
    const trends = data[0].trends;
    console.log(trends);
    for(trend in trends) {
      
    }
  });
}
