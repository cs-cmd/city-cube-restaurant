import { setUpBaseDiv } from "./createBaseline";

export function createAboutPage() {
    const mainDiv = setUpBaseDiv();
    mainDiv.innerText = 'Hello about page!';


    return mainDiv;
}