var elButton = document.querySelector(".header-btn");
var elHeader = document.querySelector(".header");
var elHero = document.querySelector(".hero");
var elInput = document.querySelector(".hero-input");
var elSelect = document.querySelector(".hero-select");
var elBoxes = document.querySelectorAll(".hero-box");

elButton.addEventListener('click', function(){
    elHeader.classList.toggle("header-dark");
    elHero.classList.toggle("hero-dark");
    elInput.classList.toggle("input-dark");
    elSelect.classList.toggle("select-dark");

    elBoxes.forEach(box => {
        box.classList.toggle('hero-box-dark');
    })

})