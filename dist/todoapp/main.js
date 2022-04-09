(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n    <header>\n        <h1>Todo List</h1>\n    </header>\n    <app-todos></app-todos>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'todoapp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/todos/todos.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/todos/todos.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo {\r\n\tdisplay: flex;\r\n\tpadding: 10px 15px;\r\n\tbackground-color: #FFF;\r\n\tborder-bottom: 1px solid #DDD;\r\n}\r\n\r\n.todo:nth-child(even) {\r\n\tbackground-color: #EEE;\r\n}\r\n\r\n.todo:last-of-type {\r\n\tborder-bottom: 0;\r\n}\r\n\r\n.todo .id {\r\n\tflex: 1 1 50px;\r\n}\r\n\r\n.todo .content {\r\n\tflex: 1 1 100%;\r\n}\r\n\r\n.todo.done .content {\r\n\ttext-decoration: line-through;\r\n}\r\n\r\n.todo-input {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tpadding: 10px 15px;\r\n\t-webkit-appearance: none;\r\n\t   -moz-appearance: none;\r\n\t        appearance: none;\r\n\tborder: none;\r\n\tbackground-color: #F3F3F3;\r\n\tmargin-top: 15px;\r\n\tfont-size: 20px;\r\n\toutline: none;\r\n}\r\n\r\n.todo-submit {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tmax-width: 200px;\r\n\t-webkit-appearance: none;\r\n\t   -moz-appearance: none;\r\n\t        appearance: none;\r\n\tborder: none;\r\n\toutline: none;\r\n\tbackground: none;\r\n\r\n\tbackground-color: #FE4880;\r\n\tcolor: #FFF;\r\n\tmargin: 15px auto;\r\n\r\n\tpadding: 10px 15px;\r\n\tfont-size: 18px;\r\n\tfont-weight: 700;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsY0FBYztDQUNkLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLHdCQUFnQjtJQUFoQixxQkFBZ0I7U0FBaEIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixhQUFhO0NBQ2IsZ0JBQWdCOztDQUVoQix5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGlCQUFpQjs7Q0FFakIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG9zL3RvZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kbyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0RERDtcclxufVxyXG5cclxuLnRvZG86bnRoLWNoaWxkKGV2ZW4pIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG59XHJcblxyXG4udG9kbzpsYXN0LW9mLXR5cGUge1xyXG5cdGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50b2RvIC5pZCB7XHJcblx0ZmxleDogMSAxIDUwcHg7XHJcbn1cclxuXHJcbi50b2RvIC5jb250ZW50IHtcclxuXHRmbGV4OiAxIDEgMTAwJTtcclxufVxyXG5cclxuLnRvZG8uZG9uZSAuY29udGVudCB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi50b2RvLWlucHV0IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4udG9kby1zdWJtaXQge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogMjAwcHg7XHJcblx0YXBwZWFyYW5jZTogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kOiBub25lO1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkU0ODgwO1xyXG5cdGNvbG9yOiAjRkZGO1xyXG5cdG1hcmdpbjogMTVweCBhdXRvO1xyXG5cclxuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/todos/todos.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/todos/todos.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todos\">\n    <form (submit)=\"addTodo()\">\n        <input type=\"text\" name=\"inputTodo\" placeholder=\"Enter Todo...\" class=\"todo-input\" [(ngModel)]=\"inputTodo\" />\n        <input type=\"submit\" value=\"add todo\" class=\"todo-submit\">\n    </form>\n    <div class=\"todo {{(item.completed ? 'done' :'')}}\" *ngFor=\"let item of todos; let i= index;\">\n        <div class=\"id\">{{i}}</div>\n        <div class=\"content\" (click)=\"toggleDone(i)\">{{item.content}}</div>\n        <button class=\"delete\" (click)=\"deleteTodo(i)\">Remove</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/todos/todos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/todos/todos.component.ts ***!
  \*****************************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TodosComponent = /** @class */ (function () {
    function TodosComponent() {
        this.inputTodo = "";
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.todos = [
            {
                content: 'First todo',
                completed: false
            }, {
                content: 'Second Todo',
                completed: false
            }
        ];
    };
    TodosComponent.prototype.toggleDone = function (id) {
        this.todos.map(function (v, i) {
            if (i == id)
                v.completed = !v.completed;
            return v;
        });
    };
    TodosComponent.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (v, i) { return i !== id; });
    };
    TodosComponent.prototype.addTodo = function () {
        this.todos.push({
            content: this.inputTodo,
            completed: false
        });
        this.inputTodo = "";
    };
    TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/components/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/components/todos/todos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project Rumahan\todoapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map