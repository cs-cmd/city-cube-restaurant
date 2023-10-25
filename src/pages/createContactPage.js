import { setUpBaseDiv } from "./createBaseline";

export function createContactPage() {
    const mainDiv = setUpBaseDiv();

    const h1 = document.createElement('h1');
    h1.style.textAlign = 'center';
    h1.innerText = ':: \'Contact Page\' is under construction ::';

    const h3 = document.createElement('h3');
    h3.style.textAlign = 'center';
    h3.innerHTML = ':: Please stand by ::';

    mainDiv.appendChild(h1);
    mainDiv.appendChild(h3);

    
    return mainDiv;
}