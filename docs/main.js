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

module.exports = ":host {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    top: 0;\r\n}\r\n\r\n.navWrapper {\r\n    width: 100%;\r\n    height: 100%;\r\n    color: #222;\r\n    box-shadow: 0 2px 3px rgba(0, 0, 0, .37), 1px 2px 3px rgba(0, 0, 0, .54);\r\n    z-index: 2; /* for it to be on top of some other elements */\r\n}\r\n\r\n.application {\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-rows: 15% 0 85%;\r\n}\r\n\r\n/* we don't want the router-outlet to be rendered! */\r\n\r\nrouter-outlet {\r\n    height: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsTUFBTTtBQUNWOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0VBQXdFO0lBQ3hFLFVBQVUsRUFBRSwrQ0FBK0M7QUFDL0Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7QUFFQSxvREFBb0Q7O0FBQ3BEO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5uYXZXcmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAuMzcpLCAxcHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIC41NCk7XHJcbiAgICB6LWluZGV4OiAyOyAvKiBmb3IgaXQgdG8gYmUgb24gdG9wIG9mIHNvbWUgb3RoZXIgZWxlbWVudHMgKi9cclxufVxyXG5cclxuLmFwcGxpY2F0aW9uIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSAwIDg1JTtcclxufVxyXG5cclxuLyogd2UgZG9uJ3Qgd2FudCB0aGUgcm91dGVyLW91dGxldCB0byBiZSByZW5kZXJlZCEgKi9cclxucm91dGVyLW91dGxldCB7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"application\">\r\n    <div class=\"navWrapper\">\r\n        <app-navbar></app-navbar>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n</div>"

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
        this.title = 'DeChat';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-popup/login-popup.component */ "./src/app/login-popup/login-popup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _chatComponents_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chatComponents/chat-form/chat-form.component */ "./src/app/chatComponents/chat-form/chat-form.component.ts");
/* harmony import */ var _chatComponents_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chatComponents/chatroom/chatroom.component */ "./src/app/chatComponents/chatroom/chatroom.component.ts");
/* harmony import */ var _chatComponents_feed_feed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chatComponents/feed/feed.component */ "./src/app/chatComponents/feed/feed.component.ts");
/* harmony import */ var _chatComponents_message_message_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chatComponents/message/message.component */ "./src/app/chatComponents/message/message.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebarComponents_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebarComponents/chat-list/chat-list.component */ "./src/app/sidebarComponents/chat-list/chat-list.component.ts");
/* harmony import */ var _sidebarComponents_chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sidebarComponents/chat-item/chat-item.component */ "./src/app/sidebarComponents/chat-item/chat-item.component.ts");
/* harmony import */ var _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main-content/main-content.component */ "./src/app/main-content/main-content.component.ts");
/* harmony import */ var _chatComponents_chat_header_chat_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chatComponents/chat-header/chat-header.component */ "./src/app/chatComponents/chat-header/chat-header.component.ts");
/* harmony import */ var _services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/solid/solid.auth.service */ "./src/app/services/solid/solid.auth.service.ts");
/* harmony import */ var _services_solid_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/solid/auth.guard.service */ "./src/app/services/solid/auth.guard.service.ts");
/* harmony import */ var _services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/dechat/chat.service */ "./src/app/services/dechat/chat.service.ts");
/* harmony import */ var _utilComponents_profile_icon_profile_icon_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utilComponents/profile-icon/profile-icon.component */ "./src/app/utilComponents/profile-icon/profile-icon.component.ts");
/* harmony import */ var _chatComponents_multimedia_display_multimedia_display_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./chatComponents/multimedia-display/multimedia-display.component */ "./src/app/chatComponents/multimedia-display/multimedia-display.component.ts");
/* harmony import */ var _dialogComponents_new_chat_dialog_new_chat_dialog_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dialogComponents/new-chat-dialog/new-chat-dialog.component */ "./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _utilComponents_user_display_slot_user_display_slot_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utilComponents/user-display-slot/user-display-slot.component */ "./src/app/utilComponents/user-display-slot/user-display-slot.component.ts");

// Modules







// Components















// Services



// Miscelanea





var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login-popup', component: _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_9__["LoginPopupComponent"] },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
        canActivate: [_services_solid_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
    },
    {
        path: 'card', component: _card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
        canActivate: [_services_solid_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
    },
    {
        path: 'chat', component: _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_21__["MainContentComponent"],
        canActivate: [_services_solid_auth_guard_service__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"]],
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _login_popup_login_popup_component__WEBPACK_IMPORTED_MODULE_9__["LoginPopupComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _chatComponents_chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_14__["ChatFormComponent"],
                _chatComponents_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_15__["ChatroomComponent"],
                _chatComponents_feed_feed_component__WEBPACK_IMPORTED_MODULE_16__["FeedComponent"],
                _chatComponents_message_message_component__WEBPACK_IMPORTED_MODULE_17__["MessageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
                _sidebarComponents_chat_list_chat_list_component__WEBPACK_IMPORTED_MODULE_19__["ChatListComponent"],
                _sidebarComponents_chat_item_chat_item_component__WEBPACK_IMPORTED_MODULE_20__["ChatItemComponent"],
                _main_content_main_content_component__WEBPACK_IMPORTED_MODULE_21__["MainContentComponent"],
                _chatComponents_chat_header_chat_header_component__WEBPACK_IMPORTED_MODULE_22__["ChatHeaderComponent"],
                _utilComponents_profile_icon_profile_icon_component__WEBPACK_IMPORTED_MODULE_26__["ProfileIconComponent"],
                _chatComponents_multimedia_display_multimedia_display_component__WEBPACK_IMPORTED_MODULE_27__["MultimediaDisplayComponent"],
                _dialogComponents_new_chat_dialog_new_chat_dialog_component__WEBPACK_IMPORTED_MODULE_28__["NewChatDialogComponent"],
                _utilComponents_user_display_slot_user_display_slot_component__WEBPACK_IMPORTED_MODULE_30__["UserDisplaySlotComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDialogModule"]
            ],
            entryComponents: [
                _dialogComponents_new_chat_dialog_new_chat_dialog_component__WEBPACK_IMPORTED_MODULE_28__["NewChatDialogComponent"]
            ],
            providers: [_services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_25__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-container {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.profile-container h1 {\r\n  font-size: 24px;\r\n  color: #7C55FB;\r\n  font-weight: bold;\r\n  line-height: 32px;\r\n  letter-spacing: 1.2px;\r\n  text-align: center;\r\n  margin-top: 82px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.profile-fields-container {\r\n  max-width: 740px;\r\n  min-height: 500px;\r\n  margin: 0 auto;\r\n  border: 1px solid #ccc;\r\n  box-shadow: #ccc 1px 1px 4px;\r\n  position: relative;\r\n}\r\n\r\n.profile-fields-container .profile-image-container {\r\n  height: 200px;\r\n  width: 100%;\r\n  background-size: cover !important;\r\n  background: url('/dechat_en1a/assets/images/Solid_Pattern.png');\r\n}\r\n\r\n.profile-fields-container .profile-image-container img {\r\n  height: 128px;\r\n  border-radius: 50%;\r\n  margin-left: auto;\r\n  margin-right:auto;\r\n  position: relative;\r\n  top:40px;\r\n  display: block;\r\n}\r\n\r\n.profile-fields-container i {\r\n  font-size: 14px;\r\n  color: #89969F;\r\n  padding-left: 26px;\r\n  padding-right: 10px;\r\n  margin-top: 24px;\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text {\r\n  height: 12px;\r\n  width: 280px;\r\n  border: 1px solid #89969F;\r\n  border-radius: 4px;\r\n  padding: 10px;\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::-webkit-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text:-ms-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::-ms-input-placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-fields-container input[type=text].field-text::placeholder {\r\n  color: rgba(102,102,102,0.2);\r\n}\r\n\r\n.profile-save-button-container {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: auto;\r\n  height: 100px;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.profile-save-button {\r\n  background-color: #7C55FB;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 280px;\r\n}\r\n\r\n.profile-save-button:disabled {\r\n  background-color: #F0EEEB;\r\n  border-color: #F0EEEB;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.topnav {\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 100%;\r\n  background-color: #7C4DFF;\r\n  height: 50px;\r\n  color: #fff;\r\n}\r\n\r\n.topnav .logo {\r\n  display: inline-block;\r\n  font-family: 'Roboto Slab', serif;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n  line-height: 32px;\r\n  padding-right: 80px;\r\n  position: relative;\r\n  top: -8px;\r\n  left: 28px;\r\n}\r\n\r\n.topnav .menu-item {\r\n  display: inline-block;\r\n  font-size: 10px;\r\n  line-height: 13px;\r\n  width: 100px;\r\n  height: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.topnav .menu-item i {\r\n  font-size: 24px;\r\n  margin-top:8px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.topnav .profile-menu {\r\n  float: right;\r\n  display: inline-block;\r\n  width: 50px;\r\n  height: 50px;\r\n  background-color: rgba(0,0,0,0.25);\r\n}\r\n\r\n.topnav .profile-menu img {\r\n  display: block;\r\n  height: 30px;\r\n  width: 30px;\r\n  border-radius: 50%;\r\n  margin: 0 auto;\r\n  margin-top:10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.loading-image {\r\n  text-align: center;\r\n  margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlDQUFpQztFQUNqQywrREFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRkE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLEtBQUs7RUFDTCxNQUFNO0VBQ04sV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtY29udGFpbmVyIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5wcm9maWxlLWNvbnRhaW5lciBoMSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiAjN0M1NUZCO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogODJweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDc0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNoYWRvdzogI2NjYyAxcHggMXB4IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9maWxlLWZpZWxkcy1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL1NvbGlkX1BhdHRlcm4ucG5nJyk7XHJcbn1cclxuXHJcbi5wcm9maWxlLWZpZWxkcy1jb250YWluZXIgLnByb2ZpbGUtaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgaGVpZ2h0OiAxMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDo0MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGkge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzg5OTY5RjtcclxuICBwYWRkaW5nLWxlZnQ6IDI2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0uZmllbGQtdGV4dCB7XHJcbiAgaGVpZ2h0OiAxMnB4O1xyXG4gIHdpZHRoOiAyODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODk5NjlGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1maWVsZHMtY29udGFpbmVyIGlucHV0W3R5cGU9dGV4dF0uZmllbGQtdGV4dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiByZ2JhKDEwMiwxMDIsMTAyLDAuMik7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNhdmUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNhdmUtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0M1NUZCO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNhdmUtYnV0dG9uOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBFRUVCO1xyXG4gIGJvcmRlci1jb2xvcjogI0YwRUVFQjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4udG9wbmF2IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdDNERGRjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50b3BuYXYgLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogODBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtOHB4O1xyXG4gIGxlZnQ6IDI4cHg7XHJcbn1cclxuXHJcbi50b3BuYXYgLm1lbnUtaXRlbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTNweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRvcG5hdiAubWVudS1pdGVtIGkge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tdG9wOjhweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi50b3BuYXYgLnByb2ZpbGUtbWVudSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjI1KTtcclxufVxyXG5cclxuLnRvcG5hdiAucHJvZmlsZS1tZW51IGltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9hZGluZy1pbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\r\n  <!-- EXAMPLE TOP NAV -->\r\n  <div class=\"topnav\">\r\n    <div class=\"logo\">Solid</div>\r\n    <div class=\"menu-item\">\r\n      <div>\r\n        <i class=\"far fa-compass\"></i>\r\n      </div>\r\n      Menu Item 1\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <div>\r\n        <i class=\"far fa-comment\"></i>\r\n      </div>\r\n      Menu Item 2\r\n    </div>\r\n    <div class=\"menu-item\">\r\n      <div>\r\n        <i class=\"fas fa-sliders-h\"></i>\r\n      </div>\r\n      Menu Item 3\r\n    </div>\r\n\r\n    <div class=\"profile-menu\" (click)=\"logout()\">\r\n      <img [src]=\"profileImage\" />\r\n    </div>\r\n  </div>\r\n  <h1>Profile</h1>\r\n\r\n  <!-- LOADING IMAGE -->\r\n  <div class=\"loading-image\" *ngIf=\"loadingProfile\">\r\n    <i class=\"fas fa-circle-notch fa-4x fa-spin\"></i>\r\n  </div>\r\n\r\n  <!-- MAIN PROFILE -->\r\n  <div class=\"profile-fields-container\" *ngIf=\"!loadingProfile\">\r\n    <div class=\"profile-image-container\">\r\n      <img [src]=\"profileImage\" />\r\n    </div>\r\n    <form style=\"padding-top: 26px;\" #f=\"ngForm\" (submit)=\"onSubmit()\">\r\n      <div class=\"fields pure-g\">\r\n        <!-- NAME -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-user\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"fn\" placeholder=\"NAME\" [(ngModel)]=\"profile.fn\" />\r\n        </div>\r\n\r\n        <!-- PHONE -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-phone\"></i><input type=\"text\" class=\"field-text form-control\" name=\"phone\" placeholder=\"PHONE\" [(ngModel)]=\"profile.phone\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields pure-g\">\r\n        <!-- ROLE -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-user-astronaut\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"role\" placeholder=\"ROLE\" [(ngModel)]=\"profile.role\" />\r\n        </div>\r\n\r\n        <!-- EMAIL -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-envelope\"></i><input type=\"text\" class=\"field-text form-control\" name=\"email\" placeholder=\"EMAIL\" [(ngModel)]=\"profile.email\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"fields pure-g\">\r\n        <!-- ORGANIZATION -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-building\"></i> <input type=\"text\" class=\"field-text form-control\" name=\"company\" placeholder=\"ORGANIZATION\" [(ngModel)]=\"profile.company\" />\r\n        </div>\r\n\r\n        <!-- ADDRESS -->\r\n        <div class=\"pure-u-1-1 pure-u-md-1-2 form-group\">\r\n          <i class=\"fas fa-map-marker-alt\" style=\"width: 12px; margin-left: 2px;\"></i><input type=\"text\" class=\"field-text form-control\" name=\"address\" placeholder=\"ADDRESS\" [(ngModel)]=\"profile.address.street\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"profile-save-button-container\">\r\n        <button type=\"submit\" class=\"wide-button profile-save-button\" [disabled]=\"!cardForm || cardForm.pristine\">Save</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_rdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/solid/rdf.service */ "./src/app/services/solid/rdf.service.ts");
/* harmony import */ var _services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/solid/solid.auth.service */ "./src/app/services/solid/solid.auth.service.ts");






var CardComponent = /** @class */ (function () {
    function CardComponent(rdf, route, auth) {
        this.rdf = rdf;
        this.route = route;
        this.auth = auth;
    }
    CardComponent.prototype.ngOnInit = function () {
        this.loadingProfile = true;
        this.loadProfile();
        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    };
    // Loads the profile from the rdf service and handles the response
    CardComponent.prototype.loadProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.loadingProfile = true;
                        return [4 /*yield*/, this.rdf.getProfile()];
                    case 1:
                        profile = _a.sent();
                        if (profile) {
                            this.profile = profile;
                            this.auth.saveOldUserData(profile);
                        }
                        this.loadingProfile = false;
                        this.setupProfileData();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // Submits the form, and saves the profile data using the auth/rdf service
    CardComponent.prototype.onSubmit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.cardForm.invalid) return [3 /*break*/, 4];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.rdf.updateProfile(this.cardForm)];
                    case 2:
                        _a.sent();
                        localStorage.setItem('oldProfileData', JSON.stringify(this.profile));
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.log("Error: " + err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // Format data coming back from server. Intended purpose is to replace profile image with default if it's missing
    // and potentially format the address if we need to reformat it for this UI
    CardComponent.prototype.setupProfileData = function () {
        if (this.profile) {
            this.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        }
        else {
            this.profileImage = '/assets/images/profile.png';
        }
    };
    // Example of logout functionality. Normally wouldn't be triggered by clicking the profile picture.
    CardComponent.prototype.logout = function () {
        this.auth.solidSignOut();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CardComponent.prototype, "cardForm", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_solid_rdf_service__WEBPACK_IMPORTED_MODULE_4__["RdfService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/chatComponents/chat-form/chat-form.component.css":
/*!******************************************************************!*\
  !*** ./src/app/chatComponents/chat-form/chat-form.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* * * * * 'SEND' BUTTON * * * * */\r\n\r\n.chatButton {\r\n    flex: 1;\r\n    border-radius: 8px;\r\n    padding: 8px 24px;\r\n    font-size: 1em;\r\n    background-color: #2A2845;    \r\n    color: #fff;\r\n    transition: 0.2s ease-out;\r\n    min-width: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.chatButton:disabled {\r\n    background-color: #F0EEEB;\r\n    border-color: #F0EEEB;\r\n}\r\n\r\n.chatButton:hover {\r\n    background-color: #444;\r\n}\r\n\r\n/* * * * * CHAT TEXT INPUT * * * * */\r\n\r\n.inputWrapper {\r\n    flex: 5;\r\n    padding-left: 80px;\r\n    padding-right: 16px;\r\n    display: flex;\r\n}\r\n\r\n.chatInput { \r\n    flex: 1; \r\n    width: auto;\r\n    border-radius: 8px;\r\n    background-color: white;\r\n    font-size: 1.3em;\r\n    color: black;   \r\n    background-color: white;\r\n    transition: 0.1s ease-out; \r\n    padding-left: 16px;\r\n    width: 100%; \r\n    box-sizing: border-box;\r\n}\r\n\r\n.chatInput:focus {\r\n    background-color: rgb(238, 242, 247);\r\n    color: #222;\r\n    transition: 0.1s ease-in;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdENvbXBvbmVudHMvY2hhdC1mb3JtL2NoYXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0NBQWtDOztBQUVsQztJQUNJLE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFJQSxvQ0FBb0M7O0FBRXBDO0lBQ0ksT0FBTztJQUNQLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NoYXRDb21wb25lbnRzL2NoYXQtZm9ybS9jaGF0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogKiAqICogKiAnU0VORCcgQlVUVE9OICogKiAqICogKi9cclxuXHJcbi5jaGF0QnV0dG9uIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMjg0NTsgICAgXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1vdXQ7XHJcbiAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuICBcclxuLmNoYXRCdXR0b246ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRUVFQjtcclxuICAgIGJvcmRlci1jb2xvcjogI0YwRUVFQjtcclxufVxyXG4gIFxyXG4gIFxyXG4uY2hhdEJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qICogKiAqICogQ0hBVCBURVhUIElOUFVUICogKiAqICogKi9cclxuXHJcbi5pbnB1dFdyYXBwZXIge1xyXG4gICAgZmxleDogNTtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2hhdElucHV0IHsgXHJcbiAgICBmbGV4OiAxOyBcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgY29sb3I6IGJsYWNrOyAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0OyBcclxuICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jaGF0SW5wdXQ6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjQyLCAyNDcpO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/chatComponents/chat-form/chat-form.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/chatComponents/chat-form/chat-form.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The chat form represents the chat functionality-->\r\n<div class=\"inputWrapper\">\r\n  <textarea\r\n    class =\"chatInput\" \r\n    [(ngModel)]=\"message\" \r\n    (keydown)=\"handleSubmit($event)\"></textarea>\r\n  <!--\r\n  <input\r\n    class =\"chatInput\"\r\n    [(ngModel)]=\"message\"\r\n    (keydown)=\"handleSubmit($event)\"\r\n    />\r\n  -->\r\n</div>\r\n<button class=\"chatButton\" (click)=send()>Send</button>"

/***/ }),

/***/ "./src/app/chatComponents/chat-form/chat-form.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/chatComponents/chat-form/chat-form.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dechat_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dechat/message.service */ "./src/app/services/dechat/message.service.ts");



var ChatFormComponent = /** @class */ (function () {
    // Constructor //
    function ChatFormComponent(messageService) {
        this.messageService = messageService;
        this.message = '';
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    // Methods //
    ChatFormComponent.prototype.send = function () {
        this.message = this.message.trim();
        if (this.message.length <= 0) {
            return;
        }
        this.messageService.sendMessage(this.message);
        this.message = '';
    };
    // Called every time a key is pressed (keydown event)
    ChatFormComponent.prototype.handleSubmit = function (event) {
        // Dear future me: === means same value and type.
        if (event.keyCode === 13) {
            this.send();
        }
    };
    ChatFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chatComponents/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/chatComponents/chat-form/chat-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dechat_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chatComponents/chat-header/chat-header.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/chatComponents/chat-header/chat-header.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRDb21wb25lbnRzL2NoYXQtaGVhZGVyL2NoYXQtaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chatComponents/chat-header/chat-header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/chatComponents/chat-header/chat-header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  chat-header works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/chatComponents/chat-header/chat-header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/chatComponents/chat-header/chat-header.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChatHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatHeaderComponent", function() { return ChatHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatHeaderComponent = /** @class */ (function () {
    function ChatHeaderComponent() {
        this.ready = true;
    }
    ChatHeaderComponent.prototype.ngOnInit = function () {
    };
    ChatHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-header',
            template: __webpack_require__(/*! ./chat-header.component.html */ "./src/app/chatComponents/chat-header/chat-header.component.html"),
            styles: [__webpack_require__(/*! ./chat-header.component.css */ "./src/app/chatComponents/chat-header/chat-header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatHeaderComponent);
    return ChatHeaderComponent;
}());



/***/ }),

/***/ "./src/app/chatComponents/chatroom/chatroom.component.css":
/*!****************************************************************!*\
  !*** ./src/app/chatComponents/chatroom/chatroom.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.chatroom {\r\n    display: grid;\r\n    grid-template-rows: 80% 20%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.chatHeaderWrapper {\r\n    display: flex;\r\n    height: 50px;\r\n    width: 100%;\r\n    background-color: white;\r\n    z-index: 1;\r\n}\r\n\r\n.feedWrapper {\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    overflow-y: scroll;\r\n    padding: 20px 0px 0px 24px;\r\n}\r\n\r\n.chatFormWrapper {\r\n    display: flex;\r\n    height: 80px;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    z-index: 3;\r\n    padding: 8px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdENvbXBvbmVudHMvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0Q29tcG9uZW50cy9jaGF0cm9vbS9jaGF0cm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jaGF0cm9vbSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MCUgMjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNoYXRIZWFkZXJXcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmZlZWRXcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMjRweDtcclxufVxyXG5cclxuLmNoYXRGb3JtV3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chatComponents/chatroom/chatroom.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/chatComponents/chatroom/chatroom.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatroom\">\r\n\r\n\r\n    <!-- The feed contains all the messages-->\r\n    <div #scroller class=\"feedWrapper\">\r\n        <app-feed></app-feed>\r\n    </div>\r\n\r\n    <!-- The chat form represents the chat functionality-->\r\n    <div *ngIf=\"chatService.currentChat != undefined\"\r\n         class=\"chatFormWrapper\">\r\n        <app-chat-form></app-chat-form>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chatComponents/chatroom/chatroom.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/chatComponents/chatroom/chatroom.component.ts ***!
  \***************************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dechat/chat.service */ "./src/app/services/dechat/chat.service.ts");



var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent(chatService) {
        this.chatService = chatService;
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    ChatroomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatroomComponent.prototype.scrollToBottom = function () {
        this.feedContainer.nativeElement.scrollTop =
            this.feedContainer.nativeElement.scrollHeight;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scroller'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatroomComponent.prototype, "feedContainer", void 0);
    ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/chatComponents/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatComponents/chatroom/chatroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/chatComponents/feed/feed.component.css":
/*!********************************************************!*\
  !*** ./src/app/chatComponents/feed/feed.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.feed {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.message {\r\n    flex-direction: column;\r\n    margin: 10px 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdENvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdENvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mZWVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWVzc2FnZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chatComponents/feed/feed.component.html":
/*!*********************************************************!*\
  !*** ./src/app/chatComponents/feed/feed.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\r\n\r\n  <!-- the feed contains a collection of message objects -->\r\n  <!-- for each message, we are generating a chatMessage component -->\r\n  <div *ngFor=\"let message of feed | async\" class=\"message\">\r\n    <app-message [chatMessage]=message></app-message>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/chatComponents/feed/feed.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/chatComponents/feed/feed.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_dechat_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dechat/message.service */ "./src/app/services/dechat/message.service.ts");



var FeedComponent = /** @class */ (function () {
    function FeedComponent(messageService) {
        this.messageService = messageService;
        this.ready = true;
    }
    FeedComponent.prototype.ngOnInit = function () {
        this.update();
    };
    FeedComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    FeedComponent.prototype.update = function () {
        this.feed = this.messageService.getMessages();
    };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/chatComponents/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/chatComponents/feed/feed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dechat_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/chatComponents/message/message.component.css":
/*!**************************************************************!*\
  !*** ./src/app/chatComponents/message/message.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.messageContainer {\r\n    display: flex;\r\n    height: auto;\r\n    width: 70%;\r\n    min-width: 400px;\r\n    border-radius: 5px;\r\n    align-items: stretch;\r\n    background-color: rgb(218, 218, 218);\r\n    box-shadow: 0 3px 6px rgba(0, 0, 0, .26),\r\n                0 3px 6px rgba(0, 0, 0, .23);\r\n}\r\n\r\n.isOwnMessageContainer {\r\n    background-color: rgb(76, 211, 98);\r\n}\r\n\r\n/* * * * * MESSAGE DATA: sender, date, etc. * * * * */\r\n\r\n.messageData {\r\n    flex: 1;\r\n    padding: 10px;\r\n    font-size: .7em;\r\n}\r\n\r\n.sender {\r\n    display: block;\r\n    color: #222;\r\n    font-weight: bold;\r\n}\r\n\r\n.isOwnSender {\r\n    color: lightgray;\r\n}\r\n\r\n.timeSent {\r\n    color: #555;\r\n    font-style: italic;\r\n}\r\n\r\n.isOwnTimeSent {\r\n    color: green;\r\n}\r\n\r\n/* * * * * MESSAGE CONTENT * * * * */\r\n\r\n.messageContent {\r\n    height: auto;\r\n    flex: 9;\r\n    background-color: white;\r\n    padding: 10px;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.isOwnMessageContent {\r\n    background-color: #E3F2FD;\r\n    color: lightseagreen;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdENvbXBvbmVudHMvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEM7NENBQ3dDO0FBQzVDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUtBLHFEQUFxRDs7QUFFckQ7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUlBLG9DQUFvQzs7QUFFcEM7SUFDSSxZQUFZO0lBQ1osT0FBTztJQUNQLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0Q29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5tZXNzYWdlQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjE4LCAyMTgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgLjI2KSxcclxuICAgICAgICAgICAgICAgIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIC4yMyk7XHJcbn1cclxuXHJcbi5pc093bk1lc3NhZ2VDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc2LCAyMTEsIDk4KTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogKiAqICogKiBNRVNTQUdFIERBVEE6IHNlbmRlciwgZGF0ZSwgZXRjLiAqICogKiAqICovXHJcblxyXG4ubWVzc2FnZURhdGEge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IC43ZW07XHJcbn1cclxuXHJcbi5zZW5kZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogIzIyMjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaXNPd25TZW5kZXIge1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLnRpbWVTZW50IHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uaXNPd25UaW1lU2VudCB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcblxyXG5cclxuLyogKiAqICogKiBNRVNTQUdFIENPTlRFTlQgKiAqICogKiAqL1xyXG5cclxuLm1lc3NhZ2VDb250ZW50IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZsZXg6IDk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmlzT3duTWVzc2FnZUNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcclxuICAgIGNvbG9yOiBsaWdodHNlYWdyZWVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/chatComponents/message/message.component.html":
/*!***************************************************************!*\
  !*** ./src/app/chatComponents/message/message.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\"\r\n    [ngClass]=\"{'isOwnMessageContainer':isOwnMessage}\">\r\n\r\n  <div class=\"messageData\">\r\n    <span class=\"sender\">{{ userName }}</span>\r\n    <span class=\"timeSent\">{{ timeSent }}</span>\r\n  </div>\r\n\r\n  <div class=\"messageContent\"\r\n      [ngClass]=\"{'isOwnMessageContent':isOwnMessage}\">\r\n    {{ messageContent }}\r\n  </div>\r\n  \r\n  <div class=\"multimediaWrapper\">\r\n    <app-multimedia-display></app-multimedia-display>    \r\n  </div> \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/chatComponents/message/message.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/chatComponents/message/message.component.ts ***!
  \*************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_dechat_chat_message_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/dechat/chat-message.model */ "./src/app/models/dechat/chat-message.model.ts");
/* harmony import */ var _multimedia_display_multimedia_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../multimedia-display/multimedia-display.component */ "./src/app/chatComponents/multimedia-display/multimedia-display.component.ts");




var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.ready = true;
    }
    MessageComponent.prototype.ngOnInit = function (chatMessage, multim) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        if (multim === void 0) { multim = this.multimedia; }
        if (chatMessage == undefined) {
            return;
        }
        this.messageContent = chatMessage.message;
        this.userName = chatMessage.userName;
        this.timeSent = this.getTimeStamp(chatMessage.date);
    };
    MessageComponent.prototype.getTimeStamp = function (date) {
        var day = date.getUTCFullYear() + '/' +
            (date.getUTCMonth() + 1) + '/' +
            date.getUTCDate();
        var time = date.getUTCHours() + ':' +
            date.getUTCMinutes();
        return day + ' ' + time;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_dechat_chat_message_model__WEBPACK_IMPORTED_MODULE_2__["ChatMessage"])
    ], MessageComponent.prototype, "chatMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _multimedia_display_multimedia_display_component__WEBPACK_IMPORTED_MODULE_3__["MultimediaDisplayComponent"])
    ], MessageComponent.prototype, "multimedia", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/chatComponents/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/chatComponents/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/chatComponents/multimedia-display/multimedia-display.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/chatComponents/multimedia-display/multimedia-display.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRDb21wb25lbnRzL211bHRpbWVkaWEtZGlzcGxheS9tdWx0aW1lZGlhLWRpc3BsYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/chatComponents/multimedia-display/multimedia-display.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/chatComponents/multimedia-display/multimedia-display.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n  We need to show the multimedia element in \r\n  different ways according to its type.\r\n-->\r\n\r\n<!-- In case it is a video. -->\r\n<div *ngIf=\"multimediaType === 'video'\">\r\n  <video width=\"480\" height=\"360\" controls>\r\n    <source [src]=\"multimediaURL\"/>\r\n    Your browser does not support the video HTML tag.\r\n  </video>\r\n</div>\r\n\r\n<!-- In case it is an audio. -->\r\n<div *ngIf=\"multimediaType === 'audio'\">\r\n  <audio controls>\r\n    <source [src]=\"multimediaURL\"/>\r\n    Your browser does not support the audio HTML tag.\r\n  </audio>\r\n</div>\r\n\r\n<!-- In case it is a image. -->\r\n<div *ngIf=\"multimediaType === 'image'\">\r\n    <img [src]=\"multimediaURL\"/>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/chatComponents/multimedia-display/multimedia-display.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/chatComponents/multimedia-display/multimedia-display.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MultimediaDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimediaDisplayComponent", function() { return MultimediaDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_dechat_multimedia_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/dechat/multimedia.model */ "./src/app/models/dechat/multimedia.model.ts");



var MultimediaDisplayComponent = /** @class */ (function () {
    function MultimediaDisplayComponent() {
        this.ready = true;
    }
    MultimediaDisplayComponent.prototype.ngOnInit = function (multim) {
        /*
        // Actual implementation
        this.multimediaURL = multim.url;
        this.multimediaType = multim.type;
        this.multimediaExten = multim.extension;
        */
        if (multim === void 0) { multim = this.multimedia; }
        // For testing purposes
        // Image
        /*
        this.multimediaURL = 'https://i.redd.it/hf5v5rp6dir11.jpg';
        this.multimediaType = 'image';
        this.multimediaExten = 'jpg';
        */
        // Video
        this.multimediaURL = 'https://audio-video.gnu.org/video/short--undated--rms--what-is-gnu-plus-linux--480p.webm';
        this.multimediaType = 'video';
        this.multimediaExten = 'webm';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_dechat_multimedia_model__WEBPACK_IMPORTED_MODULE_2__["Multimedia"])
    ], MultimediaDisplayComponent.prototype, "multimedia", void 0);
    MultimediaDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-multimedia-display',
            template: __webpack_require__(/*! ./multimedia-display.component.html */ "./src/app/chatComponents/multimedia-display/multimedia-display.component.html"),
            styles: [__webpack_require__(/*! ./multimedia-display.component.css */ "./src/app/chatComponents/multimedia-display/multimedia-display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MultimediaDisplayComponent);
    return MultimediaDisplayComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard\">\r\n  <p>Your webId is {{ session.webId }}</p>\r\n  <ul>\r\n    <li><a [routerLink]=\"['/card']\">Profile</a></li>\r\n    <li><a (click)=\"onSignOut()\">Signout</a></li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/solid/solid.auth.service */ "./src/app/services/solid/solid.auth.service.ts");



// import { currentSession } from 'solid-auth-client';
// Services

var Session = /** @class */ (function () {
    function Session() {
    }
    return Session;
}());
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(auth, route) {
        var _this = this;
        this.auth = auth;
        this.route = route;
        this.session = new Session();
        this.loadSession = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        }); };
        this.onSignOut = function () {
            _this.auth.solidSignOut();
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log('hello');
        this.loadSession();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.newChatDialog {\r\n    display: flex;\r\n    flex-direction: column;\r\n    z-index: 10;\r\n}\r\n\r\n.contactWrapper {\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nQ29tcG9uZW50cy9uZXctY2hhdC1kaWFsb2cvbmV3LWNoYXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZ0NvbXBvbmVudHMvbmV3LWNoYXQtZGlhbG9nL25ldy1jaGF0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uZXdDaGF0RGlhbG9nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jb250YWN0V3JhcHBlciB7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"newChatDialog\">\r\n\r\n  <div class=\"titleWrapper\">\r\n    <h1>New chat</h1>\r\n  </div>\r\n\r\n  <div class=\"nameWrapper\">\r\n      <input [(ngModel)]=\"chatName\" placeholder=\"New chat name\">\r\n  </div>\r\n\r\n  <div *ngFor=\"let message of feed | async\" class=\"message\">\r\n    <app-message [chatMessage]=message></app-message>\r\n  </div>\r\n\r\n  <div class=\"contactListWrapper\">\r\n      <div class=\"contactWrapper\" *ngFor=\"let contact of contacts\" (click)=\"onContactClick(contact)\">\r\n        <app-user-display-slot [user]=contact></app-user-display-slot>\r\n        <span class=\"contactCheck\" *ngIf=\"isContactIn(contact)\">✔️</span>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"actionsWrapper\">\r\n    <button (click)=\"cancel()\">Back</button>\r\n    <button (click)=\"create()\">Let's chat!</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewChatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewChatDialogComponent", function() { return NewChatDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dechat_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/dechat/user.service */ "./src/app/services/dechat/user.service.ts");
/* harmony import */ var src_app_services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dechat/chat.service */ "./src/app/services/dechat/chat.service.ts");





var NewChatDialogComponent = /** @class */ (function () {
    function NewChatDialogComponent(dialogRef, userService, chatService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.chatService = chatService;
        this.users = [];
        this.contacts = [];
        this.setUp();
    }
    NewChatDialogComponent.prototype.ngOnInit = function () {
    };
    NewChatDialogComponent.prototype.setUp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getContacts()];
                    case 1:
                        c = _a.sent();
                        c.forEach(function (contact) { return _this.contacts.push(contact); });
                        return [2 /*return*/];
                }
            });
        });
    };
    NewChatDialogComponent.prototype.onContactClick = function (contact) {
        console.log("You clicked on " + contact.nickname);
        // If he's in, delete him
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i] == contact) {
                this.users.splice(i, 1);
                return;
            }
        }
        // Otherwise, add
        this.users.push(contact);
    };
    NewChatDialogComponent.prototype.isContactIn = function (contact) {
        return this.users.includes(contact);
    };
    NewChatDialogComponent.prototype.cancel = function () {
        this.closeDialog();
    };
    NewChatDialogComponent.prototype.create = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var chat;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.chatName == undefined)
                            return [2 /*return*/]; // TODO warn error
                        if (this.users.length == 0)
                            return [2 /*return*/]; // TODO warn error
                        console.log("Creating new chat");
                        console.log("Chat name: " + this.chatName);
                        return [4 /*yield*/, this.chatService.createGroupChat(this.chatName, this.users)];
                    case 1:
                        chat = _a.sent();
                        this.chatService.allChats.push(chat);
                        return [4 /*yield*/, this.chatService.openChat(chat)];
                    case 2:
                        _a.sent();
                        this.closeDialog();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewChatDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Dialog closed!');
    };
    NewChatDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-chat-dialog',
            template: __webpack_require__(/*! ./new-chat-dialog.component.html */ "./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.html"),
            styles: [__webpack_require__(/*! ./new-chat-dialog.component.css */ "./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_dechat_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            src_app_services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]])
    ], NewChatDialogComponent);
    return NewChatDialogComponent;
}());



/***/ }),

/***/ "./src/app/login-popup/login-popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBvcHVwL2xvZ2luLXBvcHVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-container\">Loading...</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login-popup/login-popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login-popup/login-popup.component.ts ***!
  \******************************************************/
/*! exports provided: LoginPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPopupComponent", function() { return LoginPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginPopupComponent = /** @class */ (function () {
    function LoginPopupComponent(elementRef) {
        this.elementRef = elementRef;
    }
    LoginPopupComponent.prototype.ngOnInit = function () {
        this.runScript();
    };
    LoginPopupComponent.prototype.runScript = function () {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = '/assets/js/libs/popup.js';
        this.elementRef.nativeElement.appendChild(s);
        // s.onload = () => this.triggerDuo();
    };
    LoginPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-popup',
            template: __webpack_require__(/*! ./login-popup.component.html */ "./src/app/login-popup/login-popup.component.html"),
            styles: [__webpack_require__(/*! ./login-popup.component.css */ "./src/app/login-popup/login-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], LoginPopupComponent);
    return LoginPopupComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.login-page {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  color: #666;\r\n}\r\n\r\n.login-page h1 {\r\n  font-size: 38px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  line-height: 50px;\r\n  letter-spacing: 1.9px;\r\n  padding-top: 12px;\r\n  margin-top: 0px;\r\n}\r\n\r\n.login-page h2 {\r\n  color: #666;\r\n\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  letter-spacing: 1px;\r\n  line-height: 21px;\r\n  margin-top: 48px;\r\n}\r\n\r\n.login-page .small-link {\r\n  font-size: 12px;\r\n  color: #666;\r\n  letter-spacing: 0.75px;\r\n  line-height: 16px;\r\n}\r\n\r\n.login-page .registration-link {\r\n  margin-top: 38px;\r\n}\r\n\r\n.login-page .registration-link p {\r\n  font-size: 16px;\r\n  color: #666;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.login-page .item-divider {\r\n  box-sizing:border-box;\r\n  height: 1px;\r\n  width: 354px;\r\n  border-bottom: 1px solid #E0E0E0;\r\n  position: absolute;\r\n  bottom:-8px; left:-9px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXOztFQUVYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFLFNBQVM7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5sb2dpbi1wYWdlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ubG9naW4tcGFnZSBoMSB7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuOXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgaDIge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG5cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gIG1hcmdpbi10b3A6IDQ4cHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlIC5zbWFsbC1saW5rIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM2NjY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2UgLnJlZ2lzdHJhdGlvbi1saW5rIHtcclxuICBtYXJnaW4tdG9wOiAzOHB4O1xyXG59XHJcblxyXG4ubG9naW4tcGFnZSAucmVnaXN0cmF0aW9uLWxpbmsgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdlIC5pdGVtLWRpdmlkZXIge1xyXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogMzU0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFMEUwRTA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTotOHB4OyBsZWZ0Oi05cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n\r\n  <!-- APP LOGO -->\r\n  <div style=\"margin-top:60px;\">\r\n    <i class=\"fas fa-user-circle\" style=\"font-size: 64px;\"></i>\r\n  </div>\r\n\r\n  <!-- APP NAME -->\r\n  <h1>\r\n    Profile Demo App\r\n  </h1>\r\n\r\n  <!-- LOGIN TITLE -->\r\n  <h2>\r\n    Login with Solid Identity\r\n  </h2>\r\n\r\n  <!-- PROVIDER SELECTION -->\r\n  <div style=\"margin-top: 10px;\">\r\n    <ng-select class=\"login-select\"\r\n               bindLabel=\"name\"\r\n               bindValue=\"loginUrl\"\r\n               placeholder=\"Select ID Provider\"\r\n               dropdownPosition=\"bottom\"\r\n               [items]=\"identityProviders\"\r\n               [(ngModel)]=\"selectedProviderUrl\"\r\n               style=\"width: 360px; height: 48px; margin-left: auto; margin-right: auto;\">\r\n\r\n      <!-- DROPDOWN TEMPLATE -->\r\n      <ng-template ng-option-tmp let-item=\"item\">\r\n        <div style=\"height:40px; padding-top:10px; position: relative;\">\r\n          <img [src]=\"item.image\" style=\"float: left; height: 32px; width: 32px; margin-top:-5px;\" />\r\n          <span style=\"float: left; margin-left: 10px;\">{{ item.name }}</span>\r\n          <div style=\"clear: both;\"></div>\r\n          <div class=\"item-divider\"></div>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </ng-select>\r\n    <input type=\"text\"\r\n           class=\"wide-text\"\r\n           *ngIf=\"selectedProviderUrl===null\"\r\n           placeholder=\"Enter WebID\"\r\n           style=\"margin-top:10px; padding: 12px 10px; width: 340px; height: 16px; display: block; margin-left: auto; margin-right: auto;\"\r\n           [(ngModel)]=\"customProviderUrl\" />\r\n    <button class=\"wide-button\" (click)=\"onLogin()\" *ngIf=\"selectedProviderUrl !== undefined || customProviderUrl !== undefined\" [disabled]=\"selectedProviderUrl===null && !customProviderUrl\" style=\"margin-top:10px;\">Go</button>\r\n  </div>\r\n\r\n  <!-- REGISTRATION -->\r\n  <div class=\"registration-link\">\r\n    <p style=\"margin: 12px;\">Don't have a Solid Identity?</p>\r\n    <button class=\"wide-button\" (click)=\"goToRegistration()\">Register</button>\r\n  </div>\r\n\r\n  <!-- HELP -->\r\n  <div style=\"margin-top: 48px;\">\r\n    <a href=\"https://solid.mit.edu\" target=\"_blank\" class=\"small-link\">\r\n      <i class=\"fas fa-info-circle\"></i> What is a Solid Identity?\r\n    </a>\r\n  </div>\r\n\r\n</div>\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/solid/solid.auth.service */ "./src/app/services/solid/solid.auth.service.ts");



// Auth Service

var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        /*
        *  Alternate login-popup function for Solid. See service for more details.
        */
        this.onLoginPopup = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.auth.solidLoginPopup();
                return [2 /*return*/];
            });
        }); };
        this.onLogin = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var idp;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                idp = this.selectedProviderUrl ? this.selectedProviderUrl : this.customProviderUrl;
                if (idp) {
                    try {
                        this.auth.solidLogin(idp);
                    }
                    catch (err) {
                        console.log('An error has occurred logging in: ' + err);
                    }
                }
                return [2 /*return*/];
            });
        }); };
    }
    LoginComponent.prototype.ngOnInit = function () {
        // If we're authenticated, go to profile
        if (localStorage.getItem('solid-auth-client')) {
            this.router.navigateByUrl('/chat');
        }
        this.identityProviders = this.auth.getIdentityProviders();
    };
    LoginComponent.prototype.goToRegistration = function () {
        window.location.href = 'https://solid.community/register';
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-content/main-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-content/main-content.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mainContent {\r\n    height: 100%;\r\n    width: 100%;\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n    overflow: hidden;\r\n}\r\n\r\n.userListWrapper {\r\n    display: flex;\r\n    flex: 1;\r\n    background-color: #2A2845;\r\n    color: white;\r\n    padding: 20px 0px 40px 30px;\r\n    border-right: 1px solid #222;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.chatroomWrapper {\r\n    background-color: white;\r\n    background: linear-gradient(180deg,\r\n    rgba(196, 228, 238, 0.5),\r\n    rgba(0, 0, 0, .7)),\r\n    url('chat-bg-1.jpg') center center no-repeat;\r\n}\r\n\r\napp-chatroom {\r\n    height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkI7OztnREFHMkQ7QUFDL0Q7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1jb250ZW50L21haW4tY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYWluQ29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udXNlckxpc3RXcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMjg0NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDQwcHggMzBweDtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMyMjI7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jaGF0cm9vbVdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLFxyXG4gICAgcmdiYSgxOTYsIDIyOCwgMjM4LCAwLjUpLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAuNykpLFxyXG4gICAgdXJsKCdzcmMvYXNzZXRzL2ltZy9jaGF0LWJnLTEuanBnJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmFwcC1jaGF0cm9vbSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/main-content/main-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-content/main-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\r\n    <div class=\"userListWrapper\">\r\n        <app-chat-list></app-chat-list>\r\n    </div>\r\n\r\n    <div class=\"chatroomWrapper\">\r\n      <app-chatroom></app-chatroom>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main-content/main-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-content/main-content.component.ts ***!
  \********************************************************/
/*! exports provided: MainContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContentComponent", function() { return MainContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainContentComponent = /** @class */ (function () {
    function MainContentComponent() {
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-content',
            template: __webpack_require__(/*! ./main-content.component.html */ "./src/app/main-content/main-content.component.html"),
            styles: [__webpack_require__(/*! ./main-content.component.css */ "./src/app/main-content/main-content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainContentComponent);
    return MainContentComponent;
}());



/***/ }),

/***/ "./src/app/models/dechat/chat-info.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/dechat/chat-info.model.ts ***!
  \**************************************************/
/*! exports provided: ChatInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatInfo", function() { return ChatInfo; });
var ChatInfo = /** @class */ (function () {
    function ChatInfo(id) {
        this.chatId = id;
        this.users = [];
        this.administrators = [];
    }
    return ChatInfo;
}());



/***/ }),

/***/ "./src/app/models/dechat/chat-message.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/dechat/chat-message.model.ts ***!
  \*****************************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

// Contains the data for a single message
var ChatMessage = /** @class */ (function () {
    function ChatMessage(msg) {
        if (msg === void 0) { msg = ''; }
        this.id = Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])();
        this.message = msg;
        this.date = new Date();
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/models/dechat/chat.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/dechat/chat.model.ts ***!
  \*********************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
// Represents a whole chat.
// Keep in mind it will never be uploaded to the pod,
// it's just for local util usage.
var Chat = /** @class */ (function () {
    function Chat(chatInfo) {
        this.chatInfo = chatInfo;
        this.bundles = new Map();
    }
    Chat.prototype.addBundle = function (bundle) {
        if (this.bundles.has(bundle.bundleId)) {
            console.log("Failed to add bundle: already existent.");
            return false;
        }
        this.bundles.set(bundle.bundleId, bundle);
        console.log("Bundle added to the Chat.");
        return true;
    };
    Chat.prototype.getBundles = function () {
        var result = [];
        this.bundles.forEach(function (value, key, map) { return result.push(value); });
        return result;
    };
    Chat.prototype.getBundle = function (bundleId) {
        if (this.bundles.has(bundleId))
            return undefined;
        return this.bundles.get(bundleId);
    };
    return Chat;
}());



/***/ }),

/***/ "./src/app/models/dechat/inbox-element.model.ts":
/*!******************************************************!*\
  !*** ./src/app/models/dechat/inbox-element.model.ts ***!
  \******************************************************/
/*! exports provided: InboxElementType, InboxElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxElementType", function() { return InboxElementType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxElement", function() { return InboxElement; });
var InboxElementType;
(function (InboxElementType) {
    InboxElementType[InboxElementType["CHAT_REQUEST"] = 0] = "CHAT_REQUEST";
    InboxElementType[InboxElementType["NEW_MESSAGE"] = 1] = "NEW_MESSAGE";
})(InboxElementType || (InboxElementType = {}));
var InboxElement = /** @class */ (function () {
    function InboxElement() {
    }
    return InboxElement;
}());



/***/ }),

/***/ "./src/app/models/dechat/message-bundle.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/models/dechat/message-bundle.model.ts ***!
  \*******************************************************/
/*! exports provided: MessageBundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBundle", function() { return MessageBundle; });
// Represents an actual chat, storing the message stack
// It has an owner, so the user that owns the bundle
// can controll its existance.
var MessageBundle = /** @class */ (function () {
    function MessageBundle(chatId, id) {
        this.MAX_MSG_COUNT = 100;
        this.chatId = chatId;
        this.bundleId = id;
        this.messages = [];
        this.creationDate = new Date();
    }
    MessageBundle.prototype.addMessage = function (msg) {
        if (this.messages.length >= this.MAX_MSG_COUNT)
            return false;
        this.messages.push(msg);
        return true;
    };
    return MessageBundle;
}());



/***/ }),

/***/ "./src/app/models/dechat/multimedia.model.ts":
/*!***************************************************!*\
  !*** ./src/app/models/dechat/multimedia.model.ts ***!
  \***************************************************/
/*! exports provided: Multimedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimedia", function() { return Multimedia; });
/*
 *  Represents a multimedia element
 *  that can be contained in a message.
 */
var Multimedia = /** @class */ (function () {
    // Constructor
    function Multimedia(url, type, extension) {
        this.url = url;
        this.type = type;
        this.extension = extension;
    }
    return Multimedia;
}());



/***/ }),

/***/ "./src/app/models/dechat/user.model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/dechat/user.model.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(url) {
        this.url = url;
        this.nickname = url.replace('https://', '').split('.')[0];
        this.profileImage = '/assets/images/profile.png';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.navBar {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: grid;\r\n    grid-template-columns: 10% 10% 60% 20%;\r\n    background-color: #EAEAEB;\r\n}\r\n\r\n#logo {\r\n    display: inline-block;\r\n    background: url('logo.png') no-repeat;\r\n    background-size: cover;\r\n    margin: 0px 10px 12px 12px;\r\n    width: 96px;\r\n    height: 96px;\r\n    min-width: 96px;\r\n}\r\n\r\n#heading {\r\n    flex: 4;\r\n    padding: 24px 0px 8px 10px;\r\n    height: 60px;\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n}\r\n\r\n.links {\r\n    padding-top: 32px;\r\n    padding-right: 30px;\r\n    white-space: nowrap;\r\n    display: block;\r\n}\r\n\r\n#heading > a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.links a {\r\n    color: #555;\r\n    text-decoration: none;\r\n    transition: ease-in 0.2s;\r\n    padding-right: 12px;\r\n    overflow: hidden;\r\n}\r\n\r\n.links a:hover {\r\n    color: #1E88E5;\r\n    transition: ease-in 0.2s;\r\n}\r\n\r\n.profileIconWrapper {\r\n    padding: 0px;\r\n    padding-right: 16px;\r\n    padding-top: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0Qyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUNBQW9EO0lBQ3BELHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXZCYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMCUgMTAlIDYwJSAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFFQUVCO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ3NyYy9hc3NldHMvaW1nL2xvZ28ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMTJweCAxMnB4O1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBtaW4td2lkdGg6IDk2cHg7XHJcbn1cclxuXHJcbiNoZWFkaW5nIHtcclxuICAgIGZsZXg6IDQ7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDBweCA4cHggMTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmxpbmtzIHtcclxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2hlYWRpbmcgPiBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmxpbmtzIGEge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmxpbmtzIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxRTg4RTU7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbn1cclxuXHJcbi5wcm9maWxlSWNvbldyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\r\n  <div id=\"logo\"></div>\r\n  <div id=\"heading\"><a routerLink=\"/\">DeChat</a></div>\r\n\r\n  <div class=\"links\">\r\n      <!--\r\n      <span>\r\n        <a *ngIf=\"!(user|async)?.uid\" href=\"#\" (click)=\"login()\">Login</a>\r\n      </span>\r\n      -->\r\n      <!--\r\n      <span>\r\n        <a *ngIf=\"!(user|async)?.uid\" routerLink=\"/signup\">Sign Up</a>\r\n      </span>\r\n      -->\r\n      <!--\r\n      <span>\r\n        <a *ngIf=\"(user|async)?.uid\" href=\"#\" (click)=\"logout()\">Logout</a>\r\n      </span>\r\n      -->\r\n  </div>\r\n\r\n  <div class=\"profileIconWrapper\">\r\n    <div *ngIf=\"showProfileIcon()\">\r\n      <app-profile-icon></app-profile-icon>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        /*if (this.auth.isSessionActive()) {
          this.userName = this.user.getUserName();
        }*/
    };
    NavbarComponent.prototype.showProfileIcon = function () {
        return this.router.url === '/chat';
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.registration .header-bar {\r\n  margin: 0px;\r\n  height: 44px;\r\n  width: calc(100% + 16px);\r\n  background-color: #3D6DEB;\r\n  color: #fff;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.registration .header-bar p {\r\n  text-align: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  letter-spacing: 1px;\r\n  line-height: 15px;\r\n}\r\n\r\n.registration .header-text {\r\n  margin-top:92px;\r\n  width: 360px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  font-size: 14px;\r\n  color: #666;\r\n}\r\n\r\n.registration .header-text a {\r\n  color: #666;\r\n  font-size: 12px;\r\n}\r\n\r\n.registration .provider-card-container {\r\n  margin-top: 28px;\r\n}\r\n\r\n.registration .provider-card {\r\n  height: 140px;\r\n  width: 320px;\r\n  border: 1px solid #DAE0E6;\r\n  border-radius: 2px;\r\n  background-color: #fff;\r\n  margin: 10px;\r\n  display: inline-block;\r\n  box-shadow: #DAE0E6 1px 1px 6px;\r\n}\r\n\r\n.registration .provider-card .provider-logo {\r\n  height: 44px;\r\n  width: 44px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 16px;\r\n}\r\n\r\n.registration .provider-card h2 {\r\n  color: #656E75;\r\n  font-size: 18px;\r\n  margin-top: -2px;\r\n  letter-spacing: 0.9px;\r\n  line-height: 24px;\r\n}\r\n\r\n.registration .provider-card p {\r\n  color: #656E75;\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdHJhdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbiAuaGVhZGVyLWJhciB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAxNnB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Q2REVCO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbiAuaGVhZGVyLWJhciBwIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uIC5oZWFkZXItdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDo5MnB4O1xyXG4gIHdpZHRoOiAzNjBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uIC5oZWFkZXItdGV4dCBhIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5yZWdpc3RyYXRpb24gLnByb3ZpZGVyLWNhcmQtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAyOHB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uIC5wcm92aWRlci1jYXJkIHtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjREFFMEU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNoYWRvdzogI0RBRTBFNiAxcHggMXB4IDZweDtcclxufVxyXG5cclxuLnJlZ2lzdHJhdGlvbiAucHJvdmlkZXItY2FyZCAucHJvdmlkZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIHdpZHRoOiA0NHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ucmVnaXN0cmF0aW9uIC5wcm92aWRlci1jYXJkIGgyIHtcclxuICBjb2xvcjogIzY1NkU3NTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC45cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuLnJlZ2lzdHJhdGlvbiAucHJvdmlkZXItY2FyZCBwIHtcclxuICBjb2xvcjogIzY1NkU3NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\r\n  <!-- Header Bar -->\r\n  <div class=\"header-bar\">\r\n    <p>Select Solid Identity Provider</p>\r\n  </div>\r\n\r\n  <!-- Header Text -->\r\n  <div class=\"header-text\">\r\n    <p>\r\n      With a Solid Identity your personal data is stored securely in a POD. You control who has access to it.\r\n    </p>\r\n    <a href=\"https://solid.mit.edu\" target=\"_blank\">\r\n      Learn more about Solid IDs and PODs\r\n    </a>\r\n  </div>\r\n\r\n  <!-- Provider cards -->\r\n  <div class=\"provider-card-container\">\r\n    <div class=\"provider-card\" *ngFor=\"let provider of availableProviders\">\r\n      <img [src]=\"provider.image\" class=\"provider-logo\">\r\n      <h2>{{ provider.name }}</h2>\r\n      <p>{{ provider.desc }}</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/solid/solid.auth.service */ "./src/app/services/solid/solid.auth.service.ts");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth) {
        this.auth = auth;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.availableProviders = this.auth.getIdentityProviders();
        this.availableProviders = this.availableProviders.filter(function (idp) { return idp.providerLoginUrl !== null; });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/dechat/chat.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dechat/chat.service.ts ***!
  \*************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_models_dechat_chat_info_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dechat/chat-info.model */ "./src/app/models/dechat/chat-info.model.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/dechat/user.service.ts");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files.service */ "./src/app/services/dechat/files.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "./src/app/services/dechat/message.service.ts");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inbox.service */ "./src/app/services/dechat/inbox.service.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/dechat/inbox-element.model */ "./src/app/models/dechat/inbox-element.model.ts");










var ChatService = /** @class */ (function () {
    // Constructor //
    function ChatService(userService, files, messages, inbox) {
        var _this = this;
        this.userService = userService;
        this.files = files;
        this.messages = messages;
        this.inbox = inbox;
        this.allChats = [];
        this.setUp();
        this.inbox.addOnElementFoundCallback(function (element) {
            if (element.type == src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_9__["InboxElementType"].CHAT_REQUEST)
                _this.createChatFromRequest(element);
        });
    }
    ChatService.prototype.setUp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var _a, contacts, chatFolder, chats;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, 1];
                    case 1:
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.userService.getUser()];
                    case 2:
                        _a.user = _b.sent();
                        this.messages.setCurrentUser(this.user);
                        return [4 /*yield*/, this.userService.getContacts()];
                    case 3:
                        contacts = _b.sent();
                        return [4 /*yield*/, this.files.checkUserFiles(this.user)];
                    case 4:
                        _b.sent();
                        console.log("Checking existent chats...");
                        return [4 /*yield*/, this.files.getChatsRootUrl(this.user)];
                    case 5:
                        chatFolder = _b.sent();
                        return [4 /*yield*/, this.files.readFolderSubfolders(chatFolder)];
                    case 6:
                        chats = _b.sent();
                        return [4 /*yield*/, chats.forEach(function (chat) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var c;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fetchChat(chat)];
                                        case 1:
                                            c = _a.sent();
                                            if (c != null)
                                                this.allChats.push(c);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 7:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // Given a ChatInfo object, we will open the chat
    ChatService.prototype.openChat = function (chatInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.messages.setCurrentChat(chatInfo);
                this.currentChat = chatInfo;
                // Update file system
                this.files.checkChatFolder(this.user, chatInfo);
                return [2 /*return*/];
            });
        });
    };
    ChatService.prototype.getAllChats = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.allChats);
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                 CHAT CREATION AND EDITION                 */
    /*                                                           */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    ChatService.prototype.isAdmin = function (chat) {
        return chat.administrators.includes(this.user);
    };
    /*
    * Normal chats behave the same as group chats, so
    * we create a group chat with just both this user and
    * the other one.
    */
    ChatService.prototype.createChat = function (otherUser) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var users;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                users = [];
                users.push(otherUser);
                return [2 /*return*/, this.createGroupChat(otherUser.nickname, users)];
            });
        });
    };
    ChatService.prototype.createChatFromRequest = function (request) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var chat;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        chat = request.chat;
                        this.allChats.push(chat);
                        return [4 /*yield*/, this.files.checkChatFolder(this.user, chat)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, chat];
                }
            });
        });
    };
    ChatService.prototype.createGroupChat = function (chatName, otherUsers) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var chat, id;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Chat service creating new chat: " + chatName);
                        id = Object(uuid__WEBPACK_IMPORTED_MODULE_8__["v4"])();
                        id = id.replace(/-/g, '');
                        console.log("New chat id: " + id);
                        chat = new src_app_models_dechat_chat_info_model__WEBPACK_IMPORTED_MODULE_3__["ChatInfo"](id);
                        chat.chatName = chatName;
                        chat.users = otherUsers;
                        chat.administrators = [];
                        chat.administrators.push(this.user);
                        chat.users.push(this.user);
                        chat.users.forEach(function (user) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (user !== this.user)
                                    this.inbox.sendChatRequest(user, chat);
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, this.files.checkChatFolder(this.user, chat)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, chat];
                }
            });
        });
    };
    ChatService.prototype.addUserToChat = function (chat, user) {
        if (!this.isAdmin(chat))
            return false;
        chat.users.push(this.user);
        this.files.checkChatFolder(this.user, chat);
        return true;
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                        CHAT FETCHING                      */
    /*                                                           */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    ChatService.prototype.fetchChat = function (chatUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var chat, id, dataFile, file, chat;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Fetching chat: " + chatUrl);
                        id = chatUrl;
                        dataFile = chatUrl + "data.txt";
                        return [4 /*yield*/, this.files.readFile(dataFile)];
                    case 1:
                        file = _a.sent();
                        if (file.length == 0 || file == undefined) {
                            console.log("Something bad happened.");
                            this.files.deleteFolder(chatUrl);
                            return [2 /*return*/, null];
                        }
                        chat = JSON.parse(file);
                        if (chat == undefined) {
                            console.log("Something bad happened.");
                            this.files.deleteFolder(chatUrl);
                            return [2 /*return*/, null];
                        }
                        // Load messages
                        return [4 /*yield*/, this.messages.fetchChat(chat)];
                    case 2:
                        // Load messages
                        _a.sent();
                        return [2 /*return*/, chat];
                }
            });
        });
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _files_service__WEBPACK_IMPORTED_MODULE_5__["FilesService"],
            _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _inbox_service__WEBPACK_IMPORTED_MODULE_7__["InboxService"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/dechat/files.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/dechat/files.service.ts ***!
  \**************************************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var solid_file_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! solid-file-client */ "./node_modules/solid-file-client/dist/browser/solid-file-client.bundle.js");
/* harmony import */ var solid_file_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(solid_file_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solid_rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../solid/rdf.service */ "./src/app/services/solid/rdf.service.ts");




var FilesService = /** @class */ (function () {
    //
    //  ALL INFO NEEDED FOR THIS SERVICE:
    //
    //  https://github.com/jeff-zucker/solid-file-client
    //
    function FilesService(rdf) {
        this.rdf = rdf;
    }
    FilesService.prototype.getRoot = function (user) {
        return user.url.replace('/profile/card#me', '/private/dechat_en1a/');
    };
    FilesService.prototype.checkUserFiles = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var userFolder, inboxFolder;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdf.getSession()];
                    case 1:
                        _a.sent();
                        userFolder = user.url.replace('/profile/card#me', '/private/');
                        inboxFolder = user.url.replace('/profile/card#me', '/inbox/');
                        //this.readFile(user.url.replace('/profile/card#me', "/.acl"));
                        //this.readFile(inboxFolder + ".acl");
                        this.checkFolderExistence(inboxFolder);
                        this.checkFolderExistence(userFolder).then(function (then) {
                            return _this.checkFolderExistence(userFolder + "dechat_en1a/").then(function (then) {
                                return _this.checkFolderExistence(userFolder + "dechat_en1a/chats/");
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    // Checks if a folder exists.
    // If not, it will create a folder with the requested url.
    FilesService.prototype.checkFolderExistence = function (url, onError) {
        if (onError === void 0) { onError = function (err) { }; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdf.getSession()];
                    case 1:
                        _a.sent();
                        try {
                            solid_file_client__WEBPACK_IMPORTED_MODULE_2__["readFolder"](url).then(function (success) { console.log('Existent folder!'); }, function (error) {
                                console.log('Non existent folder. Creating new one...');
                                _this.createFolder(url).then(onError);
                            });
                        }
                        catch (error) {
                            console.log("Error creating folder: " + error);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
      It will check the existance of the chat folder and, inside
      that folder, the existance of the chat data file.
    */
    FilesService.prototype.checkChatFolder = function (user, chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var path, error;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rdf.getSession()];
                    case 1:
                        _a.sent();
                        path = this.getChatUrl(user, chat);
                        error = function (e) {
                            _this.checkChatDataFile(path, chat);
                            _this.givePermissions(path, user);
                        };
                        return [4 /*yield*/, this.checkFolderExistence(path, error)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilesService.prototype.checkChatDataFile = function (path, chat) {
        var filename = path + "data.txt";
        var json = JSON.stringify(chat);
        this.updateFile(filename, json);
    };
    FilesService.prototype.getChatsRootUrl = function (user) {
        return this.getRoot(user) + "chats/";
    };
    FilesService.prototype.getChatUrl = function (user, chat) {
        var userFolder = this.getRoot(user) + "chats/";
        var url = userFolder + chat.chatId + "/";
        console.log("Chat url = " + url);
        return url;
    };
    FilesService.prototype.getInboxUrl = function (user) {
        return user.url.replace('/profile/card#me', '/inbox/');
    };
    FilesService.prototype.createFolder = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_2__["createFolder"](url).then(function (success) { console.log("Created folder " + url + "."); }, function (error) { console.log('Could not create folder: ' + error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilesService.prototype.createFile = function (url, str) {
        if (str === void 0) { str = null; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_2__["createFile"](url).then(function (success) {
                            console.log("Created file " + url + ".");
                            if (str != null)
                                _this.updateFile(url, str);
                        }, function (error) { console.log('Could not create file: ' + error); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilesService.prototype.updateFile = function (url, str) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_2__["updateFile"](url, str).then(function (success) { console.log("File edited!"); }, function (error) {
                            //console.log("Could not edit file: " + error)
                            _this.createFile(url, str);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FilesService.prototype.readFile = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = "";
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_2__["readFile"](url).then(function (body) {
                                console.log("File content is : " + body + ".");
                                result = body;
                            }, function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    FilesService.prototype.deleteFile = function (url) {
        solid_file_client__WEBPACK_IMPORTED_MODULE_2__["deleteFile"](url).then(function (success) { console.log("Deleted " + url + "."); }, function (err) { return console.log(err); });
    };
    FilesService.prototype.readFolder = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_2__["readFolder"](url).then(function (folder) { result = folder.files.map(function (f) { return f.url; }); }, function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    FilesService.prototype.deleteFolder = function (url) {
        solid_file_client__WEBPACK_IMPORTED_MODULE_2__["deleteFolder"](url).then(function (success) { console.log("Deleted " + url + "."); }, function (err) { return console.log(err); });
    };
    FilesService.prototype.readFolderSubfolders = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = [];
                        return [4 /*yield*/, solid_file_client__WEBPACK_IMPORTED_MODULE_2__["readFolder"](url).then(function (folder) { result = folder.folders.map(function (f) { return f.url; }); }, function (err) { return console.log(err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    FilesService.prototype.givePermissions = function (path, owner) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var webId, acl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                webId = owner.url;
                acl = "# ACL resource for the profile folder\n          @prefix acl: <http://www.w3.org/ns/auth/acl#>.\n          @prefix foaf: <http://xmlns.com/foaf/0.1/>.\n          \n          # The owner has all permissions\n          <#owner>\n              a acl:Authorization;\n              acl:agent <" + webId + ">;\n              acl:accessTo <./>;\n              acl:defaultForNew <./>;\n              acl:mode acl:Read, acl:Write, acl:Control.\n          \n          # The public has read permissions\n          <#public>\n              a acl:Authorization;\n              acl:agentClass foaf:Agent;\n              acl:accessTo <./>;\n              acl:defaultForNew <./>;\n              acl:mode acl:Read.";
                path += '.acl';
                this.readFile(path);
                solid_file_client__WEBPACK_IMPORTED_MODULE_2__["updateFile"](path, acl).then(function (success) {
                    console.log('Folder permisions added');
                }, function (err) { return console.log('Could not set folder permisions' + err); });
                return [2 /*return*/];
            });
        });
    };
    // Process the .acl file to give premissions to a new user
    // Work in prograss
    FilesService.prototype.addUserToAclFile = function (str, newUser) {
        var webId = newUser.url;
        var lines = str.split("\n");
        // First check the @prefixes //
        var lastPrefixLine = 0;
        var prefixes = lines.filter(function (str, index, array) {
            if (str.startsWith("@prefix")) {
                lastPrefixLine = index;
                return true;
            }
            return false;
        });
        // Check w3.org auth acl
        var isW3Added = false;
        var w3 = "http://www.w3.org/ns/auth/acl#";
        for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i].includes(w3)) {
                isW3Added = true;
                break;
            }
        }
        if (!isW3Added) {
            var prefix = "@prefix n0: <" + w3 + ">.\n";
            lines.splice(lastPrefixLine, 0 /*no removing!*/, prefix);
            lastPrefixLine++;
        }
        // Check user prefix added
        var isUserAdded = false;
        for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i].includes(webId)) {
                isUserAdded = true;
                break;
            }
        }
        if (!isUserAdded) {
            var prefix = "@prefix c0: <" + webId + ">.\n";
            lines.splice(lastPrefixLine, 0 /*no removing!*/, prefix);
        }
        // Now add the :Read permission //
        var readIndex = lines.findIndex(function (str, index, array) { return str.startsWith(":Read"); });
        if (readIndex == -1) {
            readIndex = lines.length;
            lines.push(":Read\n");
            lines.push("a n0:Authorization;\n");
            lines.push("n0:accessTo <./>:;\n");
            lines.push("n0:defaultForNew <./>:;\n");
            lines.push("n0:mode n0:Read.`;\n");
            lines.push("n0:agent c0:me;\n");
        }
    };
    FilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_solid_rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/services/dechat/inbox.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/dechat/inbox.service.ts ***!
  \**************************************************/
/*! exports provided: InboxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxService", function() { return InboxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files.service */ "./src/app/services/dechat/files.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/dechat/user.service.ts");
/* harmony import */ var src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/dechat/inbox-element.model */ "./src/app/models/dechat/inbox-element.model.ts");





var InboxService = /** @class */ (function () {
    function InboxService(files, users) {
        this.files = files;
        this.users = users;
        this.newElements = [];
        this.onElementFoundCallbacks = [];
        this.setUp();
    }
    InboxService.prototype.setUp = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, 4];
                    case 1:
                        _b.sent();
                        console.log("Inbox setting up...");
                        _a = this;
                        return [4 /*yield*/, this.users.getUser()];
                    case 2:
                        _a.user = _b.sent();
                        setInterval(this.checkInbox.bind(this), 500 /*2000*/);
                        return [2 /*return*/];
                }
            });
        });
    };
    InboxService.prototype.addOnElementFoundCallback = function (callback) {
        this.onElementFoundCallbacks.push(callback);
    };
    // This function is called periodically.
    // It checks if there exist new files in the inbox.
    InboxService.prototype.checkInbox = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var _a, url, newFiles, folder;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.user == undefined)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.users.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                    case 2:
                        url = this.files.getInboxUrl(this.user);
                        newFiles = [];
                        return [4 /*yield*/, this.files.readFolder(url).then(function (result) {
                                newFiles = result.filter(function (str, index, array) { return str.includes("DeChatEn1a"); });
                                console.log("INBOX HAS " + newFiles.length + " FILES");
                                _this.addInboxFiles(newFiles);
                            })];
                    case 3:
                        folder = _b.sent();
                        // Process new elements
                        this.processNewElements();
                        return [2 /*return*/];
                }
            });
        });
    };
    InboxService.prototype.processNewElements = function () {
        var _this = this;
        this.newElements.forEach(function (element) {
            _this.onElementFoundCallbacks.forEach(function (callback) { callback(element); });
        });
        this.newElements = [];
    };
    // Takes an array of urls and processes the requests
    InboxService.prototype.addInboxFiles = function (files) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, file, inboxElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.files.readFile(files[i])];
                    case 2:
                        file = _a.sent();
                        if (file.length > 0) {
                            inboxElement = JSON.parse(file);
                            this.newElements.push(inboxElement);
                            console.log("Inbox element pushed: " + inboxElement);
                        }
                        this.files.deleteFile(files[i]);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                         REQUESTS                          */
    /*                                                           */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    InboxService.prototype.sendChatRequest = function (toUser, chat) {
        var request;
        request = new src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_4__["InboxElement"]();
        request.chat = chat;
        request.type = src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_4__["InboxElementType"].CHAT_REQUEST;
        var inboxUrl = this.files.getInboxUrl(toUser);
        var filename = inboxUrl + "DeChatEn1a_chatreq_" + chat.chatId + ".txt";
        this.sendRequest(request, filename);
    };
    InboxService.prototype.sendNewMessage = function (toUser, chat, message) {
        var request;
        request = new src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_4__["InboxElement"]();
        request.chat = chat;
        request.message = message;
        request.type = src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_4__["InboxElementType"].NEW_MESSAGE;
        var inboxUrl = this.files.getInboxUrl(toUser);
        var filename = inboxUrl + "DeChatEn1a_newmsg_" + message.id + ".txt";
        this.sendRequest(request, filename);
    };
    InboxService.prototype.sendRequest = function (inboxElement, filename) {
        console.log("Sending request...");
        var text = JSON.stringify(inboxElement);
        this.files.createFile(filename, text);
    };
    InboxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], InboxService);
    return InboxService;
}());



/***/ }),

/***/ "./src/app/services/dechat/message.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/dechat/message.service.ts ***!
  \****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_models_dechat_chat_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dechat/chat-message.model */ "./src/app/models/dechat/chat-message.model.ts");
/* harmony import */ var src_app_models_dechat_message_bundle_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/dechat/message-bundle.model */ "./src/app/models/dechat/message-bundle.model.ts");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files.service */ "./src/app/services/dechat/files.service.ts");
/* harmony import */ var _inbox_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inbox.service */ "./src/app/services/dechat/inbox.service.ts");
/* harmony import */ var src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/dechat/inbox-element.model */ "./src/app/models/dechat/inbox-element.model.ts");
/* harmony import */ var src_app_models_dechat_chat_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/dechat/chat.model */ "./src/app/models/dechat/chat.model.ts");









var MessageService = /** @class */ (function () {
    function MessageService(files, inbox) {
        var _this = this;
        this.files = files;
        this.inbox = inbox;
        this.currentMessages = [];
        this.chatMap = new Map();
        this.inbox.addOnElementFoundCallback(function (element) {
            if (element.type == src_app_models_dechat_inbox_element_model__WEBPACK_IMPORTED_MODULE_7__["InboxElementType"].NEW_MESSAGE)
                _this.createMessageFromRequest(element);
        });
    }
    MessageService.prototype.setCurrentUser = function (user) {
        this.user = user;
    };
    MessageService.prototype.fetchChat = function (chatInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var chat, chatUrl;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Message Service Fetching chat: " + chatInfo.chatId);
                        if (!this.chatMap.has(chatInfo.chatId)) {
                            this.chatMap.set(chatInfo.chatId, new src_app_models_dechat_chat_model__WEBPACK_IMPORTED_MODULE_8__["Chat"](chatInfo));
                        }
                        chat = this.chatMap.get(chatInfo.chatId);
                        chatUrl = this.files.getChatUrl(this.user, chatInfo);
                        return [4 /*yield*/, this.loadAllMessageBundles(chatUrl, chat)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.setCurrentChat = function (chatInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var newBundles, bundles;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Message service setting current chat");
                        // Clear messages of the previous chat
                        while (this.currentMessages.length > 0) {
                            this.currentMessages.pop();
                        }
                        if (!this.chatMap.has(chatInfo.chatId)) {
                            this.chatMap.set(chatInfo.chatId, new src_app_models_dechat_chat_model__WEBPACK_IMPORTED_MODULE_8__["Chat"](chatInfo));
                        }
                        this.currentChat = this.chatMap.get(chatInfo.chatId);
                        this.currentChatUrl = this.files.getChatUrl(this.user, chatInfo);
                        return [4 /*yield*/, this.loadAllMessageBundles(this.currentChatUrl, this.currentChat)];
                    case 1:
                        newBundles = _a.sent();
                        console.log("New bundles added: " + newBundles);
                        bundles = this.currentChat.getBundles();
                        if (bundles.length == 0)
                            console.log("... man, the chat has no bundles");
                        return [4 /*yield*/, bundles.forEach(function (b) {
                                console.log("Bundle " + b.bundleId + " has " + b.messages.length + " messages");
                                // Sort them by date
                                b.messages = b.messages.sort(function (a, b) { return a.date.getTime() - b.date.getTime(); });
                                b.messages.forEach(function (m) { return _this.currentMessages.push(m); });
                                _this.currentBundle = b;
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.getFullTimeStamp = function () {
        var now = new Date();
        var date = now.getUTCFullYear() + '_' +
            (now.getUTCMonth() + 1) + '_' +
            now.getUTCDate();
        var time = now.getUTCHours() + '_' +
            now.getUTCMinutes() + '_' +
            now.getSeconds() + '_' +
            now.getMilliseconds();
        return date + ' ' + time;
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                     MESSAGE MANAGEMENT                    */
    /*                                                           */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    MessageService.prototype.getMessages = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.currentMessages);
    };
    MessageService.prototype.sendMessage = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var _a, message, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.currentBundle == undefined)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.createBundle(this.currentChat, this.getFullTimeStamp())];
                    case 1:
                        _a.currentBundle = _c.sent();
                        _c.label = 2;
                    case 2:
                        message = this.createMessage(msg);
                        if (!!this.currentBundle.addMessage(message)) return [3 /*break*/, 4];
                        _b = this;
                        return [4 /*yield*/, this.createBundle(this.currentChat, this.getFullTimeStamp())];
                    case 3:
                        _b.currentBundle = _c.sent();
                        this.currentBundle.addMessage(message);
                        _c.label = 4;
                    case 4:
                        // Push it so we can see it instantly
                        this.currentMessages.push(message);
                        // Send to the inbox of all users
                        this.currentChat.chatInfo.users.forEach(function (user) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                this.inbox.sendNewMessage(user, this.currentChat.chatInfo, message);
                                return [2 /*return*/];
                            });
                        }); });
                        console.log('[Message sent] : ' + msg);
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.createMessage = function (msg) {
        var message = new src_app_models_dechat_chat_message_model__WEBPACK_IMPORTED_MODULE_3__["ChatMessage"]();
        message.message = msg;
        message.userName = this.user.userName;
        message.chatId = this.currentChat.chatInfo.chatId;
        message.bundleId = this.currentBundle.bundleId;
        return message;
    };
    MessageService.prototype.createMessageFromRequest = function (request) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var msg, chatInfo, existentMsg, chat, bundle, _a, path;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        msg = request.message;
                        chatInfo = request.chat;
                        if (this.currentChat == undefined) {
                            // TODO Increase the unread icon on the chat
                            // and create it
                            console.log("Undefined current chat!!!!");
                        }
                        else if (this.currentChat.chatInfo.chatId == chatInfo.chatId) {
                            existentMsg = this.currentMessages.find(function (m, index, array) { return m.id == msg.id; });
                            if (existentMsg == undefined)
                                this.currentMessages.push(msg);
                        }
                        else {
                            this.currentChat.unreadMessageCount++;
                        }
                        if (!this.chatMap.has(msg.chatId)) {
                            console.log("[ERROR] We have received a message and we don't have the chat in the map!!!!!!");
                            // TODO add it to the chat map
                            return [2 /*return*/];
                        }
                        chat = this.chatMap.get(msg.chatId);
                        return [4 /*yield*/, chat.getBundle(msg.bundleId)];
                    case 1:
                        bundle = _b.sent();
                        if (!(bundle == undefined)) return [3 /*break*/, 3];
                        console.log("Undefined bundle. Creating it.");
                        _a = this;
                        return [4 /*yield*/, this.createBundle(chat, msg.bundleId)];
                    case 2:
                        _a.currentBundle = _b.sent();
                        bundle = this.currentBundle;
                        _b.label = 3;
                    case 3:
                        bundle.addMessage(msg);
                        return [4 /*yield*/, this.files.getChatUrl(this.user, this.currentChat.chatInfo)];
                    case 4:
                        path = _b.sent();
                        path = path + bundle.bundleId + '/';
                        path = path + msg.id + '.txt';
                        return [4 /*yield*/, this.files.createFile(path, JSON.stringify(msg))];
                    case 5:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MessageService.prototype.getMessageFromFile = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var msg, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.files.readFile(url).then(function (body) { return json = JSON.parse(body); })];
                    case 1:
                        _a.sent();
                        // Get all the message data, I guess
                        msg = new src_app_models_dechat_chat_message_model__WEBPACK_IMPORTED_MODULE_3__["ChatMessage"](json.message);
                        return [2 /*return*/, msg];
                }
            });
        });
    };
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    /*                                                           */
    /*                     BUNDLE MANAGEMENT                     */
    /*                                                           */
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    // Looks at the message bundles in the pod, adds them
    // to the map and returns how many of them are new
    MessageService.prototype.loadAllMessageBundles = function (chatUrl, chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var bundleFolders, count;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Loading all message bundles in the POD chat folder " + chatUrl);
                        return [4 /*yield*/, this.files.readFolderSubfolders(chatUrl)];
                    case 1:
                        bundleFolders = _a.sent();
                        if (bundleFolders.length == 0) {
                            console.log("The chat has no bundles");
                            return [2 /*return*/, 0];
                        }
                        console.log("Number of bundles in the POD: " + bundleFolders.length);
                        console.log("Number of bundles locally: " + chat.getBundles().length);
                        count = 0;
                        return [4 /*yield*/, bundleFolders.forEach(function (b) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var result;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.loadMessageBundle(chat, chatUrl, b)];
                                        case 1:
                                            result = _a.sent();
                                            console.log("Trying to add bundle");
                                            return [4 /*yield*/, chat.addBundle(result)];
                                        case 2:
                                            if (_a.sent()) {
                                                count++;
                                                console.log("Bundle added :D");
                                            }
                                            console.log("Count = " + count);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, count];
                }
            });
        });
    };
    // Fetches all the messages in a given bundle.
    // Returns the bundle object.
    MessageService.prototype.loadMessageBundle = function (chat, chatUrl, bundleUrl) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var bundleId, bundle, messageFiles;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Fetching message bundle.");
                        bundleId = bundleUrl.replace(chatUrl, '').replace('/', '');
                        console.log("URL: " + bundleUrl);
                        console.log("ID: " + bundleId);
                        console.log("Getting the bundle.");
                        return [4 /*yield*/, this.getBundle(chat, bundleId)];
                    case 1:
                        bundle = _a.sent();
                        // Read all messages inside the bundle folder
                        console.log("Reading all messages inside the bundle folder");
                        return [4 /*yield*/, this.files.readFolder(bundleUrl)];
                    case 2:
                        messageFiles = _a.sent();
                        return [4 /*yield*/, messageFiles.forEach(function (f) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var msg;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getMessageFromFile(f)];
                                        case 1:
                                            msg = _a.sent();
                                            return [4 /*yield*/, bundle.addMessage(msg)];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, bundle];
                }
            });
        });
    };
    MessageService.prototype.getBundle = function (chat, bundleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bundle;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bundle = chat.getBundle(bundleId);
                        if (bundle != undefined)
                            return [2 /*return*/, bundle];
                        return [4 /*yield*/, this.createBundle(chat, bundleId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MessageService.prototype.createBundle = function (chat, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var bundle, path;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bundle = new src_app_models_dechat_message_bundle_model__WEBPACK_IMPORTED_MODULE_4__["MessageBundle"](chat.chatInfo.chatId, id);
                        return [4 /*yield*/, this.files.getChatUrl(this.user, chat.chatInfo)];
                    case 1:
                        path = _a.sent();
                        return [4 /*yield*/, this.files.checkFolderExistence(path + bundle.bundleId + '/')];
                    case 2:
                        _a.sent();
                        //this.chatMap.get(chatId).addBundle(bundle);
                        return [2 /*return*/, bundle];
                }
            });
        });
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_files_service__WEBPACK_IMPORTED_MODULE_5__["FilesService"],
            _inbox_service__WEBPACK_IMPORTED_MODULE_6__["InboxService"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/dechat/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/dechat/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_dechat_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/dechat/user.model */ "./src/app/models/dechat/user.model.ts");
/* harmony import */ var _solid_rdf_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../solid/rdf.service */ "./src/app/services/solid/rdf.service.ts");
/* harmony import */ var _solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../solid/solid.auth.service */ "./src/app/services/solid/solid.auth.service.ts");





var UserService = /** @class */ (function () {
    function UserService(rdf, auth) {
        this.rdf = rdf;
        this.auth = auth;
        console.log('User service constructor');
        this.user = null;
        this.loadingProfile = true;
        this.profileLoaded = false;
        this.contacts = [];
        this.loadProfile();
        // Clear cached profile data
        // TODO: Remove this code and find a better way to get the old data
        localStorage.removeItem('oldProfileData');
    }
    // Loads the profile from the rdf service and handles the response
    UserService.prototype.loadProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var profile, error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.profileLoaded) {
                            return [2 /*return*/];
                        }
                        if (!this.loadingProfile) {
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        this.loadingProfile = true;
                        return [4 /*yield*/, this.rdf.getProfile()];
                    case 2:
                        profile = _a.sent();
                        if (profile) {
                            this.profile = profile;
                            this.auth.saveOldUserData(profile);
                        }
                        this.loadingProfile = false;
                        this.profileLoaded = true;
                        if (this.profile) {
                            this.setupFromProfile();
                        }
                        else {
                            this.setupDefault();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.setupFromProfile = function () {
        this.user = new src_app_models_dechat_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.rdf.getWebID());
        this.user.url = this.rdf.getWebID();
        this.user.userName = this.profile.fn;
        this.user.status = 'online';
        this.user.profileImage = this.profile.image ? this.profile.image : '/assets/images/profile.png';
        this.loadContacts();
    };
    UserService.prototype.setupDefault = function () {
        console.log('UserService failed fetching user data. Loading default user.');
        this.user = new src_app_models_dechat_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]('');
    };
    UserService.prototype.loadContacts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            var contacts;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Fetching contacts...');
                        return [4 /*yield*/, this.rdf.getContacts()];
                    case 1:
                        contacts = _a.sent();
                        console.log('Contact count = ' + contacts.length);
                        while (this.contacts.length > 0) {
                            this.contacts.pop();
                        }
                        contacts.forEach(function (element) {
                            var c = new src_app_models_dechat_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](element.value);
                            _this.contacts.push(c);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.getUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadProfile()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.user];
                }
            });
        });
    };
    UserService.prototype.getUserName = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadProfile()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.user.userName];
                }
            });
        });
    };
    UserService.prototype.getProfileImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadProfile()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.user.profileImage];
                }
            });
        });
    };
    UserService.prototype.getContacts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadProfile()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.contacts];
                }
            });
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_solid_rdf_service__WEBPACK_IMPORTED_MODULE_3__["RdfService"], _solid_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/solid/auth.guard.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/solid/auth.guard.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _solid_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./solid.auth.service */ "./src/app/services/solid/solid.auth.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        var isLoggedIn = localStorage.getItem('solid-auth-client') ? true : false;
        if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        return /*isLoggedIn; /*/ this.auth.session.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (session) { return !!session; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                return _this.router.navigate(['/']);
            }
        })); //*/
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_solid_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/solid/rdf.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/solid/rdf.service.ts ***!
  \***********************************************/
/*! exports provided: RdfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RdfService", function() { return RdfService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var VCARD = $rdf.Namespace('http://www.w3.org/2006/vcard/ns#');
var FOAF = $rdf.Namespace('http://xmlns.com/foaf/0.1/');
/**
 * A service layer for RDF data manipulation using rdflib.js
 * @see https://solid.inrupt.com/docs/manipulating-ld-with-rdflib
 */
var RdfService = /** @class */ (function () {
    function RdfService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this.store = $rdf.graph();
        /**
         * A helper object that connects to the web, loads data, and saves it back. More powerful than using a simple
         * store object.
         * When you have a fetcher, then you also can ask the query engine to go fetch new linked data automatically
         * as your query makes its way across the web.
         * @see http://linkeddata.github.io/rdflib.js/doc/Fetcher.html
         */
        this.fetcher = $rdf.Fetcher;
        /**
         * The UpdateManager allows you to send small changes to the server to “patch” the data as your user changes data in
         * real time. It also allows you to subscribe to changes other people make to the same file, keeping track of
         * upstream and downstream changes, and signaling any conflict between them.
         * @see http://linkeddata.github.io/rdflib.js/doc/UpdateManager.html
         */
        this.updateManager = $rdf.UpdateManager;
        /**
         * Fetches the session from Solid, and store results in localStorage
         */
        this.getSession = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, solid.auth.currentSession(localStorage)];
                    case 1:
                        _a.session = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * Gets a node that matches the specified pattern using the VCARD onthology
         *
         * any() can take a subject and a predicate to find Any one person identified by the webId
         * that matches against the node/predicated
         *
         * @param {string} node VCARD predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         * @see https://github.com/solid/solid-tutorial-rdflib.js
         */
        this.getValueFromVcard = function (node, webId) {
            return _this.getValueFromNamespace(node, VCARD, webId);
        };
        /**
         * Gets a node that matches the specified pattern using the FOAF onthology
         * @param {string} node FOAF predicate to apply to the $rdf.any()
         * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
         * @return {string} The value of the fetched node or an emtpty string
         */
        this.getValueFromFoaf = function (node, webId) {
            return _this.getValueFromNamespace(node, FOAF, webId);
        };
        this.transformDataForm = function (form, me, doc) {
            var insertions = [];
            var deletions = [];
            var fields = Object.keys(form.value);
            var oldProfileData = JSON.parse(localStorage.getItem('oldProfileData')) || {};
            // We need to split out into three code paths here:
            // 1. There is an old value and a new value. This is the update path
            // 2. There is no old value and a new value. This is the insert path
            // 3. There is an old value and no new value. Ths is the delete path
            // These are separate codepaths because the system needs to know what to do in each case
            fields.map(function (field) {
                var predicate = VCARD(_this.getFieldName(field));
                var subject = _this.getUriForField(field, me);
                var why = doc;
                var fieldValue = _this.getFieldValue(form, field);
                var oldFieldValue = _this.getOldFieldValue(field, oldProfileData);
                // if there's no existing home phone number or email address, we need to add one, then add the link for hasTelephone or hasEmail
                if (!oldFieldValue && fieldValue && (field === 'phone' || field === 'email')) {
                    _this.addNewLinkedField(field, insertions, predicate, fieldValue, why, me);
                }
                else {
                    // Add a value to be updated
                    if (oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                    else if (oldProfileData[field] && !form.value[field] && !form.controls[field].pristine) {
                        deletions.push($rdf.st(subject, predicate, oldFieldValue, why));
                    }
                    else if (!oldProfileData[field] && form.value[field] && !form.controls[field].pristine) {
                        insertions.push($rdf.st(subject, predicate, fieldValue, why));
                    }
                }
            });
            return {
                insertions: insertions,
                deletions: deletions,
            };
        };
        this.updateProfile = function (form) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var _this = this;
            var me, doc, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                me = $rdf.sym(this.session.webId);
                doc = $rdf.NamedNode.fromValue(this.session.webId.split('#')[0]);
                data = this.transformDataForm(form, me, doc);
                // Update existing values
                if (data.insertions.length > 0 || data.deletions.length > 0) {
                    this.updateManager.update(data.deletions, data.insertions, function (response, success, message) {
                        if (success) {
                            _this.toastr.success('Your Solid profile has been successfully updated', 'Success!');
                            form.form.markAsPristine();
                            form.form.markAsTouched();
                        }
                        else {
                            _this.toastr.error('Message: ' + message, 'An error has occurred');
                        }
                    });
                }
                return [2 /*return*/];
            });
        }); };
        this.getAddress = function () {
            var linkedUri = _this.getValueFromVcard('hasAddress');
            if (linkedUri) {
                return {
                    locality: _this.getValueFromVcard('locality', linkedUri),
                    country_name: _this.getValueFromVcard('country-name', linkedUri),
                    region: _this.getValueFromVcard('region', linkedUri),
                    street: _this.getValueFromVcard('street-address', linkedUri),
                };
            }
            return {};
        };
        // Function to get email. This returns only the first email, which is temporary
        this.getEmail = function () {
            var linkedUri = _this.getValueFromVcard('hasEmail');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('mailto:')[1];
            }
            return '';
        };
        // Function to get phone number. This returns only the first phone number, which is temporary. It also ignores the type.
        this.getPhone = function () {
            var linkedUri = _this.getValueFromVcard('hasTelephone');
            if (linkedUri) {
                return _this.getValueFromVcard('value', linkedUri).split('tel:+')[1];
            }
        };
        this.getProfile = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.session) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.getSession()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        console.log('Wait for it...');
                        if (this.session == null) {
                            console.log('NULL SESSION!!!');
                        }
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.fetcher.load(this.session.webId)];
                    case 4:
                        _a.sent();
                        console.log('Profile loaded: ' + this.getValueFromVcard('fn'));
                        return [2 /*return*/, {
                                fn: this.getValueFromVcard('fn'),
                                company: this.getValueFromVcard('organization-name'),
                                phone: this.getPhone(),
                                role: this.getValueFromVcard('role'),
                                image: this.getValueFromVcard('hasPhoto'),
                                address: this.getAddress(),
                                email: this.getEmail(),
                            }];
                    case 5:
                        error_1 = _a.sent();
                        console.log("Error fetching data: " + error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        var fetcherOptions = {};
        this.fetcher = new $rdf.Fetcher(this.store, fetcherOptions);
        this.updateManager = new $rdf.UpdateManager(this.store);
        this.getSession();
    }
    RdfService.prototype.addNewLinkedField = function (field, insertions, predicate, fieldValue, why, me) {
        // Generate a new ID. This id can be anything but needs to be unique.
        var newId = field + ':' + Date.now();
        // Get a new subject, using the new ID
        var newSubject = $rdf.sym(this.session.webId.split('#')[0] + '#' + newId);
        // Set new predicate, based on email or phone fields
        var newPredicate = field === 'phone' ? $rdf.sym(VCARD('hasTelephone')) : $rdf.sym(VCARD('hasEmail'));
        // Add new phone or email to the pod
        insertions.push($rdf.st(newSubject, predicate, fieldValue, why));
        // Set the type (defaults to Home/Personal for now) and insert it into the pod as well
        // Todo: Make this dynamic
        var type = field === 'phone' ? $rdf.literal('Home') : $rdf.literal('Personal');
        insertions.push($rdf.st(newSubject, VCARD('type'), type, why));
        // Add a link in #me to the email/phone number (by id)
        insertions.push($rdf.st(me, newPredicate, newSubject, why));
    };
    RdfService.prototype.getUriForField = function (field, me) {
        var uriString;
        var uri;
        switch (field) {
            case 'phone':
                uriString = this.getValueFromVcard('hasTelephone');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            case 'email':
                uriString = this.getValueFromVcard('hasEmail');
                if (uriString) {
                    uri = $rdf.sym(uriString);
                }
                break;
            default:
                uri = me;
                break;
        }
        return uri;
    };
    /**
     * Extracts the value of a field of a NgForm and converts it to a $rdf.NamedNode
     * @param {NgForm} form
     * @param {string} field The name of the field that is going to be extracted from the form
     * @return {RdfNamedNode}
     */
    RdfService.prototype.getFieldValue = function (form, field) {
        var fieldValue;
        if (!form.value[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                fieldValue = $rdf.sym('tel:+' + form.value[field]);
                break;
            case 'email':
                fieldValue = $rdf.sym('mailto:' + form.value[field]);
                break;
            default:
                fieldValue = form.value[field];
                break;
        }
        return fieldValue;
    };
    RdfService.prototype.getOldFieldValue = function (field, oldProfile) {
        var oldValue;
        if (!oldProfile || !oldProfile[field]) {
            return;
        }
        switch (field) {
            case 'phone':
                oldValue = $rdf.sym('tel:+' + oldProfile[field]);
                break;
            case 'email':
                oldValue = $rdf.sym('mailto:' + oldProfile[field]);
                break;
            default:
                oldValue = oldProfile[field];
                break;
        }
        return oldValue;
    };
    RdfService.prototype.getFieldName = function (field) {
        switch (field) {
            case 'company':
                return 'organization-name';
            case 'phone':
            case 'email':
                return 'value';
            default:
                return field;
        }
    };
    /**
     * Gets any resource that matches the node, using the provided Namespace
     * @param {string} node The name of the predicate to be applied using the provided Namespace
     * @param {$rdf.namespace} namespace The RDF Namespace
     * @param {string?} webId The webId URL (e.g. https://yourpod.solid.community/profile/card#me)
     */
    RdfService.prototype.getValueFromNamespace = function (node, namespace, webId) {
        var store = this.store.any($rdf.sym(webId || this.session.webId), namespace(node));
        if (store) {
            return store.value;
        }
        return '';
    };
    // * * * * * * * * * * * * * * * * * * * * * //
    // Our methods go down here :D
    //
    //  |   |   |   |   |   |   |
    //  v   v   v   v   v   v   v
    RdfService.prototype.getContacts = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var webId, error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        webId = this.session.webId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fetcher.load(this.store.sym(webId).doc())];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, this.store.each(this.store.sym(webId), FOAF('knows'))];
                    case 3:
                        error_2 = _a.sent();
                        console.log("Error fetching contacts data: " + error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    RdfService.prototype.getWebID = function () {
        return this.session.webId;
    };
    RdfService.prototype.getUserName = function () {
        return this.getValueFromVcard('fn');
    };
    RdfService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], RdfService);
    return RdfService;
}());



/***/ }),

/***/ "./src/app/services/solid/solid.auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/solid/solid.auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _rdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rdf.service */ "./src/app/services/solid/rdf.service.ts");





var AuthService = /** @class */ (function () {
    function AuthService(router, rdf) {
        var _this = this;
        this.router = router;
        this.rdf = rdf;
        this.fechInit = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/sparql-update',
            },
            body: '',
        };
        /*
         * This will check if current session is active to avoid security problems
        */
        this.isSessionActive = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.session = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(solid.auth.currentSession());
                return [2 /*return*/];
            });
        }); };
        /**
         * Alternative login-popup function. This will open a popup that will allow you to choose an identity provider
         * without leaving the current page
         * This is recommended if you don't want to leave the current workflow.
         */
        this.solidLoginPopup = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var error_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, solid.auth.popupLogin({ popupUri: './login-popup' })];
                    case 1:
                        _a.sent();
                        // Check if session is valid to avoid redirect issues
                        return [4 /*yield*/, this.isSessionActive()];
                    case 2:
                        // Check if session is valid to avoid redirect issues
                        _a.sent();
                        // popupLogin success redirect to profile
                        this.router.navigate(['/chat']);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error: " + error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        /*
        * Signs out of Solid in this app, by calling the logout function and clearing the localStorage token
        */
        this.solidSignOut = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var error_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, solid.auth.logout()];
                    case 1:
                        _a.sent();
                        // Remove localStorage
                        localStorage.removeItem('solid-auth-client');
                        // Redirect to login page
                        this.router.navigate(['/']);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log("Error: " + error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.saveOldUserData = function (profile) {
            if (!localStorage.getItem('oldProfileData')) {
                localStorage.setItem('oldProfileData', JSON.stringify(profile));
            }
        };
        this.getOldUserData = function () {
            return JSON.parse(localStorage.getItem('oldProfileData'));
        };
        /*
        *  Make a call to the solid auth endpoint. It requires an identity provider url, which here is coming from the dropdown, which
        *  is populated by the getIdentityProviders() function call. It currently requires a callback url and a storage option or else
        *  the call will fail.
        */
        this.solidLogin = function (idp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, solid.auth.login(idp, {
                            callbackUri: "" + window.location.href,
                            storage: localStorage,
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.isSessionActive();
    }
    /**
     * Function to get providers. This is to mimic the future provider registry
     *
     * @return {SolidProvider[]} A list of SolidProviders
     */
    AuthService.prototype.getIdentityProviders = function () {
        var inruptProvider = {
            name: 'Inrupt',
            image: '/assets/images/Inrupt.png',
            loginUrl: 'https://inrupt.net/auth',
            desc: 'Inrupt Inc. provider'
        };
        var solidCommunityProvider = {
            name: 'Solid Community',
            image: '/assets/images/Solid.png',
            loginUrl: 'https://solid.community',
            desc: 'A provider maintained by the Solid Community'
        };
        var otherProvider = {
            name: 'Other (Enter WebID)',
            image: '/assets/images/Generic.png',
            loginUrl: null,
            desc: 'Generic provider'
        };
        return [
            inruptProvider,
            solidCommunityProvider,
            otherProvider
        ];
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _rdf_service__WEBPACK_IMPORTED_MODULE_4__["RdfService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/sidebarComponents/chat-item/chat-item.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/sidebarComponents/chat-item/chat-item.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatItem{\r\n    height: auto;\r\n    padding: 10px;\r\n    width: 90%;\r\n    margin-top: 10px;\r\n    border-radius: 1px;\r\n    align-items:flex-start;\r\n    background-color: #201835;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    color: #A098A5;\r\n    border-radius: 8px;\r\n    transition: ease-in 0.2s;\r\n}\r\n\r\n.activeChatItem {\r\n    background-color: #483b6d;\r\n    color: rgb(199, 192, 204);\r\n}\r\n\r\n.chatItem:hover{\r\n    background-color: #5a4b88;\r\n    color: #ddd;\r\n    transition: ease-in 0.1s;\r\n}\r\n\r\n.userName{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhckNvbXBvbmVudHMvY2hhdC1pdGVtL2NoYXQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXJDb21wb25lbnRzL2NoYXQtaXRlbS9jaGF0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0SXRlbXtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAxODM1O1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xyXG4gICAgY29sb3I6ICNBMDk4QTU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbn1cclxuXHJcbi5hY3RpdmVDaGF0SXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDgzYjZkO1xyXG4gICAgY29sb3I6IHJnYigxOTksIDE5MiwgMjA0KTtcclxufVxyXG5cclxuLmNoYXRJdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVhNGI4ODtcclxuICAgIGNvbG9yOiAjZGRkO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjFzO1xyXG59XHJcblxyXG4udXNlck5hbWV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidebarComponents/chat-item/chat-item.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sidebarComponents/chat-item/chat-item.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatItem\" [ngClass]=(isActive()) (click)=\"openChat()\">\r\n    \r\n\r\n      <span class=\"userName\" *ngIf=\"chatInfo != undefined\">\r\n        {{ chatInfo.chatName }}\r\n      </span>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/sidebarComponents/chat-item/chat-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sidebarComponents/chat-item/chat-item.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatItemComponent", function() { return ChatItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_dechat_chat_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/dechat/chat-info.model */ "./src/app/models/dechat/chat-info.model.ts");
/* harmony import */ var src_app_services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dechat/chat.service */ "./src/app/services/dechat/chat.service.ts");




var ChatItemComponent = /** @class */ (function () {
    function ChatItemComponent(chatService) {
        this.chatService = chatService;
    }
    ChatItemComponent.prototype.ngOnInit = function () {
    };
    ChatItemComponent.prototype.isActive = function () {
        if (this.chatService.currentChat == this.chatInfo)
            return "activeChatItem";
        return "chatItem";
    };
    ChatItemComponent.prototype.openChat = function () {
        console.log("Oppening chat with " + this.chatInfo.chatName);
        this.chatService.openChat(this.chatInfo);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_dechat_chat_info_model__WEBPACK_IMPORTED_MODULE_2__["ChatInfo"])
    ], ChatItemComponent.prototype, "chatInfo", void 0);
    ChatItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-item',
            template: __webpack_require__(/*! ./chat-item.component.html */ "./src/app/sidebarComponents/chat-item/chat-item.component.html"),
            styles: [__webpack_require__(/*! ./chat-item.component.css */ "./src/app/sidebarComponents/chat-item/chat-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]])
    ], ChatItemComponent);
    return ChatItemComponent;
}());



/***/ }),

/***/ "./src/app/sidebarComponents/chat-list/chat-list.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/sidebarComponents/chat-list/chat-list.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXJDb21wb25lbnRzL2NoYXQtbGlzdC9jaGF0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sidebarComponents/chat-list/chat-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/sidebarComponents/chat-list/chat-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\r\n\r\n  <div class=\"newChatWrapper\">\r\n    <span>New chat</span>\r\n    <button class=\"newChatButton\" (click)=\"newChat()\">+</button>\r\n  </div>\r\n\r\n  <span *ngIf=\"(chatInfos|async).length > 0\">\r\n    <app-chat-item\r\n    [chatInfo]=chatInfo *ngFor=\"let chatInfo of chatInfos | async\">\r\n    </app-chat-item>\r\n  </span>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebarComponents/chat-list/chat-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/sidebarComponents/chat-list/chat-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ChatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatListComponent", function() { return ChatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dechat/chat.service */ "./src/app/services/dechat/chat.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dialogComponents_new_chat_dialog_new_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component */ "./src/app/dialogComponents/new-chat-dialog/new-chat-dialog.component.ts");





var ChatListComponent = /** @class */ (function () {
    function ChatListComponent(chatService, dialog) {
        this.chatService = chatService;
        this.dialog = dialog;
    }
    ChatListComponent.prototype.ngOnInit = function () {
        this.update();
    };
    ChatListComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    ChatListComponent.prototype.update = function () {
        this.chatInfos = this.chatService.getAllChats();
    };
    ChatListComponent.prototype.newChat = function () {
        // TODO
        // open a dialog to create a new chat
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        var dialogRef = this.dialog.open(src_app_dialogComponents_new_chat_dialog_new_chat_dialog_component__WEBPACK_IMPORTED_MODULE_4__["NewChatDialogComponent"], dialogConfig);
    };
    ChatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-list',
            template: __webpack_require__(/*! ./chat-list.component.html */ "./src/app/sidebarComponents/chat-list/chat-list.component.html"),
            styles: [__webpack_require__(/*! ./chat-list.component.css */ "./src/app/sidebarComponents/chat-list/chat-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dechat_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ChatListComponent);
    return ChatListComponent;
}());



/***/ }),

/***/ "./src/app/utilComponents/profile-icon/profile-icon.component.css":
/*!************************************************************************!*\
  !*** ./src/app/utilComponents/profile-icon/profile-icon.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.profileIcon {\r\n    display: grid;\r\n    grid-template-columns: 60% 40%;\r\n}\r\n\r\n.textWrapper {\r\n    padding: 15% 10%;\r\n}\r\n\r\n.imgWrapper {\r\n    display: inline-block;\r\n    width: 64px;\r\n    height: 64px;\r\n    min-width: 64px;\r\n}\r\n\r\n.imgWrapper img {\r\n    width: 100%;\r\n    border-radius: 50%;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    border-color: rgb(90, 90, 90);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbENvbXBvbmVudHMvcHJvZmlsZS1pY29uL3Byb2ZpbGUtaWNvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3V0aWxDb21wb25lbnRzL3Byb2ZpbGUtaWNvbi9wcm9maWxlLWljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucHJvZmlsZUljb24ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjAlIDQwJTtcclxufVxyXG5cclxuLnRleHRXcmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDE1JSAxMCU7XHJcbn1cclxuXHJcbi5pbWdXcmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbWluLXdpZHRoOiA2NHB4O1xyXG59XHJcblxyXG4uaW1nV3JhcHBlciBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/utilComponents/profile-icon/profile-icon.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/utilComponents/profile-icon/profile-icon.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profileIcon\">\r\n\r\n  <div class=\"textWrapper\">\r\n    Hello, {{ userName }}\r\n  </div>\r\n\r\n  <div class=\"imgWrapper\">\r\n    <img [src]=\"profileImage\" />\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/utilComponents/profile-icon/profile-icon.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/utilComponents/profile-icon/profile-icon.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileIconComponent", function() { return ProfileIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dechat_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dechat/user.service */ "./src/app/services/dechat/user.service.ts");



var ProfileIconComponent = /** @class */ (function () {
    function ProfileIconComponent(user) {
        this.user = user;
        this.profileImage = '/assets/images/profile.png';
    }
    ProfileIconComponent.prototype.ngOnInit = function () {
        this.loadProfile();
    };
    ProfileIconComponent.prototype.loadProfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.user.getUserName()];
                    case 1:
                        _a.userName = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this.user.getProfileImage()];
                    case 2:
                        _b.profileImage = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-icon',
            template: __webpack_require__(/*! ./profile-icon.component.html */ "./src/app/utilComponents/profile-icon/profile-icon.component.html"),
            styles: [__webpack_require__(/*! ./profile-icon.component.css */ "./src/app/utilComponents/profile-icon/profile-icon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dechat_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileIconComponent);
    return ProfileIconComponent;
}());



/***/ }),

/***/ "./src/app/utilComponents/user-display-slot/user-display-slot.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/utilComponents/user-display-slot/user-display-slot.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.userDisplaySlot {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbENvbXBvbmVudHMvdXNlci1kaXNwbGF5LXNsb3QvdXNlci1kaXNwbGF5LXNsb3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3V0aWxDb21wb25lbnRzL3VzZXItZGlzcGxheS1zbG90L3VzZXItZGlzcGxheS1zbG90LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi51c2VyRGlzcGxheVNsb3Qge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/utilComponents/user-display-slot/user-display-slot.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/utilComponents/user-display-slot/user-display-slot.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"userDisplaySlot\">\r\n  <p>User: {{ userName }}</p>\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/utilComponents/user-display-slot/user-display-slot.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/utilComponents/user-display-slot/user-display-slot.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UserDisplaySlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDisplaySlotComponent", function() { return UserDisplaySlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_dechat_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/dechat/user.model */ "./src/app/models/dechat/user.model.ts");



var UserDisplaySlotComponent = /** @class */ (function () {
    // TODO picture
    function UserDisplaySlotComponent() {
    }
    UserDisplaySlotComponent.prototype.ngOnInit = function (user) {
        if (user === void 0) { user = this.user; }
        this.userName = user.nickname;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_dechat_user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserDisplaySlotComponent.prototype, "user", void 0);
    UserDisplaySlotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-display-slot',
            template: __webpack_require__(/*! ./user-display-slot.component.html */ "./src/app/utilComponents/user-display-slot/user-display-slot.component.html"),
            styles: [__webpack_require__(/*! ./user-display-slot.component.css */ "./src/app/utilComponents/user-display-slot/user-display-slot.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserDisplaySlotComponent);
    return UserDisplaySlotComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Universidad\ASW\dechat_en1a\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map