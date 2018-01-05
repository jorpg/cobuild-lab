webpackJsonp([2],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreadPageModule", function() { return TreadPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tread__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hsuanlee on 2017/4/4.
 */



var TreadPageModule = (function () {
    function TreadPageModule() {
    }
    return TreadPageModule;
}());
TreadPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tread__["a" /* TreadPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tread__["a" /* TreadPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__tread__["a" /* TreadPage */]
        ]
    })
], TreadPageModule);

//# sourceMappingURL=tread.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreadPage = (function () {
    function TreadPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return TreadPage;
}());
TreadPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tread',template:/*ion-inline-start:"/Users/4geeks/workspace/cobuild-lab/src/pages/tread/tread.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      New Tread\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list inset>\n\n  <ion-item>\n    <ion-label>Title</ion-label>\n    <ion-input type="text"></ion-input>\n  </ion-item>\n\n  <ion-list>\n  <ion-item>\n    <ion-label>Members</ion-label>\n    <ion-select [(ngModel)]="toppings" multiple="true" cancelText="Cancel" okText="Add">\n      <ion-option value="bacon" selected="true">Juan</ion-option>\n      <ion-option value="olives">Jorge</ion-option>\n      <ion-option value="xcheese" selected="true">Patricia</ion-option>\n      <ion-option value="peppers">Anastasia</ion-option>\n      <ion-option value="mushrooms">Eli</ion-option>\n      <ion-option value="onions">Richard</ion-option>\n      <ion-option value="pepperoni">Carlos</ion-option>\n      <ion-option value="pineapple">Agustin</ion-option>\n      <ion-option value="sausage">Bob</ion-option>\n      <ion-option value="Spinach">Veronica</ion-option>\n    </ion-select>\n  </ion-item>\n</ion-list>\n\n</ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>Create Tread</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/4geeks/workspace/cobuild-lab/src/pages/tread/tread.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], TreadPage);

//# sourceMappingURL=tread.js.map

/***/ })

});
//# sourceMappingURL=2.js.map