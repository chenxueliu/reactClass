// debounce 防抖 电梯的时候 你已经在电梯里了 又过来一个人 按了一下电梯
// 快速点击的时候 最后一次点击后 2s 后触发事件
// 每一次点击都会触发一次定时器 2s内又点击了  就会清空定时器 重新计时、
// 最后一次点击的事件2s后执行
function debounce(fn, wait, immadate) {
    let timer;
    return function () {
        clearTimeout(timer)
        if (immadate) {
            // 为了点击的第一次也执行一次
            let callnow = !timer
            if (callnow) fn.apply(this, arguments)
        }
        timer = setTimeout(() => {
            fn.apply(this.arguments);
            timer = null
        }, wait)
    }
}
function logger() {
    console.log('debounce')
}
btn.addEventListener('click', debounce(logger, 2000, true))