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

Store.prototype.remove = function(id) {
    var index = this.indexOf(id)
    if(index != -1) {
        this.cahced.splice(index, 1)
        this.save()
        return id
    }
    return false
}

Store.prototype.update = function(todo) {
    var index = this.indexOf(todo.id)
    if(index != -1) {
        for(var k in todo) {
            this.cahced[index][k] = todo[k]
        }
        this.save()
        return todo
    }
    return false
}

Store.prototype.indexOf = function(id) {
    for(var i = 0; i < this.cahced.length; i++) {
        var item = this.cahced[i]
        if (item.id == id) {
            return i
        }
    }
    return -1
}

export default Store