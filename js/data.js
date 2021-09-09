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

document.addEventListener('DOMContentLoaded', reloadPage);

function reloadPage(event) {
  var ulElement = document.querySelector('ul');

  for (var i = 0; i < data.entries.length; i++) {
    var domTree = renderEntry(data.entries[i]);
    ulElement.appendChild(domTree);
  }
}
