import { createLink, setUpBaseDiv } from "./createBaseline";

export function createMenuPage() {
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

    return mainDiv;
}