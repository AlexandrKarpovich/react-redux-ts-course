"use strict";
exports.__esModule = true;
var redux_1 = require("redux");
var redux_thunk_1 = require("redux-thunk");
exports.store = redux_1.createStore({}, redux_1.applyMiddleware(redux_thunk_1["default"]));

//# sourceMappingURL=index.js.map
