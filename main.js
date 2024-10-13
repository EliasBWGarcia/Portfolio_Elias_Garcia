const buttonDarkmode = document.querySelector(".theme");
const body = document.body;

buttonDarkmode.addEventListener("click", function () {
    // tilføj dark-mode class til body elementet
    body.classList.toggle("dark-mode");
    // opdater knappens tekst, der er tilsvarende den specifikke mode.
    if (body.classList.contains("dark-mode")) {
        buttonDarkmode.textContent = "Lightmode";
    } else {
        buttonDarkmode.textContent = "Darkmode";
    }
});
