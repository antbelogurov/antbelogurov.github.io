//ScrollPage

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


// Animation
let rightBlock = 250;

function cssAnimation() {
    let anim = document.querySelectorAll('.anim');

    anim.forEach(elem => {
        elem.style.display = "block";
        elem.classList.add('cssAnimation')

    })

}

//Filter
const divs = document.querySelectorAll('.portfolioList')
const items = document.querySelectorAll('.All')

function liFilter() {
    divs.forEach(elem => {
        elem.addEventListener('click', filter)
    })
}
liFilter()

function filter(event) {
    event.preventDefault()

    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains(event.target.getAttribute('value'))) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}


// 

// zoom img
let img = document.querySelector('.skills__img');
img.addEventListener('click', zoom)


function zoom() {
    if (img.classList.contains('img__active') == true) {
        return img.classList.remove('img__active')

    }
    return img.classList.add('img__active')
}