const countDownNode = document.querySelector('[countdown]')
const preLoadCountDownNode = document.querySelector('[preLoadCountDownNode]')
const launchBtn = document.querySelector('[launch]')
const preLoadBtn = document.querySelector('[preload]')

const newWorldRelease = new Date(Date.UTC(2021, 8, 28, 11, 00, 00)).getTime()
const newWorldPreLoadRelease = new Date(Date.UTC(2021, 8, 27, 15, 00, 00)).getTime()

const eightAm = new Date()

const newCountDown = (release, node, message) => {
    setInterval(() => {
        let now = new Date().getTime()

        let preLoadDistance = release - now

        let preLoadDay = Math.floor(preLoadDistance / (1000 * 60 * 60 * 24))
        let preLoadHours = Math.floor((preLoadDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let preLoadMinutes = Math.floor((preLoadDistance % (1000 * 60 * 60)) / (1000 * 60))
        let preLoadSeconds = Math.floor((preLoadDistance % (1000 * 60)) / 1000)

        let nodeSpanDays = `<span>Day${preLoadDay > 1 ? 's' : ''},</span>`
        let nodeDays = `${preLoadDay === 0 ? '' : preLoadDay} ${preLoadDay === 0 ? '' : nodeSpanDays}`

        let nodeHours = `${preLoadHours === 0 ? '' : preLoadHours < 10 ? '0' + preLoadHours : preLoadHours}<span>h</span>`
        let nodeMinutes = `${preLoadMinutes < 10 ? '0' + preLoadMinutes : preLoadMinutes}<span>m</span>`
        let nodeSeconds = `${preLoadSeconds < 10 ? '0' + preLoadSeconds : preLoadSeconds}s`

        node.innerHTML = `${nodeDays} ${nodeHours} ${nodeMinutes} ${nodeSeconds}s <span>${
            countDownNode === node ? '(South American Servers)' : ''
        }</span>`

        if (preLoadDistance < 0) {
            clearInterval(preLoadCountDown)
            node.innerHTML = message
        }
    }, 300)
}

newCountDown(newWorldRelease, countDownNode, 'LETS PLAY')
newCountDown(newWorldPreLoadRelease, preLoadCountDownNode, 'LETS DOWNLOAD')

launchBtn.addEventListener('click', () => {
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
    let className = preLoadBtn.classList
    if (className.value) return
    if (!className.value) {
        countDownNode.classList.remove('show')
        preLoadCountDownNode.classList.add('show')
        launchBtn.classList.remove('active')
        return className.add('active')
    }
})
