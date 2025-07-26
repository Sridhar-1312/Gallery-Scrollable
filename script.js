let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


scrollContainer.addEventListener("mousepad", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltay;
    scrollContainer.style.scrollBehavior = "auto"

});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900;
})
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900;
})