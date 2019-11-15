function throttle(fn, wait) {
    let previos = 0 //上一次点击的时间
    return function () {
        let now = Date.now()
        if (now - previos > wait) {
            fn.apply(this.arguments)
            previos = now
        }
    }

}

function logger() {
    console.log('logger')
}
btn.addEventListener('click', throttle(logger, 2000))