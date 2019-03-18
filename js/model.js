var TodoModel = function(task) {
    this.done = false
    this.id = Date.now()
    this.task = task
}

var Model = function() {
    
}

Model.prototype.addTodo = function(task, callback) {
    var todo = new TodoModel(task)
    this.save(todo)
    callback(todo)
}

Model.prototype.save = function(todo) {
    log('modelSave:', todo)
}

export default Model