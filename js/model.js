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

Model.prototype.removeTodo = function(id, callback) {
    var result = {}
    result.state = (this.store.remove(id) == id)
    result.id = id
    callback(result)
}

Model.prototype.updateTodo = function(todo, callback) {
    var result = {}
    result.state = (this.store.update(todo) == todo)
    result.todo = todo
    callback(result)
}

Model.prototype.loadTodo = function(callback) {
    var todos = this.store.load()
    callback(todos)
}

export default Model