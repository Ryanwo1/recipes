import Icon from "../src/img/Sliced-Tomato-Salad_EXPS_SCMBZ19_122886_C01_24_2b-11.jpg";

export function loadMenuPage() {
    const mainContentDiv = document.getElementById("content");

    mainContentDiv.innerHTML = '';
    mainContentDiv.classList.add("green-background");

    let mainHeader = document.createElement("h1");
    mainHeader.innerHTML = "Welcome to Ryan's Foodmatorium!";
  
    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    let introductoryText = document.createElement("p");
    introductoryText.innerHTML =
      "MENU TIME";
  
    mainContentDiv.appendChild(mainHeader);
    mainContentDiv.appendChild(myIcon);
    mainContentDiv.appendChild(introductoryText);
  
    return mainContentDiv;
}