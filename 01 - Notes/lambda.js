let spriteList = []

spriteList.push(new ObjetQuiNexitePas())

const tick = () => {
    spriteList = spriteList.filter(s => s.tick())
    window.requestAnimationFrame(tick)
}

