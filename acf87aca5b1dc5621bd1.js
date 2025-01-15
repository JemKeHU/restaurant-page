import "./style.css";
import initialPageLoad from "./main.js";
import mainPageLoad from "./menu.js";
import aboutPageLoad from "./about.js";

document.addEventListener("DOMContentLoaded", () => {

    const content = document.querySelector("#content");
    const homeButton = document.querySelector(".home-button");
    const menuButton = document.querySelector(".menu-button");
    const aboutButton = document.querySelector(".about-button");

    function clearContent() {
        if (content) {
            content.innerHTML = "";
        } else {
            console.error("Element with id 'content' does not exist");
        }
    }
    
    function handleHomeButtonClick() {
        clearContent();
        initialPageLoad();
    }

    function handleMenuButtonClick() {
        clearContent();
        mainPageLoad();
    }

    function handleAboutButtonClick() {
        clearContent();
        aboutPageLoad();
    }

    initialPageLoad();
    
    homeButton.addEventListener("click", handleHomeButtonClick);
    menuButton.addEventListener("click", handleMenuButtonClick);
    aboutButton.addEventListener("click", handleAboutButtonClick);
});
