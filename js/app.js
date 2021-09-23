const countDownNode = document.querySelector('[countdown]')
const preLoadCountDownNode = document.querySelector('[preLoadCountDownNode]')
const launchBtn = document.querySelector('[launch]')
const preLoadBtn = document.querySelector('[preload]')

const newWorldRelease = new Date(Date.UTC(2021, 8, 28, 15, 00, 00)).getTime()
const newWorldPreLoadRelease = new Date(Date.UTC(2021, 8, 27, 15, 00, 00)).getTime()

const newCountDown = (release, node, message) => {
    setInterval(() => {
        let now = new Date().getTime()

        let preLoadDistance = release - now

        let preLoadDay = Math.floor(preLoadDistance / (1000 * 60 * 60 * 24))
        let preLoadHours = Math.floor((preLoadDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let preLoadMinutes = Math.floor((preLoadDistance % (1000 * 60 * 60)) / (1000 * 60))
        let preLoadSeconds = Math.floor((preLoadDistance % (1000 * 60)) / 1000)

        node.innerHTML = `${preLoadDay} <span>Days,</span> ${preLoadHours}<span>h</span> ${preLoadMinutes}<span>m</span> ${
            preLoadSeconds < 10 ? '0' + preLoadSeconds : preLoadSeconds
        }s`

        if (preLoadDistance < 0) {
            clearInterval(preLoadCountDown)
            node.innerHTML = message
        }
    }, 300)
}

newCountDown(newWorldRelease, countDownNode, 'LETS PLAY')
newCountDown(newWorldPreLoadRelease, preLoadCountDownNode, 'LETS DOWNLOAD')

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
