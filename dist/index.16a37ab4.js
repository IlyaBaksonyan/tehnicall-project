let activeIndex = 0;
const groups = document.getElementsByClassName("article__section");
const btnPrev = document.querySelectorAll(".btnPrev");
const btnNext = document.querySelectorAll(".btnNext");
btnPrev.forEach(function(e) {
    e.addEventListener("click", prevBtn);
});
btnNext.forEach((e)=>{
    e.addEventListener("click", nextBtn);
});
function prevBtn() {
    //bump active index
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`), nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
}
function nextBtn() {
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`), nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
}

//# sourceMappingURL=index.16a37ab4.js.map
