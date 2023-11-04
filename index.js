
var img1 = document.getElementById('img-1')
var img2 = document.getElementById('img-2')
var img3 = document.getElementById('img-3')
var heading = document.getElementById("main-container-heading")
var smartWatchImage = document.getElementById("smart-watch-image")
var earbudImage = document.getElementById("earbud-image")
var headphoneImage = document.getElementById("headphone-image")
var viewMoreContainer = document.getElementById("card-view-more")
var viewMoreArrow = document.getElementById("view-more-icon")
var viewMorePara = document.getElementById("view-more-para")

var currentImg = 0;
const interval = 5000;

function changeSlide() {
    // img1.style.opacity = 0;
    // img2.style.opacity = 0;
    // img3.style.opacity = 0;
    // img1.style.transform = "translateX(0vw)"
    // img2.style.transform = "translateX(0vw)"
    // img3.style.transform = "translateX(0vw)"
    heading.style.opacity = 0

    setTimeout(() => {

        if (currentImg == 0) {
            // img2.style.opacity = 1;
            // img2.style.transform = "translateX(0vw)"
            img1.style.transform = "translateX(200vw)"
            // img3.style.transform = "translateX(200vw)"
            heading.textContent = "Earbuds in. Volume up. Ignore the world."
            heading.style.opacity = 1
            heading.style.transform = "translateX(0vw)"
            currentImg++;
        }

        else if (currentImg == 1) {
            // img3.style.opacity = 1;
            // img3.style.transform = "translateX(0vw)"
            img2.style.transform = "translateX(200vw)"
            // img1.style.transform = "translateX(200vw)"
            heading.style.opacity = 1
            heading.textContent = "The headphone that will make you tap on every beat."
            heading.style.transform = "translateX(0vw)"
            currentImg++;
        }

        else {
            // img1.style.opacity = 1;
            // img1.style.transform = "translateX(0vw)"
            img1.style.transform = "translateX(0vw)"
            img2.style.transform = "translateX(0vw)"
            heading.textContent = "A watch to go with every attire."
            heading.style.opacity = 1
            heading.style.transform = "translateX(0vw)"
            currentImg = 0;
        }
    }, 700);
}

setTimeout(() => {

    var timer = setInterval(changeSlide, interval);
}, 5000);


// exclusive product image changer

function smartWatch(e) {
    if (e == 1) smartWatchImage.src = "./Sources/smartWatchColor1.jpg"
    else if (e == 2) smartWatchImage.src = "./Sources/smartWatchColor3.jpg"
    else if (e == 3) {smartWatchImage.src = "./Sources/smartWatchColor4.jpg"
}

}
function earbud(e) {
    if (e == 1) earbudImage.src = "./Sources/earbudsColor1.png"
    else if (e == 2) earbudImage.src = "./Sources/earbudsColor2.png"
    else if (e == 3) earbudImage.src = "./Sources/earbudsColor3.png"

}
function headphone(e) {
    if (e == 1) headphoneImage.src = "./Sources/headphonesColor1.png"
    else if (e == 2) headphoneImage.src = "./Sources/headphonesColor2.png"
    else if (e == 3) headphoneImage.src = "./Sources/headphonesColor3.png"

}


// View More Transition

viewMoreContainer.addEventListener("mouseover", ()=>{
    viewMoreContainer.style.backgroundColor = "rgb(156,0,156)"
    viewMoreArrow.style.color = "white"
    viewMorePara.style.color = "white"
})

viewMoreContainer.addEventListener("mouseout", ()=>{
    viewMoreContainer.style.backgroundColor = "white"
    viewMoreArrow.style.color = "black"
    viewMorePara.style.color = "black"
})

