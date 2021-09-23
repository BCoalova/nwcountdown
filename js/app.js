const countDownNode = document.querySelector('[countdown]')
const preLoadCountDownNode = document.querySelector('[preLoadCountDownNode]')
const buttons = document.querySelectorAll('button')
const launchBtn = document.querySelector('[launch]')
const preLoadBtn = document.querySelector('[preload]')

const newWorldRelease = new Date(Date.UTC(2021, 8, 28, 15, 00, 00)).getTime()
const newWorldPreLoadRelease = new Date(Date.UTC(2021, 8, 27, 15, 00, 00)).getTime()

const countDown = setInterval(() => {
    let now = new Date().getTime()

    let distance = newWorldRelease - now

    let day = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)

    countDownNode.innerHTML = `${day} <span>Days,</span> ${hours}<span>h</span> ${minutes}<span>m</span> ${
        seconds < 10 ? '0' + seconds : seconds
    }s`

    if (distance < 0) {
        clearInterval(countDown)
        countDownNode.innerHTML = 'LETS PLAY'
    }
}, 300)

const preLoadCountDown = setInterval(() => {
    let now = new Date().getTime()

    let preLoadDistance = newWorldPreLoadRelease - now

    let preLoadDay = Math.floor(preLoadDistance / (1000 * 60 * 60 * 24))
    let preLoadHours = Math.floor((preLoadDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let preLoadMinutes = Math.floor((preLoadDistance % (1000 * 60 * 60)) / (1000 * 60))
    let preLoadSeconds = Math.floor((preLoadDistance % (1000 * 60)) / 1000)

    preLoadCountDownNode.innerHTML = `${preLoadDay} <span>Days,</span> ${preLoadHours}<span>h</span> ${preLoadMinutes}<span>m</span> ${
        preLoadSeconds < 10 ? '0' + preLoadSeconds : preLoadSeconds
    }s`

    if (preLoadDistance < 0) {
        clearInterval(preLoadCountDown)
        preLoadCountDownNode.innerHTML = 'LETS PLAY'
    }
}, 300)

launchBtn.addEventListener('click', () => {
    console.log('object')
    let className = launchBtn.classList
    if (className.value) return
    if (!className.value) {
        preLoadCountDownNode.classList.remove('show')
        countDownNode.classList.add('show')
        preLoadBtn.classList.remove('active')
        return className.add('active')
    }
})

preLoadBtn.addEventListener('click', () => {
    console.log('object')
    let className = preLoadBtn.classList
    if (className.value) return
    if (!className.value) {
        countDownNode.classList.remove('show')
        preLoadCountDownNode.classList.add('show')
        launchBtn.classList.remove('active')
        return className.add('active')
    }
})
