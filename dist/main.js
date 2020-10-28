/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/client.js":
/*!***************************!*\
  !*** ./src/api/client.js ***!
  \***************************/
/*! namespace exports */
/*! export deleteCustomer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCustomer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCustomers [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saveCustomer [provided] [no usage info] [missing usage info prevents renaming] */
/*! export updateCustomer [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCustomers\": () => /* binding */ getCustomers,\n/* harmony export */   \"saveCustomer\": () => /* binding */ saveCustomer,\n/* harmony export */   \"deleteCustomer\": () => /* binding */ deleteCustomer,\n/* harmony export */   \"getCustomer\": () => /* binding */ getCustomer,\n/* harmony export */   \"updateCustomer\": () => /* binding */ updateCustomer\n/* harmony export */ });\nconst url = \"http://localhost:4000/clientes\"\nconst urlPost = \"http://localhost:4000/clientes/cliente\"\nconst urlDelete = \"http://localhost:4000/clientes/cliente/id\"\n\nconst getCustomers = () => {\n    return fetch(url, {\n      method: \"get\"\n    })\n      .then(response => {\n        return response.json();\n      })\n      .then(json => {\n        return json;\n      });\n  };\n\nconst saveCustomer = (nome, cpf) => {\n  const json = JSON.stringify({\n    nome: nome,\n    cpf: cpf\n  })\n  return fetch(urlPost, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: json\n  })\n  .then(response => {\n    return response.body\n  })\n}\n\nconst deleteCustomer = id => {\n  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\n    method: \"DELETE\"\n  })\n}\n\nconst getCustomer = id => {\n  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\n    method: \"GET\"\n  })\n  .then(response => {\n    return response.json()\n  })\n}\n\nconst updateCustomer = (id, cpf, name) => {\n  const json = JSON.stringify({\n    nome: name,\n    cpf: cpf\n  })\n  return fetch(`http://localhost:4000/clientes/cliente/${id}`, {\n    method: 'PUT',\n    headers: {\n      'Content-type': 'application/json'\n    },\n    body: json\n  })\n}\n\n\n\n//# sourceURL=webpack://js-webpack-spa-course/./src/api/client.js?");

/***/ }),

/***/ "./src/components/list/customers.js":
/*!******************************************!*\
  !*** ./src/components/list/customers.js ***!
  \******************************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/client.js */ \"./src/api/client.js\");\n\n\nconst removeCustomer = id => {\n  if(confirm(\"Remove customer?\")) {\n    ;(0,_api_client_js__WEBPACK_IMPORTED_MODULE_0__.deleteCustomer)(id)\n    document.location.reload()\n  }\n}\n\nconst listCustomers = (cpf, nome, id) => {\n    const line = document.createElement(\"tr\");\n  \n    const content = `\n        <td>${cpf}</td>\n        <td>${nome}</td>\n        <button type=\"button\" class=\"btn btn-danger button-list\" onclick=\"removeCustomer(${id})\">Remove</button>\n        <a href=\"components/update/edit.html?id=${id}\">\n          <button type=\"button\" class=\"btn btn-info button-list\">Edit</button>\n        </a>\n    `;\n  \n    line.innerHTML = content;\n  \n    return line;\n  };\n  \n  const table = document.querySelector(\"[data-content-table]\");\n  \n  (0,_api_client_js__WEBPACK_IMPORTED_MODULE_0__.getCustomers)().then(customers => {\n    customers.forEach(customer => {\n        table.appendChild(listCustomers(customer.cpf, customer.nome, customer.id));\n    });\n  });\n\n//# sourceURL=webpack://js-webpack-spa-course/./src/components/list/customers.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/components/list/customers.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;