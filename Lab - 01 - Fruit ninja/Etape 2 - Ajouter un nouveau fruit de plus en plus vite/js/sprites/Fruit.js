class Fruit {
    constructor(){
        this.element = document.createElement('div')
        this.element.setAttribute("class", "fruit_1 fruit")
        this.x = Math.random()*895
        this.y = 500
        this.isAlive = true
        this.velocity = -Math.random()*5
        document.getElementById('game').appendChild(this.element); 
        this.move()
        document.getElementById('game')
    }

    move () {
        this.element.style.top = this.y
        this.element.style.left = this.x
    }

    tick() {
        if (this.y > 500) {
            this.isAlive = false
            this.element.remove()
        }
        if (this.y <= 0) {
            this.velocity *= -1
        }
        this.y += this.velocity
        this.move()
    }
}