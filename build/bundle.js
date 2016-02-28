/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var style = __webpack_require__(2);
	var riot = __webpack_require__(11);
	var redux = __webpack_require__(13);
	var thunk = __webpack_require__(24);

	__webpack_require__(25);
	__webpack_require__(27);

	var reducer = function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? { tasks: [] } : arguments[0];
	  var action = arguments[1];

	  console.log(action);
	  switch (action.type) {
	    case 'TASKS_LOADED':
	      return Object.assign({}, state, { tasks: action.data });
	    default:
	      return state;
	  }
	};

	var createStoreWithMiddleware = redux.compose(redux.applyMiddleware(thunk))(redux.createStore);

	var reduxStore = createStoreWithMiddleware(reducer);

	document.addEventListener('DOMContentLoaded', function () {
	  return riot.mount('score-board-app', { store: reduxStore });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/resolve-url-loader/index.js!./../../node_modules/sass-loader/index.js?sourceMap!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html,\nbody,\nbody div,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\naddress,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\nsamp,\nsmall,\nstrong,\nsub,\nsup,\nvar,\nb,\ni,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\nfigure,\nfooter,\nheader,\nmenu,\nnav,\nsection,\ntime,\nmark,\naudio,\nvideo,\ndetails,\nsummary {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n  background: transparent;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nnav,\nsection,\ndetails,\nsummary {\n  display: block;\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\nimg,\nobject,\nembed {\n  max-width: 100%;\n}\n\nhtml {\n  overflow-y: scroll;\n}\n\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\n\ndel {\n  text-decoration: line-through;\n}\n\nabbr[title],\ndfn[title] {\n  border-bottom: 1px dotted #000;\n  cursor: help;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nth {\n  font-weight: bold;\n  vertical-align: bottom;\n}\n\ntd {\n  font-weight: normal;\n  vertical-align: top;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\ninput,\nselect {\n  vertical-align: middle;\n}\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  white-space: pre-line;\n  word-wrap: break-word;\n}\n\ninput[type=\"radio\"] {\n  vertical-align: text-bottom;\n}\n\ninput[type=\"checkbox\"] {\n  vertical-align: bottom;\n}\n\nselect,\ninput,\ntextarea {\n  font: 99% sans-serif;\n}\n\ntable {\n  font-size: inherit;\n  font: 100%;\n}\n\nsmall {\n  font-size: 85%;\n}\n\nstrong {\n  font-weight: bold;\n}\n\ntd,\ntd img {\n  vertical-align: top;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, sans-serif;\n}\n\nlabel,\ninput[type=button],\ninput[type=submit],\ninput[type=file],\nbutton {\n  cursor: pointer;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  margin: 0;\n}\n\nbutton,\ninput[type=button] {\n  width: auto;\n  overflow: visible;\n}\n\n@-webkit-keyframes spin-around {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n\n@keyframes spin-around {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n\n  to {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n\nhtml {\n  background: #f5f7fa;\n  font-size: 14px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility;\n}\n\nhtml.has-modal-open {\n  overflow: hidden;\n}\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n  line-height: 1.25;\n}\n\nbody {\n  color: #69707a;\n  font-size: 1rem;\n  line-height: 1.428571428571429;\n}\n\na {\n  color: #1fc8db;\n  cursor: pointer;\n  text-decoration: none;\n  -webkit-transition: none 86ms ease-out;\n  transition: none 86ms ease-out;\n}\n\na:hover {\n  color: #222324;\n}\n\ncode {\n  background: #f5f7fa;\n  color: #ed6c63;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 1px 2px 2px;\n}\n\nhr {\n  border-top-color: #d3d6db;\n  margin: 20px 0;\n}\n\nimg {\n  max-width: 100%;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline;\n}\n\nsmall {\n  font-size: 11px;\n}\n\nstrong {\n  color: #222324;\n}\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block;\n}\n\npre {\n  background: #f5f7fa;\n  color: #69707a;\n  white-space: pre;\n  word-wrap: normal;\n}\n\npre code {\n  background: #f5f7fa;\n  color: #69707a;\n  display: block;\n  overflow-x: auto;\n  padding: 16px 20px;\n}\n\ntable {\n  width: 100%;\n}\n\ntable th,\ntable td {\n  text-align: left;\n  vertical-align: top;\n}\n\ntable th {\n  color: #222324;\n}\n\n.block:not(:last-child),\n.content:not(:last-child),\n.title:not(:last-child),\n.subtitle:not(:last-child),\n.message:not(:last-child),\n.notification:not(:last-child),\n.highlight:not(:last-child),\n.navbar:not(:last-child),\n.tabs:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.container {\n  position: relative;\n}\n\n@media screen and (min-width: 980px) {\n  .container {\n    margin: 0 auto;\n    max-width: 960px;\n  }\n\n  .container.is-fluid {\n    margin: 0 20px;\n    max-width: none;\n  }\n}\n\n.fa {\n  font-size: 21px;\n  text-align: center;\n  vertical-align: top;\n}\n\n.content.is-medium {\n  font-size: 18px;\n}\n\n.content.is-medium code {\n  font-size: 14px;\n}\n\n.content.is-large {\n  font-size: 24px;\n}\n\n.content.is-large code {\n  font-size: 18px;\n}\n\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #222324;\n  font-weight: 300;\n  line-height: 1.125;\n  margin-bottom: 20px;\n}\n\n.content h1:not(:first-child),\n.content h2:not(:first-child),\n.content h3:not(:first-child) {\n  margin-top: 40px;\n}\n\n.content h1 {\n  font-size: 2em;\n}\n\n.content h2 {\n  font-size: 1.75em;\n}\n\n.content h3 {\n  font-size: 1.5em;\n}\n\n.content h4 {\n  font-size: 1.25em;\n}\n\n.content h5 {\n  font-size: 1.125em;\n}\n\n.content h6 {\n  font-size: 1em;\n}\n\n.content p:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.content li + li {\n  margin-top: 0.25em;\n}\n\n.content ol {\n  list-style: decimal outside;\n  margin: 1em 2em;\n}\n\n.content ul {\n  list-style: disc outside;\n  margin: 1em 2em;\n}\n\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em;\n}\n\n.content ul ul ul {\n  list-style-type: square;\n}\n\n.content blockquote {\n  background: #f5f7fa;\n  border-left: 5px solid #d3d6db;\n  padding: 1.5em;\n}\n\n.content blockquote:not(:last-child) {\n  margin-bottom: 1em;\n}\n\n.highlight {\n  background-color: #fdf6e3;\n  color: #586e75;\n}\n\n.highlight .c {\n  color: #93a1a1;\n}\n\n.highlight .err,\n.highlight .g {\n  color: #586e75;\n}\n\n.highlight .k {\n  color: #859900;\n}\n\n.highlight .l,\n.highlight .n {\n  color: #586e75;\n}\n\n.highlight .o {\n  color: #859900;\n}\n\n.highlight .x {\n  color: #cb4b16;\n}\n\n.highlight .p {\n  color: #586e75;\n}\n\n.highlight .cm {\n  color: #93a1a1;\n}\n\n.highlight .cp {\n  color: #859900;\n}\n\n.highlight .c1 {\n  color: #93a1a1;\n}\n\n.highlight .cs {\n  color: #859900;\n}\n\n.highlight .gd {\n  color: #2aa198;\n}\n\n.highlight .ge {\n  color: #586e75;\n  font-style: italic;\n}\n\n.highlight .gr {\n  color: #dc322f;\n}\n\n.highlight .gh {\n  color: #cb4b16;\n}\n\n.highlight .gi {\n  color: #859900;\n}\n\n.highlight .go,\n.highlight .gp {\n  color: #586e75;\n}\n\n.highlight .gs {\n  color: #586e75;\n  font-weight: bold;\n}\n\n.highlight .gu {\n  color: #cb4b16;\n}\n\n.highlight .gt {\n  color: #586e75;\n}\n\n.highlight .kc {\n  color: #cb4b16;\n}\n\n.highlight .kd {\n  color: #268bd2;\n}\n\n.highlight .kn,\n.highlight .kp {\n  color: #859900;\n}\n\n.highlight .kr {\n  color: #268bd2;\n}\n\n.highlight .kt {\n  color: #dc322f;\n}\n\n.highlight .ld {\n  color: #586e75;\n}\n\n.highlight .m,\n.highlight .s {\n  color: #2aa198;\n}\n\n.highlight .na {\n  color: #B58900;\n}\n\n.highlight .nb {\n  color: #586e75;\n}\n\n.highlight .nc {\n  color: #268bd2;\n}\n\n.highlight .no {\n  color: #cb4b16;\n}\n\n.highlight .nd {\n  color: #268bd2;\n}\n\n.highlight .ni,\n.highlight .ne {\n  color: #cb4b16;\n}\n\n.highlight .nf {\n  color: #268bd2;\n}\n\n.highlight .nl,\n.highlight .nn,\n.highlight .nx,\n.highlight .py {\n  color: #586e75;\n}\n\n.highlight .nt,\n.highlight .nv {\n  color: #268bd2;\n}\n\n.highlight .ow {\n  color: #859900;\n}\n\n.highlight .w {\n  color: #586e75;\n}\n\n.highlight .mf,\n.highlight .mh,\n.highlight .mi,\n.highlight .mo {\n  color: #2aa198;\n}\n\n.highlight .sb {\n  color: #93a1a1;\n}\n\n.highlight .sc {\n  color: #2aa198;\n}\n\n.highlight .sd {\n  color: #586e75;\n}\n\n.highlight .s2 {\n  color: #2aa198;\n}\n\n.highlight .se {\n  color: #cb4b16;\n}\n\n.highlight .sh {\n  color: #586e75;\n}\n\n.highlight .si,\n.highlight .sx {\n  color: #2aa198;\n}\n\n.highlight .sr {\n  color: #dc322f;\n}\n\n.highlight .s1,\n.highlight .ss {\n  color: #2aa198;\n}\n\n.highlight .bp,\n.highlight .vc,\n.highlight .vg,\n.highlight .vi {\n  color: #268bd2;\n}\n\n.highlight .il {\n  color: #2aa198;\n}\n\n.is-block {\n  display: block;\n}\n\n.is-inline {\n  display: inline;\n}\n\n.is-flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.is-clearfix:after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.is-pulled-left {\n  float: left;\n}\n\n.is-pulled-right {\n  float: right;\n}\n\n.is-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.is-fullwidth {\n  width: 100%;\n}\n\n.is-text-centered {\n  text-align: center;\n}\n\n.is-text-left {\n  text-align: left;\n}\n\n.is-text-right {\n  text-align: right;\n}\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .is-hidden-tablet {\n    display: none !important;\n  }\n}\n\n@media screen and (max-width: 979px) {\n  .is-hidden-touch {\n    display: none !important;\n  }\n}\n\n@media screen and (min-width: 980px) {\n  .is-hidden-desktop {\n    display: none !important;\n  }\n}\n\n.is-disabled {\n  pointer-events: none;\n}\n\n.is-marginless {\n  margin: 0 !important;\n}\n\n.is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.input,\n.textarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-block;\n  font-size: 14px;\n  height: 32px;\n  line-height: 24px;\n  padding: 3px 8px;\n  position: relative;\n  vertical-align: top;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  display: block;\n  max-width: 100%;\n  width: 100%;\n}\n\n.input:hover,\n.textarea:hover {\n  border-color: #aeb1b5;\n}\n\n.input:active,\n.textarea:active,\n.input:focus,\n.textarea:focus {\n  border-color: #1fc8db;\n  outline: none;\n}\n\n.input[disabled],\n[disabled].textarea,\n.input[disabled]:hover,\n[disabled].textarea:hover {\n  background: #f5f7fa;\n  border-color: #d3d6db;\n}\n\n.input[disabled]::-moz-placeholder,\n[disabled].textarea::-moz-placeholder,\n.input[disabled]:hover::-moz-placeholder,\n[disabled].textarea:hover::-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.input[disabled]::-webkit-input-placeholder,\n[disabled].textarea::-webkit-input-placeholder,\n.input[disabled]:hover::-webkit-input-placeholder,\n[disabled].textarea:hover::-webkit-input-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.input[disabled]:-moz-placeholder,\n[disabled].textarea:-moz-placeholder,\n.input[disabled]:hover:-moz-placeholder,\n[disabled].textarea:hover:-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.input[disabled]:-ms-input-placeholder,\n[disabled].textarea:-ms-input-placeholder,\n.input[disabled]:hover:-ms-input-placeholder,\n[disabled].textarea:hover:-ms-input-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.input[type=\"search\"],\n[type=\"search\"].textarea {\n  border-radius: 290486px;\n}\n\n.input.is-flat,\n.is-flat.textarea {\n  border: none;\n  box-shadow: none;\n  padding: 4px 8px;\n}\n\n.input.is-small,\n.is-small.textarea {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding: 3px 6px;\n}\n\n.input.is-small.is-flat,\n.is-small.is-flat.textarea {\n  padding: 4px 6px;\n}\n\n.input.is-medium,\n.is-medium.textarea {\n  font-size: 18px;\n  height: 40px;\n  line-height: 32px;\n  padding: 3px 10px;\n}\n\n.input.is-medium.is-flat,\n.is-medium.is-flat.textarea {\n  padding: 4px 10px;\n}\n\n.input.is-large,\n.is-large.textarea {\n  font-size: 24px;\n  height: 48px;\n  line-height: 40px;\n  padding: 3px 12px;\n}\n\n.input.is-large.is-flat,\n.is-large.is-flat.textarea {\n  padding: 4px 12px;\n}\n\n.input.is-fullwidth,\n.is-fullwidth.textarea {\n  display: block;\n  width: 100%;\n}\n\n.input.is-inline,\n.is-inline.textarea {\n  display: inline;\n  width: auto;\n}\n\n.textarea {\n  line-height: 1.2;\n  max-height: 600px;\n  max-width: 100%;\n  min-height: 120px;\n  min-width: 100%;\n  padding: 10px;\n  resize: vertical;\n}\n\n.checkbox,\n.menu-checkbox,\n.radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 16px;\n  padding-left: 18px;\n  position: relative;\n  vertical-align: top;\n}\n\n.checkbox input,\n.menu-checkbox input,\n.radio input {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-block;\n  font-size: 14px;\n  height: 32px;\n  line-height: 24px;\n  padding: 3px 8px;\n  position: relative;\n  vertical-align: top;\n  border-radius: 1px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  float: left;\n  height: 14px;\n  left: 0;\n  outline: none;\n  padding: 0;\n  position: absolute;\n  top: 1px;\n  width: 14px;\n}\n\n.checkbox input:hover,\n.menu-checkbox input:hover,\n.radio input:hover {\n  border-color: #aeb1b5;\n}\n\n.checkbox input:active,\n.menu-checkbox input:active,\n.radio input:active,\n.checkbox input:focus,\n.menu-checkbox input:focus,\n.radio input:focus {\n  border-color: #1fc8db;\n  outline: none;\n}\n\n.checkbox input[disabled],\n.menu-checkbox input[disabled],\n.radio input[disabled],\n.checkbox input[disabled]:hover,\n.menu-checkbox input[disabled]:hover,\n.radio input[disabled]:hover {\n  background: #f5f7fa;\n  border-color: #d3d6db;\n}\n\n.checkbox input[disabled]::-moz-placeholder,\n.menu-checkbox input[disabled]::-moz-placeholder,\n.radio input[disabled]::-moz-placeholder,\n.checkbox input[disabled]:hover::-moz-placeholder,\n.menu-checkbox input[disabled]:hover::-moz-placeholder,\n.radio input[disabled]:hover::-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.checkbox input[disabled]::-webkit-input-placeholder,\n.menu-checkbox input[disabled]::-webkit-input-placeholder,\n.radio input[disabled]::-webkit-input-placeholder,\n.checkbox input[disabled]:hover::-webkit-input-placeholder,\n.menu-checkbox input[disabled]:hover::-webkit-input-placeholder,\n.radio input[disabled]:hover::-webkit-input-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.checkbox input[disabled]:-moz-placeholder,\n.menu-checkbox input[disabled]:-moz-placeholder,\n.radio input[disabled]:-moz-placeholder,\n.checkbox input[disabled]:hover:-moz-placeholder,\n.menu-checkbox input[disabled]:hover:-moz-placeholder,\n.radio input[disabled]:hover:-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.checkbox input[disabled]:-ms-input-placeholder,\n.menu-checkbox input[disabled]:-ms-input-placeholder,\n.radio input[disabled]:-ms-input-placeholder,\n.checkbox input[disabled]:hover:-ms-input-placeholder,\n.menu-checkbox input[disabled]:hover:-ms-input-placeholder,\n.radio input[disabled]:hover:-ms-input-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.checkbox input:after,\n.menu-checkbox input:after,\n.radio input:after {\n  border: 1px solid white;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 7px;\n  pointer-events: none;\n  position: absolute;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 7px;\n  height: 4px;\n  left: 3px;\n  opacity: 0;\n  position: absolute;\n  top: 3px;\n  -webkit-transform: rotate(-45deg) scale(1);\n  transform: rotate(-45deg) scale(1);\n}\n\n.checkbox input:checked,\n.menu-checkbox input:checked,\n.radio input:checked {\n  background: #1fc8db;\n  border-color: #1fc8db;\n  box-shadow: none;\n}\n\n.checkbox input:checked:after,\n.menu-checkbox input:checked:after,\n.radio input:checked:after {\n  opacity: 1;\n}\n\n.checkbox:hover,\n.menu-checkbox:hover,\n.radio:hover {\n  color: #222324;\n}\n\n.checkbox:hover input,\n.menu-checkbox:hover input,\n.radio:hover input {\n  border-color: #aeb1b5;\n}\n\n.checkbox:hover input:checked,\n.menu-checkbox:hover input:checked,\n.radio:hover input:checked {\n  border-color: #1fc8db;\n}\n\n.is-disabled.checkbox,\n.is-disabled.menu-checkbox,\n.is-disabled.radio,\n.is-disabled.checkbox:hover,\n.is-disabled.menu-checkbox:hover,\n.is-disabled.radio:hover {\n  color: #aeb1b5;\n}\n\n.radio + .radio {\n  margin-left: 10px;\n}\n\n.radio input {\n  border-radius: 8px;\n}\n\n.radio input:after {\n  background: white;\n  border: 0;\n  border-radius: 2px;\n  left: 4px;\n  top: 4px;\n  -webkit-transform: none;\n  transform: none;\n  width: 4px;\n}\n\n.select {\n  display: inline-block;\n  height: 32px;\n  position: relative;\n  vertical-align: top;\n}\n\n.select select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-block;\n  font-size: 14px;\n  height: 32px;\n  line-height: 24px;\n  padding: 3px 8px;\n  position: relative;\n  vertical-align: top;\n  cursor: pointer;\n  display: block;\n  outline: none;\n  padding-right: 36px;\n}\n\n.select select:hover {\n  border-color: #aeb1b5;\n}\n\n.select select:active,\n.select select:focus {\n  border-color: #1fc8db;\n  outline: none;\n}\n\n.select select[disabled],\n.select select[disabled]:hover {\n  background: #f5f7fa;\n  border-color: #d3d6db;\n}\n\n.select select[disabled]::-moz-placeholder,\n.select select[disabled]:hover::-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.select select[disabled]::-webkit-input-placeholder,\n.select select[disabled]:hover::-webkit-input-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.select select[disabled]:-moz-placeholder,\n.select select[disabled]:hover:-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.select select[disabled]:-ms-input-placeholder,\n.select select[disabled]:hover:-ms-input-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.select select:hover {\n  border-color: #aeb1b5;\n}\n\n.select select::ms-expand {\n  display: none;\n}\n\n.select:after {\n  border: 1px solid #1fc8db;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 7px;\n  pointer-events: none;\n  position: absolute;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 7px;\n  margin-top: -6px;\n  right: 16px;\n  top: 50%;\n}\n\n.select:hover:after {\n  border-color: #222324;\n}\n\n.control {\n  position: relative;\n  text-align: left;\n}\n\n.control.is-loading:after {\n  position: absolute !important;\n  right: 8px;\n  top: 8px;\n}\n\n.control:not(:last-child) {\n  margin-bottom: 10px;\n}\n\n.control.has-icon > .fa {\n  display: inline-block;\n  font-size: 14px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: top;\n  width: 20px;\n  color: #aeb1b5;\n  left: 6px;\n  pointer-events: none;\n  position: absolute;\n  top: 6px;\n  z-index: 4;\n}\n\n.control.has-icon .input,\n.control.has-icon .textarea {\n  padding-left: 32px;\n}\n\n.control.has-icon .input:focus + .fa,\n.control.has-icon .textarea:focus + .fa {\n  color: #1fc8db;\n}\n\n.control.is-horizontal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.control.is-horizontal > .button:not(:last-child),\n.control.is-horizontal > .input:not(:last-child),\n.control.is-horizontal > .textarea:not(:last-child),\n.control.is-horizontal > .select:not(:last-child) {\n  margin-right: 10px;\n}\n\n.control.is-horizontal > .input,\n.control.is-horizontal > .textarea {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n\n.control.is-grouped {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.control.is-grouped .input,\n.control.is-grouped .textarea,\n.control.is-grouped .button,\n.control.is-grouped .select {\n  border-radius: 0;\n  margin-right: -1px;\n}\n\n.control.is-grouped .input:hover,\n.control.is-grouped .textarea:hover,\n.control.is-grouped .button:hover,\n.control.is-grouped .select:hover {\n  z-index: 2;\n}\n\n.control.is-grouped .input:active,\n.control.is-grouped .textarea:active,\n.control.is-grouped .input:focus,\n.control.is-grouped .textarea:focus,\n.control.is-grouped .button:active,\n.control.is-grouped .button:focus,\n.control.is-grouped .select:active,\n.control.is-grouped .select:focus {\n  z-index: 3;\n}\n\n.control.is-grouped .input:first-child,\n.control.is-grouped .textarea:first-child,\n.control.is-grouped .button:first-child,\n.control.is-grouped .select:first-child {\n  border-radius: 3px 0 0 3px;\n}\n\n.control.is-grouped .input:first-child select,\n.control.is-grouped .textarea:first-child select,\n.control.is-grouped .button:first-child select,\n.control.is-grouped .select:first-child select {\n  border-radius: 3px 0 0 3px;\n}\n\n.control.is-grouped .input:last-child,\n.control.is-grouped .textarea:last-child,\n.control.is-grouped .button:last-child,\n.control.is-grouped .select:last-child {\n  border-radius: 0 3px 3px 0;\n}\n\n.control.is-grouped.is-centered {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-block;\n  font-size: 14px;\n  height: 32px;\n  line-height: 24px;\n  padding: 3px 8px;\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  padding: 3px 10px;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.button:hover {\n  border-color: #aeb1b5;\n}\n\n.button:active,\n.button:focus {\n  border-color: #1fc8db;\n  outline: none;\n}\n\n.button[disabled],\n.button[disabled]:hover {\n  background: #f5f7fa;\n  border-color: #d3d6db;\n}\n\n.button[disabled]::-moz-placeholder,\n.button[disabled]:hover::-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.button[disabled]::-webkit-input-placeholder,\n.button[disabled]:hover::-webkit-input-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.button[disabled]:-moz-placeholder,\n.button[disabled]:hover:-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.button[disabled]:-ms-input-placeholder,\n.button[disabled]:hover:-ms-input-placeholder {\n  color: rgba(34, 35, 36, 0.3);\n}\n\n.button strong {\n  color: inherit;\n}\n\n.button small {\n  display: block;\n  font-size: 11px;\n  line-height: 1;\n  margin-top: 5px;\n}\n\n.button .fa {\n  line-height: 24px;\n  margin: 0 -2px;\n  width: 24px;\n}\n\n.button:hover {\n  color: #222324;\n}\n\n.button:active {\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);\n}\n\n.button.is-dark {\n  background: #222324;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-dark:hover,\n.button.is-dark:focus {\n  background: #090a0a;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-dark:active {\n  border-color: transparent;\n}\n\n.button.is-dark.is-outlined {\n  background: transparent;\n  border-color: #222324;\n  color: #222324;\n}\n\n.button.is-dark.is-outlined:hover,\n.button.is-dark.is-outlined:focus {\n  border-color: #090a0a;\n  color: #090a0a;\n}\n\n.button.is-dark.is-inverted {\n  background: white;\n  color: #222324;\n}\n\n.button.is-dark.is-inverted:hover {\n  background: #f2f2f2;\n}\n\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-dark.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.is-dark.is-loading:after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-primary {\n  background: #1fc8db;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-primary:hover,\n.button.is-primary:focus {\n  background: #199fae;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-primary:active {\n  border-color: transparent;\n}\n\n.button.is-primary.is-outlined {\n  background: transparent;\n  border-color: #1fc8db;\n  color: #1fc8db;\n}\n\n.button.is-primary.is-outlined:hover,\n.button.is-primary.is-outlined:focus {\n  border-color: #199fae;\n  color: #199fae;\n}\n\n.button.is-primary.is-inverted {\n  background: white;\n  color: #1fc8db;\n}\n\n.button.is-primary.is-inverted:hover {\n  background: #f2f2f2;\n}\n\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-primary.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.is-primary.is-loading:after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-info {\n  background: #42afe3;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-info:hover,\n.button.is-info:focus {\n  background: #1f99d3;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-info:active {\n  border-color: transparent;\n}\n\n.button.is-info.is-outlined {\n  background: transparent;\n  border-color: #42afe3;\n  color: #42afe3;\n}\n\n.button.is-info.is-outlined:hover,\n.button.is-info.is-outlined:focus {\n  border-color: #1f99d3;\n  color: #1f99d3;\n}\n\n.button.is-info.is-inverted {\n  background: white;\n  color: #42afe3;\n}\n\n.button.is-info.is-inverted:hover {\n  background: #f2f2f2;\n}\n\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-info.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.is-info.is-loading:after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-success {\n  background: #97cd76;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-success:hover,\n.button.is-success:focus {\n  background: #7bbf51;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-success:active {\n  border-color: transparent;\n}\n\n.button.is-success.is-outlined {\n  background: transparent;\n  border-color: #97cd76;\n  color: #97cd76;\n}\n\n.button.is-success.is-outlined:hover,\n.button.is-success.is-outlined:focus {\n  border-color: #7bbf51;\n  color: #7bbf51;\n}\n\n.button.is-success.is-inverted {\n  background: white;\n  color: #97cd76;\n}\n\n.button.is-success.is-inverted:hover {\n  background: #f2f2f2;\n}\n\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-success.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.is-success.is-loading:after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-warning {\n  background: #fce473;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.button.is-warning:hover,\n.button.is-warning:focus {\n  background: #fbda41;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.button.is-warning:active {\n  border-color: transparent;\n}\n\n.button.is-warning.is-outlined {\n  background: transparent;\n  border-color: #fce473;\n  color: #fce473;\n}\n\n.button.is-warning.is-outlined:hover,\n.button.is-warning.is-outlined:focus {\n  border-color: #fbda41;\n  color: #fbda41;\n}\n\n.button.is-warning.is-inverted {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fce473;\n}\n\n.button.is-warning.is-inverted:hover {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.5);\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.button.is-warning.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.is-warning.is-loading:after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) !important;\n}\n\n.button.is-danger {\n  background: #ed6c63;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-danger:hover,\n.button.is-danger:focus {\n  background: #e84135;\n  border-color: transparent;\n  color: white;\n}\n\n.button.is-danger:active {\n  border-color: transparent;\n}\n\n.button.is-danger.is-outlined {\n  background: transparent;\n  border-color: #ed6c63;\n  color: #ed6c63;\n}\n\n.button.is-danger.is-outlined:hover,\n.button.is-danger.is-outlined:focus {\n  border-color: #e84135;\n  color: #e84135;\n}\n\n.button.is-danger.is-inverted {\n  background: white;\n  color: #ed6c63;\n}\n\n.button.is-danger.is-inverted:hover {\n  background: #f2f2f2;\n}\n\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white;\n}\n\n.button.is-danger.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05);\n}\n\n.button.is-danger.is-loading:after {\n  border-color: transparent transparent white white !important;\n}\n\n.button.is-small {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding: 3px 6px;\n}\n\n.button.is-medium {\n  font-size: 18px;\n  height: 40px;\n  padding: 7px 14px;\n}\n\n.button.is-large {\n  font-size: 22px;\n  height: 48px;\n  padding: 11px 20px;\n}\n\n.button.is-fullwidth {\n  display: block;\n  width: 100%;\n}\n\n.button.is-flexible {\n  height: auto;\n}\n\n.button.is-loading {\n  color: transparent;\n  pointer-events: none;\n}\n\n.button.is-loading:after {\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -8px;\n  position: absolute;\n  top: 50%;\n  position: absolute !important;\n}\n\n.button.is-disabled,\n.button[disabled] {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n@media screen and (min-width: 769px) {\n  .button small {\n    color: #69707a;\n    left: 0;\n    margin-top: 10px;\n    position: absolute;\n    top: 100%;\n    width: 100%;\n  }\n}\n\n.title,\n.subtitle {\n  font-weight: 300;\n}\n\n.title a:hover,\n.subtitle a:hover {\n  border-bottom: 1px solid;\n}\n\n.title {\n  color: #222324;\n  font-size: 28px;\n  line-height: 1;\n}\n\n.title strong {\n  color: inherit;\n}\n\n.title code {\n  display: inline-block;\n  font-size: 28px;\n}\n\n.title + .subtitle {\n  margin-top: -10px;\n}\n\n.title + .highlight {\n  margin-top: -10px;\n}\n\n.title.is-normal {\n  font-weight: 400;\n}\n\n.title.is-normal strong {\n  font-weight: 700;\n}\n\n.title.is-1 {\n  font-size: 48px;\n}\n\n.title.is-1 code {\n  font-size: 40px;\n}\n\n.title.is-2 {\n  font-size: 40px;\n}\n\n.title.is-2 code {\n  font-size: 28px;\n}\n\n.title.is-3 {\n  font-size: 28px;\n}\n\n.title.is-3 code {\n  font-size: 24px;\n}\n\n.title.is-4 {\n  font-size: 24px;\n}\n\n.title.is-4 code {\n  font-size: 18px;\n}\n\n.title.is-5 {\n  font-size: 18px;\n}\n\n.title.is-5 code {\n  font-size: 14px;\n}\n\n.title.is-6 {\n  font-size: 14px;\n}\n\n.title.is-6 code {\n  font-size: 14px;\n}\n\n@media screen and (min-width: 769px) {\n  .title + .subtitle {\n    margin-top: -15px;\n  }\n}\n\n.subtitle {\n  font-size: 18px;\n  line-height: 1.125;\n}\n\n.subtitle + .title {\n  margin-top: -20px;\n}\n\n.subtitle strong {\n  color: #222324;\n  font-weight: 400;\n}\n\n.subtitle code {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 14px;\n  padding: 2px 3px;\n  vertical-align: top;\n}\n\n.subtitle + .text {\n  margin-top: 20px;\n}\n\n.subtitle.is-normal {\n  font-weight: 400;\n}\n\n.subtitle.is-normal strong {\n  font-weight: 700;\n}\n\n.subtitle.is-1 {\n  font-size: 48px;\n}\n\n.subtitle.is-1 code {\n  font-size: 40px;\n}\n\n.subtitle.is-2 {\n  font-size: 40px;\n}\n\n.subtitle.is-2 code {\n  font-size: 28px;\n}\n\n.subtitle.is-3 {\n  font-size: 28px;\n}\n\n.subtitle.is-3 code {\n  font-size: 24px;\n}\n\n.subtitle.is-4 {\n  font-size: 24px;\n}\n\n.subtitle.is-4 code {\n  font-size: 18px;\n}\n\n.subtitle.is-5 {\n  font-size: 18px;\n}\n\n.subtitle.is-5 code {\n  font-size: 14px;\n}\n\n.subtitle.is-6 {\n  font-size: 14px;\n}\n\n.subtitle.is-6 code {\n  font-size: 14px;\n}\n\n.image {\n  display: block;\n  position: relative;\n}\n\n.image img {\n  display: block;\n}\n\n.image.is-square img,\n.image.is-1by1 img,\n.image.is-4by3 img,\n.image.is-3by2 img,\n.image.is-16by9 img,\n.image.is-2by1 img {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.image.is-square,\n.image.is-1by1 {\n  padding-top: 100%;\n}\n\n.image.is-4by3 {\n  padding-top: 75%;\n}\n\n.image.is-3by2 {\n  padding-top: 66.6666%;\n}\n\n.image.is-16by9 {\n  padding-top: 56.25%;\n}\n\n.image.is-2by1 {\n  padding-top: 50%;\n}\n\n.image.is-16x16 {\n  height: 16px;\n  width: 16px;\n}\n\n.image.is-24x24 {\n  height: 24px;\n  width: 24px;\n}\n\n.image.is-32x32 {\n  height: 32px;\n  width: 32px;\n}\n\n.image.is-48x48 {\n  height: 48px;\n  width: 48px;\n}\n\n.image.is-64x64 {\n  height: 64px;\n  width: 64px;\n}\n\n.image.is-96x96 {\n  height: 96px;\n  width: 96px;\n}\n\n.image.is-128x128 {\n  height: 128px;\n  width: 128px;\n}\n\n.message-body {\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  padding: 12px 15px;\n}\n\n.message-body strong {\n  color: inherit;\n}\n\n.message-header {\n  background: #69707a;\n  border-radius: 3px 3px 0 0;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  padding: 3px 8px;\n  text-transform: uppercase;\n}\n\n.message-header + .message-body {\n  border-radius: 0 0 3px 3px;\n  border-top: none;\n}\n\n.message {\n  background: #f5f7fa;\n  border-radius: 3px;\n}\n\n.message.is-dark {\n  background: whitesmoke;\n}\n\n.message.is-dark .message-header {\n  background: #222324;\n  color: white;\n}\n\n.message.is-dark .message-body {\n  border-color: #222324;\n  color: gray;\n}\n\n.message.is-primary {\n  background: #edfbfc;\n}\n\n.message.is-primary .message-header {\n  background: #1fc8db;\n  color: white;\n}\n\n.message.is-primary .message-body {\n  border-color: #1fc8db;\n  color: gray;\n}\n\n.message.is-info {\n  background: #edf7fc;\n}\n\n.message.is-info .message-header {\n  background: #42afe3;\n  color: white;\n}\n\n.message.is-info .message-body {\n  border-color: #42afe3;\n  color: gray;\n}\n\n.message.is-success {\n  background: #f4faf0;\n}\n\n.message.is-success .message-header {\n  background: #97cd76;\n  color: white;\n}\n\n.message.is-success .message-body {\n  border-color: #97cd76;\n  color: gray;\n}\n\n.message.is-warning {\n  background: #fffbeb;\n}\n\n.message.is-warning .message-header {\n  background: #fce473;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.message.is-warning .message-body {\n  border-color: #fce473;\n  color: #666666;\n}\n\n.message.is-danger {\n  background: #fdeeed;\n}\n\n.message.is-danger .message-header {\n  background: #ed6c63;\n  color: white;\n}\n\n.message.is-danger .message-body {\n  border-color: #ed6c63;\n  color: gray;\n}\n\n.notification {\n  background: #f5f7fa;\n  border-radius: 3px;\n  padding: 16px 20px;\n  position: relative;\n}\n\n.notification:after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.notification .title {\n  color: inherit;\n}\n\n.notification.is-dark {\n  background: #222324;\n  color: white;\n}\n\n.notification.is-primary {\n  background: #1fc8db;\n  color: white;\n}\n\n.notification.is-info {\n  background: #42afe3;\n  color: white;\n}\n\n.notification.is-success {\n  background: #97cd76;\n  color: white;\n}\n\n.notification.is-warning {\n  background: #fce473;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.notification.is-danger {\n  background: #ed6c63;\n  color: white;\n}\n\n.notification .delete,\n.notification .modal-close {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 0 3px;\n  float: right;\n  margin: -16px -20px 0 20px;\n}\n\n.notification .delete:hover,\n.notification .modal-close:hover {\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.box {\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n}\n\n.delete,\n.modal-close {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: rgba(0, 0, 0, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  height: 24px;\n  position: relative;\n  vertical-align: top;\n  width: 24px;\n}\n\n.delete:before,\n.modal-close:before,\n.delete:after,\n.modal-close:after {\n  background: white;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -1px;\n  position: absolute;\n  top: 50%;\n  width: 50%;\n}\n\n.delete:before,\n.modal-close:before {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.delete:after,\n.modal-close:after {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n.delete:hover,\n.modal-close:hover {\n  background: #ed6c63;\n}\n\n.delete.is-small,\n.tag:not(.is-large) .delete,\n.tag:not(.is-large) .modal-close,\n.is-small.modal-close {\n  height: 16px;\n  width: 16px;\n}\n\n.delete.is-medium,\n.is-medium.modal-close {\n  height: 32px;\n  width: 32px;\n}\n\n.delete.is-large,\n.is-large.modal-close {\n  height: 40px;\n  width: 40px;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 21px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  vertical-align: top;\n  width: 24px;\n}\n\n.icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.icon.is-small {\n  display: inline-block;\n  font-size: 14px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: top;\n  width: 20px;\n}\n\n.icon.is-medium {\n  display: inline-block;\n  font-size: 28px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  vertical-align: top;\n  width: 32px;\n}\n\n.icon.is-large {\n  display: inline-block;\n  font-size: 42px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  vertical-align: top;\n  width: 48px;\n}\n\n.hamburger,\n.header-toggle {\n  cursor: pointer;\n  display: block;\n  height: 50px;\n  position: relative;\n  width: 50px;\n}\n\n.hamburger span,\n.header-toggle span {\n  background: #69707a;\n  display: block;\n  height: 1px;\n  left: 50%;\n  margin-left: -7px;\n  position: absolute;\n  top: 50%;\n  -webkit-transition: none 86ms ease-out;\n  transition: none 86ms ease-out;\n  -webkit-transition-property: background, left, opacity, -webkit-transform;\n  transition-property: background, left, opacity, -webkit-transform;\n  transition-property: background, left, opacity, transform;\n  transition-property: background, left, opacity, transform, -webkit-transform;\n  width: 15px;\n}\n\n.hamburger span:nth-child(1),\n.header-toggle span:nth-child(1) {\n  margin-top: -6px;\n}\n\n.hamburger span:nth-child(2),\n.header-toggle span:nth-child(2) {\n  margin-top: -1px;\n}\n\n.hamburger span:nth-child(3),\n.header-toggle span:nth-child(3) {\n  margin-top: 4px;\n}\n\n.hamburger:hover,\n.header-toggle:hover {\n  background: #f5f7fa;\n}\n\n.hamburger.is-active span,\n.is-active.header-toggle span {\n  background: #1fc8db;\n}\n\n.hamburger.is-active span:nth-child(1),\n.is-active.header-toggle span:nth-child(1) {\n  margin-left: -5px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  -webkit-transform-origin: left top;\n  transform-origin: left top;\n}\n\n.hamburger.is-active span:nth-child(2),\n.is-active.header-toggle span:nth-child(2) {\n  opacity: 0;\n}\n\n.hamburger.is-active span:nth-child(3),\n.is-active.header-toggle span:nth-child(3) {\n  margin-left: -5px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-transform-origin: left bottom;\n  transform-origin: left bottom;\n}\n\n@media screen and (min-width: 769px) {\n  .hamburger,\n  .header-toggle {\n    height: 50px;\n    width: 50px;\n  }\n}\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n\n.highlight {\n  font-size: 12px;\n  font-weight: normal;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n\n.highlight pre {\n  overflow: auto;\n  max-width: 100%;\n}\n\n.image {\n  display: block;\n  position: relative;\n  vertical-align: top;\n}\n\n.image img {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n}\n\n.image.is-3x2 {\n  padding-top: 66.6666%;\n}\n\n.loader,\n.control.is-loading:after,\n.button.is-loading:after {\n  -webkit-animation: spin-around 500ms infinite linear;\n  animation: spin-around 500ms infinite linear;\n  border: 2px solid #d3d6db;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 16px;\n  position: relative;\n  width: 16px;\n}\n\n.number {\n  background: #f5f7fa;\n  border-radius: 290486px;\n  display: inline-block;\n  font-size: 18px;\n  vertical-align: top;\n}\n\n.tag {\n  background: #f5f7fa;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);\n  color: #69707a;\n  display: inline-block;\n  font-size: 12px;\n  height: 24px;\n  line-height: 16px;\n  padding: 4px 10px;\n  vertical-align: top;\n  white-space: nowrap;\n}\n\n.tag.is-dark {\n  background: #69707a;\n  color: white;\n}\n\n.tag.is-rounded {\n  border-radius: 290486px;\n}\n\n.tag.is-medium {\n  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n  height: 32px;\n  padding: 7px 14px 9px;\n}\n\n.tag:not(.is-large) .delete,\n.tag:not(.is-large) .modal-close {\n  margin-left: 4px;\n  margin-right: -6px;\n}\n\n.tag.is-large {\n  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.1);\n  font-size: 18px;\n  height: 40px;\n  line-height: 24px;\n  padding: 7px 18px 9px;\n}\n\n.tag.is-large .delete,\n.tag.is-large .modal-close {\n  margin-left: 4px;\n  margin-right: -8px;\n}\n\n.tag.is-dark {\n  background: #222324;\n  color: white;\n}\n\n.tag.is-primary {\n  background: #1fc8db;\n  color: white;\n}\n\n.tag.is-info {\n  background: #42afe3;\n  color: white;\n}\n\n.tag.is-success {\n  background: #97cd76;\n  color: white;\n}\n\n.tag.is-warning {\n  background: #fce473;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.tag.is-danger {\n  background: #ed6c63;\n  color: white;\n}\n\n.column {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  padding: 10px;\n}\n\n.columns.is-mobile > .column.is-half {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 50%;\n}\n\n.columns.is-mobile > .column.is-third {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 33.3333%;\n}\n\n.columns.is-mobile > .column.is-quarter {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 25%;\n}\n\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%;\n}\n\n.columns.is-mobile > .column.is-offset-third {\n  margin-left: 33.3333%;\n}\n\n.columns.is-mobile > .column.is-offset-quarter {\n  margin-left: 25%;\n}\n\n.columns.is-mobile > .column.is-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 8.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.columns.is-mobile > .column.is-2 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 16.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.columns.is-mobile > .column.is-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 25%;\n}\n\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%;\n}\n\n.columns.is-mobile > .column.is-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 33.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.columns.is-mobile > .column.is-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 41.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.columns.is-mobile > .column.is-6 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 50%;\n}\n\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%;\n}\n\n.columns.is-mobile > .column.is-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 58.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.columns.is-mobile > .column.is-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 66.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.columns.is-mobile > .column.is-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 75%;\n}\n\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%;\n}\n\n.columns.is-mobile > .column.is-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 83.33333%;\n}\n\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.columns.is-mobile > .column.is-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 91.66667%;\n}\n\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66667%;\n}\n\n@media screen and (max-width: 768px) {\n  .column.is-half-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%;\n  }\n\n  .column.is-third-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.3333%;\n  }\n\n  .column.is-quarter-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%;\n  }\n\n  .column.is-offset-half-mobile {\n    margin-left: 50%;\n  }\n\n  .column.is-offset-third-mobile {\n    margin-left: 33.3333%;\n  }\n\n  .column.is-offset-quarter-mobile {\n    margin-left: 25%;\n  }\n\n  .column.is-1-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 8.33333%;\n  }\n\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333%;\n  }\n\n  .column.is-2-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 16.66667%;\n  }\n\n  .column.is-offset-2-mobile {\n    margin-left: 16.66667%;\n  }\n\n  .column.is-3-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%;\n  }\n\n  .column.is-offset-3-mobile {\n    margin-left: 25%;\n  }\n\n  .column.is-4-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.33333%;\n  }\n\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333%;\n  }\n\n  .column.is-5-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 41.66667%;\n  }\n\n  .column.is-offset-5-mobile {\n    margin-left: 41.66667%;\n  }\n\n  .column.is-6-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%;\n  }\n\n  .column.is-offset-6-mobile {\n    margin-left: 50%;\n  }\n\n  .column.is-7-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 58.33333%;\n  }\n\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333%;\n  }\n\n  .column.is-8-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 66.66667%;\n  }\n\n  .column.is-offset-8-mobile {\n    margin-left: 66.66667%;\n  }\n\n  .column.is-9-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 75%;\n  }\n\n  .column.is-offset-9-mobile {\n    margin-left: 75%;\n  }\n\n  .column.is-10-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 83.33333%;\n  }\n\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333%;\n  }\n\n  .column.is-11-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 91.66667%;\n  }\n\n  .column.is-offset-11-mobile {\n    margin-left: 91.66667%;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .column.is-half,\n  .column.is-half-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%;\n  }\n\n  .column.is-third,\n  .column.is-third-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.3333%;\n  }\n\n  .column.is-quarter,\n  .column.is-quarter-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%;\n  }\n\n  .column.is-offset-half,\n  .column.is-offset-half-tablet {\n    margin-left: 50%;\n  }\n\n  .column.is-offset-third,\n  .column.is-offset-third-tablet {\n    margin-left: 33.3333%;\n  }\n\n  .column.is-offset-quarter,\n  .column.is-offset-quarter-tablet {\n    margin-left: 25%;\n  }\n\n  .column.is-1,\n  .column.is-1-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 8.33333%;\n  }\n\n  .column.is-offset-1,\n  .column.is-offset-1-tablet {\n    margin-left: 8.33333%;\n  }\n\n  .column.is-2,\n  .column.is-2-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 16.66667%;\n  }\n\n  .column.is-offset-2,\n  .column.is-offset-2-tablet {\n    margin-left: 16.66667%;\n  }\n\n  .column.is-3,\n  .column.is-3-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%;\n  }\n\n  .column.is-offset-3,\n  .column.is-offset-3-tablet {\n    margin-left: 25%;\n  }\n\n  .column.is-4,\n  .column.is-4-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.33333%;\n  }\n\n  .column.is-offset-4,\n  .column.is-offset-4-tablet {\n    margin-left: 33.33333%;\n  }\n\n  .column.is-5,\n  .column.is-5-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 41.66667%;\n  }\n\n  .column.is-offset-5,\n  .column.is-offset-5-tablet {\n    margin-left: 41.66667%;\n  }\n\n  .column.is-6,\n  .column.is-6-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%;\n  }\n\n  .column.is-offset-6,\n  .column.is-offset-6-tablet {\n    margin-left: 50%;\n  }\n\n  .column.is-7,\n  .column.is-7-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 58.33333%;\n  }\n\n  .column.is-offset-7,\n  .column.is-offset-7-tablet {\n    margin-left: 58.33333%;\n  }\n\n  .column.is-8,\n  .column.is-8-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 66.66667%;\n  }\n\n  .column.is-offset-8,\n  .column.is-offset-8-tablet {\n    margin-left: 66.66667%;\n  }\n\n  .column.is-9,\n  .column.is-9-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 75%;\n  }\n\n  .column.is-offset-9,\n  .column.is-offset-9-tablet {\n    margin-left: 75%;\n  }\n\n  .column.is-10,\n  .column.is-10-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 83.33333%;\n  }\n\n  .column.is-offset-10,\n  .column.is-offset-10-tablet {\n    margin-left: 83.33333%;\n  }\n\n  .column.is-11,\n  .column.is-11-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 91.66667%;\n  }\n\n  .column.is-offset-11,\n  .column.is-offset-11-tablet {\n    margin-left: 91.66667%;\n  }\n}\n\n@media screen and (min-width: 980px) {\n  .column.is-half-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%;\n  }\n\n  .column.is-third-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.3333%;\n  }\n\n  .column.is-quarter-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%;\n  }\n\n  .column.is-offset-half-desktop {\n    margin-left: 50%;\n  }\n\n  .column.is-offset-third-desktop {\n    margin-left: 33.3333%;\n  }\n\n  .column.is-offset-quarter-desktop {\n    margin-left: 25%;\n  }\n\n  .column.is-1-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 8.33333%;\n  }\n\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333%;\n  }\n\n  .column.is-2-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 16.66667%;\n  }\n\n  .column.is-offset-2-desktop {\n    margin-left: 16.66667%;\n  }\n\n  .column.is-3-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%;\n  }\n\n  .column.is-offset-3-desktop {\n    margin-left: 25%;\n  }\n\n  .column.is-4-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.33333%;\n  }\n\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333%;\n  }\n\n  .column.is-5-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 41.66667%;\n  }\n\n  .column.is-offset-5-desktop {\n    margin-left: 41.66667%;\n  }\n\n  .column.is-6-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%;\n  }\n\n  .column.is-offset-6-desktop {\n    margin-left: 50%;\n  }\n\n  .column.is-7-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 58.33333%;\n  }\n\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333%;\n  }\n\n  .column.is-8-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 66.66667%;\n  }\n\n  .column.is-offset-8-desktop {\n    margin-left: 66.66667%;\n  }\n\n  .column.is-9-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 75%;\n  }\n\n  .column.is-offset-9-desktop {\n    margin-left: 75%;\n  }\n\n  .column.is-10-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 83.33333%;\n  }\n\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333%;\n  }\n\n  .column.is-11-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 91.66667%;\n  }\n\n  .column.is-offset-11-desktop {\n    margin-left: 91.66667%;\n  }\n}\n\n.columns {\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-top: -10px;\n}\n\n.columns:last-child {\n  margin-bottom: -10px;\n}\n\n.columns:not(:last-child) {\n  margin-bottom: 10px;\n}\n\n.columns.is-mobile {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0;\n}\n\n.columns.is-multiline {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.columns.is-vcentered {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n}\n\n@media screen and (min-width: 769px) {\n  .columns.is-grid {\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n  }\n\n  .columns.is-grid > .column {\n    -webkit-flex-basis: 33.3333%;\n    -ms-flex-preferred-size: 33.3333%;\n    flex-basis: 33.3333%;\n    max-width: 33.3333%;\n    padding: 10px;\n    width: 33.3333%;\n  }\n\n  .columns.is-grid > .column + .column {\n    margin-left: 0;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .columns:not(.is-desktop) {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 980px) {\n  .columns.is-desktop {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n.navbar-item .title,\n.navbar-item .subtitle {\n  margin-bottom: 0;\n}\n\n@media screen and (max-width: 768px) {\n  .navbar-item:not(:last-child) {\n    margin-bottom: 10px;\n  }\n}\n\n.navbar code {\n  border-radius: 3px;\n}\n\n.navbar img {\n  display: inline-block;\n  vertical-align: top;\n}\n\n@media screen and (min-width: 769px) {\n  .navbar {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n  }\n\n  .navbar > .navbar-item:not(.is-narrow) {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n  }\n}\n\n.navbar-left .navbar-item.is-flexible,\n.navbar-right .navbar-item.is-flexible {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n}\n\n.navbar-left .navbar-item:not(:last-child),\n.navbar-right .navbar-item:not(:last-child) {\n  margin-right: 10px;\n}\n\n@media screen and (max-width: 768px) {\n  .navbar-left + .navbar-right {\n    margin-top: 20px;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .navbar-left {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .navbar-right {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n  }\n}\n\n.card-image {\n  display: block;\n  position: relative;\n}\n\n.card-image img {\n  display: block;\n}\n\n.card-image.is-square img,\n.card-image.is-4x3 img,\n.card-image.is-3x2 img {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.card-image.is-square {\n  padding-top: 100%;\n}\n\n.card-image.is-4x3 {\n  padding-top: 75%;\n}\n\n.card-image.is-3x2 {\n  padding-top: 66.6666%;\n}\n\n.card-content {\n  padding: 20px;\n}\n\n.card-content .title + .subtitle {\n  margin-top: -20px;\n}\n\n.card-footer {\n  background: #f5f7fa;\n  display: block;\n  padding: 10px;\n}\n\n.card {\n  background: white;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n  max-width: 100%;\n  position: relative;\n  width: 300px;\n}\n\n.card .media:not(:last-child) {\n  margin-bottom: 10px;\n}\n\n.card.is-rounded {\n  border-radius: 5px;\n}\n\n.table {\n  background: white;\n  color: #222324;\n  margin-bottom: 20px;\n  width: 100%;\n}\n\n.table th,\n.table td {\n  border: 1px solid #d3d6db;\n  border-width: 0 0 1px;\n  padding: 8px 10px;\n  vertical-align: top;\n}\n\n.table th.table-narrow,\n.table td.table-narrow {\n  white-space: nowrap;\n  width: 1%;\n}\n\n.table th.table-link,\n.table td.table-link {\n  padding: 0;\n}\n\n.table th.table-link > a,\n.table td.table-link > a {\n  display: block;\n  padding: 8px 10px;\n}\n\n.table th.table-link > a:hover,\n.table td.table-link > a:hover {\n  background: #1fc8db;\n  color: white;\n}\n\n.table th.table-icon,\n.table td.table-icon {\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n  width: 1%;\n}\n\n.table th.table-icon .fa,\n.table td.table-icon .fa {\n  display: inline-block;\n  font-size: 21px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  vertical-align: top;\n  width: 24px;\n}\n\n.table th.table-icon.table-link,\n.table td.table-icon.table-link {\n  padding: 0;\n}\n\n.table th.table-icon.table-link > a,\n.table td.table-icon.table-link > a {\n  padding: 5px;\n}\n\n.table th {\n  color: #222324;\n  text-align: left;\n}\n\n.table tr:hover {\n  background: rgba(245, 247, 250, 0.5);\n  color: #222324;\n}\n\n.table tr:last-child td {\n  border-bottom-width: 0;\n}\n\n.table thead th,\n.table thead td {\n  border-width: 0 0 2px;\n  color: #aeb1b5;\n}\n\n.table tfoot th,\n.table tfoot td {\n  border-width: 2px 0 0;\n  color: #aeb1b5;\n}\n\n.table.is-bordered th,\n.table.is-bordered td {\n  border-width: 1px;\n}\n\n.table.is-bordered tr:last-child td {\n  border-bottom-width: 1px;\n}\n\n.table.is-narrow th,\n.table.is-narrow td {\n  padding: 5px 10px;\n}\n\n.table.is-narrow th.table-link,\n.table.is-narrow td.table-link {\n  padding: 0;\n}\n\n.table.is-narrow th.table-link > a,\n.table.is-narrow td.table-link > a {\n  padding: 5px 10px;\n}\n\n.table.is-narrow th.table-icon,\n.table.is-narrow td.table-icon {\n  padding: 2px;\n}\n\n.table.is-narrow th.table-icon.table-link,\n.table.is-narrow td.table-icon.table-link {\n  padding: 0;\n}\n\n.table.is-narrow th.table-icon.table-link > a,\n.table.is-narrow td.table-icon.table-link > a {\n  padding: 2px;\n}\n\n.table.is-striped tbody tr:nth-child(2n) {\n  background: rgba(245, 247, 250, 0.5);\n}\n\n.table.is-striped tbody tr:nth-child(2n):hover {\n  background: #f5f7fa;\n}\n\n.tabs {\n  line-height: 24px;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n.tabs .fa {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 2px -2px;\n  width: 20px;\n}\n\n.tabs a {\n  border-bottom: 1px solid #d3d6db;\n  color: #69707a;\n  display: block;\n  margin-bottom: -1px;\n  padding: 5px 0;\n  vertical-align: top;\n}\n\n.tabs a:hover {\n  border-bottom-color: #222324;\n  color: #222324;\n}\n\n.tabs li {\n  display: block;\n  vertical-align: top;\n}\n\n.tabs li + li {\n  margin-left: 20px;\n}\n\n.tabs li.is-active a {\n  border-bottom-color: #1fc8db;\n  color: #1fc8db;\n}\n\n.tabs ul {\n  border-bottom: 1px solid #d3d6db;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.tabs.is-centered a {\n  padding: 5px 10px;\n}\n\n.tabs.is-centered li + li {\n  margin-left: 0;\n}\n\n.tabs.is-centered ul {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.tabs.is-right ul {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end;\n}\n\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 3px 3px 0 0;\n  padding: 5px 15px;\n}\n\n.tabs.is-boxed a:hover {\n  background: #f5f7fa;\n  border-bottom-color: #d3d6db;\n}\n\n.tabs.is-boxed li + li {\n  margin-left: 5px;\n}\n\n.tabs.is-boxed li.is-active a {\n  background: white;\n  border-color: #d3d6db;\n  border-bottom-color: transparent;\n}\n\n.tabs.is-boxed.is-centered li,\n.tabs.is-boxed.is-centered li + li {\n  margin: 0 2px;\n}\n\n.tabs.is-toggle a {\n  border: 1px solid #d3d6db;\n  margin-bottom: 0;\n  padding: 5px 10px;\n  position: relative;\n}\n\n.tabs.is-toggle a:hover {\n  background: #f5f7fa;\n  border-color: #aeb1b5;\n  z-index: 2;\n}\n\n.tabs.is-toggle li + li {\n  margin-left: -1px;\n}\n\n.tabs.is-toggle li:first-child a {\n  border-radius: 3px 0 0 3px;\n}\n\n.tabs.is-toggle li:last-child a {\n  border-radius: 0 3px 3px 0;\n}\n\n.tabs.is-toggle li.is-active a {\n  background: #1fc8db;\n  border-color: #1fc8db;\n  color: white;\n  z-index: 1;\n}\n\n.tabs.is-toggle ul {\n  border-bottom: none;\n}\n\n@media screen and (min-width: 769px) {\n  .tabs.is-fullwidth li {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n  }\n\n  .tabs.is-fullwidth li + li {\n    margin-left: 0;\n  }\n\n  .tabs.is-fullwidth ul {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n  }\n}\n\n.media-number {\n  background: #f5f7fa;\n  border-radius: 290486px;\n  display: inline-block;\n  font-size: 18px;\n  height: 32px;\n  line-height: 24px;\n  min-width: 32px;\n  padding: 4px 8px;\n  text-align: center;\n  vertical-align: top;\n}\n\n@media screen and (max-width: 768px) {\n  .media-number {\n    margin-bottom: 10px;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .media-number {\n    margin-right: 10px;\n  }\n}\n\n.media-left {\n  margin-right: 10px;\n}\n\n.media-right {\n  margin-left: 10px;\n}\n\n.media-content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: left;\n}\n\n.media {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left;\n}\n\n.media .content:not(:last-child) {\n  margin-bottom: 10px;\n}\n\n.media .media {\n  border-top: 1px solid rgba(211, 214, 219, 0.5);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n}\n\n.media .media .textarea {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding: 3px 6px;\n}\n\n.media .media .button {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding: 3px 6px;\n}\n\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 5px;\n}\n\n.media .media .media {\n  font-size: 12px;\n  padding-top: 5px;\n}\n\n.media .media .media + .media {\n  margin-top: 5px;\n}\n\n.media + .media {\n  border-top: 1px solid rgba(211, 214, 219, 0.5);\n  margin-top: 10px;\n  padding-top: 10px;\n}\n\n.media.is-large + .media {\n  margin-top: 20px;\n  padding-top: 20px;\n}\n\n@media screen and (min-width: 769px) {\n  .media.is-large .media-number {\n    margin-right: 20px;\n  }\n}\n\n.menu-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 16px;\n  line-height: 16px;\n  text-align: center;\n  vertical-align: top;\n  width: 16px;\n  color: #aeb1b5;\n  float: left;\n  margin: 0 4px 0 -2px;\n}\n\n.menu-icon .fa {\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.menu-heading {\n  background: #f5f7fa;\n  border-bottom: 1px solid #d3d6db;\n  border-radius: 4px 4px 0 0;\n  color: #222324;\n  font-size: 18px;\n  font-weight: 300;\n  padding: 10px;\n}\n\n.menu-list a {\n  color: #69707a;\n}\n\n.menu-list a:hover {\n  color: #1fc8db;\n}\n\n.menu-tabs {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 11px;\n  padding: 5px 10px 0;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.menu-tabs:not(:last-child) {\n  border-bottom: 1px solid #d3d6db;\n}\n\n.menu-tabs a {\n  border-bottom: 1px solid #d3d6db;\n  margin-bottom: -1px;\n  padding: 5px;\n}\n\n.menu-tabs a.is-active {\n  border-bottom-color: #222324;\n  color: #222324;\n}\n\n.menu-block {\n  color: #222324;\n  display: block;\n  line-height: 16px;\n  padding: 10px;\n}\n\n.menu-block:not(:last-child) {\n  border-bottom: 1px solid #d3d6db;\n}\n\n.menu-block .checkbox,\n.menu-block .menu-checkbox {\n  border: 1px solid transparent;\n  border-radius: 3px;\n  display: block;\n  padding: 8px;\n  padding-left: 32px;\n}\n\n.menu-block .checkbox input,\n.menu-block .menu-checkbox input {\n  left: 9px;\n  top: 9px;\n}\n\n.menu-block .checkbox:hover,\n.menu-block .menu-checkbox:hover {\n  border-color: #1fc8db;\n}\n\na.menu-block:hover {\n  background: #f5f7fa;\n}\n\n.menu-checkbox {\n  display: block;\n  padding: 9px 10px 9px 30px;\n}\n\n.menu-checkbox:not(:last-child) {\n  border-bottom: 1px solid #d3d6db;\n}\n\n.menu-checkbox input {\n  left: 8px;\n  top: 10px;\n}\n\n.menu {\n  border: 1px solid #d3d6db;\n  border-radius: 5px;\n}\n\n.menu:not(:last-child) {\n  margin-bottom: 20px;\n}\n\n.modal-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.86);\n}\n\n.modal-content {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%;\n}\n\n@media screen and (min-width: 769px) {\n  .modal-content {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px;\n  }\n}\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px;\n}\n\n.modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  display: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 1986;\n}\n\n.modal.is-active {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.header {\n  background: white;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  line-height: 24px;\n  position: relative;\n  text-align: center;\n  z-index: 2;\n}\n\n.header:after {\n  clear: both;\n  content: \" \";\n  display: table;\n}\n\n.header .container {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  box-shadow: 0 1px 0 rgba(211, 214, 219, 0.3);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n@media screen and (min-width: 769px) {\n  .header {\n    height: 50px;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .header-toggle {\n    display: none;\n  }\n}\n\n.header-item {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px;\n}\n\n.header-item img {\n  max-height: 24px;\n}\n\n.header-item a {\n  color: #69707a;\n}\n\n.header-item a:hover {\n  color: #222324;\n}\n\n.header-item a.is-active {\n  color: #222324;\n}\n\n.header-item .fa {\n  font-size: 21px;\n  line-height: 24px;\n}\n\n.header-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  vertical-align: top;\n  width: 24px;\n  color: #69707a;\n  margin: 0 5px;\n}\n\n.header-icon:hover {\n  color: #222324;\n}\n\n.header-tab {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  border-bottom: 1px solid transparent;\n  color: #69707a;\n  display: block;\n  height: 50px;\n  line-height: 24px;\n  padding: 13px 15px;\n}\n\n.header-tab:hover {\n  border-bottom: 1px solid #1fc8db;\n}\n\n.header-tab.is-active {\n  border-bottom: 3px solid #1fc8db;\n  color: #1fc8db;\n}\n\n.header-left {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap;\n}\n\n@media screen and (min-width: 980px) {\n  .header-left .header-item:first-child {\n    padding-left: 0;\n  }\n}\n\n.header-center {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  left: 50%;\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n\n.header-right {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  -ms-grid-row-align: stretch;\n  align-items: stretch;\n}\n\n@media screen and (min-width: 769px) {\n  .header-right {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n\n@media screen and (min-width: 980px) {\n  .header-right .header-item:last-child {\n    padding-right: 0;\n  }\n}\n\n.header-full {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n}\n\n.header-full > .header-item {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: 0;\n}\n\n.header-full > .header-item > a {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%;\n}\n\n@media screen and (max-width: 768px) {\n  .header-menu {\n    background: white;\n    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);\n    display: none;\n    min-width: 120px;\n    position: absolute;\n    right: 0;\n    top: 50px;\n    z-index: 100;\n  }\n\n  .header-menu .header-item {\n    border-top: 1px solid rgba(211, 214, 219, 0.5);\n    padding: 10px;\n  }\n\n  .header-menu.is-active {\n    display: block;\n  }\n}\n\n.header.is-centered {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.header.is-centered .header-left,\n.header.is-centered .header-center,\n.header.is-centered .header-right {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.header.is-small {\n  background: #f5f7fa;\n  box-shadow: none;\n  height: 40px;\n  z-index: 1;\n}\n\n.header.is-small .container {\n  height: 40px;\n}\n\n.header.is-small .header-tab {\n  font-size: 13px;\n  height: 40px;\n  padding: 8px 10px;\n}\n\n.header.is-small .header-tab:hover,\n.header.is-small .header-tab.is-active {\n  border-bottom-width: 2px;\n}\n\n.hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden;\n}\n\n.hero-video.is-transparent {\n  opacity: 0.3;\n}\n\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0);\n}\n\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none;\n  }\n}\n\n.hero-content {\n  padding: 40px 20px;\n}\n\n@media screen and (min-width: 980px) {\n  .hero-content {\n    padding: 40px 0;\n  }\n}\n\n.hero-buttons {\n  margin-top: 20px;\n}\n\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: block;\n  }\n\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 10px;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .hero-buttons {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n  }\n\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 20px;\n  }\n}\n\n.hero {\n  background: white;\n  text-align: center;\n}\n\n.hero .header {\n  background: none;\n  box-shadow: none;\n}\n\n.hero .tabs a {\n  border: none;\n}\n\n.hero .tabs ul {\n  border-bottom: none;\n}\n\n.hero .tabs.is-boxed a {\n  padding: 8px 15px;\n}\n\n.hero.is-alt {\n  background: #f5f7fa;\n  color: #aeb1b5;\n}\n\n.hero.is-dark {\n  background: #222324;\n  color: white;\n}\n\n.hero.is-dark .title {\n  color: white;\n}\n\n.hero.is-dark .title a,\n.hero.is-dark .title strong {\n  color: inherit;\n}\n\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-dark .subtitle strong {\n  color: white;\n}\n\n.hero.is-dark .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n\n.hero.is-dark .header-icon,\n.hero.is-dark .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-dark .header-icon:hover,\n.hero.is-dark .header-icon.is-active,\n.hero.is-dark .header-item > a:not(.button):hover,\n.hero.is-dark .header-item > a:not(.button).is-active {\n  opacity: 1;\n}\n\n.hero.is-dark .tabs a {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-dark .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-dark .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-dark .tabs.is-boxed a,\n.hero.is-dark .tabs.is-toggle a {\n  color: white;\n}\n\n.hero.is-dark .tabs.is-boxed a:hover,\n.hero.is-dark .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.hero.is-dark .tabs.is-boxed li.is-active a,\n.hero.is-dark .tabs.is-boxed li.is-active a:hover,\n.hero.is-dark .tabs.is-toggle li.is-active a,\n.hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #222324;\n}\n\n.hero.is-dark.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #080a0b 0%, #222324 71%, #2c2e34 100%);\n  background-image: linear-gradient(141deg, #080a0b 0%, #222324 71%, #2c2e34 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-dark .header-toggle span {\n    background: white;\n  }\n\n  .hero.is-dark .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  .hero.is-dark .header-toggle.is-active span {\n    background: white;\n  }\n\n  .hero.is-dark .header-menu {\n    background: #222324;\n  }\n\n  .hero.is-dark .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2);\n  }\n}\n\n.hero.is-primary {\n  background: #1fc8db;\n  color: white;\n}\n\n.hero.is-primary .title {\n  color: white;\n}\n\n.hero.is-primary .title a,\n.hero.is-primary .title strong {\n  color: inherit;\n}\n\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-primary .subtitle strong {\n  color: white;\n}\n\n.hero.is-primary .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n\n.hero.is-primary .header-icon,\n.hero.is-primary .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-primary .header-icon:hover,\n.hero.is-primary .header-icon.is-active,\n.hero.is-primary .header-item > a:not(.button):hover,\n.hero.is-primary .header-item > a:not(.button).is-active {\n  opacity: 1;\n}\n\n.hero.is-primary .tabs a {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-primary .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-primary .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-primary .tabs.is-boxed a,\n.hero.is-primary .tabs.is-toggle a {\n  color: white;\n}\n\n.hero.is-primary .tabs.is-boxed a:hover,\n.hero.is-primary .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.hero.is-primary .tabs.is-boxed li.is-active a,\n.hero.is-primary .tabs.is-boxed li.is-active a:hover,\n.hero.is-primary .tabs.is-toggle li.is-active a,\n.hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #1fc8db;\n}\n\n.hero.is-primary.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #0fb8ad 0%, #1fc8db 71%, #2cb5e8 100%);\n  background-image: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 71%, #2cb5e8 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-primary .header-toggle span {\n    background: white;\n  }\n\n  .hero.is-primary .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  .hero.is-primary .header-toggle.is-active span {\n    background: white;\n  }\n\n  .hero.is-primary .header-menu {\n    background: #1fc8db;\n  }\n\n  .hero.is-primary .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2);\n  }\n}\n\n.hero.is-info {\n  background: #42afe3;\n  color: white;\n}\n\n.hero.is-info .title {\n  color: white;\n}\n\n.hero.is-info .title a,\n.hero.is-info .title strong {\n  color: inherit;\n}\n\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-info .subtitle strong {\n  color: white;\n}\n\n.hero.is-info .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n\n.hero.is-info .header-icon,\n.hero.is-info .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-info .header-icon:hover,\n.hero.is-info .header-icon.is-active,\n.hero.is-info .header-item > a:not(.button):hover,\n.hero.is-info .header-item > a:not(.button).is-active {\n  opacity: 1;\n}\n\n.hero.is-info .tabs a {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-info .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-info .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-info .tabs.is-boxed a,\n.hero.is-info .tabs.is-toggle a {\n  color: white;\n}\n\n.hero.is-info .tabs.is-boxed a:hover,\n.hero.is-info .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.hero.is-info .tabs.is-boxed li.is-active a,\n.hero.is-info .tabs.is-boxed li.is-active a:hover,\n.hero.is-info .tabs.is-toggle li.is-active a,\n.hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #42afe3;\n}\n\n.hero.is-info.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #13bfdf 0%, #42afe3 71%, #53a1eb 100%);\n  background-image: linear-gradient(141deg, #13bfdf 0%, #42afe3 71%, #53a1eb 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-info .header-toggle span {\n    background: white;\n  }\n\n  .hero.is-info .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  .hero.is-info .header-toggle.is-active span {\n    background: white;\n  }\n\n  .hero.is-info .header-menu {\n    background: #42afe3;\n  }\n\n  .hero.is-info .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2);\n  }\n}\n\n.hero.is-success {\n  background: #97cd76;\n  color: white;\n}\n\n.hero.is-success .title {\n  color: white;\n}\n\n.hero.is-success .title a,\n.hero.is-success .title strong {\n  color: inherit;\n}\n\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-success .subtitle strong {\n  color: white;\n}\n\n.hero.is-success .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n\n.hero.is-success .header-icon,\n.hero.is-success .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-success .header-icon:hover,\n.hero.is-success .header-icon.is-active,\n.hero.is-success .header-item > a:not(.button):hover,\n.hero.is-success .header-item > a:not(.button).is-active {\n  opacity: 1;\n}\n\n.hero.is-success .tabs a {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-success .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-success .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-success .tabs.is-boxed a,\n.hero.is-success .tabs.is-toggle a {\n  color: white;\n}\n\n.hero.is-success .tabs.is-boxed a:hover,\n.hero.is-success .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.hero.is-success .tabs.is-boxed li.is-active a,\n.hero.is-success .tabs.is-boxed li.is-active a:hover,\n.hero.is-success .tabs.is-toggle li.is-active a,\n.hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #97cd76;\n}\n\n.hero.is-success.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #8ecb45 0%, #97cd76 71%, #96d885 100%);\n  background-image: linear-gradient(141deg, #8ecb45 0%, #97cd76 71%, #96d885 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-success .header-toggle span {\n    background: white;\n  }\n\n  .hero.is-success .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  .hero.is-success .header-toggle.is-active span {\n    background: white;\n  }\n\n  .hero.is-success .header-menu {\n    background: #97cd76;\n  }\n\n  .hero.is-success .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2);\n  }\n}\n\n.hero.is-warning {\n  background: #fce473;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.hero.is-warning .title a,\n.hero.is-warning .title strong {\n  color: inherit;\n}\n\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.hero.is-warning .header .container {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);\n}\n\n.hero.is-warning .header-icon,\n.hero.is-warning .header-item > a:not(.button) {\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.5;\n}\n\n.hero.is-warning .header-icon:hover,\n.hero.is-warning .header-icon.is-active,\n.hero.is-warning .header-item > a:not(.button):hover,\n.hero.is-warning .header-item > a:not(.button).is-active {\n  opacity: 1;\n}\n\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.5;\n}\n\n.hero.is-warning .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-warning .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-warning .tabs.is-boxed a,\n.hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.hero.is-warning .tabs.is-boxed a:hover,\n.hero.is-warning .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.hero.is-warning .tabs.is-boxed li.is-active a,\n.hero.is-warning .tabs.is-boxed li.is-active a:hover,\n.hero.is-warning .tabs.is-toggle li.is-active a,\n.hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fce473;\n}\n\n.hero.is-warning.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #ffbd3d 0%, #fce473 71%, #fffe8a 100%);\n  background-image: linear-gradient(141deg, #ffbd3d 0%, #fce473 71%, #fffe8a 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-warning .header-toggle span {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  .hero.is-warning .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  .hero.is-warning .header-toggle.is-active span {\n    background: rgba(0, 0, 0, 0.5);\n  }\n\n  .hero.is-warning .header-menu {\n    background: #fce473;\n  }\n\n  .hero.is-warning .header-menu .header-item {\n    border-top-color: rgba(0, 0, 0, 0.2);\n  }\n}\n\n.hero.is-danger {\n  background: #ed6c63;\n  color: white;\n}\n\n.hero.is-danger .title {\n  color: white;\n}\n\n.hero.is-danger .title a,\n.hero.is-danger .title strong {\n  color: inherit;\n}\n\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.hero.is-danger .subtitle strong {\n  color: white;\n}\n\n.hero.is-danger .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n}\n\n.hero.is-danger .header-icon,\n.hero.is-danger .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-danger .header-icon:hover,\n.hero.is-danger .header-icon.is-active,\n.hero.is-danger .header-item > a:not(.button):hover,\n.hero.is-danger .header-item > a:not(.button).is-active {\n  opacity: 1;\n}\n\n.hero.is-danger .tabs a {\n  color: white;\n  opacity: 0.5;\n}\n\n.hero.is-danger .tabs a:hover {\n  opacity: 1;\n}\n\n.hero.is-danger .tabs li.is-active a {\n  opacity: 1;\n}\n\n.hero.is-danger .tabs.is-boxed a,\n.hero.is-danger .tabs.is-toggle a {\n  color: white;\n}\n\n.hero.is-danger .tabs.is-boxed a:hover,\n.hero.is-danger .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.hero.is-danger .tabs.is-boxed li.is-active a,\n.hero.is-danger .tabs.is-boxed li.is-active a:hover,\n.hero.is-danger .tabs.is-toggle li.is-active a,\n.hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #ed6c63;\n}\n\n.hero.is-danger.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #f32a3e 0%, #ed6c63 71%, #f39376 100%);\n  background-image: linear-gradient(141deg, #f32a3e 0%, #ed6c63 71%, #f39376 100%);\n}\n\n@media screen and (max-width: 768px) {\n  .hero.is-danger .header-toggle span {\n    background: white;\n  }\n\n  .hero.is-danger .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1);\n  }\n\n  .hero.is-danger .header-toggle.is-active span {\n    background: white;\n  }\n\n  .hero.is-danger .header-menu {\n    background: #ed6c63;\n  }\n\n  .hero.is-danger .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2);\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .hero.is-fullheight .tabs,\n  .hero.is-large .tabs {\n    font-size: 18px;\n  }\n}\n\n@media screen and (min-width: 769px) {\n  .hero.is-medium .hero-content {\n    padding: 120px 20px;\n  }\n}\n\n@media screen and (min-width: 980px) {\n  .hero.is-medium .hero-content {\n    padding: 120px 0;\n  }\n}\n\n.hero.is-large .tabs a {\n  padding: 10px 15px;\n}\n\n@media screen and (min-width: 769px) {\n  .hero.is-large .hero-content {\n    padding: 240px 20px;\n  }\n}\n\n@media screen and (min-width: 980px) {\n  .hero.is-large .hero-content {\n    padding: 240px 0;\n  }\n}\n\n.hero.is-fullheight {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-height: 100vh;\n}\n\n.hero.is-fullheight .tabs a {\n  padding: 15px 20px;\n}\n\n.hero.is-fullheight .hero-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n}\n\n.hero.is-left {\n  text-align: left;\n}\n\n.hero.is-right {\n  text-align: right;\n}\n\n.section {\n  background: white;\n  padding: 40px 20px;\n}\n\n.section + .section {\n  border-top: 1px solid rgba(211, 214, 219, 0.5);\n}\n\n@media screen and (min-width: 980px) {\n  .section {\n    padding: 40px 0;\n  }\n\n  .section.is-medium {\n    padding: 120px 0;\n  }\n\n  .section.is-large {\n    padding: 240px 0;\n  }\n}\n\n.footer {\n  background: #f5f7fa;\n  padding: 40px 20px 80px;\n}\n\n.footer a {\n  color: #69707a;\n}\n\n.footer a:hover {\n  color: #222324;\n}\n\n.footer a:not(.icon) {\n  border-bottom: 1px solid #d3d6db;\n}\n\n.footer a:not(.icon):hover {\n  border-bottom-color: #1fc8db;\n}\n\n/*# sourceMappingURL=bulma.css.map */\n\n/*\n$grey-darker: #222324\n$grey-dark: #69707a\n$grey: #aeb1b5\n$grey-light: #d3d6db\n$grey-lighter: #f5f7fa\n\n$blue: #42afe3\n$green: #97cd76\n$orange: #f68b39\n$purple: #847bb9\n$red: #ed6c63\n$turquoise: #1fc8db\n$yellow: #fce473*/\n\n.purple {\n  background: #847bb9;\n  color: #fff;\n}\n\n.no-border {\n  border: 0 !important;\n}\n\n.column {\n  border: 1px solid #e5e5e5;\n}\n\n.score {\n  font-size: 4em;\n  display: block;\n  text-align: center;\n  color: #fff;\n  padding: .3em;\n  font-weight: 600;\n}\n\n.player {\n  display: block;\n  background: #fdf6e3;\n  font-size: 1.5em;\n}\n\n.winner {\n  background: #ed6c63;\n}\n\n.loser {\n  background: #42afe3;\n}\n\n.tech {\n  font-size: 5em;\n  font-weight: 600;\n  line-height: 0;\n  margin-top: .75em;\n  text-align: center;\n}\n\n.blog {\n  font-size: 4em;\n  font-weight: 600;\n  text-align: center;\n  display: block;\n  margin-bottom: .25em;\n}\n\n.circle {\n  background: beige;\n  border-radius: 50%;\n}\n\n.hide {\n  display: none;\n}\n\n.mtg-deck {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  background-size: 100% 100%;\n  margin-right: .5em;\n}\n\n.mtg-deck-green {\n  background-image: url(" + __webpack_require__(5) + ");\n}\n\n.mtg-deck-red {\n  background-image: url(" + __webpack_require__(6) + ");\n}\n\n.mtg-deck-black {\n  background-image: url(" + __webpack_require__(7) + ");\n}\n\n.mtg-deck-white {\n  background-image: url(" + __webpack_require__(8) + ");\n}\n\n.mtg-deck-blue {\n  background-image: url(" + __webpack_require__(9) + ");\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2lwZWt0dXJndWwvdGVtcC9wcm9qZWN0cyAyMDE2L21ndC1zY29yZS1ib2FyZC9zcmMvc2Fzcy9tYWluLnNjc3MiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pcGVrdHVyZ3VsL3RlbXAvcHJvamVjdHMgMjAxNi9tZ3Qtc2NvcmUtYm9hcmQvc3JjL3Nhc3MvbWFpbi5zY3NzIiwiL1VzZXJzL2lwZWt0dXJndWwvdGVtcC9wcm9qZWN0cyAyMDE2L21ndC1zY29yZS1ib2FyZC9ub2RlX21vZHVsZXMvYnVsbWEvY3NzL2J1bG1hLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifmJ1bG1hL2Nzcy9idWxtYVwiO1xuXG4vKlxuJGdyZXktZGFya2VyOiAjMjIyMzI0XG4kZ3JleS1kYXJrOiAjNjk3MDdhXG4kZ3JleTogI2FlYjFiNVxuJGdyZXktbGlnaHQ6ICNkM2Q2ZGJcbiRncmV5LWxpZ2h0ZXI6ICNmNWY3ZmFcblxuJGJsdWU6ICM0MmFmZTNcbiRncmVlbjogIzk3Y2Q3NlxuJG9yYW5nZTogI2Y2OGIzOVxuJHB1cnBsZTogIzg0N2JiOVxuJHJlZDogI2VkNmM2M1xuJHR1cnF1b2lzZTogIzFmYzhkYlxuJHllbGxvdzogI2ZjZTQ3MyovXG5cbi5wdXJwbGUge1xuICBiYWNrZ3JvdW5kOiAjODQ3YmI5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm5vLWJvcmRlciB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4uY29sdW1uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTVlNTtcbn1cblxuLnNjb3JlIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAuM2VtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGxheWVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6ICNmZGY2ZTM7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG4ud2lubmVyIHtcbiAgYmFja2dyb3VuZDogI2VkNmM2Mztcbn1cblxuLmxvc2VyIHtcbiAgYmFja2dyb3VuZDogIzQyYWZlMztcbn1cblxuLnRlY2gge1xuICBmb250LXNpemU6IDVlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC43NWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ibG9nIHtcbiAgZm9udC1zaXplOiA0ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XG59XG5cbi5jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiBiZWlnZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tdGctZGVjayB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIG1hcmdpbi1yaWdodDogLjVlbTtcbn1cblxuLm10Zy1kZWNrLWdyZWVuIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9ncmVlbi5wbmcnKTtcbn1cblxuLm10Zy1kZWNrLXJlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvcmVkLnBuZycpO1xufVxuXG4ubXRnLWRlY2stYmxhY2sge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JsYWNrLnBuZycpO1xufVxuXG4ubXRnLWRlY2std2hpdGUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3doaXRlLnBuZycpO1xufVxuXG4ubXRnLWRlY2stYmx1ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvYmx1ZS5wbmcnKTtcbn1cbiIsImh0bWwsIGJvZHksIGJvZHkgZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhYmJyLCBhZGRyZXNzLCBjaXRlLCBjb2RlLCBkZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHNhbXAsIHNtYWxsLCBzdHJvbmcsIHN1Yiwgc3VwLCB2YXIsIGIsIGksIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgYXJ0aWNsZSwgYXNpZGUsIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIG1lbnUsIG5hdiwgc2VjdGlvbiwgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvLCBkZXRhaWxzLCBzdW1tYXJ5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuYXJ0aWNsZSwgYXNpZGUsIGZpZ3VyZSwgZm9vdGVyLCBoZWFkZXIsIG5hdiwgc2VjdGlvbiwgZGV0YWlscywgc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5odG1sIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cbmltZyxcbm9iamVjdCxcbmVtYmVkIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5odG1sIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lO1xufVxuXG5hIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmRlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG5hYmJyW3RpdGxlXSwgZGZuW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgIzAwMDtcbiAgY3Vyc29yOiBoZWxwO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50aCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG50ZCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmhyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46IDFlbSAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbnB1dCwgc2VsZWN0IHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxucHJlIHtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG5zZWxlY3QsIGlucHV0LCB0ZXh0YXJlYSB7XG4gIGZvbnQ6IDk5JSBzYW5zLXNlcmlmO1xufVxuXG50YWJsZSB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udDogMTAwJTtcbn1cblxuc21hbGwge1xuICBmb250LXNpemU6IDg1JTtcbn1cblxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnRkLCB0ZCBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5zdWIsIHN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5wcmUsIGNvZGUsIGtiZCwgc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIHNhbnMtc2VyaWY7XG59XG5cbmxhYmVsLFxuaW5wdXRbdHlwZT1idXR0b25dLFxuaW5wdXRbdHlwZT1zdWJtaXRdLFxuaW5wdXRbdHlwZT1maWxlXSxcbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gIG1hcmdpbjogMDtcbn1cblxuYnV0dG9uLFxuaW5wdXRbdHlwZT1idXR0b25dIHtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbi1hcm91bmQge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluLWFyb3VuZCB7XG4gIGZyb20ge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgfVxufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbmh0bWwuaGFzLW1vZGFsLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5LFxuYnV0dG9uLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cblxuY29kZSxcbnByZSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjNjk3MDdhO1xuICBmb250LXNpemU6IDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyODU3MTQyOTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMWZjOGRiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lIDg2bXMgZWFzZS1vdXQ7XG4gIHRyYW5zaXRpb246IG5vbmUgODZtcyBlYXNlLW91dDtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMjIyMzI0O1xufVxuXG5jb2RlIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgY29sb3I6ICNlZDZjNjM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMXB4IDJweCAycHg7XG59XG5cbmhyIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2QzZDZkYjtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuc3Ryb25nIHtcbiAgY29sb3I6ICMyMjIzMjQ7XG59XG5cbmFydGljbGUsXG5hc2lkZSxcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxucHJlIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgY29sb3I6ICM2OTcwN2E7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG5wcmUgY29kZSB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGNvbG9yOiAjNjk3MDdhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZzogMTZweCAyMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxudGFibGUgdGgge1xuICBjb2xvcjogIzIyMjMyNDtcbn1cblxuLmJsb2NrOm5vdCg6bGFzdC1jaGlsZCksIC5jb250ZW50Om5vdCg6bGFzdC1jaGlsZCksIC50aXRsZTpub3QoOmxhc3QtY2hpbGQpLFxuLnN1YnRpdGxlOm5vdCg6bGFzdC1jaGlsZCksIC5tZXNzYWdlOm5vdCg6bGFzdC1jaGlsZCksIC5ub3RpZmljYXRpb246bm90KDpsYXN0LWNoaWxkKSwgLmhpZ2hsaWdodDpub3QoOmxhc3QtY2hpbGQpLCAubmF2YmFyOm5vdCg6bGFzdC1jaGlsZCksIC50YWJzOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICB9XG4gIC5jb250YWluZXIuaXMtZmx1aWQge1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgfVxufVxuXG4uZmEge1xuICBmb250LXNpemU6IDIxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNvbnRlbnQuaXMtbWVkaXVtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGVudC5pcy1tZWRpdW0gY29kZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnRlbnQuaXMtbGFyZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5jb250ZW50LmlzLWxhcmdlIGNvZGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250ZW50IGgxLFxuLmNvbnRlbnQgaDIsXG4uY29udGVudCBoMyxcbi5jb250ZW50IGg0LFxuLmNvbnRlbnQgaDUsXG4uY29udGVudCBoNiB7XG4gIGNvbG9yOiAjMjIyMzI0O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb250ZW50IGgxOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmNvbnRlbnQgaDI6bm90KDpmaXJzdC1jaGlsZCksXG4uY29udGVudCBoMzpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG59XG5cbi5jb250ZW50IGgzIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmNvbnRlbnQgaDQge1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cblxuLmNvbnRlbnQgaDUge1xuICBmb250LXNpemU6IDEuMTI1ZW07XG59XG5cbi5jb250ZW50IGg2IHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbi5jb250ZW50IHA6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLmNvbnRlbnQgbGkgKyBsaSB7XG4gIG1hcmdpbi10b3A6IDAuMjVlbTtcbn1cblxuLmNvbnRlbnQgb2wge1xuICBsaXN0LXN0eWxlOiBkZWNpbWFsIG91dHNpZGU7XG4gIG1hcmdpbjogMWVtIDJlbTtcbn1cblxuLmNvbnRlbnQgdWwge1xuICBsaXN0LXN0eWxlOiBkaXNjIG91dHNpZGU7XG4gIG1hcmdpbjogMWVtIDJlbTtcbn1cblxuLmNvbnRlbnQgdWwgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcbiAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbi5jb250ZW50IHVsIHVsIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBzcXVhcmU7XG59XG5cbi5jb250ZW50IGJsb2NrcXVvdGUge1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNkM2Q2ZGI7XG4gIHBhZGRpbmc6IDEuNWVtO1xufVxuXG4uY29udGVudCBibG9ja3F1b3RlOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5oaWdobGlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmNmUzO1xuICBjb2xvcjogIzU4NmU3NTtcbn1cblxuLmhpZ2hsaWdodCAuYyB7XG4gIGNvbG9yOiAjOTNhMWExO1xufVxuXG4uaGlnaGxpZ2h0IC5lcnIsXG4uaGlnaGxpZ2h0IC5nIHtcbiAgY29sb3I6ICM1ODZlNzU7XG59XG5cbi5oaWdobGlnaHQgLmsge1xuICBjb2xvcjogIzg1OTkwMDtcbn1cblxuLmhpZ2hsaWdodCAubCxcbi5oaWdobGlnaHQgLm4ge1xuICBjb2xvcjogIzU4NmU3NTtcbn1cblxuLmhpZ2hsaWdodCAubyB7XG4gIGNvbG9yOiAjODU5OTAwO1xufVxuXG4uaGlnaGxpZ2h0IC54IHtcbiAgY29sb3I6ICNjYjRiMTY7XG59XG5cbi5oaWdobGlnaHQgLnAge1xuICBjb2xvcjogIzU4NmU3NTtcbn1cblxuLmhpZ2hsaWdodCAuY20ge1xuICBjb2xvcjogIzkzYTFhMTtcbn1cblxuLmhpZ2hsaWdodCAuY3Age1xuICBjb2xvcjogIzg1OTkwMDtcbn1cblxuLmhpZ2hsaWdodCAuYzEge1xuICBjb2xvcjogIzkzYTFhMTtcbn1cblxuLmhpZ2hsaWdodCAuY3Mge1xuICBjb2xvcjogIzg1OTkwMDtcbn1cblxuLmhpZ2hsaWdodCAuZ2Qge1xuICBjb2xvcjogIzJhYTE5ODtcbn1cblxuLmhpZ2hsaWdodCAuZ2Uge1xuICBjb2xvcjogIzU4NmU3NTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaGlnaGxpZ2h0IC5nciB7XG4gIGNvbG9yOiAjZGMzMjJmO1xufVxuXG4uaGlnaGxpZ2h0IC5naCB7XG4gIGNvbG9yOiAjY2I0YjE2O1xufVxuXG4uaGlnaGxpZ2h0IC5naSB7XG4gIGNvbG9yOiAjODU5OTAwO1xufVxuXG4uaGlnaGxpZ2h0IC5nbyxcbi5oaWdobGlnaHQgLmdwIHtcbiAgY29sb3I6ICM1ODZlNzU7XG59XG5cbi5oaWdobGlnaHQgLmdzIHtcbiAgY29sb3I6ICM1ODZlNzU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGlnaGxpZ2h0IC5ndSB7XG4gIGNvbG9yOiAjY2I0YjE2O1xufVxuXG4uaGlnaGxpZ2h0IC5ndCB7XG4gIGNvbG9yOiAjNTg2ZTc1O1xufVxuXG4uaGlnaGxpZ2h0IC5rYyB7XG4gIGNvbG9yOiAjY2I0YjE2O1xufVxuXG4uaGlnaGxpZ2h0IC5rZCB7XG4gIGNvbG9yOiAjMjY4YmQyO1xufVxuXG4uaGlnaGxpZ2h0IC5rbixcbi5oaWdobGlnaHQgLmtwIHtcbiAgY29sb3I6ICM4NTk5MDA7XG59XG5cbi5oaWdobGlnaHQgLmtyIHtcbiAgY29sb3I6ICMyNjhiZDI7XG59XG5cbi5oaWdobGlnaHQgLmt0IHtcbiAgY29sb3I6ICNkYzMyMmY7XG59XG5cbi5oaWdobGlnaHQgLmxkIHtcbiAgY29sb3I6ICM1ODZlNzU7XG59XG5cbi5oaWdobGlnaHQgLm0sXG4uaGlnaGxpZ2h0IC5zIHtcbiAgY29sb3I6ICMyYWExOTg7XG59XG5cbi5oaWdobGlnaHQgLm5hIHtcbiAgY29sb3I6ICNCNTg5MDA7XG59XG5cbi5oaWdobGlnaHQgLm5iIHtcbiAgY29sb3I6ICM1ODZlNzU7XG59XG5cbi5oaWdobGlnaHQgLm5jIHtcbiAgY29sb3I6ICMyNjhiZDI7XG59XG5cbi5oaWdobGlnaHQgLm5vIHtcbiAgY29sb3I6ICNjYjRiMTY7XG59XG5cbi5oaWdobGlnaHQgLm5kIHtcbiAgY29sb3I6ICMyNjhiZDI7XG59XG5cbi5oaWdobGlnaHQgLm5pLFxuLmhpZ2hsaWdodCAubmUge1xuICBjb2xvcjogI2NiNGIxNjtcbn1cblxuLmhpZ2hsaWdodCAubmYge1xuICBjb2xvcjogIzI2OGJkMjtcbn1cblxuLmhpZ2hsaWdodCAubmwsXG4uaGlnaGxpZ2h0IC5ubixcbi5oaWdobGlnaHQgLm54LFxuLmhpZ2hsaWdodCAucHkge1xuICBjb2xvcjogIzU4NmU3NTtcbn1cblxuLmhpZ2hsaWdodCAubnQsXG4uaGlnaGxpZ2h0IC5udiB7XG4gIGNvbG9yOiAjMjY4YmQyO1xufVxuXG4uaGlnaGxpZ2h0IC5vdyB7XG4gIGNvbG9yOiAjODU5OTAwO1xufVxuXG4uaGlnaGxpZ2h0IC53IHtcbiAgY29sb3I6ICM1ODZlNzU7XG59XG5cbi5oaWdobGlnaHQgLm1mLFxuLmhpZ2hsaWdodCAubWgsXG4uaGlnaGxpZ2h0IC5taSxcbi5oaWdobGlnaHQgLm1vIHtcbiAgY29sb3I6ICMyYWExOTg7XG59XG5cbi5oaWdobGlnaHQgLnNiIHtcbiAgY29sb3I6ICM5M2ExYTE7XG59XG5cbi5oaWdobGlnaHQgLnNjIHtcbiAgY29sb3I6ICMyYWExOTg7XG59XG5cbi5oaWdobGlnaHQgLnNkIHtcbiAgY29sb3I6ICM1ODZlNzU7XG59XG5cbi5oaWdobGlnaHQgLnMyIHtcbiAgY29sb3I6ICMyYWExOTg7XG59XG5cbi5oaWdobGlnaHQgLnNlIHtcbiAgY29sb3I6ICNjYjRiMTY7XG59XG5cbi5oaWdobGlnaHQgLnNoIHtcbiAgY29sb3I6ICM1ODZlNzU7XG59XG5cbi5oaWdobGlnaHQgLnNpLFxuLmhpZ2hsaWdodCAuc3gge1xuICBjb2xvcjogIzJhYTE5ODtcbn1cblxuLmhpZ2hsaWdodCAuc3Ige1xuICBjb2xvcjogI2RjMzIyZjtcbn1cblxuLmhpZ2hsaWdodCAuczEsXG4uaGlnaGxpZ2h0IC5zcyB7XG4gIGNvbG9yOiAjMmFhMTk4O1xufVxuXG4uaGlnaGxpZ2h0IC5icCxcbi5oaWdobGlnaHQgLnZjLFxuLmhpZ2hsaWdodCAudmcsXG4uaGlnaGxpZ2h0IC52aSB7XG4gIGNvbG9yOiAjMjY4YmQyO1xufVxuXG4uaGlnaGxpZ2h0IC5pbCB7XG4gIGNvbG9yOiAjMmFhMTk4O1xufVxuXG4uaXMtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlzLWlubGluZSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmlzLWZsZXgge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlzLWNsZWFyZml4OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmlzLXB1bGxlZC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pcy1wdWxsZWQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5pcy1vdmVybGF5IHtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5pcy1mdWxsd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlzLXRleHQtY2VudGVyZWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pcy10ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaXMtdGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaXMtaGlkZGVuLW1vYmlsZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5pcy1oaWRkZW4tdGFibGV0IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTc5cHgpIHtcbiAgLmlzLWhpZGRlbi10b3VjaCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MHB4KSB7XG4gIC5pcy1oaWRkZW4tZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5pcy1kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uaXMtbWFyZ2lubGVzcyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4uaXMtdW5zZWxlY3RhYmxlIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaW5wdXQsIC50ZXh0YXJlYSB7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkYjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzIyMjMyNDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dDpob3ZlciwgLnRleHRhcmVhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjYWViMWI1O1xufVxuXG4uaW5wdXQ6YWN0aXZlLCAudGV4dGFyZWE6YWN0aXZlLCAuaW5wdXQ6Zm9jdXMsIC50ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzFmYzhkYjtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0W2Rpc2FibGVkXSwgW2Rpc2FibGVkXS50ZXh0YXJlYSwgLmlucHV0W2Rpc2FibGVkXTpob3ZlciwgW2Rpc2FibGVkXS50ZXh0YXJlYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGJvcmRlci1jb2xvcjogI2QzZDZkYjtcbn1cblxuLmlucHV0W2Rpc2FibGVkXTo6LW1vei1wbGFjZWhvbGRlciwgW2Rpc2FibGVkXS50ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlciwgLmlucHV0W2Rpc2FibGVkXTpob3Zlcjo6LW1vei1wbGFjZWhvbGRlciwgW2Rpc2FibGVkXS50ZXh0YXJlYTpob3Zlcjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDM0LCAzNSwgMzYsIDAuMyk7XG59XG5cbi5pbnB1dFtkaXNhYmxlZF06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIFtkaXNhYmxlZF0udGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5pbnB1dFtkaXNhYmxlZF06aG92ZXI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIFtkaXNhYmxlZF0udGV4dGFyZWE6aG92ZXI6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgzNCwgMzUsIDM2LCAwLjMpO1xufVxuXG4uaW5wdXRbZGlzYWJsZWRdOi1tb3otcGxhY2Vob2xkZXIsIFtkaXNhYmxlZF0udGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciwgLmlucHV0W2Rpc2FibGVkXTpob3ZlcjotbW96LXBsYWNlaG9sZGVyLCBbZGlzYWJsZWRdLnRleHRhcmVhOmhvdmVyOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgzNCwgMzUsIDM2LCAwLjMpO1xufVxuXG4uaW5wdXRbZGlzYWJsZWRdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgW2Rpc2FibGVkXS50ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIC5pbnB1dFtkaXNhYmxlZF06aG92ZXI6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCBbZGlzYWJsZWRdLnRleHRhcmVhOmhvdmVyOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDM0LCAzNSwgMzYsIDAuMyk7XG59XG5cbi5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLCBbdHlwZT1cInNlYXJjaFwiXS50ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xufVxuXG4uaW5wdXQuaXMtZmxhdCwgLmlzLWZsYXQudGV4dGFyZWEge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG5cbi5pbnB1dC5pcy1zbWFsbCwgLmlzLXNtYWxsLnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG59XG5cbi5pbnB1dC5pcy1zbWFsbC5pcy1mbGF0LCAuaXMtc21hbGwuaXMtZmxhdC50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG59XG5cbi5pbnB1dC5pcy1tZWRpdW0sIC5pcy1tZWRpdW0udGV4dGFyZWEge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDNweCAxMHB4O1xufVxuXG4uaW5wdXQuaXMtbWVkaXVtLmlzLWZsYXQsIC5pcy1tZWRpdW0uaXMtZmxhdC50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xufVxuXG4uaW5wdXQuaXMtbGFyZ2UsIC5pcy1sYXJnZS50ZXh0YXJlYSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogM3B4IDEycHg7XG59XG5cbi5pbnB1dC5pcy1sYXJnZS5pcy1mbGF0LCAuaXMtbGFyZ2UuaXMtZmxhdC50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xufVxuXG4uaW5wdXQuaXMtZnVsbHdpZHRoLCAuaXMtZnVsbHdpZHRoLnRleHRhcmVhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5wdXQuaXMtaW5saW5lLCAuaXMtaW5saW5lLnRleHRhcmVhIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnRleHRhcmVhIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuLmNoZWNrYm94LCAubWVudS1jaGVja2JveCwgLnJhZGlvIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmNoZWNrYm94IGlucHV0LCAubWVudS1jaGVja2JveCBpbnB1dCwgLnJhZGlvIGlucHV0IHtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmRiO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGNvbG9yOiAjMjIyMzI0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTRweDtcbiAgbGVmdDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFweDtcbiAgd2lkdGg6IDE0cHg7XG59XG5cbi5jaGVja2JveCBpbnB1dDpob3ZlciwgLm1lbnUtY2hlY2tib3ggaW5wdXQ6aG92ZXIsIC5yYWRpbyBpbnB1dDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2FlYjFiNTtcbn1cblxuLmNoZWNrYm94IGlucHV0OmFjdGl2ZSwgLm1lbnUtY2hlY2tib3ggaW5wdXQ6YWN0aXZlLCAucmFkaW8gaW5wdXQ6YWN0aXZlLCAuY2hlY2tib3ggaW5wdXQ6Zm9jdXMsIC5tZW51LWNoZWNrYm94IGlucHV0OmZvY3VzLCAucmFkaW8gaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMxZmM4ZGI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jaGVja2JveCBpbnB1dFtkaXNhYmxlZF0sIC5tZW51LWNoZWNrYm94IGlucHV0W2Rpc2FibGVkXSwgLnJhZGlvIGlucHV0W2Rpc2FibGVkXSwgLmNoZWNrYm94IGlucHV0W2Rpc2FibGVkXTpob3ZlciwgLm1lbnUtY2hlY2tib3ggaW5wdXRbZGlzYWJsZWRdOmhvdmVyLCAucmFkaW8gaW5wdXRbZGlzYWJsZWRdOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgYm9yZGVyLWNvbG9yOiAjZDNkNmRiO1xufVxuXG4uY2hlY2tib3ggaW5wdXRbZGlzYWJsZWRdOjotbW96LXBsYWNlaG9sZGVyLCAubWVudS1jaGVja2JveCBpbnB1dFtkaXNhYmxlZF06Oi1tb3otcGxhY2Vob2xkZXIsIC5yYWRpbyBpbnB1dFtkaXNhYmxlZF06Oi1tb3otcGxhY2Vob2xkZXIsIC5jaGVja2JveCBpbnB1dFtkaXNhYmxlZF06aG92ZXI6Oi1tb3otcGxhY2Vob2xkZXIsIC5tZW51LWNoZWNrYm94IGlucHV0W2Rpc2FibGVkXTpob3Zlcjo6LW1vei1wbGFjZWhvbGRlciwgLnJhZGlvIGlucHV0W2Rpc2FibGVkXTpob3Zlcjo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDM0LCAzNSwgMzYsIDAuMyk7XG59XG5cbi5jaGVja2JveCBpbnB1dFtkaXNhYmxlZF06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5tZW51LWNoZWNrYm94IGlucHV0W2Rpc2FibGVkXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgLnJhZGlvIGlucHV0W2Rpc2FibGVkXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgLmNoZWNrYm94IGlucHV0W2Rpc2FibGVkXTpob3Zlcjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwgLm1lbnUtY2hlY2tib3ggaW5wdXRbZGlzYWJsZWRdOmhvdmVyOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCAucmFkaW8gaW5wdXRbZGlzYWJsZWRdOmhvdmVyOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMzQsIDM1LCAzNiwgMC4zKTtcbn1cblxuLmNoZWNrYm94IGlucHV0W2Rpc2FibGVkXTotbW96LXBsYWNlaG9sZGVyLCAubWVudS1jaGVja2JveCBpbnB1dFtkaXNhYmxlZF06LW1vei1wbGFjZWhvbGRlciwgLnJhZGlvIGlucHV0W2Rpc2FibGVkXTotbW96LXBsYWNlaG9sZGVyLCAuY2hlY2tib3ggaW5wdXRbZGlzYWJsZWRdOmhvdmVyOi1tb3otcGxhY2Vob2xkZXIsIC5tZW51LWNoZWNrYm94IGlucHV0W2Rpc2FibGVkXTpob3ZlcjotbW96LXBsYWNlaG9sZGVyLCAucmFkaW8gaW5wdXRbZGlzYWJsZWRdOmhvdmVyOi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgzNCwgMzUsIDM2LCAwLjMpO1xufVxuXG4uY2hlY2tib3ggaW5wdXRbZGlzYWJsZWRdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgLm1lbnUtY2hlY2tib3ggaW5wdXRbZGlzYWJsZWRdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgLnJhZGlvIGlucHV0W2Rpc2FibGVkXTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIC5jaGVja2JveCBpbnB1dFtkaXNhYmxlZF06aG92ZXI6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAubWVudS1jaGVja2JveCBpbnB1dFtkaXNhYmxlZF06aG92ZXI6LW1zLWlucHV0LXBsYWNlaG9sZGVyLCAucmFkaW8gaW5wdXRbZGlzYWJsZWRdOmhvdmVyOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDM0LCAzNSwgMzYsIDAuMyk7XG59XG5cbi5jaGVja2JveCBpbnB1dDphZnRlciwgLm1lbnUtY2hlY2tib3ggaW5wdXQ6YWZ0ZXIsIC5yYWRpbyBpbnB1dDphZnRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA3cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDRweDtcbiAgbGVmdDogM3B4O1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMSk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKTtcbn1cblxuLmNoZWNrYm94IGlucHV0OmNoZWNrZWQsIC5tZW51LWNoZWNrYm94IGlucHV0OmNoZWNrZWQsIC5yYWRpbyBpbnB1dDpjaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzFmYzhkYjtcbiAgYm9yZGVyLWNvbG9yOiAjMWZjOGRiO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZDphZnRlciwgLm1lbnUtY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZDphZnRlciwgLnJhZGlvIGlucHV0OmNoZWNrZWQ6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2hlY2tib3g6aG92ZXIsIC5tZW51LWNoZWNrYm94OmhvdmVyLCAucmFkaW86aG92ZXIge1xuICBjb2xvcjogIzIyMjMyNDtcbn1cblxuLmNoZWNrYm94OmhvdmVyIGlucHV0LCAubWVudS1jaGVja2JveDpob3ZlciBpbnB1dCwgLnJhZGlvOmhvdmVyIGlucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjYWViMWI1O1xufVxuXG4uY2hlY2tib3g6aG92ZXIgaW5wdXQ6Y2hlY2tlZCwgLm1lbnUtY2hlY2tib3g6aG92ZXIgaW5wdXQ6Y2hlY2tlZCwgLnJhZGlvOmhvdmVyIGlucHV0OmNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMxZmM4ZGI7XG59XG5cbi5pcy1kaXNhYmxlZC5jaGVja2JveCwgLmlzLWRpc2FibGVkLm1lbnUtY2hlY2tib3gsIC5pcy1kaXNhYmxlZC5yYWRpbywgLmlzLWRpc2FibGVkLmNoZWNrYm94OmhvdmVyLCAuaXMtZGlzYWJsZWQubWVudS1jaGVja2JveDpob3ZlciwgLmlzLWRpc2FibGVkLnJhZGlvOmhvdmVyIHtcbiAgY29sb3I6ICNhZWIxYjU7XG59XG5cbi5yYWRpbyArIC5yYWRpbyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucmFkaW8gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5yYWRpbyBpbnB1dDphZnRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbGVmdDogNHB4O1xuICB0b3A6IDRweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICB3aWR0aDogNHB4O1xufVxuXG4uc2VsZWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnNlbGVjdCBzZWxlY3Qge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICMyMjIzMjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDM2cHg7XG59XG5cbi5zZWxlY3Qgc2VsZWN0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjYWViMWI1O1xufVxuXG4uc2VsZWN0IHNlbGVjdDphY3RpdmUsIC5zZWxlY3Qgc2VsZWN0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMWZjOGRiO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF0sIC5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGJvcmRlci1jb2xvcjogI2QzZDZkYjtcbn1cblxuLnNlbGVjdCBzZWxlY3RbZGlzYWJsZWRdOjotbW96LXBsYWNlaG9sZGVyLCAuc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF06aG92ZXI6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgzNCwgMzUsIDM2LCAwLjMpO1xufVxuXG4uc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTpob3Zlcjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDM0LCAzNSwgMzYsIDAuMyk7XG59XG5cbi5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTotbW96LXBsYWNlaG9sZGVyLCAuc2VsZWN0IHNlbGVjdFtkaXNhYmxlZF06aG92ZXI6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDM0LCAzNSwgMzYsIDAuMyk7XG59XG5cbi5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIC5zZWxlY3Qgc2VsZWN0W2Rpc2FibGVkXTpob3ZlcjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgzNCwgMzUsIDM2LCAwLjMpO1xufVxuXG4uc2VsZWN0IHNlbGVjdDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2FlYjFiNTtcbn1cblxuLnNlbGVjdCBzZWxlY3Q6Om1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zZWxlY3Q6YWZ0ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWZjOGRiO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA3cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB3aWR0aDogN3B4O1xuICBtYXJnaW4tdG9wOiAtNnB4O1xuICByaWdodDogMTZweDtcbiAgdG9wOiA1MCU7XG59XG5cbi5zZWxlY3Q6aG92ZXI6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6ICMyMjIzMjQ7XG59XG5cbi5jb250cm9sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY29udHJvbC5pcy1sb2FkaW5nOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiA4cHg7XG4gIHRvcDogOHB4O1xufVxuXG4uY29udHJvbDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRyb2wuaGFzLWljb24gPiAuZmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMjBweDtcbiAgY29sb3I6ICNhZWIxYjU7XG4gIGxlZnQ6IDZweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIHotaW5kZXg6IDQ7XG59XG5cbi5jb250cm9sLmhhcy1pY29uIC5pbnB1dCwgLmNvbnRyb2wuaGFzLWljb24gLnRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuXG4uY29udHJvbC5oYXMtaWNvbiAuaW5wdXQ6Zm9jdXMgKyAuZmEsIC5jb250cm9sLmhhcy1pY29uIC50ZXh0YXJlYTpmb2N1cyArIC5mYSB7XG4gIGNvbG9yOiAjMWZjOGRiO1xufVxuXG4uY29udHJvbC5pcy1ob3Jpem9udGFsIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250cm9sLmlzLWhvcml6b250YWwgPiAuYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCksXG4uY29udHJvbC5pcy1ob3Jpem9udGFsID4gLmlucHV0Om5vdCg6bGFzdC1jaGlsZCksXG4uY29udHJvbC5pcy1ob3Jpem9udGFsID4gLnRleHRhcmVhOm5vdCg6bGFzdC1jaGlsZCksXG4uY29udHJvbC5pcy1ob3Jpem9udGFsID4gLnNlbGVjdDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udHJvbC5pcy1ob3Jpem9udGFsID4gLmlucHV0LCAuY29udHJvbC5pcy1ob3Jpem9udGFsID4gLnRleHRhcmVhIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbn1cblxuLmNvbnRyb2wuaXMtZ3JvdXBlZCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29udHJvbC5pcy1ncm91cGVkIC5pbnB1dCwgLmNvbnRyb2wuaXMtZ3JvdXBlZCAudGV4dGFyZWEsXG4uY29udHJvbC5pcy1ncm91cGVkIC5idXR0b24sXG4uY29udHJvbC5pcy1ncm91cGVkIC5zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tcmlnaHQ6IC0xcHg7XG59XG5cbi5jb250cm9sLmlzLWdyb3VwZWQgLmlucHV0OmhvdmVyLCAuY29udHJvbC5pcy1ncm91cGVkIC50ZXh0YXJlYTpob3Zlcixcbi5jb250cm9sLmlzLWdyb3VwZWQgLmJ1dHRvbjpob3Zlcixcbi5jb250cm9sLmlzLWdyb3VwZWQgLnNlbGVjdDpob3ZlciB7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jb250cm9sLmlzLWdyb3VwZWQgLmlucHV0OmFjdGl2ZSwgLmNvbnRyb2wuaXMtZ3JvdXBlZCAudGV4dGFyZWE6YWN0aXZlLCAuY29udHJvbC5pcy1ncm91cGVkIC5pbnB1dDpmb2N1cywgLmNvbnRyb2wuaXMtZ3JvdXBlZCAudGV4dGFyZWE6Zm9jdXMsXG4uY29udHJvbC5pcy1ncm91cGVkIC5idXR0b246YWN0aXZlLFxuLmNvbnRyb2wuaXMtZ3JvdXBlZCAuYnV0dG9uOmZvY3VzLFxuLmNvbnRyb2wuaXMtZ3JvdXBlZCAuc2VsZWN0OmFjdGl2ZSxcbi5jb250cm9sLmlzLWdyb3VwZWQgLnNlbGVjdDpmb2N1cyB7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5jb250cm9sLmlzLWdyb3VwZWQgLmlucHV0OmZpcnN0LWNoaWxkLCAuY29udHJvbC5pcy1ncm91cGVkIC50ZXh0YXJlYTpmaXJzdC1jaGlsZCxcbi5jb250cm9sLmlzLWdyb3VwZWQgLmJ1dHRvbjpmaXJzdC1jaGlsZCxcbi5jb250cm9sLmlzLWdyb3VwZWQgLnNlbGVjdDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAwIDAgM3B4O1xufVxuXG4uY29udHJvbC5pcy1ncm91cGVkIC5pbnB1dDpmaXJzdC1jaGlsZCBzZWxlY3QsIC5jb250cm9sLmlzLWdyb3VwZWQgLnRleHRhcmVhOmZpcnN0LWNoaWxkIHNlbGVjdCxcbi5jb250cm9sLmlzLWdyb3VwZWQgLmJ1dHRvbjpmaXJzdC1jaGlsZCBzZWxlY3QsXG4uY29udHJvbC5pcy1ncm91cGVkIC5zZWxlY3Q6Zmlyc3QtY2hpbGQgc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG59XG5cbi5jb250cm9sLmlzLWdyb3VwZWQgLmlucHV0Omxhc3QtY2hpbGQsIC5jb250cm9sLmlzLWdyb3VwZWQgLnRleHRhcmVhOmxhc3QtY2hpbGQsXG4uY29udHJvbC5pcy1ncm91cGVkIC5idXR0b246bGFzdC1jaGlsZCxcbi5jb250cm9sLmlzLWdyb3VwZWQgLnNlbGVjdDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogMCAzcHggM3B4IDA7XG59XG5cbi5jb250cm9sLmlzLWdyb3VwZWQuaXMtY2VudGVyZWQge1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b24ge1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6ICMyMjIzMjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2FlYjFiNTtcbn1cblxuLmJ1dHRvbjphY3RpdmUsIC5idXR0b246Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMxZmM4ZGI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdLCAuYnV0dG9uW2Rpc2FibGVkXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGJvcmRlci1jb2xvcjogI2QzZDZkYjtcbn1cblxuLmJ1dHRvbltkaXNhYmxlZF06Oi1tb3otcGxhY2Vob2xkZXIsIC5idXR0b25bZGlzYWJsZWRdOmhvdmVyOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMzQsIDM1LCAzNiwgMC4zKTtcbn1cblxuLmJ1dHRvbltkaXNhYmxlZF06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsIC5idXR0b25bZGlzYWJsZWRdOmhvdmVyOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMzQsIDM1LCAzNiwgMC4zKTtcbn1cblxuLmJ1dHRvbltkaXNhYmxlZF06LW1vei1wbGFjZWhvbGRlciwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXI6LW1vei1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDM0LCAzNSwgMzYsIDAuMyk7XG59XG5cbi5idXR0b25bZGlzYWJsZWRdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwgLmJ1dHRvbltkaXNhYmxlZF06aG92ZXI6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMzQsIDM1LCAzNiwgMC4zKTtcbn1cblxuLmJ1dHRvbiBzdHJvbmcge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmJ1dHRvbiBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5idXR0b24gLmZhIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbjogMCAtMnB4O1xuICB3aWR0aDogMjRweDtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiAjMjIyMzI0O1xufVxuXG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5idXR0b24uaXMtZGFyayB7XG4gIGJhY2tncm91bmQ6ICMyMjIzMjQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi5pcy1kYXJrOmhvdmVyLCAuYnV0dG9uLmlzLWRhcms6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjMDkwYTBhO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24uaXMtZGFyazphY3RpdmUge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9uLmlzLWRhcmsuaXMtb3V0bGluZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjIyMzI0O1xuICBjb2xvcjogIzIyMjMyNDtcbn1cblxuLmJ1dHRvbi5pcy1kYXJrLmlzLW91dGxpbmVkOmhvdmVyLCAuYnV0dG9uLmlzLWRhcmsuaXMtb3V0bGluZWQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwOTBhMGE7XG4gIGNvbG9yOiAjMDkwYTBhO1xufVxuXG4uYnV0dG9uLmlzLWRhcmsuaXMtaW52ZXJ0ZWQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMyMjIzMjQ7XG59XG5cbi5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbi5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24uaXMtZGFyay5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5idXR0b24uaXMtZGFyay5pcy1sb2FkaW5nOmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZSB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmlzLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMWZjOGRiO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24uaXMtcHJpbWFyeTpob3ZlciwgLmJ1dHRvbi5pcy1wcmltYXJ5OmZvY3VzIHtcbiAgYmFja2dyb3VuZDogIzE5OWZhZTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uLmlzLXByaW1hcnk6YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ1dHRvbi5pcy1wcmltYXJ5LmlzLW91dGxpbmVkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogIzFmYzhkYjtcbiAgY29sb3I6ICMxZmM4ZGI7XG59XG5cbi5idXR0b24uaXMtcHJpbWFyeS5pcy1vdXRsaW5lZDpob3ZlciwgLmJ1dHRvbi5pcy1wcmltYXJ5LmlzLW91dGxpbmVkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTk5ZmFlO1xuICBjb2xvcjogIzE5OWZhZTtcbn1cblxuLmJ1dHRvbi5pcy1wcmltYXJ5LmlzLWludmVydGVkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiAjMWZjOGRiO1xufVxuXG4uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG4uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uLmlzLXByaW1hcnkuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uYnV0dG9uLmlzLXByaW1hcnkuaXMtbG9hZGluZzphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgd2hpdGUgd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5pcy1pbmZvIHtcbiAgYmFja2dyb3VuZDogIzQyYWZlMztcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uLmlzLWluZm86aG92ZXIsIC5idXR0b24uaXMtaW5mbzpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICMxZjk5ZDM7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi5pcy1pbmZvOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idXR0b24uaXMtaW5mby5pcy1vdXRsaW5lZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICM0MmFmZTM7XG4gIGNvbG9yOiAjNDJhZmUzO1xufVxuXG4uYnV0dG9uLmlzLWluZm8uaXMtb3V0bGluZWQ6aG92ZXIsIC5idXR0b24uaXMtaW5mby5pcy1vdXRsaW5lZDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzFmOTlkMztcbiAgY29sb3I6ICMxZjk5ZDM7XG59XG5cbi5idXR0b24uaXMtaW5mby5pcy1pbnZlcnRlZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzQyYWZlMztcbn1cblxuLmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuLmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkLmlzLW91dGxpbmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi5pcy1pbmZvLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmJ1dHRvbi5pcy1pbmZvLmlzLWxvYWRpbmc6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24uaXMtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICM5N2NkNzY7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi5pcy1zdWNjZXNzOmhvdmVyLCAuYnV0dG9uLmlzLXN1Y2Nlc3M6Zm9jdXMge1xuICBiYWNrZ3JvdW5kOiAjN2JiZjUxO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24uaXMtc3VjY2VzczphY3RpdmUge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtb3V0bGluZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjOTdjZDc2O1xuICBjb2xvcjogIzk3Y2Q3Njtcbn1cblxuLmJ1dHRvbi5pcy1zdWNjZXNzLmlzLW91dGxpbmVkOmhvdmVyLCAuYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtb3V0bGluZWQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM3YmJmNTE7XG4gIGNvbG9yOiAjN2JiZjUxO1xufVxuXG4uYnV0dG9uLmlzLXN1Y2Nlc3MuaXMtaW52ZXJ0ZWQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM5N2NkNzY7XG59XG5cbi5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG5cbi5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24uaXMtc3VjY2Vzcy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5idXR0b24uaXMtc3VjY2Vzcy5pcy1sb2FkaW5nOmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB3aGl0ZSB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLmlzLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjZmNlNDczO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYnV0dG9uLmlzLXdhcm5pbmc6aG92ZXIsIC5idXR0b24uaXMtd2FybmluZzpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNmYmRhNDE7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5idXR0b24uaXMtd2FybmluZzphY3RpdmUge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9uLmlzLXdhcm5pbmcuaXMtb3V0bGluZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmNlNDczO1xuICBjb2xvcjogI2ZjZTQ3Mztcbn1cblxuLmJ1dHRvbi5pcy13YXJuaW5nLmlzLW91dGxpbmVkOmhvdmVyLCAuYnV0dG9uLmlzLXdhcm5pbmcuaXMtb3V0bGluZWQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNmYmRhNDE7XG4gIGNvbG9yOiAjZmJkYTQxO1xufVxuXG4uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiAjZmNlNDczO1xufVxuXG4uYnV0dG9uLmlzLXdhcm5pbmcuaXMtaW52ZXJ0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5idXR0b24uaXMtd2FybmluZy5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmJ1dHRvbi5pcy13YXJuaW5nLmlzLWludmVydGVkLmlzLW91dGxpbmVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLmJ1dHRvbi5pcy13YXJuaW5nLmlzLWxvYWRpbmc6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwgMCwgMCwgMC41KSByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5pcy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZWQ2YzYzO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24uaXMtZGFuZ2VyOmhvdmVyLCAuYnV0dG9uLmlzLWRhbmdlcjpmb2N1cyB7XG4gIGJhY2tncm91bmQ6ICNlODQxMzU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi5pcy1kYW5nZXI6YWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjZWQ2YzYzO1xuICBjb2xvcjogI2VkNmM2Mztcbn1cblxuLmJ1dHRvbi5pcy1kYW5nZXIuaXMtb3V0bGluZWQ6aG92ZXIsIC5idXR0b24uaXMtZGFuZ2VyLmlzLW91dGxpbmVkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTg0MTM1O1xuICBjb2xvcjogI2U4NDEzNTtcbn1cblxuLmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICNlZDZjNjM7XG59XG5cbi5idXR0b24uaXMtZGFuZ2VyLmlzLWludmVydGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuLmJ1dHRvbi5pcy1kYW5nZXIuaXMtaW52ZXJ0ZWQuaXMtb3V0bGluZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnV0dG9uLmlzLWRhbmdlci5pcy1pbnZlcnRlZC5pcy1vdXRsaW5lZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5idXR0b24uaXMtZGFuZ2VyLmlzLWxvYWRpbmc6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHdoaXRlIHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24uaXMtc21hbGwge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZzogM3B4IDZweDtcbn1cblxuLmJ1dHRvbi5pcy1tZWRpdW0ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogN3B4IDE0cHg7XG59XG5cbi5idXR0b24uaXMtbGFyZ2Uge1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMTFweCAyMHB4O1xufVxuXG4uYnV0dG9uLmlzLWZ1bGx3aWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbi5pcy1mbGV4aWJsZSB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJ1dHRvbi5pcy1sb2FkaW5nIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmJ1dHRvbi5pcy1sb2FkaW5nOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24uaXMtZGlzYWJsZWQsIC5idXR0b25bZGlzYWJsZWRdIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmJ1dHRvbiBzbWFsbCB7XG4gICAgY29sb3I6ICM2OTcwN2E7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnRpdGxlLFxuLnN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRpdGxlIGE6aG92ZXIsXG4uc3VidGl0bGUgYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICMyMjIzMjQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi50aXRsZSBzdHJvbmcge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLnRpdGxlIGNvZGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLnRpdGxlICsgLnN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi50aXRsZSArIC5oaWdobGlnaHQge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLnRpdGxlLmlzLW5vcm1hbCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50aXRsZS5pcy1ub3JtYWwgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnRpdGxlLmlzLTEge1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi50aXRsZS5pcy0xIGNvZGUge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50aXRsZS5pcy0yIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4udGl0bGUuaXMtMiBjb2RlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4udGl0bGUuaXMtMyB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLnRpdGxlLmlzLTMgY29kZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnRpdGxlLmlzLTQge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi50aXRsZS5pcy00IGNvZGUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi50aXRsZS5pcy01IHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGl0bGUuaXMtNSBjb2RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGl0bGUuaXMtNiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRpdGxlLmlzLTYgY29kZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLnRpdGxlICsgLnN1YnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgfVxufVxuXG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbn1cblxuLnN1YnRpdGxlICsgLnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5zdWJ0aXRsZSBzdHJvbmcge1xuICBjb2xvcjogIzIyMjMyNDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN1YnRpdGxlIGNvZGUge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAycHggM3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uc3VidGl0bGUgKyAudGV4dCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zdWJ0aXRsZS5pcy1ub3JtYWwge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3VidGl0bGUuaXMtbm9ybWFsIHN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdWJ0aXRsZS5pcy0xIHtcbiAgZm9udC1zaXplOiA0OHB4O1xufVxuXG4uc3VidGl0bGUuaXMtMSBjb2RlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4uc3VidGl0bGUuaXMtMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnN1YnRpdGxlLmlzLTIgY29kZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLnN1YnRpdGxlLmlzLTMge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5zdWJ0aXRsZS5pcy0zIGNvZGUge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5zdWJ0aXRsZS5pcy00IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc3VidGl0bGUuaXMtNCBjb2RlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc3VidGl0bGUuaXMtNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnN1YnRpdGxlLmlzLTUgY29kZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN1YnRpdGxlLmlzLTYge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdWJ0aXRsZS5pcy02IGNvZGUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWFnZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWFnZSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltYWdlLmlzLXNxdWFyZSBpbWcsIC5pbWFnZS5pcy0xYnkxIGltZywgLmltYWdlLmlzLTRieTMgaW1nLCAuaW1hZ2UuaXMtM2J5MiBpbWcsIC5pbWFnZS5pcy0xNmJ5OSBpbWcsIC5pbWFnZS5pcy0yYnkxIGltZyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2UuaXMtc3F1YXJlLCAuaW1hZ2UuaXMtMWJ5MSB7XG4gIHBhZGRpbmctdG9wOiAxMDAlO1xufVxuXG4uaW1hZ2UuaXMtNGJ5MyB7XG4gIHBhZGRpbmctdG9wOiA3NSU7XG59XG5cbi5pbWFnZS5pcy0zYnkyIHtcbiAgcGFkZGluZy10b3A6IDY2LjY2NjYlO1xufVxuXG4uaW1hZ2UuaXMtMTZieTkge1xuICBwYWRkaW5nLXRvcDogNTYuMjUlO1xufVxuXG4uaW1hZ2UuaXMtMmJ5MSB7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG59XG5cbi5pbWFnZS5pcy0xNngxNiB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG59XG5cbi5pbWFnZS5pcy0yNHgyNCB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbi5pbWFnZS5pcy0zMngzMiB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5pbWFnZS5pcy00OHg0OCB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG59XG5cbi5pbWFnZS5pcy02NHg2NCB7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDY0cHg7XG59XG5cbi5pbWFnZS5pcy05Nng5NiB7XG4gIGhlaWdodDogOTZweDtcbiAgd2lkdGg6IDk2cHg7XG59XG5cbi5pbWFnZS5pcy0xMjh4MTI4IHtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgd2lkdGg6IDEyOHB4O1xufVxuXG4ubWVzc2FnZS1ib2R5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QzZDZkYjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxMnB4IDE1cHg7XG59XG5cbi5tZXNzYWdlLWJvZHkgc3Ryb25nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5tZXNzYWdlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICM2OTcwN2E7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAzcHggMCAwO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tZXNzYWdlLWhlYWRlciArIC5tZXNzYWdlLWJvZHkge1xuICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuLm1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5tZXNzYWdlLmlzLWRhcmsge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuXG4ubWVzc2FnZS5pcy1kYXJrIC5tZXNzYWdlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICMyMjIzMjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lc3NhZ2UuaXMtZGFyayAubWVzc2FnZS1ib2R5IHtcbiAgYm9yZGVyLWNvbG9yOiAjMjIyMzI0O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm1lc3NhZ2UuaXMtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICNlZGZiZmM7XG59XG5cbi5tZXNzYWdlLmlzLXByaW1hcnkgLm1lc3NhZ2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzFmYzhkYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWVzc2FnZS5pcy1wcmltYXJ5IC5tZXNzYWdlLWJvZHkge1xuICBib3JkZXItY29sb3I6ICMxZmM4ZGI7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubWVzc2FnZS5pcy1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2VkZjdmYztcbn1cblxuLm1lc3NhZ2UuaXMtaW5mbyAubWVzc2FnZS1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjNDJhZmUzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tZXNzYWdlLmlzLWluZm8gLm1lc3NhZ2UtYm9keSB7XG4gIGJvcmRlci1jb2xvcjogIzQyYWZlMztcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5tZXNzYWdlLmlzLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjZjRmYWYwO1xufVxuXG4ubWVzc2FnZS5pcy1zdWNjZXNzIC5tZXNzYWdlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICM5N2NkNzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lc3NhZ2UuaXMtc3VjY2VzcyAubWVzc2FnZS1ib2R5IHtcbiAgYm9yZGVyLWNvbG9yOiAjOTdjZDc2O1xuICBjb2xvcjogZ3JheTtcbn1cblxuLm1lc3NhZ2UuaXMtd2FybmluZyB7XG4gIGJhY2tncm91bmQ6ICNmZmZiZWI7XG59XG5cbi5tZXNzYWdlLmlzLXdhcm5pbmcgLm1lc3NhZ2UtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZjZTQ3MztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1lc3NhZ2UuaXMtd2FybmluZyAubWVzc2FnZS1ib2R5IHtcbiAgYm9yZGVyLWNvbG9yOiAjZmNlNDczO1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuLm1lc3NhZ2UuaXMtZGFuZ2VyIHtcbiAgYmFja2dyb3VuZDogI2ZkZWVlZDtcbn1cblxuLm1lc3NhZ2UuaXMtZGFuZ2VyIC5tZXNzYWdlLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNlZDZjNjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lc3NhZ2UuaXMtZGFuZ2VyIC5tZXNzYWdlLWJvZHkge1xuICBib3JkZXItY29sb3I6ICNlZDZjNjM7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm5vdGlmaWNhdGlvbjphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5ub3RpZmljYXRpb24gLnRpdGxlIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5ub3RpZmljYXRpb24uaXMtZGFyayB7XG4gIGJhY2tncm91bmQ6ICMyMjIzMjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdGlmaWNhdGlvbi5pcy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzFmYzhkYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubm90aWZpY2F0aW9uLmlzLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjNDJhZmUzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ub3RpZmljYXRpb24uaXMtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICM5N2NkNzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vdGlmaWNhdGlvbi5pcy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZjZTQ3MztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm5vdGlmaWNhdGlvbi5pcy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZWQ2YzYzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ub3RpZmljYXRpb24gLmRlbGV0ZSwgLm5vdGlmaWNhdGlvbiAubW9kYWwtY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4O1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbjogLTE2cHggLTIwcHggMCAyMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uIC5kZWxldGU6aG92ZXIsIC5ub3RpZmljYXRpb24gLm1vZGFsLWNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYm94IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRlbGV0ZSwgLm1vZGFsLWNsb3NlIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAyNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4uZGVsZXRlOmJlZm9yZSwgLm1vZGFsLWNsb3NlOmJlZm9yZSwgLmRlbGV0ZTphZnRlciwgLm1vZGFsLWNsb3NlOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDJweDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTI1JTtcbiAgbWFyZ2luLXRvcDogLTFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmRlbGV0ZTpiZWZvcmUsIC5tb2RhbC1jbG9zZTpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5kZWxldGU6YWZ0ZXIsIC5tb2RhbC1jbG9zZTphZnRlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xufVxuXG4uZGVsZXRlOmhvdmVyLCAubW9kYWwtY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWQ2YzYzO1xufVxuXG4uZGVsZXRlLmlzLXNtYWxsLCAudGFnOm5vdCguaXMtbGFyZ2UpIC5kZWxldGUsIC50YWc6bm90KC5pcy1sYXJnZSkgLm1vZGFsLWNsb3NlLCAuaXMtc21hbGwubW9kYWwtY2xvc2Uge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuXG4uZGVsZXRlLmlzLW1lZGl1bSwgLmlzLW1lZGl1bS5tb2RhbC1jbG9zZSB7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG59XG5cbi5kZWxldGUuaXMtbGFyZ2UsIC5pcy1sYXJnZS5tb2RhbC1jbG9zZSB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbi5pY29uIC5mYSB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbi5pY29uLmlzLXNtYWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5pY29uLmlzLW1lZGl1bSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAyOHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiAzMnB4O1xufVxuXG4uaWNvbi5pcy1sYXJnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiA0MnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiA0OHB4O1xufVxuXG4uaGFtYnVyZ2VyLCAuaGVhZGVyLXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTBweDtcbn1cblxuLmhhbWJ1cmdlciBzcGFuLCAuaGVhZGVyLXRvZ2dsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzY5NzA3YTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMXB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmUgODZtcyBlYXNlLW91dDtcbiAgdHJhbnNpdGlvbjogbm9uZSA4Nm1zIGVhc2Utb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQsIGxlZnQsIG9wYWNpdHksIC13ZWJraXQtdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBsZWZ0LCBvcGFjaXR5LCAtd2Via2l0LXRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZCwgbGVmdCwgb3BhY2l0eSwgdHJhbnNmb3JtO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kLCBsZWZ0LCBvcGFjaXR5LCB0cmFuc2Zvcm0sIC13ZWJraXQtdHJhbnNmb3JtO1xuICB3aWR0aDogMTVweDtcbn1cblxuLmhhbWJ1cmdlciBzcGFuOm50aC1jaGlsZCgxKSwgLmhlYWRlci10b2dnbGUgc3BhbjpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuXG4uaGFtYnVyZ2VyIHNwYW46bnRoLWNoaWxkKDIpLCAuaGVhZGVyLXRvZ2dsZSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG59XG5cbi5oYW1idXJnZXIgc3BhbjpudGgtY2hpbGQoMyksIC5oZWFkZXItdG9nZ2xlIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uaGFtYnVyZ2VyOmhvdmVyLCAuaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG59XG5cbi5oYW1idXJnZXIuaXMtYWN0aXZlIHNwYW4sIC5pcy1hY3RpdmUuaGVhZGVyLXRvZ2dsZSBzcGFuIHtcbiAgYmFja2dyb3VuZDogIzFmYzhkYjtcbn1cblxuLmhhbWJ1cmdlci5pcy1hY3RpdmUgc3BhbjpudGgtY2hpbGQoMSksIC5pcy1hY3RpdmUuaGVhZGVyLXRvZ2dsZSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG59XG5cbi5oYW1idXJnZXIuaXMtYWN0aXZlIHNwYW46bnRoLWNoaWxkKDIpLCAuaXMtYWN0aXZlLmhlYWRlci10b2dnbGUgc3BhbjpudGgtY2hpbGQoMikge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaGFtYnVyZ2VyLmlzLWFjdGl2ZSBzcGFuOm50aC1jaGlsZCgzKSwgLmlzLWFjdGl2ZS5oZWFkZXItdG9nZ2xlIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuaGFtYnVyZ2VyLCAuaGVhZGVyLXRvZ2dsZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG5cbi5oZWFkaW5nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGlnaGxpZ2h0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oaWdobGlnaHQgcHJlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmltYWdlIGltZyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZS5pcy0zeDIge1xuICBwYWRkaW5nLXRvcDogNjYuNjY2NiU7XG59XG5cbi5sb2FkZXIsIC5jb250cm9sLmlzLWxvYWRpbmc6YWZ0ZXIsIC5idXR0b24uaXMtbG9hZGluZzphZnRlciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluLWFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzcGluLWFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkM2Q2ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbn1cblxuLm51bWJlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnRhZyB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBjb2xvcjogIzY5NzA3YTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGFnLmlzLWRhcmsge1xuICBiYWNrZ3JvdW5kOiAjNjk3MDdhO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWcuaXMtcm91bmRlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xufVxuXG4udGFnLmlzLW1lZGl1bSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDdweCAxNHB4IDlweDtcbn1cblxuLnRhZzpub3QoLmlzLWxhcmdlKSAuZGVsZXRlLCAudGFnOm5vdCguaXMtbGFyZ2UpIC5tb2RhbC1jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIG1hcmdpbi1yaWdodDogLTZweDtcbn1cblxuLnRhZy5pcy1sYXJnZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiA3cHggMThweCA5cHg7XG59XG5cbi50YWcuaXMtbGFyZ2UgLmRlbGV0ZSwgLnRhZy5pcy1sYXJnZSAubW9kYWwtY2xvc2Uge1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG59XG5cbi50YWcuaXMtZGFyayB7XG4gIGJhY2tncm91bmQ6ICMyMjIzMjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhZy5pcy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzFmYzhkYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFnLmlzLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjNDJhZmUzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWcuaXMtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQ6ICM5N2NkNzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRhZy5pcy13YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogI2ZjZTQ3MztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRhZy5pcy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjZWQ2YzYzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb2x1bW4ge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLWhhbGYge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICBmbGV4OiBub25lO1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLXRoaXJkIHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDMzLjMzMzMlO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLXF1YXJ0ZXIge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICBmbGV4OiBub25lO1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLW9mZnNldC1oYWxmIHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmNvbHVtbnMuaXMtbW9iaWxlID4gLmNvbHVtbi5pcy1vZmZzZXQtdGhpcmQge1xuICBtYXJnaW4tbGVmdDogMzMuMzMzMyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtb2Zmc2V0LXF1YXJ0ZXIge1xuICBtYXJnaW4tbGVmdDogMjUlO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLTEge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICBmbGV4OiBub25lO1xuICB3aWR0aDogOC4zMzMzMyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtb2Zmc2V0LTEge1xuICBtYXJnaW4tbGVmdDogOC4zMzMzMyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtMiB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiAxNi42NjY2NyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtb2Zmc2V0LTIge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLTMge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICBmbGV4OiBub25lO1xuICB3aWR0aDogMjUlO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLW9mZnNldC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbn1cblxuLmNvbHVtbnMuaXMtbW9iaWxlID4gLmNvbHVtbi5pcy00IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDMzLjMzMzMzJTtcbn1cblxuLmNvbHVtbnMuaXMtbW9iaWxlID4gLmNvbHVtbi5pcy1vZmZzZXQtNCB7XG4gIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtNSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiA0MS42NjY2NyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtb2Zmc2V0LTUge1xuICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLTYge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICBmbGV4OiBub25lO1xuICB3aWR0aDogNTAlO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLW9mZnNldC02IHtcbiAgbWFyZ2luLWxlZnQ6IDUwJTtcbn1cblxuLmNvbHVtbnMuaXMtbW9iaWxlID4gLmNvbHVtbi5pcy03IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgZmxleDogbm9uZTtcbiAgd2lkdGg6IDU4LjMzMzMzJTtcbn1cblxuLmNvbHVtbnMuaXMtbW9iaWxlID4gLmNvbHVtbi5pcy1vZmZzZXQtNyB7XG4gIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtOCB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiA2Ni42NjY2NyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtb2Zmc2V0LTgge1xuICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLTkge1xuICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICBmbGV4OiBub25lO1xuICB3aWR0aDogNzUlO1xufVxuXG4uY29sdW1ucy5pcy1tb2JpbGUgPiAuY29sdW1uLmlzLW9mZnNldC05IHtcbiAgbWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLmNvbHVtbnMuaXMtbW9iaWxlID4gLmNvbHVtbi5pcy0xMCB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiA4My4zMzMzMyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtb2Zmc2V0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbn1cblxuLmNvbHVtbnMuaXMtbW9iaWxlID4gLmNvbHVtbi5pcy0xMSB7XG4gIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgIGZsZXg6IG5vbmU7XG4gIHdpZHRoOiA5MS42NjY2NyU7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSA+IC5jb2x1bW4uaXMtb2Zmc2V0LTExIHtcbiAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbHVtbi5pcy1oYWxmLW1vYmlsZSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2x1bW4uaXMtdGhpcmQtbW9iaWxlIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiAzMy4zMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLXF1YXJ0ZXItbW9iaWxlIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtaGFsZi1tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtdGhpcmQtbW9iaWxlIHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtcXVhcnRlci1tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLmNvbHVtbi5pcy0xLW1vYmlsZSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogOC4zMzMzMyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtMS1tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLTItbW9iaWxlIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiAxNi42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtMi1tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy0zLW1vYmlsZSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTMtbW9iaWxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5jb2x1bW4uaXMtNC1tb2JpbGUge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgd2lkdGg6IDMzLjMzMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLW9mZnNldC00LW1vYmlsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLTUtbW9iaWxlIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA0MS42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtNS1tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy02LW1vYmlsZSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTYtbW9iaWxlIHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5jb2x1bW4uaXMtNy1tb2JpbGUge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgd2lkdGg6IDU4LjMzMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLW9mZnNldC03LW1vYmlsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLTgtbW9iaWxlIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA2Ni42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtOC1tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy05LW1vYmlsZSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTktbW9iaWxlIHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5jb2x1bW4uaXMtMTAtbW9iaWxlIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA4My4zMzMzMyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtMTAtbW9iaWxlIHtcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtMTEtbW9iaWxlIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA5MS42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtMTEtbW9iaWxlIHtcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjclO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5jb2x1bW4uaXMtaGFsZiwgLmNvbHVtbi5pcy1oYWxmLXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2x1bW4uaXMtdGhpcmQsIC5jb2x1bW4uaXMtdGhpcmQtdGFibGV0IHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiAzMy4zMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLXF1YXJ0ZXIsIC5jb2x1bW4uaXMtcXVhcnRlci10YWJsZXQge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuICAuY29sdW1uLmlzLW9mZnNldC1oYWxmLCAuY29sdW1uLmlzLW9mZnNldC1oYWxmLXRhYmxldCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuICAuY29sdW1uLmlzLW9mZnNldC10aGlyZCwgLmNvbHVtbi5pcy1vZmZzZXQtdGhpcmQtdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtcXVhcnRlciwgLmNvbHVtbi5pcy1vZmZzZXQtcXVhcnRlci10YWJsZXQge1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLmNvbHVtbi5pcy0xLCAuY29sdW1uLmlzLTEtdGFibGV0IHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA4LjMzMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLW9mZnNldC0xLCAuY29sdW1uLmlzLW9mZnNldC0xLXRhYmxldCB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtMiwgLmNvbHVtbi5pcy0yLXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogMTYuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTIsIC5jb2x1bW4uaXMtb2Zmc2V0LTItdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtMywgLmNvbHVtbi5pcy0zLXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogMjUlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTMsIC5jb2x1bW4uaXMtb2Zmc2V0LTMtdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5jb2x1bW4uaXMtNCwgLmNvbHVtbi5pcy00LXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogMzMuMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTQsIC5jb2x1bW4uaXMtb2Zmc2V0LTQtdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtNSwgLmNvbHVtbi5pcy01LXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNDEuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTUsIC5jb2x1bW4uaXMtb2Zmc2V0LTUtdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtNiwgLmNvbHVtbi5pcy02LXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTYsIC5jb2x1bW4uaXMtb2Zmc2V0LTYtdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5jb2x1bW4uaXMtNywgLmNvbHVtbi5pcy03LXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNTguMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTcsIC5jb2x1bW4uaXMtb2Zmc2V0LTctdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtOCwgLmNvbHVtbi5pcy04LXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNjYuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTgsIC5jb2x1bW4uaXMtb2Zmc2V0LTgtdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtOSwgLmNvbHVtbi5pcy05LXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogNzUlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTksIC5jb2x1bW4uaXMtb2Zmc2V0LTktdGFibGV0IHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5jb2x1bW4uaXMtMTAsIC5jb2x1bW4uaXMtMTAtdGFibGV0IHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA4My4zMzMzMyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtMTAsIC5jb2x1bW4uaXMtb2Zmc2V0LTEwLXRhYmxldCB7XG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLTExLCAuY29sdW1uLmlzLTExLXRhYmxldCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogOTEuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTExLCAuY29sdW1uLmlzLW9mZnNldC0xMS10YWJsZXQge1xuICAgIG1hcmdpbi1sZWZ0OiA5MS42NjY2NyU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIHtcbiAgLmNvbHVtbi5pcy1oYWxmLWRlc2t0b3Age1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuY29sdW1uLmlzLXRoaXJkLWRlc2t0b3Age1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgd2lkdGg6IDMzLjMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtcXVhcnRlci1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtaGFsZi1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LXRoaXJkLWRlc2t0b3Age1xuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzJTtcbiAgfVxuICAuY29sdW1uLmlzLW9mZnNldC1xdWFydGVyLWRlc2t0b3Age1xuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIH1cbiAgLmNvbHVtbi5pcy0xLWRlc2t0b3Age1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDA7XG4gICAgLXdlYmtpdC1mbGV4OiBub25lO1xuICAgICAgICAtbXMtZmxleDogbm9uZTtcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XG4gICAgd2lkdGg6IDguMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTEtZGVza3RvcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtMi1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiAxNi42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtMi1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtMy1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiAyNSU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtMy1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xuICB9XG4gIC5jb2x1bW4uaXMtNC1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiAzMy4zMzMzMyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtNC1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogMzMuMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtNS1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA0MS42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtNS1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtNi1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtNi1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xuICB9XG4gIC5jb2x1bW4uaXMtNy1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA1OC4zMzMzMyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtNy1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtOC1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA2Ni42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtOC1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjclO1xuICB9XG4gIC5jb2x1bW4uaXMtOS1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA3NSU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtOS1kZXNrdG9wIHtcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xuICB9XG4gIC5jb2x1bW4uaXMtMTAtZGVza3RvcCB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAtd2Via2l0LWZsZXg6IG5vbmU7XG4gICAgICAgIC1tcy1mbGV4OiBub25lO1xuICAgICAgICAgICAgZmxleDogbm9uZTtcbiAgICB3aWR0aDogODMuMzMzMzMlO1xuICB9XG4gIC5jb2x1bW4uaXMtb2Zmc2V0LTEwLWRlc2t0b3Age1xuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMyU7XG4gIH1cbiAgLmNvbHVtbi5pcy0xMS1kZXNrdG9wIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIC13ZWJraXQtZmxleDogbm9uZTtcbiAgICAgICAgLW1zLWZsZXg6IG5vbmU7XG4gICAgICAgICAgICBmbGV4OiBub25lO1xuICAgIHdpZHRoOiA5MS42NjY2NyU7XG4gIH1cbiAgLmNvbHVtbi5pcy1vZmZzZXQtMTEtZGVza3RvcCB7XG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY3JTtcbiAgfVxufVxuXG4uY29sdW1ucyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5jb2x1bW5zOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmNvbHVtbnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb2x1bW5zLmlzLW1vYmlsZSB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY29sdW1ucy5pcy1nYXBsZXNzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNvbHVtbnMuaXMtZ2FwbGVzczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbHVtbnMuaXMtZ2FwbGVzcyA+IC5jb2x1bW4ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jb2x1bW5zLmlzLW11bHRpbGluZSB7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb2x1bW5zLmlzLXZjZW50ZXJlZCB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIC1tcy1ncmlkLXJvdy1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5jb2x1bW5zLmlzLWdyaWQge1xuICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5jb2x1bW5zLmlzLWdyaWQgPiAuY29sdW1uIHtcbiAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDMzLjMzMzMlO1xuICAgICAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMzMuMzMzMyU7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAzMy4zMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDMzLjMzMzMlO1xuICB9XG4gIC5jb2x1bW5zLmlzLWdyaWQgPiAuY29sdW1uICsgLmNvbHVtbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmNvbHVtbnM6bm90KC5pcy1kZXNrdG9wKSB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIHtcbiAgLmNvbHVtbnMuaXMtZGVza3RvcCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuLm5hdmJhci1pdGVtIC50aXRsZSxcbi5uYXZiYXItaXRlbSAuc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWl0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG4ubmF2YmFyIGNvZGUge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5uYXZiYXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAubmF2YmFyIHtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuICAubmF2YmFyID4gLm5hdmJhci1pdGVtOm5vdCguaXMtbmFycm93KSB7XG4gICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgfVxufVxuXG4ubmF2YmFyLWxlZnQgLm5hdmJhci1pdGVtLmlzLWZsZXhpYmxlLFxuLm5hdmJhci1yaWdodCAubmF2YmFyLWl0ZW0uaXMtZmxleGlibGUge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xufVxuXG4ubmF2YmFyLWxlZnQgLm5hdmJhci1pdGVtOm5vdCg6bGFzdC1jaGlsZCksXG4ubmF2YmFyLXJpZ2h0IC5uYXZiYXItaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyLWxlZnQgKyAubmF2YmFyLXJpZ2h0IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5uYXZiYXItbGVmdCB7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5uYXZiYXItcmlnaHQge1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQtaW1hZ2UgaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkLWltYWdlLmlzLXNxdWFyZSBpbWcsIC5jYXJkLWltYWdlLmlzLTR4MyBpbWcsIC5jYXJkLWltYWdlLmlzLTN4MiBpbWcge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtaW1hZ2UuaXMtc3F1YXJlIHtcbiAgcGFkZGluZy10b3A6IDEwMCU7XG59XG5cbi5jYXJkLWltYWdlLmlzLTR4MyB7XG4gIHBhZGRpbmctdG9wOiA3NSU7XG59XG5cbi5jYXJkLWltYWdlLmlzLTN4MiB7XG4gIHBhZGRpbmctdG9wOiA2Ni42NjY2JTtcbn1cblxuLmNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jYXJkLWNvbnRlbnQgLnRpdGxlICsgLnN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uY2FyZCAubWVkaWE6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJkLmlzLXJvdW5kZWQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi50YWJsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzIyMjMyNDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2Q2ZGI7XG4gIGJvcmRlci13aWR0aDogMCAwIDFweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi50YWJsZSB0aC50YWJsZS1uYXJyb3csXG4udGFibGUgdGQudGFibGUtbmFycm93IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDElO1xufVxuXG4udGFibGUgdGgudGFibGUtbGluayxcbi50YWJsZSB0ZC50YWJsZS1saW5rIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRhYmxlIHRoLnRhYmxlLWxpbmsgPiBhLFxuLnRhYmxlIHRkLnRhYmxlLWxpbmsgPiBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xufVxuXG4udGFibGUgdGgudGFibGUtbGluayA+IGE6aG92ZXIsXG4udGFibGUgdGQudGFibGUtbGluayA+IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWZjOGRiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50YWJsZSB0aC50YWJsZS1pY29uLFxuLnRhYmxlIHRkLnRhYmxlLWljb24ge1xuICBwYWRkaW5nOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgd2lkdGg6IDElO1xufVxuXG4udGFibGUgdGgudGFibGUtaWNvbiAuZmEsXG4udGFibGUgdGQudGFibGUtaWNvbiAuZmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMjRweDtcbn1cblxuLnRhYmxlIHRoLnRhYmxlLWljb24udGFibGUtbGluayxcbi50YWJsZSB0ZC50YWJsZS1pY29uLnRhYmxlLWxpbmsge1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGFibGUgdGgudGFibGUtaWNvbi50YWJsZS1saW5rID4gYSxcbi50YWJsZSB0ZC50YWJsZS1pY29uLnRhYmxlLWxpbmsgPiBhIHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGFibGUgdGgge1xuICBjb2xvcjogIzIyMjMyNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRhYmxlIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NywgMjUwLCAwLjUpO1xuICBjb2xvcjogIzIyMjMyNDtcbn1cblxuLnRhYmxlIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4udGFibGUgdGhlYWQgdGgsXG4udGFibGUgdGhlYWQgdGQge1xuICBib3JkZXItd2lkdGg6IDAgMCAycHg7XG4gIGNvbG9yOiAjYWViMWI1O1xufVxuXG4udGFibGUgdGZvb3QgdGgsXG4udGFibGUgdGZvb3QgdGQge1xuICBib3JkZXItd2lkdGg6IDJweCAwIDA7XG4gIGNvbG9yOiAjYWViMWI1O1xufVxuXG4udGFibGUuaXMtYm9yZGVyZWQgdGgsXG4udGFibGUuaXMtYm9yZGVyZWQgdGQge1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuLnRhYmxlLmlzLWJvcmRlcmVkIHRyOmxhc3QtY2hpbGQgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG59XG5cbi50YWJsZS5pcy1uYXJyb3cgdGgsXG4udGFibGUuaXMtbmFycm93IHRkIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi50YWJsZS5pcy1uYXJyb3cgdGgudGFibGUtbGluayxcbi50YWJsZS5pcy1uYXJyb3cgdGQudGFibGUtbGluayB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50YWJsZS5pcy1uYXJyb3cgdGgudGFibGUtbGluayA+IGEsXG4udGFibGUuaXMtbmFycm93IHRkLnRhYmxlLWxpbmsgPiBhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG5cbi50YWJsZS5pcy1uYXJyb3cgdGgudGFibGUtaWNvbixcbi50YWJsZS5pcy1uYXJyb3cgdGQudGFibGUtaWNvbiB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLnRhYmxlLmlzLW5hcnJvdyB0aC50YWJsZS1pY29uLnRhYmxlLWxpbmssXG4udGFibGUuaXMtbmFycm93IHRkLnRhYmxlLWljb24udGFibGUtbGluayB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi50YWJsZS5pcy1uYXJyb3cgdGgudGFibGUtaWNvbi50YWJsZS1saW5rID4gYSxcbi50YWJsZS5pcy1uYXJyb3cgdGQudGFibGUtaWNvbi50YWJsZS1saW5rID4gYSB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLnRhYmxlLmlzLXN0cmlwZWQgdGJvZHkgdHI6bnRoLWNoaWxkKDJuKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDcsIDI1MCwgMC41KTtcbn1cblxuLnRhYmxlLmlzLXN0cmlwZWQgdGJvZHkgdHI6bnRoLWNoaWxkKDJuKTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG59XG5cbi50YWJzIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50YWJzIC5mYSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMnB4IC0ycHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4udGFicyBhIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2Q2ZGI7XG4gIGNvbG9yOiAjNjk3MDdhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi50YWJzIGE6aG92ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMjIyMzI0O1xuICBjb2xvcjogIzIyMjMyNDtcbn1cblxuLnRhYnMgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnRhYnMgbGkgKyBsaSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGFicyBsaS5pcy1hY3RpdmUgYSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxZmM4ZGI7XG4gIGNvbG9yOiAjMWZjOGRiO1xufVxuXG4udGFicyB1bCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkNmRiO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRhYnMuaXMtY2VudGVyZWQgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG4udGFicy5pcy1jZW50ZXJlZCBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi50YWJzLmlzLWNlbnRlcmVkIHVsIHtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWJzLmlzLXJpZ2h0IHVsIHtcbiAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAtbXMtZmxleC1wYWNrOiBlbmQ7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnRhYnMuaXMtYm94ZWQgYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgcGFkZGluZzogNXB4IDE1cHg7XG59XG5cbi50YWJzLmlzLWJveGVkIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjVmN2ZhO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDNkNmRiO1xufVxuXG4udGFicy5pcy1ib3hlZCBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjZDNkNmRiO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRhYnMuaXMtYm94ZWQuaXMtY2VudGVyZWQgbGksXG4udGFicy5pcy1ib3hlZC5pcy1jZW50ZXJlZCBsaSArIGxpIHtcbiAgbWFyZ2luOiAwIDJweDtcbn1cblxuLnRhYnMuaXMtdG9nZ2xlIGEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmRiO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFicy5pcy10b2dnbGUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGJvcmRlci1jb2xvcjogI2FlYjFiNTtcbiAgei1pbmRleDogMjtcbn1cblxuLnRhYnMuaXMtdG9nZ2xlIGxpICsgbGkge1xuICBtYXJnaW4tbGVmdDogLTFweDtcbn1cblxuLnRhYnMuaXMtdG9nZ2xlIGxpOmZpcnN0LWNoaWxkIGEge1xuICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcbn1cblxuLnRhYnMuaXMtdG9nZ2xlIGxpOmxhc3QtY2hpbGQgYSB7XG4gIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xufVxuXG4udGFicy5pcy10b2dnbGUgbGkuaXMtYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kOiAjMWZjOGRiO1xuICBib3JkZXItY29sb3I6ICMxZmM4ZGI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnRhYnMuaXMtdG9nZ2xlIHVsIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLnRhYnMuaXMtZnVsbHdpZHRoIGxpIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgIC13ZWJraXQtZmxleDogMTtcbiAgICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICB9XG4gIC50YWJzLmlzLWZ1bGx3aWR0aCBsaSArIGxpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAudGFicy5pcy1mdWxsd2lkdGggdWwge1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuLm1lZGlhLW51bWJlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWluLXdpZHRoOiAzMnB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tZWRpYS1udW1iZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLm1lZGlhLW51bWJlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG5cbi5tZWRpYS1sZWZ0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubWVkaWEtcmlnaHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1lZGlhLWNvbnRlbnQge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWVkaWEge1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RhcnQ7XG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAtbXMtZmxleC1hbGlnbjogc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubWVkaWEgLmNvbnRlbnQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tZWRpYSAubWVkaWEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTEsIDIxNCwgMjE5LCAwLjUpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5tZWRpYSAubWVkaWEgLnRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHBhZGRpbmc6IDNweCA2cHg7XG59XG5cbi5tZWRpYSAubWVkaWEgLmJ1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiAzcHggNnB4O1xufVxuXG4ubWVkaWEgLm1lZGlhIC5jb250ZW50Om5vdCg6bGFzdC1jaGlsZCksXG4ubWVkaWEgLm1lZGlhIC5jb250cm9sOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5tZWRpYSAubWVkaWEgLm1lZGlhIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4ubWVkaWEgLm1lZGlhIC5tZWRpYSArIC5tZWRpYSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm1lZGlhICsgLm1lZGlhIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTQsIDIxOSwgMC41KTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5tZWRpYS5pcy1sYXJnZSArIC5tZWRpYSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAubWVkaWEuaXMtbGFyZ2UgLm1lZGlhLW51bWJlciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cbi5tZW51LWljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB3aWR0aDogMTZweDtcbiAgY29sb3I6ICNhZWIxYjU7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDAgNHB4IDAgLTJweDtcbn1cblxuLm1lbnUtaWNvbiAuZmEge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xufVxuXG4ubWVudS1oZWFkaW5nIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2Q2ZGI7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBjb2xvcjogIzIyMjMyNDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVudS1saXN0IGEge1xuICBjb2xvcjogIzY5NzA3YTtcbn1cblxuLm1lbnUtbGlzdCBhOmhvdmVyIHtcbiAgY29sb3I6ICMxZmM4ZGI7XG59XG5cbi5tZW51LXRhYnMge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiA1cHggMTBweCAwO1xuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW51LXRhYnM6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkNmRiO1xufVxuXG4ubWVudS10YWJzIGEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDZkYjtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubWVudS10YWJzIGEuaXMtYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzIyMjMyNDtcbiAgY29sb3I6ICMyMjIzMjQ7XG59XG5cbi5tZW51LWJsb2NrIHtcbiAgY29sb3I6ICMyMjIzMjQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1lbnUtYmxvY2s6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkNmRiO1xufVxuXG4ubWVudS1ibG9jayAuY2hlY2tib3gsIC5tZW51LWJsb2NrIC5tZW51LWNoZWNrYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuXG4ubWVudS1ibG9jayAuY2hlY2tib3ggaW5wdXQsIC5tZW51LWJsb2NrIC5tZW51LWNoZWNrYm94IGlucHV0IHtcbiAgbGVmdDogOXB4O1xuICB0b3A6IDlweDtcbn1cblxuLm1lbnUtYmxvY2sgLmNoZWNrYm94OmhvdmVyLCAubWVudS1ibG9jayAubWVudS1jaGVja2JveDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzFmYzhkYjtcbn1cblxuYS5tZW51LWJsb2NrOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbn1cblxuLm1lbnUtY2hlY2tib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOXB4IDEwcHggOXB4IDMwcHg7XG59XG5cbi5tZW51LWNoZWNrYm94Om5vdCg6bGFzdC1jaGlsZCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2QzZDZkYjtcbn1cblxuLm1lbnUtY2hlY2tib3ggaW5wdXQge1xuICBsZWZ0OiA4cHg7XG4gIHRvcDogMTBweDtcbn1cblxuLm1lbnUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkNmRiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tZW51Om5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubW9kYWwtYmFja2dyb3VuZCB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuODYpO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLm1vZGFsLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0MHB4KTtcbiAgICB3aWR0aDogNjQwcHg7XG4gIH1cbn1cblxuLm1vZGFsLWNsb3NlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4ubW9kYWwge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgLW1zLWdyaWQtcm93LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogbm9uZTtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE5ODY7XG59XG5cbi5tb2RhbC5pcy1hY3RpdmUge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5oZWFkZXI6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uaGVhZGVyIC5jb250YWluZXIge1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjExLCAyMTQsIDIxOSwgMC4zKTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmhlYWRlci10b2dnbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmhlYWRlci1pdGVtIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmhlYWRlci1pdGVtIGltZyB7XG4gIG1heC1oZWlnaHQ6IDI0cHg7XG59XG5cbi5oZWFkZXItaXRlbSBhIHtcbiAgY29sb3I6ICM2OTcwN2E7XG59XG5cbi5oZWFkZXItaXRlbSBhOmhvdmVyIHtcbiAgY29sb3I6ICMyMjIzMjQ7XG59XG5cbi5oZWFkZXItaXRlbSBhLmlzLWFjdGl2ZSB7XG4gIGNvbG9yOiAjMjIyMzI0O1xufVxuXG4uaGVhZGVyLWl0ZW0gLmZhIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDI0cHg7XG4gIGNvbG9yOiAjNjk3MDdhO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4uaGVhZGVyLWljb246aG92ZXIge1xuICBjb2xvcjogIzIyMjMyNDtcbn1cblxuLmhlYWRlci10YWIge1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAtbXMtZ3JpZC1yb3ctYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNjk3MDdhO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgcGFkZGluZzogMTNweCAxNXB4O1xufVxuXG4uaGVhZGVyLXRhYjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMWZjOGRiO1xufVxuXG4uaGVhZGVyLXRhYi5pcy1hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzFmYzhkYjtcbiAgY29sb3I6ICMxZmM4ZGI7XG59XG5cbi5oZWFkZXItbGVmdCB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkge1xuICAuaGVhZGVyLWxlZnQgLmhlYWRlci1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cblxuLmhlYWRlci1jZW50ZXIge1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgbGVmdDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmhlYWRlci1yaWdodCB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBzdHJldGNoO1xuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAgICAgICAgIC1tcy1ncmlkLXJvdy1hbGlnbjogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmhlYWRlci1yaWdodCB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIHtcbiAgLmhlYWRlci1yaWdodCAuaGVhZGVyLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG4uaGVhZGVyLWZ1bGwge1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGVyLWZ1bGwgPiAuaGVhZGVyLWl0ZW0ge1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4OiAxO1xuICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaGVhZGVyLWZ1bGwgPiAuaGVhZGVyLWl0ZW0gPiBhIHtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlYWRlci1tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDRweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MHB4O1xuICAgIHotaW5kZXg6IDEwMDtcbiAgfVxuICAuaGVhZGVyLW1lbnUgLmhlYWRlci1pdGVtIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyMTEsIDIxNCwgMjE5LCAwLjUpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmhlYWRlci1tZW51LmlzLWFjdGl2ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLmhlYWRlci5pcy1jZW50ZXJlZCB7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci5pcy1jZW50ZXJlZCAuaGVhZGVyLWxlZnQsXG4uaGVhZGVyLmlzLWNlbnRlcmVkIC5oZWFkZXItY2VudGVyLFxuLmhlYWRlci5pcy1jZW50ZXJlZCAuaGVhZGVyLXJpZ2h0IHtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVhZGVyLmlzLXNtYWxsIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uaGVhZGVyLmlzLXNtYWxsIC5jb250YWluZXIge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5oZWFkZXIuaXMtc21hbGwgLmhlYWRlci10YWIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG59XG5cbi5oZWFkZXIuaXMtc21hbGwgLmhlYWRlci10YWI6aG92ZXIsIC5oZWFkZXIuaXMtc21hbGwgLmhlYWRlci10YWIuaXMtYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xufVxuXG4uaGVyby12aWRlbyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVyby12aWRlby5pcy10cmFuc3BhcmVudCB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuLmhlcm8tdmlkZW8gdmlkZW8ge1xuICBsZWZ0OiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUwJSwgLTUwJSwgMCk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLXZpZGVvIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5oZXJvLWNvbnRlbnQge1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MHB4KSB7XG4gIC5oZXJvLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxufVxuXG4uaGVyby1idXR0b25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8tYnV0dG9ucyAuYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuaGVyby1idXR0b25zIC5idXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuaGVyby1idXR0b25zIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLmhlcm8tYnV0dG9ucyAuYnV0dG9uOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuXG4uaGVybyB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5oZXJvIC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uaGVybyAudGFicyBhIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaGVybyAudGFicyB1bCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5oZXJvIC50YWJzLmlzLWJveGVkIGEge1xuICBwYWRkaW5nOiA4cHggMTVweDtcbn1cblxuLmhlcm8uaXMtYWx0IHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbiAgY29sb3I6ICNhZWIxYjU7XG59XG5cbi5oZXJvLmlzLWRhcmsge1xuICBiYWNrZ3JvdW5kOiAjMjIyMzI0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZXJvLmlzLWRhcmsgLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1kYXJrIC50aXRsZSBhLFxuLmhlcm8uaXMtZGFyayAudGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5oZXJvLmlzLWRhcmsgLnN1YnRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLmhlcm8uaXMtZGFyayAuc3VidGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1kYXJrIC5oZWFkZXIgLmNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uaGVyby5pcy1kYXJrIC5oZWFkZXItaWNvbixcbi5oZXJvLmlzLWRhcmsgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbikge1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmhlcm8uaXMtZGFyayAuaGVhZGVyLWljb246aG92ZXIsIC5oZXJvLmlzLWRhcmsgLmhlYWRlci1pY29uLmlzLWFjdGl2ZSxcbi5oZXJvLmlzLWRhcmsgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbik6aG92ZXIsXG4uaGVyby5pcy1kYXJrIC5oZWFkZXItaXRlbSA+IGE6bm90KC5idXR0b24pLmlzLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5oZXJvLmlzLWRhcmsgLnRhYnMgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaGVyby5pcy1kYXJrIC50YWJzIGE6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby5pcy1kYXJrIC50YWJzIGxpLmlzLWFjdGl2ZSBhIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlcm8uaXMtZGFyayAudGFicy5pcy1ib3hlZCBhLCAuaGVyby5pcy1kYXJrIC50YWJzLmlzLXRvZ2dsZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1kYXJrIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsIC5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsIC5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsIC5oZXJvLmlzLWRhcmsgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLCAuaGVyby5pcy1kYXJrIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzIyMjMyNDtcbn1cblxuLmhlcm8uaXMtZGFyay5pcy1ib2xkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzA5ZGVnLCAjMDgwYTBiIDAlLCAjMjIyMzI0IDcxJSwgIzJjMmUzNCAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgIzA4MGEwYiAwJSwgIzIyMjMyNCA3MSUsICMyYzJlMzQgMTAwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLmlzLWRhcmsgLmhlYWRlci10b2dnbGUgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmhlcm8uaXMtZGFyayAuaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5oZXJvLmlzLWRhcmsgLmhlYWRlci10b2dnbGUuaXMtYWN0aXZlIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5oZXJvLmlzLWRhcmsgLmhlYWRlci1tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiAjMjIyMzI0O1xuICB9XG4gIC5oZXJvLmlzLWRhcmsgLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG59XG5cbi5oZXJvLmlzLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMWZjOGRiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZXJvLmlzLXByaW1hcnkgLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1wcmltYXJ5IC50aXRsZSBhLFxuLmhlcm8uaXMtcHJpbWFyeSAudGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5oZXJvLmlzLXByaW1hcnkgLnN1YnRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLmhlcm8uaXMtcHJpbWFyeSAuc3VidGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1wcmltYXJ5IC5oZWFkZXIgLmNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uaGVyby5pcy1wcmltYXJ5IC5oZWFkZXItaWNvbixcbi5oZXJvLmlzLXByaW1hcnkgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbikge1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmhlcm8uaXMtcHJpbWFyeSAuaGVhZGVyLWljb246aG92ZXIsIC5oZXJvLmlzLXByaW1hcnkgLmhlYWRlci1pY29uLmlzLWFjdGl2ZSxcbi5oZXJvLmlzLXByaW1hcnkgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbik6aG92ZXIsXG4uaGVyby5pcy1wcmltYXJ5IC5oZWFkZXItaXRlbSA+IGE6bm90KC5idXR0b24pLmlzLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5oZXJvLmlzLXByaW1hcnkgLnRhYnMgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaGVyby5pcy1wcmltYXJ5IC50YWJzIGE6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby5pcy1wcmltYXJ5IC50YWJzIGxpLmlzLWFjdGl2ZSBhIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlcm8uaXMtcHJpbWFyeSAudGFicy5pcy1ib3hlZCBhLCAuaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLXRvZ2dsZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLWJveGVkIGE6aG92ZXIsIC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsIC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsIC5oZXJvLmlzLXByaW1hcnkgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLCAuaGVyby5pcy1wcmltYXJ5IC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzFmYzhkYjtcbn1cblxuLmhlcm8uaXMtcHJpbWFyeS5pcy1ib2xkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzA5ZGVnLCAjMGZiOGFkIDAlLCAjMWZjOGRiIDcxJSwgIzJjYjVlOCAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgIzBmYjhhZCAwJSwgIzFmYzhkYiA3MSUsICMyY2I1ZTggMTAwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLmlzLXByaW1hcnkgLmhlYWRlci10b2dnbGUgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmhlcm8uaXMtcHJpbWFyeSAuaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5oZXJvLmlzLXByaW1hcnkgLmhlYWRlci10b2dnbGUuaXMtYWN0aXZlIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5oZXJvLmlzLXByaW1hcnkgLmhlYWRlci1tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiAjMWZjOGRiO1xuICB9XG4gIC5oZXJvLmlzLXByaW1hcnkgLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG59XG5cbi5oZXJvLmlzLWluZm8ge1xuICBiYWNrZ3JvdW5kOiAjNDJhZmUzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZXJvLmlzLWluZm8gLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1pbmZvIC50aXRsZSBhLFxuLmhlcm8uaXMtaW5mbyAudGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5oZXJvLmlzLWluZm8gLnN1YnRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLmhlcm8uaXMtaW5mbyAuc3VidGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1pbmZvIC5oZWFkZXIgLmNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uaGVyby5pcy1pbmZvIC5oZWFkZXItaWNvbixcbi5oZXJvLmlzLWluZm8gLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbikge1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmhlcm8uaXMtaW5mbyAuaGVhZGVyLWljb246aG92ZXIsIC5oZXJvLmlzLWluZm8gLmhlYWRlci1pY29uLmlzLWFjdGl2ZSxcbi5oZXJvLmlzLWluZm8gLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbik6aG92ZXIsXG4uaGVyby5pcy1pbmZvIC5oZWFkZXItaXRlbSA+IGE6bm90KC5idXR0b24pLmlzLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5oZXJvLmlzLWluZm8gLnRhYnMgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaGVyby5pcy1pbmZvIC50YWJzIGE6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby5pcy1pbmZvIC50YWJzIGxpLmlzLWFjdGl2ZSBhIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlcm8uaXMtaW5mbyAudGFicy5pcy1ib3hlZCBhLCAuaGVyby5pcy1pbmZvIC50YWJzLmlzLXRvZ2dsZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1pbmZvIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsIC5oZXJvLmlzLWluZm8gLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZXJvLmlzLWluZm8gLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsIC5oZXJvLmlzLWluZm8gLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsIC5oZXJvLmlzLWluZm8gLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLCAuaGVyby5pcy1pbmZvIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzQyYWZlMztcbn1cblxuLmhlcm8uaXMtaW5mby5pcy1ib2xkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzA5ZGVnLCAjMTNiZmRmIDAlLCAjNDJhZmUzIDcxJSwgIzUzYTFlYiAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgIzEzYmZkZiAwJSwgIzQyYWZlMyA3MSUsICM1M2ExZWIgMTAwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLmlzLWluZm8gLmhlYWRlci10b2dnbGUgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmhlcm8uaXMtaW5mbyAuaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5oZXJvLmlzLWluZm8gLmhlYWRlci10b2dnbGUuaXMtYWN0aXZlIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5oZXJvLmlzLWluZm8gLmhlYWRlci1tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiAjNDJhZmUzO1xuICB9XG4gIC5oZXJvLmlzLWluZm8gLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG59XG5cbi5oZXJvLmlzLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiAjOTdjZDc2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5oZXJvLmlzLXN1Y2Nlc3MgLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1zdWNjZXNzIC50aXRsZSBhLFxuLmhlcm8uaXMtc3VjY2VzcyAudGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5oZXJvLmlzLXN1Y2Nlc3MgLnN1YnRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLmhlcm8uaXMtc3VjY2VzcyAuc3VidGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1zdWNjZXNzIC5oZWFkZXIgLmNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uaGVyby5pcy1zdWNjZXNzIC5oZWFkZXItaWNvbixcbi5oZXJvLmlzLXN1Y2Nlc3MgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbikge1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmhlcm8uaXMtc3VjY2VzcyAuaGVhZGVyLWljb246aG92ZXIsIC5oZXJvLmlzLXN1Y2Nlc3MgLmhlYWRlci1pY29uLmlzLWFjdGl2ZSxcbi5oZXJvLmlzLXN1Y2Nlc3MgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbik6aG92ZXIsXG4uaGVyby5pcy1zdWNjZXNzIC5oZWFkZXItaXRlbSA+IGE6bm90KC5idXR0b24pLmlzLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uaGVyby5pcy1zdWNjZXNzIC50YWJzIGE6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby5pcy1zdWNjZXNzIC50YWJzIGxpLmlzLWFjdGl2ZSBhIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlcm8uaXMtc3VjY2VzcyAudGFicy5pcy1ib3hlZCBhLCAuaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLXRvZ2dsZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsIC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsIC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsIC5oZXJvLmlzLXN1Y2Nlc3MgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLCAuaGVyby5pcy1zdWNjZXNzIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzk3Y2Q3Njtcbn1cblxuLmhlcm8uaXMtc3VjY2Vzcy5pcy1ib2xkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzA5ZGVnLCAjOGVjYjQ1IDAlLCAjOTdjZDc2IDcxJSwgIzk2ZDg4NSAxMDAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgIzhlY2I0NSAwJSwgIzk3Y2Q3NiA3MSUsICM5NmQ4ODUgMTAwJSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZXJvLmlzLXN1Y2Nlc3MgLmhlYWRlci10b2dnbGUgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmhlcm8uaXMtc3VjY2VzcyAuaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5oZXJvLmlzLXN1Y2Nlc3MgLmhlYWRlci10b2dnbGUuaXMtYWN0aXZlIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5oZXJvLmlzLXN1Y2Nlc3MgLmhlYWRlci1tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiAjOTdjZDc2O1xuICB9XG4gIC5oZXJvLmlzLXN1Y2Nlc3MgLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG59XG5cbi5oZXJvLmlzLXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kOiAjZmNlNDczO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaGVyby5pcy13YXJuaW5nIC50aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5oZXJvLmlzLXdhcm5pbmcgLnRpdGxlIGEsXG4uaGVyby5pcy13YXJuaW5nIC50aXRsZSBzdHJvbmcge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmhlcm8uaXMtd2FybmluZyAuc3VidGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xufVxuXG4uaGVyby5pcy13YXJuaW5nIC5zdWJ0aXRsZSBzdHJvbmcge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaGVyby5pcy13YXJuaW5nIC5oZWFkZXIgLmNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uaGVyby5pcy13YXJuaW5nIC5oZWFkZXItaWNvbixcbi5oZXJvLmlzLXdhcm5pbmcgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbikge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5oZXJvLmlzLXdhcm5pbmcgLmhlYWRlci1pY29uOmhvdmVyLCAuaGVyby5pcy13YXJuaW5nIC5oZWFkZXItaWNvbi5pcy1hY3RpdmUsXG4uaGVyby5pcy13YXJuaW5nIC5oZWFkZXItaXRlbSA+IGE6bm90KC5idXR0b24pOmhvdmVyLFxuLmhlcm8uaXMtd2FybmluZyAuaGVhZGVyLWl0ZW0gPiBhOm5vdCguYnV0dG9uKS5pcy1hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby5pcy13YXJuaW5nIC50YWJzIGEge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5oZXJvLmlzLXdhcm5pbmcgLnRhYnMgYTpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5oZXJvLmlzLXdhcm5pbmcgLnRhYnMgbGkuaXMtYWN0aXZlIGEge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLWJveGVkIGEsIC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtdG9nZ2xlIGEge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLWJveGVkIGE6aG92ZXIsIC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtdG9nZ2xlIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsIC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGE6aG92ZXIsIC5oZXJvLmlzLXdhcm5pbmcgLnRhYnMuaXMtdG9nZ2xlIGxpLmlzLWFjdGl2ZSBhLCAuaGVyby5pcy13YXJuaW5nIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29sb3I6ICNmY2U0NzM7XG59XG5cbi5oZXJvLmlzLXdhcm5pbmcuaXMtYm9sZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMwOWRlZywgI2ZmYmQzZCAwJSwgI2ZjZTQ3MyA3MSUsICNmZmZlOGEgMTAwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDFkZWcsICNmZmJkM2QgMCUsICNmY2U0NzMgNzElLCAjZmZmZThhIDEwMCUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVyby5pcy13YXJuaW5nIC5oZWFkZXItdG9nZ2xlIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxuICAuaGVyby5pcy13YXJuaW5nIC5oZWFkZXItdG9nZ2xlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgLmhlcm8uaXMtd2FybmluZyAuaGVhZGVyLXRvZ2dsZS5pcy1hY3RpdmUgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB9XG4gIC5oZXJvLmlzLXdhcm5pbmcgLmhlYWRlci1tZW51IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmNlNDczO1xuICB9XG4gIC5oZXJvLmlzLXdhcm5pbmcgLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG59XG5cbi5oZXJvLmlzLWRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNlZDZjNjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlcm8uaXMtZGFuZ2VyIC50aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmhlcm8uaXMtZGFuZ2VyIC50aXRsZSBhLFxuLmhlcm8uaXMtZGFuZ2VyIC50aXRsZSBzdHJvbmcge1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLmhlcm8uaXMtZGFuZ2VyIC5zdWJ0aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG59XG5cbi5oZXJvLmlzLWRhbmdlciAuc3VidGl0bGUgc3Ryb25nIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1kYW5nZXIgLmhlYWRlciAuY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5oZXJvLmlzLWRhbmdlciAuaGVhZGVyLWljb24sXG4uaGVyby5pcy1kYW5nZXIgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbikge1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmhlcm8uaXMtZGFuZ2VyIC5oZWFkZXItaWNvbjpob3ZlciwgLmhlcm8uaXMtZGFuZ2VyIC5oZWFkZXItaWNvbi5pcy1hY3RpdmUsXG4uaGVyby5pcy1kYW5nZXIgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbik6aG92ZXIsXG4uaGVyby5pcy1kYW5nZXIgLmhlYWRlci1pdGVtID4gYTpub3QoLmJ1dHRvbikuaXMtYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlcm8uaXMtZGFuZ2VyIC50YWJzIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmhlcm8uaXMtZGFuZ2VyIC50YWJzIGE6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby5pcy1kYW5nZXIgLnRhYnMgbGkuaXMtYWN0aXZlIGEge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtYm94ZWQgYSwgLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBhIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtYm94ZWQgYTpob3ZlciwgLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaGVyby5pcy1kYW5nZXIgLnRhYnMuaXMtYm94ZWQgbGkuaXMtYWN0aXZlIGEsIC5oZXJvLmlzLWRhbmdlciAudGFicy5pcy1ib3hlZCBsaS5pcy1hY3RpdmUgYTpob3ZlciwgLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYSwgLmhlcm8uaXMtZGFuZ2VyIC50YWJzLmlzLXRvZ2dsZSBsaS5pcy1hY3RpdmUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogI2VkNmM2Mztcbn1cblxuLmhlcm8uaXMtZGFuZ2VyLmlzLWJvbGQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgzMDlkZWcsICNmMzJhM2UgMCUsICNlZDZjNjMgNzElLCAjZjM5Mzc2IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCAjZjMyYTNlIDAlLCAjZWQ2YzYzIDcxJSwgI2YzOTM3NiAxMDAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhlcm8uaXMtZGFuZ2VyIC5oZWFkZXItdG9nZ2xlIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gIC5oZXJvLmlzLWRhbmdlciAuaGVhZGVyLXRvZ2dsZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB9XG4gIC5oZXJvLmlzLWRhbmdlciAuaGVhZGVyLXRvZ2dsZS5pcy1hY3RpdmUgc3BhbiB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgLmhlcm8uaXMtZGFuZ2VyIC5oZWFkZXItbWVudSB7XG4gICAgYmFja2dyb3VuZDogI2VkNmM2MztcbiAgfVxuICAuaGVyby5pcy1kYW5nZXIgLmhlYWRlci1tZW51IC5oZWFkZXItaXRlbSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5oZXJvLmlzLWZ1bGxoZWlnaHQgLnRhYnMsIC5oZXJvLmlzLWxhcmdlIC50YWJzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmhlcm8uaXMtbWVkaXVtIC5oZXJvLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEyMHB4IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIHtcbiAgLmhlcm8uaXMtbWVkaXVtIC5oZXJvLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDEyMHB4IDA7XG4gIH1cbn1cblxuLmhlcm8uaXMtbGFyZ2UgLnRhYnMgYSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmhlcm8uaXMtbGFyZ2UgLmhlcm8tY29udGVudCB7XG4gICAgcGFkZGluZzogMjQwcHggMjBweDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODBweCkge1xuICAuaGVyby5pcy1sYXJnZSAuaGVyby1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyNDBweCAwO1xuICB9XG59XG5cbi5oZXJvLmlzLWZ1bGxoZWlnaHQge1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4uaGVyby5pcy1mdWxsaGVpZ2h0IC50YWJzIGEge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG5cbi5oZXJvLmlzLWZ1bGxoZWlnaHQgLmhlcm8tY29udGVudCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXg6IDE7XG4gICAgICAtbXMtZmxleDogMTtcbiAgICAgICAgICBmbGV4OiAxO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGVyby5pcy1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmhlcm8uaXMtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogNDBweCAyMHB4O1xufVxuXG4uc2VjdGlvbiArIC5zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjExLCAyMTQsIDIxOSwgMC41KTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgwcHgpIHtcbiAgLnNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDQwcHggMDtcbiAgfVxuICAuc2VjdGlvbi5pcy1tZWRpdW0ge1xuICAgIHBhZGRpbmc6IDEyMHB4IDA7XG4gIH1cbiAgLnNlY3Rpb24uaXMtbGFyZ2Uge1xuICAgIHBhZGRpbmc6IDI0MHB4IDA7XG4gIH1cbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY3ZmE7XG4gIHBhZGRpbmc6IDQwcHggMjBweCA4MHB4O1xufVxuXG4uZm9vdGVyIGEge1xuICBjb2xvcjogIzY5NzA3YTtcbn1cblxuLmZvb3RlciBhOmhvdmVyIHtcbiAgY29sb3I6ICMyMjIzMjQ7XG59XG5cbi5mb290ZXIgYTpub3QoLmljb24pIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2Q2ZGI7XG59XG5cbi5mb290ZXIgYTpub3QoLmljb24pOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFmYzhkYjtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWJ1bG1hLmNzcy5tYXAgKi8iXSwibWFwcGluZ3MiOiJBQ0FBLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUs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QUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHLENBQUM7RUFDYixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRztBQUNkLFVBQVUsQ0FBQyxHQUFHLENBQUM7RUFDYixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHLENBQUM7RUFDYixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsRUFBRTtBQUNiLFVBQVUsQ0FBQyxFQUFFLENBQUM7RUFDWixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHLENBQUM7RUFDYixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHO0FBQ2QsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHLENBQUM7RUFDYixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRztBQUNkLFVBQVUsQ0FBQyxHQUFHO0FBQ2QsVUFBVSxDQUFDLEdBQUc7QUFDZCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUc7QUFDZCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxFQUFFLENBQUM7RUFDWixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRztBQUNkLFVBQVUsQ0FBQyxHQUFHO0FBQ2QsVUFBVSxDQUFDLEdBQUc7QUFDZCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHLENBQUM7RUFDYixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHLENBQUM7RUFDYixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUc7QUFDZCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHO0FBQ2QsVUFBVSxDQUFDLEdBQUcsQ0FBQztFQUNiLEtBQUssRUFBRSxPQUFRLEdBQ2hCOztBQUVELFVBQVUsQ0FBQyxHQUFHO0FBQ2QsVUFBVSxDQUFDLEdBQUc7QUFDZCxVQUFVLENBQUMsR0FBRztBQUNkLFVBQVUsQ0FBQyxHQUFHLENBQUM7RUFDYixLQUFLLEVBQUUsT0FBUSxHQUNoQjs7QUFFRCxVQUFVLENBQUMsR0FBRyxDQUFDO0VBQ2IsS0FBSyxFQUFFLE9BQVEsR0FDaEI7O0FBRUQsU0FBUyxDQUFDO0VBQ1IsT0FBTyxFQUFFLEtBQU0sR0FDaEI7O0FBRUQsVUFBVSxDQUFDO0VBQ1QsT0FBTyxFQUFFLE1BQU8sR0FDakI7O0FBRUQsUUFBUSxDQUFDO0VBQ1AsT0FBTyxFQUFFLFdBQVk7RUFDckIsT0FBTyxFQUFFLFlBQWE7RUFDdEIsT0FBTyxFQUFFLFdBQVk7RUFDckIsT0FBTyxFQUFFLElBQUssR0FDZjs7QUFFRCxZQUFZLEFBQUEsTUFBTSxDQUFDO0VBQ2pCLEtBQUssRUFBRSxJQUFLO0VBQ1osT0FBTyxFQUFFLEdBQUk7RUFDYixPQUFPLEVBQUUsS0FBTSxHQUNoQjs7QUFFRCxlQUFlLENBQUM7RUFDZCxLQUFLLEVBQUUsSUFBSyxHQUNiOztBQUVELGdCQUFnQixDQUFDO0VBQ2YsS0FBSyxFQUFFLEtBQU0sR0FDZDs7QUFFRCxXQUFXLENBQUM7RUFDVixNQUFNLEVBQUUsQ0FBRTtFQUNWLElBQUksRUFBRSxDQUFFO0VBQ1IsUUFBUSxFQUFFLFFBQVM7RUFDbkIsS0FBSyxFQUFFLENBQUU7RUFDVCxHQUFHLEVBQUUsQ0FBRSxHQUNSOztBQUVELGFBQWEsQ0FBQztFQUNaLEtBQUssRUFBRSxJQUFLLEdBQ2I7O0FBRUQsaUJBQWlCLENBQUM7RUFDaEIsVUFBVSxFQUFFLE1BQU8sR0FDcEI7O0FBRUQsYUFBYSxDQUFDO0VBQ1osVUFBVSxFQUFFLElBQUssR0FDbEI7O0FBRUQsY0FBYyxDQUFDO0VBQ2IsVUFBVSxFQUFFLEtBQU0sR0FDbkI7O0FBRUQsTUFBTSxDQUFOLE1BQU0sTUFBTSxTQUFTLEVBQUUsS0FBSztFQUMxQixpQkFBaUIsQ0FBQztJQUNoQixPQUFPLEVBQUUsZUFBZ0IsR0FDMUI7O0FBR0gsTUFBTSxDQUFOLE1BQU0sTUFBTSxTQUFTLEVBQUUsS0FBSztFQUMxQixpQkFBaUIsQ0FBQztJQUNoQixPQUFPLEVBQUUsZUFBZ0IsR0FDMUI7O0FBR0gsTUFBTSxDQUFOLE1BQU0sTUFBTSxTQUFTLEVBQUUsS0FBSztFQUMxQixnQkFBZ0IsQ0FBQztJQUNmLE9BQU8sRUFBRSxlQUFnQixHQUMxQjs7QUFHSCxNQUFNLENBQU4sTUFBTSxNQUFNLFNBQVMsRUFBRSxLQUFLO0VBQzFCLGtCQUFrQixDQUFDO0lBQ2pCLE9BQU8sRUFBRSxlQUFnQixHQUMxQjs7QUFHSCxZQUFZLENBQUM7RUFDWCxjQUFjLEVBQUUsSUFBSyxHQUN0Qjs7QUFFRCxjQUFjLENBQUM7RUFDYixNQUFNLEVBQUUsWUFBYSxHQUN0Qjs7QUFFRCxnQkFBZ0IsQ0FBQztFQUNmLHFCQUFxQixFQUFFLElBQUs7RUFDNUIsbUJBQW1CLEVBQUUsSUFBSztFQUMxQixnQkFBZ0IsRUFBRSxJQUFLO0VBQ3ZCLGVBQWUsRUFBRSxJQUFLO0VBQ3RCLFdBQVcsRUFBRSxJQUFLLEdBQ25COztBQUVELE1BQU0sRUFBRSxTQUFTLENBQUM7RUFDaEIsZUFBZSxFQUFFLElBQUs7RUFDdEIsa0JBQWtCLEVBQUUsSUFBSztFQUN6QixVQUFVLEVBQUUsS0FBTTtFQUNsQixNQUFNLEVBQUUsaUJBQWtCO0VBQzFCLGFBQWEsRUFBRSxHQUFJO0VBQ25CLEtBQUssRUFBRSxPQUFRO0VBQ2YsT0FBTyxFQUFFLFlBQWE7RUFDdEIsU0FBUyxFQUFFLElBQUs7RUFDaEIsTUFBTSxFQUFFLElBQUs7RUFDYixXQUFXLEVBQUUsSUFBSztFQUNsQixPQUFPLEVBQUUsT0FBUTtFQUNqQixRQUFRLEVBQUUsUUFBUztFQUNuQixjQUFjLEVBQUUsR0FBSTtFQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFJO0VBQ2hDLE9BQU8sRUFBRSxLQUFNO0VBQ2YsU0FBUyxFQUFFLElBQUs7RUFDaEIsS0FBSyxFQUFFLElBQUssR0FDYjs7QUFFRCxNQUFNLEFBQUEsTUFBTSxFQUFFLFNBQVMsQUFBQSxNQUFNLENBQUM7RUFDNUIsWUFBWSxFQUFFLE9BQVEsR0FDdkI7O0FBRUQsTUFBTSxBQUFBLE9BQU8sRUFBRSxTQUFTLEFBQUEsT0FBTyxFQUFFLE1BQU0sQUFBQSxNQUFNLEVBQUUsU0FBUyxBQUFBLE1BQU0sQ0FBQztFQUM3RCxZQUFZLEVBQUUsT0FBUTtFQUN0QixPQUFPLEVBQUUsSUFBSyxHQUNmOztBQUVELE1BQU0sQ0FBQSxBQUFBLFFBQUMsQUFBQSxJQUFXLEFBQUEsUUFBQyxBQUFBLENBQVMsU0FBUyxFQUFFLE1BQU0sQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLE1BQU0sR0FBRSxBQUFBLFFBQUMsQUFBQSxDQUFTLFNBQVMsQUFBQSxNQUFNLENBQUM7RUFDdkYsVUFBVSxFQUFFLE9BQVE7RUFDcEIsWUFBWSxFQUFFLE9BQVEsR0FDdkI7O0FBRUQsTUFBTSxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsa0JBQWtCLEdBQUUsQUFBQSxRQUFDLEFBQUEsQ0FBUyxTQUFTLEFBQUEsa0JBQWtCLEVBQUUsTUFBTSxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsTUFBTSxBQUFBLGtCQUFrQixHQUFFLEFBQUEsUUFBQyxBQUFBLENBQVMsU0FBUyxBQUFBLE1BQU0sQUFBQSxrQkFBa0IsQ0FBQztFQUMvSixLQUFLLEVBQUUscUJBQUksR0FDWjs7QUFFRCxNQUFNLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUywyQkFBMkIsR0FBRSxBQUFBLFFBQUMsQUFBQSxDQUFTLFNBQVMsQUFBQSwyQkFBMkIsRUFBRSxNQUFNLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxNQUFNLEFBQUEsMkJBQTJCLEdBQUUsQUFBQSxRQUFDLEFBQUEsQ0FBUyxTQUFTLEFBQUEsTUFBTSxBQUFBLDJCQUEyQixDQUFDO0VBQ25NLEtBQUssRUFBRSxxQkFBSSxHQUNaOztBQUVELE1BQU0sQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLGlCQUFpQixHQUFFLEFBQUEsUUFBQyxBQUFBLENBQVMsU0FBUyxBQUFBLGlCQUFpQixFQUFFLE1BQU0sQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLE1BQU0sQUFBQSxpQkFBaUIsR0FBRSxBQUFBLFFBQUMsQUFBQSxDQUFTLFNBQVMsQUFBQSxNQUFNLEFBQUEsaUJBQWlCLENBQUM7RUFDM0osS0FBSyxFQUFFLHFCQUFJLEdBQ1o7O0FBRUQsTUFBTSxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsc0JBQXNCLEdBQUUsQUFBQSxRQUFDLEFBQUEsQ0FBUyxTQUFTLEFBQUEsc0JBQXNCLEVBQUUsTUFBTSxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsTUFBTSxBQUFBLHNCQUFzQixHQUFFLEFBQUEsUUFBQyxBQUFBLENBQVMsU0FBUyxBQUFBLE1BQU0sQUFBQSxzQkFBc0IsQ0FBQztFQUMvSyxLQUFLLEVBQUUscUJBQUksR0FDWjs7QUFFRCxNQUFNLENBQUEsQUFBQSxJQUFDLENBQUssUUFBUSxBQUFiLElBQWdCLEFBQUEsSUFBQyxDQUFLLFFBQVEsQUFBYixDQUFjLFNBQVMsQ0FBQztFQUM5QyxhQUFhLEVBQUUsUUFBUyxHQUN6Qjs7QUFFRCxNQUFNLEFBQUEsUUFBUSxFQUFFLFFBQVEsQUFBQSxTQUFTLENBQUM7RUFDaEMsTUFBTSxFQUFFLElBQUs7RUFDYixVQUFVLEVBQUUsSUFBSztFQUNqQixPQUFPLEVBQUUsT0FBUSxHQUNsQjs7QUFFRCxNQUFNLEFBQUEsU0FBUyxFQUFFLFNBQVMsQUFBQSxTQUFTLENBQUM7RUFDbEMsYUFBYSxFQUFFLEdBQUk7RUFDbkIsU0FBUyxFQUFFLElBQUs7RUFDaEIsTUFBTSxFQUFFLElBQUs7RUFDYixXQUFXLEVBQUUsSUFBSztFQUNsQixPQUFPLEVBQUUsT0FBUSxHQUNsQjs7QUFFRCxNQUFNLEFBQUEsU0FBUyxBQUFBLFFBQVEsRUFBRSxTQUFTLEFBQUEsUUFBUSxBQUFBLFNBQVMsQ0FBQztFQUNsRCxPQUFPLEVBQUUsT0FBUSxHQUNsQjs7QUFFRCxNQUFNLEFBQUEsVUFBVSxFQUFFLFVBQVUsQUFBQSxTQUFTLENBQUM7RUFDcEMsU0FBUyxFQUFFLElBQUs7RUFDaEIsTUFBTSxFQUFFLElBQUs7RUFDYixXQUFXLEVBQUUsSUFBSztFQUNsQixPQUFPLEVBQUUsUUFBUyxHQUNuQjs7QUFFRCxNQUFNLEFBQUEsVUFBVSxBQUFBLFFBQVEsRUFBRSxVQUFVLEFBQUEsUUFBUSxBQUFBLFNBQVMsQ0FBQztFQUNwRCxPQUFPLEVBQUUsUUFBUyxHQUNuQjs7QUFFRCxNQUFNLEFBQUEsU0FBUyxFQUFFLFNBQVMsQUFBQSxTQUFTLENBQUM7RUFDbEMsU0FBUyxFQUFFLElBQUs7RUFDaEIsTUFBTSxFQUFFLElBQUs7RUFDYixXQUFXLEVBQUUsSUFBSztFQUNsQixPQUFPLEVBQUUsUUFBUyxHQUNuQjs7QUFFRCxNQUFNLEFBQUEsU0FBUyxBQUFBLFFBQVEsRUFBRSxTQUFTLEFBQUEsUUFBUSxBQUFBLFNBQVMsQ0FBQztFQUNsRCxPQUFPLEVBQUUsUUFBUyxHQUNuQjs7QUFFRCxNQUFNLEFBQUEsYUFBYSxFQUFFLGFBQWEsQUFBQSxTQUFTLENBQUM7RUFDMUMsT0FBTyxFQUFFLEtBQU07RUFDZixLQUFLLEVBQUUsSUFBSyxHQUNiOztBQUVELE1BQU0sQUFBQSxVQUFVLEVBQUUsVUFBVSxBQUFBLFNBQVMsQ0FBQztFQUNwQyxPQUFPLEVBQUUsTUFBTztFQUNoQixLQUFLLEVBQUUsSUFBSyxHQUNiOztBQUVELFNBQVMsQ0FBQztFQUNSLFdBQVcsRUFBRSxHQUFJO0VBQ2pCLFVBQVUsRUFBRSxLQUFNO0VBQ2xCLFNBQVMsRUFBRSxJQUFLO0VBQ2hCLFVBQVUsRUFBRSxLQUFNO0VBQ2xCLFNBQVMsRUFBRSxJQUFLO0VBQ2hCLE9BQU8sRUFBRSxJQUFLO0VBQ2QsTUFBTSxFQUFFLFFBQVMsR0FDbEI7O0FBRUQsU0FBUyxFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUM7RUFDaEMsTUFBTSxFQUFFLE9BQVE7RUFDaEIsT0FBTyxFQUFFLFlBQWE7RUFDdEIsV0FBVyxFQUFFLElBQUs7RUFDbEIsWUFBWSxFQUFFLElBQUs7RUFDbkIsUUFBUSxFQUFFLFFBQVM7RUFDbkIsY0FBYyxFQUFFLEdBQUksR0FDckI7O0FBRUQsU0FBUyxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUM7RUFDbEQsZUFBZSxFQUFFLElBQUs7RUFDdEIsa0JBQWtCLEVBQUUsSUFBSztFQUN6QixVQUFVLEVBQUUsS0FBTTtFQUNsQixNQUFNLEVBQUUsaUJBQWtCO0VBQzFCLGFBQWEsRUFBRSxHQUFJO0VBQ25CLEtBQUssRUFBRSxPQUFRO0VBQ2YsT0FBTyxFQUFFLFlBQWE7RUFDdEIsU0FBUyxFQUFFLElBQUs7RUFDaEIsTUFBTSxFQUFFLElBQUs7RUFDYixXQUFXLEVBQUUsSUFBSztFQUNsQixPQUFPLEVBQUUsT0FBUTtFQUNqQixRQUFRLEVBQUUsUUFBUztFQUNuQixjQUFjLEVBQUUsR0FBSTtFQUNwQixhQUFhLEVBQUUsR0FBSTtFQUNuQixVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGtCQUFJO0VBQ2hDLE1BQU0sRUFBRSxPQUFRO0VBQ2hCLEtBQUssRUFBRSxJQUFLO0VBQ1osTUFBTSxFQUFFLElBQUs7RUFDYixJQUFJLEVBQUUsQ0FBRTtFQUNSLE9BQU8sRUFBRSxJQUFLO0VBQ2QsT0FBTyxFQUFFLENBQUU7RUFDWCxRQUFRLEVBQUUsUUFBUztFQUNuQixHQUFHLEVBQUUsR0FBSTtFQUNULEtBQUssRUFBRSxJQUFLLEdBQ2I7O0FBRUQsU0FBUyxDQUFDLEtBQUssQUFBQSxNQUFNLEVBQUUsY0FBYyxDQUFDLEtBQUssQUFBQSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssQUFBQSxNQUFNLENBQUM7RUFDcEUsWUFBWSxFQUFFLE9BQVEsR0FDdkI7O0FBRUQsU0FBUyxDQUFDLEtBQUssQUFBQSxPQUFPLEVBQUUsY0FBYyxDQUFDLEtBQUssQUFBQSxPQUFPLEVBQUUsTUFBTSxDQUFDLEtBQUssQUFBQSxPQUFPLEVBQUUsU0FBUyxDQUFDLEtBQUssQUFBQSxNQUFNLEVBQUUsY0FBYyxDQUFDLEtBQUssQUFBQSxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssQUFBQSxNQUFNLENBQUM7RUFDOUksWUFBWSxFQUFFLE9BQVE7RUFDdEIsT0FBTyxFQUFFLElBQUssR0FDZjs7QUFFRCxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLEdBQVcsY0FBYyxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxHQUFXLE1BQU0sQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsR0FBVyxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLE1BQU0sQ0FBQztFQUNyTCxVQUFVLEVBQUUsT0FBUTtFQUNwQixZQUFZLEVBQUUsT0FBUSxHQUN2Qjs7QUFFRCxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxrQkFBa0IsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsTUFBTSxBQUFBLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxNQUFNLEFBQUEsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLE1BQU0sQUFBQSxrQkFBa0IsQ0FBQztFQUNqUyxLQUFLLEVBQUUscUJBQUksR0FDWjs7QUFFRCxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsMkJBQTJCLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLDJCQUEyQixFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUywyQkFBMkIsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsTUFBTSxBQUFBLDJCQUEyQixFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxNQUFNLEFBQUEsMkJBQTJCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLE1BQU0sQUFBQSwyQkFBMkIsQ0FBQztFQUN2VixLQUFLLEVBQUUscUJBQUksR0FDWjs7QUFFRCxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsTUFBTSxBQUFBLGlCQUFpQixFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxNQUFNLEFBQUEsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLE1BQU0sQUFBQSxpQkFBaUIsQ0FBQztFQUMzUixLQUFLLEVBQUUscUJBQUksR0FDWjs7QUFFRCxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxzQkFBc0IsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFBLEFBQUEsUUFBQyxBQUFBLENBQVMsTUFBTSxBQUFBLHNCQUFzQixFQUFFLGNBQWMsQ0FBQyxLQUFLLENBQUEsQUFBQSxRQUFDLEFBQUEsQ0FBUyxNQUFNLEFBQUEsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQSxBQUFBLFFBQUMsQUFBQSxDQUFTLE1BQU0sQUFBQSxzQkFBc0IsQ0FBQztFQUN6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WSxHQUFHLENBQUMsQUFBQSxJQUFLLENBQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQztFQUN0RCxPQUFPLEVBQUUsQ0FBRSxHQUNaOztBQUVELEtBQUssQUFBQSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztFQUN0QixLQUFLLEVBQUUsS0FBTTtFQUNiLE9BQU8sRUFBRSxHQUFJLEdBQ2Q7O0FBRUQsS0FBSyxBQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUFBLE1BQU0sQ0FBQztFQUM1QixPQUFPLEVBQUUsQ0FBRSxHQUNaOztBQUVELEtBQUssQUFBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQUFBQSxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ25DLE9BQU8sRUFBRSxDQUFFLEdBQ1o7O0FBRUQsS0FBSyxBQUFBLFVBQVUsQ0FBQyxLQUFLLEFBQUEsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEFBQUEsVUFBVSxDQUFDLEtBQUssQUFBQSxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ2xFLEtBQUssRUFBRSxLQUFNLEdBQ2Q7O0FBRUQsS0FBSyxBQUFBLFVBQVUsQ0FBQyxLQUFLLEFBQUEsU0FBUyxDQUFDLENBQUMsQUFBQSxNQUFNLEVBQUUsS0FBSyxBQUFBLFVBQVUsQ0FBQyxLQUFLLEFBQUEsVUFBVSxDQUFDLENBQUMsQUFBQSxNQUFNLENBQUM7RUFDOUUsVUFBVSxFQUFFLGtCQUFJLEdBQ2pCOztBQUVELEtBQUssQUFBQSxVQUFVLENBQUMsS0FBSyxBQUFBLFNBQVMsQ0FBQyxFQUFFLEFBQUEsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLEFBQUEsVUFBVSxDQUFDLEtBQUssQUFBQSxTQUFTLENBQUMsRUFBRSxBQUFBLFVBQVUsQ0FBQyxDQUFDLEFBQUEsTUFBTSxFQUFFLEtBQUssQUFBQSxVQUFVLENBQUMsS0FBSyxBQUFBLFVBQVUsQ0FBQyxFQUFFLEFBQUEsVUFBVSxDQUFDLENBQUMsRUFBRSxLQUFLLEFBQUEsVUFBVSxDQUFDLEtBQUssQUFBQSxVQUFVLENBQUMsRUFBRSxBQUFB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 */", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "6521149acb5612e7c5cabb99eb830d5a.png";

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "aeff126f954d94a967fab1e91665673a.png";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0bc46242a50506d78013dfc2904db9a3.png";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a7bc8363fb5e55b10ef8473def308c1c.png";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "d2e169302030ade974cb71139543cd39.png";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* Riot v2.3.16, @license MIT */

	;(function(window, undefined) {
	  'use strict';
	var riot = { version: 'v2.3.16', settings: {} },
	  // be aware, internal usage
	  // ATTENTION: prefix the global dynamic variables with `__`

	  // counter to give a unique id to all the Tag instances
	  __uid = 0,
	  // tags instances cache
	  __virtualDom = [],
	  // tags implementation cache
	  __tagImpl = {},

	  /**
	   * Const
	   */
	  GLOBAL_MIXIN = '__global_mixin',

	  // riot specific prefixes
	  RIOT_PREFIX = 'riot-',
	  RIOT_TAG = RIOT_PREFIX + 'tag',

	  // for typeof == '' comparisons
	  T_STRING = 'string',
	  T_OBJECT = 'object',
	  T_UNDEF  = 'undefined',
	  T_FUNCTION = 'function',
	  // special native tags that cannot be treated like the others
	  SPECIAL_TAGS_REGEX = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
	  RESERVED_WORDS_BLACKLIST = ['_item', '_id', '_parent', 'update', 'root', 'mount', 'unmount', 'mixin', 'isMounted', 'isLoop', 'tags', 'parent', 'opts', 'trigger', 'on', 'off', 'one'],

	  // version# for IE 8-11, 0 for others
	  IE_VERSION = (window && window.document || {}).documentMode | 0
	/* istanbul ignore next */
	riot.observable = function(el) {

	  /**
	   * Extend the original object or create a new empty one
	   * @type { Object }
	   */

	  el = el || {}

	  /**
	   * Private variables and methods
	   */
	  var callbacks = {},
	    slice = Array.prototype.slice,
	    onEachEvent = function(e, fn) { e.replace(/\S+/g, fn) }

	  // extend the object adding the observable methods
	  Object.defineProperties(el, {
	    /**
	     * Listen to the given space separated list of `events` and execute the `callback` each time an event is triggered.
	     * @param  { String } events - events ids
	     * @param  { Function } fn - callback function
	     * @returns { Object } el
	     */
	    on: {
	      value: function(events, fn) {
	        if (typeof fn != 'function')  return el

	        onEachEvent(events, function(name, pos) {
	          (callbacks[name] = callbacks[name] || []).push(fn)
	          fn.typed = pos > 0
	        })

	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    /**
	     * Removes the given space separated list of `events` listeners
	     * @param   { String } events - events ids
	     * @param   { Function } fn - callback function
	     * @returns { Object } el
	     */
	    off: {
	      value: function(events, fn) {
	        if (events == '*' && !fn) callbacks = {}
	        else {
	          onEachEvent(events, function(name) {
	            if (fn) {
	              var arr = callbacks[name]
	              for (var i = 0, cb; cb = arr && arr[i]; ++i) {
	                if (cb == fn) arr.splice(i--, 1)
	              }
	            } else delete callbacks[name]
	          })
	        }
	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    /**
	     * Listen to the given space separated list of `events` and execute the `callback` at most once
	     * @param   { String } events - events ids
	     * @param   { Function } fn - callback function
	     * @returns { Object } el
	     */
	    one: {
	      value: function(events, fn) {
	        function on() {
	          el.off(events, on)
	          fn.apply(el, arguments)
	        }
	        return el.on(events, on)
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    },

	    /**
	     * Execute all callback functions that listen to the given space separated list of `events`
	     * @param   { String } events - events ids
	     * @returns { Object } el
	     */
	    trigger: {
	      value: function(events) {

	        // getting the arguments
	        var arglen = arguments.length - 1,
	          args = new Array(arglen),
	          fns

	        for (var i = 0; i < arglen; i++) {
	          args[i] = arguments[i + 1] // skip first argument
	        }

	        onEachEvent(events, function(name) {

	          fns = slice.call(callbacks[name] || [], 0)

	          for (var i = 0, fn; fn = fns[i]; ++i) {
	            if (fn.busy) return
	            fn.busy = 1
	            fn.apply(el, fn.typed ? [name].concat(args) : args)
	            if (fns[i] !== fn) { i-- }
	            fn.busy = 0
	          }

	          if (callbacks['*'] && name != '*')
	            el.trigger.apply(el, ['*', name].concat(args))

	        })

	        return el
	      },
	      enumerable: false,
	      writable: false,
	      configurable: false
	    }
	  })

	  return el

	}
	/* istanbul ignore next */
	;(function(riot) {

	/**
	 * Simple client-side router
	 * @module riot-route
	 */


	var RE_ORIGIN = /^.+?\/+[^\/]+/,
	  EVENT_LISTENER = 'EventListener',
	  REMOVE_EVENT_LISTENER = 'remove' + EVENT_LISTENER,
	  ADD_EVENT_LISTENER = 'add' + EVENT_LISTENER,
	  HAS_ATTRIBUTE = 'hasAttribute',
	  REPLACE = 'replace',
	  POPSTATE = 'popstate',
	  HASHCHANGE = 'hashchange',
	  TRIGGER = 'trigger',
	  MAX_EMIT_STACK_LEVEL = 3,
	  win = typeof window != 'undefined' && window,
	  doc = typeof document != 'undefined' && document,
	  hist = win && history,
	  loc = win && (hist.location || win.location), // see html5-history-api
	  prot = Router.prototype, // to minify more
	  clickEvent = doc && doc.ontouchstart ? 'touchstart' : 'click',
	  started = false,
	  central = riot.observable(),
	  routeFound = false,
	  debouncedEmit,
	  base, current, parser, secondParser, emitStack = [], emitStackLevel = 0

	/**
	 * Default parser. You can replace it via router.parser method.
	 * @param {string} path - current path (normalized)
	 * @returns {array} array
	 */
	function DEFAULT_PARSER(path) {
	  return path.split(/[/?#]/)
	}

	/**
	 * Default parser (second). You can replace it via router.parser method.
	 * @param {string} path - current path (normalized)
	 * @param {string} filter - filter string (normalized)
	 * @returns {array} array
	 */
	function DEFAULT_SECOND_PARSER(path, filter) {
	  var re = new RegExp('^' + filter[REPLACE](/\*/g, '([^/?#]+?)')[REPLACE](/\.\./, '.*') + '$'),
	    args = path.match(re)

	  if (args) return args.slice(1)
	}

	/**
	 * Simple/cheap debounce implementation
	 * @param   {function} fn - callback
	 * @param   {number} delay - delay in seconds
	 * @returns {function} debounced function
	 */
	function debounce(fn, delay) {
	  var t
	  return function () {
	    clearTimeout(t)
	    t = setTimeout(fn, delay)
	  }
	}

	/**
	 * Set the window listeners to trigger the routes
	 * @param {boolean} autoExec - see route.start
	 */
	function start(autoExec) {
	  debouncedEmit = debounce(emit, 1)
	  win[ADD_EVENT_LISTENER](POPSTATE, debouncedEmit)
	  win[ADD_EVENT_LISTENER](HASHCHANGE, debouncedEmit)
	  doc[ADD_EVENT_LISTENER](clickEvent, click)
	  if (autoExec) emit(true)
	}

	/**
	 * Router class
	 */
	function Router() {
	  this.$ = []
	  riot.observable(this) // make it observable
	  central.on('stop', this.s.bind(this))
	  central.on('emit', this.e.bind(this))
	}

	function normalize(path) {
	  return path[REPLACE](/^\/|\/$/, '')
	}

	function isString(str) {
	  return typeof str == 'string'
	}

	/**
	 * Get the part after domain name
	 * @param {string} href - fullpath
	 * @returns {string} path from root
	 */
	function getPathFromRoot(href) {
	  return (href || loc.href || '')[REPLACE](RE_ORIGIN, '')
	}

	/**
	 * Get the part after base
	 * @param {string} href - fullpath
	 * @returns {string} path from base
	 */
	function getPathFromBase(href) {
	  return base[0] == '#'
	    ? (href || loc.href || '').split(base)[1] || ''
	    : getPathFromRoot(href)[REPLACE](base, '')
	}

	function emit(force) {
	  // the stack is needed for redirections
	  var isRoot = emitStackLevel == 0
	  if (MAX_EMIT_STACK_LEVEL <= emitStackLevel) return

	  emitStackLevel++
	  emitStack.push(function() {
	    var path = getPathFromBase()
	    if (force || path != current) {
	      central[TRIGGER]('emit', path)
	      current = path
	    }
	  })
	  if (isRoot) {
	    while (emitStack.length) {
	      emitStack[0]()
	      emitStack.shift()
	    }
	    emitStackLevel = 0
	  }
	}

	function click(e) {
	  if (
	    e.which != 1 // not left click
	    || e.metaKey || e.ctrlKey || e.shiftKey // or meta keys
	    || e.defaultPrevented // or default prevented
	  ) return

	  var el = e.target
	  while (el && el.nodeName != 'A') el = el.parentNode
	  if (
	    !el || el.nodeName != 'A' // not A tag
	    || el[HAS_ATTRIBUTE]('download') // has download attr
	    || !el[HAS_ATTRIBUTE]('href') // has no href attr
	    || el.target && el.target != '_self' // another window or frame
	    || el.href.indexOf(loc.href.match(RE_ORIGIN)[0]) == -1 // cross origin
	  ) return

	  if (el.href != loc.href) {
	    if (
	      el.href.split('#')[0] == loc.href.split('#')[0] // internal jump
	      || base != '#' && getPathFromRoot(el.href).indexOf(base) !== 0 // outside of base
	      || !go(getPathFromBase(el.href), el.title || doc.title) // route not found
	    ) return
	  }

	  e.preventDefault()
	}

	/**
	 * Go to the path
	 * @param {string} path - destination path
	 * @param {string} title - page title
	 * @param {boolean} shouldReplace - use replaceState or pushState
	 * @returns {boolean} - route not found flag
	 */
	function go(path, title, shouldReplace) {
	  if (hist) { // if a browser
	    path = base + normalize(path)
	    title = title || doc.title
	    // browsers ignores the second parameter `title`
	    shouldReplace
	      ? hist.replaceState(null, title, path)
	      : hist.pushState(null, title, path)
	    // so we need to set it manually
	    doc.title = title
	    routeFound = false
	    emit()
	    return routeFound
	  }

	  // Server-side usage: directly execute handlers for the path
	  return central[TRIGGER]('emit', getPathFromBase(path))
	}

	/**
	 * Go to path or set action
	 * a single string:                go there
	 * two strings:                    go there with setting a title
	 * two strings and boolean:        replace history with setting a title
	 * a single function:              set an action on the default route
	 * a string/RegExp and a function: set an action on the route
	 * @param {(string|function)} first - path / action / filter
	 * @param {(string|RegExp|function)} second - title / action
	 * @param {boolean} third - replace flag
	 */
	prot.m = function(first, second, third) {
	  if (isString(first) && (!second || isString(second))) go(first, second, third || false)
	  else if (second) this.r(first, second)
	  else this.r('@', first)
	}

	/**
	 * Stop routing
	 */
	prot.s = function() {
	  this.off('*')
	  this.$ = []
	}

	/**
	 * Emit
	 * @param {string} path - path
	 */
	prot.e = function(path) {
	  this.$.concat('@').some(function(filter) {
	    var args = (filter == '@' ? parser : secondParser)(normalize(path), normalize(filter))
	    if (typeof args != 'undefined') {
	      this[TRIGGER].apply(null, [filter].concat(args))
	      return routeFound = true // exit from loop
	    }
	  }, this)
	}

	/**
	 * Register route
	 * @param {string} filter - filter for matching to url
	 * @param {function} action - action to register
	 */
	prot.r = function(filter, action) {
	  if (filter != '@') {
	    filter = '/' + normalize(filter)
	    this.$.push(filter)
	  }
	  this.on(filter, action)
	}

	var mainRouter = new Router()
	var route = mainRouter.m.bind(mainRouter)

	/**
	 * Create a sub router
	 * @returns {function} the method of a new Router object
	 */
	route.create = function() {
	  var newSubRouter = new Router()
	  // stop only this sub-router
	  newSubRouter.m.stop = newSubRouter.s.bind(newSubRouter)
	  // return sub-router's main method
	  return newSubRouter.m.bind(newSubRouter)
	}

	/**
	 * Set the base of url
	 * @param {(str|RegExp)} arg - a new base or '#' or '#!'
	 */
	route.base = function(arg) {
	  base = arg || '#'
	  current = getPathFromBase() // recalculate current path
	}

	/** Exec routing right now **/
	route.exec = function() {
	  emit(true)
	}

	/**
	 * Replace the default router to yours
	 * @param {function} fn - your parser function
	 * @param {function} fn2 - your secondParser function
	 */
	route.parser = function(fn, fn2) {
	  if (!fn && !fn2) {
	    // reset parser for testing...
	    parser = DEFAULT_PARSER
	    secondParser = DEFAULT_SECOND_PARSER
	  }
	  if (fn) parser = fn
	  if (fn2) secondParser = fn2
	}

	/**
	 * Helper function to get url query as an object
	 * @returns {object} parsed query
	 */
	route.query = function() {
	  var q = {}
	  var href = loc.href || current
	  href[REPLACE](/[?&](.+?)=([^&]*)/g, function(_, k, v) { q[k] = v })
	  return q
	}

	/** Stop routing **/
	route.stop = function () {
	  if (started) {
	    if (win) {
	      win[REMOVE_EVENT_LISTENER](POPSTATE, debouncedEmit)
	      win[REMOVE_EVENT_LISTENER](HASHCHANGE, debouncedEmit)
	      doc[REMOVE_EVENT_LISTENER](clickEvent, click)
	    }
	    central[TRIGGER]('stop')
	    started = false
	  }
	}

	/**
	 * Start routing
	 * @param {boolean} autoExec - automatically exec after starting if true
	 */
	route.start = function (autoExec) {
	  if (!started) {
	    if (win) {
	      if (document.readyState == 'complete') start(autoExec)
	      // the timeout is needed to solve
	      // a weird safari bug https://github.com/riot/route/issues/33
	      else win[ADD_EVENT_LISTENER]('load', function() {
	        setTimeout(function() { start(autoExec) }, 1)
	      })
	    }
	    started = true
	  }
	}

	/** Prepare the router **/
	route.base()
	route.parser()

	riot.route = route
	})(riot)
	/* istanbul ignore next */

	/**
	 * The riot template engine
	 * @version v2.3.21
	 */

	/**
	 * riot.util.brackets
	 *
	 * - `brackets    ` - Returns a string or regex based on its parameter
	 * - `brackets.set` - Change the current riot brackets
	 *
	 * @module
	 */

	var brackets = (function (UNDEF) {

	  var
	    REGLOB = 'g',

	    R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,

	    R_STRINGS = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,

	    S_QBLOCKS = R_STRINGS.source + '|' +
	      /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + '|' +
	      /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,

	    FINDBRACES = {
	      '(': RegExp('([()])|'   + S_QBLOCKS, REGLOB),
	      '[': RegExp('([[\\]])|' + S_QBLOCKS, REGLOB),
	      '{': RegExp('([{}])|'   + S_QBLOCKS, REGLOB)
	    },

	    DEFAULT = '{ }'

	  var _pairs = [
	    '{', '}',
	    '{', '}',
	    /{[^}]*}/,
	    /\\([{}])/g,
	    /\\({)|{/g,
	    RegExp('\\\\(})|([[({])|(})|' + S_QBLOCKS, REGLOB),
	    DEFAULT,
	    /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,
	    /(^|[^\\]){=[\S\s]*?}/
	  ]

	  var
	    cachedBrackets = UNDEF,
	    _regex,
	    _cache = [],
	    _settings

	  function _loopback (re) { return re }

	  function _rewrite (re, bp) {
	    if (!bp) bp = _cache
	    return new RegExp(
	      re.source.replace(/{/g, bp[2]).replace(/}/g, bp[3]), re.global ? REGLOB : ''
	    )
	  }

	  function _create (pair) {
	    if (pair === DEFAULT) return _pairs

	    var arr = pair.split(' ')

	    if (arr.length !== 2 || /[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(pair)) {
	      throw new Error('Unsupported brackets "' + pair + '"')
	    }
	    arr = arr.concat(pair.replace(/(?=[[\]()*+?.^$|])/g, '\\').split(' '))

	    arr[4] = _rewrite(arr[1].length > 1 ? /{[\S\s]*?}/ : _pairs[4], arr)
	    arr[5] = _rewrite(pair.length > 3 ? /\\({|})/g : _pairs[5], arr)
	    arr[6] = _rewrite(_pairs[6], arr)
	    arr[7] = RegExp('\\\\(' + arr[3] + ')|([[({])|(' + arr[3] + ')|' + S_QBLOCKS, REGLOB)
	    arr[8] = pair
	    return arr
	  }

	  function _brackets (reOrIdx) {
	    return reOrIdx instanceof RegExp ? _regex(reOrIdx) : _cache[reOrIdx]
	  }

	  _brackets.split = function split (str, tmpl, _bp) {
	    // istanbul ignore next: _bp is for the compiler
	    if (!_bp) _bp = _cache

	    var
	      parts = [],
	      match,
	      isexpr,
	      start,
	      pos,
	      re = _bp[6]

	    isexpr = start = re.lastIndex = 0

	    while (match = re.exec(str)) {

	      pos = match.index

	      if (isexpr) {

	        if (match[2]) {
	          re.lastIndex = skipBraces(str, match[2], re.lastIndex)
	          continue
	        }
	        if (!match[3])
	          continue
	      }

	      if (!match[1]) {
	        unescapeStr(str.slice(start, pos))
	        start = re.lastIndex
	        re = _bp[6 + (isexpr ^= 1)]
	        re.lastIndex = start
	      }
	    }

	    if (str && start < str.length) {
	      unescapeStr(str.slice(start))
	    }

	    return parts

	    function unescapeStr (s) {
	      if (tmpl || isexpr)
	        parts.push(s && s.replace(_bp[5], '$1'))
	      else
	        parts.push(s)
	    }

	    function skipBraces (s, ch, ix) {
	      var
	        match,
	        recch = FINDBRACES[ch]

	      recch.lastIndex = ix
	      ix = 1
	      while (match = recch.exec(s)) {
	        if (match[1] &&
	          !(match[1] === ch ? ++ix : --ix)) break
	      }
	      return ix ? s.length : recch.lastIndex
	    }
	  }

	  _brackets.hasExpr = function hasExpr (str) {
	    return _cache[4].test(str)
	  }

	  _brackets.loopKeys = function loopKeys (expr) {
	    var m = expr.match(_cache[9])
	    return m
	      ? { key: m[1], pos: m[2], val: _cache[0] + m[3].trim() + _cache[1] }
	      : { val: expr.trim() }
	  }

	  _brackets.hasRaw = function (src) {
	    return _cache[10].test(src)
	  }

	  _brackets.array = function array (pair) {
	    return pair ? _create(pair) : _cache
	  }

	  function _reset (pair) {
	    if ((pair || (pair = DEFAULT)) !== _cache[8]) {
	      _cache = _create(pair)
	      _regex = pair === DEFAULT ? _loopback : _rewrite
	      _cache[9] = _regex(_pairs[9])
	      _cache[10] = _regex(_pairs[10])
	    }
	    cachedBrackets = pair
	  }

	  function _setSettings (o) {
	    var b
	    o = o || {}
	    b = o.brackets
	    Object.defineProperty(o, 'brackets', {
	      set: _reset,
	      get: function () { return cachedBrackets },
	      enumerable: true
	    })
	    _settings = o
	    _reset(b)
	  }

	  Object.defineProperty(_brackets, 'settings', {
	    set: _setSettings,
	    get: function () { return _settings }
	  })

	  /* istanbul ignore next: in the browser riot is always in the scope */
	  _brackets.settings = typeof riot !== 'undefined' && riot.settings || {}
	  _brackets.set = _reset

	  _brackets.R_STRINGS = R_STRINGS
	  _brackets.R_MLCOMMS = R_MLCOMMS
	  _brackets.S_QBLOCKS = S_QBLOCKS

	  return _brackets

	})()

	/**
	 * @module tmpl
	 *
	 * tmpl          - Root function, returns the template value, render with data
	 * tmpl.hasExpr  - Test the existence of a expression inside a string
	 * tmpl.loopKeys - Get the keys for an 'each' loop (used by `_each`)
	 */

	var tmpl = (function () {

	  var _cache = {}

	  function _tmpl (str, data) {
	    if (!str) return str

	    return (_cache[str] || (_cache[str] = _create(str))).call(data, _logErr)
	  }

	  _tmpl.haveRaw = brackets.hasRaw

	  _tmpl.hasExpr = brackets.hasExpr

	  _tmpl.loopKeys = brackets.loopKeys

	  _tmpl.errorHandler = null

	  function _logErr (err, ctx) {

	    if (_tmpl.errorHandler) {

	      err.riotData = {
	        tagName: ctx && ctx.root && ctx.root.tagName,
	        _riot_id: ctx && ctx._riot_id  //eslint-disable-line camelcase
	      }
	      _tmpl.errorHandler(err)
	    }
	  }

	  function _create (str) {

	    var expr = _getTmpl(str)
	    if (expr.slice(0, 11) !== 'try{return ') expr = 'return ' + expr

	    return new Function('E', expr + ';')
	  }

	  var
	    RE_QBLOCK = RegExp(brackets.S_QBLOCKS, 'g'),
	    RE_QBMARK = /\x01(\d+)~/g

	  function _getTmpl (str) {
	    var
	      qstr = [],
	      expr,
	      parts = brackets.split(str.replace(/\u2057/g, '"'), 1)

	    if (parts.length > 2 || parts[0]) {
	      var i, j, list = []

	      for (i = j = 0; i < parts.length; ++i) {

	        expr = parts[i]

	        if (expr && (expr = i & 1 ?

	              _parseExpr(expr, 1, qstr) :

	              '"' + expr
	                .replace(/\\/g, '\\\\')
	                .replace(/\r\n?|\n/g, '\\n')
	                .replace(/"/g, '\\"') +
	              '"'

	          )) list[j++] = expr

	      }

	      expr = j < 2 ? list[0] :
	             '[' + list.join(',') + '].join("")'

	    } else {

	      expr = _parseExpr(parts[1], 0, qstr)
	    }

	    if (qstr[0])
	      expr = expr.replace(RE_QBMARK, function (_, pos) {
	        return qstr[pos]
	          .replace(/\r/g, '\\r')
	          .replace(/\n/g, '\\n')
	      })

	    return expr
	  }

	  var
	    RE_BREND = {
	      '(': /[()]/g,
	      '[': /[[\]]/g,
	      '{': /[{}]/g
	    },
	    CS_IDENT = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\x01(\d+)~):/

	  function _parseExpr (expr, asText, qstr) {

	    if (expr[0] === '=') expr = expr.slice(1)

	    expr = expr
	          .replace(RE_QBLOCK, function (s, div) {
	            return s.length > 2 && !div ? '\x01' + (qstr.push(s) - 1) + '~' : s
	          })
	          .replace(/\s+/g, ' ').trim()
	          .replace(/\ ?([[\({},?\.:])\ ?/g, '$1')

	    if (expr) {
	      var
	        list = [],
	        cnt = 0,
	        match

	      while (expr &&
	            (match = expr.match(CS_IDENT)) &&
	            !match.index
	        ) {
	        var
	          key,
	          jsb,
	          re = /,|([[{(])|$/g

	        expr = RegExp.rightContext
	        key  = match[2] ? qstr[match[2]].slice(1, -1).trim().replace(/\s+/g, ' ') : match[1]

	        while (jsb = (match = re.exec(expr))[1]) skipBraces(jsb, re)

	        jsb  = expr.slice(0, match.index)
	        expr = RegExp.rightContext

	        list[cnt++] = _wrapExpr(jsb, 1, key)
	      }

	      expr = !cnt ? _wrapExpr(expr, asText) :
	          cnt > 1 ? '[' + list.join(',') + '].join(" ").trim()' : list[0]
	    }
	    return expr

	    function skipBraces (ch, re) {
	      var
	        mm,
	        lv = 1,
	        ir = RE_BREND[ch]

	      ir.lastIndex = re.lastIndex
	      while (mm = ir.exec(expr)) {
	        if (mm[0] === ch) ++lv
	        else if (!--lv) break
	      }
	      re.lastIndex = lv ? expr.length : ir.lastIndex
	    }
	  }

	  // istanbul ignore next: not both
	  var
	    JS_CONTEXT = '"in this?this:' + (typeof window !== 'object' ? 'global' : 'window') + ').',
	    JS_VARNAME = /[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
	    JS_NOPROPS = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/

	  function _wrapExpr (expr, asText, key) {
	    var tb

	    expr = expr.replace(JS_VARNAME, function (match, p, mvar, pos, s) {
	      if (mvar) {
	        pos = tb ? 0 : pos + match.length

	        if (mvar !== 'this' && mvar !== 'global' && mvar !== 'window') {
	          match = p + '("' + mvar + JS_CONTEXT + mvar
	          if (pos) tb = (s = s[pos]) === '.' || s === '(' || s === '['
	        } else if (pos) {
	          tb = !JS_NOPROPS.test(s.slice(pos))
	        }
	      }
	      return match
	    })

	    if (tb) {
	      expr = 'try{return ' + expr + '}catch(e){E(e,this)}'
	    }

	    if (key) {

	      expr = (tb ?
	          'function(){' + expr + '}.call(this)' : '(' + expr + ')'
	        ) + '?"' + key + '":""'

	    } else if (asText) {

	      expr = 'function(v){' + (tb ?
	          expr.replace('return ', 'v=') : 'v=(' + expr + ')'
	        ) + ';return v||v===0?v:""}.call(this)'
	    }

	    return expr
	  }

	  // istanbul ignore next: compatibility fix for beta versions
	  _tmpl.parse = function (s) { return s }

	  _tmpl.version = brackets.version = 'v2.3.21'

	  return _tmpl

	})()

	/*
	  lib/browser/tag/mkdom.js

	  Includes hacks needed for the Internet Explorer version 9 and below
	  See: http://kangax.github.io/compat-table/es5/#ie8
	       http://codeplanet.io/dropping-ie8/
	*/
	var mkdom = (function (checkIE) {
	  var
	    reHasYield  = /<yield\b/i,
	    reYieldAll  = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
	    reYieldCls  = /<yield\s+to=[^>]+>[\S\s]*?<\/yield\s*>\s*/ig,
	    reYieldDest = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/ig,
	    rsYieldSrc  = '<yield\\s+to=[\'"]@[\'"]\\s*>([\\S\\s]*?)</yield\\s*>',
	    rootEls = { tr: 'tbody', th: 'tr', td: 'tr', col: 'colgroup' }

	  checkIE = checkIE && checkIE < 10
	  var tblTags = checkIE
	    ? SPECIAL_TAGS_REGEX : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/

	  /**
	   * Creates a DOM element to wrap the given content. Normally an `DIV`, but can be
	   * also a `TABLE`, `SELECT`, `TBODY`, `TR`, or `COLGROUP` element.
	   *
	   * @param   {string} impl   - Tag implementation with the template and root attributes
	   * @param   {string} [html] - HTML content that comes from the DOM element where you
	   *           will mount the tag, mostly the original tag in the page
	   * @param   {object} [attr] - Plain object where to store the root attributes
	   * @returns {HTMLElement} DOM element with _templ_ merged through `YIELD` with the _html_.
	   */
	  function _mkdom(impl, html, attr) {

	    var templ = impl.tmpl,
	      match   = templ && templ.match(/^\s*<([-\w]+)/),
	      tagName = match && match[1].toLowerCase(),
	      el = mkEl('div')

	    if (!html) html = ''

	    if (impl.attrs) attr.attrs = replaceYield(impl.attrs, html)

	    // replace all the yield tags with the tag inner html
	    templ = replaceYield(templ, html)

	    /* istanbul ignore next */
	    if (tblTags.test(tagName))
	      el = specialTags(el, templ, tagName)
	    else
	      el.innerHTML = templ

	    el.stub = true

	    return el
	  }

	  /*
	    Creates the root element for table or select child elements:
	    tr/th/td/thead/tfoot/tbody/caption/col/colgroup/option/optgroup
	  */
	  function specialTags(el, templ, tagName) {
	    var
	      select = tagName[0] === 'o',
	      parent = select ? 'select>' : 'table>'

	    // trim() is important here, this ensures we don't have artifacts,
	    // so we can check if we have only one element inside the parent
	    el.innerHTML = '<' + parent + templ.trim() + '</' + parent
	    parent = el.firstChild

	    // returns the immediate parent if tr/th/td/col is the only element, if not
	    // returns the whole tree, as this can include additional elements
	    if (select) {
	      parent.selectedIndex = -1  // for IE9, compatible w/current riot behavior
	    } else {
	      var tname = rootEls[tagName]
	      if (tname && parent.childNodes.length === 1) parent = $(tname, parent)
	    }
	    return parent
	  }

	  /*
	    Replace the yield tag from any tag template with the innerHTML of the
	    original tag in the page
	  */
	  function replaceYield(templ, html) {
	    // do nothing if no yield
	    if (!reHasYield.test(templ)) return templ

	    // be careful with #1343 - string on the source having `$1`
	    var n = 1
	    templ = templ.replace(reYieldDest, function (_, ref, def) {
	      var m = html.match(RegExp(rsYieldSrc.replace('@', ref), 'i'))
	      n = 0
	      return (m ? m[1] : def) || ''
	    })

	    // yield without any "from", replace yield in templ with the innerHTML
	    if (n || reHasYield.test(templ)) {
	      if (html) html = html.replace(reYieldCls, '').trim()
	      templ = templ.replace(reYieldAll, function (_, def) {
	        return html || def || ''
	      })
	    }

	    return templ
	  }

	  return _mkdom

	})(IE_VERSION)

	/**
	 * Convert the item looped into an object used to extend the child tag properties
	 * @param   { Object } expr - object containing the keys used to extend the children tags
	 * @param   { * } key - value to assign to the new object returned
	 * @param   { * } val - value containing the position of the item in the array
	 * @returns { Object } - new object containing the values of the original item
	 *
	 * The variables 'key' and 'val' are arbitrary.
	 * They depend on the collection type looped (Array, Object)
	 * and on the expression used on the each tag
	 *
	 */
	function mkitem(expr, key, val) {
	  var item = {}
	  item[expr.key] = key
	  if (expr.pos) item[expr.pos] = val
	  return item
	}

	/**
	 * Unmount the redundant tags
	 * @param   { Array } items - array containing the current items to loop
	 * @param   { Array } tags - array containing all the children tags
	 */
	function unmountRedundant(items, tags) {

	  var i = tags.length,
	    j = items.length,
	    t

	  while (i > j) {
	    t = tags[--i]
	    tags.splice(i, 1)
	    t.unmount()
	  }
	}

	/**
	 * Move the nested custom tags in non custom loop tags
	 * @param   { Object } child - non custom loop tag
	 * @param   { Number } i - current position of the loop tag
	 */
	function moveNestedTags(child, i) {
	  Object.keys(child.tags).forEach(function(tagName) {
	    var tag = child.tags[tagName]
	    if (isArray(tag))
	      each(tag, function (t) {
	        moveChildTag(t, tagName, i)
	      })
	    else
	      moveChildTag(tag, tagName, i)
	  })
	}

	/**
	 * Adds the elements for a virtual tag
	 * @param { Tag } tag - the tag whose root's children will be inserted or appended
	 * @param { Node } src - the node that will do the inserting or appending
	 * @param { Tag } target - only if inserting, insert before this tag's first child
	 */
	function addVirtual(tag, src, target) {
	  var el = tag._root, sib
	  tag._virts = []
	  while (el) {
	    sib = el.nextSibling
	    if (target)
	      src.insertBefore(el, target._root)
	    else
	      src.appendChild(el)

	    tag._virts.push(el) // hold for unmounting
	    el = sib
	  }
	}

	/**
	 * Move virtual tag and all child nodes
	 * @param { Tag } tag - first child reference used to start move
	 * @param { Node } src  - the node that will do the inserting
	 * @param { Tag } target - insert before this tag's first child
	 * @param { Number } len - how many child nodes to move
	 */
	function moveVirtual(tag, src, target, len) {
	  var el = tag._root, sib, i = 0
	  for (; i < len; i++) {
	    sib = el.nextSibling
	    src.insertBefore(el, target._root)
	    el = sib
	  }
	}


	/**
	 * Manage tags having the 'each'
	 * @param   { Object } dom - DOM node we need to loop
	 * @param   { Tag } parent - parent tag instance where the dom node is contained
	 * @param   { String } expr - string contained in the 'each' attribute
	 */
	function _each(dom, parent, expr) {

	  // remove the each property from the original tag
	  remAttr(dom, 'each')

	  var mustReorder = typeof getAttr(dom, 'no-reorder') !== T_STRING || remAttr(dom, 'no-reorder'),
	    tagName = getTagName(dom),
	    impl = __tagImpl[tagName] || { tmpl: dom.outerHTML },
	    useRoot = SPECIAL_TAGS_REGEX.test(tagName),
	    root = dom.parentNode,
	    ref = document.createTextNode(''),
	    child = getTag(dom),
	    isOption = /^option$/i.test(tagName), // the option tags must be treated differently
	    tags = [],
	    oldItems = [],
	    hasKeys,
	    isVirtual = dom.tagName == 'VIRTUAL'

	  // parse the each expression
	  expr = tmpl.loopKeys(expr)

	  // insert a marked where the loop tags will be injected
	  root.insertBefore(ref, dom)

	  // clean template code
	  parent.one('before-mount', function () {

	    // remove the original DOM node
	    dom.parentNode.removeChild(dom)
	    if (root.stub) root = parent.root

	  }).on('update', function () {
	    // get the new items collection
	    var items = tmpl(expr.val, parent),
	      // create a fragment to hold the new DOM nodes to inject in the parent tag
	      frag = document.createDocumentFragment()



	    // object loop. any changes cause full redraw
	    if (!isArray(items)) {
	      hasKeys = items || false
	      items = hasKeys ?
	        Object.keys(items).map(function (key) {
	          return mkitem(expr, key, items[key])
	        }) : []
	    }

	    // loop all the new items
	    var i = 0,
	      itemsLength = items.length

	    for (; i < itemsLength; i++) {
	      // reorder only if the items are objects
	      var
	        item = items[i],
	        _mustReorder = mustReorder && item instanceof Object && !hasKeys,
	        oldPos = oldItems.indexOf(item),
	        pos = ~oldPos && _mustReorder ? oldPos : i,
	        // does a tag exist in this position?
	        tag = tags[pos]

	      item = !hasKeys && expr.key ? mkitem(expr, item, i) : item

	      // new tag
	      if (
	        !_mustReorder && !tag // with no-reorder we just update the old tags
	        ||
	        _mustReorder && !~oldPos || !tag // by default we always try to reorder the DOM elements
	      ) {

	        tag = new Tag(impl, {
	          parent: parent,
	          isLoop: true,
	          hasImpl: !!__tagImpl[tagName],
	          root: useRoot ? root : dom.cloneNode(),
	          item: item
	        }, dom.innerHTML)

	        tag.mount()
	        if (isVirtual) tag._root = tag.root.firstChild // save reference for further moves or inserts
	        // this tag must be appended
	        if (i == tags.length || !tags[i]) { // fix 1581
	          if (isVirtual)
	            addVirtual(tag, frag)
	          else frag.appendChild(tag.root)
	        }
	        // this tag must be insert
	        else {
	          if (isVirtual)
	            addVirtual(tag, root, tags[i])
	          else root.insertBefore(tag.root, tags[i].root)
	          oldItems.splice(i, 0, item)
	        }

	        tags.splice(i, 0, tag)
	        pos = i // handled here so no move
	      } else tag.update(item)

	      // reorder the tag if it's not located in its previous position
	      if (
	        pos !== i && _mustReorder &&
	        tags[i] // fix 1581 unable to reproduce it in a test!
	      ) {
	        // update the DOM
	        if (isVirtual)
	          moveVirtual(tag, root, tags[i], dom.childNodes.length)
	        else root.insertBefore(tag.root, tags[i].root)
	        // update the position attribute if it exists
	        if (expr.pos)
	          tag[expr.pos] = i
	        // move the old tag instance
	        tags.splice(i, 0, tags.splice(pos, 1)[0])
	        // move the old item
	        oldItems.splice(i, 0, oldItems.splice(pos, 1)[0])
	        // if the loop tags are not custom
	        // we need to move all their custom tags into the right position
	        if (!child && tag.tags) moveNestedTags(tag, i)
	      }

	      // cache the original item to use it in the events bound to this node
	      // and its children
	      tag._item = item
	      // cache the real parent tag internally
	      defineProperty(tag, '_parent', parent)
	    }

	    // remove the redundant tags
	    unmountRedundant(items, tags)

	    // insert the new nodes
	    if (isOption) root.appendChild(frag)
	    else root.insertBefore(frag, ref)

	    // set the 'tags' property of the parent tag
	    // if child is 'undefined' it means that we don't need to set this property
	    // for example:
	    // we don't need store the `myTag.tags['div']` property if we are looping a div tag
	    // but we need to track the `myTag.tags['child']` property looping a custom child node named `child`
	    if (child) parent.tags[tagName] = tags

	    // clone the items array
	    oldItems = items.slice()

	  })

	}
	/**
	 * Object that will be used to inject and manage the css of every tag instance
	 */
	var styleManager = (function(_riot) {

	  if (!window) return { // skip injection on the server
	    add: function () {},
	    inject: function () {}
	  }

	  var styleNode = (function () {
	    // create a new style element with the correct type
	    var newNode = mkEl('style')
	    setAttr(newNode, 'type', 'text/css')

	    // replace any user node or insert the new one into the head
	    var userNode = $('style[type=riot]')
	    if (userNode) {
	      if (userNode.id) newNode.id = userNode.id
	      userNode.parentNode.replaceChild(newNode, userNode)
	    }
	    else document.getElementsByTagName('head')[0].appendChild(newNode)

	    return newNode
	  })()

	  // Create cache and shortcut to the correct property
	  var cssTextProp = styleNode.styleSheet,
	    stylesToInject = ''

	  // Expose the style node in a non-modificable property
	  Object.defineProperty(_riot, 'styleNode', {
	    value: styleNode,
	    writable: true
	  })

	  /**
	   * Public api
	   */
	  return {
	    /**
	     * Save a tag style to be later injected into DOM
	     * @param   { String } css [description]
	     */
	    add: function(css) {
	      stylesToInject += css
	    },
	    /**
	     * Inject all previously saved tag styles into DOM
	     * innerHTML seems slow: http://jsperf.com/riot-insert-style
	     */
	    inject: function() {
	      if (stylesToInject) {
	        if (cssTextProp) cssTextProp.cssText += stylesToInject
	        else styleNode.innerHTML += stylesToInject
	        stylesToInject = ''
	      }
	    }
	  }

	})(riot)


	function parseNamedElements(root, tag, childTags, forceParsingNamed) {

	  walk(root, function(dom) {
	    if (dom.nodeType == 1) {
	      dom.isLoop = dom.isLoop ||
	                  (dom.parentNode && dom.parentNode.isLoop || getAttr(dom, 'each'))
	                    ? 1 : 0

	      // custom child tag
	      if (childTags) {
	        var child = getTag(dom)

	        if (child && !dom.isLoop)
	          childTags.push(initChildTag(child, {root: dom, parent: tag}, dom.innerHTML, tag))
	      }

	      if (!dom.isLoop || forceParsingNamed)
	        setNamed(dom, tag, [])
	    }

	  })

	}

	function parseExpressions(root, tag, expressions) {

	  function addExpr(dom, val, extra) {
	    if (tmpl.hasExpr(val)) {
	      expressions.push(extend({ dom: dom, expr: val }, extra))
	    }
	  }

	  walk(root, function(dom) {
	    var type = dom.nodeType,
	      attr

	    // text node
	    if (type == 3 && dom.parentNode.tagName != 'STYLE') addExpr(dom, dom.nodeValue)
	    if (type != 1) return

	    /* element */

	    // loop
	    attr = getAttr(dom, 'each')

	    if (attr) { _each(dom, tag, attr); return false }

	    // attribute expressions
	    each(dom.attributes, function(attr) {
	      var name = attr.name,
	        bool = name.split('__')[1]

	      addExpr(dom, attr.value, { attr: bool || name, bool: bool })
	      if (bool) { remAttr(dom, name); return false }

	    })

	    // skip custom tags
	    if (getTag(dom)) return false

	  })

	}
	function Tag(impl, conf, innerHTML) {

	  var self = riot.observable(this),
	    opts = inherit(conf.opts) || {},
	    parent = conf.parent,
	    isLoop = conf.isLoop,
	    hasImpl = conf.hasImpl,
	    item = cleanUpData(conf.item),
	    expressions = [],
	    childTags = [],
	    root = conf.root,
	    fn = impl.fn,
	    tagName = root.tagName.toLowerCase(),
	    attr = {},
	    implAttr = {},
	    propsInSyncWithParent = [],
	    dom

	  if (fn && root._tag) root._tag.unmount(true)

	  // not yet mounted
	  this.isMounted = false
	  root.isLoop = isLoop

	  // keep a reference to the tag just created
	  // so we will be able to mount this tag multiple times
	  root._tag = this

	  // create a unique id to this tag
	  // it could be handy to use it also to improve the virtual dom rendering speed
	  defineProperty(this, '_riot_id', ++__uid) // base 1 allows test !t._riot_id

	  extend(this, { parent: parent, root: root, opts: opts, tags: {} }, item)

	  // grab attributes
	  each(root.attributes, function(el) {
	    var val = el.value
	    // remember attributes with expressions only
	    if (tmpl.hasExpr(val)) attr[el.name] = val
	  })

	  dom = mkdom(impl, innerHTML, implAttr)
	  implAttr = implAttr.attrs || ''

	  // options
	  function updateOpts() {
	    var ctx = hasImpl && isLoop ? self : parent || self

	    // update opts from current DOM attributes
	    each(root.attributes, function(el) {
	      var val = el.value
	      opts[toCamel(el.name)] = tmpl.hasExpr(val) ? tmpl(val, ctx) : val
	    })
	    // recover those with expressions
	    each(Object.keys(attr), function(name) {
	      opts[toCamel(name)] = tmpl(attr[name], ctx)
	    })
	  }

	  function normalizeData(data) {
	    for (var key in item) {
	      if (typeof self[key] !== T_UNDEF && isWritable(self, key))
	        self[key] = data[key]
	    }
	  }

	  function inheritFromParent () {
	    if (!self.parent || !isLoop) return
	    each(Object.keys(self.parent), function(k) {
	      // some properties must be always in sync with the parent tag
	      var mustSync = !contains(RESERVED_WORDS_BLACKLIST, k) && contains(propsInSyncWithParent, k)
	      if (typeof self[k] === T_UNDEF || mustSync) {
	        // track the property to keep in sync
	        // so we can keep it updated
	        if (!mustSync) propsInSyncWithParent.push(k)
	        self[k] = self.parent[k]
	      }
	    })
	  }

	  defineProperty(this, 'update', function(data) {

	    // make sure the data passed will not override
	    // the component core methods
	    data = cleanUpData(data)
	    // inherit properties from the parent
	    inheritFromParent()
	    // normalize the tag properties in case an item object was initially passed
	    if (data && isObject(item)) {
	      normalizeData(data)
	      item = data
	    }
	    extend(self, data)
	    updateOpts()
	    self.trigger('update', data)
	    update(expressions, self)
	    // the updated event will be triggered
	    // once the DOM will be ready and all the reflows are completed
	    // this is useful if you want to get the "real" root properties
	    // 4 ex: root.offsetWidth ...
	    if (self.parent)
	      // closes #1599
	      self.parent.one('updated', function() { self.trigger('updated') })
	    else rAF(function() { self.trigger('updated') })

	    return this
	  })

	  defineProperty(this, 'mixin', function() {
	    each(arguments, function(mix) {
	      var instance

	      mix = typeof mix === T_STRING ? riot.mixin(mix) : mix

	      // check if the mixin is a function
	      if (isFunction(mix)) {
	        // create the new mixin instance
	        instance = new mix()
	        // save the prototype to loop it afterwards
	        mix = mix.prototype
	      } else instance = mix

	      // loop the keys in the function prototype or the all object keys
	      each(Object.getOwnPropertyNames(mix), function(key) {
	        // bind methods to self
	        if (key != 'init')
	          self[key] = isFunction(instance[key]) ?
	                        instance[key].bind(self) :
	                        instance[key]
	      })

	      // init method will be called automatically
	      if (instance.init) instance.init.bind(self)()
	    })
	    return this
	  })

	  defineProperty(this, 'mount', function() {

	    updateOpts()

	    // add global mixin
	    var globalMixin = riot.mixin(GLOBAL_MIXIN)
	    if (globalMixin) self.mixin(globalMixin)

	    // initialiation
	    if (fn) fn.call(self, opts)

	    // parse layout after init. fn may calculate args for nested custom tags
	    parseExpressions(dom, self, expressions)

	    // mount the child tags
	    toggle(true)

	    // update the root adding custom attributes coming from the compiler
	    // it fixes also #1087
	    if (implAttr || hasImpl) {
	      walkAttributes(implAttr, function (k, v) { setAttr(root, k, v) })
	      parseExpressions(self.root, self, expressions)
	    }

	    if (!self.parent || isLoop) self.update(item)

	    // internal use only, fixes #403
	    self.trigger('before-mount')

	    if (isLoop && !hasImpl) {
	      // update the root attribute for the looped elements
	      root = dom.firstChild
	    } else {
	      while (dom.firstChild) root.appendChild(dom.firstChild)
	      if (root.stub) root = parent.root
	    }

	    defineProperty(self, 'root', root)

	    // parse the named dom nodes in the looped child
	    // adding them to the parent as well
	    if (isLoop)
	      parseNamedElements(self.root, self.parent, null, true)

	    // if it's not a child tag we can trigger its mount event
	    if (!self.parent || self.parent.isMounted) {
	      self.isMounted = true
	      self.trigger('mount')
	    }
	    // otherwise we need to wait that the parent event gets triggered
	    else self.parent.one('mount', function() {
	      // avoid to trigger the `mount` event for the tags
	      // not visible included in an if statement
	      if (!isInStub(self.root)) {
	        self.parent.isMounted = self.isMounted = true
	        self.trigger('mount')
	      }
	    })
	  })


	  defineProperty(this, 'unmount', function(keepRootTag) {
	    var el = root,
	      p = el.parentNode,
	      ptag,
	      tagIndex = __virtualDom.indexOf(self)

	    self.trigger('before-unmount')

	    // remove this tag instance from the global virtualDom variable
	    if (~tagIndex)
	      __virtualDom.splice(tagIndex, 1)

	    if (this._virts) {
	      each(this._virts, function(v) {
	        if (v.parentNode) v.parentNode.removeChild(v)
	      })
	    }

	    if (p) {

	      if (parent) {
	        ptag = getImmediateCustomParentTag(parent)
	        // remove this tag from the parent tags object
	        // if there are multiple nested tags with same name..
	        // remove this element form the array
	        if (isArray(ptag.tags[tagName]))
	          each(ptag.tags[tagName], function(tag, i) {
	            if (tag._riot_id == self._riot_id)
	              ptag.tags[tagName].splice(i, 1)
	          })
	        else
	          // otherwise just delete the tag instance
	          ptag.tags[tagName] = undefined
	      }

	      else
	        while (el.firstChild) el.removeChild(el.firstChild)

	      if (!keepRootTag)
	        p.removeChild(el)
	      else
	        // the riot-tag attribute isn't needed anymore, remove it
	        remAttr(p, 'riot-tag')
	    }


	    self.trigger('unmount')
	    toggle()
	    self.off('*')
	    self.isMounted = false
	    delete root._tag

	  })

	  function toggle(isMount) {

	    // mount/unmount children
	    each(childTags, function(child) { child[isMount ? 'mount' : 'unmount']() })

	    // listen/unlisten parent (events flow one way from parent to children)
	    if (!parent) return
	    var evt = isMount ? 'on' : 'off'

	    // the loop tags will be always in sync with the parent automatically
	    if (isLoop)
	      parent[evt]('unmount', self.unmount)
	    else
	      parent[evt]('update', self.update)[evt]('unmount', self.unmount)
	  }

	  // named elements available for fn
	  parseNamedElements(dom, this, childTags)

	}
	/**
	 * Attach an event to a DOM node
	 * @param { String } name - event name
	 * @param { Function } handler - event callback
	 * @param { Object } dom - dom node
	 * @param { Tag } tag - tag instance
	 */
	function setEventHandler(name, handler, dom, tag) {

	  dom[name] = function(e) {

	    var ptag = tag._parent,
	      item = tag._item,
	      el

	    if (!item)
	      while (ptag && !item) {
	        item = ptag._item
	        ptag = ptag._parent
	      }

	    // cross browser event fix
	    e = e || window.event

	    // override the event properties
	    if (isWritable(e, 'currentTarget')) e.currentTarget = dom
	    if (isWritable(e, 'target')) e.target = e.srcElement
	    if (isWritable(e, 'which')) e.which = e.charCode || e.keyCode

	    e.item = item

	    // prevent default behaviour (by default)
	    if (handler.call(tag, e) !== true && !/radio|check/.test(dom.type)) {
	      if (e.preventDefault) e.preventDefault()
	      e.returnValue = false
	    }

	    if (!e.preventUpdate) {
	      el = item ? getImmediateCustomParentTag(ptag) : tag
	      el.update()
	    }

	  }

	}


	/**
	 * Insert a DOM node replacing another one (used by if- attribute)
	 * @param   { Object } root - parent node
	 * @param   { Object } node - node replaced
	 * @param   { Object } before - node added
	 */
	function insertTo(root, node, before) {
	  if (!root) return
	  root.insertBefore(before, node)
	  root.removeChild(node)
	}

	/**
	 * Update the expressions in a Tag instance
	 * @param   { Array } expressions - expression that must be re evaluated
	 * @param   { Tag } tag - tag instance
	 */
	function update(expressions, tag) {

	  each(expressions, function(expr, i) {

	    var dom = expr.dom,
	      attrName = expr.attr,
	      value = tmpl(expr.expr, tag),
	      parent = expr.dom.parentNode

	    if (expr.bool)
	      value = !!value
	    else if (value == null)
	      value = ''

	    // textarea and text nodes has no attribute name
	    if (!attrName) {
	      // about #815 w/o replace: the browser converts the value to a string,
	      // the comparison by "==" does too, but not in the server
	      value += ''
	      // test for parent avoids error with invalid assignment to nodeValue
	      if (parent && dom.nodeValue != value) {
	        if (parent.tagName === 'TEXTAREA') {
	          parent.value = value                    // #1113
	          if (!IE_VERSION) dom.nodeValue = value  // #1625 IE throws here, nodeValue
	        }                                         // will be available on 'updated'
	        else dom.nodeValue = value
	      }
	      return
	    }

	    // #1612: look for changes in dom.value when updating the value
	    if (attrName === 'value') {
	      if (dom.value != value) dom.value = value
	      return
	    }

	    // was the expression value still the same?
	    if (expr.value === value) {
	      return
	    }
	    expr.value = value

	    // remove original attribute
	    remAttr(dom, attrName)

	    // event handler
	    if (isFunction(value)) {
	      setEventHandler(attrName, value, dom, tag)

	    // if- conditional
	    } else if (attrName == 'if') {
	      var stub = expr.stub,
	        add = function() { insertTo(stub.parentNode, stub, dom) },
	        remove = function() { insertTo(dom.parentNode, dom, stub) }

	      // add to DOM
	      if (value) {
	        if (stub) {
	          add()
	          dom.inStub = false
	          // avoid to trigger the mount event if the tags is not visible yet
	          // maybe we can optimize this avoiding to mount the tag at all
	          if (!isInStub(dom)) {
	            walk(dom, function(el) {
	              if (el._tag && !el._tag.isMounted)
	                el._tag.isMounted = !!el._tag.trigger('mount')
	            })
	          }
	        }
	      // remove from DOM
	      } else {
	        stub = expr.stub = stub || document.createTextNode('')
	        // if the parentNode is defined we can easily replace the tag
	        if (dom.parentNode)
	          remove()
	        // otherwise we need to wait the updated event
	        else (tag.parent || tag).one('updated', remove)

	        dom.inStub = true
	      }
	    // show / hide
	    } else if (attrName === 'show') {
	      dom.style.display = value ? '' : 'none'

	    } else if (attrName === 'hide') {
	      dom.style.display = value ? 'none' : ''

	    } else if (expr.bool) {
	      if (value) {
	        // #1374 <select> <option selected={true}> </select>
	        if (attrName === 'selected' && dom.nodeName === 'OPTION' && parent) {
	          parent.value = dom.value
	        }
	        setAttr(dom, attrName, attrName)
	      }

	    } else if (value === 0 || value && typeof value !== T_OBJECT) {
	      // <img src="{ expr }">
	      if (startsWith(attrName, RIOT_PREFIX) && attrName != RIOT_TAG) {
	        attrName = attrName.slice(RIOT_PREFIX.length)
	      }
	      setAttr(dom, attrName, value)
	    }

	  })

	}
	/**
	 * Specialized function for looping an array-like collection with `each={}`
	 * @param   { Array } els - collection of items
	 * @param   {Function} fn - callback function
	 * @returns { Array } the array looped
	 */
	function each(els, fn) {
	  var len = els ? els.length : 0

	  for (var i = 0, el; i < len; i++) {
	    el = els[i]
	    // return false -> current item was removed by fn during the loop
	    if (el != null && fn(el, i) === false) i--
	  }
	  return els
	}

	/**
	 * Detect if the argument passed is a function
	 * @param   { * } v - whatever you want to pass to this function
	 * @returns { Boolean } -
	 */
	function isFunction(v) {
	  return typeof v === T_FUNCTION || false   // avoid IE problems
	}

	/**
	 * Detect if the argument passed is an object, exclude null.
	 * NOTE: Use isObject(x) && !isArray(x) to excludes arrays.
	 * @param   { * } v - whatever you want to pass to this function
	 * @returns { Boolean } -
	 */
	function isObject(v) {
	  return v && typeof v === T_OBJECT         // typeof null is 'object'
	}

	/**
	 * Remove any DOM attribute from a node
	 * @param   { Object } dom - DOM node we want to update
	 * @param   { String } name - name of the property we want to remove
	 */
	function remAttr(dom, name) {
	  dom.removeAttribute(name)
	}

	/**
	 * Convert a string containing dashes to camel case
	 * @param   { String } string - input string
	 * @returns { String } my-string -> myString
	 */
	function toCamel(string) {
	  return string.replace(/-(\w)/g, function(_, c) {
	    return c.toUpperCase()
	  })
	}

	/**
	 * Get the value of any DOM attribute on a node
	 * @param   { Object } dom - DOM node we want to parse
	 * @param   { String } name - name of the attribute we want to get
	 * @returns { String | undefined } name of the node attribute whether it exists
	 */
	function getAttr(dom, name) {
	  return dom.getAttribute(name)
	}

	/**
	 * Set any DOM attribute
	 * @param { Object } dom - DOM node we want to update
	 * @param { String } name - name of the property we want to set
	 * @param { String } val - value of the property we want to set
	 */
	function setAttr(dom, name, val) {
	  dom.setAttribute(name, val)
	}

	/**
	 * Detect the tag implementation by a DOM node
	 * @param   { Object } dom - DOM node we need to parse to get its tag implementation
	 * @returns { Object } it returns an object containing the implementation of a custom tag (template and boot function)
	 */
	function getTag(dom) {
	  return dom.tagName && __tagImpl[getAttr(dom, RIOT_TAG) || dom.tagName.toLowerCase()]
	}
	/**
	 * Add a child tag to its parent into the `tags` object
	 * @param   { Object } tag - child tag instance
	 * @param   { String } tagName - key where the new tag will be stored
	 * @param   { Object } parent - tag instance where the new child tag will be included
	 */
	function addChildTag(tag, tagName, parent) {
	  var cachedTag = parent.tags[tagName]

	  // if there are multiple children tags having the same name
	  if (cachedTag) {
	    // if the parent tags property is not yet an array
	    // create it adding the first cached tag
	    if (!isArray(cachedTag))
	      // don't add the same tag twice
	      if (cachedTag !== tag)
	        parent.tags[tagName] = [cachedTag]
	    // add the new nested tag to the array
	    if (!contains(parent.tags[tagName], tag))
	      parent.tags[tagName].push(tag)
	  } else {
	    parent.tags[tagName] = tag
	  }
	}

	/**
	 * Move the position of a custom tag in its parent tag
	 * @param   { Object } tag - child tag instance
	 * @param   { String } tagName - key where the tag was stored
	 * @param   { Number } newPos - index where the new tag will be stored
	 */
	function moveChildTag(tag, tagName, newPos) {
	  var parent = tag.parent,
	    tags
	  // no parent no move
	  if (!parent) return

	  tags = parent.tags[tagName]

	  if (isArray(tags))
	    tags.splice(newPos, 0, tags.splice(tags.indexOf(tag), 1)[0])
	  else addChildTag(tag, tagName, parent)
	}

	/**
	 * Create a new child tag including it correctly into its parent
	 * @param   { Object } child - child tag implementation
	 * @param   { Object } opts - tag options containing the DOM node where the tag will be mounted
	 * @param   { String } innerHTML - inner html of the child node
	 * @param   { Object } parent - instance of the parent tag including the child custom tag
	 * @returns { Object } instance of the new child tag just created
	 */
	function initChildTag(child, opts, innerHTML, parent) {
	  var tag = new Tag(child, opts, innerHTML),
	    tagName = getTagName(opts.root),
	    ptag = getImmediateCustomParentTag(parent)
	  // fix for the parent attribute in the looped elements
	  tag.parent = ptag
	  // store the real parent tag
	  // in some cases this could be different from the custom parent tag
	  // for example in nested loops
	  tag._parent = parent

	  // add this tag to the custom parent tag
	  addChildTag(tag, tagName, ptag)
	  // and also to the real parent tag
	  if (ptag !== parent)
	    addChildTag(tag, tagName, parent)
	  // empty the child node once we got its template
	  // to avoid that its children get compiled multiple times
	  opts.root.innerHTML = ''

	  return tag
	}

	/**
	 * Loop backward all the parents tree to detect the first custom parent tag
	 * @param   { Object } tag - a Tag instance
	 * @returns { Object } the instance of the first custom parent tag found
	 */
	function getImmediateCustomParentTag(tag) {
	  var ptag = tag
	  while (!getTag(ptag.root)) {
	    if (!ptag.parent) break
	    ptag = ptag.parent
	  }
	  return ptag
	}

	/**
	 * Helper function to set an immutable property
	 * @param   { Object } el - object where the new property will be set
	 * @param   { String } key - object key where the new property will be stored
	 * @param   { * } value - value of the new property
	* @param   { Object } options - set the propery overriding the default options
	 * @returns { Object } - the initial object
	 */
	function defineProperty(el, key, value, options) {
	  Object.defineProperty(el, key, extend({
	    value: value,
	    enumerable: false,
	    writable: false,
	    configurable: false
	  }, options))
	  return el
	}

	/**
	 * Get the tag name of any DOM node
	 * @param   { Object } dom - DOM node we want to parse
	 * @returns { String } name to identify this dom node in riot
	 */
	function getTagName(dom) {
	  var child = getTag(dom),
	    namedTag = getAttr(dom, 'name'),
	    tagName = namedTag && !tmpl.hasExpr(namedTag) ?
	                namedTag :
	              child ? child.name : dom.tagName.toLowerCase()

	  return tagName
	}

	/**
	 * Extend any object with other properties
	 * @param   { Object } src - source object
	 * @returns { Object } the resulting extended object
	 *
	 * var obj = { foo: 'baz' }
	 * extend(obj, {bar: 'bar', foo: 'bar'})
	 * console.log(obj) => {bar: 'bar', foo: 'bar'}
	 *
	 */
	function extend(src) {
	  var obj, args = arguments
	  for (var i = 1; i < args.length; ++i) {
	    if (obj = args[i]) {
	      for (var key in obj) {
	        // check if this property of the source object could be overridden
	        if (isWritable(src, key))
	          src[key] = obj[key]
	      }
	    }
	  }
	  return src
	}

	/**
	 * Check whether an array contains an item
	 * @param   { Array } arr - target array
	 * @param   { * } item - item to test
	 * @returns { Boolean } Does 'arr' contain 'item'?
	 */
	function contains(arr, item) {
	  return ~arr.indexOf(item)
	}

	/**
	 * Check whether an object is a kind of array
	 * @param   { * } a - anything
	 * @returns {Boolean} is 'a' an array?
	 */
	function isArray(a) { return Array.isArray(a) || a instanceof Array }

	/**
	 * Detect whether a property of an object could be overridden
	 * @param   { Object }  obj - source object
	 * @param   { String }  key - object property
	 * @returns { Boolean } is this property writable?
	 */
	function isWritable(obj, key) {
	  var props = Object.getOwnPropertyDescriptor(obj, key)
	  return typeof obj[key] === T_UNDEF || props && props.writable
	}


	/**
	 * With this function we avoid that the internal Tag methods get overridden
	 * @param   { Object } data - options we want to use to extend the tag instance
	 * @returns { Object } clean object without containing the riot internal reserved words
	 */
	function cleanUpData(data) {
	  if (!(data instanceof Tag) && !(data && typeof data.trigger == T_FUNCTION))
	    return data

	  var o = {}
	  for (var key in data) {
	    if (!contains(RESERVED_WORDS_BLACKLIST, key))
	      o[key] = data[key]
	  }
	  return o
	}

	/**
	 * Walk down recursively all the children tags starting dom node
	 * @param   { Object }   dom - starting node where we will start the recursion
	 * @param   { Function } fn - callback to transform the child node just found
	 */
	function walk(dom, fn) {
	  if (dom) {
	    // stop the recursion
	    if (fn(dom) === false) return
	    else {
	      dom = dom.firstChild

	      while (dom) {
	        walk(dom, fn)
	        dom = dom.nextSibling
	      }
	    }
	  }
	}

	/**
	 * Minimize risk: only zero or one _space_ between attr & value
	 * @param   { String }   html - html string we want to parse
	 * @param   { Function } fn - callback function to apply on any attribute found
	 */
	function walkAttributes(html, fn) {
	  var m,
	    re = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g

	  while (m = re.exec(html)) {
	    fn(m[1].toLowerCase(), m[2] || m[3] || m[4])
	  }
	}

	/**
	 * Check whether a DOM node is in stub mode, useful for the riot 'if' directive
	 * @param   { Object }  dom - DOM node we want to parse
	 * @returns { Boolean } -
	 */
	function isInStub(dom) {
	  while (dom) {
	    if (dom.inStub) return true
	    dom = dom.parentNode
	  }
	  return false
	}

	/**
	 * Create a generic DOM node
	 * @param   { String } name - name of the DOM node we want to create
	 * @returns { Object } DOM node just created
	 */
	function mkEl(name) {
	  return document.createElement(name)
	}

	/**
	 * Shorter and fast way to select multiple nodes in the DOM
	 * @param   { String } selector - DOM selector
	 * @param   { Object } ctx - DOM node where the targets of our search will is located
	 * @returns { Object } dom nodes found
	 */
	function $$(selector, ctx) {
	  return (ctx || document).querySelectorAll(selector)
	}

	/**
	 * Shorter and fast way to select a single node in the DOM
	 * @param   { String } selector - unique dom selector
	 * @param   { Object } ctx - DOM node where the target of our search will is located
	 * @returns { Object } dom node found
	 */
	function $(selector, ctx) {
	  return (ctx || document).querySelector(selector)
	}

	/**
	 * Simple object prototypal inheritance
	 * @param   { Object } parent - parent object
	 * @returns { Object } child instance
	 */
	function inherit(parent) {
	  function Child() {}
	  Child.prototype = parent
	  return new Child()
	}

	/**
	 * Get the name property needed to identify a DOM node in riot
	 * @param   { Object } dom - DOM node we need to parse
	 * @returns { String | undefined } give us back a string to identify this dom node
	 */
	function getNamedKey(dom) {
	  return getAttr(dom, 'id') || getAttr(dom, 'name')
	}

	/**
	 * Set the named properties of a tag element
	 * @param { Object } dom - DOM node we need to parse
	 * @param { Object } parent - tag instance where the named dom element will be eventually added
	 * @param { Array } keys - list of all the tag instance properties
	 */
	function setNamed(dom, parent, keys) {
	  // get the key value we want to add to the tag instance
	  var key = getNamedKey(dom),
	    isArr,
	    // add the node detected to a tag instance using the named property
	    add = function(value) {
	      // avoid to override the tag properties already set
	      if (contains(keys, key)) return
	      // check whether this value is an array
	      isArr = isArray(value)
	      // if the key was never set
	      if (!value)
	        // set it once on the tag instance
	        parent[key] = dom
	      // if it was an array and not yet set
	      else if (!isArr || isArr && !contains(value, dom)) {
	        // add the dom node into the array
	        if (isArr)
	          value.push(dom)
	        else
	          parent[key] = [value, dom]
	      }
	    }

	  // skip the elements with no named properties
	  if (!key) return

	  // check whether this key has been already evaluated
	  if (tmpl.hasExpr(key))
	    // wait the first updated event only once
	    parent.one('mount', function() {
	      key = getNamedKey(dom)
	      add(parent[key])
	    })
	  else
	    add(parent[key])

	}

	/**
	 * Faster String startsWith alternative
	 * @param   { String } src - source string
	 * @param   { String } str - test string
	 * @returns { Boolean } -
	 */
	function startsWith(src, str) {
	  return src.slice(0, str.length) === str
	}

	/**
	 * requestAnimationFrame function
	 * Adapted from https://gist.github.com/paulirish/1579671, license MIT
	 */
	var rAF = (function (w) {
	  var raf = w.requestAnimationFrame    ||
	            w.mozRequestAnimationFrame || w.webkitRequestAnimationFrame

	  if (!raf || /iP(ad|hone|od).*OS 6/.test(w.navigator.userAgent)) {  // buggy iOS6
	    var lastTime = 0

	    raf = function (cb) {
	      var nowtime = Date.now(), timeout = Math.max(16 - (nowtime - lastTime), 0)
	      setTimeout(function () { cb(lastTime = nowtime + timeout) }, timeout)
	    }
	  }
	  return raf

	})(window || {})

	/**
	 * Mount a tag creating new Tag instance
	 * @param   { Object } root - dom node where the tag will be mounted
	 * @param   { String } tagName - name of the riot tag we want to mount
	 * @param   { Object } opts - options to pass to the Tag instance
	 * @returns { Tag } a new Tag instance
	 */
	function mountTo(root, tagName, opts) {
	  var tag = __tagImpl[tagName],
	    // cache the inner HTML to fix #855
	    innerHTML = root._innerHTML = root._innerHTML || root.innerHTML

	  // clear the inner html
	  root.innerHTML = ''

	  if (tag && root) tag = new Tag(tag, { root: root, opts: opts }, innerHTML)

	  if (tag && tag.mount) {
	    tag.mount()
	    // add this tag to the virtualDom variable
	    if (!contains(__virtualDom, tag)) __virtualDom.push(tag)
	  }

	  return tag
	}
	/**
	 * Riot public api
	 */

	// share methods for other riot parts, e.g. compiler
	riot.util = { brackets: brackets, tmpl: tmpl }

	/**
	 * Create a mixin that could be globally shared across all the tags
	 */
	riot.mixin = (function() {
	  var mixins = {}

	  /**
	   * Create/Return a mixin by its name
	   * @param   { String } name - mixin name (global mixin if missing)
	   * @param   { Object } mixin - mixin logic
	   * @returns { Object } the mixin logic
	   */
	  return function(name, mixin) {
	    if (isObject(name)) {
	      mixin = name
	      mixins[GLOBAL_MIXIN] = extend(mixins[GLOBAL_MIXIN] || {}, mixin)
	      return
	    }

	    if (!mixin) return mixins[name]
	    mixins[name] = mixin
	  }

	})()

	/**
	 * Create a new riot tag implementation
	 * @param   { String }   name - name/id of the new riot tag
	 * @param   { String }   html - tag template
	 * @param   { String }   css - custom tag css
	 * @param   { String }   attrs - root tag attributes
	 * @param   { Function } fn - user function
	 * @returns { String } name/id of the tag just created
	 */
	riot.tag = function(name, html, css, attrs, fn) {
	  if (isFunction(attrs)) {
	    fn = attrs
	    if (/^[\w\-]+\s?=/.test(css)) {
	      attrs = css
	      css = ''
	    } else attrs = ''
	  }
	  if (css) {
	    if (isFunction(css)) fn = css
	    else styleManager.add(css)
	  }
	  __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn }
	  return name
	}

	/**
	 * Create a new riot tag implementation (for use by the compiler)
	 * @param   { String }   name - name/id of the new riot tag
	 * @param   { String }   html - tag template
	 * @param   { String }   css - custom tag css
	 * @param   { String }   attrs - root tag attributes
	 * @param   { Function } fn - user function
	 * @param   { string }  [bpair] - brackets used in the compilation
	 * @returns { String } name/id of the tag just created
	 */
	riot.tag2 = function(name, html, css, attrs, fn, bpair) {
	  if (css) styleManager.add(css)
	  //if (bpair) riot.settings.brackets = bpair
	  __tagImpl[name] = { name: name, tmpl: html, attrs: attrs, fn: fn }
	  return name
	}

	/**
	 * Mount a tag using a specific tag implementation
	 * @param   { String } selector - tag DOM selector
	 * @param   { String } tagName - tag implementation name
	 * @param   { Object } opts - tag logic
	 * @returns { Array } new tags instances
	 */
	riot.mount = function(selector, tagName, opts) {

	  var els,
	    allTags,
	    tags = []

	  // helper functions

	  function addRiotTags(arr) {
	    var list = ''
	    each(arr, function (e) {
	      if (!/[^-\w]/.test(e))
	        list += ',*[' + RIOT_TAG + '=' + e.trim() + ']'
	    })
	    return list
	  }

	  function selectAllTags() {
	    var keys = Object.keys(__tagImpl)
	    return keys + addRiotTags(keys)
	  }

	  function pushTags(root) {
	    if (root.tagName) {
	      var riotTag = getAttr(root, RIOT_TAG)

	      // have tagName? force riot-tag to be the same
	      if (tagName && riotTag !== tagName) {
	        riotTag = tagName
	        setAttr(root, RIOT_TAG, tagName)
	      }
	      var tag = mountTo(root, riotTag || root.tagName.toLowerCase(), opts)

	      if (tag) tags.push(tag)
	    } else if (root.length) {
	      each(root, pushTags)   // assume nodeList
	    }
	  }

	  // ----- mount code -----

	  // inject styles into DOM
	  styleManager.inject()

	  if (isObject(tagName)) {
	    opts = tagName
	    tagName = 0
	  }

	  // crawl the DOM to find the tag
	  if (typeof selector === T_STRING) {
	    if (selector === '*')
	      // select all the tags registered
	      // and also the tags found with the riot-tag attribute set
	      selector = allTags = selectAllTags()
	    else
	      // or just the ones named like the selector
	      selector += addRiotTags(selector.split(/, ?/))

	    // make sure to pass always a selector
	    // to the querySelectorAll function
	    els = selector ? $$(selector) : []
	  }
	  else
	    // probably you have passed already a tag or a NodeList
	    els = selector

	  // select all the registered and mount them inside their root elements
	  if (tagName === '*') {
	    // get all custom tags
	    tagName = allTags || selectAllTags()
	    // if the root els it's just a single tag
	    if (els.tagName)
	      els = $$(tagName, els)
	    else {
	      // select all the children for all the different root elements
	      var nodeList = []
	      each(els, function (_el) {
	        nodeList.push($$(tagName, _el))
	      })
	      els = nodeList
	    }
	    // get rid of the tagName
	    tagName = 0
	  }

	  pushTags(els)

	  return tags
	}

	/**
	 * Update all the tags instances created
	 * @returns { Array } all the tags instances
	 */
	riot.update = function() {
	  return each(__virtualDom, function(tag) {
	    tag.update()
	  })
	}

	/**
	 * Export the Tag constructor
	 */
	riot.Tag = Tag
	  // support CommonJS, AMD & browser
	  /* istanbul ignore next */
	  if (typeof exports === T_OBJECT)
	    module.exports = riot
	  else if ("function" === T_FUNCTION && typeof __webpack_require__(12) !== T_UNDEF)
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return riot }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else
	    window.riot = riot

	})(typeof window != 'undefined' ? window : void 0);


/***/ },
/* 12 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

	var _createStore = __webpack_require__(15);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _combineReducers = __webpack_require__(19);

	var _combineReducers2 = _interopRequireDefault(_combineReducers);

	var _bindActionCreators = __webpack_require__(21);

	var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

	var _applyMiddleware = __webpack_require__(22);

	var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

	var _compose = __webpack_require__(23);

	var _compose2 = _interopRequireDefault(_compose);

	var _warning = __webpack_require__(20);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/*
	* This is a dummy function to check if the function name has been altered by minification.
	* If the function has been minified and NODE_ENV !== 'production', warn the user.
	*/
	function isCrushed() {}

	if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
	  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
	}

	exports.createStore = _createStore2["default"];
	exports.combineReducers = _combineReducers2["default"];
	exports.bindActionCreators = _bindActionCreators2["default"];
	exports.applyMiddleware = _applyMiddleware2["default"];
	exports.compose = _compose2["default"];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.ActionTypes = undefined;
	exports["default"] = createStore;

	var _isPlainObject = __webpack_require__(16);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = exports.ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @param {Function} enhancer The store enhancer. You may optionally specify it
	 * to enhance the store with third-party capabilities such as middleware,
	 * time travel, persistence, etc. The only store enhancer that ships with Redux
	 * is `applyMiddleware()`.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	function createStore(reducer, initialState, enhancer) {
	  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
	    enhancer = initialState;
	    initialState = undefined;
	  }

	  if (typeof enhancer !== 'undefined') {
	    if (typeof enhancer !== 'function') {
	      throw new Error('Expected the enhancer to be a function.');
	    }

	    return enhancer(createStore)(reducer, initialState);
	  }

	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var currentListeners = [];
	  var nextListeners = currentListeners;
	  var isDispatching = false;

	  function ensureCanMutateNextListeners() {
	    if (nextListeners === currentListeners) {
	      nextListeners = currentListeners.slice();
	    }
	  }

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * You may call `dispatch()` from a change listener, with the following
	   * caveats:
	   *
	   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
	   * If you subscribe or unsubscribe while the listeners are being invoked, this
	   * will not have any effect on the `dispatch()` that is currently in progress.
	   * However, the next `dispatch()` call, whether nested or not, will use a more
	   * recent snapshot of the subscription list.
	   *
	   * 2. The listener should not expect to see all states changes, as the state
	   * might have been updated multiple times during a nested `dispatch()` before
	   * the listener is called. It is, however, guaranteed that all subscribers
	   * registered before the `dispatch()` started will be called with the latest
	   * state by the time it exits.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    if (typeof listener !== 'function') {
	      throw new Error('Expected listener to be a function.');
	    }

	    var isSubscribed = true;

	    ensureCanMutateNextListeners();
	    nextListeners.push(listener);

	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }

	      isSubscribed = false;

	      ensureCanMutateNextListeners();
	      var index = nextListeners.indexOf(listener);
	      nextListeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!(0, _isPlainObject2["default"])(action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    var listeners = currentListeners = nextListeners;
	    for (var i = 0; i < listeners.length; i++) {
	      listeners[i]();
	    }

	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    if (typeof nextReducer !== 'function') {
	      throw new Error('Expected the nextReducer to be a function.');
	    }

	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var isHostObject = __webpack_require__(17),
	    isObjectLike = __webpack_require__(18);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototypeOf(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 17 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports["default"] = combineReducers;

	var _createStore = __webpack_require__(15);

	var _isPlainObject = __webpack_require__(16);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _warning = __webpack_require__(20);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
	  var reducerKeys = Object.keys(reducers);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!(0, _isPlainObject2["default"])(inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return !reducers.hasOwnProperty(key);
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	function combineReducers(reducers) {
	  var reducerKeys = Object.keys(reducers);
	  var finalReducers = {};
	  for (var i = 0; i < reducerKeys.length; i++) {
	    var key = reducerKeys[i];
	    if (typeof reducers[key] === 'function') {
	      finalReducers[key] = reducers[key];
	    }
	  }
	  var finalReducerKeys = Object.keys(finalReducers);

	  var sanityError;
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  return function combination() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    if (sanityError) {
	      throw sanityError;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
	      if (warningMessage) {
	        (0, _warning2["default"])(warningMessage);
	      }
	    }

	    var hasChanged = false;
	    var nextState = {};
	    for (var i = 0; i < finalReducerKeys.length; i++) {
	      var key = finalReducerKeys[i];
	      var reducer = finalReducers[key];
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      nextState[key] = nextStateForKey;
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	    }
	    return hasChanged ? nextState : state;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = warning;
	/**
	 * Prints a warning in the console if it exists.
	 *
	 * @param {String} message The warning message.
	 * @returns {void}
	 */
	function warning(message) {
	  /* eslint-disable no-console */
	  if (typeof console !== 'undefined' && typeof console.error === 'function') {
	    console.error(message);
	  }
	  /* eslint-enable no-console */
	  try {
	    // This error was thrown as a convenience so that you can use this stack
	    // to find the callsite that caused this warning to fire.
	    throw new Error(message);
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports["default"] = bindActionCreators;
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null) {
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  var keys = Object.keys(actionCreators);
	  var boundActionCreators = {};
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    var actionCreator = actionCreators[key];
	    if (typeof actionCreator === 'function') {
	      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
	    }
	  }
	  return boundActionCreators;
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.__esModule = true;
	exports["default"] = applyMiddleware;

	var _compose = __webpack_require__(23);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (createStore) {
	    return function (reducer, initialState, enhancer) {
	      var store = createStore(reducer, initialState, enhancer);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;
	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function () {
	    if (funcs.length === 0) {
	      return arguments.length <= 0 ? undefined : arguments[0];
	    }

	    var last = funcs[funcs.length - 1];
	    var rest = funcs.slice(0, -1);

	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}

	module.exports = thunkMiddleware;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(11);

	riot.tag2('score-board-app', '<navbar></navbar> <score-display tasks="{this.state.tasks}"></score-display>', '', '', function(opts) {
	    var actions = __webpack_require__(26);
	    var store = this.opts.store;

	    this.on('mount',function(){
	      store.dispatch(actions.loadTasks());
	    })

	    store.subscribe(function(){
	      this.state = store.getState();
	      this.update();
	    }.bind(this));

	}, '{ }');


/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  loadTasks: loadTasks
	};

	function loadTasks() {
	  return function (dispatch, getState) {
	    // dispatch(toggleLoading(true))
	    var request = new XMLHttpRequest();
	    request.open('GET', 'http://localhost:3000/tasks', true);
	    request.onload = function () {
	      if (request.status >= 200 && request.status < 400) {
	        var data = JSON.parse(request.responseText);
	        dispatch(tasksLoaded(data));
	      }
	      // dispatch(toggleLoading(false))
	    };
	    setTimeout(function () {
	      request.send();
	    }, 2000);
	  };
	}

	function tasksLoaded(tasks) {
	  return { type: 'TASKS_LOADED', data: tasks };
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var riot = __webpack_require__(11);

	riot.tag2('score-display', '<article class="section"> <div class="container"> <h1 class="title">Weekly Board</h1> <button type="button" class="button" name="button" onclick="{toggleMenu}">This Week</button> <ul class="{hide: toggle}"> <li><button type="button" class="button" name="button">Last Week</button></li> <li><button type="button" class="button" name="button">Archive</button></li> </ul> <table class="table"> <thead> <th>Date</th> <th>Player 1</th> <th>Player 2</th> <th>Winner</th> <th>Player1 Deck</th> <th>Player2 Deck</th> </thead> <tbody> <tr each="{this.opts.tasks}"> <td>{date}</td> <td>{player1.name}</td> <td>{player2.name}</td> <td>{player1.winner ? player1.name : player2.name}</td> <td> <span each="{deckColor in player1.deck}" class="mtg-deck mtg-deck-{deckColor}"></span> </td> <td> <span each="{deckColor in player2.deck}" class="mtg-deck mtg-deck-{deckColor}"></span> </td> </tr> </tbody> </table> </div> </article>', '', '', function(opts) {
	      this.toggle = true;

	      this.toggleMenu = function (){
	        this.toggle = !this.toggle;
	      }

	}, '{ }');


/***/ }
/******/ ]);