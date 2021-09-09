/* global data */
/* exported data */

var photoURL = document.querySelector('#photo-url');
var img = document.querySelector('img');
var newEntryForm = document.querySelector('form');
var entriesView = document.querySelector('#entries-view');
var entryFormView = document.querySelector('#entry-form-view');
var ulElement = document.querySelector('ul');

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
  //
  var newEntry = renderEntry(data.entries[0]);
  ulElement.prepend(newEntry);
  //
  entriesView.className = 'view';
  entryFormView.className = 'view hidden';
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
}

// feature 2
// var newEntryAnchor = document.querySelector('.button-new');
var body = document.querySelector('body');
var allView = document.querySelectorAll('.view');
// var entriesAnchor = document.querySelector('.entries-anchor');
var noEntries = document.querySelector('.text-center');

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
    // } else if (event.target.matches('.submit-button')) {

  }
  if (data.entries === []) {
    noEntries.className = 'view';
  } else {
    noEntries.className = 'view hidden';
  }
}

// feature 2
// ---------DOM TREE------------
// <div class="row">
//   <ul>
//     <li>
//       <div class="row">
//         <div class="column-half column-entry entry-image">
//           <img src="insert url">
//         </div>
//         <div class="column-half column-entry entry-text">
//           <h3 class="font-proza title-styling">Charmander</h3>
//           <p>notes</p>
//         </div>
//        </div>
//     </li>
//   </ul>

function renderEntry(entry) {
  var entryItem = document.createElement('li');
  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');
  entryItem.appendChild(divRow);
  var columnHalfImage = document.createElement('div');
  columnHalfImage.setAttribute('class', 'column-half column-entry entry-image');
  divRow.appendChild(columnHalfImage);
  var imgRender = document.createElement('img');
  imgRender.setAttribute('src', entry.url);
  columnHalfImage.appendChild(imgRender);
  var columnHalfText = document.createElement('div');
  columnHalfText.setAttribute('class', 'column-half column-entry entry-text');
  divRow.appendChild(columnHalfText);
  var h3 = document.createElement('h3');
  h3.setAttribute('class', 'font-proza title-styling');
  columnHalfText.appendChild(h3);
  h3.textContent = entry.title;
  var p = document.createElement('p');
  columnHalfText.appendChild(p);
  p.textContent = entry.notes;
  return entryItem;
}

document.addEventListener('DOMContentLoaded', loadedPage);

function loadedPage(event) {
  var ulElement = document.querySelector('ul');

  for (var i = 0; i < data.entries.length; i++) {
    var domTree = renderEntry(data.entries[i]);
    ulElement.appendChild(domTree);
  }
}

// var submitEntry = document.querySelector('.submit-button');

// submitEntry.addEventListener('click', function (event) {
//   var ulElement = document.querySelector('ul');

//   for (var i = 0; i < data.entries.length; i++) {
//     var domTree = renderEntry(data.entries[i]);
//     ulElement.appendChild(domTree);
//   }
// });

// document.addEventListener('submit', submitEntry);

// function submitEntry(event) {
//   var ulElement = document.querySelector('ul');

//   for (var i = 0; i < data.entries.length; i++) {
//     var domTree = renderEntry(data.entries[i]);
//     ulElement.appendChild(domTree);
//   }
// }
