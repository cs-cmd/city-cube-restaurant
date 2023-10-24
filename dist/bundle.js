/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadContent */ \"./src/loadContent.js\");\n\n\ndocument.querySelectorAll('.page-nav li').forEach(function(node) {\n        node.addEventListener('click', () => {\n            _loadContent__WEBPACK_IMPORTED_MODULE_0__.pageLoader.setCurrentPage(node);\n    });\n});\n\ndocument.addEventListener('load', _loadContent__WEBPACK_IMPORTED_MODULE_0__.pageLoader.setCurrentPage(document.querySelector('.page-nav li')));\n\n//# sourceURL=webpack://odin-restaurant/./src/driver.js?");

/***/ }),

/***/ "./src/loadContent.js":
/*!****************************!*\
  !*** ./src/loadContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoader: () => (/* binding */ pageLoader)\n/* harmony export */ });\n/* harmony import */ var _pages_createPages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/createPages */ \"./src/pages/createPages.js\");\n\nconst homeImagePath = __webpack_require__(/*! ../res/images/storefront.jpeg */ \"./res/images/storefront.jpeg\");\n\nconst pageLoader = (function() {\n    const container = document.getElementById('tab-container');\n    let currentPage = null;\n    let homePage = null;\n    let aboutPage = null;\n    let menuPage = null;\n    let contactPage = null;\n\n    const setCurrentPage = (pageButton) => {\n        let newPageName = pageButton.getAttribute('tab');\n        let newPage = null;\n\n        switch(newPageName) {\n            case \"home\":\n                console.log('home');\n                if (homePage === null) {\n                    homePage = (0,_pages_createPages__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(homeImagePath);\n                }\n                newPage = homePage;\n                break;\n            case \"about\":\n                // do about\n                console.log('about');\n                if (aboutPage === null) {\n                    // aboutPage = createAboutPage();\n                }\n                newPage = aboutPage;\n                break;\n            case \"menu\": \n                console.log('menu');\n                if (menuPage === null) {\n                    // menuPage = createMenuPage();\n                }\n                newPage = menuPage;\n                // do menu\n                break;\n            case \"contact\":\n                console.log('contact');\n                if (contactPage === null) {\n                    // contactPage = createContactPage();\n                }\n                newPage = contactPage;\n                // do contact\n                break;\n            default:\n                console.log(`Invalid page selection: ${newPage}`);\n                break;\n        };\n\n        if (newPage === null) {\n            console.log('error; returning...');\n            return;\n        }\n        if (currentPage === newPage) {\n            console.log('pages are same; returning...');\n            return;\n        }\n\n        clearTabContainer();\n        container.appendChild(newPage);\n        currentPage = newPage;\n    }\n\n    function clearTabContainer() {\n        container.querySelectorAll('*').forEach((node) => {\n            node.remove()\n        });\n    }\n    return { setCurrentPage };\n})();\n\n//# sourceURL=webpack://odin-restaurant/./src/loadContent.js?");

/***/ }),

/***/ "./src/pages/createPages.js":
/*!**********************************!*\
  !*** ./src/pages/createPages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\nfunction createHomePage(homeImagePath) {\n    // create home page\n    const homePageDiv = document.createElement('div');\n    homePageDiv.id = 'tab';\n\n    // set up and add main header\n    const mainHeader = document.createElement('h1');\n    mainHeader.classList.add('headers');\n    mainHeader.innerText = 'Welcome to CityCube!';\n    homePageDiv.appendChild(mainHeader);\n\n    // set up and add subheader to page\n    const subHeader = document.createElement('h3');\n    subHeader.classList.add('headers');\n    subHeader.innerText = \"The City's one-and-only meal-replacement chain restaurant!\";\n    homePageDiv.appendChild(subHeader);\n\n    // set up and add main figure image\n    const mainFigure = document.createElement('figure');\n    const image = new Image();\n    image.src = homeImagePath;\n    image.alt = 'AI-generated image of storefront with a bright light in a dystopian city';\n    image.classList.add('page-image');\n    // create figure caption element\n    const figCap = document.createElement('figcaption');\n    figCap.innerText = \"CityCube's first brick-and-mortar store in Downtown, near 7th Street Station\";\n    mainFigure.appendChild(image);\n    mainFigure.appendChild(figCap);\n    homePageDiv.appendChild(mainFigure);\n\n    // add page break line\n    const pageBreak = document.createElement('div');\n    pageBreak.classList.add('page-break');\n    homePageDiv.appendChild(pageBreak);\n\n    const p1 = document.createElement('p');\n    p1.innerText = \"With locations from Downtown to the Upper Sides, CityCube is your one-stop-shop for quick-and-easy meal replacements!\";\n    homePageDiv.appendChild(p1);\n\n    const p2 = document.createElement('p');\n    p2.innerText = \"Our patented formula of nutrients and minerals sourced from exotic locations across our planet provides you with everything your body needs to function in our society!\";\n    homePageDiv.appendChild(p2);\n\n    const p3 = document.createElement('p');\n    p3.innerText = \"As a member of the CS/CMD umbrella conglomerate, you can use your ::CS/CREDIT:: here to purchase your goods! You can inquire more about these options in our \";\n    const contactLink = document.createElement('a');\n    contactLink.href = '#';\n    contactLink.innerText = \"contact form.\";\n    p3.appendChild(contactLink);\n    homePageDiv.appendChild(p3);\n\n    const p4 = document.createElement('p');\n    p4.innerText = \"Interested in how our store came to be in the City? View our 'about page' to read about our founder's journey through the bureaucratic jungle to secure a foothold in the food industry.\";\n    homePageDiv.appendChild(p4);\n    \n    return homePageDiv;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/createPages.js?");

/***/ }),

/***/ "./res/images/storefront.jpeg":
/*!************************************!*\
  !*** ./res/images/storefront.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6a206edc2d9d7b017512.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./res/images/storefront.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/driver.js");
/******/ 	
/******/ })()
;