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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./to-do-list/to-do-list.component */ "./src/app/to-do-list/to-do-list.component.ts");






var routes = [
    { path: "user", component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: "toDoList", component: _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_5__["ToDoListComponent"] },
    { path: "", redirectTo: "user", pathMatch: "full" },
    { path: "**", component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'To Do List';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./to-do-list/to-do-list.component */ "./src/app/to-do-list/to-do-list.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_8__["ErrorComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
                _to_do_list_to_do_list_component__WEBPACK_IMPORTED_MODULE_10__["ToDoListComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"alert alert-info w50\" role=\"alert\">\n      404 Not Found \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    margin: 0;\n    min-width: 250px;\n  }\n  \n  /* Include the padding and border in an element's total width and height */\n  \n  * {\n    box-sizing: border-box;\n  }\n  \n  /* Remove margins and padding from the list */\n  \n  ul {\n    margin: 0;\n    padding: 0;\n  }\n  \n  /* Style the list items */\n  \n  ul li {\n    cursor: pointer;\n    position: relative;\n    padding: 12px 8px 12px 40px;\n    list-style-type: none;\n    background: #eee;\n    font-size: 18px;\n    transition: 0.2s;\n    \n    /* make the list items unselectable */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  /* Set all odd list items to a different color (zebra-stripes) */\n  \n  ul li:nth-child(odd) {\n    background: #f9f9f9;\n  }\n  \n  /* Darker background-color on hover */\n  \n  ul li:hover {\n    background: #ddd;\n  }\n  \n  /* Style the close button */\n  \n  .close {\n    position: absolute;\n    right: 0;\n    top: 0;\n    padding: 12px 16px 12px 16px;\n  }\n  \n  .close:hover {\n    background-color: #f44336;\n    color: white;\n  }\n  \n  /* Style the header */\n  \n  .header {\n    background-color: #197069;\n    padding: 30px 40px;\n    color: white;\n    text-align: center;\n  }\n  \n  /* Clear floats after the header */\n  \n  .header:after {\n    content: \"\";\n    display: table;\n    clear: both;\n  }\n  \n  /* Style the input */\n  \n  input {\n    margin: 0;\n    border: none;\n    border-radius: 0;\n    width: 75%;\n    padding: 10px;\n    float: left;\n    font-size: 16px;\n  }\n  \n  /* Style the \"Add\" button */\n  \n  .addBtn {\n    padding: 10px;\n    width: 25%;\n    background: #8a880d;\n    color: white;\n    float: left;\n    text-align: center; \n    font-size: 16px;\n    cursor: pointer;\n    transition: 0.3s;\n    border-radius: 0;\n  }\n  \n  .addBtn:hover {\n    background-color: #bbb;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG8tZG8tbGlzdC90by1kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBLDBFQUEwRTs7RUFDMUU7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUEsNkNBQTZDOztFQUM3QztJQUNFLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUEseUJBQXlCOztFQUN6QjtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQSxnRUFBZ0U7O0VBQ2hFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBLHFDQUFxQzs7RUFDckM7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBR0EsMkJBQTJCOztFQUMzQjtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0VBRUEscUJBQXFCOztFQUNyQjtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjs7RUFFQSxrQ0FBa0M7O0VBQ2xDO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUEsb0JBQW9COztFQUNwQjtJQUNFLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUEsMkJBQTJCOztFQUMzQjtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3RvLWRvLWxpc3QvdG8tZG8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gIH1cbiAgXG4gIC8qIEluY2x1ZGUgdGhlIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBhbiBlbGVtZW50J3MgdG90YWwgd2lkdGggYW5kIGhlaWdodCAqL1xuICAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICAvKiBSZW1vdmUgbWFyZ2lucyBhbmQgcGFkZGluZyBmcm9tIHRoZSBsaXN0ICovXG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIGxpc3QgaXRlbXMgKi9cbiAgdWwgbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTJweCA4cHggMTJweCA0MHB4O1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIFxuICAgIC8qIG1ha2UgdGhlIGxpc3QgaXRlbXMgdW5zZWxlY3RhYmxlICovXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgfVxuICBcbiAgLyogU2V0IGFsbCBvZGQgbGlzdCBpdGVtcyB0byBhIGRpZmZlcmVudCBjb2xvciAoemVicmEtc3RyaXBlcykgKi9cbiAgdWwgbGk6bnRoLWNoaWxkKG9kZCkge1xuICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIH1cbiAgXG4gIC8qIERhcmtlciBiYWNrZ3JvdW5kLWNvbG9yIG9uIGhvdmVyICovXG4gIHVsIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xuICB9XG4gIFxuICBcbiAgLyogU3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAqL1xuICAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMTJweCAxNnB4IDEycHggMTZweDtcbiAgfVxuICBcbiAgLmNsb3NlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIGhlYWRlciAqL1xuICAuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3MDY5O1xuICAgIHBhZGRpbmc6IDMwcHggNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgdGhlIGhlYWRlciAqL1xuICAuaGVhZGVyOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgaW5wdXQgKi9cbiAgaW5wdXQge1xuICAgIG1hcmdpbjogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB3aWR0aDogNzUlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgXCJBZGRcIiBidXR0b24gKi9cbiAgLmFkZEJ0biB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjUlO1xuICAgIGJhY2tncm91bmQ6ICM4YTg4MGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbiAgXG4gIC5hZGRCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- This Layout was imported From W3schools -->\n\n  <ul class=\"nav nav-pills\" style=\"float:left;\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-item nav-link\" routerLinkActive=\"active\" data-toggle=\"tab\" routerLink=\"/toDoList\">List</a>\n    </li>\n\n  </ul>\n  \n  <ul class=\"nav nav-pills\" style=\"float:right;\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <p class=\"nav-link active\" data-toggle=\"pill\">Welcome : {{userName}}</p>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"pill\" href=\"javascript:void()\" (click)=\"logout()\">Log Out</a>\n    </li>\n  </ul>\n  <br><br>\n  <div class=\"container\" style=\"clear:both\">\n    <div id=\"myDIV\" class=\"header\" *ngIf=\"(hasList == false)\">\n        <h2 style=\"margin:5px\">You Don't have  To-Do-List Yet</h2><br>\n        <span (click)=\"createList()\" class=\"addBtn\">+Create New List</span>\n      </div>\n    <div id=\"myDIV\" class=\"header\" *ngIf=\"(hasList == true)\">\n        <h2 style=\"margin:5px\">My To Do List</h2>\n        <input type=\"text\" id=\"myInput\" placeholder=\"Title...\"  #idref>\n        <span (click)=\"addItem(idref.value);idref.value=''\" class=\"addBtn\">Add</span>\n      </div>\n      <div class=\"alert alert-warning\" role=\"alert\" [textContent]=\"msg\" *ngIf=\"(msg)\">\n          \n        </div>\n      <ul id=\"myUL\" *ngFor=\"let item of items\">\n        <li>{{item.name}} <span class=\"close\" (click)=\"deleteItem(item._id)\">x</span></li>\n      </ul>\n</div>\n          \n"

/***/ }),

/***/ "./src/app/to-do-list/to-do-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/to-do-list/to-do-list.component.ts ***!
  \****************************************************/
/*! exports provided: ToDoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoListComponent", function() { return ToDoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ToDoListComponent = /** @class */ (function () {
    function ToDoListComponent(http, router) {
        this.http = http;
        this.router = router;
        this.baseurl = 'http://localhost:8080/api/list/';
        //private baseurl='https://safe-ravine-48359.herokuapp.com/api/list/';
        this.hasList = false;
        this.check_auth = false;
    }
    ToDoListComponent.prototype.checkToken = function () {
        if (localStorage.getItem('token') != "") {
            this.token = localStorage.getItem('token');
            this.userName = localStorage.getItem('name');
            this.check_auth = true;
        }
        else {
            console.log("Not Authorized");
            this.router.navigate(['toDoList']);
        }
    };
    ToDoListComponent.prototype.getUserList = function () {
        var _this = this;
        return this.http.get(this.baseurl + 'items', { headers: {
                'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token
            } }).subscribe(function (res) {
            console.log(res['list']['items']);
            _this.items = res['list']['items'];
            _this.hasList = true;
        }, function (err) {
            var errMsg = err['message'].split(": ")[1].substr(0, 3);
            if (errMsg == "401") {
                console.log("Unauthor");
                _this.router.navigate(['user']);
                _this.msg = "You are not authorized";
            }
            if (errMsg == "404") {
                console.log("Not Found");
            }
        });
    };
    ToDoListComponent.prototype.createList = function () {
        var _this = this;
        this.msg = null;
        return this.http.post(this.baseurl + 'createList', {}, { headers: {
                'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token
            } }).subscribe(function (res) {
            _this.hasList = true;
        }, function (err) {
            var errMsg = err['message'].split(": ")[1].substr(0, 3);
            if (errMsg == "409") {
                console.log("List Found");
                _this.msg = "You already have a List ";
            }
        });
    };
    ToDoListComponent.prototype.addItem = function (item) {
        var _this = this;
        this.msg = null;
        if (item == "" || item == null) {
            this.msg = "Please Enter Valid Inputs";
            return;
        }
        return this.http.put(this.baseurl + 'addItem', { item: item }, { headers: {
                'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token
            } }).subscribe(function (res) {
            _this.items = res['list']['items'];
        }, function (err) {
            _this.msg = "Unexpeted error We wll try to fix that errro soon";
        });
    };
    ToDoListComponent.prototype.deleteItem = function (itemId) {
        var _this = this;
        this.msg = null;
        return this.http.put(this.baseurl + 'deleteItem', { _id: itemId }, { headers: {
                'Content-Type': 'application/json', 'Authorization': 'bearer ' + this.token
            } }).subscribe(function (res) {
            console.log(res);
            console.log("success");
            _this.items = res['list']['items'];
        }, function (err) {
            _this.msg = "SomeThing Went Wrong";
        });
    };
    ToDoListComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        this.router.navigate(['user']);
    };
    ToDoListComponent.prototype.ngOnInit = function () {
        this.checkToken();
        this.getUserList();
    };
    ToDoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-to-do-list',
            template: __webpack_require__(/*! ./to-do-list.component.html */ "./src/app/to-do-list/to-do-list.component.html"),
            styles: [__webpack_require__(/*! ./to-do-list.component.css */ "./src/app/to-do-list/to-do-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ToDoListComponent);
    return ToDoListComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t/* Coded with love by Mutiullah Samim */\n  body,\n  html {\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    background: #60a3bc !important;\n  }\n  .user_card {\n    height: 400px;\n    width: 350px;\n    margin-top: auto;\n    margin-bottom: auto;\n    background: #f39c12;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    padding: 10px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    border-radius: 5px;\n\n  }\n  .brand_logo_container {\n    position: absolute;\n    height: 170px;\n    width: 170px;\n    top: -75px;\n    border-radius: 50%;\n    background: #60a3bc;\n    padding: 10px;\n    text-align: center;\n  }\n  .brand_logo {\n    height: 150px;\n    width: 150px;\n    border-radius: 50%;\n    border: 2px solid white;\n  }\n  .form_container {\n    margin-top: 100px;\n  }\n  .login_btn {\n    width: 100%;\n    background: #c0392b !important;\n    color: white !important;\n  }\n  .login_btn:focus {\n    box-shadow: none !important;\n    outline: 0px !important;\n  }\n  .login_container {\n    padding: 0 2rem;\n  }\n  .input-group-text {\n    background: #c0392b !important;\n    color: white !important;\n    border: 0 !important;\n    border-radius: 0.25rem 0 0 0.25rem !important;\n  }\n  .input_user,\n  .input_pass:focus {\n    box-shadow: none !important;\n    outline: 0px !important;\n  }\n  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {\n    background-color: #c0392b !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUMsdUNBQXVDO0VBQ3RDOztJQUVFLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLDRFQUE0RTtJQUM1RSxvRkFBb0Y7SUFDcEYsaUZBQWlGO0lBQ2pGLGtCQUFrQjs7RUFFcEI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsNkNBQTZDO0VBQy9DO0VBQ0E7O0lBRUUsMkJBQTJCO0lBQzNCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDIiwiZmlsZSI6InNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcdC8qIENvZGVkIHdpdGggbG92ZSBieSBNdXRpdWxsYWggU2FtaW0gKi9cbiAgYm9keSxcbiAgaHRtbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM2MGEzYmMgIWltcG9ydGFudDtcbiAgfVxuICAudXNlcl9jYXJkIHtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgYmFja2dyb3VuZDogI2YzOWMxMjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICB9XG4gIC5icmFuZF9sb2dvX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIHRvcDogLTc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM2MGEzYmM7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmJyYW5kX2xvZ28ge1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgfVxuICAuZm9ybV9jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICB9XG4gIC5sb2dpbl9idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuICAubG9naW5fYnRuOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3V0bGluZTogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxvZ2luX2NvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICB9XG4gIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG4gIC5pbnB1dF91c2VyLFxuICAuaW5wdXRfcGFzczpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIC5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<head>\n\t<title>My Awesome Login Page</title>\n\t<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.1/css/all.css\" integrity=\"sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP\" crossorigin=\"anonymous\">\n</head>\n\n<div class=\"container h-100\">\n\t\t<div class=\"d-flex justify-content-center h-100\">\n\t\t\t<div class=\"user_card\">\n\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t<div class=\"brand_logo_container\">\n\t\t\t\t\t\t<img src=\"https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png\" class=\"brand_logo\" alt=\"Logo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-center form_container\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t\t</div>\n              <input type=\"text\" name=\"email\" class=\"form-control input_user\" value=\"\" placeholder=\"Email\"\n              [(ngModel)]=\"nUser.email\">\n            </div>\n\n            <div class=\"input-group mb-3\" *ngIf=\"(register == true)\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t\t</div>\n              <input type=\"text\" name=\"name\" class=\"form-control input_user\" value=\"\" placeholder=\"Name\"\n              [(ngModel)]=\"nUser.name\">\n            </div>\n            \n\t\t\t\t\t\t<div class=\"input-group mb-2\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t\t</div>\n              <input type=\"password\" name=\"password\" class=\"form-control input_pass\" value=\"\" placeholder=\"password\"\n               [(ngModel)]=\"nUser.password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n        </div>\n        \n\t\t\t\t<div class=\"d-flex justify-content-center mt-3 login_container\">\n          <button type=\"button\" name=\"button\" class=\"btn login_btn\" *ngIf=\"(register == true)\" (click)=\"signUp()\">Register</button>\n          <button type=\"button\" name=\"button\" class=\"btn login_btn\" *ngIf=\"(register == false)\" (click)=\"signIn()\">Login</button>\n        </div>\n        <br>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<div class=\"d-flex justify-content-center links\" (click)=\"register=true\" *ngIf=\"(register == false)\">\n\t\t\t\t\t\tDon't have an account? <a href=\"javascript:void()\" class=\"ml-2\">Sign Up</a>\n\t\t\t\t\t</div>\n\n          <div class=\"d-flex justify-content-center links\" (click)=\"register=false\" *ngIf=\"(register == true)\">\n\t\t\t\t\t\tAlready have an account? <a href=\"javascript:void()\" class=\"ml-2\">Sign In</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n    </div>\n    <div class=\"alert alert-success\" style=\"text-align:center\" role=\"alert\" [textContent]=\"msg\" *ngIf=\"(msg)\">\n\n    </div>\n\t</div>\n\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/user/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserComponent = /** @class */ (function () {
    function UserComponent(http, router) {
        this.http = http;
        this.router = router;
        this.baseurl = 'http://localhost:8080/api/user/';
        //private baseurl='https://safe-ravine-48359.herokuapp.com/api/user/';
        this.nUser = new _user__WEBPACK_IMPORTED_MODULE_3__["User"](null, null, null);
        this.register = false;
    }
    UserComponent.prototype.signUp = function () {
        var _this = this;
        if (this.nUser.email == null || this.nUser.password == "" || this.nUser.name == "") {
            this.msg = "Please Enter a A valid Data";
            return;
        }
        return this.http.post((this.baseurl + 'signup'), this.nUser).subscribe(function (a) {
            _this.register = false;
            _this.msg = "Account Created Successfully You can Login Now to your account";
        }, function (err) {
            var errMsg = err['message'].split(": ")[1].substr(0, 3);
            if (errMsg == "409") {
                console.log("Unauthor");
                _this.router.navigate(['user']);
                _this.msg = "This mail is already Existed";
            }
        });
    };
    UserComponent.prototype.signIn = function () {
        var _this = this;
        return this.http.post((this.baseurl + 'signin'), this.nUser).subscribe(function (a) {
            if (a.hasOwnProperty('token')) {
                console.log("Success");
                localStorage.setItem('token', a['token']);
                localStorage.setItem('name', a['name']);
                _this.msg = "";
                _this.router.navigate(['toDoList']);
            }
        }, function (err) {
            console.log("Failed");
            _this.msg = "Wrong Email/ Password";
        });
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.ts":
/*!******************************!*\
  !*** ./src/app/user/user.ts ***!
  \******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    return User;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/ahmed/MIX/Learn More/To-Do-Task/To-Do-Client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map