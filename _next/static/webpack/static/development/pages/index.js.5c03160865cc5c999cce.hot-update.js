webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Noticia.js":
/*!*******************************!*\
  !*** ./components/Noticia.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Users\\vfigueira\\Desktop\\bitcoinapp\\components\\Noticia.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Noticias = function Noticias(props) {
  var _props$noticia = props.noticia,
      urlToImage = _props$noticia.urlToImage,
      url = _props$noticia.url,
      title = _props$noticia.title,
      description = _props$noticia.description,
      source = _props$noticia.source;
  var imagen = '';

  if (urlToImage !== '') {
    imagen = __jsx("img", {
      src: urlToImage,
      alt: title,
      className: "card-img-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    });
  }

  return __jsx("div", {
    className: "col-md-6 col-12 mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "card-image",
    rel: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, imagen)));
};

/* harmony default export */ __webpack_exports__["default"] = (Noticias);

/***/ })

})
//# sourceMappingURL=index.js.5c03160865cc5c999cce.hot-update.js.map