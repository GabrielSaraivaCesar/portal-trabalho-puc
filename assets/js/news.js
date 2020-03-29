var list = document.querySelectorAll("div[data-image]");

for (var i = 0; i < list.length; i++) {
  var url = list[i].getAttribute('data-image');
  list[i].style.backgroundImage="url('" + url + "')";
}

const actionGrid = document.querySelector('#action-grid');
const actionLine = document.querySelector('#action-line');
const editableCols = [...document.querySelectorAll('.editable-col')];

actionGrid.addEventListener('click', changeToGrid);
actionLine.addEventListener('click', changeToLine);

var colState = 'grid';

function changeToGrid() {
  colState = 'grid';
  actionGrid.classList.add('selected');
  actionLine.classList.remove('selected');
  changeGridState();
}
function changeToLine() {
  colState = 'line';
  actionGrid.classList.remove('selected');
  actionLine.classList.add('selected');
  changeGridState();
}

function changeGridState() {
  editableCols.map(col => {
    if (colState == 'line') {
      col.classList.remove('col-5');
      col.classList.add('col-10');
    }
    else {
      col.classList.remove('col-10');
      col.classList.add('col-5');
    }
  })
}