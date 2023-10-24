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
    const setCurrentPage = (pageButton) => {
        // main container
        let container = document.getElementById('tab-container')
        
        // get tab attibute from button clicked
        let newPageName = pageButton.getAttribute('tab');
        // create variable to keep track of new page.
        let newPage = null;

        // switch statement to find new page.
        // if the page variable for the tag attribute is null, create
        // the page (pseduo-caching). Then, assign page to the newPage var
        // if default, error and print value
        switch(newPageName) {
            case "home":
                console.log('home');
                if (homePage === null) {
                    homePage = createHomePage(homeImagePath);
                    addChangeTab(homePage);
                }
                newPage = homePage;
                break;
            case "about":
                console.log('about');
                if (aboutPage === null) {
                    aboutPage = createAboutPage();
                    addChangeTab(aboutPage);
                }
                newPage = aboutPage;
                break;
            case "menu": 
                console.log('menu');
                if (menuPage === null) {
                    menuPage = createMenuPage();
                    addChangeTab(menuPage);
                }
                newPage = menuPage;
                break;
            case "contact":
                console.log('contact');
                if (contactPage === null) {
                    contactPage = createContactPage();
                    addChangeTab(contactPage);
                }
                newPage = contactPage;
                break;
            default:
                console.log(`Invalid page selection: ${newPageName}`);
                break;
        };

        // if an error occurred, return
        if (newPage === null) {
            console.log(':: newPage is null | Returning ::');
            return;
        }
        if (currentPage === newPage) {
            console.log(':: Current page and new page are same | Returning ::');
            return;
        }

        clearTabContainer();
        changeTab(pageButton);
        container.appendChild(newPage);
        currentPage = newPage;
        // bring user to top of window
        window.scrollTo(0, 0);
    }

    
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

    // used to add changeTab functionality to links in the page
    function addChangeTab(container) {
        console.log('in addChangeTab');
        container.querySelectorAll('.tab-nav-link').forEach((node) => {
            node.addEventListener('click', () => {
                // this is an ugly little hack to get the button that was pressed and pass it in as the
                // button click. Very ugly, but it works.
                setCurrentPage(document.querySelector(`.page-nav li[tab=${node.getAttribute('tab')}]`));
            });
        });
    }

    return { setCurrentPage };
})();