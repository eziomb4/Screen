// Make an HTTP request to the API
setInterval(() => {


fetch('https://ipapi.co/json/')
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Extract latitude and longitude
    const latitude = data.latitude;
    const longitude = data.longitude;

    // Log the results
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
    // document.querySelector('.latitude').innerHTML = `${latitude}`;
    // document.querySelector('.longitude').innerHTML = `${longitude}`;
})

.catch(error => {
    // Log any errors that occurred during the fetch
    console.error('Error:', error);
});
}, 1000);
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var dataref1 = database.ref(LAT);
var dataref2 = database.ref(LNG);

dataref1.on('value', function(getdata1){
  var lati = getdata1.val();
  document.querySelector('.latitude').innerHTML = lati
})
dataref2.on('value', function(getdata2){
  var long = getdata2.val();
  document.querySelector('.longitude').innerHTML = long
})