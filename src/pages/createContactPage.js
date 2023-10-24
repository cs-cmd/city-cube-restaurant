import { setUpBaseDiv } from "./createBaseline";

export function createContactPage() {
    const mainDiv = setUpBaseDiv();
    mainDiv.innerText = 'Hello contact page!';

    return mainDiv;
}