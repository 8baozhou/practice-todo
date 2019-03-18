import Controller from "./controller.js";
import View from "./view.js";
import Model from "./model.js";
import Template from "./template.js";
import Store from "./store.js";

var __main = function() {
    var template = new Template()
    var view = new View(template)
    var store = new Store('todo')
    var model = new Model(store)
    var controller = new Controller(view, model)
    bindEvent(window, 'load', function() {
        model.loadTodo(function(todos) {
            view.insertTodos(todos)
        })
    })
}

__main()