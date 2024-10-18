//Get the event list element
const eventList = document.getElementById('event-list');
//Get the create event form element
const createEventForm = document.getElementById('create-event-form');
//Get the create event button element
const createEventBtn = document.getElementById("create-event-btn");
//Add event listener ti the create event button
createEventBtn.addEventListener('click', (e) => {
e.preventDefault();
//Get the event name, date, time, and description from the form
const eventName =document.getElementById('event-name').value;
const eventDate =document.getElementById('event-date').value;
const eventTime =document.getElementById('event-time').value;
const eventDescription =document.getElementById('event-description').value;
//Create a new event object
const event = {
	name: eventName,
	date: eventDate,
	time: eventTime,
	description: eventDescription,
};
