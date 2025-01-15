import odinImageOne from "./withoutbackground.png";

export default function initialPageLoad() {
    const container = document.querySelector("#content");
    
    container.innerHTML = "";
    
    const h1WithClass = document.createElement("h1");
    h1WithClass.setAttribute("class", "heading-one");
    h1WithClass.textContent = "Pizza Plex's Place";

    const imgOne = document.createElement("img");
    imgOne.setAttribute("class", "pizza-image-one");
    imgOne.src = odinImageOne;
    const imgTwo = document.createElement("img");
    imgTwo.setAttribute("class", "pizza-image-two");
    imgTwo.src = odinImageOne;

    h1WithClass.appendChild(imgOne);
    h1WithClass.appendChild(imgTwo);
    
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const pOne = document.createElement("p");
    pOne.textContent = "Pizza's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the pizza sea, eating like a cool guy! This is exactly the kind of place that I like to return to again and again.";
    card.appendChild(pOne)
    const h1One = document.createElement("h1");
    h1One.setAttribute("class", "quote-name");
    h1One.textContent = "Stasik";
    card.appendChild(h1One);

    container.appendChild(h1WithClass);
    container.appendChild(card);

    const secondCard = document.createElement("div");
    secondCard.setAttribute("class", "card");
    const h1Second = document.createElement("h1");
    h1Second.textContent = "Hours";

    secondCard.appendChild(h1Second);

    const unorderedList = document.createElement("ul");
    const listItem1 = document.createElement("li");
    listItem1.textContent = "Sunday: 8am - 8pm";
    const listItem2 = document.createElement("li");
    listItem2.textContent = "Monday: 6am - 6pm";
    const listItem3 = document.createElement("li");
    listItem3.textContent = "Tuesday: 6am - 6pm";
    const listItem4 = document.createElement("li");
    listItem4.textContent = "Wednesday: 6am - 6pm";
    const listItem5 = document.createElement("li");
    listItem5.textContent = "Thursday: 6am - 10pm";
    const listItem6 = document.createElement("li");
    listItem6.textContent = "Friday: 6am - 10pm";
    const listItem7 = document.createElement("li");
    listItem7.textContent = "Saturday: 8am - 10pm";

    const listItems = [listItem1, listItem2, listItem3, listItem4, listItem5, listItem6, listItem7];

    for (let i = 0; i < listItems.length; i++) {
        unorderedList.appendChild(listItems[i]);
    }
    
    secondCard.appendChild(unorderedList);
    container.appendChild(secondCard);

    const thirdCard = document.createElement("div");
    thirdCard.setAttribute("class", "card");

    const h1Third = document.createElement("h1");
    h1Third.setAttribute("class", "location");
    h1Third.textContent = "Location";
    const pTwo = document.createElement("p");
    pTwo.textContent = "123 Forest Drive, Forestville, Maine";
    thirdCard.appendChild(h1Third);
    thirdCard.appendChild(pTwo);

    container.appendChild(thirdCard);
}

