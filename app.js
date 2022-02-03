let display = document.getElementById('display')
let num = document.querySelectorAll('.num')
let pointer = document.querySelectorAll('span.pointer')

num.forEach((item) => {
    item.addEventListener('click', function () {
        if (this.id == '') {
            pointer.forEach((item) => {
                item.classList.remove('pointer')
                if (display.value === '') {
                    item.classList.remove('pointer')
                }
            })
            let operator = this.innerText

            if (('/+x-%.'.indexOf(display.value.charAt(display.value.length - 1)) !== -1) &&
                ('/+x-%.'.indexOf(operator) !== -1)) {
                display.value = display.value.substr(0, display.value.length - 1) + operator
            } else {
                display.value += operator
                if (display.value.length == 17) {
                    display.value = operator
                }
            }
        } else {
            if (this.id == "clear") {
                display.value = ""
                pointer.forEach((item) => {
                    item.classList.add('pointer')
                })
            } else if (this.id == 'back') {
                display.value = display.value.substr(0, display.value.length - 1)
                if (display.value === '') {
                    pointer.forEach((item) => {
                        item.classList.add('pointer')
                    })
                }
            } else {
                calculate()
            }
        }
    })
})

function calculate() {
    display.value = eval(display.value.replaceAll('x', '*'))
    if ((display.value === 'undefined') || (display.value === 'NaN') ||
        (display.value === 'Infinity')) {
        display.value = ''
        pointer.forEach((item) => {
            item.classList.add('pointer')
        })
    }
}