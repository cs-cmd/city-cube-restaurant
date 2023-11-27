// imports
import { createHomePage } from "./pages/createHomePage";
import { createContactPage } from "./pages/createContactPage";
import { createAboutPage } from "./pages/createAboutPage";
import { createMenuPage } from "./pages/createMenuPage";

// image paths
const homeImagePath = require('../res/images/storefront.jpeg');

// style paths 
// pageLoader object
export const pageLoader = (function() {
    // current page is used to keep track of current page (to prevent
    // navigating from current page to current page (prevent swaps in inserts),
    // currentPageButton is used to keep track of the current page's button
    // to remove current-tab class when switching tabs
    let currentPage = null;
    let currentPageButton = null;
    
    // cache different pages for quick retrieval (cuts down on processing)
    let homePage = null;
    let aboutPage = null;
    let menuPage = null;
    let contactPage = null;

    // set current page method
    const setCurrentPage = (tabName) => {
        // main container
        let container = document.getElementById('tab-container')
        const pageButton = document.querySelector(`.page-nav li[tab=${tabName}]`);

        // create variable to keep track of new page.
        let newPage = null;
        
        // used to add event listeners to spans with a tab
        let justMade = false;

        // switch statement to find new page.
        // if the page variable for the tag attribute is null, create
        // the page (pseduo-caching). Then, assign page to the newPage var
        // if default, error and print value
        switch(tabName) {
            case "home":
                if (homePage === null) {
                    homePage = createHomePage(homeImagePath);
                    justMade = true;
                }
                newPage = homePage;
                break;
            case "about":
                if (aboutPage === null) {
                    aboutPage = createAboutPage();
                    justMade = true;
                }
                newPage = aboutPage;
                break;
            case "menu": 
                if (menuPage === null) {
                    menuPage = createMenuPage();
                    justMade = true;
                }
                newPage = menuPage;
                break;
            case "contact":
                if (contactPage === null) {
                    contactPage = createContactPage();
                    justMade = true;
                }
                newPage = contactPage;
                break;
            default:
                console.log(`:: Invalid page selection: ${newPageName} ::`);
                break;
        };

        // if an error occurred, return
        if (newPage === null) {
            console.log(':: newPage is null; returning ::');
            return;
        } else if (currentPage === newPage) {
            return;
        }

        // if the page was just made, add an onclick to change the tab
        if (justMade) {
            const tabLinks = newPage.querySelectorAll('*[tab]');
            tabLinks.forEach(e => {
                e.addEventListener('click', () => {
                    setCurrentPage(e.getAttribute('tab'));
                })
            });
        }

        clearTabContainer();
        changeTab(pageButton);
        container.appendChild(newPage);
        currentPage = newPage;

        // bring user to top of window
        window.scrollTo(0, 0);
    }

    // removes the current tab loaded into the div container
    function clearTabContainer() {
        let currTab = document.getElementById('tab');
        if (currTab !== null) {
            currTab.remove();
        }
    }

    // used to change current tab CSS
    function changeTab(newTab) {
        if (currentPageButton !== null) {
            currentPageButton.classList.remove('current-tab');
        }
        newTab.classList.add('current-tab');
        currentPageButton = newTab;
    }

    return { setCurrentPage };
})();