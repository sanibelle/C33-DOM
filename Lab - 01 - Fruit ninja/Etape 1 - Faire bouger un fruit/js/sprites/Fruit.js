class Fruit {
    constructor(){
        this.element = document.createElement('div')
        this.element.setAttribute("class", "fruit_2 fruit")
        this.x = Math.random()*850
        this.y = 500
        this.isAlive = true
        this.velocity = -Math.random()*5
        document.getElementById('game').appendChild(this.element) 
        this.move()
    }

    move () {
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
    }

    tick() {
        if (this.y > 500) {
            this.isAlive = false
            this.element.remove()// DRAPEAU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        }
        if (this.y <= 0) {
            this.velocity *= -1
        }
        this.y += this.velocity
        this.move()
    }
}
