var View = function(template) {
    this.input = q('.form>input')
    this.formButton = q('.form>button')
    this.todoList = q('.list')
    this.template = template
}

View.prototype.addTodo = function(callback) {
    var button = this.formButton
    var input = this.input
    bindEvent(button, 'click', function() {
        var task = input.value
        callback(task)
    })

    bindEvent(input, 'change', function() {
        button.click()
    })
}

View.prototype.todoListDelegate = function(callback) {
    var list = this.todoList
    bindEvent(list, 'click', function(event) {
        var target = event.target
        var method = target.dataset.method
        if(method != undefined) {
            callback(target, method)
        }
    })

    bindEvent(list, 'focusout', function(event) {
        var target = event.target
        if(target.isContentEditable) {
            target.contentEditable = false
            callback(target, 'update')
        }
    })

    bindEvent(list, 'keydown', function(event) {
        if(event.key == 'Enter') {
            event.preventDefault()
            event.target.blur()
        }
    })
}
// render
View.prototype.clearInput = function() {
    this.input.value = ''
}

View.prototype.insertTodo = function(todo) {
    var t = this.template.todo(todo)
    this.todoList.appendChild(t)
}

View.prototype.insertTodos = function(todos) {
    var frag = document.createDocumentFragment()
    for(var i = 0; i < todos.length; i++) {
        var t = this.template.todo(todos[i])
        frag.appendChild(t)
    }
    this.todoList.appendChild(frag)
}

View.prototype.editTodo = function(target) {
    var cell = target.closest('.todo-cell')
    var span = q('span', cell)
    span.contentEditable = true
    span.focus()
}

View.prototype.updateTodo = function(todo) {
    var cell = this.todoCell(todo.id)
    var t = this.template.todo(todo)
    this.todoList.replaceChild(t, cell)
}

View.prototype.removeTodo = function(id) {
    var cell = this.todoCell(id)
    cell.remove()
}

// utils
View.prototype.todoFromTarget = function(target) {
    var cell = target.closest('.todo-cell')
    var todo = {
        id: cell.dataset.id,
        task: q('span', cell).innerText,
        done: cell.classList.contains('done')
    }
    return todo
}

View.prototype.todoCell = function(id) {
    return q('li[data-id="' + id + '"]')
}

export default View
