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

/***/ "./node_modules/css-loader/dist/cjs.js!./res/styles/menu-grid-style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./res/styles/menu-grid-style.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./page-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./res/styles/page-styles.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_page_styles_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.menu {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr;\n    margin-bottom: 10px;\n    gap: 10px;\n}\n\n.menu .cell {\n    border: 1px solid var(--accent-main);\n    padding: 0px;\n    margin: 0px;\n    color: var(--bg-main);\n    background-image: linear-gradient(45deg, var(--accent-main), var(--accent-second));\n    aspect-ratio: 1 / 1;\n    transition: scale .25s;\n}\n\n.menu .cell:hover {\n    scale: 105%;\n    cursor: pointer;\n}\n\n.menu .cell > img {\n    height: 80%;\n    width: 100%;\n    background-color: black;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./res/styles/menu-grid-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./res/styles/page-styles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./res/styles/page-styles.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --bg-main: #0c0c0c;\n    --bg-lighter: #8f8f8f;\n    --accent-main: #79d3d3;\n    --accent-second: #caa999;\n    --accent-blend-main: #94c5bf;\n    --accent-blend-second: #afb7ac;\n    --text-light: #fff;\n    --page-content-width: clamp(300px, 100%, 750px);\n\n    --valid-bg: #79d3d3;\n    --valid-border: #206262;\n    --invalid-bg: #D37979;\n    --invalid-border:#812A2A;\n    --gradient-background: linear-gradient(270deg, var(--accent-main), var(--accent-second));\n\n\n    --anim-normal: .5s;\n    --anim-fast: .25s;\n}\n\n.page-break {\n    width: 100%;\n    height: 1px;\n    background-image: var(--gradient-background);\n}\n\nhtml {\n    height: 100vh;\n    font-family: sans-serif;\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    background-color: var(--bg-main);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n\nheader {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    flex: 0 0 auto;\n}\n\nheader > *, #tab-container, footer{\n    width: var(--page-content-width);\n}\n\n.header-image {\n    cursor: pointer;\n    transition: filter var(--anim-normal);\n}\n.header-image:hover {\n    filter: brightness(50%)\n}\n\n.page-nav {\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    margin: 0px;\n    padding: 10px 0px;\n    gap: 10px;\n    justify-items: center;\n}\n\n.page-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 2rem;\n    width: min(100%, 15ch);\n    color: var(--accent-blend-main);\n    transition: transform var(--anim-fast),\n        background-color var(--anim-fast);\n    border: 1px solid var(--accent-blend-main);\n    border-radius: 15px;\n    background-color: var(--bg-main);\n}\n\n.page-button:hover {\n    transform: scale(1.12);\n    cursor: pointer;\n}\n\n.page-buttonactive {\n    filter: brightness(.75);\n}\n\n.page-button.current-tab {\n    background-color: var(--accent-main);\n    border: none;\n    color: var(--bg-main);\n}\n\n.page-image {\n    width: var(--page-content-width);\n}\n\nfigcaption {\n    font-size: .9rem;\n    text-align: center;\n}\n\n#tab-container {\n    flex: 1 1 auto;\n    color: var(--accent-blend-main);\n}\n\n#tab-container .headers {\n    width: 100%;\n    text-align: center;\n}\n\n#tab {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n}\n\np {\n    padding: 0px 0px;\n    margin-left: 5px;\n    margin-right: 5px;\n    text-indent: 3ch;\n    line-height: 1.75;\n}\n\nfooter {\n    flex: 0 0 auto;\n    text-align: center;\n    font-size: .9rem;\n    color: var(--accent-blend-main);\n}\n\n.footer-links {\n    display: flex;\n    margin: 0px;\n    padding: 0px;\n    align-content: center;\n    justify-content: center;\n    gap: 15px;\n}\n\n.footer-links > * {\n    display: flex;\n    align-items: center;\n    margin-top: 10px 0px;\n}\n.link-icon {\n    margin: 0px;\n    padding: 0px;\n    height: fit-content\n}\n\n.link-icon path {\n    fill: var(--accent-blend-main);\n}\n\n.contact-form {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-auto-flow: column;\n    gap: 1.5rem;\n}\n\n.contact-form .form-label {\n    grid-column: 1/3;\n}\n.contact-form .form-input {\n    grid-column: 3/5;\n    transition: background-color var(--anim-fast),\n        border var(--anim-fast);\n}\n.contact-form .form-input:valid {\n    background-color: var(--valid-bg);\n    border: 1px solid var(--valid-border);\n}\n\n.contact-form .form-input:invalid {\n    background-color: var(--invalid-bg);\n    border: 1px solid var(--invalid-border);\n}\n.form-textarea {\n    width: 100%;\n    resize: none;\n    grid-column: 1 / 5;\n    aspect-ratio: 5 / 1;\n    padding: 5px;\n    margin: 0px;\n    border: none;\n    box-sizing: border-box;\n    background-image: var(--gradient-background);\n    font-size: 1.15em;\n    border-radius: .5rem;\n}\n\n.form-button {\n    margin-top: 1rem;\n    grid-column: 2/4;\n    width: auto;\n}\n.form-button:hover {\n    background-color: var(--accent-main);\n    color: var(--bg-main);\n}\n\n.contact-form > .form-conf {\n    text-align: center;\n    grid-column: 1 / 5;\n    padding: 0px;\n    text-indent: 0px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./res/styles/page-styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./res/styles/tab-link-style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./res/styles/tab-link-style.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_page_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./page-styles.css */ \"./node_modules/css-loader/dist/cjs.js!./res/styles/page-styles.css\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_page_styles_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.tab-nav-link {\n    color: var(--accent-main);\n    text-decoration: underline;\n}\n\n.tab-nav-link:hover {\n    color: var(--accent-blend-second);\n    cursor: pointer;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./res/styles/tab-link-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./res/styles/menu-grid-style.css":
/*!****************************************!*\
  !*** ./res/styles/menu-grid-style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_grid_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu-grid-style.css */ \"./node_modules/css-loader/dist/cjs.js!./res/styles/menu-grid-style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_grid_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_grid_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_menu_grid_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_menu_grid_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./res/styles/menu-grid-style.css?");

/***/ }),

/***/ "./res/styles/tab-link-style.css":
/*!***************************************!*\
  !*** ./res/styles/tab-link-style.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_tab_link_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./tab-link-style.css */ \"./node_modules/css-loader/dist/cjs.js!./res/styles/tab-link-style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_tab_link_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_tab_link_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_tab_link_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_tab_link_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./res/styles/tab-link-style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/driver.js":
/*!***********************!*\
  !*** ./src/driver.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadContent */ \"./src/loadContent.js\");\n\n\n// Get page buttons and add setCurrentPage function to it.\ndocument.querySelectorAll('.page-nav li[tab]').forEach(function(node) {\n        node.addEventListener('click', () => {\n            _loadContent__WEBPACK_IMPORTED_MODULE_0__.pageLoader.setCurrentPage(node.getAttribute('tab'));\n    });\n});\n\n// on load, set current page to 'home'\ndocument.addEventListener('load', _loadContent__WEBPACK_IMPORTED_MODULE_0__.pageLoader.setCurrentPage('home'));\n\n// when header image is clicked, send user to home\ndocument.querySelector('.header-image').addEventListener('click', () => {\n    _loadContent__WEBPACK_IMPORTED_MODULE_0__.pageLoader.setCurrentPage('home');\n});\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/driver.js?");

/***/ }),

/***/ "./src/loadContent.js":
/*!****************************!*\
  !*** ./src/loadContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoader: () => (/* binding */ pageLoader)\n/* harmony export */ });\n/* harmony import */ var _pages_createHomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/createHomePage */ \"./src/pages/createHomePage.js\");\n/* harmony import */ var _pages_createContactPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/createContactPage */ \"./src/pages/createContactPage.js\");\n/* harmony import */ var _pages_createAboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/createAboutPage */ \"./src/pages/createAboutPage.js\");\n/* harmony import */ var _pages_createMenuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/createMenuPage */ \"./src/pages/createMenuPage.js\");\n// imports\n\n\n\n\n\n// image paths\nconst homeImagePath = __webpack_require__(/*! ../res/images/storefront.jpeg */ \"./res/images/storefront.jpeg\");\n\n// style paths \n// pageLoader object\nconst pageLoader = (function() {\n    // current page is used to keep track of current page (to prevent\n    // navigating from current page to current page (prevent swaps in inserts),\n    // currentPageButton is used to keep track of the current page's button\n    // to remove current-tab class when switching tabs\n    let currentPage = null;\n    let currentPageButton = null;\n    \n    // cache different pages for quick retrieval (cuts down on processing)\n    let homePage = null;\n    let aboutPage = null;\n    let menuPage = null;\n    let contactPage = null;\n\n    // set current page method\n    const setCurrentPage = (tabName) => {\n        // main container\n        let container = document.getElementById('tab-container')\n        const pageButton = document.querySelector(`.page-nav li[tab=${tabName}]`);\n\n        // create variable to keep track of new page.\n        let newPage = null;\n        \n        // used to add event listeners to spans with a tab\n        let justMade = false;\n\n        // switch statement to find new page.\n        // if the page variable for the tag attribute is null, create\n        // the page (pseduo-caching). Then, assign page to the newPage var\n        // if default, error and print value\n        switch(tabName) {\n            case \"home\":\n                if (homePage === null) {\n                    homePage = (0,_pages_createHomePage__WEBPACK_IMPORTED_MODULE_0__.createHomePage)(homeImagePath);\n                    justMade = true;\n                }\n                newPage = homePage;\n                break;\n            case \"about\":\n                if (aboutPage === null) {\n                    aboutPage = (0,_pages_createAboutPage__WEBPACK_IMPORTED_MODULE_2__.createAboutPage)();\n                    justMade = true;\n                }\n                newPage = aboutPage;\n                break;\n            case \"menu\": \n                if (menuPage === null) {\n                    menuPage = (0,_pages_createMenuPage__WEBPACK_IMPORTED_MODULE_3__.createMenuPage)();\n                    justMade = true;\n                }\n                newPage = menuPage;\n                break;\n            case \"contact\":\n                if (contactPage === null) {\n                    contactPage = (0,_pages_createContactPage__WEBPACK_IMPORTED_MODULE_1__.createContactPage)();\n                    justMade = true;\n                }\n                newPage = contactPage;\n                break;\n            default:\n                console.log(`:: Invalid page selection: ${newPageName} ::`);\n                break;\n        };\n\n        // if an error occurred, return\n        if (newPage === null) {\n            console.log(':: newPage is null; returning ::');\n            return;\n        } else if (currentPage === newPage) {\n            return;\n        }\n\n        // if the page was just made, add an onclick to change the tab\n        if (justMade) {\n            const tabLinks = newPage.querySelectorAll('*[tab]');\n            tabLinks.forEach(e => {\n                e.addEventListener('click', () => {\n                    setCurrentPage(e.getAttribute('tab'));\n                })\n            });\n        }\n\n        clearTabContainer();\n        changeTab(pageButton);\n        container.appendChild(newPage);\n        currentPage = newPage;\n\n        // bring user to top of window\n        window.scrollTo(0, 0);\n    }\n\n    // removes the current tab loaded into the div container\n    function clearTabContainer() {\n        let currTab = document.getElementById('tab');\n        if (currTab !== null) {\n            currTab.remove();\n        }\n    }\n\n    // used to change current tab CSS\n    function changeTab(newTab) {\n        if (currentPageButton !== null) {\n            currentPageButton.classList.remove('current-tab');\n        }\n        newTab.classList.add('current-tab');\n        currentPageButton = newTab;\n    }\n\n    return { setCurrentPage };\n})();\n\n//# sourceURL=webpack://odin-restaurant/./src/loadContent.js?");

/***/ }),

/***/ "./src/pages/createAboutPage.js":
/*!**************************************!*\
  !*** ./src/pages/createAboutPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage)\n/* harmony export */ });\n/* harmony import */ var _createBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBaseline */ \"./src/pages/createBaseline.js\");\n\nconst founderImage = __webpack_require__(/*! ../../res/images/founders/founders1.jpeg */ \"./res/images/founders/founders1.jpeg\");\nconst factoryImage = __webpack_require__(/*! ../../res/images/factory-images/factory2.jpg */ \"./res/images/factory-images/factory2.jpg\");\n\nfunction createAboutPage() {\n    // set up base div\n    const mainDiv = (0,_createBaseline__WEBPACK_IMPORTED_MODULE_0__.setUpBaseDiv)();\n\n    // Add Main header\n    const mainHeader = document.createElement('h1')\n    mainHeader.innerText = 'About CityCube';\n    mainHeader.classList.add('headers');\n    mainDiv.appendChild(mainHeader);\n\n    // add line break\n    const lineBreak = document.createElement('div');\n    lineBreak.classList.add('page-break');\n    mainDiv.appendChild(lineBreak);\n\n    // add subheader for section 1\n    const subHeader1 = document.createElement('h3');\n    subHeader1.innerText = 'Humble beginnings';\n    mainDiv.appendChild(subHeader1);\n\n    // add figure, image and figure caption\n    const mainFig = document.createElement('figure');\n    const founders1 = new Image();\n    founders1.src = founderImage;\n    founders1.classList.add('page-image');\n    const figCap1 = document.createElement('figcaption');\n    figCap1.innerText = 'Mohammad and Raz in front of their first Sidelines factory';\n    mainFig.appendChild(founders1);\n    mainFig.appendChild(figCap1);\n\n    mainDiv.appendChild(mainFig);\n\n    // add first paragraph\n    const p1 = document.createElement('p');\n    p1.innerText = 'Started as a joint venture between Raz Keenz, son of CS/BANK founder, Abdul Keenz, and Mohammad Kapoor, CityCube started as a lone factory in the Sidelines. Originally selling their products via Netroutes, the pair bet their business on a physical store in Downtown, near the subway station on 7th Street.'\n    mainDiv.appendChild(p1);\n\n    // add second paragraph\n    const p2 = document.createElement('p');\n    p2.innerText = 'Their gamble paid off! CityCube\\'s location, being near a major hub of city foot-traffic, brought them many new customers, allured by the cost-effective nature of quick-made food, like the Cubes.';\n    mainDiv.appendChild(p2);\n\n    // add clone of line break\n    mainDiv.appendChild(lineBreak.cloneNode(false));\n\n    // add second header\n    const subHeader2 = document.createElement('h3');\n    subHeader2.innerText = 'First factory';\n    mainDiv.appendChild(subHeader2);\n\n    // add third paragraph\n    const p3 = document.createElement('p');\n    p3.innerText = 'The first factory in the Sidelines was a small, hastily-constructed building, capable of producing one hundred (100) meals an hour. While their Net traffic for the site was low, at the time, this factory still struggled to meet the demand of orders placed.';\n    mainDiv.appendChild(p3);\n\n    // add second figure, image, and caption\n    const fig2 = document.createElement('figure');\n    const factory1 = new Image();\n    factory1.src = factoryImage;\n    factory1.classList.add('page-image');\n    const figCap2 = document.createElement('figcaption');\n    figCap2.innerText = 'The Sidelines factory interior during production';\n    fig2.appendChild(factory1);\n    fig2.appendChild(figCap2);\n    mainDiv.appendChild(fig2);\n\n    // add fourth paragraph\n    const p4 = document.createElement('p');\n    p4.innerText = 'The first factory, unfortunately lost in the SimRiots of \\'77, has since been renovated and turned into a musuem for avid CityCubers and City citizens.';\n    mainDiv.appendChild(p4);\n    \n    return mainDiv;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/createAboutPage.js?");

/***/ }),

/***/ "./src/pages/createBaseline.js":
/*!*************************************!*\
  !*** ./src/pages/createBaseline.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLink: () => (/* binding */ createLink),\n/* harmony export */   setUpBaseDiv: () => (/* binding */ setUpBaseDiv)\n/* harmony export */ });\nfunction setUpBaseDiv() {\n    const mainDiv = document.createElement('div');\n    mainDiv.id = 'tab';\n    \n    return mainDiv;\n}\n\nfunction createLink(innerText, tab) {\n    // create link based on innertext and tab given\n    const link = document.createElement('a');\n    link.innerText = innerText;\n    link.setAttribute('tab', tab);\n    link.classList.add('tab-nav-link');\n\n    return link;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/createBaseline.js?");

/***/ }),

/***/ "./src/pages/createContactPage.js":
/*!****************************************!*\
  !*** ./src/pages/createContactPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContactPage: () => (/* binding */ createContactPage)\n/* harmony export */ });\n/* harmony import */ var _createBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBaseline */ \"./src/pages/createBaseline.js\");\n\n\nfunction createContactPage() {\n    const mainDiv = (0,_createBaseline__WEBPACK_IMPORTED_MODULE_0__.setUpBaseDiv)();\n\n    const header = document.createElement('h1');\n    header.style.textAlign = 'center';\n    header.innerText = 'Contact Us!';\n\n    const contactForm = document.createElement('form');\n    contactForm.id = 'contact-form';\n    contactForm.classList.add('contact-form');\n    contactForm.method = 'POST';\n    contactForm.action = '#';\n\n    const nameInput = document.createElement('input');\n    nameInput.id = 'name-input';\n    nameInput.required = true;\n    nameInput.name = 'name';\n    nameInput.type = 'text';\n    nameInput.placeholder = 'John Doe';\n    nameInput.classList.add('form-input');\n    nameInput.minLength = 5;\n    nameInput.maxLength = 40;\n\n    const nameLabel = document.createElement('label');\n    nameLabel.htmlFor = nameInput.id;\n    nameLabel.innerText = 'Name *';\n    nameLabel.classList.add('form-label');\n\n    // create email label and input\n    const emailInput = document.createElement('input');\n    emailInput.id = 'email-input';\n    emailInput.required = true;\n    emailInput.name = 'email';\n    emailInput.type = 'email';\n    emailInput.placeholder = 'example@citycube.com';\n    emailInput.classList.add('form-input');\n\n    const emailInputLabel = document.createElement('label');\n    emailInputLabel.htmlFor = emailInput.id;\n    emailInputLabel.innerText = 'Email *';\n    emailInputLabel.classList.add('form-label');\n\n    // create country input and label\n    const countryInput = document.createElement('input');\n    countryInput.id = 'country-input';\n    countryInput.required = true;\n    countryInput.name = 'country';\n    countryInput.type = 'text';\n    countryInput.pattern = '[\\\\sA-Za-z]{1,60}';\n    countryInput.classList.add('form-input');\n    countryInput.placeholder = 'Country';\n    // countryInput.pattern = [A-Z{1}]...\n\n    const countryInputLabel = document.createElement('label');\n    countryInputLabel.htmlFor = countryInput.id;\n    countryInputLabel.innerText = 'Country *';\n    countryInputLabel.classList.add('form-label');\n\n    // create zip code input and label\n    const zipCodeInput = document.createElement('input');\n    zipCodeInput.id = 'zip-code-input';\n    zipCodeInput.required = 'true'\n    zipCodeInput.name = 'zipcode';\n    zipCodeInput.type = 'text';\n    zipCodeInput.placeholder = '00000[-0000]';\n    zipCodeInput.classList.add('form-input');\n    // will validate only if 00000 or 00000-0000\n    zipCodeInput.pattern = '[0-9]{5}(-[0-9]{4})?';\n\n    const zipCodeLabel = document.createElement('label');\n    zipCodeLabel.htmlFor = zipCodeInput.id;\n    zipCodeLabel.innerText = 'Zipcode *';\n    zipCodeLabel.classList.add('form-label');\n\n    const commentsInput = document.createElement('textarea');\n    commentsInput.id = 'comments-input';\n    commentsInput.name = 'comments';\n    commentsInput.classList.add('form-textarea');\n    commentsInput.placeholder = 'Type your comments here!';\n\n    const submitButton = document.createElement('button');\n    submitButton.type = 'submit';\n    submitButton.innerText = 'Contact!'\n    submitButton.classList.add('page-button');\n    submitButton.classList.add('form-button');\n\n    const submitConfirmation = document.createElement('p');\n    submitConfirmation.classList.add('form-conf');\n\n    // add all elements in batches to form\n    contactForm.append(nameLabel, nameInput);\n    contactForm.append(emailInputLabel, emailInput);\n    contactForm.append(countryInputLabel, countryInput);\n    contactForm.append(zipCodeLabel, zipCodeInput);\n    contactForm.appendChild(commentsInput);\n    contactForm.appendChild(submitButton);\n    contactForm.appendChild(submitConfirmation);\n\n    contactForm.addEventListener('submit', (e) => {\n        submitConfirmation.innerText = 'Thank you for submitting your data!';\n        e.preventDefault();\n    });\n\n\n    mainDiv.appendChild(header);\n    mainDiv.appendChild(contactForm);\n    \n    return mainDiv;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/createContactPage.js?");

/***/ }),

/***/ "./src/pages/createHomePage.js":
/*!*************************************!*\
  !*** ./src/pages/createHomePage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _createBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBaseline */ \"./src/pages/createBaseline.js\");\n/* harmony import */ var _res_styles_tab_link_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../res/styles/tab-link-style.css */ \"./res/styles/tab-link-style.css\");\n\n\n\nfunction createHomePage(homeImagePath) {\n    // create home page\n    const homePageDiv = (0,_createBaseline__WEBPACK_IMPORTED_MODULE_0__.setUpBaseDiv)();\n\n    // set up and add main header\n    const mainHeader = document.createElement('h1');\n    mainHeader.classList.add('headers');\n    mainHeader.innerText = 'Welcome to CityCube!';\n    homePageDiv.appendChild(mainHeader);\n\n    // set up and add subheader to page\n    const subHeader = document.createElement('h3');\n    subHeader.classList.add('headers');\n    subHeader.innerText = \"The City's one-and-only meal-replacement chain restaurant!\";\n    homePageDiv.appendChild(subHeader);\n\n    // set up and add main figure image\n    const mainFigure = document.createElement('figure');\n    const image = new Image();\n    image.src = homeImagePath;\n    image.alt = 'AI-generated image of storefront with a bright light in a dystopian city';\n    image.classList.add('page-image');\n    \n    // create figure caption element\n    const figCap = document.createElement('figcaption');\n    figCap.innerText = \"CityCube's first brick-and-mortar store in Downtown, near 7th Street Station\";\n    mainFigure.appendChild(image);\n    mainFigure.appendChild(figCap);\n    homePageDiv.appendChild(mainFigure);\n\n    // add page break line\n    const pageBreak = document.createElement('div');\n    pageBreak.classList.add('page-break');\n    homePageDiv.appendChild(pageBreak);\n\n    // Add first paragraph\n    const p1 = document.createElement('p');\n    p1.innerText = \"With locations from Downtown to the Upper Sides, CityCube is your one-stop-shop for quick-and-easy meal replacements!\";\n    homePageDiv.appendChild(p1);\n\n    // add second paragraph\n    const p2 = document.createElement('p');\n    p2.innerHTML = \"Our patented formula of nutrients and minerals sourced from exotic locations across our planet provides you with everything your body needs to function in our society! View \";\n    const menuLink = (0,_createBaseline__WEBPACK_IMPORTED_MODULE_0__.createLink)('our menu', 'menu');\n    p2.innerHTML += menuLink.outerHTML;\n    p2.innerHTML += ' to get an idea of what our store specializes in!';\n    homePageDiv.appendChild(p2);\n\n    // Add third paragraph and link to contact form\n    const p3 = document.createElement('p');\n    p3.innerHTML = \"As a member of the CS/CMD umbrella conglomerate, you can use your ::CS/CREDIT:: here to purchase your goods! You can inquire more about these options in our \";\n    const contactLink = (0,_createBaseline__WEBPACK_IMPORTED_MODULE_0__.createLink)('contact form', 'contact');\n    p3.innerHTML += contactLink.outerHTML;\n    p3.innerHTML += '.';\n    homePageDiv.appendChild(p3);\n\n    // add fourth paragraph and link to about page\n    const p4 = document.createElement('p');\n    p4.innerHTML = \"Interested in how our store came to be in the City? View \" \n    const aboutLink = (0,_createBaseline__WEBPACK_IMPORTED_MODULE_0__.createLink)('our about page', 'about');\n    p4.innerHTML += aboutLink.outerHTML;\n    p4.innerHTML += \" to learn about our founder's journey through the bureaucratic jungle to secure a foothold in the food industry here in our beautiful City.\";\n    homePageDiv.appendChild(p4);\n    \n    // return div\n    return homePageDiv;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/createHomePage.js?");

/***/ }),

/***/ "./src/pages/createMenuPage.js":
/*!*************************************!*\
  !*** ./src/pages/createMenuPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuPage: () => (/* binding */ createMenuPage)\n/* harmony export */ });\n/* harmony import */ var _createBaseline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBaseline */ \"./src/pages/createBaseline.js\");\n/* harmony import */ var _res_styles_menu_grid_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../res/styles/menu-grid-style.css */ \"./res/styles/menu-grid-style.css\");\n\n\nconst foodImagePath = __webpack_require__(/*! ../../res/images/food-images/food1.jpg */ \"./res/images/food-images/food1.jpg\");\n\nfunction createMenuPage() {\n    const foodDesc = [\n        'Tasty Treat 1',\n        'Tasty Treat 2',\n        'Tasty Treat 3'\n    ];\n\n    let mainDiv = (0,_createBaseline__WEBPACK_IMPORTED_MODULE_0__.setUpBaseDiv)();\n   \n    const mainHeader = document.createElement('h1');\n    mainHeader.classList.add(\"headers\");\n    mainHeader.innerText = 'Our Menu';\n    mainDiv.appendChild(mainHeader);\n\n    const p1 = document.createElement('p');\n    p1.innerHTML = \"We strive to interest the palate of every citizen of the City! If you don't see an option on our menu that you'd like to have, \";\n    const contactLink = (0,_createBaseline__WEBPACK_IMPORTED_MODULE_0__.createLink)('reach out to us', 'contact');\n    p1.innerHTML += contactLink.outerHTML;\n    p1.innerHTML += ' to see about adding your idea to our ever-growing menu!';\n    mainDiv.appendChild(p1);\n\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    for(let i = 0; i < 3; ++i) {\n        const cell = document.createElement('figure');\n        cell.classList.add('cell');\n        const image = new Image();\n        image.src = foodImagePath;\n        const figCap = document.createElement('figcaption');\n        figCap.innerText = foodDesc[i];\n        cell.appendChild(image);\n        cell.appendChild(figCap);\n\n        menu.appendChild(cell);\n    }\n\n    mainDiv.appendChild(menu);\n\n    return mainDiv;\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/pages/createMenuPage.js?");

/***/ }),

/***/ "./res/images/factory-images/factory2.jpg":
/*!************************************************!*\
  !*** ./res/images/factory-images/factory2.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2f827a95a2c80ddb8b5b.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./res/images/factory-images/factory2.jpg?");

/***/ }),

/***/ "./res/images/food-images/food1.jpg":
/*!******************************************!*\
  !*** ./res/images/food-images/food1.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c4ba685b208d62168f8e.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./res/images/food-images/food1.jpg?");

/***/ }),

/***/ "./res/images/founders/founders1.jpeg":
/*!********************************************!*\
  !*** ./res/images/founders/founders1.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9326b437694c56939efa.jpeg\";\n\n//# sourceURL=webpack://odin-restaurant/./res/images/founders/founders1.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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