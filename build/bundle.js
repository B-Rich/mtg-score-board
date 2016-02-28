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
/******/ 	__webpack_require__.p = "";

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
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
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
	exports.push([module.id, "html, body, body div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, figure, footer, header, menu, nav, section, time, mark, audio, video, details, summary {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font-weight: normal;\n  vertical-align: baseline;\n  background: transparent; }\n\narticle, aside, figure, footer, header, nav, section, details, summary {\n  display: block; }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\nimg,\nobject,\nembed {\n  max-width: 100%; }\n\nhtml {\n  overflow-y: scroll; }\n\nul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none; }\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted #000;\n  cursor: help; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\nth {\n  font-weight: bold;\n  vertical-align: bottom; }\n\ntd {\n  font-weight: normal;\n  vertical-align: top; }\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0; }\n\ninput, select {\n  vertical-align: middle; }\n\npre {\n  white-space: pre;\n  white-space: pre-wrap;\n  white-space: pre-line;\n  word-wrap: break-word; }\n\ninput[type=\"radio\"] {\n  vertical-align: text-bottom; }\n\ninput[type=\"checkbox\"] {\n  vertical-align: bottom; }\n\nselect, input, textarea {\n  font: 99% sans-serif; }\n\ntable {\n  font-size: inherit;\n  font: 100%; }\n\nsmall {\n  font-size: 85%; }\n\nstrong {\n  font-weight: bold; }\n\ntd, td img {\n  vertical-align: top; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\npre, code, kbd, samp {\n  font-family: monospace, sans-serif; }\n\nlabel,\ninput[type=button],\ninput[type=submit],\ninput[type=file],\nbutton {\n  cursor: pointer; }\n\nbutton, input, select, textarea {\n  margin: 0; }\n\nbutton,\ninput[type=button] {\n  width: auto;\n  overflow: visible; }\n\n@-webkit-keyframes spin-around {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\n@keyframes spin-around {\n  from {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg); } }\n\nhtml {\n  background: #f5f7fa;\n  font-size: 14px;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  min-width: 300px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-rendering: optimizeLegibility; }\n\nhtml.has-modal-open {\n  overflow: hidden; }\n\nbody,\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\ncode,\npre {\n  -moz-osx-font-smoothing: auto;\n  -webkit-font-smoothing: auto;\n  font-family: monospace;\n  line-height: 1.25; }\n\nbody {\n  color: #69707a;\n  font-size: 1rem;\n  line-height: 1.428571428571429; }\n\na {\n  color: #1fc8db;\n  cursor: pointer;\n  text-decoration: none;\n  -webkit-transition: none 86ms ease-out;\n  transition: none 86ms ease-out; }\n\na:hover {\n  color: #222324; }\n\ncode {\n  background: #f5f7fa;\n  color: #ed6c63;\n  font-size: 12px;\n  font-weight: normal;\n  padding: 1px 2px 2px; }\n\nhr {\n  border-top-color: #d3d6db;\n  margin: 20px 0; }\n\nimg {\n  max-width: 100%; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  vertical-align: baseline; }\n\nsmall {\n  font-size: 11px; }\n\nstrong {\n  color: #222324; }\n\narticle,\naside,\nfigure,\nfooter,\nheader,\nhgroup,\nsection {\n  display: block; }\n\npre {\n  background: #f5f7fa;\n  color: #69707a;\n  white-space: pre;\n  word-wrap: normal; }\n\npre code {\n  background: #f5f7fa;\n  color: #69707a;\n  display: block;\n  overflow-x: auto;\n  padding: 16px 20px; }\n\ntable {\n  width: 100%; }\n\ntable th,\ntable td {\n  text-align: left;\n  vertical-align: top; }\n\ntable th {\n  color: #222324; }\n\n.block:not(:last-child), .content:not(:last-child), .title:not(:last-child),\n.subtitle:not(:last-child), .message:not(:last-child), .notification:not(:last-child), .highlight:not(:last-child), .navbar:not(:last-child), .tabs:not(:last-child) {\n  margin-bottom: 20px; }\n\n.container {\n  position: relative; }\n\n@media screen and (min-width: 980px) {\n  .container {\n    margin: 0 auto;\n    max-width: 960px; }\n  .container.is-fluid {\n    margin: 0 20px;\n    max-width: none; } }\n\n.fa {\n  font-size: 21px;\n  text-align: center;\n  vertical-align: top; }\n\n.content.is-medium {\n  font-size: 18px; }\n\n.content.is-medium code {\n  font-size: 14px; }\n\n.content.is-large {\n  font-size: 24px; }\n\n.content.is-large code {\n  font-size: 18px; }\n\n.content h1,\n.content h2,\n.content h3,\n.content h4,\n.content h5,\n.content h6 {\n  color: #222324;\n  font-weight: 300;\n  line-height: 1.125;\n  margin-bottom: 20px; }\n\n.content h1:not(:first-child),\n.content h2:not(:first-child),\n.content h3:not(:first-child) {\n  margin-top: 40px; }\n\n.content h1 {\n  font-size: 2em; }\n\n.content h2 {\n  font-size: 1.75em; }\n\n.content h3 {\n  font-size: 1.5em; }\n\n.content h4 {\n  font-size: 1.25em; }\n\n.content h5 {\n  font-size: 1.125em; }\n\n.content h6 {\n  font-size: 1em; }\n\n.content p:not(:last-child) {\n  margin-bottom: 1em; }\n\n.content li + li {\n  margin-top: 0.25em; }\n\n.content ol {\n  list-style: decimal outside;\n  margin: 1em 2em; }\n\n.content ul {\n  list-style: disc outside;\n  margin: 1em 2em; }\n\n.content ul ul {\n  list-style-type: circle;\n  margin-top: 0.5em; }\n\n.content ul ul ul {\n  list-style-type: square; }\n\n.content blockquote {\n  background: #f5f7fa;\n  border-left: 5px solid #d3d6db;\n  padding: 1.5em; }\n\n.content blockquote:not(:last-child) {\n  margin-bottom: 1em; }\n\n.highlight {\n  background-color: #fdf6e3;\n  color: #586e75; }\n\n.highlight .c {\n  color: #93a1a1; }\n\n.highlight .err,\n.highlight .g {\n  color: #586e75; }\n\n.highlight .k {\n  color: #859900; }\n\n.highlight .l,\n.highlight .n {\n  color: #586e75; }\n\n.highlight .o {\n  color: #859900; }\n\n.highlight .x {\n  color: #cb4b16; }\n\n.highlight .p {\n  color: #586e75; }\n\n.highlight .cm {\n  color: #93a1a1; }\n\n.highlight .cp {\n  color: #859900; }\n\n.highlight .c1 {\n  color: #93a1a1; }\n\n.highlight .cs {\n  color: #859900; }\n\n.highlight .gd {\n  color: #2aa198; }\n\n.highlight .ge {\n  color: #586e75;\n  font-style: italic; }\n\n.highlight .gr {\n  color: #dc322f; }\n\n.highlight .gh {\n  color: #cb4b16; }\n\n.highlight .gi {\n  color: #859900; }\n\n.highlight .go,\n.highlight .gp {\n  color: #586e75; }\n\n.highlight .gs {\n  color: #586e75;\n  font-weight: bold; }\n\n.highlight .gu {\n  color: #cb4b16; }\n\n.highlight .gt {\n  color: #586e75; }\n\n.highlight .kc {\n  color: #cb4b16; }\n\n.highlight .kd {\n  color: #268bd2; }\n\n.highlight .kn,\n.highlight .kp {\n  color: #859900; }\n\n.highlight .kr {\n  color: #268bd2; }\n\n.highlight .kt {\n  color: #dc322f; }\n\n.highlight .ld {\n  color: #586e75; }\n\n.highlight .m,\n.highlight .s {\n  color: #2aa198; }\n\n.highlight .na {\n  color: #B58900; }\n\n.highlight .nb {\n  color: #586e75; }\n\n.highlight .nc {\n  color: #268bd2; }\n\n.highlight .no {\n  color: #cb4b16; }\n\n.highlight .nd {\n  color: #268bd2; }\n\n.highlight .ni,\n.highlight .ne {\n  color: #cb4b16; }\n\n.highlight .nf {\n  color: #268bd2; }\n\n.highlight .nl,\n.highlight .nn,\n.highlight .nx,\n.highlight .py {\n  color: #586e75; }\n\n.highlight .nt,\n.highlight .nv {\n  color: #268bd2; }\n\n.highlight .ow {\n  color: #859900; }\n\n.highlight .w {\n  color: #586e75; }\n\n.highlight .mf,\n.highlight .mh,\n.highlight .mi,\n.highlight .mo {\n  color: #2aa198; }\n\n.highlight .sb {\n  color: #93a1a1; }\n\n.highlight .sc {\n  color: #2aa198; }\n\n.highlight .sd {\n  color: #586e75; }\n\n.highlight .s2 {\n  color: #2aa198; }\n\n.highlight .se {\n  color: #cb4b16; }\n\n.highlight .sh {\n  color: #586e75; }\n\n.highlight .si,\n.highlight .sx {\n  color: #2aa198; }\n\n.highlight .sr {\n  color: #dc322f; }\n\n.highlight .s1,\n.highlight .ss {\n  color: #2aa198; }\n\n.highlight .bp,\n.highlight .vc,\n.highlight .vg,\n.highlight .vi {\n  color: #268bd2; }\n\n.highlight .il {\n  color: #2aa198; }\n\n.is-block {\n  display: block; }\n\n.is-inline {\n  display: inline; }\n\n.is-flex {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.is-clearfix:after {\n  clear: both;\n  content: \" \";\n  display: table; }\n\n.is-pulled-left {\n  float: left; }\n\n.is-pulled-right {\n  float: right; }\n\n.is-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0; }\n\n.is-fullwidth {\n  width: 100%; }\n\n.is-text-centered {\n  text-align: center; }\n\n.is-text-left {\n  text-align: left; }\n\n.is-text-right {\n  text-align: right; }\n\n@media screen and (max-width: 768px) {\n  .is-hidden-mobile {\n    display: none !important; } }\n\n@media screen and (min-width: 769px) {\n  .is-hidden-tablet {\n    display: none !important; } }\n\n@media screen and (max-width: 979px) {\n  .is-hidden-touch {\n    display: none !important; } }\n\n@media screen and (min-width: 980px) {\n  .is-hidden-desktop {\n    display: none !important; } }\n\n.is-disabled {\n  pointer-events: none; }\n\n.is-marginless {\n  margin: 0 !important; }\n\n.is-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.input, .textarea {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-block;\n  font-size: 14px;\n  height: 32px;\n  line-height: 24px;\n  padding: 3px 8px;\n  position: relative;\n  vertical-align: top;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  display: block;\n  max-width: 100%;\n  width: 100%; }\n\n.input:hover, .textarea:hover {\n  border-color: #aeb1b5; }\n\n.input:active, .textarea:active, .input:focus, .textarea:focus {\n  border-color: #1fc8db;\n  outline: none; }\n\n.input[disabled], [disabled].textarea, .input[disabled]:hover, [disabled].textarea:hover {\n  background: #f5f7fa;\n  border-color: #d3d6db; }\n\n.input[disabled]::-moz-placeholder, [disabled].textarea::-moz-placeholder, .input[disabled]:hover::-moz-placeholder, [disabled].textarea:hover::-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.input[disabled]::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, .input[disabled]:hover::-webkit-input-placeholder, [disabled].textarea:hover::-webkit-input-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.input[disabled]:-moz-placeholder, [disabled].textarea:-moz-placeholder, .input[disabled]:hover:-moz-placeholder, [disabled].textarea:hover:-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.input[disabled]:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, .input[disabled]:hover:-ms-input-placeholder, [disabled].textarea:hover:-ms-input-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.input[type=\"search\"], [type=\"search\"].textarea {\n  border-radius: 290486px; }\n\n.input.is-flat, .is-flat.textarea {\n  border: none;\n  box-shadow: none;\n  padding: 4px 8px; }\n\n.input.is-small, .is-small.textarea {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding: 3px 6px; }\n\n.input.is-small.is-flat, .is-small.is-flat.textarea {\n  padding: 4px 6px; }\n\n.input.is-medium, .is-medium.textarea {\n  font-size: 18px;\n  height: 40px;\n  line-height: 32px;\n  padding: 3px 10px; }\n\n.input.is-medium.is-flat, .is-medium.is-flat.textarea {\n  padding: 4px 10px; }\n\n.input.is-large, .is-large.textarea {\n  font-size: 24px;\n  height: 48px;\n  line-height: 40px;\n  padding: 3px 12px; }\n\n.input.is-large.is-flat, .is-large.is-flat.textarea {\n  padding: 4px 12px; }\n\n.input.is-fullwidth, .is-fullwidth.textarea {\n  display: block;\n  width: 100%; }\n\n.input.is-inline, .is-inline.textarea {\n  display: inline;\n  width: auto; }\n\n.textarea {\n  line-height: 1.2;\n  max-height: 600px;\n  max-width: 100%;\n  min-height: 120px;\n  min-width: 100%;\n  padding: 10px;\n  resize: vertical; }\n\n.checkbox, .menu-checkbox, .radio {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 16px;\n  padding-left: 18px;\n  position: relative;\n  vertical-align: top; }\n\n.checkbox input, .menu-checkbox input, .radio input {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-block;\n  font-size: 14px;\n  height: 32px;\n  line-height: 24px;\n  padding: 3px 8px;\n  position: relative;\n  vertical-align: top;\n  border-radius: 1px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  float: left;\n  height: 14px;\n  left: 0;\n  outline: none;\n  padding: 0;\n  position: absolute;\n  top: 1px;\n  width: 14px; }\n\n.checkbox input:hover, .menu-checkbox input:hover, .radio input:hover {\n  border-color: #aeb1b5; }\n\n.checkbox input:active, .menu-checkbox input:active, .radio input:active, .checkbox input:focus, .menu-checkbox input:focus, .radio input:focus {\n  border-color: #1fc8db;\n  outline: none; }\n\n.checkbox input[disabled], .menu-checkbox input[disabled], .radio input[disabled], .checkbox input[disabled]:hover, .menu-checkbox input[disabled]:hover, .radio input[disabled]:hover {\n  background: #f5f7fa;\n  border-color: #d3d6db; }\n\n.checkbox input[disabled]::-moz-placeholder, .menu-checkbox input[disabled]::-moz-placeholder, .radio input[disabled]::-moz-placeholder, .checkbox input[disabled]:hover::-moz-placeholder, .menu-checkbox input[disabled]:hover::-moz-placeholder, .radio input[disabled]:hover::-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.checkbox input[disabled]::-webkit-input-placeholder, .menu-checkbox input[disabled]::-webkit-input-placeholder, .radio input[disabled]::-webkit-input-placeholder, .checkbox input[disabled]:hover::-webkit-input-placeholder, .menu-checkbox input[disabled]:hover::-webkit-input-placeholder, .radio input[disabled]:hover::-webkit-input-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.checkbox input[disabled]:-moz-placeholder, .menu-checkbox input[disabled]:-moz-placeholder, .radio input[disabled]:-moz-placeholder, .checkbox input[disabled]:hover:-moz-placeholder, .menu-checkbox input[disabled]:hover:-moz-placeholder, .radio input[disabled]:hover:-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.checkbox input[disabled]:-ms-input-placeholder, .menu-checkbox input[disabled]:-ms-input-placeholder, .radio input[disabled]:-ms-input-placeholder, .checkbox input[disabled]:hover:-ms-input-placeholder, .menu-checkbox input[disabled]:hover:-ms-input-placeholder, .radio input[disabled]:hover:-ms-input-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.checkbox input:after, .menu-checkbox input:after, .radio input:after {\n  border: 1px solid white;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 7px;\n  pointer-events: none;\n  position: absolute;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 7px;\n  height: 4px;\n  left: 3px;\n  opacity: 0;\n  position: absolute;\n  top: 3px;\n  -webkit-transform: rotate(-45deg) scale(1);\n  transform: rotate(-45deg) scale(1); }\n\n.checkbox input:checked, .menu-checkbox input:checked, .radio input:checked {\n  background: #1fc8db;\n  border-color: #1fc8db;\n  box-shadow: none; }\n\n.checkbox input:checked:after, .menu-checkbox input:checked:after, .radio input:checked:after {\n  opacity: 1; }\n\n.checkbox:hover, .menu-checkbox:hover, .radio:hover {\n  color: #222324; }\n\n.checkbox:hover input, .menu-checkbox:hover input, .radio:hover input {\n  border-color: #aeb1b5; }\n\n.checkbox:hover input:checked, .menu-checkbox:hover input:checked, .radio:hover input:checked {\n  border-color: #1fc8db; }\n\n.is-disabled.checkbox, .is-disabled.menu-checkbox, .is-disabled.radio, .is-disabled.checkbox:hover, .is-disabled.menu-checkbox:hover, .is-disabled.radio:hover {\n  color: #aeb1b5; }\n\n.radio + .radio {\n  margin-left: 10px; }\n\n.radio input {\n  border-radius: 8px; }\n\n.radio input:after {\n  background: white;\n  border: 0;\n  border-radius: 2px;\n  left: 4px;\n  top: 4px;\n  -webkit-transform: none;\n  transform: none;\n  width: 4px; }\n\n.select {\n  display: inline-block;\n  height: 32px;\n  position: relative;\n  vertical-align: top; }\n\n.select select {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-block;\n  font-size: 14px;\n  height: 32px;\n  line-height: 24px;\n  padding: 3px 8px;\n  position: relative;\n  vertical-align: top;\n  cursor: pointer;\n  display: block;\n  outline: none;\n  padding-right: 36px; }\n\n.select select:hover {\n  border-color: #aeb1b5; }\n\n.select select:active, .select select:focus {\n  border-color: #1fc8db;\n  outline: none; }\n\n.select select[disabled], .select select[disabled]:hover {\n  background: #f5f7fa;\n  border-color: #d3d6db; }\n\n.select select[disabled]::-moz-placeholder, .select select[disabled]:hover::-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.select select[disabled]::-webkit-input-placeholder, .select select[disabled]:hover::-webkit-input-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.select select[disabled]:-moz-placeholder, .select select[disabled]:hover:-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.select select[disabled]:-ms-input-placeholder, .select select[disabled]:hover:-ms-input-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.select select:hover {\n  border-color: #aeb1b5; }\n\n.select select::ms-expand {\n  display: none; }\n\n.select:after {\n  border: 1px solid #1fc8db;\n  border-right: 0;\n  border-top: 0;\n  content: \" \";\n  display: block;\n  height: 7px;\n  pointer-events: none;\n  position: absolute;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  width: 7px;\n  margin-top: -6px;\n  right: 16px;\n  top: 50%; }\n\n.select:hover:after {\n  border-color: #222324; }\n\n.control {\n  position: relative;\n  text-align: left; }\n\n.control.is-loading:after {\n  position: absolute !important;\n  right: 8px;\n  top: 8px; }\n\n.control:not(:last-child) {\n  margin-bottom: 10px; }\n\n.control.has-icon > .fa {\n  display: inline-block;\n  font-size: 14px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: top;\n  width: 20px;\n  color: #aeb1b5;\n  left: 6px;\n  pointer-events: none;\n  position: absolute;\n  top: 6px;\n  z-index: 4; }\n\n.control.has-icon .input, .control.has-icon .textarea {\n  padding-left: 32px; }\n\n.control.has-icon .input:focus + .fa, .control.has-icon .textarea:focus + .fa {\n  color: #1fc8db; }\n\n.control.is-horizontal {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.control.is-horizontal > .button:not(:last-child),\n.control.is-horizontal > .input:not(:last-child),\n.control.is-horizontal > .textarea:not(:last-child),\n.control.is-horizontal > .select:not(:last-child) {\n  margin-right: 10px; }\n\n.control.is-horizontal > .input, .control.is-horizontal > .textarea {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.control.is-grouped {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.control.is-grouped .input, .control.is-grouped .textarea,\n.control.is-grouped .button,\n.control.is-grouped .select {\n  border-radius: 0;\n  margin-right: -1px; }\n\n.control.is-grouped .input:hover, .control.is-grouped .textarea:hover,\n.control.is-grouped .button:hover,\n.control.is-grouped .select:hover {\n  z-index: 2; }\n\n.control.is-grouped .input:active, .control.is-grouped .textarea:active, .control.is-grouped .input:focus, .control.is-grouped .textarea:focus,\n.control.is-grouped .button:active,\n.control.is-grouped .button:focus,\n.control.is-grouped .select:active,\n.control.is-grouped .select:focus {\n  z-index: 3; }\n\n.control.is-grouped .input:first-child, .control.is-grouped .textarea:first-child,\n.control.is-grouped .button:first-child,\n.control.is-grouped .select:first-child {\n  border-radius: 3px 0 0 3px; }\n\n.control.is-grouped .input:first-child select, .control.is-grouped .textarea:first-child select,\n.control.is-grouped .button:first-child select,\n.control.is-grouped .select:first-child select {\n  border-radius: 3px 0 0 3px; }\n\n.control.is-grouped .input:last-child, .control.is-grouped .textarea:last-child,\n.control.is-grouped .button:last-child,\n.control.is-grouped .select:last-child {\n  border-radius: 0 3px 3px 0; }\n\n.control.is-grouped.is-centered {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.button {\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: white;\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  color: #222324;\n  display: inline-block;\n  font-size: 14px;\n  height: 32px;\n  line-height: 24px;\n  padding: 3px 8px;\n  position: relative;\n  vertical-align: top;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  padding: 3px 10px;\n  text-align: center;\n  white-space: nowrap; }\n\n.button:hover {\n  border-color: #aeb1b5; }\n\n.button:active, .button:focus {\n  border-color: #1fc8db;\n  outline: none; }\n\n.button[disabled], .button[disabled]:hover {\n  background: #f5f7fa;\n  border-color: #d3d6db; }\n\n.button[disabled]::-moz-placeholder, .button[disabled]:hover::-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.button[disabled]::-webkit-input-placeholder, .button[disabled]:hover::-webkit-input-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.button[disabled]:-moz-placeholder, .button[disabled]:hover:-moz-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.button[disabled]:-ms-input-placeholder, .button[disabled]:hover:-ms-input-placeholder {\n  color: rgba(34, 35, 36, 0.3); }\n\n.button strong {\n  color: inherit; }\n\n.button small {\n  display: block;\n  font-size: 11px;\n  line-height: 1;\n  margin-top: 5px; }\n\n.button .fa {\n  line-height: 24px;\n  margin: 0 -2px;\n  width: 24px; }\n\n.button:hover {\n  color: #222324; }\n\n.button:active {\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2); }\n\n.button.is-dark {\n  background: #222324;\n  border-color: transparent;\n  color: white; }\n\n.button.is-dark:hover, .button.is-dark:focus {\n  background: #090a0a;\n  border-color: transparent;\n  color: white; }\n\n.button.is-dark:active {\n  border-color: transparent; }\n\n.button.is-dark.is-outlined {\n  background: transparent;\n  border-color: #222324;\n  color: #222324; }\n\n.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined:focus {\n  border-color: #090a0a;\n  color: #090a0a; }\n\n.button.is-dark.is-inverted {\n  background: white;\n  color: #222324; }\n\n.button.is-dark.is-inverted:hover {\n  background: #f2f2f2; }\n\n.button.is-dark.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white; }\n\n.button.is-dark.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05); }\n\n.button.is-dark.is-loading:after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-primary {\n  background: #1fc8db;\n  border-color: transparent;\n  color: white; }\n\n.button.is-primary:hover, .button.is-primary:focus {\n  background: #199fae;\n  border-color: transparent;\n  color: white; }\n\n.button.is-primary:active {\n  border-color: transparent; }\n\n.button.is-primary.is-outlined {\n  background: transparent;\n  border-color: #1fc8db;\n  color: #1fc8db; }\n\n.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined:focus {\n  border-color: #199fae;\n  color: #199fae; }\n\n.button.is-primary.is-inverted {\n  background: white;\n  color: #1fc8db; }\n\n.button.is-primary.is-inverted:hover {\n  background: #f2f2f2; }\n\n.button.is-primary.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white; }\n\n.button.is-primary.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05); }\n\n.button.is-primary.is-loading:after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-info {\n  background: #42afe3;\n  border-color: transparent;\n  color: white; }\n\n.button.is-info:hover, .button.is-info:focus {\n  background: #1f99d3;\n  border-color: transparent;\n  color: white; }\n\n.button.is-info:active {\n  border-color: transparent; }\n\n.button.is-info.is-outlined {\n  background: transparent;\n  border-color: #42afe3;\n  color: #42afe3; }\n\n.button.is-info.is-outlined:hover, .button.is-info.is-outlined:focus {\n  border-color: #1f99d3;\n  color: #1f99d3; }\n\n.button.is-info.is-inverted {\n  background: white;\n  color: #42afe3; }\n\n.button.is-info.is-inverted:hover {\n  background: #f2f2f2; }\n\n.button.is-info.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white; }\n\n.button.is-info.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05); }\n\n.button.is-info.is-loading:after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-success {\n  background: #97cd76;\n  border-color: transparent;\n  color: white; }\n\n.button.is-success:hover, .button.is-success:focus {\n  background: #7bbf51;\n  border-color: transparent;\n  color: white; }\n\n.button.is-success:active {\n  border-color: transparent; }\n\n.button.is-success.is-outlined {\n  background: transparent;\n  border-color: #97cd76;\n  color: #97cd76; }\n\n.button.is-success.is-outlined:hover, .button.is-success.is-outlined:focus {\n  border-color: #7bbf51;\n  color: #7bbf51; }\n\n.button.is-success.is-inverted {\n  background: white;\n  color: #97cd76; }\n\n.button.is-success.is-inverted:hover {\n  background: #f2f2f2; }\n\n.button.is-success.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white; }\n\n.button.is-success.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05); }\n\n.button.is-success.is-loading:after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-warning {\n  background: #fce473;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.5); }\n\n.button.is-warning:hover, .button.is-warning:focus {\n  background: #fbda41;\n  border-color: transparent;\n  color: rgba(0, 0, 0, 0.5); }\n\n.button.is-warning:active {\n  border-color: transparent; }\n\n.button.is-warning.is-outlined {\n  background: transparent;\n  border-color: #fce473;\n  color: #fce473; }\n\n.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined:focus {\n  border-color: #fbda41;\n  color: #fbda41; }\n\n.button.is-warning.is-inverted {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fce473; }\n\n.button.is-warning.is-inverted:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n.button.is-warning.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.5);\n  color: rgba(0, 0, 0, 0.5); }\n\n.button.is-warning.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05); }\n\n.button.is-warning.is-loading:after {\n  border-color: transparent transparent rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) !important; }\n\n.button.is-danger {\n  background: #ed6c63;\n  border-color: transparent;\n  color: white; }\n\n.button.is-danger:hover, .button.is-danger:focus {\n  background: #e84135;\n  border-color: transparent;\n  color: white; }\n\n.button.is-danger:active {\n  border-color: transparent; }\n\n.button.is-danger.is-outlined {\n  background: transparent;\n  border-color: #ed6c63;\n  color: #ed6c63; }\n\n.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined:focus {\n  border-color: #e84135;\n  color: #e84135; }\n\n.button.is-danger.is-inverted {\n  background: white;\n  color: #ed6c63; }\n\n.button.is-danger.is-inverted:hover {\n  background: #f2f2f2; }\n\n.button.is-danger.is-inverted.is-outlined {\n  background-color: transparent;\n  border-color: white;\n  color: white; }\n\n.button.is-danger.is-inverted.is-outlined:hover {\n  background: rgba(0, 0, 0, 0.05); }\n\n.button.is-danger.is-loading:after {\n  border-color: transparent transparent white white !important; }\n\n.button.is-small {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding: 3px 6px; }\n\n.button.is-medium {\n  font-size: 18px;\n  height: 40px;\n  padding: 7px 14px; }\n\n.button.is-large {\n  font-size: 22px;\n  height: 48px;\n  padding: 11px 20px; }\n\n.button.is-fullwidth {\n  display: block;\n  width: 100%; }\n\n.button.is-flexible {\n  height: auto; }\n\n.button.is-loading {\n  color: transparent;\n  pointer-events: none; }\n\n.button.is-loading:after {\n  left: 50%;\n  margin-left: -8px;\n  margin-top: -8px;\n  position: absolute;\n  top: 50%;\n  position: absolute !important; }\n\n.button.is-disabled, .button[disabled] {\n  opacity: 0.5;\n  pointer-events: none; }\n\n@media screen and (min-width: 769px) {\n  .button small {\n    color: #69707a;\n    left: 0;\n    margin-top: 10px;\n    position: absolute;\n    top: 100%;\n    width: 100%; } }\n\n.title,\n.subtitle {\n  font-weight: 300; }\n\n.title a:hover,\n.subtitle a:hover {\n  border-bottom: 1px solid; }\n\n.title {\n  color: #222324;\n  font-size: 28px;\n  line-height: 1; }\n\n.title strong {\n  color: inherit; }\n\n.title code {\n  display: inline-block;\n  font-size: 28px; }\n\n.title + .subtitle {\n  margin-top: -10px; }\n\n.title + .highlight {\n  margin-top: -10px; }\n\n.title.is-normal {\n  font-weight: 400; }\n\n.title.is-normal strong {\n  font-weight: 700; }\n\n.title.is-1 {\n  font-size: 48px; }\n\n.title.is-1 code {\n  font-size: 40px; }\n\n.title.is-2 {\n  font-size: 40px; }\n\n.title.is-2 code {\n  font-size: 28px; }\n\n.title.is-3 {\n  font-size: 28px; }\n\n.title.is-3 code {\n  font-size: 24px; }\n\n.title.is-4 {\n  font-size: 24px; }\n\n.title.is-4 code {\n  font-size: 18px; }\n\n.title.is-5 {\n  font-size: 18px; }\n\n.title.is-5 code {\n  font-size: 14px; }\n\n.title.is-6 {\n  font-size: 14px; }\n\n.title.is-6 code {\n  font-size: 14px; }\n\n@media screen and (min-width: 769px) {\n  .title + .subtitle {\n    margin-top: -15px; } }\n\n.subtitle {\n  font-size: 18px;\n  line-height: 1.125; }\n\n.subtitle + .title {\n  margin-top: -20px; }\n\n.subtitle strong {\n  color: #222324;\n  font-weight: 400; }\n\n.subtitle code {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 14px;\n  padding: 2px 3px;\n  vertical-align: top; }\n\n.subtitle + .text {\n  margin-top: 20px; }\n\n.subtitle.is-normal {\n  font-weight: 400; }\n\n.subtitle.is-normal strong {\n  font-weight: 700; }\n\n.subtitle.is-1 {\n  font-size: 48px; }\n\n.subtitle.is-1 code {\n  font-size: 40px; }\n\n.subtitle.is-2 {\n  font-size: 40px; }\n\n.subtitle.is-2 code {\n  font-size: 28px; }\n\n.subtitle.is-3 {\n  font-size: 28px; }\n\n.subtitle.is-3 code {\n  font-size: 24px; }\n\n.subtitle.is-4 {\n  font-size: 24px; }\n\n.subtitle.is-4 code {\n  font-size: 18px; }\n\n.subtitle.is-5 {\n  font-size: 18px; }\n\n.subtitle.is-5 code {\n  font-size: 14px; }\n\n.subtitle.is-6 {\n  font-size: 14px; }\n\n.subtitle.is-6 code {\n  font-size: 14px; }\n\n.image {\n  display: block;\n  position: relative; }\n\n.image img {\n  display: block; }\n\n.image.is-square img, .image.is-1by1 img, .image.is-4by3 img, .image.is-3by2 img, .image.is-16by9 img, .image.is-2by1 img {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 100%; }\n\n.image.is-square, .image.is-1by1 {\n  padding-top: 100%; }\n\n.image.is-4by3 {\n  padding-top: 75%; }\n\n.image.is-3by2 {\n  padding-top: 66.6666%; }\n\n.image.is-16by9 {\n  padding-top: 56.25%; }\n\n.image.is-2by1 {\n  padding-top: 50%; }\n\n.image.is-16x16 {\n  height: 16px;\n  width: 16px; }\n\n.image.is-24x24 {\n  height: 24px;\n  width: 24px; }\n\n.image.is-32x32 {\n  height: 32px;\n  width: 32px; }\n\n.image.is-48x48 {\n  height: 48px;\n  width: 48px; }\n\n.image.is-64x64 {\n  height: 64px;\n  width: 64px; }\n\n.image.is-96x96 {\n  height: 96px;\n  width: 96px; }\n\n.image.is-128x128 {\n  height: 128px;\n  width: 128px; }\n\n.message-body {\n  border: 1px solid #d3d6db;\n  border-radius: 3px;\n  padding: 12px 15px; }\n\n.message-body strong {\n  color: inherit; }\n\n.message-header {\n  background: #69707a;\n  border-radius: 3px 3px 0 0;\n  color: white;\n  font-size: 10px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  padding: 3px 8px;\n  text-transform: uppercase; }\n\n.message-header + .message-body {\n  border-radius: 0 0 3px 3px;\n  border-top: none; }\n\n.message {\n  background: #f5f7fa;\n  border-radius: 3px; }\n\n.message.is-dark {\n  background: whitesmoke; }\n\n.message.is-dark .message-header {\n  background: #222324;\n  color: white; }\n\n.message.is-dark .message-body {\n  border-color: #222324;\n  color: gray; }\n\n.message.is-primary {\n  background: #edfbfc; }\n\n.message.is-primary .message-header {\n  background: #1fc8db;\n  color: white; }\n\n.message.is-primary .message-body {\n  border-color: #1fc8db;\n  color: gray; }\n\n.message.is-info {\n  background: #edf7fc; }\n\n.message.is-info .message-header {\n  background: #42afe3;\n  color: white; }\n\n.message.is-info .message-body {\n  border-color: #42afe3;\n  color: gray; }\n\n.message.is-success {\n  background: #f4faf0; }\n\n.message.is-success .message-header {\n  background: #97cd76;\n  color: white; }\n\n.message.is-success .message-body {\n  border-color: #97cd76;\n  color: gray; }\n\n.message.is-warning {\n  background: #fffbeb; }\n\n.message.is-warning .message-header {\n  background: #fce473;\n  color: rgba(0, 0, 0, 0.5); }\n\n.message.is-warning .message-body {\n  border-color: #fce473;\n  color: #666666; }\n\n.message.is-danger {\n  background: #fdeeed; }\n\n.message.is-danger .message-header {\n  background: #ed6c63;\n  color: white; }\n\n.message.is-danger .message-body {\n  border-color: #ed6c63;\n  color: gray; }\n\n.notification {\n  background: #f5f7fa;\n  border-radius: 3px;\n  padding: 16px 20px;\n  position: relative; }\n\n.notification:after {\n  clear: both;\n  content: \" \";\n  display: table; }\n\n.notification .title {\n  color: inherit; }\n\n.notification.is-dark {\n  background: #222324;\n  color: white; }\n\n.notification.is-primary {\n  background: #1fc8db;\n  color: white; }\n\n.notification.is-info {\n  background: #42afe3;\n  color: white; }\n\n.notification.is-success {\n  background: #97cd76;\n  color: white; }\n\n.notification.is-warning {\n  background: #fce473;\n  color: rgba(0, 0, 0, 0.5); }\n\n.notification.is-danger {\n  background: #ed6c63;\n  color: white; }\n\n.notification .delete, .notification .modal-close {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 0 3px;\n  float: right;\n  margin: -16px -20px 0 20px; }\n\n.notification .delete:hover, .notification .modal-close:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n.box {\n  background: white;\n  border-radius: 5px;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n  padding: 20px; }\n\n.delete, .modal-close {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  background: rgba(0, 0, 0, 0.2);\n  border: none;\n  border-radius: 290486px;\n  cursor: pointer;\n  display: inline-block;\n  height: 24px;\n  position: relative;\n  vertical-align: top;\n  width: 24px; }\n\n.delete:before, .modal-close:before, .delete:after, .modal-close:after {\n  background: white;\n  content: \"\";\n  display: block;\n  height: 2px;\n  left: 50%;\n  margin-left: -25%;\n  margin-top: -1px;\n  position: absolute;\n  top: 50%;\n  width: 50%; }\n\n.delete:before, .modal-close:before {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg); }\n\n.delete:after, .modal-close:after {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg); }\n\n.delete:hover, .modal-close:hover {\n  background: #ed6c63; }\n\n.delete.is-small, .tag:not(.is-large) .delete, .tag:not(.is-large) .modal-close, .is-small.modal-close {\n  height: 16px;\n  width: 16px; }\n\n.delete.is-medium, .is-medium.modal-close {\n  height: 32px;\n  width: 32px; }\n\n.delete.is-large, .is-large.modal-close {\n  height: 40px;\n  width: 40px; }\n\n.icon {\n  display: inline-block;\n  font-size: 21px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  vertical-align: top;\n  width: 24px; }\n\n.icon .fa {\n  font-size: inherit;\n  line-height: inherit; }\n\n.icon.is-small {\n  display: inline-block;\n  font-size: 14px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  vertical-align: top;\n  width: 20px; }\n\n.icon.is-medium {\n  display: inline-block;\n  font-size: 28px;\n  height: 32px;\n  line-height: 32px;\n  text-align: center;\n  vertical-align: top;\n  width: 32px; }\n\n.icon.is-large {\n  display: inline-block;\n  font-size: 42px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n  vertical-align: top;\n  width: 48px; }\n\n.hamburger, .header-toggle {\n  cursor: pointer;\n  display: block;\n  height: 50px;\n  position: relative;\n  width: 50px; }\n\n.hamburger span, .header-toggle span {\n  background: #69707a;\n  display: block;\n  height: 1px;\n  left: 50%;\n  margin-left: -7px;\n  position: absolute;\n  top: 50%;\n  -webkit-transition: none 86ms ease-out;\n  transition: none 86ms ease-out;\n  -webkit-transition-property: background, left, opacity, -webkit-transform;\n  transition-property: background, left, opacity, -webkit-transform;\n  transition-property: background, left, opacity, transform;\n  transition-property: background, left, opacity, transform, -webkit-transform;\n  width: 15px; }\n\n.hamburger span:nth-child(1), .header-toggle span:nth-child(1) {\n  margin-top: -6px; }\n\n.hamburger span:nth-child(2), .header-toggle span:nth-child(2) {\n  margin-top: -1px; }\n\n.hamburger span:nth-child(3), .header-toggle span:nth-child(3) {\n  margin-top: 4px; }\n\n.hamburger:hover, .header-toggle:hover {\n  background: #f5f7fa; }\n\n.hamburger.is-active span, .is-active.header-toggle span {\n  background: #1fc8db; }\n\n.hamburger.is-active span:nth-child(1), .is-active.header-toggle span:nth-child(1) {\n  margin-left: -5px;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  -webkit-transform-origin: left top;\n  transform-origin: left top; }\n\n.hamburger.is-active span:nth-child(2), .is-active.header-toggle span:nth-child(2) {\n  opacity: 0; }\n\n.hamburger.is-active span:nth-child(3), .is-active.header-toggle span:nth-child(3) {\n  margin-left: -5px;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-transform-origin: left bottom;\n  transform-origin: left bottom; }\n\n@media screen and (min-width: 769px) {\n  .hamburger, .header-toggle {\n    height: 50px;\n    width: 50px; } }\n\n.heading {\n  display: block;\n  font-size: 11px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  text-transform: uppercase; }\n\n.highlight {\n  font-size: 12px;\n  font-weight: normal;\n  max-width: 100%;\n  overflow: hidden;\n  padding: 0; }\n\n.highlight pre {\n  overflow: auto;\n  max-width: 100%; }\n\n.image {\n  display: block;\n  position: relative;\n  vertical-align: top; }\n\n.image img {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: block;\n  width: 100%; }\n\n.image.is-3x2 {\n  padding-top: 66.6666%; }\n\n.loader, .control.is-loading:after, .button.is-loading:after {\n  -webkit-animation: spin-around 500ms infinite linear;\n  animation: spin-around 500ms infinite linear;\n  border: 2px solid #d3d6db;\n  border-radius: 290486px;\n  border-right-color: transparent;\n  border-top-color: transparent;\n  content: \"\";\n  display: block;\n  height: 16px;\n  position: relative;\n  width: 16px; }\n\n.number {\n  background: #f5f7fa;\n  border-radius: 290486px;\n  display: inline-block;\n  font-size: 18px;\n  vertical-align: top; }\n\n.tag {\n  background: #f5f7fa;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);\n  color: #69707a;\n  display: inline-block;\n  font-size: 12px;\n  height: 24px;\n  line-height: 16px;\n  padding: 4px 10px;\n  vertical-align: top;\n  white-space: nowrap; }\n\n.tag.is-dark {\n  background: #69707a;\n  color: white; }\n\n.tag.is-rounded {\n  border-radius: 290486px; }\n\n.tag.is-medium {\n  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n  height: 32px;\n  padding: 7px 14px 9px; }\n\n.tag:not(.is-large) .delete, .tag:not(.is-large) .modal-close {\n  margin-left: 4px;\n  margin-right: -6px; }\n\n.tag.is-large {\n  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.1);\n  font-size: 18px;\n  height: 40px;\n  line-height: 24px;\n  padding: 7px 18px 9px; }\n\n.tag.is-large .delete, .tag.is-large .modal-close {\n  margin-left: 4px;\n  margin-right: -8px; }\n\n.tag.is-dark {\n  background: #222324;\n  color: white; }\n\n.tag.is-primary {\n  background: #1fc8db;\n  color: white; }\n\n.tag.is-info {\n  background: #42afe3;\n  color: white; }\n\n.tag.is-success {\n  background: #97cd76;\n  color: white; }\n\n.tag.is-warning {\n  background: #fce473;\n  color: rgba(0, 0, 0, 0.5); }\n\n.tag.is-danger {\n  background: #ed6c63;\n  color: white; }\n\n.column {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  padding: 10px; }\n\n.columns.is-mobile > .column.is-half {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 50%; }\n\n.columns.is-mobile > .column.is-third {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 33.3333%; }\n\n.columns.is-mobile > .column.is-quarter {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 25%; }\n\n.columns.is-mobile > .column.is-offset-half {\n  margin-left: 50%; }\n\n.columns.is-mobile > .column.is-offset-third {\n  margin-left: 33.3333%; }\n\n.columns.is-mobile > .column.is-offset-quarter {\n  margin-left: 25%; }\n\n.columns.is-mobile > .column.is-1 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 8.33333%; }\n\n.columns.is-mobile > .column.is-offset-1 {\n  margin-left: 8.33333%; }\n\n.columns.is-mobile > .column.is-2 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 16.66667%; }\n\n.columns.is-mobile > .column.is-offset-2 {\n  margin-left: 16.66667%; }\n\n.columns.is-mobile > .column.is-3 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 25%; }\n\n.columns.is-mobile > .column.is-offset-3 {\n  margin-left: 25%; }\n\n.columns.is-mobile > .column.is-4 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 33.33333%; }\n\n.columns.is-mobile > .column.is-offset-4 {\n  margin-left: 33.33333%; }\n\n.columns.is-mobile > .column.is-5 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 41.66667%; }\n\n.columns.is-mobile > .column.is-offset-5 {\n  margin-left: 41.66667%; }\n\n.columns.is-mobile > .column.is-6 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 50%; }\n\n.columns.is-mobile > .column.is-offset-6 {\n  margin-left: 50%; }\n\n.columns.is-mobile > .column.is-7 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 58.33333%; }\n\n.columns.is-mobile > .column.is-offset-7 {\n  margin-left: 58.33333%; }\n\n.columns.is-mobile > .column.is-8 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 66.66667%; }\n\n.columns.is-mobile > .column.is-offset-8 {\n  margin-left: 66.66667%; }\n\n.columns.is-mobile > .column.is-9 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 75%; }\n\n.columns.is-mobile > .column.is-offset-9 {\n  margin-left: 75%; }\n\n.columns.is-mobile > .column.is-10 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 83.33333%; }\n\n.columns.is-mobile > .column.is-offset-10 {\n  margin-left: 83.33333%; }\n\n.columns.is-mobile > .column.is-11 {\n  -webkit-box-flex: 0;\n  -webkit-flex: none;\n  -ms-flex: none;\n  flex: none;\n  width: 91.66667%; }\n\n.columns.is-mobile > .column.is-offset-11 {\n  margin-left: 91.66667%; }\n\n@media screen and (max-width: 768px) {\n  .column.is-half-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%; }\n  .column.is-third-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.3333%; }\n  .column.is-quarter-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%; }\n  .column.is-offset-half-mobile {\n    margin-left: 50%; }\n  .column.is-offset-third-mobile {\n    margin-left: 33.3333%; }\n  .column.is-offset-quarter-mobile {\n    margin-left: 25%; }\n  .column.is-1-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1-mobile {\n    margin-left: 8.33333%; }\n  .column.is-2-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2-mobile {\n    margin-left: 16.66667%; }\n  .column.is-3-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3-mobile {\n    margin-left: 25%; }\n  .column.is-4-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4-mobile {\n    margin-left: 33.33333%; }\n  .column.is-5-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5-mobile {\n    margin-left: 41.66667%; }\n  .column.is-6-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6-mobile {\n    margin-left: 50%; }\n  .column.is-7-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7-mobile {\n    margin-left: 58.33333%; }\n  .column.is-8-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8-mobile {\n    margin-left: 66.66667%; }\n  .column.is-9-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9-mobile {\n    margin-left: 75%; }\n  .column.is-10-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10-mobile {\n    margin-left: 83.33333%; }\n  .column.is-11-mobile {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11-mobile {\n    margin-left: 91.66667%; } }\n\n@media screen and (min-width: 769px) {\n  .column.is-half, .column.is-half-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%; }\n  .column.is-third, .column.is-third-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.3333%; }\n  .column.is-quarter, .column.is-quarter-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%; }\n  .column.is-offset-half, .column.is-offset-half-tablet {\n    margin-left: 50%; }\n  .column.is-offset-third, .column.is-offset-third-tablet {\n    margin-left: 33.3333%; }\n  .column.is-offset-quarter, .column.is-offset-quarter-tablet {\n    margin-left: 25%; }\n  .column.is-1, .column.is-1-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1, .column.is-offset-1-tablet {\n    margin-left: 8.33333%; }\n  .column.is-2, .column.is-2-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2, .column.is-offset-2-tablet {\n    margin-left: 16.66667%; }\n  .column.is-3, .column.is-3-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3, .column.is-offset-3-tablet {\n    margin-left: 25%; }\n  .column.is-4, .column.is-4-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4, .column.is-offset-4-tablet {\n    margin-left: 33.33333%; }\n  .column.is-5, .column.is-5-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5, .column.is-offset-5-tablet {\n    margin-left: 41.66667%; }\n  .column.is-6, .column.is-6-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6, .column.is-offset-6-tablet {\n    margin-left: 50%; }\n  .column.is-7, .column.is-7-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7, .column.is-offset-7-tablet {\n    margin-left: 58.33333%; }\n  .column.is-8, .column.is-8-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8, .column.is-offset-8-tablet {\n    margin-left: 66.66667%; }\n  .column.is-9, .column.is-9-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9, .column.is-offset-9-tablet {\n    margin-left: 75%; }\n  .column.is-10, .column.is-10-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10, .column.is-offset-10-tablet {\n    margin-left: 83.33333%; }\n  .column.is-11, .column.is-11-tablet {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11, .column.is-offset-11-tablet {\n    margin-left: 91.66667%; } }\n\n@media screen and (min-width: 980px) {\n  .column.is-half-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%; }\n  .column.is-third-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.3333%; }\n  .column.is-quarter-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%; }\n  .column.is-offset-half-desktop {\n    margin-left: 50%; }\n  .column.is-offset-third-desktop {\n    margin-left: 33.3333%; }\n  .column.is-offset-quarter-desktop {\n    margin-left: 25%; }\n  .column.is-1-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 8.33333%; }\n  .column.is-offset-1-desktop {\n    margin-left: 8.33333%; }\n  .column.is-2-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 16.66667%; }\n  .column.is-offset-2-desktop {\n    margin-left: 16.66667%; }\n  .column.is-3-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 25%; }\n  .column.is-offset-3-desktop {\n    margin-left: 25%; }\n  .column.is-4-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 33.33333%; }\n  .column.is-offset-4-desktop {\n    margin-left: 33.33333%; }\n  .column.is-5-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 41.66667%; }\n  .column.is-offset-5-desktop {\n    margin-left: 41.66667%; }\n  .column.is-6-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 50%; }\n  .column.is-offset-6-desktop {\n    margin-left: 50%; }\n  .column.is-7-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 58.33333%; }\n  .column.is-offset-7-desktop {\n    margin-left: 58.33333%; }\n  .column.is-8-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 66.66667%; }\n  .column.is-offset-8-desktop {\n    margin-left: 66.66667%; }\n  .column.is-9-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 75%; }\n  .column.is-offset-9-desktop {\n    margin-left: 75%; }\n  .column.is-10-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 83.33333%; }\n  .column.is-offset-10-desktop {\n    margin-left: 83.33333%; }\n  .column.is-11-desktop {\n    -webkit-box-flex: 0;\n    -webkit-flex: none;\n    -ms-flex: none;\n    flex: none;\n    width: 91.66667%; }\n  .column.is-offset-11-desktop {\n    margin-left: 91.66667%; } }\n\n.columns {\n  margin-left: -10px;\n  margin-right: -10px;\n  margin-top: -10px; }\n\n.columns:last-child {\n  margin-bottom: -10px; }\n\n.columns:not(:last-child) {\n  margin-bottom: 10px; }\n\n.columns.is-mobile {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.columns.is-gapless {\n  margin-left: 0;\n  margin-right: 0; }\n\n.columns.is-gapless:not(:last-child) {\n  margin-bottom: 20px; }\n\n.columns.is-gapless > .column {\n  margin: 0;\n  padding: 0; }\n\n.columns.is-multiline {\n  -webkit-flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.columns.is-vcentered {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center; }\n\n@media screen and (min-width: 769px) {\n  .columns.is-grid {\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap; }\n  .columns.is-grid > .column {\n    -webkit-flex-basis: 33.3333%;\n    -ms-flex-preferred-size: 33.3333%;\n    flex-basis: 33.3333%;\n    max-width: 33.3333%;\n    padding: 10px;\n    width: 33.3333%; }\n  .columns.is-grid > .column + .column {\n    margin-left: 0; } }\n\n@media screen and (min-width: 769px) {\n  .columns:not(.is-desktop) {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; } }\n\n@media screen and (min-width: 980px) {\n  .columns.is-desktop {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; } }\n\n.navbar-item .title,\n.navbar-item .subtitle {\n  margin-bottom: 0; }\n\n@media screen and (max-width: 768px) {\n  .navbar-item:not(:last-child) {\n    margin-bottom: 10px; } }\n\n.navbar code {\n  border-radius: 3px; }\n\n.navbar img {\n  display: inline-block;\n  vertical-align: top; }\n\n@media screen and (min-width: 769px) {\n  .navbar {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  .navbar > .navbar-item:not(.is-narrow) {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1; } }\n\n.navbar-left .navbar-item.is-flexible,\n.navbar-right .navbar-item.is-flexible {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.navbar-left .navbar-item:not(:last-child),\n.navbar-right .navbar-item:not(:last-child) {\n  margin-right: 10px; }\n\n@media screen and (max-width: 768px) {\n  .navbar-left + .navbar-right {\n    margin-top: 20px; } }\n\n@media screen and (min-width: 769px) {\n  .navbar-left {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; } }\n\n@media screen and (min-width: 769px) {\n  .navbar-right {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; } }\n\n.card-image {\n  display: block;\n  position: relative; }\n\n.card-image img {\n  display: block; }\n\n.card-image.is-square img, .card-image.is-4x3 img, .card-image.is-3x2 img {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 100%; }\n\n.card-image.is-square {\n  padding-top: 100%; }\n\n.card-image.is-4x3 {\n  padding-top: 75%; }\n\n.card-image.is-3x2 {\n  padding-top: 66.6666%; }\n\n.card-content {\n  padding: 20px; }\n\n.card-content .title + .subtitle {\n  margin-top: -20px; }\n\n.card-footer {\n  background: #f5f7fa;\n  display: block;\n  padding: 10px; }\n\n.card {\n  background: white;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n  max-width: 100%;\n  position: relative;\n  width: 300px; }\n\n.card .media:not(:last-child) {\n  margin-bottom: 10px; }\n\n.card.is-rounded {\n  border-radius: 5px; }\n\n.table {\n  background: white;\n  color: #222324;\n  margin-bottom: 20px;\n  width: 100%; }\n\n.table th,\n.table td {\n  border: 1px solid #d3d6db;\n  border-width: 0 0 1px;\n  padding: 8px 10px;\n  vertical-align: top; }\n\n.table th.table-narrow,\n.table td.table-narrow {\n  white-space: nowrap;\n  width: 1%; }\n\n.table th.table-link,\n.table td.table-link {\n  padding: 0; }\n\n.table th.table-link > a,\n.table td.table-link > a {\n  display: block;\n  padding: 8px 10px; }\n\n.table th.table-link > a:hover,\n.table td.table-link > a:hover {\n  background: #1fc8db;\n  color: white; }\n\n.table th.table-icon,\n.table td.table-icon {\n  padding: 5px;\n  text-align: center;\n  white-space: nowrap;\n  width: 1%; }\n\n.table th.table-icon .fa,\n.table td.table-icon .fa {\n  display: inline-block;\n  font-size: 21px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  vertical-align: top;\n  width: 24px; }\n\n.table th.table-icon.table-link,\n.table td.table-icon.table-link {\n  padding: 0; }\n\n.table th.table-icon.table-link > a,\n.table td.table-icon.table-link > a {\n  padding: 5px; }\n\n.table th {\n  color: #222324;\n  text-align: left; }\n\n.table tr:hover {\n  background: rgba(245, 247, 250, 0.5);\n  color: #222324; }\n\n.table tr:last-child td {\n  border-bottom-width: 0; }\n\n.table thead th,\n.table thead td {\n  border-width: 0 0 2px;\n  color: #aeb1b5; }\n\n.table tfoot th,\n.table tfoot td {\n  border-width: 2px 0 0;\n  color: #aeb1b5; }\n\n.table.is-bordered th,\n.table.is-bordered td {\n  border-width: 1px; }\n\n.table.is-bordered tr:last-child td {\n  border-bottom-width: 1px; }\n\n.table.is-narrow th,\n.table.is-narrow td {\n  padding: 5px 10px; }\n\n.table.is-narrow th.table-link,\n.table.is-narrow td.table-link {\n  padding: 0; }\n\n.table.is-narrow th.table-link > a,\n.table.is-narrow td.table-link > a {\n  padding: 5px 10px; }\n\n.table.is-narrow th.table-icon,\n.table.is-narrow td.table-icon {\n  padding: 2px; }\n\n.table.is-narrow th.table-icon.table-link,\n.table.is-narrow td.table-icon.table-link {\n  padding: 0; }\n\n.table.is-narrow th.table-icon.table-link > a,\n.table.is-narrow td.table-icon.table-link > a {\n  padding: 2px; }\n\n.table.is-striped tbody tr:nth-child(2n) {\n  background: rgba(245, 247, 250, 0.5); }\n\n.table.is-striped tbody tr:nth-child(2n):hover {\n  background: #f5f7fa; }\n\n.tabs {\n  line-height: 24px;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n\n.tabs .fa {\n  font-size: 14px;\n  line-height: 20px;\n  margin: 2px -2px;\n  width: 20px; }\n\n.tabs a {\n  border-bottom: 1px solid #d3d6db;\n  color: #69707a;\n  display: block;\n  margin-bottom: -1px;\n  padding: 5px 0;\n  vertical-align: top; }\n\n.tabs a:hover {\n  border-bottom-color: #222324;\n  color: #222324; }\n\n.tabs li {\n  display: block;\n  vertical-align: top; }\n\n.tabs li + li {\n  margin-left: 20px; }\n\n.tabs li.is-active a {\n  border-bottom-color: #1fc8db;\n  color: #1fc8db; }\n\n.tabs ul {\n  border-bottom: 1px solid #d3d6db;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.tabs.is-centered a {\n  padding: 5px 10px; }\n\n.tabs.is-centered li + li {\n  margin-left: 0; }\n\n.tabs.is-centered ul {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center; }\n\n.tabs.is-right ul {\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n  -ms-flex-pack: end;\n  justify-content: flex-end; }\n\n.tabs.is-boxed a {\n  border: 1px solid transparent;\n  border-radius: 3px 3px 0 0;\n  padding: 5px 15px; }\n\n.tabs.is-boxed a:hover {\n  background: #f5f7fa;\n  border-bottom-color: #d3d6db; }\n\n.tabs.is-boxed li + li {\n  margin-left: 5px; }\n\n.tabs.is-boxed li.is-active a {\n  background: white;\n  border-color: #d3d6db;\n  border-bottom-color: transparent; }\n\n.tabs.is-boxed.is-centered li,\n.tabs.is-boxed.is-centered li + li {\n  margin: 0 2px; }\n\n.tabs.is-toggle a {\n  border: 1px solid #d3d6db;\n  margin-bottom: 0;\n  padding: 5px 10px;\n  position: relative; }\n\n.tabs.is-toggle a:hover {\n  background: #f5f7fa;\n  border-color: #aeb1b5;\n  z-index: 2; }\n\n.tabs.is-toggle li + li {\n  margin-left: -1px; }\n\n.tabs.is-toggle li:first-child a {\n  border-radius: 3px 0 0 3px; }\n\n.tabs.is-toggle li:last-child a {\n  border-radius: 0 3px 3px 0; }\n\n.tabs.is-toggle li.is-active a {\n  background: #1fc8db;\n  border-color: #1fc8db;\n  color: white;\n  z-index: 1; }\n\n.tabs.is-toggle ul {\n  border-bottom: none; }\n\n@media screen and (min-width: 769px) {\n  .tabs.is-fullwidth li {\n    -webkit-box-flex: 1;\n    -webkit-flex: 1;\n    -ms-flex: 1;\n    flex: 1; }\n  .tabs.is-fullwidth li + li {\n    margin-left: 0; }\n  .tabs.is-fullwidth ul {\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center; } }\n\n.media-number {\n  background: #f5f7fa;\n  border-radius: 290486px;\n  display: inline-block;\n  font-size: 18px;\n  height: 32px;\n  line-height: 24px;\n  min-width: 32px;\n  padding: 4px 8px;\n  text-align: center;\n  vertical-align: top; }\n\n@media screen and (max-width: 768px) {\n  .media-number {\n    margin-bottom: 10px; } }\n\n@media screen and (min-width: 769px) {\n  .media-number {\n    margin-right: 10px; } }\n\n.media-left {\n  margin-right: 10px; }\n\n.media-right {\n  margin-left: 10px; }\n\n.media-content {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  text-align: left; }\n\n.media {\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: left; }\n\n.media .content:not(:last-child) {\n  margin-bottom: 10px; }\n\n.media .media {\n  border-top: 1px solid rgba(211, 214, 219, 0.5);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px; }\n\n.media .media .textarea {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding: 3px 6px; }\n\n.media .media .button {\n  border-radius: 2px;\n  font-size: 11px;\n  height: 24px;\n  line-height: 16px;\n  padding: 3px 6px; }\n\n.media .media .content:not(:last-child),\n.media .media .control:not(:last-child) {\n  margin-bottom: 5px; }\n\n.media .media .media {\n  font-size: 12px;\n  padding-top: 5px; }\n\n.media .media .media + .media {\n  margin-top: 5px; }\n\n.media + .media {\n  border-top: 1px solid rgba(211, 214, 219, 0.5);\n  margin-top: 10px;\n  padding-top: 10px; }\n\n.media.is-large + .media {\n  margin-top: 20px;\n  padding-top: 20px; }\n\n@media screen and (min-width: 769px) {\n  .media.is-large .media-number {\n    margin-right: 20px; } }\n\n.menu-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 16px;\n  line-height: 16px;\n  text-align: center;\n  vertical-align: top;\n  width: 16px;\n  color: #aeb1b5;\n  float: left;\n  margin: 0 4px 0 -2px; }\n\n.menu-icon .fa {\n  font-size: inherit;\n  line-height: inherit; }\n\n.menu-heading {\n  background: #f5f7fa;\n  border-bottom: 1px solid #d3d6db;\n  border-radius: 4px 4px 0 0;\n  color: #222324;\n  font-size: 18px;\n  font-weight: 300;\n  padding: 10px; }\n\n.menu-list a {\n  color: #69707a; }\n\n.menu-list a:hover {\n  color: #1fc8db; }\n\n.menu-tabs {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 11px;\n  padding: 5px 10px 0;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.menu-tabs:not(:last-child) {\n  border-bottom: 1px solid #d3d6db; }\n\n.menu-tabs a {\n  border-bottom: 1px solid #d3d6db;\n  margin-bottom: -1px;\n  padding: 5px; }\n\n.menu-tabs a.is-active {\n  border-bottom-color: #222324;\n  color: #222324; }\n\n.menu-block {\n  color: #222324;\n  display: block;\n  line-height: 16px;\n  padding: 10px; }\n\n.menu-block:not(:last-child) {\n  border-bottom: 1px solid #d3d6db; }\n\n.menu-block .checkbox, .menu-block .menu-checkbox {\n  border: 1px solid transparent;\n  border-radius: 3px;\n  display: block;\n  padding: 8px;\n  padding-left: 32px; }\n\n.menu-block .checkbox input, .menu-block .menu-checkbox input {\n  left: 9px;\n  top: 9px; }\n\n.menu-block .checkbox:hover, .menu-block .menu-checkbox:hover {\n  border-color: #1fc8db; }\n\na.menu-block:hover {\n  background: #f5f7fa; }\n\n.menu-checkbox {\n  display: block;\n  padding: 9px 10px 9px 30px; }\n\n.menu-checkbox:not(:last-child) {\n  border-bottom: 1px solid #d3d6db; }\n\n.menu-checkbox input {\n  left: 8px;\n  top: 10px; }\n\n.menu {\n  border: 1px solid #d3d6db;\n  border-radius: 5px; }\n\n.menu:not(:last-child) {\n  margin-bottom: 20px; }\n\n.modal-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.86); }\n\n.modal-content {\n  margin: 0 20px;\n  max-height: calc(100vh - 160px);\n  overflow: auto;\n  position: relative;\n  width: 100%; }\n\n@media screen and (min-width: 769px) {\n  .modal-content {\n    margin: 0 auto;\n    max-height: calc(100vh - 40px);\n    width: 640px; } }\n\n.modal-close {\n  background: none;\n  height: 40px;\n  position: fixed;\n  right: 20px;\n  top: 20px;\n  width: 40px; }\n\n.modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  display: none;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  overflow: hidden;\n  position: fixed;\n  z-index: 1986; }\n\n.modal.is-active {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n\n.header {\n  background: white;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n  line-height: 24px;\n  position: relative;\n  text-align: center;\n  z-index: 2; }\n\n.header:after {\n  clear: both;\n  content: \" \";\n  display: table; }\n\n.header .container {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  box-shadow: 0 1px 0 rgba(211, 214, 219, 0.3);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%; }\n\n@media screen and (min-width: 769px) {\n  .header {\n    height: 50px; } }\n\n@media screen and (min-width: 769px) {\n  .header-toggle {\n    display: none; } }\n\n.header-item {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px; }\n\n.header-item img {\n  max-height: 24px; }\n\n.header-item a {\n  color: #69707a; }\n\n.header-item a:hover {\n  color: #222324; }\n\n.header-item a.is-active {\n  color: #222324; }\n\n.header-item .fa {\n  font-size: 21px;\n  line-height: 24px; }\n\n.header-icon {\n  display: inline-block;\n  font-size: 14px;\n  height: 24px;\n  line-height: 24px;\n  text-align: center;\n  vertical-align: top;\n  width: 24px;\n  color: #69707a;\n  margin: 0 5px; }\n\n.header-icon:hover {\n  color: #222324; }\n\n.header-tab {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center;\n  border-bottom: 1px solid transparent;\n  color: #69707a;\n  display: block;\n  height: 50px;\n  line-height: 24px;\n  padding: 13px 15px; }\n\n.header-tab:hover {\n  border-bottom: 1px solid #1fc8db; }\n\n.header-tab.is-active {\n  border-bottom: 3px solid #1fc8db;\n  color: #1fc8db; }\n\n.header-left {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  overflow: hidden;\n  overflow-x: auto;\n  white-space: nowrap; }\n\n@media screen and (min-width: 980px) {\n  .header-left .header-item:first-child {\n    padding-left: 0; } }\n\n.header-center {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  left: 50%;\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n\n.header-right {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  -ms-grid-row-align: stretch;\n  align-items: stretch; }\n\n@media screen and (min-width: 769px) {\n  .header-right {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; } }\n\n@media screen and (min-width: 980px) {\n  .header-right .header-item:last-child {\n    padding-right: 0; } }\n\n.header-full {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%; }\n\n.header-full > .header-item {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  padding: 0; }\n\n.header-full > .header-item > a {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  align-items: center;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  width: 100%; }\n\n@media screen and (max-width: 768px) {\n  .header-menu {\n    background: white;\n    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1);\n    display: none;\n    min-width: 120px;\n    position: absolute;\n    right: 0;\n    top: 50px;\n    z-index: 100; }\n  .header-menu .header-item {\n    border-top: 1px solid rgba(211, 214, 219, 0.5);\n    padding: 10px; }\n  .header-menu.is-active {\n    display: block; } }\n\n.header.is-centered {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.header.is-centered .header-left,\n.header.is-centered .header-center,\n.header.is-centered .header-right {\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.header.is-small {\n  background: #f5f7fa;\n  box-shadow: none;\n  height: 40px;\n  z-index: 1; }\n\n.header.is-small .container {\n  height: 40px; }\n\n.header.is-small .header-tab {\n  font-size: 13px;\n  height: 40px;\n  padding: 8px 10px; }\n\n.header.is-small .header-tab:hover, .header.is-small .header-tab.is-active {\n  border-bottom-width: 2px; }\n\n.hero-video {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: hidden; }\n\n.hero-video.is-transparent {\n  opacity: 0.3; }\n\n.hero-video video {\n  left: 50%;\n  min-height: 100%;\n  min-width: 100%;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n  transform: translate3d(-50%, -50%, 0); }\n\n@media screen and (max-width: 768px) {\n  .hero-video {\n    display: none; } }\n\n.hero-content {\n  padding: 40px 20px; }\n\n@media screen and (min-width: 980px) {\n  .hero-content {\n    padding: 40px 0; } }\n\n.hero-buttons {\n  margin-top: 20px; }\n\n@media screen and (max-width: 768px) {\n  .hero-buttons .button {\n    display: block; }\n  .hero-buttons .button:not(:last-child) {\n    margin-bottom: 10px; } }\n\n@media screen and (min-width: 769px) {\n  .hero-buttons {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  .hero-buttons .button:not(:last-child) {\n    margin-right: 20px; } }\n\n.hero {\n  background: white;\n  text-align: center; }\n\n.hero .header {\n  background: none;\n  box-shadow: none; }\n\n.hero .tabs a {\n  border: none; }\n\n.hero .tabs ul {\n  border-bottom: none; }\n\n.hero .tabs.is-boxed a {\n  padding: 8px 15px; }\n\n.hero.is-alt {\n  background: #f5f7fa;\n  color: #aeb1b5; }\n\n.hero.is-dark {\n  background: #222324;\n  color: white; }\n\n.hero.is-dark .title {\n  color: white; }\n\n.hero.is-dark .title a,\n.hero.is-dark .title strong {\n  color: inherit; }\n\n.hero.is-dark .subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-dark .subtitle strong {\n  color: white; }\n\n.hero.is-dark .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n\n.hero.is-dark .header-icon,\n.hero.is-dark .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-dark .header-icon:hover, .hero.is-dark .header-icon.is-active,\n.hero.is-dark .header-item > a:not(.button):hover,\n.hero.is-dark .header-item > a:not(.button).is-active {\n  opacity: 1; }\n\n.hero.is-dark .tabs a {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-dark .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-dark .tabs li.is-active a {\n  opacity: 1; }\n\n.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {\n  color: white; }\n\n.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1); }\n\n.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #222324; }\n\n.hero.is-dark.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #080a0b 0%, #222324 71%, #2c2e34 100%);\n  background-image: linear-gradient(141deg, #080a0b 0%, #222324 71%, #2c2e34 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-dark .header-toggle span {\n    background: white; }\n  .hero.is-dark .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1); }\n  .hero.is-dark .header-toggle.is-active span {\n    background: white; }\n  .hero.is-dark .header-menu {\n    background: #222324; }\n  .hero.is-dark .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2); } }\n\n.hero.is-primary {\n  background: #1fc8db;\n  color: white; }\n\n.hero.is-primary .title {\n  color: white; }\n\n.hero.is-primary .title a,\n.hero.is-primary .title strong {\n  color: inherit; }\n\n.hero.is-primary .subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-primary .subtitle strong {\n  color: white; }\n\n.hero.is-primary .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n\n.hero.is-primary .header-icon,\n.hero.is-primary .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-primary .header-icon:hover, .hero.is-primary .header-icon.is-active,\n.hero.is-primary .header-item > a:not(.button):hover,\n.hero.is-primary .header-item > a:not(.button).is-active {\n  opacity: 1; }\n\n.hero.is-primary .tabs a {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-primary .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-primary .tabs li.is-active a {\n  opacity: 1; }\n\n.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {\n  color: white; }\n\n.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1); }\n\n.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #1fc8db; }\n\n.hero.is-primary.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #0fb8ad 0%, #1fc8db 71%, #2cb5e8 100%);\n  background-image: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 71%, #2cb5e8 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-primary .header-toggle span {\n    background: white; }\n  .hero.is-primary .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1); }\n  .hero.is-primary .header-toggle.is-active span {\n    background: white; }\n  .hero.is-primary .header-menu {\n    background: #1fc8db; }\n  .hero.is-primary .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2); } }\n\n.hero.is-info {\n  background: #42afe3;\n  color: white; }\n\n.hero.is-info .title {\n  color: white; }\n\n.hero.is-info .title a,\n.hero.is-info .title strong {\n  color: inherit; }\n\n.hero.is-info .subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-info .subtitle strong {\n  color: white; }\n\n.hero.is-info .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n\n.hero.is-info .header-icon,\n.hero.is-info .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-info .header-icon:hover, .hero.is-info .header-icon.is-active,\n.hero.is-info .header-item > a:not(.button):hover,\n.hero.is-info .header-item > a:not(.button).is-active {\n  opacity: 1; }\n\n.hero.is-info .tabs a {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-info .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-info .tabs li.is-active a {\n  opacity: 1; }\n\n.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {\n  color: white; }\n\n.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1); }\n\n.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #42afe3; }\n\n.hero.is-info.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #13bfdf 0%, #42afe3 71%, #53a1eb 100%);\n  background-image: linear-gradient(141deg, #13bfdf 0%, #42afe3 71%, #53a1eb 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-info .header-toggle span {\n    background: white; }\n  .hero.is-info .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1); }\n  .hero.is-info .header-toggle.is-active span {\n    background: white; }\n  .hero.is-info .header-menu {\n    background: #42afe3; }\n  .hero.is-info .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2); } }\n\n.hero.is-success {\n  background: #97cd76;\n  color: white; }\n\n.hero.is-success .title {\n  color: white; }\n\n.hero.is-success .title a,\n.hero.is-success .title strong {\n  color: inherit; }\n\n.hero.is-success .subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-success .subtitle strong {\n  color: white; }\n\n.hero.is-success .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n\n.hero.is-success .header-icon,\n.hero.is-success .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-success .header-icon:hover, .hero.is-success .header-icon.is-active,\n.hero.is-success .header-item > a:not(.button):hover,\n.hero.is-success .header-item > a:not(.button).is-active {\n  opacity: 1; }\n\n.hero.is-success .tabs a {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-success .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-success .tabs li.is-active a {\n  opacity: 1; }\n\n.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {\n  color: white; }\n\n.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1); }\n\n.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #97cd76; }\n\n.hero.is-success.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #8ecb45 0%, #97cd76 71%, #96d885 100%);\n  background-image: linear-gradient(141deg, #8ecb45 0%, #97cd76 71%, #96d885 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-success .header-toggle span {\n    background: white; }\n  .hero.is-success .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1); }\n  .hero.is-success .header-toggle.is-active span {\n    background: white; }\n  .hero.is-success .header-menu {\n    background: #97cd76; }\n  .hero.is-success .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2); } }\n\n.hero.is-warning {\n  background: #fce473;\n  color: rgba(0, 0, 0, 0.5); }\n\n.hero.is-warning .title {\n  color: rgba(0, 0, 0, 0.5); }\n\n.hero.is-warning .title a,\n.hero.is-warning .title strong {\n  color: inherit; }\n\n.hero.is-warning .subtitle {\n  color: rgba(0, 0, 0, 0.7); }\n\n.hero.is-warning .subtitle strong {\n  color: rgba(0, 0, 0, 0.5); }\n\n.hero.is-warning .header .container {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.2); }\n\n.hero.is-warning .header-icon,\n.hero.is-warning .header-item > a:not(.button) {\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.5; }\n\n.hero.is-warning .header-icon:hover, .hero.is-warning .header-icon.is-active,\n.hero.is-warning .header-item > a:not(.button):hover,\n.hero.is-warning .header-item > a:not(.button).is-active {\n  opacity: 1; }\n\n.hero.is-warning .tabs a {\n  color: rgba(0, 0, 0, 0.5);\n  opacity: 0.5; }\n\n.hero.is-warning .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-warning .tabs li.is-active a {\n  opacity: 1; }\n\n.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {\n  color: rgba(0, 0, 0, 0.5); }\n\n.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1); }\n\n.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {\n  background: rgba(0, 0, 0, 0.5);\n  color: #fce473; }\n\n.hero.is-warning.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #ffbd3d 0%, #fce473 71%, #fffe8a 100%);\n  background-image: linear-gradient(141deg, #ffbd3d 0%, #fce473 71%, #fffe8a 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-warning .header-toggle span {\n    background: rgba(0, 0, 0, 0.5); }\n  .hero.is-warning .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1); }\n  .hero.is-warning .header-toggle.is-active span {\n    background: rgba(0, 0, 0, 0.5); }\n  .hero.is-warning .header-menu {\n    background: #fce473; }\n  .hero.is-warning .header-menu .header-item {\n    border-top-color: rgba(0, 0, 0, 0.2); } }\n\n.hero.is-danger {\n  background: #ed6c63;\n  color: white; }\n\n.hero.is-danger .title {\n  color: white; }\n\n.hero.is-danger .title a,\n.hero.is-danger .title strong {\n  color: inherit; }\n\n.hero.is-danger .subtitle {\n  color: rgba(255, 255, 255, 0.7); }\n\n.hero.is-danger .subtitle strong {\n  color: white; }\n\n.hero.is-danger .header .container {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2); }\n\n.hero.is-danger .header-icon,\n.hero.is-danger .header-item > a:not(.button) {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-danger .header-icon:hover, .hero.is-danger .header-icon.is-active,\n.hero.is-danger .header-item > a:not(.button):hover,\n.hero.is-danger .header-item > a:not(.button).is-active {\n  opacity: 1; }\n\n.hero.is-danger .tabs a {\n  color: white;\n  opacity: 0.5; }\n\n.hero.is-danger .tabs a:hover {\n  opacity: 1; }\n\n.hero.is-danger .tabs li.is-active a {\n  opacity: 1; }\n\n.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {\n  color: white; }\n\n.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {\n  background: rgba(0, 0, 0, 0.1); }\n\n.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {\n  background: white;\n  color: #ed6c63; }\n\n.hero.is-danger.is-bold {\n  background-image: -webkit-linear-gradient(309deg, #f32a3e 0%, #ed6c63 71%, #f39376 100%);\n  background-image: linear-gradient(141deg, #f32a3e 0%, #ed6c63 71%, #f39376 100%); }\n\n@media screen and (max-width: 768px) {\n  .hero.is-danger .header-toggle span {\n    background: white; }\n  .hero.is-danger .header-toggle:hover {\n    background: rgba(0, 0, 0, 0.1); }\n  .hero.is-danger .header-toggle.is-active span {\n    background: white; }\n  .hero.is-danger .header-menu {\n    background: #ed6c63; }\n  .hero.is-danger .header-menu .header-item {\n    border-top-color: rgba(255, 255, 255, 0.2); } }\n\n@media screen and (min-width: 769px) {\n  .hero.is-fullheight .tabs, .hero.is-large .tabs {\n    font-size: 18px; } }\n\n@media screen and (min-width: 769px) {\n  .hero.is-medium .hero-content {\n    padding: 120px 20px; } }\n\n@media screen and (min-width: 980px) {\n  .hero.is-medium .hero-content {\n    padding: 120px 0; } }\n\n.hero.is-large .tabs a {\n  padding: 10px 15px; }\n\n@media screen and (min-width: 769px) {\n  .hero.is-large .hero-content {\n    padding: 240px 20px; } }\n\n@media screen and (min-width: 980px) {\n  .hero.is-large .hero-content {\n    padding: 240px 0; } }\n\n.hero.is-fullheight {\n  -webkit-box-align: stretch;\n  -webkit-align-items: stretch;\n  -ms-flex-align: stretch;\n  align-items: stretch;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  min-height: 100vh; }\n\n.hero.is-fullheight .tabs a {\n  padding: 15px 20px; }\n\n.hero.is-fullheight .hero-content {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n  -ms-flex: 1;\n  flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.hero.is-left {\n  text-align: left; }\n\n.hero.is-right {\n  text-align: right; }\n\n.section {\n  background: white;\n  padding: 40px 20px; }\n\n.section + .section {\n  border-top: 1px solid rgba(211, 214, 219, 0.5); }\n\n@media screen and (min-width: 980px) {\n  .section {\n    padding: 40px 0; }\n  .section.is-medium {\n    padding: 120px 0; }\n  .section.is-large {\n    padding: 240px 0; } }\n\n.footer {\n  background: #f5f7fa;\n  padding: 40px 20px 80px; }\n\n.footer a {\n  color: #69707a; }\n\n.footer a:hover {\n  color: #222324; }\n\n.footer a:not(.icon) {\n  border-bottom: 1px solid #d3d6db; }\n\n.footer a:not(.icon):hover {\n  border-bottom-color: #1fc8db; }\n\n/*# sourceMappingURL=bulma.css.map */\n/*\n$grey-darker: #222324\n$grey-dark: #69707a\n$grey: #aeb1b5\n$grey-light: #d3d6db\n$grey-lighter: #f5f7fa\n\n$blue: #42afe3\n$green: #97cd76\n$orange: #f68b39\n$purple: #847bb9\n$red: #ed6c63\n$turquoise: #1fc8db\n$yellow: #fce473*/\n.purple {\n  background: #847bb9;\n  color: #fff; }\n\n.no-border {\n  border: 0 !important; }\n\n.column {\n  border: 1px solid #e5e5e5; }\n\n.score {\n  font-size: 4em;\n  display: block;\n  text-align: center;\n  color: #fff;\n  padding: .3em;\n  font-weight: 600; }\n\n.player {\n  display: block;\n  background: #fdf6e3;\n  font-size: 1.5em; }\n\n.winner {\n  background: #ed6c63; }\n\n.loser {\n  background: #42afe3; }\n\n.tech {\n  font-size: 5em;\n  font-weight: 600;\n  line-height: 0;\n  margin-top: .75em;\n  text-align: center; }\n\n.blog {\n  font-size: 4em;\n  font-weight: 600;\n  text-align: center;\n  display: block;\n  margin-bottom: .25em; }\n\n.circle {\n  background: beige;\n  border-radius: 50%; }\n\n.hide {\n  display: none; }\n\n.mtg-deck {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  background-size: 100% 100%;\n  margin-right: .5em; }\n\n.mtg-deck-green {\n  background-image: url(" + __webpack_require__(5) + "); }\n\n.mtg-deck-red {\n  background-image: url(" + __webpack_require__(6) + "); }\n\n.mtg-deck-black {\n  background-image: url(" + __webpack_require__(7) + "); }\n\n.mtg-deck-white {\n  background-image: url(" + __webpack_require__(8) + "); }\n\n.mtg-deck-blue {\n  background-image: url(" + __webpack_require__(9) + "); }\n", ""]);

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