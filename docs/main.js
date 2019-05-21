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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<huevo-weather [name]=\"city?.name\" [icon]=\"city?.icon\" [temperature]=\"city?.temperature\"\n               [humidity]=\"city?.humidity\" [windSpeed]=\"city?.windSpeed\"></huevo-weather>\n<div id=\"map\" class=\"map\"></div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: calc(100vh - 178px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdvcmtzcGFjZXNcXGh1ZXZvLXdlYXRoZXJcXGNvbnRyb2xsZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc4cHgpO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var huevo_weather_model_dist_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! huevo-weather-model/dist/weather.service */ "./node_modules/huevo-weather-model/dist/weather.service.js");
/* harmony import */ var huevo_weather_model_dist_weather_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(huevo_weather_model_dist_weather_service__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent(weatherService) {
        this.weatherService = weatherService;
        this.latitude = 40.420300;
        this.longitude = -3.693162;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([this.longitude, this.latitude]),
                zoom: 8
            })
        });
        this.map.on('click', function (args) {
            var _a = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326'), lon = _a[0], lat = _a[1];
            _this.setCityWeather(lon, lat);
        });
    };
    AppComponent.prototype.setCityWeather = function (lon, lat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentWeather;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.weatherService.getCurrentWeatherByCoords(lat, lon)];
                    case 1:
                        currentWeather = (_a.sent()).data.list[0];
                        this.city = {
                            name: currentWeather.name,
                            icon: currentWeather.weather[0].icon,
                            temperature: currentWeather.main.temp.toString(),
                            humidity: currentWeather.main.humidity.toString(),
                            windSpeed: currentWeather.wind.speed.toString(),
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [huevo_weather_model_dist_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var huevo_weather_model_dist_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! huevo-weather-model/dist/weather.service */ "./node_modules/huevo-weather-model/dist/weather.service.js");
/* harmony import */ var huevo_weather_model_dist_weather_service__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(huevo_weather_model_dist_weather_service__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_6__["WeatherComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [huevo_weather_model_dist_weather_service__WEBPACK_IMPORTED_MODULE_5__["WeatherService"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"city\">{{name}}</div>\n  <div class=\"info\">\n    <img [src]=\"'http://openweathermap.org/img/w/' + icon + '.png'\" class=\"icon\">\n    <div class=\"temp\">\n      <div class=\"value\">{{temperature}}</div>\n      <div class=\"units\">ºC</div>\n    </div>\n    <div class=\"desc\">\n      <div class=\"humidity\">Humedad: {{humidity}}%</div>\n      <div>Viento: {{windSpeed}}km/h</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/weather/weather.component.scss":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  border: #e2e2e2 1px solid;\n  margin: 10px;\n  border-radius: 5px;\n  padding: 20px;\n  display: inline-block; }\n  .content .city {\n    font-size: 22px;\n    margin-bottom: 15px; }\n  .content .info {\n    display: inline-flex; }\n  .content .info .img {\n      float: left; }\n  .content .info .temp {\n      margin-left: 10px;\n      float: left; }\n  .content .info .temp .value {\n        float: left;\n        font-size: 3em; }\n  .content .info .temp .units {\n        float: left;\n        margin-top: 8px; }\n  .content .info .desc {\n      margin-left: 20px;\n      float: right;\n      color: #adadad; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VhdGhlci9EOlxcd29ya3NwYWNlc1xcaHVldm8td2VhdGhlclxcY29udHJvbGxlci9zcmNcXGFwcFxcd2VhdGhlclxcd2VhdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUIsRUFBQTtFQUx2QjtJQVFJLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQVR2QjtJQWFJLG9CQUFvQixFQUFBO0VBYnhCO01BZ0JNLFdBQVcsRUFBQTtFQWhCakI7TUFvQk0saUJBQWlCO01BQ2pCLFdBQVcsRUFBQTtFQXJCakI7UUF3QlEsV0FBVztRQUNYLGNBQWMsRUFBQTtFQXpCdEI7UUE2QlEsV0FBVztRQUNYLGVBQWUsRUFBQTtFQTlCdkI7TUFvQ00saUJBQWlCO01BQ2pCLFlBQVk7TUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRlbnQge1xyXG4gIGJvcmRlcjogI2UyZTJlMiAxcHggc29saWQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgLmNpdHkge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cclxuICAgIC5pbWcge1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICAudGVtcCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICAgIC52YWx1ZSB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51bml0cyB7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5kZXNjIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgY29sb3I6ICNhZGFkYWQ7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherComponent.prototype, "icon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherComponent.prototype, "temperature", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherComponent.prototype, "humidity", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherComponent.prototype, "windSpeed", void 0);
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'huevo-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/weather/weather.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
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

module.exports = __webpack_require__(/*! D:\workspaces\huevo-weather\controller\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map