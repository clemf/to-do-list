var Task = function(description, complete) {
  this.description = description;
  this.complete = complete;
};

Task.prototype = new Task();

var toDoList = [];
var completed = [];

function addTask(description, array) {
  var task = new Task(description, false);
  array.push(task);
  return task;
}

function completeTask(task) {
  task.complete = true;
  return task;
}

$("form#task-form").submit(function(event) {
  var description = $("input#description").val();
  addTask(description, toDoList);

  $("ul#tasks").empty();

  for (var i = 0; i < toDoList.length; i += 1) {
    var task = toDoList[i];
    $("ul#tasks").append("<li class='list-group-item'><input type='checkbox' id='" + i + "'> " + task.description + "</li>");
  }



  event.preventDefault();
});
