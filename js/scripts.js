var Task = function(description, complete) {
  this.description = description;
  this.complete = complete;
};

Task.prototype = new Task();

var toDoList = [];

function addTask(description, done) {
  toDoList.push(new Task("walk dog", false));
}

function completeTask(task) {
  task.complete = true;
  return task;
}
