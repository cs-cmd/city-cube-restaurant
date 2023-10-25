export function setUpBaseDiv() {
    const mainDiv = document.createElement('div');
    mainDiv.id = 'tab';
    
    return mainDiv;
}

export function createLink(innerText, tab) {
    // create link based on innertext and tab given
    const link = document.createElement('a');
    link.innerText = innerText;
    link.setAttribute('tab', tab);
    link.classList.add('tab-nav-link');

    return link;
}