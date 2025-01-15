export default function aboutPageLoad() {
    const container = document.querySelector("#content");

    container.innerHTML = "";
    const headerContainer = document.createElement("div");
    headerContainer.setAttribute("class", "header-container");

    const headingOne = document.createElement("h1");
    headingOne.setAttribute("class", "heading-one");
    headingOne.textContent = "About Us";

    const pizzaImageOne = document.createElement("img");
    pizzaImageOne.setAttribute("class", "pizza-image-one");
    
    const pizzaImageTwo = document.createElement("img");
    pizzaImageTwo.setAttribute("class", "pizza-image-two");

    headerContainer.appendChild(headingOne);
    headerContainer.appendChild(pizzaImageOne);
    headerContainer.appendChild(pizzaImageTwo);

    container.appendChild(headerContainer);

    const aboutText = document.createElement("p");
    aboutText.textContent = "We are a passionate group of pizza lovers who believe in the joy of great food. Our mission is to bring delicious, high-quality pizzas and drinks to your table with fast service and a friendly atmosphere. Whether you are here for a quick bite or a family dinner, we promise to make your experience unforgettable.";
    aboutText.setAttribute("class", "about-text");

    container.appendChild(aboutText);
    
    const teamHeading = document.createElement("h2");
    teamHeading.textContent = "Our Team";

    container.appendChild(teamHeading);

    const teamList = document.createElement("ul");
    teamList.setAttribute("class", "team-list");
    const teamMembers = [
        "John Doe - Founder & CEO",
        "Jane Smith - Head Chef",
        "Alice Johnson - Marketing Manager",
        "Bob Brown - Customer Service"
    ];

    teamMembers.forEach(member => {
        const li = document.createElement("li");
        li.textContent = member;
        teamList.appendChild(li);
    });

    container.appendChild(teamList);
}
