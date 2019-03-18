var log = console.log.bind(console)

var q = function(selector, parent) {
    var element = parent || document
    return element.querySelector(selector)
}

var qs = function(selector, parent) {
    var element = parent || document
    var list = element.querySelectorAll(selector)
    return Array.prototype.slice.call(list)
}

var bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, function(event) {
        callback(event)
    })
}