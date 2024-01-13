function maps(){
    location.href="mapstyles.html";
    // window.location.replace("https://www.google.com/maps")
    window.history.go(-1);
}
let homee = document.querySelector(".home");
 homee.addEventListener('click',function(){
 alert("Home");
  });
let navigation = document.getElementById("navigation").addEventListener('click',function(){
    alert("Navigation Pressed");
    location.href="mapmain.html";
//   location.replace("https://www.google.com/maps");
// let map = "https://www.google.com/maps";
  });
let connect = document.querySelector(".connect");
  connect.addEventListener('click',function(){
  alert("Connect");
  window.open("http://localhost:5173/");
  // window.open("https://www.youtube.com/");
  });
let more = document.querySelector(".more");
  more.addEventListener('click',function(){
    console.log("Pressed");
  alert("More");
  location.href="Filemain.html";
  });

  let carname = document.getElementById('CarName').innerHTML = "<h1>ASHWAMEGHA</h1>";
  
function home() {
    alert("Press Home");
}
document.getElementById("Backward").onclick= function() {
    window.history.back(-1)
}
document.getElementsByClassName("Home").onclick= function() {
    alert('Pressed Home');
    location.href="main.html";
}
document.getElementsByClassName("More").onclick= function(){
    location.href="main.html";
}
// Weather Detail 
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const api = `bd06176ba8ae2dffef62796b4c29c3d8`;
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

searchbtn.addEventListener.onclick=function(){
    console.log("Button Pressed");
}

async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${api}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value);
})
checkWeather();
// Weather Function Ends Here

// Time Function (
let time = document.querySelector(".time");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
},1000);



