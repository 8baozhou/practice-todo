var TodoModel = function(task) {
    this.done = false
    this.id = Date.now()
    this.task = task
}

var Model = function(store) {
    this.store = store
}

Model.prototype.addTodo = function(task, callback) {
    var todo = new TodoModel(task)
    this.store.add(todo)
    callback(todo)
}

Model.prototype.removeTodo = function(id) {
    
}

export default Model