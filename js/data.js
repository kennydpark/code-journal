/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', beforeUnload);

function beforeUnload(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-model', dataJSON);
}

var previousDataJSON = localStorage.getItem('data-model');
if (previousDataJSON) {
  data = JSON.parse(previousDataJSON);
}

// var noEntries = document.querySelector('#no-entries');
// if (data.nextEntryId === 1) {
//   noEntries.className = 'view';
//   data.view = 'no-entries';
// } else {
//   noEntries.className = 'view hidden';
// }
