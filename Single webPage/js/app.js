let $ = document

let counters = $.querySelectorAll('.num')
let benefitsContainer = $.querySelector('.benefits')
let startCounter = false

window.addEventListener('scroll', () => {
    if (window.scrollY >= benefitsContainer.offsetTop) {
        if(!startCounter){
            counters.forEach(counter => setCounter(counter))
        }
        setCounter = true
    }
    })
    function setCounter(el) {
        let elemNumCount = el.dataset.count

       let counterInterval = setInterval(() => {
            if(el.textContent == elemNumCount){
                clearInterval(counterInterval)
            }
            el.textContent++ 
        }, 5)

    }
