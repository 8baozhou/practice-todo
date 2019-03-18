var Template = function() {

}

Template.prototype.button = function(text, method) {
    var button = this.create('button', text)
    button.dataset.method = method
    return button
}

Template.prototype.create = function(tagName, text) {
    var element = document.createElement(tagName)
    if(text != undefined) {
        element.innerText = text
    }
    return element
}

Template.prototype.todoCell = function(todo) {
    var cell = this.create('li')
    var className = 'todo-cell'
    if(todo.done) {
        className += ' done'
    }
    cell.className = className
    cell.dataset.id = todo.id
    return cell
}

Template.prototype.todo = function(todo) {
    var frag = document.createDocumentFragment()
    var toggle = this.button('完成', 'toggle')
    var task = this.create('span', todo.task)
    var edit = this.button('编辑', 'edit')
    var remove = this.button('删除', 'remove')
    frag.appendChild(toggle)
    frag.appendChild(task)
    frag.appendChild(edit)
    frag.appendChild(remove)
    var cell = this.todoCell(todo)
    cell.appendChild(frag)
    return cell
}
export default Template