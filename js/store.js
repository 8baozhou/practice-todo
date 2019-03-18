var Store = function(name) {
    this.dbName = name
    this.init()
}

Store.prototype.init = function() {
    var str = localStorage.getItem(this.dbName)
    if(str == null) {
        str = '[]'
    }
    this.cahced = JSON.parse(str)
}

Store.prototype.add = function(item) {
    this.cahced.push(item)
    this.save()
}

Store.prototype.save = function() {
    var str = JSON.stringify(this.cahced)
    localStorage.setItem(this.dbName, str)
}

Store.prototype.load = function() {
    return this.cahced.slice()
}

export default Store