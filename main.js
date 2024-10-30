var button = document.querySelector('.toggle');
var video = document.querySelector('.video');
var counter = 0;
button.addEventListener('click', function () {
    console.log('hello');
    counter++;
    if (counter === 1) {
        video.pause();
    }
    else if (counter === 2) {
        video.play();
        counter = 0;
    }
});