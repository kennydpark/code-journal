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

// feature 2
// var newEntryAnchor = document.querySelector('.button-new');
var body = document.querySelector('body');
var allView = document.querySelectorAll('.view');
// var entriesAnchor = document.querySelector('.entries-anchor');

// newEntryAnchor.addEventListener('click', switchView);
// function switchView(event) {
//   var dataView = event.target.getAttribute('data-view');
//   for (var i = 0; i < allView.length; i++) {
//     if (allView[i].getAttribute('data-view') === dataView) {
//       allView[i].className = 'view';
//     } else {
//       allView[i].className = 'view hidden';
//     }
//   }
// }

// function switchView(event) {
// entriesView.className = 'entries hidden';
// for (var i = 0; i < allView.length; i++) {
//   if (allView[i].getAttribute('') === dataView {
//     allView[i].className = 'view'
//   } else {
//     allView[i].className = 'view hidden'
//   }
// }
// }

body.addEventListener('click', switchView);
function switchView(event) {
  var dataView = event.target.getAttribute('data-view');
  if (event.target.matches('.new-anchor')) {
    for (var i = 0; i < allView.length; i++) {
      if (allView[i].getAttribute('data-view') === dataView) {
        allView[i].className = 'view';
      } else {
        allView[i].className = 'view hidden';
      }
    }
  } else if (event.target.matches('.entries-anchor')) {
    for (var x = 0; x < allView.length; x++) {
      if (allView[x].getAttribute('data-view') === dataView) {
        allView[x].className = 'view';
      } else {
        allView[x].className = 'view hidden';
      }
    }
  }
}
