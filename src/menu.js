import carneImage from "./carne.png"
import chickenImage from "./chicken.png"
import fourImage from "./four.png"
import lemonadeImage from "./lemonade.png"
import colaImage from "./cola.png"
import icedTeaImage from "./icedtea.png"
import orangeJuiceImage from "./orange.png"

export default function menuPageLoad() {
    const container = document.querySelector("#content");
    
    container.innerHTML = "";
    
    const menuHead = document.createElement("h1");
    menuHead.setAttribute("class", "heading-one");
    menuHead.innerText = "Menu";
    
    container.appendChild(menuHead);
    
    const hOne = document.createElement("h1");
    hOne.textContent = "Pizza";
    
    container.appendChild(hOne);
    
    const cardOne = document.createElement("div");
    cardOne.setAttribute("class", "card");
    const hInnerOne = document.createElement("h1");
    hInnerOne.textContent = "Four Seasons Pizza";
    const pInnerOne = document.createElement("p");
    pInnerOne.textContent = "Portobello mushrooms, artichokes, cherry tomatoes, Cotto ham, fresh spinach, wheat flour, Mozzarella and Ricotta cheese, yeast, tomato sauce";
    const innerCardDiv = document.createElement("div");
    innerCardDiv.setAttribute("class", "inner-card-div");
    const priceOne = document.createElement("p");
    priceOne.textContent = "$7";
    const four = document.createElement("img");
    four.setAttribute("class", "inner-image-div");
    four.src = fourImage;

    innerCardDiv.appendChild(priceOne);
    innerCardDiv.appendChild(four);

    cardOne.appendChild(hInnerOne);
    cardOne.appendChild(pInnerOne);
    cardOne.appendChild(innerCardDiv);

    const cardTwo = document.createElement("div");
    cardTwo.setAttribute("class", "card");
    const hInnerThree = document.createElement("h1");
    hInnerThree.textContent = "CHICKEN PIZZA";
    const pInnerThree = document.createElement("p");
    pInnerThree.textContent = "Chicken fillet, canned corn, sweet pepper, wheat flour, Mozzarella cheese, yeast, tomato sauce";
    const innerCardDivTwo = document.createElement("div");
    innerCardDivTwo.setAttribute("class", "inner-card-div");
    const priceThree = document.createElement("p");
    priceThree.textContent = "$6";
    const chicken = document.createElement("img");
    chicken.setAttribute("class", "inner-image-div");
    chicken.src = chickenImage;

    innerCardDivTwo.appendChild(priceThree);
    innerCardDivTwo.appendChild(chicken);

    cardTwo.appendChild(hInnerThree);
    cardTwo.appendChild(pInnerThree);
    cardTwo.appendChild(innerCardDivTwo);
    
    const cardThree = document.createElement("div");
    cardThree.setAttribute("class", "card");
    const hInnerTwo = document.createElement("h1");
    hInnerTwo.textContent = "Di Carne with four types of salami";
    const pInnerTwo = document.createElement("p");
    pInnerTwo.textContent = "Wheat flour, Mozzarella and Ricotta cheese, Milano, Cotto ham, Veneto, bacon, yeast, tomato sauce";
    const innerCardDivThree = document.createElement("div");
    innerCardDivThree.setAttribute("class", "inner-card-div");
    const priceFour = document.createElement("p");
    priceFour.textContent = "$8";
    const carne = document.createElement("img");
    carne.setAttribute("class", "inner-image-div");
    carne.src = carneImage;

    innerCardDivThree.appendChild(priceFour);
    innerCardDivThree.appendChild(carne);

    cardThree.appendChild(hInnerTwo);
    cardThree.appendChild(pInnerTwo);
    cardThree.appendChild(innerCardDivThree);

    container.appendChild(cardOne);
    container.appendChild(cardThree);
    container.appendChild(cardTwo);

    const hTwo = document.createElement("h1");
    hTwo.textContent = "Drink";

    container.appendChild(hTwo);

    const cardFour = document.createElement("div");
    cardFour.setAttribute("class", "card");
    const hInnerFour = document.createElement("h1");
    hInnerFour.textContent = "Coca Cola";
    const pInnerFour = document.createElement("p");
    pInnerFour.textContent = "A refreshing soda drink.";
    const innerCardDivFour = document.createElement("div");
    innerCardDivFour.setAttribute("class", "inner-card-div");
    const priceFive = document.createElement("p");
    priceFive.textContent = "$2";
    const cocaCola = document.createElement("img");
    cocaCola.setAttribute("class", "inner-image-div");
    cocaCola.src = colaImage; // Подставьте нужный путь к изображению Coca Cola

    innerCardDivFour.appendChild(priceFive);
    innerCardDivFour.appendChild(cocaCola);

    cardFour.appendChild(hInnerFour);
    cardFour.appendChild(pInnerFour);
    cardFour.appendChild(innerCardDivFour);

    const cardFive = document.createElement("div");
    cardFive.setAttribute("class", "card");
    const hInnerFive = document.createElement("h1");
    hInnerFive.textContent = "Orange Juice";
    const pInnerFive = document.createElement("p");
    pInnerFive.textContent = "Freshly squeezed orange juice.";
    const innerCardDivFive = document.createElement("div");
    innerCardDivFive.setAttribute("class", "inner-card-div");
    const priceSix = document.createElement("p");
    priceSix.textContent = "$3";
    const orangeJuice = document.createElement("img");
    orangeJuice.setAttribute("class", "inner-image-div");
    orangeJuice.src = orangeJuiceImage; // Подставьте нужный путь к изображению Orange Juice

    innerCardDivFive.appendChild(priceSix);
    innerCardDivFive.appendChild(orangeJuice);

    cardFive.appendChild(hInnerFive);
    cardFive.appendChild(pInnerFive);
    cardFive.appendChild(innerCardDivFive);

    const cardSix = document.createElement("div");
    cardSix.setAttribute("class", "card");
    const hInnerSix = document.createElement("h1");
    hInnerSix.textContent = "Lemonade";
    const pInnerSix = document.createElement("p");
    pInnerSix.textContent = "Sweet and tangy lemonade.";
    const innerCardDivSix = document.createElement("div");
    innerCardDivSix.setAttribute("class", "inner-card-div");
    const priceSeven = document.createElement("p");
    priceSeven.textContent = "$2.5";
    const lemonade = document.createElement("img");
    lemonade.setAttribute("class", "inner-image-div");
    lemonade.src = lemonadeImage; // Подставьте нужный путь к изображению Lemonade

    innerCardDivSix.appendChild(priceSeven);
    innerCardDivSix.appendChild(lemonade);

    cardSix.appendChild(hInnerSix);
    cardSix.appendChild(pInnerSix);
    cardSix.appendChild(innerCardDivSix);

    const cardSeven = document.createElement("div");
    cardSeven.setAttribute("class", "card");
    const hInnerSeven = document.createElement("h1");
    hInnerSeven.textContent = "Iced Tea";
    const pInnerSeven = document.createElement("p");
    pInnerSeven.textContent = "Chilled tea with a hint of lemon.";
    const innerCardDivSeven = document.createElement("div");
    innerCardDivSeven.setAttribute("class", "inner-card-div");
    const priceEight = document.createElement("p");
    priceEight.textContent = "$2";
    const icedTea = document.createElement("img");
    icedTea.setAttribute("class", "inner-image-div");
    icedTea.src = icedTeaImage; // Подставьте нужный путь к изображению Iced Tea

    innerCardDivSeven.appendChild(priceEight);
    innerCardDivSeven.appendChild(icedTea);

    cardSeven.appendChild(hInnerSeven);
    cardSeven.appendChild(pInnerSeven);
    cardSeven.appendChild(innerCardDivSeven);

    // Добавляем карточки напитков в контейнер
    container.appendChild(cardFour);
    container.appendChild(cardFive);
    container.appendChild(cardSix);
    container.appendChild(cardSeven);
}