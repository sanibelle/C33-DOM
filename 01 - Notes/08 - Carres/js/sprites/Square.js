const SQUARE_SIZE = 40
const HOLD_RANDOM_DELAY = 60
const HOLD_MIN_DELAY = 20
const OPACITY_FADE = 0.005

class Square {
    constructor(x, y){
        this.x = x
        this.y = y
        this.speed = -.01
        this.isAlive = true
        this.sideSize = SQUARE_SIZE

        this.opacity = 1
        this.delay = Math.random() * HOLD_RANDOM_DELAY + HOLD_MIN_DELAY

        this.element = document.createElement('div')
        this.element.setAttribute('class', 'square')
        this.element.setAttribute('class', 'fruit_1 fruit')
        document.body.appendChild(this.element)

        this.animateRect()
    }

    // voir notes 01
    animateRect () {
        this.element.style.top = `${this.y}px`
        this.element.style.left = `${this.x}px`
        this.element.style.opacity = this.opacity
    }

    tick() {
        if (this.delay <= 0) {
            this.speed-=.01
            this.y+=this.speed
            this.opacity -= OPACITY_FADE
        } else {
            this.delay--
        }
        if (this.y <= -SQUARE_SIZE) {
            this.isAlive = false
            this.element.remove()
        }
        this.animateRect()
    }
}

