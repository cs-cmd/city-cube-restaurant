import { pageLoader } from "./loadContent";

document.querySelectorAll('.page-nav li').forEach(function(node) {
        node.addEventListener('click', () => {
            pageLoader.setCurrentPage(node);
    });
});

document.addEventListener('load', pageLoader.setCurrentPage(document.querySelector('.page-nav li')));

