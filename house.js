


const tostore = localStorage.getItem('search');


const arr=tostore.split(" ");



const searchvalue = arr[0];
const fromdate=arr[1];
const todate=arr[2];
const noguest=arr[3];






const housedetailss = localStorage.getItem('housedetails');
const housejson=JSON.parse(housedetailss);
console.log(housejson);

const apikey="AIzaSyBofCHZmE6v8n2hpms9enYnEcA-VI4-ehU";

const detailsofhouse = document.getElementById("house-detailsid");


const card=document.createElement("div");
card.classList.add("house-details");


card.innerHTML=`
<div class="house-title">
    <h1>${housejson.name}</h1>
    <div class="row">
        <div id="superhost" >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
            <span>${housejson.rating}⭐  ${housejson.reviewsCount} Reviews</span>
        </div>
        <div >
            <p>Location: ${housejson.address}</p>
        </div>
    </div>
</div>
<div class="gallery">
    <div class="gallery-img-1"><img src=${housejson.images[0]}></div>
    <div><img src=${housejson.images[1]}></div>
    <div><img src=${housejson.images[2]}></div>
    <div><img src=${housejson.images[3]}></div>
    <div><img src=${housejson.images[4]}></div>
  
</div>
<div class="small-details">
    <h2>${housejson.type}</h2>
    <p>${noguest} guest &nbsp; &nbsp; ${housejson.beds} beds &nbsp; &nbsp; ${housejson.bedrooms} bedrooms &nbsp; &nbsp; ${housejson.bathrooms} bathroom</p>
  
    <h4>$ ${housejson.price.rate} / day</h4>
</div>
<hr class="line">
<form class="check-form">
    <div>
        <label>Check-in</label>
        <input type="text" placeholder="${fromdate}">
    </div>
    <div>
        <label>Check-out</label>
        <input type="text" placeholder="${todate}">
    </div>
    <div class="guest-field">
        <label>Guest</label>
        <input type="text" placeholder="${noguest} guest">
    </div>
    <button id="costbreakdownbtn" type="submit">Cost BreakDown</button>
</form>

<ul class="details-list">
    <li><i class="fas fa-home"></i>Entire Home
        <span>You will have the entire flat for you.</span>
    </li>
    <li><i class="fas fa-paint-brush"></i>Enhanced Clean
        <span>This host has committed to staybnb's cleaning process.</span>
    </li>
    <li><i class="fas fa-map-marker-alt"></i>Great Location
        <span>90% of recent guests gave the location a 5 star rating.</span>
    </li>
    <li><i class="fas fa-heart"></i>Great Check-in Experience
        <span>100% of recent guests gave the check-in process a 5 star rating.</span>
    </li>
</ul>

<hr class="line">


<ul class="details-list">
    <li><i class="fas fa-home"></i>What this place offers
        <span>${housejson.previewAmenities}</span>
    </li>
</ul>



<hr class="line">

<div id="map" class="map">
    <h3>Location on map</h3>
     
    <b>${housejson.address}</b>
    <p>It's like a home away from home.</p>
</div>

<div class=directioncontainer>
<button id="direction" type="submit">Get Directions</button>
</div>

<hr class="line">

<div class="host">
    <img src=${housejson.hostThumbnail}>
    <div>
        <h2>${housejson.name}</h2>
        <p><span>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </span>&nbsp; &nbsp; ${housejson.reviewsCount} reviews &nbsp; &nbsp; Response rate 100% &nbsp; &nbsp; Response time: 60 min</p>
    </div>
</div>
<a href="#" class="contact-host">Contact Host</a>

`;


// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: housejson.lat, lng: housejson.lng };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();


let latitude;
let longitude;

 if ("geolocation" in navigator) {
     navigator.geolocation.getCurrentPosition(function(position) {
         // Get the latitude and longitude from the geolocation data
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
           console.log(latitude,longitude)
               });
 } else {
     alert("Geolocation is not available in this browser.");
 }
const listingLocation = `${housejson.lat},${housejson.lng}`;
console.log(listingLocation);

const url=`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${latitude},${longitude}&destinations=${listingLocation}&key=AIzaSyBofCHZmE6v8n2hpms9enYnEcA-VI4-ehU`
const demo="https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=10.960896,78.0599296&destinations=13.0827,80.2707&key=AIzaSyBofCHZmE6v8n2hpms9enYnEcA-VI4-ehU";

    fetch(demo)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        //     const distance = data.rows[0].elements[0].distance.text;

        // console.log(distance);
           

        });





detailsofhouse.appendChild(card);


const costButton = document.getElementById("costbreakdownbtn");
  






costButton.addEventListener("click", (event) => {
    event.preventDefault();
    // Calculate additional fees and total cost
  const additionalFees = 10; // Assuming additional fees are 10% of base price
  const totalCost = 20;

  // Create a modal dialog box
  const modal = document.createElement("div");
  modal.style.display = "block";
  modal.style.width = "300px";
  modal.style.height = "250px";
  modal.style.backgroundColor = "#fff";
  modal.style.position = "fixed";
  modal.style.top = "50%";
  modal.style.left = "50%";
  modal.style.transform = "translate(-50%, -50%)";
  modal.style.padding = "20px";
  modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";

  // Add booking cost breakdown to the modal
  modal.innerHTML = `
      <h2>Booking Cost Breakdown</h2>
      <br>
      <p>${housejson.price.priceItems[0].title}: $${housejson.price.priceItems[0].amount}</p>
      <p>${housejson.price.priceItems[1].title}: $${housejson.price.priceItems[1].amount}</p>
      <p>${housejson.price.priceItems[2].title}: $${housejson.price.priceItems[2].amount}</p>
      <br>
      <p>Total Cost: $${housejson.price.total}</p>
      <br>
  `;

  // Add a close button to the modal
  const closeButton = document.createElement("button");
  closeButton.innerText = "Close";
  closeButton.addEventListener("click", () => modal.style.display = "none");
  modal.appendChild(closeButton);

  // Add the modal to the body
  document.body.appendChild(modal);
   
});


var currentLat = 37.7749;  // Replace with your current latitude
var currentLng = -122.4194; // Replace with your current longitude
var destinationLat = 34.0522; // Replace with the destination latitude
var destinationLng = -118.2437; // Replace with the destination longitude



  const directionsButton = document.getElementById("direction");
  directionsButton.addEventListener("click", function() {
    openGoogleMapsDirections(latitude, longitude, housejson.lat, housejson.lng);
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



const rarefinddd=document.getElementById("superhost");
if(housejson.isSuperhost)
{
    const superhostIndicator = document.createElement("span");
    
        superhostIndicator.innerText = "Superhost";
        superhostIndicator.style.color = "white";
        superhostIndicator.style.padding="4px 10px";
        superhostIndicator.style.background="#FF5361";
        superhostIndicator.style.borderRadius="15px";
        rarefinddd.appendChild(superhostIndicator);
}

if(housejson.rareFind)
{
    const rareFindIndicator = document.createElement("span");
    rareFindIndicator.id="rareFindIndicatorid"

    rareFindIndicator.innerText = "Rare Find";
    rareFindIndicator.style.color = "white";
    rareFindIndicator.style.padding="4px 10px";
    rareFindIndicator.style.background="#689043";
    rareFindIndicator.style.borderRadius="15px";
    rarefinddd.appendChild(rareFindIndicator);
}




