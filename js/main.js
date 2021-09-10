/* global data */
/* exported data */

var photoURL = document.querySelector('#photo-url');
var img = document.querySelector('img');
var newEntryForm = document.querySelector('form');
var ulElement = document.querySelector('ul');
var body = document.querySelector('body');
var allView = document.querySelectorAll('.view');
var noEntries = document.querySelector('#no-entries');

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
  var newEntry = renderEntry(data.entries[0]);
  ulElement.prepend(newEntry);
  switchView('entries');
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
}

function renderEntry(entry) {
  var entryItem = document.createElement('li');
  entryItem.setAttribute('data-entry-id', entry.entryId);
  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');
  entryItem.appendChild(divRow);
  var columnHalfImage = document.createElement('div');
  columnHalfImage.setAttribute('class', 'column-half column-entry');
  divRow.appendChild(columnHalfImage);
  var imgRender = document.createElement('img');
  imgRender.setAttribute('src', entry.url);
  columnHalfImage.appendChild(imgRender);
  var columnHalfText = document.createElement('div');
  columnHalfText.setAttribute('class', 'column-half column-entry');
  divRow.appendChild(columnHalfText);
  var divRowTitle = document.createElement('div');
  divRowTitle.setAttribute('class', 'row');
  columnHalfText.appendChild(divRowTitle);
  var columnEntryTitle = document.createElement('div');
  columnEntryTitle.setAttribute('class', 'column-entry-title');
  divRowTitle.appendChild(columnEntryTitle);
  var h3 = document.createElement('h3');
  h3.setAttribute('class', 'font-proza title-styling');
  columnEntryTitle.appendChild(h3);
  var columnEntryTitleIcon = document.createElement('div');
  columnEntryTitleIcon.setAttribute('class', 'column-entry-title column-edit-icon text-right');
  divRowTitle.appendChild(columnEntryTitleIcon);
  var editIcon = document.createElement('i');
  editIcon.setAttribute('class', 'fas fa-pen');
  columnEntryTitleIcon.appendChild(editIcon);
  h3.textContent = entry.title;
  var p = document.createElement('p');
  columnHalfText.appendChild(p);
  p.textContent = entry.notes;
  return entryItem;
}

body.addEventListener('click', handleViewNavigation);
function handleViewNavigation(event) {
  var targetDataViewValue = event.target.getAttribute('data-view');
  if (targetDataViewValue) {
    switchView(targetDataViewValue);
  }
}

function switchView(view) {
  for (var i = 0; i < allView.length; i++) {
    if (view === allView[i].getAttribute('data-view')) {
      allView[i].className = 'view';
      data.view = view;
    } else {
      allView[i].className = 'view hidden';
    }
  }
  if ((data.nextEntryId === 1) && (data.view === 'entries')) {
    noEntries.className = 'view';
  }
}

document.addEventListener('DOMContentLoaded', loadedPage);

function loadedPage(event) {
  var ulElement = document.querySelector('ul');
  for (var i = 0; i < data.entries.length; i++) {
    var domTree = renderEntry(data.entries[i]);
    ulElement.appendChild(domTree);
  }
  switchView(data.view);
}

var entriesParent = document.querySelector('ul');
entriesParent.addEventListener('click', editIconHandler);
function editIconHandler(event) {
  switchView('entry-form');
}
