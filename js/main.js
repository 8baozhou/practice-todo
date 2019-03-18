import Controller from "./controller.js";
import View from "./view.js";
import Model from "./model.js";
import Template from "./template.js";

var __main = function() {
    var template = new Template()
    var view = new View(template)
    var model = new Model()
    var controller = new Controller(view, model)
}

__main()