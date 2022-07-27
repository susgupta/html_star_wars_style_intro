const stars = 200;

//generate stars
for (let i = 0; i < stars; i++) {

    let star = document.createElement('div');
    star.className = 'stars';

    //generate position and assign to style via JS
    var xy = randomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';

    document.body.append(star);

}

function randomPosition() {

    var y = window.innerWidth;
    var x = window.innerHeight;

    //generate random coords based on screen size
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);

    return [randomX, randomY];
}