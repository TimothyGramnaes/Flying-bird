window.onload = start

/**
 * Let the position of the bird be raltive to the left side of the page
 */
let left = 0;

/**
 * Starts the program on page load.
 */
function start() { 
    fly();
}

/** Sets an interval to make the bird "fly" */
function fly() {
    setInterval(moveBirdToTheRight, 10)

}

/** Moves the bird a small step to the right */
function moveBirdToTheRight() {
    // Fetch bird from html
    const bird = document.querySelector('img');

    // update position
    left += 0.2;

    // Render position
    bird.style.left = left + '%';
}
