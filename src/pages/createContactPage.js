import { setUpBaseDiv } from "./createBaseline";

export function createContactPage() {
    const mainDiv = setUpBaseDiv();
    mainDiv.innerText = 'Hello contact page!';
    mainDiv.style.textAlign = 'center';
    
    return mainDiv;
}