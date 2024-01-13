// Make an HTTP request to the API
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

    // Get the HTML element by ID
    const locationInfoElement = document.getElementById('locationInfo');

    // Update the innerHTML of the element
    locationInfoElement.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
  })
  .catch(error => {
    // Log any errors that occurred during the fetch
    console.error('Error:', error);
  });
