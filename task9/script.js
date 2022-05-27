//function for item
function dragStart(ev) {
  console.log('start')
  ev.dataTransfer.effectAllowed = "link";
  ev.dataTransfer.setData("Text", ev.target.getAttribute("id"));
  ev.dataTransfer.setDragImage(ev.target, 0, 0);
  return true;
}

function dragEnd(ev) {
  console.log('end')
  ev.dataTransfer.clearData("Text");
  return true;
}

// function for container
//
function dragEnter(ev) {
  console.log('enter')
  var idelt = ev.dataTransfer.getData("Text");
  return true;
}

function dragOver(ev) {
  console.log('over')
  var idelt = ev.dataTransfer.getData("Text");
  var id = ev.target.getAttribute("id");
  return false;
}

function dragDrop(ev) {
  console.log('drop')
  var idelt = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(idelt));
  ev.stopPropagation();
  return false;
}
