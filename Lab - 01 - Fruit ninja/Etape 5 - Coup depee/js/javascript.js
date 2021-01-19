// Petite note : le noeud "game-over" est existant dans le HTML, mais en display "none". Lorsque la partie se termine
// vous pouvez l'afficher et cacher le noeud "game"

let nextFruitCounterWaitTime = 1000
let spriteList = []
let isGameOver =  false
const MAX_LIFE = 3
let life = 3
let nextFruitCounter = 0
let score = 0

window.addEventListener('load', () => {
    const tick = () => {
        console.log("🚀 ~ file: javascript.js ~ line 17 ~ tick ~ spriteList", spriteList)
        spriteList.forEach(s => s.tick())
        spriteList = spriteList.filter(s => s.isAlive)
        if (!isGameOver) {
            window.requestAnimationFrame(tick)
        }
        if (nextFruitCounter <= 0 || spriteList.length == 0){
            nextFruitCounter = nextFruitCounterWaitTime-=5
            spriteList.push(new Fruit())
        }
        if (life == 0) {
            endGame()
        }
        nextFruitCounter--
    }

    const startGame = () => {
        document.getElementById('game-over').style.display = 'none'
        document.getElementById('game').style.display = 'block'
        life = MAX_LIFE
        isGameOver =  false
        nextFruitCounter = 0
        score = 0
        // j'ai mis le premier tick dans start game
        tick()
    }

    const endGame = () => {
        document.getElementById('game-over').style.display = 'block'
        document.getElementById('game').style.display = 'none'

        // Retire tous les éléments de la liste et du html si jamais on meurt avec un fruit en création
        spriteList.forEach(s => s.element.remove())
        spriteList = []
        isGameOver =  true
    }

    document.getElementById('game-over').onclick = () => {
        startGame()
    }

    endGame()
})