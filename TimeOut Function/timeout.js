// let time = setTimeout(function () {
//     console.log('It has been 5 seconds.')
// }, 5000)

// We can also clear the timeout but for that what we need to do is 'store the timeout function inside a variable.

// clearTimeout(time);

let count = 10;

let interval = setInterval(function() {
    if (count >= 1){
        count--;
        console.log(count)
    } else clearInterval(interval);
}, 1000)