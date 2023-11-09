import { pageLoader } from "./loadContent";

document.querySelectorAll('.page-nav li').forEach(function(node) {
        node.addEventListener('click', () => {
            pageLoader.setCurrentPage(node);
    });
});

const homeButton = document.querySelector('.page-nav li');

document.addEventListener('load', pageLoader.setCurrentPage(homeButton));

document.querySelector('.header-image').addEventListener('click', () => {
    pageLoader.setCurrentPage(homeButton);
});

