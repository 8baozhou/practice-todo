var Controller = function(view, model) {
    this.view = view
    this.model = model
    this.bindAll()
}

Controller.prototype.bindAll = function() {
    this.addTodo()
    this.todoListDelegate()
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

Controller.prototype.todoListDelegate = function() {
    var view = this.view
    var self = this
    view.todoListDelegate(function(target, method) {
        if(method == 'edit') {
            view.editTodo(target)
        } else {
            var todo = view.todoFromTarget(target)
            method += 'Todo'
            self[method](todo)
        }
    })
}

Controller.prototype.removeTodo = function(todo) {
    var view = this.view
    var model = this.model
    model.removeTodo(todo.id, function(r) {
        if(r.state) {
            view.removeTodo(r.id)
        }
    })
}

Controller.prototype.toggleTodo = function(todo) {
    todo.done = !todo.done
    this.updateTodo(todo)
}

Controller.prototype.updateTodo = function(todo) {
    var view = this.view
    var model = this.model
    model.updateTodo(todo, function(r) {
        if(r.state) {
            view.updateTodo(r.todo)
        }
    })
}

export default Controller