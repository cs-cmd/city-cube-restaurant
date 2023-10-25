import { createLink, setUpBaseDiv } from "./createBaseline";
import '../../res/styles/menu-grid-style.css';
const foodImagePath = require('../../res/images/food-images/food1.jpg');

export function createMenuPage() {
    const foodDesc = [
        'Tasty Treat 1',
        'Tasty Treat 2',
        'Tasty Treat 3'
    ];

    let mainDiv = setUpBaseDiv();
   
    const mainHeader = document.createElement('h1');
    mainHeader.classList.add("headers");
    mainHeader.innerText = 'Our Menu';
    mainDiv.appendChild(mainHeader);

    const p1 = document.createElement('p');
    p1.innerHTML = "We strive to interest the palate of every citizen of the City! If you don't see an option on our menu that you'd like to have, ";
    const contactLink = createLink('reach out to us', 'contact');
    p1.innerHTML += contactLink.outerHTML;
    p1.innerHTML += ' to see about adding your idea to our ever-growing menu!';
    mainDiv.appendChild(p1);

    const menu = document.createElement('div');
    menu.classList.add('menu');

    for(let i = 0; i < 3; ++i) {
        const cell = document.createElement('figure');
        cell.classList.add('cell');
        const image = new Image();
        image.src = foodImagePath;
        const figCap = document.createElement('figcaption');
        figCap.innerText = foodDesc[i];
        cell.appendChild(image);
        cell.appendChild(figCap);

        menu.appendChild(cell);
    }

    mainDiv.appendChild(menu);

    return mainDiv;
}