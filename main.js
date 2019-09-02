(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/encounter/encounter.module": [
		"./src/app/modules/encounter/encounter.module.ts",
		"modules-encounter-encounter-module~modules-login-login-module",
		"modules-encounter-encounter-module"
	],
	"./modules/login/login.module": [
		"./src/app/modules/login/login.module.ts",
		"modules-encounter-encounter-module~modules-login-login-module",
		"modules-login-login-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/login/login.module */ "./src/app/modules/login/login.module.ts");
/* harmony import */ var _modules_encounter_encounter_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/encounter/encounter.module */ "./src/app/modules/encounter/encounter.module.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [{
        path: '',
        loadChildren: "./modules/login/login.module#LoginModule"
    }, {
        path: 'main',
        loadChildren: "./modules/encounter/encounter.module#EncounterModule",
        resolve: {
            AuthResolver: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthResolver"]
        }
    }];
// Configs 
function getAuthServiceConfigs() {
    var config = new angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthServiceConfig"]([
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["FacebookLoginProvider"]("2267612076802291")
        },
        {
            id: angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["GoogleLoginProvider"]("1037376100592-9mfcdsrdtu5eve8alnr6di9admq0savu.apps.googleusercontent.com")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["SocialLoginModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _modules_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                _modules_encounter_encounter_module__WEBPACK_IMPORTED_MODULE_7__["EncounterModule"],
            ],
            providers: [
                {
                    provide: angular_6_social_login__WEBPACK_IMPORTED_MODULE_4__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs,
                },
                _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["Auth"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthResolver"],
                {
                    provide: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/build-encounter/build-encounter.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/build-encounter/build-encounter.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"left-panel\">\r\n  <!-- Set grid width / height form-->\r\n  <div class=\"build-encounter__grid-size-form panel\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"grid-size\">Size: </label>\r\n        <input type=\"number\" min=\"5\" max=\"50\" name=\"grid-width\" [(ngModel)]=\"gridWidth.number\" />\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <br />\r\n\r\n  <grid-element-list\r\n    class=\"panel\"\r\n    [elements]=\"characters\"\r\n    [hoveredElementIndex]=\"hoveredCharacterIndex\"\r\n    (elementDeleted)=\"deleteCharacter($event)\"\r\n  >\r\n  </grid-element-list>\r\n\r\n  <br />\r\n\r\n  <div class=\"panel\">\r\n    <div class=\"package_form\">\r\n      <label>\r\n        <span>Package</span>\r\n\r\n        <select id=\"selectPackage\" (change)=\"getCharacters($event.target.value)\">\r\n          <option *ngFor=\"let package of packages\" [value]=\"package.id\">{{ package.name }}</option>\r\n        </select>\r\n      </label>\r\n      <label\r\n        ><span>Character</span>\r\n\r\n        <select\r\n          id=\"selectCharacter\"\r\n          [(ngModel)]=\"selectedCharacter\"\r\n          (change)=\"changeSelectedCharacterTemplate($event.target.value)\"\r\n        >\r\n          <option *ngFor=\"let character of templateCharacters\" [value]=\"character.id\">{{ character.name }}</option>\r\n        </select>\r\n      </label>\r\n      <br />\r\n      <button type=\"button\" (click)=\"addAllFromCurrentPackage()\">Add all from package</button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- New Character Form-->\r\n  <div class=\"build-encounter__new-character-form panel\">\r\n    <form #newCharacterForm=\"ngForm\" (ngSubmit)=\"createNewCharacter()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name: </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" required [(ngModel)]=\"newCharacterModel.name\" />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"color\">Color: </label>\r\n        <input\r\n          type=\"color\"\r\n          class=\"form-control\"\r\n          id=\"color\"\r\n          name=\"color\"\r\n          required\r\n          [(ngModel)]=\"newCharacterModel.color\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"init-mod\">Initiative MOD: </label>\r\n        <input\r\n          type=\"number\"\r\n          min=\"-10\"\r\n          max=\"10\"\r\n          class=\"form-control\"\r\n          id=\"init-mod\"\r\n          required\r\n          name=\"init-mod\"\r\n          [(ngModel)]=\"newCharacterModel.initiativeModifier\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"armor-class\">Armor Class: </label>\r\n        <input\r\n          type=\"number\"\r\n          min=\"0\"\r\n          max=\"20\"\r\n          class=\"form-control\"\r\n          id=\"armor-class\"\r\n          required\r\n          name=\"armor-class\"\r\n          [(ngModel)]=\"newCharacterModel.armorClass\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"hit-points\">Hit Points: </label>\r\n        <input\r\n          type=\"number\"\r\n          min=\"0\"\r\n          max=\"1000\"\r\n          class=\"form-control\"\r\n          id=\"hit-points\"\r\n          required\r\n          name=\"hit-points\"\r\n          [(ngModel)]=\"newCharacterModel.hitPoints\"\r\n        />\r\n      </div>\r\n      <fieldset>\r\n        <legend>Size</legend>\r\n        <label for=\"width\">Width</label>\r\n        <input\r\n          id=\"width\"\r\n          name=\"width\"\r\n          type=\"number\"\r\n          min=\"1\"\r\n          max=\"50\"\r\n          required\r\n          [(ngModel)]=\"newCharacterModel.lowerRightCoordinates.x\"\r\n        />\r\n        <br />\r\n        <label for=\"height\">Height</label>\r\n        <input\r\n          id=\"height\"\r\n          name=\"height\"\r\n          type=\"number\"\r\n          min=\"1\"\r\n          max=\"50\"\r\n          required\r\n          [(ngModel)]=\"newCharacterModel.lowerRightCoordinates.y\"\r\n        />\r\n      </fieldset>\r\n      <div class=\"form-group\">\r\n        <label for=\"rotation\">Rotation: </label>\r\n        <input\r\n          type=\"number\"\r\n          min=\"0\"\r\n          max=\"360\"\r\n          step=\"90\"\r\n          id=\"rotation\"\r\n          name=\"rotation\"\r\n          [(ngModel)]=\"newCharacterModel.rotation\"\r\n        />\r\n      </div>\r\n      <button type=\"submit\" [disabled]=\"!newCharacterForm.form.valid\">Create Character</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"right-panel\">\r\n  <grid\r\n    [gridWidth]=\"gridWidth\"\r\n    [elements]=\"characters\"\r\n    (elementHoveredIn)=\"hoverOverCharacter($event)\"\r\n    (elementHoveredOut)=\"hoverOutOfCharacter($event)\"\r\n  >\r\n  </grid>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/build-encounter/build-encounter.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/build-encounter/build-encounter.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 78px;\n  text-align: center;\n  color: white; }\n\ninput {\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: rgba(0, 0, 0, 0);\n  color: white; }\n\ninput[type='number'] {\n  width: 40px;\n  text-align: right; }\n\ninput[type='color'] {\n  border: none; }\n\nbutton {\n  font-family: 'Marcellus SC', serif;\n  cursor: pointer;\n  background-color: #71b340;\n  color: white;\n  padding: 10px;\n  border: none; }\n\n.left-panel {\n  display: inline-block;\n  width: 30%; }\n\n.left-panel .panel {\n    width: 100%;\n    display: inline-block;\n    position: relative; }\n\n.left-panel .panel button {\n      margin-top: 10px;\n      z-index: 5; }\n\n.right-panel {\n  display: inline-block; }\n\n.panel {\n  color: white;\n  padding: 20px;\n  z-index: 15;\n  background-color: rgba(255, 255, 255, 0.4);\n  margin-top: 30px; }\n\n.panel input {\n    color: white;\n    border-color: white; }\n\n.panel .package_form label {\n    width: 100%;\n    display: inline-block; }\n\n.panel .package_form label span {\n      min-width: 150px;\n      display: inline-block; }\n\n.panel .package_form label select {\n      width: 60%; }\n\n.build-encounter__new-character-form {\n  position: relative;\n  padding-bottom: 50px; }\n\n.build-encounter__new-character-form input {\n    margin-left: 10px; }\n\n.build-encounter__new-character-form button {\n    position: absolute;\n    right: 10px;\n    bottom: 10px; }\n\n.build-encounter__grid-size-form {\n  position: relative;\n  margin-top: 150px; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/build-encounter/build-encounter.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/build-encounter/build-encounter.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: BuildEncounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildEncounterComponent", function() { return BuildEncounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared-components */ "./src/app/shared-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuildEncounterComponent = /** @class */ (function () {
    function BuildEncounterComponent(characterService, packageService) {
        this.characterService = characterService;
        this.packageService = packageService;
        this.gridWidth = { number: 20 };
        this.characters = [];
        this.hoveredCharacterIndex = { number: -1 };
        this.newCharacterModel = new _shared_components__WEBPACK_IMPORTED_MODULE_1__["GridCharacter"]('0', 'New Character', 0, 0, 0, false, { x: 0, y: 0 }, { x: 1, y: 1 }, 0);
    }
    BuildEncounterComponent.prototype.ngOnInit = function () {
        this.getPackages();
    };
    BuildEncounterComponent.prototype.getPackages = function () {
        var _this = this;
        this.packageService.get().subscribe(function (result) {
            _this.packages = result['data'];
        });
    };
    BuildEncounterComponent.prototype.getCharacters = function (packageId) {
        var _this = this;
        this.characterService.getByPackageId(packageId).subscribe(function (result) {
            _this.templateCharacters = result['data'];
        });
    };
    BuildEncounterComponent.prototype.changeSelectedCharacterTemplate = function (characterId) {
        var char = this.templateCharacters.find(function (ch) { return ch.id === characterId; });
        this.newCharacterModel.initiativeModifier = char.initiativeModifier;
        this.newCharacterModel.name = char.name;
        this.newCharacterModel.armorClass = char.armorClass;
        this.newCharacterModel.hitPoints = char.hitPoints;
    };
    BuildEncounterComponent.prototype.addAllFromCurrentPackage = function () {
        for (var _i = 0, _a = this.templateCharacters; _i < _a.length; _i++) {
            var char = _a[_i];
            this.addCustomCharacter(char);
        }
    };
    BuildEncounterComponent.prototype.addCustomCharacter = function (character) {
        var gridCharacter = new _shared_components__WEBPACK_IMPORTED_MODULE_1__["GridCharacter"]('0', character.name, character.initiativeModifier, character.armorClass, character.hitPoints, false, { x: 0, y: 0 }, { x: 1, y: 1 }, 0);
        this.characters.push(gridCharacter);
    };
    BuildEncounterComponent.prototype.addCharacter = function () {
        var gridCharacter = new _shared_components__WEBPACK_IMPORTED_MODULE_1__["GridCharacter"]('0', this.selectedCharacter.name, this.selectedCharacter.initiativeModifier, this.selectedCharacter.armorClass, 0, false, { x: 0, y: 0 }, { x: 1, y: 1 }, 0);
        this.characters.push(gridCharacter);
    };
    BuildEncounterComponent.prototype.createNewCharacter = function () {
        this.newCharacterModel.currentHitPoints = this.newCharacterModel.hitPoints;
        this.characters.push(JSON.parse(JSON.stringify(this.newCharacterModel)));
        //this.characters.push(this.newCharacterModel);??
        console.log(this.characters);
    };
    BuildEncounterComponent.prototype.deleteCharacter = function (character) {
        var index = this.characters.indexOf(character);
        this.characters.splice(index, 1);
    };
    BuildEncounterComponent.prototype.hoverOverCharacter = function (i) {
        this.hoveredCharacterIndex.number = i;
    };
    BuildEncounterComponent.prototype.hoverOutOfCharacter = function (i) {
        this.hoveredCharacterIndex.number = -1;
    };
    BuildEncounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-build-encounter',
            template: __webpack_require__(/*! ./build-encounter.component.html */ "./src/app/modules/encounter/components/build-encounter/build-encounter.component.html"),
            styles: [__webpack_require__(/*! ./build-encounter.component.scss */ "./src/app/modules/encounter/components/build-encounter/build-encounter.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_components__WEBPACK_IMPORTED_MODULE_1__["CharacterService"], _shared_components__WEBPACK_IMPORTED_MODULE_1__["PackageService"]])
    ], BuildEncounterComponent);
    return BuildEncounterComponent;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/characters/character-details/character-details.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/characters/character-details/character-details.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"character_details__wrapper\">\r\n  <div>\r\n    <div>\r\n      <label for=\"inputName\">\r\n        <span>Name</span>\r\n        <input id=\"inputName\" type=\"text\" [(ngModel)]=\"selectedCharacter.name\" />\r\n      </label>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"inputPreview\"\r\n      ><span>Preview </span>\r\n        <input id=\"inputPreview\" type=\"text\" [(ngModel)]=\"selectedCharacter.preview\" />\r\n      </label>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"inputThumbnail\">\r\n        <span>Thumbnail</span>\r\n        <input id=\"inputThumbnail\" type=\"text\" [(ngModel)]=\"selectedCharacter.thumbnail\" />\r\n      </label>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"inputArmorClass\"\r\n        ><span>ArmorClass</span>\r\n        <input id=\"inputArmorClass\" type=\"number\" [(ngModel)]=\"selectedCharacter.armorClass\" />\r\n      </label>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"inputInitiativeModifier\"\r\n        ><span>Init MOD </span>\r\n        <input id=\"inputInitiativeModifier\" type=\"number\" [(ngModel)]=\"selectedCharacter.initiativeModifier\" />\r\n      </label>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"inputHitPoints\"\r\n        ><span>Hit Points </span>\r\n        <input id=\"inputHitPoints\" type=\"number\" [(ngModel)]=\"selectedCharacter.hitPoints\" />\r\n      </label>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"inputIsPlayerCharacter\">\r\n        <input\r\n          id=\"inputIsPlayerCharacter\"\r\n          type=\"checkbox\"\r\n          [(ngModel)]=\"selectedCharacter.isPlayerCharacter\"\r\n          [(checked)]=\"selectedCharacter.isPlayerCharacter\"\r\n        /><span>IsPlayerCharacter</span>\r\n      </label>\r\n    </div>\r\n\r\n    <div>\r\n      <label\r\n        ><span>Package</span>\r\n\r\n        <select id=\"selectPackage\" [(ngModel)]=\"selectedCharacter.packageId\">\r\n          <option *ngFor=\"let package of packages\" [value]=\"package.id\">{{ package.name }}</option>\r\n        </select>\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"button_wrapper\">\r\n    <button type=\"button\" *ngIf=\"selectedCharacter.id\" (click)=\"delete()\">Delete</button>\r\n    <button type=\"submit\" *ngIf=\"selectedCharacter.id\" (click)=\"update()\">Update</button>\r\n    <button type=\"submit\" *ngIf=\"!selectedCharacter.id\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/characters/character-details/character-details.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/characters/character-details/character-details.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 78px;\n  text-align: center;\n  color: white; }\n\ninput {\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: rgba(0, 0, 0, 0);\n  color: white; }\n\ninput[type='number'] {\n  width: 40px;\n  text-align: right; }\n\ninput[type='color'] {\n  border: none; }\n\nbutton {\n  font-family: 'Marcellus SC', serif;\n  cursor: pointer;\n  background-color: #71b340;\n  color: white;\n  padding: 10px;\n  border: none; }\n\n.character_details__wrapper {\n  position: relative;\n  color: white; }\n\n.character_details__wrapper label {\n    margin-top: 10px;\n    margin-left: 10px;\n    display: inline-block;\n    width: 100%; }\n\n.character_details__wrapper label span {\n      min-width: 100px;\n      display: inline-block; }\n\n.character_details__wrapper label input {\n      border: 1px solid white;\n      width: 60%;\n      padding: 5px;\n      text-align: left; }\n\n.character_details__wrapper label input[type='checkbox'] {\n      width: 100px; }\n\n.character_details__wrapper .button_wrapper {\n    padding-left: 10px;\n    padding-top: 25px; }\n\n.character_details__wrapper .button_wrapper button {\n      margin: 5px; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/characters/character-details/character-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/characters/character-details/character-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CharacterDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterDetailsComponent", function() { return CharacterDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared-components */ "./src/app/shared-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterDetailsComponent = /** @class */ (function () {
    function CharacterDetailsComponent(characterService, packageService) {
        this.characterService = characterService;
        this.packageService = packageService;
        this.detailsClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CharacterDetailsComponent.prototype.ngOnInit = function () {
        this.getPackages();
    };
    CharacterDetailsComponent.prototype.getPackages = function () {
        var _this = this;
        this.packageService.get().subscribe(function (result) {
            _this.packages = result["data"];
        });
    };
    CharacterDetailsComponent.prototype.save = function () {
        var _this = this;
        this.characterService
            .add(this.selectedCharacter)
            .subscribe(function (data) { _this.close(); }, function (err) { });
    };
    ;
    CharacterDetailsComponent.prototype.update = function () {
        var _this = this;
        this.characterService
            .update(this.selectedCharacter)
            .subscribe(function (data) { _this.close(); }, function (err) { });
    };
    ;
    CharacterDetailsComponent.prototype.delete = function () {
        var _this = this;
        this.characterService
            .delete(this.selectedCharacter.id)
            .subscribe(function (data) { _this.close(); }, function (err) { });
    };
    ;
    CharacterDetailsComponent.prototype.close = function () {
        this.detailsClose.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_components__WEBPACK_IMPORTED_MODULE_1__["Character"])
    ], CharacterDetailsComponent.prototype, "selectedCharacter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CharacterDetailsComponent.prototype, "detailsClose", void 0);
    CharacterDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-details',
            template: __webpack_require__(/*! ./character-details.component.html */ "./src/app/modules/encounter/components/characters/character-details/character-details.component.html"),
            styles: [__webpack_require__(/*! ./character-details.component.scss */ "./src/app/modules/encounter/components/characters/character-details/character-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_components__WEBPACK_IMPORTED_MODULE_1__["CharacterService"],
            _shared_components__WEBPACK_IMPORTED_MODULE_1__["PackageService"]])
    ], CharacterDetailsComponent);
    return CharacterDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/characters/characters.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/encounter/components/characters/characters.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Characters</h1>\r\n<div class=\"build-encounter__grid-size-form panel\">\r\n  <button type=\"button\" (click)=\"create()\">\r\n    New\r\n  </button>\r\n\r\n  <div *ngIf=\"characters\">\r\n    <table class=\"manage_characters__list-table\">\r\n      <tbody>\r\n        <tr>\r\n          <th style=\"width: 30px; font-weight: bold;\">#</th>\r\n          <th>Name</th>\r\n          <th>Thumbnail</th>\r\n        </tr>\r\n        <tr *ngFor=\"let item of characters; let i = index\" (click)=\"rowSelected(item)\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ item.name }}</td>\r\n          <td>\r\n            <img style=\"max-height:25px;max-width:25px;\" src={{item.thumbnail}} />\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isItemSelected\" class=\"manage_characters__package_form\">\r\n  <app-character-details [selectedCharacter]=\"selectedCharacter\" (detailsClose)=\"handleDetailsClosed()\">\r\n  </app-character-details>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/characters/characters.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/encounter/components/characters/characters.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 78px;\n  text-align: center;\n  color: white; }\n\ninput {\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: rgba(0, 0, 0, 0);\n  color: white; }\n\ninput[type='number'] {\n  width: 40px;\n  text-align: right; }\n\ninput[type='color'] {\n  border: none; }\n\nbutton {\n  font-family: 'Marcellus SC', serif;\n  cursor: pointer;\n  background-color: #71b340;\n  color: white;\n  padding: 10px;\n  border: none; }\n\n.panel {\n  color: white;\n  padding: 20px;\n  width: 30%;\n  z-index: 15;\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.4);\n  margin-top: 30px; }\n\n.panel input {\n    color: white;\n    border-color: white; }\n\n.build-encounter__new-character-form {\n  position: relative;\n  padding-bottom: 50px; }\n\n.build-encounter__new-character-form input {\n    margin-left: 10px; }\n\n.build-encounter__new-character-form button {\n    position: absolute;\n    right: 10px;\n    bottom: 10px; }\n\n.build-encounter__grid-size-form {\n  position: relative;\n  margin-top: 150px; }\n\n.build-encounter__grid-size-form button {\n    margin-bottom: 10px; }\n\n.manage_characters__list-table {\n  border-collapse: collapse;\n  min-width: 200px; }\n\n.manage_characters__list-table tbody tr td,\n  .manage_characters__list-table tbody tr th {\n    border: 1px solid white; }\n\n.manage_characters__list-table tbody tr th {\n    background-color: gray; }\n\n.manage_characters__list-table tbody tr:hover {\n    background-color: #71b340;\n    cursor: pointer; }\n\n.manage_characters__package_form {\n  position: relative;\n  margin-top: 50px;\n  background-color: rgba(255, 255, 255, 0.4);\n  width: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: top; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/characters/characters.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/encounter/components/characters/characters.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CharactersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersComponent", function() { return CharactersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared-components */ "./src/app/shared-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(characterService) {
        this.characterService = characterService;
    }
    CharactersComponent.prototype.ngOnInit = function () {
        this.getCharacters();
    };
    CharactersComponent.prototype.getCharacters = function () {
        var _this = this;
        this.characterService.get().subscribe(function (result) {
            _this.characters = result["data"];
        });
    };
    Object.defineProperty(CharactersComponent.prototype, "isItemSelected", {
        get: function () {
            return this.selectedCharacter != null;
        },
        enumerable: true,
        configurable: true
    });
    CharactersComponent.prototype.rowSelected = function (item) {
        this.selectedCharacter = item;
    };
    CharactersComponent.prototype.create = function () {
        this.selectedCharacter = new _shared_components__WEBPACK_IMPORTED_MODULE_1__["Character"]();
    };
    CharactersComponent.prototype.handleDetailsClosed = function () {
        this.selectedCharacter = null;
        this.getCharacters();
    };
    CharactersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-characters',
            template: __webpack_require__(/*! ./characters.component.html */ "./src/app/modules/encounter/components/characters/characters.component.html"),
            styles: [__webpack_require__(/*! ./characters.component.scss */ "./src/app/modules/encounter/components/characters/characters.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_components__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]])
    ], CharactersComponent);
    return CharactersComponent;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"miniatures__package-wrapper\">\r\n  <div class=\"miniatures__package\" *ngFor='let package of miniaturesPackages' (click)=\"onPackageClick(package)\">\r\n    <div class=\"miniatures__package-details\">\r\n      <span class=\"miniatures__package-title\">{{package.name}}</span>\r\n      <span  class=\"miniatures__package-quantity\">Quantity: {{package.numberOfItems}}</span>\r\n    </div>\r\n    <img class=\"miniatures__package-thumbnail\" [src]=\"package.thumbnail\" />\r\n    <div class=\"shadow\"></div>\r\n  </div>\r\n\r\n  <app-modal>\r\n    <div class=\"miniatures-modal__side-menu\">\r\n      <div class=\"miniatures-modal__side-element\" *ngFor=\"let model of selectedPackage.models\" (click)=\"onMiniatureClick(model)\"> \r\n        <span class=\"title\">{{model.name}} </span>\r\n        <img [src]=\"model.thumbnail\"/>\r\n      </div>\r\n    </div>\r\n    <div class=\"miniatures-modal__central-element\">\r\n        <span class=\"title\">{{selectedMiniature.name}} </span>\r\n        <img [src]=\"selectedMiniature.mainImage\"/>\r\n        <div class=\"desc\">{{selectedMiniature.desc}} </div>\r\n    </div>\r\n  </app-modal>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-family: 'Marcellus SC', serif; }\n\n.button-brown {\n  background: linear-gradient(to bottom, #181912 0%, #181912 100%);\n  padding: 10px;\n  color: #CBA676;\n  border: 2px solid;\n  -o-border-image: linear-gradient(to bottom, #71B340 0%, #598B2C 100%);\n     border-image: linear-gradient(to bottom, #71B340 0%, #598B2C 100%);\n  border-image-slice: 1;\n  box-shadow: inset 0 0 10px black;\n  transition: box-shadow 0.3s;\n  transition: color 0.3s; }\n\n.button-brown:hover {\n    background-color: #633c30;\n    text-decoration: underline;\n    box-shadow: 0 0 10px white;\n    -o-border-image: linear-gradient(to bottom, white 0%, white 100%);\n       border-image: linear-gradient(to bottom, white 0%, white 100%);\n    border-image-slice: 1;\n    color: white;\n    cursor: pointer; }\n\n.miniatures__package-wrapper {\n  width: 80%;\n  margin: auto;\n  margin-top: 120px; }\n\n.miniatures__package-wrapper .miniatures__package {\n    width: 250px;\n    height: 250px;\n    background-color: black;\n    border: 2px solid #fccf18;\n    border-radius: 10px;\n    position: relative;\n    display: inline-block;\n    margin: 5px;\n    overflow: hidden;\n    transition: all .3s; }\n\n.miniatures__package-wrapper .miniatures__package:hover {\n      cursor: pointer;\n      background-color: #11270B; }\n\n.miniatures__package-wrapper .miniatures__package:hover .miniatures__package-thumbnail {\n        -webkit-transform: scale(1.1, 1.1);\n                transform: scale(1.1, 1.1); }\n\n.miniatures__package-wrapper .miniatures__package .shadow {\n      position: absolute;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      box-shadow: inset 0 0 15px #fccf18;\n      border-radius: 10px;\n      z-index: 5; }\n\n.miniatures__package-wrapper .miniatures__package .miniatures__package-thumbnail {\n      max-width: 100%;\n      max-height: 100%;\n      position: absolute;\n      top: 0;\n      z-index: 1;\n      margin: auto;\n      display: block;\n      transition: all .3s;\n      border-radius: 10px;\n      overflow: hidden; }\n\n.miniatures__package-wrapper .miniatures__package .miniatures__package-details {\n      position: absolute;\n      bottom: 10px;\n      left: 14px;\n      width: 200px;\n      margin: auto;\n      background-color: #f4e7d0;\n      height: 45px;\n      padding: 10px;\n      z-index: 5;\n      box-shadow: 0 0 10px #AAA; }\n\n.miniatures__package-wrapper .miniatures__package .miniatures__package-details .miniatures__package-title {\n        display: block;\n        font-weight: bold;\n        width: 100%;\n        text-align: center; }\n\n.miniatures__package-wrapper .miniatures__package .miniatures__package-details .miniatures__package-quantity {\n        display: block;\n        position: absolute;\n        right: 25px;\n        font-size: .7em; }\n\n.miniatures__package-wrapper .miniatures__modal-side {\n    width: 30%;\n    overflow: auto;\n    height: 600px;\n    display: inline-block; }\n\n.miniatures__package-wrapper .miniatures__modal-side .miniatures__modal-side-elements {\n      border: 1px solid black; }\n\n.miniatures__package-wrapper .miniatures__modal-side .miniatures__modal-side-elements:hover {\n        cursor: pointer; }\n\n.miniatures__package-wrapper .miniatures__modal-side .miniatures__modal-side-elements:hover img {\n          -webkit-transform: scale(1.1, 1.1);\n                  transform: scale(1.1, 1.1); }\n\n.miniatures__package-wrapper .miniatures__modal-side .miniatures__modal-side-elements p {\n        width: 100%;\n        text-align: center; }\n\n.miniatures__package-wrapper .miniatures__modal-side .miniatures__modal-side-elements img {\n        max-width: 100%;\n        max-height: 100px;\n        margin: auto;\n        display: inherit;\n        transition: all .3s;\n        margin: 30px auto; }\n\n.miniatures__package-wrapper .miniatures__modal-close-button {\n    right: 20px;\n    bottom: 30px;\n    position: absolute; }\n\n.miniatures__package-wrapper .miniatures__main_image {\n    display: inline-block;\n    position: absolute;\n    margin: 50px;\n    width: 50%; }\n\n.miniatures__package-wrapper .miniatures__main_image img {\n      max-width: 80%;\n      margin-left: 10%;\n      max-height: 700px; }\n\n.miniatures__package-wrapper .miniatures__main_desc {\n    position: absolute;\n    right: 0;\n    top: 20px;\n    width: 40%;\n    -webkit-text-stroke-width: 1px;\n    -webkit-text-stroke-color: black;\n    color: white;\n    font-weight: bold; }\n\n.miniatures-modal__side-menu {\n  width: 200px;\n  height: 100px;\n  border-right: 2px solid #598B2C;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  cursor: pointer;\n  height: 100%;\n  overflow: auto; }\n\n.miniatures-modal__side-menu .miniatures-modal__side-element {\n    width: 100%;\n    position: relative;\n    display: inline-block;\n    height: 150px;\n    border-bottom: 1px solid #598B2C;\n    overflow: hidden; }\n\n.miniatures-modal__side-menu .miniatures-modal__side-element:hover img {\n      -webkit-transform: scale(1.1, 1.1);\n              transform: scale(1.1, 1.1); }\n\n.miniatures-modal__side-menu .miniatures-modal__side-element .title {\n      position: absolute;\n      color: #f4e7d0;\n      top: 10px;\n      left: 25px; }\n\n.miniatures-modal__side-menu .miniatures-modal__side-element img {\n      transition: all ease-in-out 0.3s; }\n\n.miniatures-modal__central-element {\n  width: calc(100% - 200px);\n  height: 100%;\n  margin-left: 202px;\n  position: absolute;\n  left: 0px;\n  background-image: url('full-bloom.png'); }\n\n.miniatures-modal__central-element img {\n    max-width: 80%;\n    height: 100%;\n    margin: auto;\n    display: inherit;\n    border-left: 2px solid #598B2C;\n    border-right: 2px solid #598B2C; }\n\n.miniatures-modal__central-element .title {\n    color: #f4e7d0;\n    position: absolute;\n    font-size: 50px;\n    width: 100%;\n    text-align: center;\n    top: 50px; }\n\n.miniatures-modal__central-element .desc {\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0px;\n    width: 100%;\n    margin-left: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    color: white;\n    padding: 20px; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ManageMiniaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageMiniaturesComponent", function() { return ManageMiniaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared-components/modal/modal.component */ "./src/app/shared-components/modal/modal.component.ts");
/* harmony import */ var _services_mock_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/mock-data */ "./src/app/services/mock-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageMiniaturesComponent = /** @class */ (function () {
    function ManageMiniaturesComponent() {
        this.miniaturesPackages = _services_mock_data__WEBPACK_IMPORTED_MODULE_2__["miniaturesPackages"];
    }
    ManageMiniaturesComponent.prototype.ngOnInit = function () {
        this.selectedPackage = this.miniaturesPackages[0];
    };
    ManageMiniaturesComponent.prototype.onPackageClick = function (pack) {
        this.selectedPackage = pack;
        this.selectedMiniature = pack.models[0];
        this.modal.openModal();
    };
    ManageMiniaturesComponent.prototype.onMiniatureClick = function (miniature) {
        this.selectedMiniature = miniature;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"]),
        __metadata("design:type", _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"])
    ], ManageMiniaturesComponent.prototype, "modal", void 0);
    ManageMiniaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-miniatures',
            template: __webpack_require__(/*! ./manage-miniatures.component.html */ "./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.html"),
            styles: [__webpack_require__(/*! ./manage-miniatures.component.scss */ "./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageMiniaturesComponent);
    return ManageMiniaturesComponent;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/package/package-details/package-details.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/package/package-details/package-details.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"package_details__wrapper\">\r\n  <div>\r\n    <div>\r\n      <label for=\"inputName\"\r\n        ><span>Name</span>\r\n        <input id=\"inputName\" type=\"text\" [(ngModel)]=\"selectedPackage.name\" />\r\n      </label>\r\n    </div>\r\n\r\n    <div>\r\n      <label for=\"inputThumbnail\">\r\n        <span>Thumbnail</span>\r\n        <input id=\"inputThumbnail\" type=\"text\" [(ngModel)]=\"selectedPackage.thumbnail\" />\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"button_wrapper\">\r\n    <button type=\"button\" *ngIf=\"selectedPackage.id\" (click)=\"delete()\">Delete</button>\r\n    <button type=\"submit\" *ngIf=\"selectedPackage.id\" (click)=\"update()\">Update</button>\r\n    <button type=\"submit\" *ngIf=\"!selectedPackage.id\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/package/package-details/package-details.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/package/package-details/package-details.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 78px;\n  text-align: center;\n  color: white; }\n\ninput {\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: rgba(0, 0, 0, 0);\n  color: white; }\n\ninput[type='number'] {\n  width: 40px;\n  text-align: right; }\n\ninput[type='color'] {\n  border: none; }\n\nbutton {\n  font-family: 'Marcellus SC', serif;\n  cursor: pointer;\n  background-color: #71b340;\n  color: white;\n  padding: 10px;\n  border: none; }\n\n.package_details__wrapper {\n  position: relative;\n  color: white; }\n\n.package_details__wrapper label {\n    margin-top: 10px;\n    margin-left: 10px;\n    display: inline-block;\n    width: 100%; }\n\n.package_details__wrapper label span {\n      min-width: 100px;\n      display: inline-block; }\n\n.package_details__wrapper label input {\n      border: 1px solid white;\n      width: 60%;\n      padding: 5px; }\n\n.package_details__wrapper .button_wrapper {\n    padding-left: 10px;\n    padding-top: 25px; }\n\n.package_details__wrapper .button_wrapper button {\n      margin: 5px; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/package/package-details/package-details.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/package/package-details/package-details.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PackageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailsComponent", function() { return PackageDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../shared-components */ "./src/app/shared-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageDetailsComponent = /** @class */ (function () {
    function PackageDetailsComponent(packageService) {
        this.packageService = packageService;
        this.detailsClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PackageDetailsComponent.prototype.ngOnInit = function () {
    };
    PackageDetailsComponent.prototype.save = function () {
        var _this = this;
        this.packageService
            .add(this.selectedPackage)
            .subscribe(function (data) { _this.close(); }, function (err) { });
    };
    ;
    PackageDetailsComponent.prototype.update = function () {
        var _this = this;
        this.packageService
            .update(this.selectedPackage)
            .subscribe(function (data) { _this.close(); }, function (err) { });
    };
    ;
    PackageDetailsComponent.prototype.delete = function () {
        var _this = this;
        this.packageService
            .delete(this.selectedPackage.id)
            .subscribe(function (data) { _this.close(); }, function (err) { });
    };
    ;
    PackageDetailsComponent.prototype.close = function () {
        this.detailsClose.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_components__WEBPACK_IMPORTED_MODULE_1__["Package"])
    ], PackageDetailsComponent.prototype, "selectedPackage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PackageDetailsComponent.prototype, "detailsClose", void 0);
    PackageDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-package-details',
            template: __webpack_require__(/*! ./package-details.component.html */ "./src/app/modules/encounter/components/package/package-details/package-details.component.html"),
            styles: [__webpack_require__(/*! ./package-details.component.scss */ "./src/app/modules/encounter/components/package/package-details/package-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_components__WEBPACK_IMPORTED_MODULE_1__["PackageService"]])
    ], PackageDetailsComponent);
    return PackageDetailsComponent;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/package/package.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/encounter/components/package/package.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Packages</h1>\r\n\r\n<div class=\"build-encounter__grid-size-form panel\">\r\n  <button type=\"button\" (click)=\"create()\">\r\n    New\r\n  </button>\r\n\r\n  <div *ngIf=\"packages\">\r\n    <table class=\"manage_packages__list-table\">\r\n      <tbody>\r\n        <tr>\r\n          <th style=\"width: 30px; font-weight: bold;\">#</th>\r\n          <th>Name</th>\r\n          <th>Thumbnail</th>\r\n        </tr>\r\n        <tr *ngFor=\"let item of packages; let i = index\" (click)=\"rowSelected(item)\">\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ item.name }}</td>\r\n          <td>\r\n            <img style=\"max-height:25px;max-width:25px;\" src={{item.thumbnail}} />\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"isItemSelected\" class=\"manage_packages__package_form\">\r\n  <app-package-details [selectedPackage]=\"selectedPackage\" (detailsClose)=\"handleDetailsClosed()\">\r\n  </app-package-details>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/package/package.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/encounter/components/package/package.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 78px;\n  text-align: center;\n  color: white; }\n\ninput {\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: rgba(0, 0, 0, 0);\n  color: white; }\n\ninput[type='number'] {\n  width: 40px;\n  text-align: right; }\n\ninput[type='color'] {\n  border: none; }\n\nbutton {\n  font-family: 'Marcellus SC', serif;\n  cursor: pointer;\n  background-color: #71b340;\n  color: white;\n  padding: 10px;\n  border: none; }\n\n.panel {\n  color: white;\n  padding: 20px;\n  width: 30%;\n  z-index: 15;\n  display: inline-block;\n  background-color: rgba(255, 255, 255, 0.4);\n  margin-top: 30px; }\n\n.panel input {\n    color: white;\n    border-color: white; }\n\n.build-encounter__new-character-form {\n  position: relative;\n  padding-bottom: 50px; }\n\n.build-encounter__new-character-form input {\n    margin-left: 10px; }\n\n.build-encounter__new-character-form button {\n    position: absolute;\n    right: 10px;\n    bottom: 10px; }\n\n.build-encounter__grid-size-form {\n  position: relative;\n  margin-top: 50px; }\n\n.build-encounter__grid-size-form button {\n    margin-bottom: 10px; }\n\n.manage_packages__list-table {\n  border-collapse: collapse;\n  min-width: 200px; }\n\n.manage_packages__list-table tbody tr td,\n  .manage_packages__list-table tbody tr th {\n    border: 1px solid white; }\n\n.manage_packages__list-table tbody tr th {\n    background-color: gray; }\n\n.manage_packages__list-table tbody tr:hover {\n    background-color: #71b340;\n    cursor: pointer; }\n\n.manage_packages__package_form {\n  position: relative;\n  margin-top: 50px;\n  background-color: rgba(255, 255, 255, 0.4);\n  width: 50%;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: top; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/package/package.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/encounter/components/package/package.component.ts ***!
  \***************************************************************************/
/*! exports provided: PackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageComponent", function() { return PackageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared-components */ "./src/app/shared-components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageComponent = /** @class */ (function () {
    function PackageComponent(packageService) {
        this.packageService = packageService;
    }
    PackageComponent.prototype.ngOnInit = function () {
        this.getPackages();
    };
    PackageComponent.prototype.getPackages = function () {
        var _this = this;
        this.packageService.get().subscribe(function (result) {
            _this.packages = result["data"];
        });
    };
    Object.defineProperty(PackageComponent.prototype, "isItemSelected", {
        get: function () {
            return this.selectedPackage != null;
        },
        enumerable: true,
        configurable: true
    });
    PackageComponent.prototype.rowSelected = function (item) {
        this.selectedPackage = item;
    };
    PackageComponent.prototype.create = function () {
        this.selectedPackage = new _shared_components__WEBPACK_IMPORTED_MODULE_1__["Package"]();
    };
    PackageComponent.prototype.handleDetailsClosed = function () {
        this.selectedPackage = null;
        this.getPackages();
    };
    PackageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-package',
            template: __webpack_require__(/*! ./package.component.html */ "./src/app/modules/encounter/components/package/package.component.html"),
            styles: [__webpack_require__(/*! ./package.component.scss */ "./src/app/modules/encounter/components/package/package.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_components__WEBPACK_IMPORTED_MODULE_1__["PackageService"]])
    ], PackageComponent);
    return PackageComponent;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/room/room.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modules/encounter/components/room/room.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  room works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/room/room.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/encounter/components/room/room.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/encounter/components/room/room.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/encounter/components/room/room.component.ts ***!
  \*********************************************************************/
/*! exports provided: RoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomComponent", function() { return RoomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RoomComponent = /** @class */ (function () {
    function RoomComponent() {
    }
    RoomComponent.prototype.ngOnInit = function () {
    };
    RoomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-room',
            template: __webpack_require__(/*! ./room.component.html */ "./src/app/modules/encounter/components/room/room.component.html"),
            styles: [__webpack_require__(/*! ./room.component.scss */ "./src/app/modules/encounter/components/room/room.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoomComponent);
    return RoomComponent;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/shared-components/grid-element-list.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/shared-components/grid-element-list.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-element-list__wrapper\" #characterList>\r\n  <button (click)=\"rollInitiative()\">\r\n    <div class=\"icon-dices\"></div>\r\n  </button>\r\n  <ul>\r\n    <li\r\n      *ngFor=\"let element of elements; let i = index\"\r\n      class=\"character_list-element\"\r\n      [ngStyle]=\"{\r\n        'background-color': i === hoveredElementIndex.number ? 'black' : 'rgba(0,0,0,0)'\r\n      }\"\r\n    >\r\n      <div>\r\n        <span>{{ element.name }} </span>\r\n        <span>Init:  <input type=\"number\" min=\"0\" max=\"100\"   (change)=\"sort()\" [(ngModel)]=\"element.initiative\" /></span>\r\n        <span>HP: <input type=\"number\" min=\"0\" max=\"333\" [(ngModel)]=\"element.currentHitPoints\"/></span>\r\n        <button (click)=\"elementDeleted.emit(element)\">X</button>\r\n      </div>\r\n      <div class=\"extra-info\" *ngIf=\"i == hoveredElementIndex.number\">\r\n        <span>AC: {{ element.armorClass }} </span><span>Init MOD: {{ element.initiativeModifier }} </span>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/shared-components/grid-element-list.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/shared-components/grid-element-list.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-top: 78px;\n  text-align: center;\n  color: white; }\n\ninput {\n  border: none;\n  border-bottom: 1px solid gray;\n  background-color: rgba(0, 0, 0, 0);\n  color: white; }\n\ninput[type='number'] {\n  width: 40px;\n  text-align: right; }\n\ninput[type='color'] {\n  border: none; }\n\nbutton {\n  font-family: 'Marcellus SC', serif;\n  cursor: pointer;\n  background-color: #71b340;\n  color: white;\n  padding: 10px;\n  border: none; }\n\n.grid-element-list__wrapper {\n  position: relative; }\n\n.grid-element-list__wrapper button {\n    background-color: rgba(0, 0, 0, 0);\n    width: 50px;\n    height: 50px;\n    border: none;\n    padding: 10px; }\n\n.grid-element-list__wrapper button .icon-dices {\n      width: 100%;\n      height: 100%;\n      background-image: url('dices.png');\n      background-size: contain; }\n\n.grid-element-list__wrapper ul {\n    list-style-type: none;\n    padding-left: 0px; }\n\n.grid-element-list__wrapper ul div span {\n      margin-right: 20px; }\n\n.grid-element-list__wrapper ul .extra-info {\n      font-size: 11px; }\n\n.grid-element-list__wrapper .character_list-element {\n    width: 100%;\n    border-bottom: 1px solid black;\n    padding: 5px; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/shared-components/grid-element-list.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/shared-components/grid-element-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: GridElementList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridElementList", function() { return GridElementList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridElementList = /** @class */ (function () {
    function GridElementList() {
        this.hoveredElementIndex = { number: -1 };
        this.elementDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GridElementList.prototype.ngOnInit = function () { };
    GridElementList.prototype.rollInitiative = function () {
        for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            var d20 = Math.floor(Math.random() * 20) + 1;
            element.initiative = d20 + element.initiativeModifier;
        }
        this.sort();
    };
    GridElementList.prototype.sort = function () {
        this.elements.sort(function (a, b) { return (a.initiative < b.initiative ? 1 : -1); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GridElementList.prototype, "elements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridElementList.prototype, "hoveredElementIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GridElementList.prototype, "elementDeleted", void 0);
    GridElementList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid-element-list',
            template: __webpack_require__(/*! ./grid-element-list.component.html */ "./src/app/modules/encounter/components/shared-components/grid-element-list.component.html"),
            styles: [__webpack_require__(/*! ./grid-element-list.component.scss */ "./src/app/modules/encounter/components/shared-components/grid-element-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridElementList);
    return GridElementList;
}());



/***/ }),

/***/ "./src/app/modules/encounter/components/shared-components/grid.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/shared-components/grid.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"build-encounter__grid\" #gridWrapper>\r\n  <div\r\n    class=\"build-encounter__grid-wrapper\"\r\n    [ngStyle]=\"{\r\n      'grid-template-columns': 'repeat(' + gridWidth.number + ', ' + cellWidth + 'px)',\r\n      'grid-template-rows': 'repeat(' + gridWidth.number + ', ' + cellWidth + 'px)'\r\n    }\"\r\n  >\r\n    <div\r\n      class=\"grid-cell\"\r\n      *ngFor=\"let x of arrayOfSize(gridWidth.number, gridWidth.number); let i = index\"\r\n      (mouseenter)=\"gridCellHovered($event, i)\"\r\n      (click)=\"switchDragCharacterState($event, i)\"\r\n    ></div>\r\n  </div>\r\n  <div\r\n    class=\"build-encounter__grid-overlay\"\r\n    [ngStyle]=\"{\r\n      'grid-template-columns': 'repeat(' + gridWidth.number + ', ' + cellWidth + 'px)',\r\n      'grid-template-rows': 'repeat(' + gridWidth.number + ', ' + cellWidth + 'px)',\r\n      'pointer-events': isDraggingCharacter ? 'none' : 'all'\r\n    }\"\r\n  >\r\n    <div\r\n      *ngFor=\"let element of elements; let i = index\"\r\n      [ngStyle]=\"{\r\n        'grid-column-start': element.upperLeftCoordinates.x + 1,\r\n        'grid-column-end': element.lowerRightCoordinates.x + 1,\r\n        'grid-row-start': element.upperLeftCoordinates.y + 1,\r\n        'grid-row-end': element.lowerRightCoordinates.y + 1,\r\n\r\n        'background-color': i === hoveredCharacterIndex ? 'darkgray' : element.color\r\n      }\"\r\n      class=\"character-cell\"\r\n      (click)=\"switchDragCharacterState($event, i)\"\r\n      (mouseenter)=\"hoverOverCharacter($event, i)\"\r\n      (mouseleave)=\"hoverOutOfCharacter($event, i)\"\r\n    >\r\n      <div\r\n        class=\"character-cell__hp-bar\"\r\n        [ngStyle]=\"{\r\n          width: (element.currentHitPoints * 100) / element.hitPoints + '%'\r\n        }\"\r\n      ></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/shared-components/grid.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/encounter/components/shared-components/grid.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".build-encounter__grid {\n  display: inline-block;\n  z-index: 15;\n  width: 50%;\n  margin-left: 5%;\n  position: absolute;\n  top: 150px; }\n  .build-encounter__grid .build-encounter__grid-wrapper,\n  .build-encounter__grid .build-encounter__grid-overlay {\n    position: absolute;\n    display: -ms-grid;\n    display: grid;\n    grid-gap: 0; }\n  .build-encounter__grid .build-encounter__grid-wrapper .grid-cell,\n    .build-encounter__grid .build-encounter__grid-overlay .grid-cell {\n      background-color: white;\n      padding: 20px;\n      border: 1px solid black; }\n  .build-encounter__grid .build-encounter__grid-wrapper .character-cell,\n    .build-encounter__grid .build-encounter__grid-overlay .character-cell {\n      transition: all 0.1s ease-in-out;\n      position: relative; }\n  .build-encounter__grid .build-encounter__grid-wrapper .character-cell .character-cell__hp-bar,\n      .build-encounter__grid .build-encounter__grid-overlay .character-cell .character-cell__hp-bar {\n        height: 5px;\n        width: 80%;\n        background-color: red;\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        border-top: 1px solid gray; }\n  .build-encounter__grid .build-encounter__grid-wrapper {\n    background-color: black; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/components/shared-components/grid.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/encounter/components/shared-components/grid.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.gridWidth = { number: 20 };
        this.elementHoveredIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.elementHoveredOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDraggingCharacter = false;
        this.selectedCharacterIndex = -1;
        this.hoveredCharacterIndex = -1;
    }
    GridComponent.prototype.ngOnInit = function () {
        var width = this.gridWrapper.nativeElement.offsetWidth;
        this.cellWidth = width / this.gridWidth.number;
    };
    GridComponent.prototype.onResize = function (event) {
        var width = this.gridWrapper.nativeElement.offsetWidth;
        this.cellWidth = width / this.gridWidth.number;
    };
    GridComponent.prototype.arrayOfSize = function (w, h) {
        return Array(w * h).fill(0);
    };
    GridComponent.prototype.switchDragCharacterState = function (event, i) {
        if (!this.isDraggingCharacter) {
            this.isDraggingCharacter = true;
            this.selectedCharacterIndex = i;
        }
        else {
            this.isDraggingCharacter = false;
            this.selectedCharacterIndex = -1;
        }
    };
    GridComponent.prototype.gridCellHovered = function (event, i) {
        if (!this.isDraggingCharacter)
            return;
        var y = Math.floor(i / this.gridWidth.number);
        var x = i % this.gridWidth.number;
        this.elements[this.selectedCharacterIndex].lowerRightCoordinates.x =
            this.elements[this.selectedCharacterIndex].lowerRightCoordinates.x -
                this.elements[this.selectedCharacterIndex].upperLeftCoordinates.x +
                x;
        this.elements[this.selectedCharacterIndex].lowerRightCoordinates.y =
            this.elements[this.selectedCharacterIndex].lowerRightCoordinates.y -
                this.elements[this.selectedCharacterIndex].upperLeftCoordinates.y +
                y;
        this.elements[this.selectedCharacterIndex].upperLeftCoordinates.x = x;
        this.elements[this.selectedCharacterIndex].upperLeftCoordinates.y = y;
    };
    GridComponent.prototype.hoverOverCharacter = function (event, i) {
        this.hoveredCharacterIndex = i;
        this.elementHoveredIn.emit(i);
    };
    GridComponent.prototype.hoverOutOfCharacter = function (event, i) {
        this.hoveredCharacterIndex = -1;
        this.elementHoveredOut.emit(i);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GridComponent.prototype, "gridWidth", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], GridComponent.prototype, "elements", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gridWrapper'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GridComponent.prototype, "gridWrapper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GridComponent.prototype, "elementHoveredIn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GridComponent.prototype, "elementHoveredOut", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GridComponent.prototype, "onResize", null);
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'grid',
            template: __webpack_require__(/*! ./grid.component.html */ "./src/app/modules/encounter/components/shared-components/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/modules/encounter/components/shared-components/grid.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/modules/encounter/encounter.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/encounter/encounter.module.ts ***!
  \*******************************************************/
/*! exports provided: encounterRoutes, EncounterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encounterRoutes", function() { return encounterRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncounterModule", function() { return EncounterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_components_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-components/shared-module/shared-module.module */ "./src/app/shared-components/shared-module/shared-module.module.ts");
/* harmony import */ var _components_build_encounter_build_encounter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/build-encounter/build-encounter.component */ "./src/app/modules/encounter/components/build-encounter/build-encounter.component.ts");
/* harmony import */ var _components_room_room_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/room/room.component */ "./src/app/modules/encounter/components/room/room.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.component */ "./src/app/modules/encounter/main.component.ts");
/* harmony import */ var _components_shared_components_grid_element_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared-components/grid-element-list.component */ "./src/app/modules/encounter/components/shared-components/grid-element-list.component.ts");
/* harmony import */ var _components_shared_components_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared-components/grid.component */ "./src/app/modules/encounter/components/shared-components/grid.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _components_manage_miniatures_manage_miniatures_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/manage-miniatures/manage-miniatures.component */ "./src/app/modules/encounter/components/manage-miniatures/manage-miniatures.component.ts");
/* harmony import */ var _components_package_package_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/package/package.component */ "./src/app/modules/encounter/components/package/package.component.ts");
/* harmony import */ var _components_package_package_details_package_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/package/package-details/package-details.component */ "./src/app/modules/encounter/components/package/package-details/package-details.component.ts");
/* harmony import */ var _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/characters/characters.component */ "./src/app/modules/encounter/components/characters/characters.component.ts");
/* harmony import */ var _components_characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/characters/character-details/character-details.component */ "./src/app/modules/encounter/components/characters/character-details/character-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var encounterRoutes = [
    {
        path: 'main',
        component: _main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
        canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [
            {
                path: 'build-encounter',
                component: _components_build_encounter_build_encounter_component__WEBPACK_IMPORTED_MODULE_5__["BuildEncounterComponent"]
            },
            {
                path: 'room',
                component: _components_room_room_component__WEBPACK_IMPORTED_MODULE_6__["RoomComponent"]
            },
            {
                path: 'manage-miniatures',
                component: _components_manage_miniatures_manage_miniatures_component__WEBPACK_IMPORTED_MODULE_11__["ManageMiniaturesComponent"]
            },
            {
                path: 'packages',
                component: _components_package_package_component__WEBPACK_IMPORTED_MODULE_12__["PackageComponent"]
            },
            {
                path: 'characters',
                component: _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_14__["CharactersComponent"]
            }
        ]
    }
];
var EncounterModule = /** @class */ (function () {
    function EncounterModule() {
    }
    EncounterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(encounterRoutes), _shared_components_shared_module_shared_module_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["Auth"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
            declarations: [
                _components_build_encounter_build_encounter_component__WEBPACK_IMPORTED_MODULE_5__["BuildEncounterComponent"],
                _components_room_room_component__WEBPACK_IMPORTED_MODULE_6__["RoomComponent"],
                _main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _components_manage_miniatures_manage_miniatures_component__WEBPACK_IMPORTED_MODULE_11__["ManageMiniaturesComponent"],
                _components_shared_components_grid_element_list_component__WEBPACK_IMPORTED_MODULE_8__["GridElementList"],
                _components_shared_components_grid_component__WEBPACK_IMPORTED_MODULE_9__["GridComponent"],
                _components_package_package_component__WEBPACK_IMPORTED_MODULE_12__["PackageComponent"],
                _components_package_package_details_package_details_component__WEBPACK_IMPORTED_MODULE_13__["PackageDetailsComponent"],
                _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_14__["CharactersComponent"],
                _components_characters_character_details_character_details_component__WEBPACK_IMPORTED_MODULE_15__["CharacterDetailsComponent"]
            ]
        })
    ], EncounterModule);
    return EncounterModule;
}());



/***/ }),

/***/ "./src/app/modules/encounter/main.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/encounter/main.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\r\n  <!-- <a>Home</!-->\r\n  <!-- <a [routerLink]=\"['/main/manage-miniatures']\" routerLinkActive=\"active\">Manage Miniatures</a> -->\r\n  <a [routerLink]=\"['/main/characters']\" routerLinkActive=\"active\">Manage Characters</a>\r\n  <a [routerLink]=\"['/main/packages']\" routerLinkActive=\"active\">Manage Packages</a>\r\n  <div class=\"topnav-right\">\r\n    <a [routerLink]=\"['/main/build-encounter']\" routerLinkActive=\"active\">Build Encounter</a>\r\n    <!-- <a [routerLink]=\"['/main/room']\" routerLinkActive=\"active\">Create Room</a> -->\r\n  </div>\r\n</div>\r\n<div class=\"bg\"></div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/modules/encounter/main.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/encounter/main.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Add a black background color to the top navigation */\n.topnav {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  background-color: black;\n  border-bottom: 2px solid #598B2C;\n  overflow: hidden;\n  z-index: 10;\n  /* Right-aligned section inside the top navigation */ }\n.topnav a {\n    float: left;\n    color: white;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    font-size: 13px; }\n.topnav a:hover {\n      background-color: #11270B;\n      color: white; }\n.topnav a.active {\n      background-color: #71B340;\n      color: white; }\n.topnav .topnav-right {\n    float: right; }\n.bg {\n  z-index: 0;\n  pointer-events: none;\n  background-image: url('main-bg.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.2; }\n"

/***/ }),

/***/ "./src/app/modules/encounter/main.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/encounter/main.component.ts ***!
  \*****************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent(elRef) {
        this.elRef = elRef;
        elRef.nativeElement.ownerDocument.body.style.backgroundColor = '#041312';
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/modules/encounter/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/modules/encounter/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: loginRoutes, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRoutes", function() { return loginRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/login/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var loginRoutes = [{
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]]
    }];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(loginRoutes)
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["LoginGuard"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/modules/login/login/login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/login/login/login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login__body\">\r\n  <div class=\"login__gradient-wrapper\">\r\n    <div class=\"login__text\">\r\n      <h1>Join for free!</h1>\r\n      <h3>Augment the figurines in your tabletop games!</h3>\r\n    </div>\r\n    <div class=\"login__buttons\">\r\n      <div class=\"login_main__button button\">\r\n        <button class=\"button-brown\" (click)=\"socialSignIn('facebook')\">Login with FACEBOOK</button>\r\n      </div>\r\n      <div class=\"login_main__button button\">\r\n        <button class=\"button-brown\"  (click)=\"socialSignIn('google')\">Login with GOOGLE</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/login/login/login.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/login/login/login.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-family: 'Marcellus SC', serif; }\n\n.button-brown {\n  background: linear-gradient(to bottom, #181912 0%, #181912 100%);\n  padding: 10px;\n  color: #CBA676;\n  border: 2px solid;\n  -o-border-image: linear-gradient(to bottom, #71B340 0%, #598B2C 100%);\n     border-image: linear-gradient(to bottom, #71B340 0%, #598B2C 100%);\n  border-image-slice: 1;\n  box-shadow: inset 0 0 10px black;\n  transition: box-shadow 0.3s;\n  transition: color 0.3s; }\n\n.button-brown:hover {\n    background-color: #633c30;\n    text-decoration: underline;\n    box-shadow: 0 0 10px white;\n    -o-border-image: linear-gradient(to bottom, white 0%, white 100%);\n       border-image: linear-gradient(to bottom, white 0%, white 100%);\n    border-image-slice: 1;\n    color: white;\n    cursor: pointer; }\n\n.login__body {\n  background-image: url(\"https://img.buzzfeed.com/buzzfeed-static/static/2015-01/28/13/enhanced/webdr07/anigif_enhanced-9463-1422471484-22.gif?downsize=715:*&output-format=auto&output-quality=auto\");\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  border-top: 5px solid #598B2C;\n  box-sizing: border-box; }\n\n.login__body .login__gradient-wrapper {\n    height: 100%;\n    background: linear-gradient(to top, black 0%, rgba(0, 0, 0, 0.2) 100%); }\n\n.login__body .login__text {\n    width: 100%;\n    color: white;\n    text-align: center;\n    bottom: 125px;\n    position: absolute; }\n\n.login__body .login__text h1, .login__body .login__text h3 {\n      margin: 0px;\n      margin-bottom: 10px; }\n\n.login__body .login__text h1 {\n      font-size: 3em;\n      color: #CBA676; }\n\n.login__body .login__buttons {\n    bottom: 0px;\n    margin-bottom: 50px;\n    position: absolute;\n    width: 40%;\n    margin-left: 30%; }\n\n.login__body .login__buttons .button {\n      display: inline;\n      bottom: 0px;\n      position: absolute; }\n\n.login__body .login__buttons .button:first-child {\n        left: 0px; }\n\n.login__body .login__buttons .button:nth-child(2) {\n        right: 0px; }\n"

/***/ }),

/***/ "./src/app/modules/login/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/login/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-6-social-login */ "./node_modules/angular-6-social-login/angular-6-social-login.umd.js");
/* harmony import */ var angular_6_social_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(socialAuthService) {
        this.socialAuthService = socialAuthService;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            //userData.provider
            //userData.token
            window.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJmM2UxYWNkMy0xYjI3LTQwODQtOTEyMS0xNTM4N2RhZjg1ZjgiLCJuYmYiOjE1NjY5MTI1NjYsImV4cCI6MTU2NzUxNzM2NiwiaWF0IjoxNTY2OTEyNTY2fQ.6E5sLLmOGECeUSHLOlL9MK9zqwh0MXSvWc5G-wcB29g");
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [angular_6_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/app.constants.ts":
/*!*******************************************!*\
  !*** ./src/app/services/app.constants.ts ***!
  \*******************************************/
/*! exports provided: SERVER_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_PATH", function() { return SERVER_PATH; });
var SERVER_PATH = "http://35.204.255.212:5555/";
//export const SERVER_PATH = "http://localhost:31805/"


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: Auth, AuthResolver, LoginGuard, AuthGuard, AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResolver", function() { return AuthResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Auth = /** @class */ (function () {
    function Auth(HttpClient, Router) {
        var _this = this;
        this.HttpClient = HttpClient;
        this.Router = Router;
        this.getLoginStatus()
            .finally(function () {
            if (_this.initializingObserver !== undefined) {
                _this.initializingObserver.next(_this.User);
                _this.initializingObserver.complete();
            }
        })
            .subscribe(function (user) {
            _this.setUpUser(user, true);
        }, function (err) {
            _this.setUpUser(null, false);
        });
    }
    Auth.prototype.getLoginStatus = function () {
        var token = window.localStorage.getItem('token');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ authorization: "Bearer " + token });
        if (token === null)
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                observer.next(null);
            });
        else
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
                observer.next({ "username": "dragos" });
            });
        // return this.HttpClient.get(`${SERVER_PATH}/user/login-status`, { headers });
    };
    Auth.prototype.getUser = function () {
        return this.User;
    };
    Auth.prototype.hasInitialized = function () {
        var _this = this;
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            if (_this.User !== undefined) {
                observer.next(_this.User);
                observer.complete();
            }
            else {
                _this.initializingObserver = observer;
            }
        });
    };
    Auth.prototype.logout = function () {
        this.setUpUser(null, false);
        window.localStorage.removeItem('token');
        this.Router.navigate([''], { replaceUrl: true });
    };
    Auth.prototype.setUpUser = function (user, isLogged) {
        if (isLogged === void 0) { isLogged = false; }
        this.User = user;
    };
    Auth = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Auth);
    return Auth;
}());

var AuthResolver = /** @class */ (function () {
    function AuthResolver(Auth) {
        this.Auth = Auth;
    }
    AuthResolver.prototype.resolve = function () {
        return this.Auth.hasInitialized();
    };
    AuthResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [Auth])
    ], AuthResolver);
    return AuthResolver;
}());

var LoginGuard = /** @class */ (function () {
    function LoginGuard(Auth, Router) {
        this.Auth = Auth;
        this.Router = Router;
    }
    LoginGuard.prototype.canActivate = function () {
        var _this = this;
        console.log("Guarding Login", this.Auth.getUser());
        return this.Auth.hasInitialized()
            .map(function (user) {
            if (user === null) {
                window.localStorage.removeItem('token');
                return true;
            }
            else {
                throw new Error();
            }
        })
            .catch(function () {
            _this.Router.navigate(['/main/build-encounter']);
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(false);
        });
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [Auth, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());

var AuthGuard = /** @class */ (function () {
    function AuthGuard(Auth, Router) {
        this.Auth = Auth;
        this.Router = Router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        console.log("Guarding Auth");
        return this.Auth.hasInitialized()
            .map(function (user) {
            if (user !== null) {
                return true;
            }
            else {
                window.localStorage.removeItem('token');
                throw new Error();
            }
        })
            .catch(function () {
            _this.Router.navigate(['']);
            window.localStorage.removeItem('token');
            return rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__["Observable"].of(false);
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [Auth, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = window.localStorage.getItem('token');
        if (authToken) {
            console.log("Sending request with header " + authToken);
            var request = req.clone({
                setHeaders: {
                    authorization: "Bearer " + authToken
                }
            });
            return next.handle(request);
        }
        return next.handle(req.clone());
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/mock-data.ts":
/*!***************************************!*\
  !*** ./src/app/services/mock-data.ts ***!
  \***************************************/
/*! exports provided: miniaturesPackages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "miniaturesPackages", function() { return miniaturesPackages; });
var miniaturesPackages = [
    {
        id: 1,
        name: "Package of Feylands",
        thumbnail: "../../assets/img/package-1.jpg",
        numberOfItems: 10,
        models: [
            {
                name: "Hound",
                thumbnail: "../../assets/img/monster-thumbnail-1.jpg",
                mainImage: "../../assets/img/monster-main-1.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Daemon",
                thumbnail: "../../assets/img/monster-thumbnail-2.jpg",
                mainImage: "../../assets/img/monster-main-2.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "BLAARGH",
                thumbnail: "../../assets/img/monster-thumbnail-3.jpg",
                mainImage: "../../assets/img/monster-main-3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Hound",
                thumbnail: "../../assets/img/monster-thumbnail-1.jpg",
                mainImage: "../../assets/img/monster-main-1.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Daemon",
                thumbnail: "../../assets/img/monster-thumbnail-2.jpg",
                mainImage: "../../assets/img/monster-main-2.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "BLAARGH",
                thumbnail: "../../assets/img/monster-thumbnail-3.jpg",
                mainImage: "../../assets/img/monster-main-3.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    },
    {
        id: 2,
        name: "Package of Faerun",
        thumbnail: "../../assets/img/package-2.jpg",
        numberOfItems: 20,
        models: [
            {
                name: "Hound",
                thumbnail: "../../assets/img/monster-thumbnail-1.jpg",
                mainImage: "../../assets/img/monster-main-1.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                name: "Daemon",
                thumbnail: "../../assets/img/monster-thumbnail-2.jpg",
                mainImage: "../../assets/img/monster-main-2.jpg",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/shared-components/directives/click-outside.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared-components/directives/click-outside.directive.ts ***!
  \*************************************************************************/
/*! exports provided: ClickOutside */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutside", function() { return ClickOutside; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_fromEvent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/observable/fromEvent */ "./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClickOutside = /** @class */ (function () {
    function ClickOutside(_elRef) {
        this._elRef = _elRef;
        this.listening = false;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickOutside.prototype.ngOnInit = function () {
        var _this = this;
        this.globalClick = rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]
            .fromEvent(document, 'click')
            .delay(1)
            .do(function () {
            _this.listening = true;
        }).subscribe(function (event) {
            _this.onGlobalClick(event);
        });
    };
    ClickOutside.prototype.ngOnDestroy = function () {
        this.globalClick.unsubscribe();
    };
    ClickOutside.prototype.onGlobalClick = function (event) {
        if (event instanceof MouseEvent && this.listening === true) {
            if (this.isDescendant(this._elRef.nativeElement, event.target) === true) {
                this.clickOutside.emit({
                    target: (event.target || null),
                    value: false
                });
            }
            else {
                this.clickOutside.emit({
                    target: (event.target || null),
                    value: true
                });
            }
        }
    };
    ClickOutside.prototype.isDescendant = function (parent, child) {
        var node = child;
        while (node !== null) {
            if (node === parent) {
                return true;
            }
            else {
                node = node.parentNode;
            }
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('clickOutside'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ClickOutside.prototype, "clickOutside", void 0);
    ClickOutside = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[click-outside]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickOutside);
    return ClickOutside;
}());



/***/ }),

/***/ "./src/app/shared-components/index.ts":
/*!********************************************!*\
  !*** ./src/app/shared-components/index.ts ***!
  \********************************************/
/*! exports provided: Package, Character, GridCharacter, BaseService, PackageService, CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/index */ "./src/app/shared-components/models/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return _models_index__WEBPACK_IMPORTED_MODULE_0__["Package"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return _models_index__WEBPACK_IMPORTED_MODULE_0__["Character"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridCharacter", function() { return _models_index__WEBPACK_IMPORTED_MODULE_0__["GridCharacter"]; });

/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/index */ "./src/app/shared-components/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_1__["BaseService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_1__["PackageService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_1__["CharacterService"]; });





/***/ }),

/***/ "./src/app/shared-components/modal/modal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/shared-components/modal/modal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal__overlay\" *ngIf=\"isShown\">\r\n  <div click-outside (clickOutside)=\"onClickOutside($event)\" class=\"modal__body animated bounceIn\">\r\n    <div class=\"modal__content\">\r\n        <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared-components/modal/modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared-components/modal/modal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  font-family: 'Marcellus SC', serif; }\n\n.button-brown {\n  background: linear-gradient(to bottom, #181912 0%, #181912 100%);\n  padding: 10px;\n  color: #CBA676;\n  border: 2px solid;\n  -o-border-image: linear-gradient(to bottom, #71B340 0%, #598B2C 100%);\n     border-image: linear-gradient(to bottom, #71B340 0%, #598B2C 100%);\n  border-image-slice: 1;\n  box-shadow: inset 0 0 10px black;\n  transition: box-shadow 0.3s;\n  transition: color 0.3s; }\n\n.button-brown:hover {\n    background-color: #633c30;\n    text-decoration: underline;\n    box-shadow: 0 0 10px white;\n    -o-border-image: linear-gradient(to bottom, white 0%, white 100%);\n       border-image: linear-gradient(to bottom, white 0%, white 100%);\n    border-image-slice: 1;\n    color: white;\n    cursor: pointer; }\n\n.modal__overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 100;\n  background-color: rgba(0, 0, 0, 0.3); }\n\n.modal__overlay .modal__body {\n    width: 80%;\n    height: 80%;\n    margin: auto;\n    margin-top: 5%;\n    background-color: white;\n    box-shadow: inset 0 0 15px #11270B;\n    border-radius: 2px;\n    overflow: hidden;\n    border-radius: 10px; }\n\n.modal__overlay .modal__body .modal__exit {\n      position: absolute;\n      right: 10px;\n      top: 10px;\n      cursor: pointer; }\n\n.modal__overlay .modal__body .modal__content {\n      height: 100%; }\n"

/***/ }),

/***/ "./src/app/shared-components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared-components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.isShown = false;
        //On opened Modal also throws clicked outside event which is WRONG
        this.isAvailable = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.onKeydownHandler = function (event) {
        var ESCAPE_KEYCODE = 27;
        if (event.keyCode === ESCAPE_KEYCODE) {
            this.closeModal();
        }
    };
    ModalComponent.prototype.openModal = function () {
        var _this = this;
        this.isShown = true;
        setTimeout(function () { return _this.isAvailable = true; }, 100);
    };
    ModalComponent.prototype.closeModal = function () {
        this.isShown = false;
        this.isAvailable = false;
    };
    ModalComponent.prototype.onClickOutside = function (event) {
        if (event && event['value'] === true && this.isAvailable) {
            this.closeModal();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ModalComponent.prototype, "onKeydownHandler", null);
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/shared-components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared-components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/shared-components/models/character.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared-components/models/character.model.ts ***!
  \*************************************************************/
/*! exports provided: Character */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
var Character = /** @class */ (function () {
    function Character() {
    }
    return Character;
}());



/***/ }),

/***/ "./src/app/shared-components/models/grid-character.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared-components/models/grid-character.model.ts ***!
  \******************************************************************/
/*! exports provided: GridCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCharacter", function() { return GridCharacter; });
var GridCharacter = /** @class */ (function () {
    function GridCharacter(id, name, initiativeModifier, armorClass, hitPoints, isPlayerCharacter, upperLeftCoordinates, lowerRightCoordinates, rotation, 
    //Temp values
    initiative, color, currentHitPoints) {
        if (initiative === void 0) { initiative = 0; }
        if (color === void 0) { color = '#00ff00'; }
        this.id = id;
        this.name = name;
        this.initiativeModifier = initiativeModifier;
        this.armorClass = armorClass;
        this.hitPoints = hitPoints;
        this.isPlayerCharacter = isPlayerCharacter;
        this.upperLeftCoordinates = upperLeftCoordinates;
        this.lowerRightCoordinates = lowerRightCoordinates;
        this.rotation = rotation;
        this.initiative = initiative;
        this.color = color;
        this.currentHitPoints = currentHitPoints;
        this.currentHitPoints = hitPoints;
    }
    return GridCharacter;
}());



/***/ }),

/***/ "./src/app/shared-components/models/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shared-components/models/index.ts ***!
  \***************************************************/
/*! exports provided: Package, Character, GridCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _package_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package.model */ "./src/app/shared-components/models/package.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return _package_model__WEBPACK_IMPORTED_MODULE_0__["Package"]; });

/* harmony import */ var _character_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character.model */ "./src/app/shared-components/models/character.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return _character_model__WEBPACK_IMPORTED_MODULE_1__["Character"]; });

/* harmony import */ var _grid_character_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid-character.model */ "./src/app/shared-components/models/grid-character.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridCharacter", function() { return _grid_character_model__WEBPACK_IMPORTED_MODULE_2__["GridCharacter"]; });






/***/ }),

/***/ "./src/app/shared-components/models/package.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared-components/models/package.model.ts ***!
  \***********************************************************/
/*! exports provided: Package */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Package", function() { return Package; });
var Package = /** @class */ (function () {
    function Package() {
    }
    return Package;
}());



/***/ }),

/***/ "./src/app/shared-components/services/base.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared-components/services/base.service.ts ***!
  \************************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _services_app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.constants */ "./src/app/services/app.constants.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BaseService = /** @class */ (function () {
    function BaseService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = _services_app_constants__WEBPACK_IMPORTED_MODULE_4__["SERVER_PATH"];
    }
    BaseService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BaseService.prototype.getTokenHeader = function () {
        var token = window.localStorage.getItem('token');
        return new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ authorization: token });
    };
    BaseService.prototype.get = function (url, searchParams, responseType) {
        return this.httpClient
            .get(this.baseUrl + url, {
            headers: this.getTokenHeader(),
            withCredentials: true, params: searchParams,
            responseType: responseType
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return console.log('result-->', result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    //this is not working due to CORS policy. Needs investigation
    BaseService.prototype.patch = function (url, body, params) {
        return this.httpClient.patch(this.baseUrl + url, body, {
            headers: this.getTokenHeader(),
            params: params, withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return console.log('result-->', result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BaseService.prototype.post = function (url, body, params) {
        return this.httpClient.post(this.baseUrl + url, body, {
            headers: this.getTokenHeader(),
            params: params, withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return console.log('result-->', result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BaseService.prototype.put = function (url, body, params) {
        return this.httpClient.put(this.baseUrl + url, body, {
            headers: this.getTokenHeader(),
            params: params, withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return console.log('result-->', result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BaseService.prototype.delete = function (url, params) {
        return this.httpClient.delete(this.baseUrl + url, { params: params, withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return console.log('result-->', result); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    BaseService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.' + error.message);
    };
    ;
    BaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BaseService);
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared-components/services/character.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared-components/services/character.service.ts ***!
  \*****************************************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/shared-components/services/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CharacterService = /** @class */ (function () {
    function CharacterService(baseService) {
        this.baseService = baseService;
        this.url = 'api/characters';
    }
    CharacterService.prototype.get = function () {
        var result = this.baseService.get(this.url);
        return result;
    };
    CharacterService.prototype.getByPackageId = function (packageId) {
        var url = this.url + "/packageid/" + packageId;
        var result = this.baseService.get(url);
        return result;
    };
    CharacterService.prototype.add = function (character) {
        return this.baseService.post(this.url, character, null);
    };
    CharacterService.prototype.update = function (character) {
        return this.baseService.put(this.url, character, null);
    };
    CharacterService.prototype.delete = function (id) {
        var url = this.url + "/" + id;
        return this.baseService.delete(url, null);
    };
    CharacterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], CharacterService);
    return CharacterService;
}());



/***/ }),

/***/ "./src/app/shared-components/services/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared-components/services/index.ts ***!
  \*****************************************************/
/*! exports provided: BaseService, PackageService, CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "./src/app/shared-components/services/base.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"]; });

/* harmony import */ var _package_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package.service */ "./src/app/shared-components/services/package.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return _package_service__WEBPACK_IMPORTED_MODULE_1__["PackageService"]; });

/* harmony import */ var _character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./character.service */ "./src/app/shared-components/services/character.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return _character_service__WEBPACK_IMPORTED_MODULE_2__["CharacterService"]; });






/***/ }),

/***/ "./src/app/shared-components/services/package.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/services/package.service.ts ***!
  \***************************************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/shared-components/services/base.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PackageService = /** @class */ (function () {
    function PackageService(baseService) {
        this.baseService = baseService;
        this.url = 'api/packages';
    }
    PackageService.prototype.get = function () {
        var result = this.baseService.get(this.url);
        return result;
    };
    PackageService.prototype.add = function (miniPackage) {
        return this.baseService.post(this.url, miniPackage, null);
    };
    PackageService.prototype.update = function (miniPackage) {
        return this.baseService.put(this.url, miniPackage, null);
    };
    PackageService.prototype.delete = function (id) {
        var url = this.url + "/" + id;
        return this.baseService.delete(url, null);
    };
    PackageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]])
    ], PackageService);
    return PackageService;
}());



/***/ }),

/***/ "./src/app/shared-components/shared-module/shared-module.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared-components/shared-module/shared-module.module.ts ***!
  \*************************************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/shared-components/modal/modal.component.ts");
/* harmony import */ var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directives/click-outside.directive */ "./src/app/shared-components/directives/click-outside.directive.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/index */ "./src/app/shared-components/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__["ClickOutside"]],
            exports: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_3__["ClickOutside"]],
            providers: [_services_index__WEBPACK_IMPORTED_MODULE_4__["PackageService"],
                _services_index__WEBPACK_IMPORTED_MODULE_4__["CharacterService"]]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
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

module.exports = __webpack_require__(/*! G:\vali\tests\aNewHope\MiniaturesAR-fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map