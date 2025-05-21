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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/background.png */ \"./src/assets/background.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n}\n\nbutton {\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.header {\n  background-color: #161616;\n  color: #eeeeee;\n  padding: 1rem 0;\n}\n\n.header a {\n  text-decoration: none;\n  color: #eeeeee;\n}\n\n.header a:hover {\n  color: #a8a8a8;\n}\n\n.header button {\n  color: #eeeeee;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n  font-family: inherit;\n}\n\n.container {\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 0 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.header__top {\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  display: none;\n  color: #a8a8a8;\n  font-size: 10px;\n}\n\n.header__top--mobile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  font-size: 0.8rem;\n  color: #a8a8a8;\n  font-size: 10px;\n  gap: 0.5rem;\n}\n\n.header__info {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 1.5rem;\n  font-size: 0.9rem;\n}\n\n.header__info--mobile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.header__info a {\n  border-right: 1px solid #5a5a5a;\n  padding-right: 1rem;\n}\n\n.header__bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.header__left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4rem;\n}\n\n.header__nav {\n  display: none;\n  list-style: none;\n}\n\n.header__nav--mobile {\n  list-style: none;\n}\n\n.header__right {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.header__buttons--login {\n  background: none;\n  border: 1px solid #cd0511;\n  margin-right: 0.5rem;\n  padding: 0.5rem 1.5rem;\n}\n\n.header__buttons--login:hover {\n  background: #cd0511;\n}\n\n.header__buttons--register {\n  background-color: #179149;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 0.5rem 1.5rem;\n}\n\n.header__buttons--register:hover {\n  background-color: rgb(11, 116, 55);\n}\n\n.header__buttons--download {\n  border: 1px solid #5a5a5a;\n  background: none;\n  padding: 0.5rem 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  border-radius: 0.25rem;\n}\n\n.header__buttons--download:hover {\n  background-color: #5a5a5a;\n}\n\n.header__buttons--icon {\n  outline: none;\n  border: none;\n  display: flex;\n  background: none;\n}\n\n.header__buttons--hamburger {\n  outline: none;\n  border: none;\n  background: none;\n  display: block;\n  font-size: 2rem;\n}\n\n.header__mobile {\n  background-color: #161616;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  gap: 1rem;\n  padding: 1rem;\n  display: none;\n}\n\n.header__mobile--visible {\n  display: flex;\n}\n\n@media (min-width: 768px) {\n  .container {\n    gap: 0rem;\n  }\n  .header__top {\n    display: flex;\n  }\n  .header__buttons--hamburger {\n    display: none;\n  }\n  .header__nav {\n    display: flex;\n    gap: 2rem;\n  }\n  .header__mobile {\n    display: none;\n  }\n}\n@media (min-width: 1440px) {\n  .header__bottom {\n    flex-direction: row;\n  }\n}\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  padding: 4rem;\n}\n\n.hero__header {\n  font-size: 4.5rem;\n  color: white;\n  text-align: center;\n  text-transform: uppercase;\n  font-family: \"Sofia Sans Condensed\", sans-serif;\n  line-height: 4rem;\n  margin-bottom: 1.5rem;\n}\n\n.header__gradient {\n  display: block;\n  background: linear-gradient(90deg, #FCD678 0%, #FCD678 0.01%, #BC8C2F 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.hero__form {\n  background-color: white;\n  border-radius: 10px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 720px;\n}\n\n.form__title {\n  margin-bottom: 2rem;\n  font-size: 1.5rem;\n}\n\n.form__button {\n  background-color: #179149;\n  padding: 1rem 5rem;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  text-transform: uppercase;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-top: 2rem;\n  margin-bottom: 0.5rem;\n}\n\n.form__button:hover {\n  background-color: rgb(11, 116, 55);\n}\n\n.form__row {\n  gap: 1rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n}\n\n.form__phone {\n  display: flex;\n  gap: 0.5rem;\n  flex-direction: column;\n}\n\n.form__code {\n  max-width: 80px;\n}\n\n.form__error {\n  text-align: left;\n  align-self: flex-start;\n  min-height: 1rem;\n  color: #cd0511;\n}\n\n.form__row input,\n.form__row select {\n  flex: 1;\n  padding: 10px;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  font-family: inherit;\n}\n\n.form__footer {\n  align-self: flex-start;\n  color: #a8a8a8;\n  margin-top: 1rem;\n}\n\n.form__footer a {\n  color: #cd0511;\n  text-decoration: none;\n}\n\n@media (min-width: 380px) {\n  .form__phone {\n    flex-direction: row;\n  }\n}\n@media (min-width: 768px) {\n  .form__row {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .hero__form {\n    width: 100%;\n  }\n}\n.features {\n  text-align: center;\n  background-color: #F4F4F4;\n  padding: 0 2rem;\n}\n\n.features__title {\n  font-size: 3rem;\n  padding: 3rem 0;\n  font-family: \"Sofia Sans Condensed\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n\n.features__container {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.features__items {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 5rem;\n  padding: 1rem 0;\n}\n\n.features__item {\n  max-width: 13rem;\n  text-align: center;\n}\n\n.features__img {\n  align-self: center;\n  order: 1;\n  max-width: 100%;\n}\n\n.features__icon {\n  max-width: 40%;\n}\n\n@media (min-width: 768px) {\n  .features__img {\n    align-self: flex-end;\n    order: initial;\n    max-width: 50%;\n  }\n  .features__container {\n    justify-content: center;\n    flex-direction: row;\n  }\n  .features__item {\n    text-align: left;\n  }\n}\n.prizes {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 3rem;\n}\n\n.prizes__title {\n  font-size: 3rem;\n  padding: 3rem 0;\n  font-family: \"Sofia Sans Condensed\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n\n.prizes__container {\n  display: grid;\n  gap: 1rem;\n}\n\n.prizes__item {\n  background-color: #F4F4F4;\n  padding: 2rem 4rem;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 20px;\n}\n\n.item__prize {\n  margin: 1.5rem 0;\n  font-weight: 700;\n  font-size: 2.5rem;\n}\n\n.item__description {\n  max-width: 150px;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.prizes__button {\n  background-color: #179149;\n  padding: 1rem 5rem;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  text-transform: uppercase;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-top: 4rem;\n  margin-bottom: 0.5rem;\n}\n\n.prizes__button:hover {\n  background-color: rgb(11, 116, 55);\n}\n\n.prizes__disclaimer {\n  font-size: 0.8rem;\n  color: #a8a8a8;\n}\n\n@media (min-width: 768px) {\n  .prizes__container {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (min-width: 1440px) {\n  .prizes__container {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .prizes__item {\n    padding: 2rem 6rem;\n  }\n}\n.leaderboard {\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n  background: #F4F4F4;\n  flex-direction: column;\n  align-items: center;\n}\n\n.leaderboard__container {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 4rem;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.leaderboard__title {\n  font-size: 3rem;\n  padding: 3rem 0;\n  font-family: \"Sofia Sans Condensed\", sans-serif;\n  text-transform: uppercase;\n  font-weight: 400;\n}\n\n.leaderboard__winners {\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  align-items: center;\n}\n\n.leaderboard__winner {\n  background-color: white;\n  padding: 2rem;\n  border-radius: 20px;\n  position: relative;\n  overflow: hidden;\n  max-width: 600px;\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  width: 100%;\n  flex-direction: column;\n  text-align: center;\n}\n\n.winner__ribbon {\n  position: absolute;\n  top: 12px;\n  right: -45px;\n  width: 170px;\n  background: linear-gradient(90deg, #FCD678 0%, #FCD678 0.01%, #BC8C2F 100%);\n  color: white;\n  text-align: center;\n  transform: rotate(45deg);\n  font-weight: bold;\n  font-size: 1.5rem;\n  padding: 0.5rem;\n}\n\n.winner__title {\n  background: linear-gradient(90deg, #FCD678 0%, #FCD678 0.01%, #BC8C2F 100%);\n  background-clip: text;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 1rem;\n}\n\n.winner__number {\n  color: #a8a8a8;\n}\n\n.winner__gain {\n  font-weight: 700;\n  margin-top: 1rem;\n}\n\n.winner__gain span {\n  color: #cd0511;\n}\n\n.leaderboard__rankings {\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.rankings__title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n\n.rankings__header {\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #cd0511;\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0;\n}\n\n.rankings__row {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #DEDEDE;\n  padding: 1rem 0;\n}\n\n.rankings__row p:nth-of-type(2) {\n  font-weight: 700;\n}\n\n.rankings__row:nth-of-type(2) {\n  border-top: 1px solid #DEDEDE;\n}\n\n.rankings__disclaimer {\n  color: #a8a8a8;\n  font-size: 12px;\n  margin-top: 1rem;\n}\n\n.leaderboard__button {\n  background-color: #179149;\n  padding: 1rem 5rem;\n  border: none;\n  outline: none;\n  border-radius: 4px;\n  text-transform: uppercase;\n  color: white;\n  font-size: 1rem;\n  font-weight: 700;\n  margin-top: 4rem;\n  margin-bottom: 0.5rem;\n}\n\n.leaderboard__button:hover {\n  background-color: rgb(11, 116, 55);\n}\n\n.leaderboard__disclaimer {\n  font-size: 0.8rem;\n  color: #a8a8a8;\n}\n\n@media (min-width: 1440px) {\n  .leaderboard__container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .leaderboard__winners {\n    align-items: end;\n  }\n  .leaderboard__winner {\n    flex-direction: row;\n    text-align: left;\n  }\n}\n.faq {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  background-color: #F4F4F4;\n  flex-direction: column;\n}\n\n.faq__title {\n  font-size: 3rem;\n  padding: 3rem 0;\n  font-family: \"Sofia Sans Condensed\", sans-serif;\n  font-weight: 400;\n}\n\n.faq__container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-width: 1440px;\n  padding: 0 2rem;\n  margin-bottom: 4rem;\n}\n\n.faq__item {\n  border-bottom: 1px solid #ddd;\n  padding: 15px;\n  cursor: pointer;\n  position: relative;\n}\n\n.faq__question {\n  font-weight: bold;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n\n.faq__answer {\n  display: none;\n  margin-top: 10px;\n  color: #333;\n}\n\n.faq__answer--active {\n  display: block;\n}\n\n.faq__arrow {\n  transition: transform 0.3s ease;\n}\n\n.faq__arrow--active {\n  transform: rotate(180deg);\n}\n\n.footer {\n  background-color: #161616;\n  color: #eeeeee;\n  padding: 1rem 0;\n}\n\n.footer__container {\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 100%;\n  padding: 2rem 2rem;\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.footer__left {\n  width: 100%;\n}\n\n.footer__bold {\n  font-weight: 700;\n  margin: 1rem 0;\n}\n\n.footer__socials {\n  display: flex;\n  gap: 1rem;\n  font-size: 1.5rem;\n  flex-wrap: wrap;\n}\n\n.footer__socials a {\n  color: #a8a8a8;\n}\n\n.footer__btns {\n  display: flex;\n  gap: 1rem;\n  flex-direction: column;\n  align-items: start;\n}\n\n.footer__btn {\n  display: flex;\n  padding: 0.5rem 1rem;\n  text-align: left;\n  background-color: black;\n  color: white;\n  border: 1px solid white;\n  border-radius: 10px;\n  gap: 1rem;\n  align-items: center;\n  min-width: 190px;\n}\n\n.footer__btn i {\n  font-size: 2rem;\n}\n\n.btn__large {\n  display: block;\n  font-size: 1rem;\n}\n\n.footer__text {\n  color: #a8a8a8;\n  font-size: 11px;\n  margin-top: 2rem;\n}\n\n@media (min-width: 768px) {\n  .footer__btns {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1440px) {\n  .footer__container {\n    gap: 4rem;\n    flex-direction: row;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://hmf-project/./src/sass/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://hmf-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://hmf-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://hmf-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://hmf-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://hmf-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://hmf-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://hmf-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://hmf-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://hmf-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f981264461e898c01494.png\";\n\n//# sourceURL=webpack://hmf-project/./src/assets/background.png?");

/***/ }),

/***/ "./src/js/faq.js":
/*!***********************!*\
  !*** ./src/js/faq.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initFaq: () => (/* binding */ initFaq)\n/* harmony export */ });\nfunction initFaq() {\r\n  const faqItems = document.querySelectorAll(\".faq__item\");\r\n\r\n  faqItems.forEach((item) => {\r\n    console.log(item);\r\n    item.addEventListener(\"click\", () => {\r\n      const answer = item.querySelector(\".faq__answer\");\r\n      const arrow = item.querySelector(\".faq__arrow\");\r\n      answer.classList.toggle(\"faq__answer--active\");\r\n      arrow.classList.toggle(\"faq__arrow--active\");\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://hmf-project/./src/js/faq.js?");

/***/ }),

/***/ "./src/js/mobileMenu.js":
/*!******************************!*\
  !*** ./src/js/mobileMenu.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMobileMenu: () => (/* binding */ initMobileMenu)\n/* harmony export */ });\nfunction initMobileMenu() {\r\n  const hamburger = document.getElementById(\"mobile-menu-open\");\r\n  const closeButton = document.getElementById(\"mobile-menu-close\");\r\n  const header = document.getElementById(\"mobile-menu\");\r\n\r\n  if (!hamburger || !closeButton || !header) return;\r\n\r\n  function toggleMenu() {\r\n    const isVisible = header.classList.toggle(\"header__mobile--visible\");\r\n    hamburger.setAttribute(\"aria-expanded\", isVisible.toString());\r\n  }\r\n\r\n  hamburger.addEventListener(\"click\", toggleMenu);\r\n  closeButton.addEventListener(\"click\", toggleMenu);\r\n}\r\n\n\n//# sourceURL=webpack://hmf-project/./src/js/mobileMenu.js?");

/***/ }),

/***/ "./src/js/register.js":
/*!****************************!*\
  !*** ./src/js/register.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initRegisterForm: () => (/* binding */ initRegisterForm),\n/* harmony export */   setupPhonePrefill: () => (/* binding */ setupPhonePrefill)\n/* harmony export */ });\nconst countryCodes = {\r\n  US: \"+1\",\r\n  UK: \"+44\",\r\n  IN: \"+91\",\r\n};\r\n\r\nfunction setupPhonePrefill() {\r\n  const countrySelect = document.getElementById(\"country\");\r\n  const phoneInput = document.getElementById(\"code\");\r\n\r\n  if (!countrySelect || !phoneInput) return;\r\n\r\n  countrySelect.addEventListener(\"change\", () => {\r\n    const selected = countrySelect.value;\r\n\r\n    const code = countryCodes[selected];\r\n    if (code) {\r\n      phoneInput.value = code;\r\n    }\r\n  });\r\n}\r\n\r\nfunction isValidEmail(email) {\r\n  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\r\n  return emailPattern.test(email);\r\n}\r\n\r\nfunction initRegisterForm() {\r\n  const form = document.getElementById(\"registerForm\");\r\n  const emailInput = document.getElementById(\"email\");\r\n  const emailError = document.getElementById(\"error\");\r\n\r\n  if (!form || !emailInput || !emailError) return;\r\n\r\n  setupPhonePrefill();\r\n\r\n  form.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n\r\n    const email = emailInput.value.trim();\r\n\r\n    if (!isValidEmail(email)) {\r\n      emailError.textContent = \"Please enter a valid email address.\";\r\n      return;\r\n    } else {\r\n      emailError.textContent = \"\";\r\n    }\r\n\r\n    alert(\"Successfully registered!\");\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://hmf-project/./src/js/register.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://hmf-project/./src/sass/main.scss?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./src/sass/main.scss\");\n/* harmony import */ var _js_mobileMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobileMenu */ \"./src/js/mobileMenu.js\");\n/* harmony import */ var _js_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/register */ \"./src/js/register.js\");\n/* harmony import */ var _js_faq__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/faq */ \"./src/js/faq.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  (0,_js_mobileMenu__WEBPACK_IMPORTED_MODULE_1__.initMobileMenu)();\r\n  (0,_js_register__WEBPACK_IMPORTED_MODULE_2__.initRegisterForm)();\r\n  (0,_js_faq__WEBPACK_IMPORTED_MODULE_3__.initFaq)();\r\n});\r\n\n\n//# sourceURL=webpack://hmf-project/./src/script.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;