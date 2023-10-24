import { setUpBaseDiv } from "./createBaseline";

export function createMenuPage() {
    let mainDiv = setUpBaseDiv();
    mainDiv.innerText = 'Hello menu page!';

    return mainDiv;
}