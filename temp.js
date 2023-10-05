// Usage: Replace these coordinates with your desired values
var currentLat = 37.7749;  // Replace with your current latitude
var currentLng = -122.4194; // Replace with your current longitude
var destinationLat = 34.0522; // Replace with the destination latitude
var destinationLng = -118.2437; // Replace with the destination longitude



  const directionsButton = document.getElementById("getdirections");
  directionsButton.innerText = "Get Directions";
  directionsButton.addEventListener("click", function() {
    openGoogleMapsDirections(currentLat, currentLng, destinationLat, destinationLng);
  });
  






function openGoogleMapsDirections(lat, lng, destinationLat, destinationLng) {
  // Current location coordinates
  var currentLocation = lat + "," + lng;

  // Destination coordinates
  var destination = destinationLat + "," + destinationLng;

  // Google Maps URL for directions
  var mapsUrl = "https://www.google.com/maps/dir/" + currentLocation + "/" + destination;

  // Open the URL in a new tab or window
  window.open(mapsUrl, "_blank");
}



