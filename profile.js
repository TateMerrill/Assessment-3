class questions{
    constructor(elem){
        this.elem = elem;
        elem.onclick = this.onclick.bind(this);
    }
}

color(){
    alert('My favorite color is Green')
}
place(){
    alert('My Favorite Place is Playa Del Carmen Mexico')
}
ritual(){
    alert('Listening to 300 violen song before working out.')
}

onclick(event){
    let action = event.target.dataset.action
    if(action){
        this[actions]()
    }
}

