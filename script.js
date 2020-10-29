window.onload = start
let left = 0;


function start() { 
    fly();
}


function fly() {
    setInterval(moveBirdToTheRight, 10)

}

function moveBirdToTheRight() {
    // Fetch bird from html
    const bird = document.querySelector('img');

    // update position
    left += 0.2;

    // Render position
    bird.style.left = left + '%';
}
