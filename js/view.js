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

View.prototype.clearInput = function() {
    this.input.value = ''
}

View.prototype.insertTodo = function(todo) {
    var t = this.template.todo(todo)
    this.todoList.appendChild(t)
}

export default View
