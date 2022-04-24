import {printMe, loadPage} from './page-load';
import { loadMenuPage } from './load-menu';
import '../src/style/style.css';
import Icon from '../src/img/Sliced-Tomato-Salad_EXPS_SCMBZ19_122886_C01_24_2b-11.jpg';
import html from "./index.html";


const mainNavBar = document.getElementById("nav-bar");
const headerFlexBox = document.createElement("ul");
headerFlexBox.classList.add("main-nav-bar");
mainNavBar.appendChild(headerFlexBox);

const homeTab = document.createElement("li");
const homeTabLink = document.createElement("a");
homeTabLink.setAttribute('href', '#');    
homeTabLink.innerHTML = "Home";
homeTab.appendChild(homeTabLink)
headerFlexBox.appendChild(homeTab);
homeTab.addEventListener("click", loadPage);

const menuTab = document.createElement("li");
const menuTabLink = document.createElement("a");
menuTabLink.setAttribute('href', '#');    
menuTabLink.innerHTML = "Menu";
menuTab.appendChild(menuTabLink)
headerFlexBox.appendChild(menuTab);
menuTab.addEventListener("click", loadMenuPage);

const contactTab = document.createElement("li");
const contactTabLink = document.createElement("a");
contactTabLink.setAttribute('href', '#'); 
contactTabLink.innerHTML = "Contact";
contactTab.appendChild(contactTabLink);
headerFlexBox.appendChild(contactTab);

printMe();
loadPage();
// loadMenuPage();