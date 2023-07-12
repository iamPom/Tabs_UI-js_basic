const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

// console.log([tabActive])
// console.log([line])

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

// console.log(tabs, panes)
tabs.forEach((tab, index) => {
    // console.log(index)
    const pane = panes[index]

    tab.onclick = function () {
        // console.log(pane)
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        // console.log(this)

        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'

        this.classList.add('active')
        pane.classList.add('active')
    }
}
)