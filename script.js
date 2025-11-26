/* Project 3 JavaScript
   Contains logic for the "Questions" button and Google Maps API
*/

// --- 1. Event Listener for Questions Button ---
document.addEventListener('DOMContentLoaded', function() {
    // We check if the button exists on the page before adding the listener
    // to prevent errors on pages where the button doesn't exist.
    var questionBtn = document.getElementById('questionBtn');

    if (questionBtn) {
        questionBtn.addEventListener('click', function() {
            // Alert message on two lines using \n
            alert("If you have questions, contact me at:\neffiongmutanda@gmail.com");
        });
    }
});

// --- 2. Google Maps Initialization ---
// This function is called by the Google Maps API script in map.html
function initMap() {
    // Feature 1: Custom coordinates (IIT Chicago)
    var iitLocation = { lat: 41.8349, lng: -87.6270 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: iitLocation,
        // Feature 2: Hybrid Map Type (Satellite + Roads)
        mapTypeId: 'hybrid' 
    });

    // Feature 3: A Marker at the location
    var marker = new google.maps.Marker({
        position: iitLocation,
        map: map,
        title: 'Illinois Institute of Technology'
    });

    // Feature 4 (Bonus): InfoWindow when clicking the marker
    var infoWindow = new google.maps.InfoWindow({
        content: '<h3>IIT Campus</h3><p>This is where I study Game Design!</p>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });
}