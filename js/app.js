const countDownNode = document.querySelector('[countdown]')

const newWorldRelease = new Date(Date.UTC(2021, 8, 28, 14, 00, 00)).getTime()

const countDown = setInterval(() => {
    let now = new Date().getTime()

    let distance = newWorldRelease - now

    let day = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    countDownNode.innerHTML = `${day} Días, ${hours}h ${minutes}m ${seconds < 10 ? '0' + seconds : seconds}s`

    if (distance < 0) {
        clearInterval(countDown)
        countDownNode.innerHTML = 'LETS PLAY'
    }
}, 300)
