
// importnav bar htmml
const nav = document.querySelector('.navbar')
fetch('/zixuan.me/navbar.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML = data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    })


// reveal words through griaffe spots (about me page)
function revealWord(spotId, wordId) {

    console.log("enter reveal")

    var spot = document.getElementById(spotId);
    var word = document.getElementById(wordId)

    var spotOpacity = spot.style.opacity;

    var display = window.getComputedStyle(spot).display

    console.log(display)

    if (spotOpacity == 0) {
        spot.style.opacity = '1';
        word.style.opacity = '1';
    }

    if (spotOpacity == 1) {
        spot.style.opacity = '0';
        word.style.opacity = '0';
    }

    // var click = document.getElementById("click")

    var show = true;

    for (i = 1; i <= 8; i++) {
        if (document.getElementById('w' + i).style.opacity == 1) {
            // click.style.opacity = '0';
            $("#click").fadeOut();
            return;
        }
    }

    // click.style.opacity = '1';
    $("#click").fadeIn();
}
