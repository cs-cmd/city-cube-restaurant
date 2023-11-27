import { pageLoader } from "./loadContent";

// Get page buttons and add setCurrentPage function to it.
document.querySelectorAll('.page-nav li[tab]').forEach(function(node) {
        node.addEventListener('click', () => {
            pageLoader.setCurrentPage(node.getAttribute('tab'));
    });
});

// on load, set current page to 'home'
document.addEventListener('load', pageLoader.setCurrentPage('home'));

// when header image is clicked, send user to home
document.querySelector('.header-image').addEventListener('click', () => {
    pageLoader.setCurrentPage('home');
});

