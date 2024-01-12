const restaurant = document.querySelector('#restaurant');

const dinings = ["Viera on Main", "Bluefin Sushi And Sake Bar", "Pate Restaurant", "The Chatham Cut", "The Chatnam Bar"];

function randomSelect(evt) {
    evt.preventDefault();
    const result = dinings[(Math.floor(Math.random() * dinings.length))];
    document.getElementById("restaurant-display").innerHTML = result;
}

restaurant.addEventListener('click', randomSelect);