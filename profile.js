const countryBtn = document.querySelector('#country');
const activityBtn = document.querySelector('#activity');
const foodBtn = document.querySelector('#food');

function countryAlert(evt) {
    evt.preventDefault();

    alert('A trip this year goes to \'New Zealand\'!');
}

function activityAlert(evt) {
    evt.preventDefault();

    alert('You will be doing a Scuba Diving!');
}

function foodAlert(evt) {
    evt.preventDefault();

    alert('Fried Kiwi Salad will be provided!');
}

countryBtn.addEventListener('click', countryAlert);
activityBtn.addEventListener('click', activityAlert);
foodBtn.addEventListener('click', foodAlert);