let spriteList = []
window.addEventListener('load', () => {
    document.onmousemove = e => {
        spriteList.push(new Square(e.pageX, e.pageY))
    }

    const tick = () => {
        spriteList.forEach(s => s.tick())
        spriteList = spriteList.filter(s => s.isAlive)
        window.requestAnimationFrame(tick)
    }
    tick()
})