var Controller = function(view, model) {
    this.view = view
    this.model = model
    this.bindAll()
}

Controller.prototype.bindAll = function() {
    this.addTodo()
}

Controller.prototype.addTodo = function() {
    var view = this.view
    var model = this.model
    view.addTodo(function(task) {
        if(task.trim() == '') {
            task = 'test todo'
        }
        model.addTodo(task, function(todo) {
            view.clearInput()
            view.insertTodo(todo)
        })
    })
}

export default Controller