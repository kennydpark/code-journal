/* global data */
/* exported data */

var photoURL = document.querySelector('#photo-url');
var img = document.querySelector('img');
var newEntryForm = document.querySelector('form');

photoURL.addEventListener('input', photoURLUpdate);

function photoURLUpdate(event) {
  img.setAttribute('src', event.target.value);
  if (img.getAttribute('src') === '') {
    img.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}

newEntryForm.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  var inputValues = {};
  var titleValue = newEntryForm.elements.title.value;
  var urlValue = newEntryForm.elements['photo-url'].value;
  var notesvalue = newEntryForm.elements.notes.value;
  inputValues.title = titleValue;
  inputValues.url = urlValue;
  inputValues.notes = notesvalue;
  inputValues.entryId = data.nextEntryId;
  data.entries.unshift(inputValues);
  data.nextEntryId++;
  newEntryForm.reset();
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
}
