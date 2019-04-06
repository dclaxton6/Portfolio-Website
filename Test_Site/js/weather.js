$(document).ready(function(){

var lat = 0;
var lon = 0;
var temp;
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      $("#location").html("latitude: " + lat + "<br>longitude: " + lon);
      
	  //add api key here to use app
 var key = "dd3043ffba0b8b2ca884f2cfb2651f7c";
 var api = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+lon+"&appid=" + key;

  $.getJSON(api,function(data){
    
            //call to test openweather api
            //alert(data.coord.lat);
    
    var city = data.name;
    temp = Math.round((data.main.temp - 273.15) * 10)/10;
    var weather = data.weather[0].main;
    var icon = "<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>";
    
    $("#location").html(city);
    $("#temperature").html(temp);
    $("#tempType").html("°C");
    $("#weather").html(weather);
    $("#icon").html(icon);
    
    console.log(city);
    console.log(api);
	
  });
    });
  }
});

  function tempChange(){
    var currentTemp = document.getElementById("temperature").innerHTML;
    
    if(document.getElementById("tempType").innerHTML == 
"°C"){
       document.getElementById("tempType").innerHTML = "°F";
    
    var newTemp = Math.round(currentTemp * (1.8) + (32));
      console.log(newTemp);
    document.getElementById("temperature").innerHTML = newTemp;
    }else{
         document.getElementById("tempType").innerHTML = "°C";
          var newTemp = Math.round((currentTemp - 32)/ (1.8) * 10)/10;
         console.log(newTemp);
    document.getElementById("temperature").innerHTML = newTemp;
        }
  }
  