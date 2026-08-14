console.log("JavaScript is working");
const form = document.querySelector(".contactform");
const message = document.querySelector(".message");
form.addEventListener("submit",function(event) {
    event.preventDefault();
    form.style.display = "none";
    message.style.display = "block";
});
function goBack() {
    message.style.display = "none";
    form.style.display = "block";
    form.reset();
}
