class Slash {
    constructor(x, y){
        this.element = document.createElement('div')
        this.element.setAttribute("class", "sword-slash")
        this.element.style.position = 'absolute'
        document.getElementById('game').appendChild(this.element); 

        this.ticksLeft = 20
        this.isAlive = true
        this.element.style.top = y
        this.element.style.left = x
        console.log(x, y)
        
    }

    tick() {
        this.ticksLeft--
        if (this.ticksLeft <= 0) {
            this.element.remove()
            this.isAlive = false
        }
    }
}