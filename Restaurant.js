class Restaurant {
    constructor({name}) {
        if(!name) throw new Error('Restaurant must have a name')
        this.name = name
        this.id = id 
    }

}
class Menu {
    constructor({name, id, restaurant_id}){
        this.name = name
    }
}
class Items {
    constructor ({name, price, menu_id}) {

    }
}

module.exports = {
    Restaurant,
    Menu,
    Items
}