"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/AuthButton.tsx":
/*!***********************************!*\
  !*** ./components/AuthButton.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AuthButton = function(props) {\n    var ref3;\n    _s();\n    var ref1 = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect)(), 2), connectQuery = ref1[0], connect = ref1[1];\n    var ref2 = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount)(), 1), accountQuery = ref2[0];\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        var ref;\n        if (((ref = connectQuery.error) === null || ref === void 0 ? void 0 : ref.name) === \"ConnectorNotFoundError\") {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"MetaMask extension required to sign in\");\n        }\n    }, [\n        connectQuery.error\n    ]);\n    // If not authenticated, require sign-in\n    if (!((ref3 = accountQuery.data) === null || ref3 === void 0 ? void 0 : ref3.address)) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, _objectSpread({}, props, {\n            onClick: function() {\n                connect(connectQuery.data.connectors[0]);\n            },\n            children: \"Sign In\"\n        }), void 0, false, {\n            fileName: \"/mnt/c/pr0/comments-with-polygon/components/AuthButton.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this));\n    }\n    // If authenticated, show button as usual\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, _objectSpread({}, props, {\n        children: props.children\n    }), void 0, false, {\n        fileName: \"/mnt/c/pr0/comments-with-polygon/components/AuthButton.tsx\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, _this));\n};\n_s(AuthButton, \"fe/aAt1/AeRY+p4mAqwSYpylpEg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useConnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useAccount\n    ];\n});\n_c = AuthButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthButton);\nvar _c;\n$RefreshReg$(_c, \"AuthButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGhCdXR0b24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEI7QUFDd0I7QUFDUjtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUluQyxHQUFLLENBQUNLLFVBQVUsR0FBNkMsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztRQVdsRUMsSUFBaUI7O0lBVnRCLEdBQUssQ0FBMkJKLElBQVksa0JBQVpBLGlEQUFVLFFBQW5DSyxZQUFZLEdBQWFMLElBQVksS0FBdkJNLE9BQU8sR0FBSU4sSUFBWTtJQUM1QyxHQUFLLENBQWtCRCxJQUFZLGtCQUFaQSxpREFBVSxRQUExQkssWUFBWSxHQUFJTCxJQUFZO0lBRW5DRiw0Q0FBZSxDQUFDLFFBQVEsR0FBRixDQUFDO1lBQ2pCUSxHQUFrQjtRQUF0QixFQUFFLElBQUVBLEdBQWtCLEdBQWxCQSxZQUFZLENBQUNHLEtBQUssY0FBbEJILEdBQWtCLEtBQWxCQSxJQUFJLENBQUpBLENBQXdCLEdBQXhCQSxJQUFJLENBQUpBLENBQXdCLEdBQXhCQSxHQUFrQixDQUFFSSxJQUFJLE1BQUssQ0FBd0IseUJBQUUsQ0FBQztZQUMxRFIsNkRBQVcsQ0FBQyxDQUF3QztRQUN0RCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNJO1FBQUFBLFlBQVksQ0FBQ0csS0FBSztJQUFBLENBQUM7SUFFdkIsRUFBd0M7SUFDeEMsRUFBRSxLQUFHSixJQUFpQixHQUFqQkEsWUFBWSxDQUFDTSxJQUFJLGNBQWpCTixJQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBaUIsQ0FBRU8sT0FBTyxHQUFFLENBQUM7UUFDaEMsTUFBTSw2RUFDSGIsb0RBQU0sb0JBQ0RLLEtBQUs7WUFDVFMsT0FBTyxFQUFFLFFBQVEsR0FBRixDQUFDO2dCQUNkTixPQUFPLENBQUNELFlBQVksQ0FBQ0ssSUFBSSxDQUFDRyxVQUFVLENBQUMsQ0FBQztZQUN4QyxDQUFDO3NCQUNGLENBRUQ7Ozs7OztJQUVKLENBQUM7SUFFRCxFQUF5QztJQUN6QyxNQUFNLDZFQUFFZixvREFBTSxvQkFBS0ssS0FBSztrQkFBR0EsS0FBSyxDQUFDVyxRQUFROzs7Ozs7QUFDM0MsQ0FBQztHQTFCS1osVUFBVTs7UUFDa0JGLDZDQUFVO1FBQ25CRCw2Q0FBVTs7O0tBRjdCRyxVQUFVO0FBNEJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXV0aEJ1dHRvbi50c3g/YWUwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Qcm9wcyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbm5lY3QgfSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuXHJcbmludGVyZmFjZSBBdXRoQnV0dG9uUHJvcHMgZXh0ZW5kcyBCdXR0b25Qcm9wcyB7fVxyXG5cclxuY29uc3QgQXV0aEJ1dHRvbjogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8QXV0aEJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjb25uZWN0UXVlcnksIGNvbm5lY3RdID0gdXNlQ29ubmVjdCgpO1xyXG4gIGNvbnN0IFthY2NvdW50UXVlcnldID0gdXNlQWNjb3VudCgpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGNvbm5lY3RRdWVyeS5lcnJvcj8ubmFtZSA9PT0gXCJDb25uZWN0b3JOb3RGb3VuZEVycm9yXCIpIHtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJNZXRhTWFzayBleHRlbnNpb24gcmVxdWlyZWQgdG8gc2lnbiBpblwiKTtcclxuICAgIH1cclxuICB9LCBbY29ubmVjdFF1ZXJ5LmVycm9yXSk7XHJcblxyXG4gIC8vIElmIG5vdCBhdXRoZW50aWNhdGVkLCByZXF1aXJlIHNpZ24taW5cclxuICBpZiAoIWFjY291bnRRdWVyeS5kYXRhPy5hZGRyZXNzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGNvbm5lY3QoY29ubmVjdFF1ZXJ5LmRhdGEuY29ubmVjdG9yc1swXSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIFNpZ24gSW5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gSWYgYXV0aGVudGljYXRlZCwgc2hvdyBidXR0b24gYXMgdXN1YWxcclxuICByZXR1cm4gPEJ1dHRvbiB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0J1dHRvbj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQnV0dG9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwidG9hc3QiLCJBdXRoQnV0dG9uIiwicHJvcHMiLCJhY2NvdW50UXVlcnkiLCJjb25uZWN0UXVlcnkiLCJjb25uZWN0IiwidXNlRWZmZWN0IiwiZXJyb3IiLCJuYW1lIiwiZGF0YSIsImFkZHJlc3MiLCJvbkNsaWNrIiwiY29ubmVjdG9ycyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AuthButton.tsx\n");

/***/ }),

/***/ "./components/CommentEditor.tsx":
/*!**************************************!*\
  !*** ./components/CommentEditor.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _davatar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @davatar/react */ \"./node_modules/@davatar/react/dist/index.js\");\n/* harmony import */ var _davatar_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_davatar_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthButton */ \"./components/AuthButton.tsx\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n/* harmony import */ var _hooks_useAddComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useAddComment */ \"./hooks/useAddComment.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CommentEditor = function(param) {\n    var topic = param.topic;\n    var ref;\n    _s();\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1__.useState(\"\"), 2), message = ref1[0], setMessage = ref1[1];\n    var mutation = (0,_hooks_useAddComment__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    var ref2 = _slicedToArray((0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)(), 1), accountQuery = ref2[0];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n        spacing: 3,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {\n                spacing: 3,\n                alignItems: \"start\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_davatar_react__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        size: 48,\n                        address: ((ref = accountQuery.data) === null || ref === void 0 ? void 0 : ref.address) || ethers__WEBPACK_IMPORTED_MODULE_7__.constants.AddressZero\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Textarea, {\n                        value: message,\n                        onChange: function(e) {\n                            return setMessage(e.target.value);\n                        },\n                        placeholder: \"Write a message..\",\n                        p: 3,\n                        flex: 1,\n                        bg: \"whiteAlpha.100\",\n                        rounded: \"2xl\",\n                        fontSize: \"lg\"\n                    }, void 0, false, {\n                        fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                size: \"sm\",\n                colorScheme: \"pink\",\n                alignSelf: \"flex-end\",\n                onClick: function() {\n                    mutation.mutateAsync({\n                        message: message,\n                        topic: topic\n                    }).then(function() {\n                        return setMessage(\"\");\n                    });\n                },\n                isLoading: mutation.isLoading,\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/mnt/c/pr0/comments-with-polygon/components/CommentEditor.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_s(CommentEditor, \"fqF+NqQmsnxczIvS5NfmfRgUWB4=\", false, function() {\n    return [\n        _hooks_useAddComment__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = CommentEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentEditor);\nvar _c;\n$RefreshReg$(_c, \"CommentEditor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRFZGl0b3IudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQzRCO0FBQ3hCO0FBQ0M7QUFDRTtBQUNIO0FBQ2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxELEdBQUssQ0FBQ1MsYUFBYSxHQUFnRCxRQUMvRCxRQUNFLENBQUM7UUFETEMsS0FBSyxTQUFMQSxLQUFLO1FBV1lDLEdBQWlCOztJQVRsQyxHQUFLLENBQXlCWCxJQUFrQixrQkFBbEJBLDJDQUFjLENBQUMsQ0FBRSxRQUF4Q2EsT0FBTyxHQUFnQmIsSUFBa0IsS0FBaENjLFVBQVUsR0FBSWQsSUFBa0I7SUFDaEQsR0FBSyxDQUFDZSxRQUFRLEdBQUdQLGdFQUFhO0lBQzlCLEdBQUssQ0FBa0JELElBQVksa0JBQVpBLGlEQUFVLFFBQTFCSSxZQUFZLEdBQUlKLElBQVk7SUFFbkMsTUFBTSw2RUFDSEwsbURBQUs7UUFBQ2MsT0FBTyxFQUFFLENBQUM7O3dGQUNkZixvREFBTTtnQkFBQ2UsT0FBTyxFQUFFLENBQUM7Z0JBQUVDLFVBQVUsRUFBQyxDQUFPOztnR0FDbkNaLHVEQUFNO3dCQUNMYSxJQUFJLEVBQUUsRUFBRTt3QkFDUkMsT0FBTyxJQUFFUixHQUFpQixHQUFqQkEsWUFBWSxDQUFDUyxJQUFJLGNBQWpCVCxHQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsSUFBSSxDQUFKQSxDQUEwQixHQUExQkEsR0FBaUIsQ0FBRVEsT0FBTyxLQUFJZix5REFBcUI7Ozs7OztnR0FFN0RELHNEQUFRO3dCQUNQbUIsS0FBSyxFQUFFVCxPQUFPO3dCQUNkVSxRQUFRLEVBQUUsUUFBUSxDQUFQQyxDQUFDOzRCQUFLVixNQUFNLENBQU5BLFVBQVUsQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFNLENBQUNILEtBQUs7O3dCQUMxQ0ksV0FBVyxFQUFDLENBQW1CO3dCQUMvQkMsQ0FBQyxFQUFFLENBQUM7d0JBQ0pDLElBQUksRUFBRSxDQUFDO3dCQUNQQyxFQUFFLEVBQUMsQ0FBZ0I7d0JBQ25CQyxPQUFPLEVBQUMsQ0FBSzt3QkFDYkMsUUFBUSxFQUFDLENBQUk7Ozs7Ozs7Ozs7Ozt3RkFHaEJ6QixtREFBVTtnQkFDVFksSUFBSSxFQUFDLENBQUk7Z0JBQ1RjLFdBQVcsRUFBQyxDQUFNO2dCQUNsQkMsU0FBUyxFQUFDLENBQVU7Z0JBQ3BCQyxPQUFPLEVBQUUsUUFBUSxHQUFGLENBQUM7b0JBQ2RuQixRQUFRLENBQ0xvQixXQUFXLENBQUMsQ0FBQzt3QkFDWnRCLE9BQU8sRUFBUEEsT0FBTzt3QkFDUEgsS0FBSyxFQUFMQSxLQUFLO29CQUNQLENBQUMsRUFDQTBCLElBQUksQ0FBQyxRQUFRO3dCQUFGdEIsTUFBTSxDQUFOQSxVQUFVLENBQUMsQ0FBRTs7Z0JBQzdCLENBQUM7Z0JBQ0R1QixTQUFTLEVBQUV0QixRQUFRLENBQUNzQixTQUFTOzBCQUM5QixDQUVEOzs7Ozs7Ozs7Ozs7QUFHTixDQUFDO0dBM0NLNUIsYUFBYTs7UUFJQUQsNERBQWE7UUFDUEQsNkNBQVU7OztLQUw3QkUsYUFBYTtBQTZDbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbW1lbnRFZGl0b3IudHN4PzJkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhTdGFjaywgU3RhY2ssIFRleHRhcmVhIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgY29uc3RhbnRzIH0gZnJvbSBcImV0aGVyc1wiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAZGF2YXRhci9yZWFjdFwiO1xyXG5pbXBvcnQgQXV0aEJ1dHRvbiBmcm9tIFwiLi9BdXRoQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHVzZUFkZENvbW1lbnQgZnJvbSBcIi4uL2hvb2tzL3VzZUFkZENvbW1lbnRcIjtcclxuXHJcbmludGVyZmFjZSBDb21tZW50RWRpdG9yUHJvcHMge1xyXG4gIHRvcGljOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENvbW1lbnRFZGl0b3I6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PENvbW1lbnRFZGl0b3JQcm9wcz4gPSAoe1xyXG4gIHRvcGljLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgbXV0YXRpb24gPSB1c2VBZGRDb21tZW50KCk7XHJcbiAgY29uc3QgW2FjY291bnRRdWVyeV0gPSB1c2VBY2NvdW50KCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3RhY2sgc3BhY2luZz17M30+XHJcbiAgICAgIDxIU3RhY2sgc3BhY2luZz17M30gYWxpZ25JdGVtcz1cInN0YXJ0XCI+XHJcbiAgICAgICAgPEF2YXRhclxyXG4gICAgICAgICAgc2l6ZT17NDh9XHJcbiAgICAgICAgICBhZGRyZXNzPXthY2NvdW50UXVlcnkuZGF0YT8uYWRkcmVzcyB8fCBjb25zdGFudHMuQWRkcmVzc1plcm99XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8VGV4dGFyZWFcclxuICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSBtZXNzYWdlLi5cIlxyXG4gICAgICAgICAgcD17M31cclxuICAgICAgICAgIGZsZXg9ezF9XHJcbiAgICAgICAgICBiZz1cIndoaXRlQWxwaGEuMTAwXCJcclxuICAgICAgICAgIHJvdW5kZWQ9XCIyeGxcIlxyXG4gICAgICAgICAgZm9udFNpemU9XCJsZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IU3RhY2s+XHJcbiAgICAgIDxBdXRoQnV0dG9uXHJcbiAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICBjb2xvclNjaGVtZT1cInBpbmtcIlxyXG4gICAgICAgIGFsaWduU2VsZj1cImZsZXgtZW5kXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBtdXRhdGlvblxyXG4gICAgICAgICAgICAubXV0YXRlQXN5bmMoe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgdG9waWMsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHNldE1lc3NhZ2UoXCJcIikpO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgaXNMb2FkaW5nPXttdXRhdGlvbi5pc0xvYWRpbmd9XHJcbiAgICAgID5cclxuICAgICAgICBTdWJtaXRcclxuICAgICAgPC9BdXRoQnV0dG9uPlxyXG4gICAgPC9TdGFjaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEVkaXRvcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJIU3RhY2siLCJTdGFjayIsIlRleHRhcmVhIiwiY29uc3RhbnRzIiwiQXZhdGFyIiwiQXV0aEJ1dHRvbiIsInVzZUFjY291bnQiLCJ1c2VBZGRDb21tZW50IiwiQ29tbWVudEVkaXRvciIsInRvcGljIiwiYWNjb3VudFF1ZXJ5IiwidXNlU3RhdGUiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm11dGF0aW9uIiwic3BhY2luZyIsImFsaWduSXRlbXMiLCJzaXplIiwiYWRkcmVzcyIsImRhdGEiLCJBZGRyZXNzWmVybyIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJwIiwiZmxleCIsImJnIiwicm91bmRlZCIsImZvbnRTaXplIiwiY29sb3JTY2hlbWUiLCJhbGlnblNlbGYiLCJvbkNsaWNrIiwibXV0YXRlQXN5bmMiLCJ0aGVuIiwiaXNMb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/CommentEditor.tsx\n");

/***/ })

});