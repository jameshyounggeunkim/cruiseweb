const cruiseImg = document.querySelector('#cruise');

function handleSubmit(evt) {
	evt.preventDefault();

	alert('the form has been submitted successfully');
}

function imageAlert(evt) {
	evt.preventDefault();

	alert('So you want to book the JK Cruise now?')
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

cruiseImg.addEventListener('mouseover', imageAlert);