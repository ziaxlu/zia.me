
// importnav bar htmml
const nav = document.querySelector('.navbar')
fetch('/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
    const parser = new DOMParser()
    const doc = parser.parseFromString(data, 'text/html')
    eval(doc.querySelector('script').textContent)
})


// highlight active nav bar page (doesn't work)
// let links = document.querySelectorAll(".links a");
// let bodyId = document.querySelector("body").id;

// for(let link of links){
//     if(link.dataset.active == bodyId){
//         link.classList.add("active");
//     }
// }



// also doesn't work to highlight
// const current = 0;
// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         current = i;
//     }
// }
// document.links[current].className = 'current';



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

    for (i=1; i<=8; i++) {
        if (document.getElementById('w' + i).style.opacity == 1) {
            // click.style.opacity = '0';
            $("#click").fadeOut();
            return;
        }
    }

    // click.style.opacity = '1';
    $("#click").fadeIn();
}


// open collapsible
// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     } 
//   });
// }