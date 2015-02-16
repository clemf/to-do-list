var Task = function(description, complete) {
  this.description = description;
  this.complete = complete;
};

Task.prototype = new Task();

var toDoList = [];

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

  toDoList.forEach(function(task) {
    $("ul#tasks").append("<li class='list-group-item'><input type='checkbox'> " + task.description + "</li>");
  });

  event.preventDefault();
});
