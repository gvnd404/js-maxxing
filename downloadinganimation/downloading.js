count = 0;
const progress = document.querySelector('.progress');
const percentage = document.querySelector('.percentage');
const downloading = document.querySelector('.downloading');
const hide = document.querySelector('.hidden')
const show = document.querySelector('.show')
let int = setInterval(function(){
    hide.classList.add('hide')
    show.style.display = "initial"
}, 3000)

let interval = setInterval(function () {
    if (count < 100) {
        count++;
        progress.style.width = `${count}%`
        percentage.textContent = `${count}%`
    } else {
        downloading.textContent = 'Downloaded'
    }
}, 30)