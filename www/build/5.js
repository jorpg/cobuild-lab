webpackJsonp([5],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by hsuanlee on 2017/4/4.
 */



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__home__["a" /* HomePage */]),
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.toUser = {
            toUserId: '210000198410281948',
            toUserName: 'Hancock'
        };
    }
    HomePage.prototype.tread = function () {
        this.navCtrl.push('TreadPage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/4geeks/workspace/cobuild-lab/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-header>\n  <ion-toolbar>\n    <ion-title style="background-color: #fff;">\n      <img class="img-iso" src="./assets/img/iso.png" alt="">\n        TREAD\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="royal" (click)="tread()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n    <!-- <ion-title>\n          <ion-select [(ngModel)]="gaming">\n            <ion-option value="nes">NES</ion-option>\n            <ion-option value="n64">Nintendo64</ion-option>\n            <ion-option value="ps">PlayStation</ion-option>\n            <ion-option value="genesis">Sega Genesis</ion-option>\n            <ion-option value="saturn">Sega Saturn</ion-option>\n            <ion-option value="snes">SNES</ion-option>\n          </ion-select>\n    </ion-title> -->\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item navPush="Chat"\n                [navParams]="toUser">\n        <ion-avatar item-left>\n          <img src="./assets/to-user.png">\n        </ion-avatar>\n        <h2>Hancock</h2>\n        <p>If at first you don’t succeed, call it version 1.0</p>\n      </ion-item>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="./assets/user.png">\n        </ion-avatar>\n        <h2>Venkman</h2>\n        <p>Back off man, I\'m a scientist.</p>\n      </ion-item>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n     <ion-item>\n       <ion-avatar item-start>\n         <img src="./assets/to-user.png">\n       </ion-avatar>\n       <h2>Egon</h2>\n       <p>We\'re gonna go full stream.</p>\n     </ion-item>\n     <ion-item-options>\n       <button ion-button color="light" icon-start>\n         <ion-icon name="ios-more"></ion-icon>\n         More\n       </button>\n       <button ion-button color="primary" icon-start>\n         <ion-icon name="text"></ion-icon>\n         Text\n       </button>\n       <button ion-button color="secondary" icon-start>\n         <ion-icon name="call"></ion-icon>\n         Call\n       </button>\n     </ion-item-options>\n   </ion-item-sliding>\n\n   <ion-item-sliding>\n     <ion-item>\n       <ion-avatar item-start>\n         <img src="./assets/user.png">\n       </ion-avatar>\n       <h2>Egon</h2>\n       <p>We\'re gonna go full stream.</p>\n     </ion-item>\n     <ion-item-options>\n       <button ion-button color="light" icon-start>\n         <ion-icon name="ios-more"></ion-icon>\n         More\n       </button>\n       <button ion-button color="primary" icon-start>\n         <ion-icon name="text"></ion-icon>\n         Text\n       </button>\n       <button ion-button color="secondary" icon-start>\n         <ion-icon name="call"></ion-icon>\n         Call\n       </button>\n     </ion-item-options>\n   </ion-item-sliding>\n\n\n    <ion-item-sliding>\n      <ion-item navPush="Chat"\n                [navParams]="toUser">\n        <ion-avatar item-left>\n          <img src="./assets/to-user.png">\n        </ion-avatar>\n        <h2>Hancock</h2>\n        <p>If at first you don’t succeed, call it version 1.0</p>\n      </ion-item>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="./assets/user.png">\n        </ion-avatar>\n        <h2>Venkman</h2>\n        <p>Back off man, I\'m a scientist.</p>\n      </ion-item>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n     <ion-item>\n       <ion-avatar item-start>\n         <img src="./assets/to-user.png">\n       </ion-avatar>\n       <h2>Egon</h2>\n       <p>We\'re gonna go full stream.</p>\n     </ion-item>\n     <ion-item-options>\n       <button ion-button color="light" icon-start>\n         <ion-icon name="ios-more"></ion-icon>\n         More\n       </button>\n       <button ion-button color="primary" icon-start>\n         <ion-icon name="text"></ion-icon>\n         Text\n       </button>\n       <button ion-button color="secondary" icon-start>\n         <ion-icon name="call"></ion-icon>\n         Call\n       </button>\n     </ion-item-options>\n   </ion-item-sliding>\n\n   <ion-item-sliding>\n     <ion-item>\n       <ion-avatar item-start>\n         <img src="./assets/user.png">\n       </ion-avatar>\n       <h2>Egon</h2>\n       <p>We\'re gonna go full stream.</p>\n     </ion-item>\n     <ion-item-options>\n       <button ion-button color="light" icon-start>\n         <ion-icon name="ios-more"></ion-icon>\n         More\n       </button>\n       <button ion-button color="primary" icon-start>\n         <ion-icon name="text"></ion-icon>\n         Text\n       </button>\n       <button ion-button color="secondary" icon-start>\n         <ion-icon name="call"></ion-icon>\n         Call\n       </button>\n     </ion-item-options>\n   </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/4geeks/workspace/cobuild-lab/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=5.js.map