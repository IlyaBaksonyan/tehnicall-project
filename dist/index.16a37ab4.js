let noCode = document.getElementById("noCode");
let freelancer = document.getElementById("freelancerApproach");
let frontEnd = document.getElementById("front-endDeveloperApproach");
noCode.addEventListener("scroll", function() {
    change_my_url();
});
freelancer.addEventListener("click", function() {
    change_my_url();
});
frontEnd.addEventListener("click", function() {
    change_my_url();
});
function change_my_url() {
    window.history.pushState(null, null, noCode);
}
console.log("g");

//# sourceMappingURL=index.16a37ab4.js.map
