const animateTextChildren = document.querySelector(".animate-text").children
const animateTextLength = animateTextChildren.length
let index = 0

const animateTexts = document.querySelector(".animate-text-desktop").children
const animateTextsLength = animateTexts.length
let index_2 = 0

//Animates texts
function animate () {
    // Mobile view 
    for(let i = 0; i < animateTextLength; i++) {
        animateTextChildren[i].classList.remove("text-in")
    }
    animateTextChildren[index].classList.add("text-in")

    if (index == animateTextLength - 1) {
        index = 0
    } else {
        index++
    }

    //Desktop view
    for(let i = 0; i < animateTextsLength; i++) {
        animateTexts[i].classList.remove("text-in")
    }
    animateTexts[index_2].classList.add("text-in")

    if (index_2 == animateTextsLength - 1) {
        index_2 = 0
    } else {
        index_2++
    }

    setTimeout(animate, 3000)
}

window.onload = animate()