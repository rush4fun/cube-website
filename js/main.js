/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var close = document.querySelector('.close');
var menuCheckbox = document.querySelector('#menu-checkbox');
close.addEventListener('click', function () {
  menuCheckbox.checked = false;
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

var cube = {
  portfolio: [{
    id: 1,
    type: 'app',
    client: 'David lee1 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '1davidlee.arch',
    img: ['img/emma_back.jpg', 'img/emma_front.jpg']
  }, {
    id: 2,
    type: 'web-design',
    client: 'David lee2 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '2davidlee.arch',
    img: ['img/john_back.jpg', 'img/john_front.jpg']
  }, {
    id: 3,
    type: 'branding',
    client: 'David lee3 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '3davidlee.arch',
    img: []
  }, {
    id: 4,
    type: 'branding',
    client: 'David lee4 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '4davidlee.arch',
    img: []
  }, {
    id: 5,
    type: 'web-design',
    client: 'David lee5 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '5davidlee.arch',
    img: []
  }, {
    id: 6,
    type: 'app',
    client: 'David lee6 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '6davidlee.arch',
    img: []
  }, {
    id: 7,
    type: 'branding',
    client: 'David lee7 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '7davidlee.arch',
    img: []
  }, {
    id: 8,
    type: 'app',
    client: 'David lee8 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '8davidlee.arch',
    img: []
  }, {
    id: 9,
    type: 'app',
    client: 'David lee9 - Architect',
    date: '2014',
    skills: 'web design - identity',
    text: '9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '9davidlee.arch',
    img: []
  }, {
    id: 10,
    type: 'app',
    client: 'David lee10 - Architect',
    date: '2010',
    skills: 'web design - identity',
    text: '10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla mi orci, ac venenatis ante venenatis eget.',
    site: '10davidlee.arch',
    img: []
  }],
  setting: function setting() {
    var portfolioItem = document.querySelectorAll('.portfolio__item');
    portfolioItem.forEach(function (item) {
      for (var i = 0; i < cube.portfolio.length; i++) {
        if (item.dataset.id == cube.portfolio[i].id) {
          item.dataset.type = cube.portfolio[i].type;
        }
      }
    });
  },
  navigation: function navigation() {
    var portfolioNavigation = function portfolioNavigation() {
      var portfolioLink = document.querySelectorAll('.nav-portfolio__link');
      var portfolioItem = document.querySelectorAll('.portfolio__item');
      portfolioLink.forEach(function (item) {
        item.addEventListener('click', function (event) {
          event.preventDefault();

          for (var i = 0; i < portfolioItem.length; i++) {
            portfolioItem[i].style.display = 'none';

            if (this.dataset.type == 'all') {
              portfolioItem[i].style.display = 'flex';
              var loadMoreBtn = document.querySelector('.js-loadMore');
              loadMoreBtn.style.display = 'none';
            }

            if (this.dataset.type == portfolioItem[i].dataset.type) {
              portfolioItem[i].style.display = 'flex';

              var _loadMoreBtn = document.querySelector('.js-loadMore');

              _loadMoreBtn.style.display = 'none';
            }
          }
        });
      });
    };

    portfolioNavigation();
  },
  loadMore: function loadMore() {
    var loadMoreBtn = document.querySelector('.js-loadMore');
    loadMoreBtn.addEventListener('click', function (event) {
      event.preventDefault();
      var portfolioItem = document.querySelectorAll('.portfolio__item');
      portfolioItem.forEach(function (item) {
        item.style.display = 'flex';
        loadMoreBtn.style.display = 'none';
      });
    });
  },
  openPortfolioCase: {
    popUp: document.querySelector('#popup'),
    loadPopUpContent: function loadPopUpContent(curId) {
      for (var i = 0; i < cube.portfolio.length; i++) {
        if (cube.portfolio[i].id == curId) {
          var loadPicturePopUp = function loadPicturePopUp(index) {
            var loadPicture = function loadPicture(currStep) {
              var picturePopUp = document.querySelector('.js-picture');
              picturePopUp.src = cube.portfolio[index].img[currStep];
            };

            var step = 0;
            loadPicture(step);

            var countPictures = function countPictures() {
              var currentPicIndex = document.querySelector('.js-popUpCurrentPicIndex');
              var picLenght = document.querySelector('.js-popUpPicLenght');

              if (cube.portfolio[index].img.length != 0) {
                currentPicIndex.innerHTML = step + 1;
              } else {
                currentPicIndex.innerHTML = step;
              }

              picLenght.innerHTML = cube.portfolio[index].img.length;
            };

            countPictures();
            var prevPic = document.querySelector('.js-popUpPrevPic');
            var nextPic = document.querySelector('.js-popUpNextPic');
            nextPic.addEventListener('click', function () {
              if (step < cube.portfolio[index].img.length - 1) {
                step++;
                loadPicture(step);
                countPictures();
              }

              ;
            });
            prevPic.addEventListener('click', function () {
              if (step > 0) {
                step--;
                loadPicture(step);
                countPictures();
              }
            });
          };

          var loadClientPopUp = function loadClientPopUp(index) {
            var clientPopUp = document.querySelector('.js-popUpCleint');
            clientPopUp.lastChild.textContent = cube.portfolio[index].client;
          };

          var loadDatePopUp = function loadDatePopUp(index) {
            var datePopUp = document.querySelector('.js-popUpDate');
            datePopUp.lastChild.textContent = cube.portfolio[index].date;
          };

          var loadSkillsPopUp = function loadSkillsPopUp(index) {
            var skillsPopUp = document.querySelector('.js-popUpSkills');
            skillsPopUp.lastChild.textContent = cube.portfolio[index].skills;
          };

          var loadTextPopUp = function loadTextPopUp(index) {
            var textPopUp = document.querySelector('.js-popUpText');
            textPopUp.innerHTML = cube.portfolio[index].text;
          };

          var loadSitePopUp = function loadSitePopUp(index) {
            var sitePopUp = document.querySelector('.js-popUpSite');
            sitePopUp.lastChild.textContent = cube.portfolio[index].site;
          };

          loadSitePopUp(i);
          loadTextPopUp(i);
          loadSkillsPopUp(i);
          loadDatePopUp(i);
          loadClientPopUp(i);
          loadPicturePopUp(i);
        }
      }
    },
    openPopUp: function openPopUp() {
      var portfolioItem = document.querySelectorAll('.js-openPopUp');
      portfolioItem.forEach(function (item) {
        item.addEventListener('click', function (event) {
          event.preventDefault();
          cube.openPortfolioCase.popUp.style.display = 'block';
          var currentId = this.closest('.portfolio__item').dataset.id;
          cube.openPortfolioCase.popUp.dataset.id = currentId;
          cube.openPortfolioCase.loadPopUpContent(currentId);
        });
      });
    },
    closePopUp: function closePopUp() {
      var close = document.querySelector('.js-closePopUp');
      close.addEventListener('click', function () {
        cube.openPortfolioCase.popUp.style.display = 'none';
      });
    },
    navigationProjects: function navigationProjects() {
      var nextProject = document.querySelector('.js-popUpNextProject');
      nextProject.addEventListener('click', function (event) {
        event.preventDefault();
        var popUpCurrentId = cube.openPortfolioCase.popUp.dataset.id;

        if (popUpCurrentId != cube.portfolio[cube.portfolio.length - 1].id) {
          var nextPopUpId = ++popUpCurrentId;
          cube.openPortfolioCase.popUp.dataset.id = nextPopUpId;
          cube.openPortfolioCase.loadPopUpContent(nextPopUpId);
        }

        ;
      });
      var prevProject = document.querySelector('.js-popUpPrevProject');
      prevProject.addEventListener('click', function (event) {
        event.preventDefault();
        var popUpCurrentId = cube.openPortfolioCase.popUp.dataset.id;

        if (popUpCurrentId > 1) {
          var prevPopUpId = --popUpCurrentId;
          cube.openPortfolioCase.popUp.dataset.id = prevPopUpId;
          cube.openPortfolioCase.loadPopUpContent(prevPopUpId);
        }

        ;
      });
    },
    init: function init() {
      this.openPopUp();
      this.closePopUp();
      this.navigationProjects();
    }
  },
  init: function init() {
    this.setting();
    this.loadMore();
    this.navigation();
    this.openPortfolioCase.init();
  }
};
document.addEventListener('DOMContentLoaded', function () {
  cube.init();
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map