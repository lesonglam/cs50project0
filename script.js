const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

var list = document.getElementById('todo-list')
var itemCountSpan = document.getElementById('item-count')
var uncheckedCountSpan = document.getElementById('unchecked-count')

//set default value 
var a = 0;
function newTodo() {
  //increase a variable when click button
  a++;

  //change value of itemCountSpan 
  itemCountSpan.innerHTML = a;

  //this will change the classname when click
  document.getElementById("item-count").classList.add('Dangtest');
  alert('New TODO button clicked!')
}

function deleteItem(){
  //decrease when click delete button
  a--;

  //change value of itemCountSpan 
  itemCountSpan.innerHTML = a;

  //this will change the classname when click
  document.getElementById("item-count").classList.add('Dangtest1');
}
