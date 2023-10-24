import { createHomePage } from "./pages/createPages";
const homeImagePath = require('../res/images/storefront.jpeg');

export const pageLoader = (function() {
    const container = document.getElementById('tab-container');
    let currentPage = null;
    let homePage = null;
    let aboutPage = null;
    let menuPage = null;
    let contactPage = null;

    const setCurrentPage = (pageButton) => {
        let newPageName = pageButton.getAttribute('tab');
        let newPage = null;

        switch(newPageName) {
            case "home":
                console.log('home');
                if (homePage === null) {
                    homePage = createHomePage(homeImagePath);
                }
                newPage = homePage;
                break;
            case "about":
                // do about
                console.log('about');
                if (aboutPage === null) {
                    // aboutPage = createAboutPage();
                }
                newPage = aboutPage;
                break;
            case "menu": 
                console.log('menu');
                if (menuPage === null) {
                    // menuPage = createMenuPage();
                }
                newPage = menuPage;
                // do menu
                break;
            case "contact":
                console.log('contact');
                if (contactPage === null) {
                    // contactPage = createContactPage();
                }
                newPage = contactPage;
                // do contact
                break;
            default:
                console.log(`Invalid page selection: ${newPage}`);
                break;
        };

        if (newPage === null) {
            console.log('error; returning...');
            return;
        }
        if (currentPage === newPage) {
            console.log('pages are same; returning...');
            return;
        }

        clearTabContainer();
        container.appendChild(newPage);
        currentPage = newPage;
    }

    function clearTabContainer() {
        container.querySelectorAll('*').forEach((node) => {
            node.remove()
        });
    }
    return { setCurrentPage };
})();