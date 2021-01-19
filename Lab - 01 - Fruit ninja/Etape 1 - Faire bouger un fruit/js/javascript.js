// Petite note : le noeud "game-over" est existant dans le HTML, mais en display "none". Lorsque la partie se termine
// vous pouvez l'afficher et cacher le noeud "game"

let spriteList = []
let isGameOver =  false

window.addEventListener('load', () => {
    spriteList.push(new Fruit())
    const tick = () => {
        spriteList.forEach(s => s.tick())
        spriteList = spriteList.filter(s => s.isAlive)
        if (!isGameOver) {
            window.requestAnimationFrame(tick)
        }
    }
    tick()
})