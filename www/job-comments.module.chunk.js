webpackJsonp(["job-comments.module"],{

/***/ "./node_modules/rxjs/_esm5/add/observable/forkJoin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/forkJoin.js");
/** PURE_IMPORTS_START .._.._Observable,.._.._observable_forkJoin PURE_IMPORTS_END */


__WEBPACK_IMPORTED_MODULE_0__Observable__["Observable"].forkJoin = __WEBPACK_IMPORTED_MODULE_1__observable_forkJoin__["a" /* forkJoin */];
//# sourceMappingURL=forkJoin.js.map 


/***/ }),

/***/ "./src/app/job-comments/job-comments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobCommentsModule", function() { return JobCommentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_definition_detail_resolver_job_definition_resolver_service__ = __webpack_require__("./src/app/job-definition/detail/resolver/job-definition-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_task_detail_task_detail_resolver_service__ = __webpack_require__("./src/app/task/task-detail/task-detail-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_comments_routing__ = __webpack_require__("./src/app/job-comments/job-comments.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__job_comments_job_comment_resolver_job_comments_resolver_service__ = __webpack_require__("./src/app/job-comments/job-comments/job-comment-resolver/job-comments-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__job_comments_job_comment_tile_job_comment_tile_component__ = __webpack_require__("./src/app/job-comments/job-comments/job-comment-tile/job-comment-tile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_comments_job_event_tile_job_event_tile_component__ = __webpack_require__("./src/app/job-comments/job-comments/job-event-tile/job-event-tile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var JobCommentsModule = /** @class */ (function () {
    function JobCommentsModule() {
    }
    JobCommentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__job_comments_routing__["a" /* JobCommentsRoutingModule */]
            ],
            declarations: __WEBPACK_IMPORTED_MODULE_5__job_comments_routing__["b" /* routedComponents */].concat([
                __WEBPACK_IMPORTED_MODULE_7__job_comments_job_comment_tile_job_comment_tile_component__["a" /* JobCommentTileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__job_comments_job_event_tile_job_event_tile_component__["a" /* JobEventTileComponent */]
            ]),
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__job_comments_job_comment_resolver_job_comments_resolver_service__["a" /* JobCommentsResolver */],
                __WEBPACK_IMPORTED_MODULE_2__job_definition_detail_resolver_job_definition_resolver_service__["a" /* JobDefinitionResolver */],
                __WEBPACK_IMPORTED_MODULE_4__task_task_detail_task_detail_resolver_service__["a" /* TaskDetailResolver */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]
            ]
        })
    ], JobCommentsModule);
    return JobCommentsModule;
}());



/***/ }),

/***/ "./src/app/job-comments/job-comments.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCommentsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_definition_detail_resolver_job_definition_resolver_service__ = __webpack_require__("./src/app/job-definition/detail/resolver/job-definition-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_task_detail_task_detail_resolver_service__ = __webpack_require__("./src/app/task/task-detail/task-detail-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__job_comments_job_comment_resolver_job_comments_resolver_service__ = __webpack_require__("./src/app/job-comments/job-comments/job-comment-resolver/job-comments-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_comments_job_comments_component__ = __webpack_require__("./src/app/job-comments/job-comments/job-comments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: '0',
        pathMatch: 'full'
    },
    {
        path: ':jobId/:taskId', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__job_comments_job_comments_component__["a" /* JobCommentsComponent */], data: { title: 'Job comments' },
        resolve: {
            events: __WEBPACK_IMPORTED_MODULE_4__job_comments_job_comment_resolver_job_comments_resolver_service__["a" /* JobCommentsResolver */],
            job: __WEBPACK_IMPORTED_MODULE_2__job_definition_detail_resolver_job_definition_resolver_service__["a" /* JobDefinitionResolver */],
            task: __WEBPACK_IMPORTED_MODULE_3__task_task_detail_task_detail_resolver_service__["a" /* TaskDetailResolver */]
        }
    },
    {
        path: ':jobId', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_5__job_comments_job_comments_component__["a" /* JobCommentsComponent */], data: { title: 'Job comments' },
        resolve: {
            events: __WEBPACK_IMPORTED_MODULE_4__job_comments_job_comment_resolver_job_comments_resolver_service__["a" /* JobCommentsResolver */],
            job: __WEBPACK_IMPORTED_MODULE_2__job_definition_detail_resolver_job_definition_resolver_service__["a" /* JobDefinitionResolver */]
        }
    }
];
var JobCommentsRoutingModule = /** @class */ (function () {
    function JobCommentsRoutingModule() {
    }
    JobCommentsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]],
        })
    ], JobCommentsRoutingModule);
    return JobCommentsRoutingModule;
}());

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_5__job_comments_job_comments_component__["a" /* JobCommentsComponent */]
];


/***/ }),

/***/ "./src/app/job-comments/job-comments/job-comment-resolver/job-comments-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCommentsResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proxies__ = __webpack_require__("./src/app/proxies/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobCommentsResolver = /** @class */ (function () {
    function JobCommentsResolver(jobService) {
        this.jobService = jobService;
    }
    JobCommentsResolver.prototype.resolve = function (route, state) {
        var jobId = +route.params['jobId'];
        return this
            .jobService
            .getEventsWithComments(jobId)
            .filter(function (response) { return response.success; })
            .map(function (response) {
            return response.result.items;
        });
    };
    JobCommentsResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__proxies__["p" /* JobService */]])
    ], JobCommentsResolver);
    return JobCommentsResolver;
}());



/***/ }),

/***/ "./src/app/job-comments/job-comments/job-comment-tile/job-comment-tile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <img class=\"col-xs user-image\"\r\n       [src]=\"comment.creatorUser.imageUrl\"\r\n       onError=\"this.src='assets/img/default-profile-picture.png';\">\r\n  <div class=\"col-xs\">\r\n    <div class=\"user-info\">\r\n      {{userText | async}}\r\n    </div>\r\n    <div class=\"user-info-mobile row xs-between\">\r\n      <div class=\"col-xs user-name-mobile\">{{comment.creatorUser.name}} {{comment.creatorUser.surname}}</div>\r\n      <div class=\"col-xs date-mobile\">{{comment.creationTime | date:'short'}}</div>\r\n\r\n    </div>\r\n    <div class=\"comment\">\r\n      {{comment.comment}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/job-comments/job-comments/job-comment-tile/job-comment-tile.component.scss":
/***/ (function(module, exports) {

module.exports = "frigg-job-comment-tile {\n  width: 100%; }\n  frigg-job-comment-tile .user-image {\n    width: 50px;\n    height: 50px;\n    max-width: 50px;\n    border-radius: 50%;\n    padding: 0;\n    cursor: pointer;\n    margin: auto 1rem auto auto; }\n  @media screen and (max-width: 48em) {\n      frigg-job-comment-tile .user-image {\n        display: none; } }\n  frigg-job-comment-tile .user-info-mobile {\n    display: none; }\n  frigg-job-comment-tile .user-info-mobile .user-name-mobile {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n  frigg-job-comment-tile .user-info-mobile .date-mobile {\n      text-align: end;\n      margin: 0 1rem; }\n  @media screen and (max-width: 48em) {\n    frigg-job-comment-tile .user-info {\n      display: none; }\n    frigg-job-comment-tile .user-info-mobile {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; } }\n  frigg-job-comment-tile .comment {\n    padding: 0.5rem;\n    margin-bottom: 2rem; }\n"

/***/ }),

/***/ "./src/app/job-comments/job-comments/job-comment-tile/job-comment-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCommentTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_service__ = __webpack_require__("./src/app/core/core.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proxies__ = __webpack_require__("./src/app/proxies/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobCommentTileComponent = /** @class */ (function () {
    function JobCommentTileComponent(core, datePipe) {
        this.core = core;
        this.datePipe = datePipe;
    }
    Object.defineProperty(JobCommentTileComponent.prototype, "userText", {
        get: function () {
            return this.core.translation.get('frigg.userCommentedOnDate', {
                user: this.getFullName(this.comment.creatorUser),
                date: this.datePipe.transform(this.comment.creationTime, 'short')
            });
        },
        enumerable: true,
        configurable: true
    });
    JobCommentTileComponent.prototype.getFullName = function (user) {
        return user.name + " " + user.surname;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__proxies__["b" /* CommentDto */])
    ], JobCommentTileComponent.prototype, "comment", void 0);
    JobCommentTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'frigg-job-comment-tile',
            template: __webpack_require__("./src/app/job-comments/job-comments/job-comment-tile/job-comment-tile.component.html"),
            styles: [__webpack_require__("./src/app/job-comments/job-comments/job-comment-tile/job-comment-tile.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_core_service__["a" /* CoreService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["DatePipe"]])
    ], JobCommentTileComponent);
    return JobCommentTileComponent;
}());



/***/ }),

/***/ "./src/app/job-comments/job-comments/job-comments.component.html":
/***/ (function(module, exports) {

module.exports = "<frigg-header-card>\r\n  <div frigg-card>\r\n    <frigg-tile-list\r\n      #eventList\r\n      class=\"event-list\"\r\n      [showHeader]=\"false\"\r\n      [items]=\"events\"\r\n      [allowDelete]=\"false\">\r\n      <ng-template let-event=\"item\">\r\n        <frigg-job-event-tile\r\n          [event]=\"event\"\r\n          [job]=\"job\">\r\n        </frigg-job-event-tile>\r\n      </ng-template>\r\n    </frigg-tile-list>\r\n  </div>\r\n</frigg-header-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/job-comments/job-comments/job-comments.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  max-width: 1200px;\n  margin: 0 auto; }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 2rem;\n  padding-left: 2rem; }\n\n.row {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n  -moz-flex: 0 1 auto;\n  -ms-flex: 0 1 auto;\n  flex: 0 1 auto;\n  -webkit-box-direction: normal;\n  -webkit-box-orient: horizontal;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -0.5rem;\n  margin-left: -0.5rem; }\n\n.row.reverse {\n  -webkit-box-direction: reverse;\n  -webkit-box-orient: horizontal;\n  -moz-flex-direction: row-reverse;\n  -ms-flex-direction: row-reverse;\n  flex-direction: row-reverse; }\n\n.col.reverse {\n  -webkit-box-direction: reverse;\n  -webkit-box-orient: vertical;\n  -moz-flex-direction: column-reverse;\n  -ms-flex-direction: column-reverse;\n  flex-direction: column-reverse; }\n\n.col-xs {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: auto;\n  flex-basis: auto; }\n\n.col-xs-1 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 8.33333333%;\n  flex-basis: 8.33333333%;\n  max-width: 8.33333333%; }\n\n.col-xs-2 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 16.66666667%;\n  flex-basis: 16.66666667%;\n  max-width: 16.66666667%; }\n\n.col-xs-3 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 25%;\n  flex-basis: 25%;\n  max-width: 25%; }\n\n.col-xs-4 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 33.33333333%;\n  flex-basis: 33.33333333%;\n  max-width: 33.33333333%; }\n\n.col-xs-5 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 41.66666667%;\n  flex-basis: 41.66666667%;\n  max-width: 41.66666667%; }\n\n.col-xs-6 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%;\n  max-width: 50%; }\n\n.col-xs-7 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 58.33333333%;\n  flex-basis: 58.33333333%;\n  max-width: 58.33333333%; }\n\n.col-xs-8 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 66.66666667%;\n  flex-basis: 66.66666667%;\n  max-width: 66.66666667%; }\n\n.col-xs-9 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 75%;\n  flex-basis: 75%;\n  max-width: 75%; }\n\n.col-xs-10 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 83.33333333%;\n  flex-basis: 83.33333333%;\n  max-width: 83.33333333%; }\n\n.col-xs-11 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 91.66666667%;\n  flex-basis: 91.66666667%;\n  max-width: 91.66666667%; }\n\n.col-xs-12 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  max-width: 100%; }\n\n.col-xs-offset-1 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 8.33333333%; }\n\n.col-xs-offset-2 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 16.66666667%; }\n\n.col-xs-offset-3 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 33.33333333%; }\n\n.col-xs-offset-5 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 41.66666667%; }\n\n.col-xs-offset-6 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 58.33333333%; }\n\n.col-xs-offset-8 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 66.66666667%; }\n\n.col-xs-offset-9 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 83.33333333%; }\n\n.col-xs-offset-11 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 91.66666667%; }\n\n.col-xs-offset-12 {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 0;\n  -moz-flex-grow: 0;\n  -ms-flex-positive: 0;\n  flex-grow: 0;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  margin-left: 100%; }\n\n.col-xs {\n  -webkit-box-flex: 1;\n  -moz-flex-grow: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n  flex-basis: 0;\n  max-width: 100%; }\n\n.start-xs {\n  -webkit-box-pack: start;\n  -ms-flex-pack: start;\n  -moz-justify-content: flex-start;\n  justify-content: flex-start;\n  text-align: start; }\n\n.center-xs {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  -moz-justify-content: center;\n  justify-content: center;\n  text-align: center; }\n\n.end-xs {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  -moz-justify-content: flex-end;\n  justify-content: flex-end;\n  text-align: end; }\n\n.top-xs {\n  -webkit-box-align: start;\n  -ms-flex-align: start;\n  -moz-align-items: flex-start;\n  align-items: flex-start; }\n\n.middle-xs {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  -moz-align-items: center;\n  align-items: center; }\n\n.bottom-xs {\n  -webkit-box-align: end;\n  -ms-flex-align: end;\n  -moz-align-items: flex-end;\n  align-items: flex-end; }\n\n.around-xs {\n  -ms-flex-pack: distribute;\n  -moz-justify-content: space-around;\n  justify-content: space-around; }\n\n.between-xs {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  -moz-justify-content: space-between;\n  justify-content: space-between; }\n\n.first-xs {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n\n.last-xs {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n\n@media only screen and (min-width: 48em) {\n  .container {\n    width: 46rem; }\n  .col-sm {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto; }\n  .col-sm-1 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .col-sm-offset-1 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 8.33333333%; }\n  .col-sm-offset-2 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 16.66666667%; }\n  .col-sm-offset-3 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 33.33333333%; }\n  .col-sm-offset-5 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 41.66666667%; }\n  .col-sm-offset-6 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 58.33333333%; }\n  .col-sm-offset-8 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 66.66666667%; }\n  .col-sm-offset-9 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 83.33333333%; }\n  .col-sm-offset-11 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 91.66666667%; }\n  .col-sm-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 100%; }\n  .col-sm {\n    -webkit-box-flex: 1;\n    -moz-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%; }\n  .start-sm {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    -moz-justify-content: flex-start;\n    justify-content: flex-start;\n    text-align: start; }\n  .center-sm {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -moz-justify-content: center;\n    justify-content: center;\n    text-align: center; }\n  .end-sm {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    -moz-justify-content: flex-end;\n    justify-content: flex-end;\n    text-align: end; }\n  .top-sm {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -moz-align-items: flex-start;\n    align-items: flex-start; }\n  .middle-sm {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -moz-align-items: center;\n    align-items: center; }\n  .bottom-sm {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -moz-align-items: flex-end;\n    align-items: flex-end; }\n  .around-sm {\n    -ms-flex-pack: distribute;\n    -moz-justify-content: space-around;\n    justify-content: space-around; }\n  .between-sm {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    -moz-justify-content: space-between;\n    justify-content: space-between; }\n  .first-sm {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .last-sm {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; } }\n\n@media only screen and (min-width: 62em) {\n  .container {\n    width: 61rem; }\n  .col-md {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto; }\n  .col-md-1 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .col-md-offset-1 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 8.33333333%; }\n  .col-md-offset-2 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 16.66666667%; }\n  .col-md-offset-3 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 33.33333333%; }\n  .col-md-offset-5 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 41.66666667%; }\n  .col-md-offset-6 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 58.33333333%; }\n  .col-md-offset-8 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 66.66666667%; }\n  .col-md-offset-9 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 83.33333333%; }\n  .col-md-offset-11 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 91.66666667%; }\n  .col-md-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 100%; }\n  .col-md {\n    -webkit-box-flex: 1;\n    -moz-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%; }\n  .start-md {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    -moz-justify-content: flex-start;\n    justify-content: flex-start;\n    text-align: start; }\n  .center-md {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -moz-justify-content: center;\n    justify-content: center;\n    text-align: center; }\n  .end-md {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    -moz-justify-content: flex-end;\n    justify-content: flex-end;\n    text-align: end; }\n  .top-md {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -moz-align-items: flex-start;\n    align-items: flex-start; }\n  .middle-md {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -moz-align-items: center;\n    align-items: center; }\n  .bottom-md {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -moz-align-items: flex-end;\n    align-items: flex-end; }\n  .around-md {\n    -ms-flex-pack: distribute;\n    -moz-justify-content: space-around;\n    justify-content: space-around; }\n  .between-md {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    -moz-justify-content: space-between;\n    justify-content: space-between; }\n  .first-md {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .last-md {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; } }\n\n@media only screen and (min-width: 75em) {\n  .container {\n    width: 71rem; }\n  .col-lg {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: auto;\n    flex-basis: auto; }\n  .col-lg-1 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 8.33333333%;\n    flex-basis: 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 16.66666667%;\n    flex-basis: 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 25%;\n    flex-basis: 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 33.33333333%;\n    flex-basis: 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 41.66666667%;\n    flex-basis: 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 50%;\n    flex-basis: 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 58.33333333%;\n    flex-basis: 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 66.66666667%;\n    flex-basis: 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 75%;\n    flex-basis: 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 83.33333333%;\n    flex-basis: 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 91.66666667%;\n    flex-basis: 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -ms-flex-preferred-size: 100%;\n    flex-basis: 100%;\n    max-width: 100%; }\n  .col-lg-offset-1 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 8.33333333%; }\n  .col-lg-offset-2 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 16.66666667%; }\n  .col-lg-offset-3 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 33.33333333%; }\n  .col-lg-offset-5 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 41.66666667%; }\n  .col-lg-offset-6 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 58.33333333%; }\n  .col-lg-offset-8 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 66.66666667%; }\n  .col-lg-offset-9 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 83.33333333%; }\n  .col-lg-offset-11 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 91.66666667%; }\n  .col-lg-offset-12 {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-flex: 0;\n    -moz-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    margin-left: 100%; }\n  .col-lg {\n    -webkit-box-flex: 1;\n    -moz-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    -ms-flex-preferred-size: 0;\n    flex-basis: 0;\n    max-width: 100%; }\n  .start-lg {\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    -moz-justify-content: flex-start;\n    justify-content: flex-start;\n    text-align: start; }\n  .center-lg {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    -moz-justify-content: center;\n    justify-content: center;\n    text-align: center; }\n  .end-lg {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    -moz-justify-content: flex-end;\n    justify-content: flex-end;\n    text-align: end; }\n  .top-lg {\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    -moz-align-items: flex-start;\n    align-items: flex-start; }\n  .middle-lg {\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    -moz-align-items: center;\n    align-items: center; }\n  .bottom-lg {\n    -webkit-box-align: end;\n    -ms-flex-align: end;\n    -moz-align-items: flex-end;\n    align-items: flex-end; }\n  .around-lg {\n    -ms-flex-pack: distribute;\n    -moz-justify-content: space-around;\n    justify-content: space-around; }\n  .between-lg {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    -moz-justify-content: space-between;\n    justify-content: space-between; }\n  .first-lg {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .last-lg {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; } }\n\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n\n/* Theme for the ripple elements.*/\n\n/* stylelint-disable material/no-prefixes */\n\n/* stylelint-enable */\n\nfrigg-job-comments {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow: hidden; }\n\nfrigg-job-comments [frigg-card] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    height: 100%; }\n\nfrigg-job-comments .event-list {\n    margin-right: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    overflow-y: auto; }\n\nfrigg-job-comments .event-list .item-content {\n      -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n              box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n      background-color: transparent !important;\n      border-width: 0 !important;\n      margin-right: 0 !important; }\n"

/***/ }),

/***/ "./src/app/job-comments/job-comments/job-comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_service__ = __webpack_require__("./src/app/core/core.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proxies__ = __webpack_require__("./src/app/proxies/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_tile_list_tile_list_tile_list_component__ = __webpack_require__("./src/app/shared/tile-list/tile-list/tile-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__job_comments_service__ = __webpack_require__("./src/app/job-comments/job-comments/job-comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobCommentsComponent = /** @class */ (function () {
    function JobCommentsComponent(core, jobService, jobCommentsService, route) {
        this.core = core;
        this.jobService = jobService;
        this.jobCommentsService = jobCommentsService;
        this.route = route;
        this.events = [];
    }
    JobCommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.events = data.events;
            _this.job = data.job;
            _this.task = data.task;
            _this.startListeningForNotifications();
            _this.core.setTranslatedShellHeader('frigg.commentsFor', { name: _this.job.name });
            if (_this.task) {
                _this.core.shell.setNavigateUrl('/tasks/' + _this.job.id + '/' + _this.task.id);
                _this.core.shell.setNavigateText(_this.task.name);
            }
            else {
                _this.core.shell.setNavigateUrl('/jobdefinition/' + _this.job.id);
                _this.core.shell.setHeader(_this.job.name);
            }
        });
    };
    JobCommentsComponent.prototype.ngOnDestroy = function () {
        this.stopListeningForNotifications();
    };
    JobCommentsComponent.prototype.startListeningForNotifications = function () {
        var _this = this;
        this.core.notification
            .listen('private-job-comment-' + this.job.id, 'CommentAdded')
            .subscribe(function (message) {
            var existingEvent = _this.events.find(function (event) { return event.id === message.data.EventId; });
            if (existingEvent) {
                _this.addCommentToExistingEvent(message.data, existingEvent);
            }
            else {
                _this.addNewEventWithComments(message.data);
            }
        });
    };
    JobCommentsComponent.prototype.stopListeningForNotifications = function () {
        this.core.notification.stopListening('private-job-comment-' + this.job.id);
    };
    JobCommentsComponent.prototype.addCommentToExistingEvent = function (commentData, existingEvent) {
        var newComment = new __WEBPACK_IMPORTED_MODULE_3__proxies__["b" /* CommentDto */]();
        newComment.comment = commentData.Comment;
        newComment.creatorUserId = commentData.CreatorUserId;
        newComment.creationTime = commentData.CreationTime;
        this.jobCommentsService.getCommentUser(this.events, commentData.CreatorUserId)
            .subscribe(function (user) {
            newComment.creatorUser = user;
            existingEvent.comments.push(newComment);
        });
    };
    JobCommentsComponent.prototype.addNewEventWithComments = function (commentData) {
        var _this = this;
        this.jobService.getEvent(this.job.id, commentData.EventId)
            .subscribe(function (response) {
            if (response.success) {
                _this.events.push(response.result);
            }
        });
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('eventList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__shared_tile_list_tile_list_tile_list_component__["a" /* TileListComponent */])
    ], JobCommentsComponent.prototype, "eventList", void 0);
    JobCommentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'frigg-job-comments',
            template: __webpack_require__("./src/app/job-comments/job-comments/job-comments.component.html"),
            styles: [__webpack_require__("./src/app/job-comments/job-comments/job-comments.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__job_comments_service__["a" /* JobCommentsService */]],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_core_service__["a" /* CoreService */],
            __WEBPACK_IMPORTED_MODULE_3__proxies__["p" /* JobService */],
            __WEBPACK_IMPORTED_MODULE_5__job_comments_service__["a" /* JobCommentsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], JobCommentsComponent);
    return JobCommentsComponent;
}());



/***/ }),

/***/ "./src/app/job-comments/job-comments/job-comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobCommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proxies__ = __webpack_require__("./src/app/proxies/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobCommentsService = /** @class */ (function () {
    function JobCommentsService(userService) {
        this.userService = userService;
    }
    JobCommentsService.prototype.getTaskName = function (job, taskId) {
        var task = job.tasks.find(function (t) { return t.id === taskId; });
        return task ? task.name : '';
    };
    JobCommentsService.prototype.getActionName = function (job, taskId, actionId) {
        var task = job.tasks.find(function (t) { return t.id === taskId; });
        var action = task ? task.actions.find(function (a) { return a.id === actionId; }) : null;
        return action ? action.name : '';
    };
    JobCommentsService.prototype.getCommentUser = function (events, userId) {
        var previousUser = this.findPreviousUser(events, userId);
        if (previousUser) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(previousUser);
        }
        return this.userService
            .getUser(userId)
            .map(function (response) {
            if (response.success) {
                var loadedUser = response.result;
                var commentUser = new __WEBPACK_IMPORTED_MODULE_2__proxies__["d" /* CommentUserDto */]();
                commentUser.name = loadedUser.name;
                commentUser.surname = loadedUser.surname;
                commentUser.userName = loadedUser.userName;
                commentUser.imageUrl = loadedUser.imageUrl;
                commentUser.emailAddress = loadedUser.emailAddress;
                return commentUser;
            }
        });
    };
    JobCommentsService.prototype.findPreviousUser = function (events, userId) {
        var previousUser = null;
        events.filter(function (event) {
            var previousComment = event.comments.find(function (c) {
                return c.creatorUserId === userId;
            });
            if (previousComment && previousComment.creatorUser) {
                previousUser = previousComment.creatorUser;
                return false;
            }
            return true;
        });
        return null;
    };
    ;
    JobCommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__proxies__["I" /* UserService */]])
    ], JobCommentsService);
    return JobCommentsService;
}());



/***/ }),

/***/ "./src/app/job-comments/job-comments/job-event-tile/job-event-tile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"task-name\">{{taskName}}</div>\r\n<div class=\"action-name\">{{actionName}}</div>\r\n<ul>\r\n  <li *ngFor=\"let comment of event.comments\">\r\n    <frigg-job-comment-tile [comment]=\"comment\"></frigg-job-comment-tile>\r\n  </li>\r\n</ul>\r\n<div class=\"row end-xs\">\r\n  <button mat-button (click)=\"onReply()\">{{'frigg.reply' | translate}}</button>\r\n</div>\r\n<hr/>\r\n\r\n"

/***/ }),

/***/ "./src/app/job-comments/job-comments/job-event-tile/job-event-tile.component.scss":
/***/ (function(module, exports) {

module.exports = "frigg-job-event-tile {\n  width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  frigg-job-event-tile .task-name,\n  frigg-job-event-tile .action-name {\n    font-weight: bold; }\n  frigg-job-event-tile hr {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/job-comments/job-comments/job-event-tile/job-event-tile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobEventTileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_core_service__ = __webpack_require__("./src/app/core/core.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proxies__ = __webpack_require__("./src/app/proxies/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__job_comments_service__ = __webpack_require__("./src/app/job-comments/job-comments/job-comments.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobEventTileComponent = /** @class */ (function () {
    function JobEventTileComponent(core, taskService, jobCommentsService) {
        this.core = core;
        this.taskService = taskService;
        this.jobCommentsService = jobCommentsService;
    }
    Object.defineProperty(JobEventTileComponent.prototype, "taskName", {
        get: function () {
            return this.jobCommentsService.getTaskName(this.job, this.event.taskId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JobEventTileComponent.prototype, "actionName", {
        get: function () {
            return this.jobCommentsService.getActionName(this.job, this.event.taskId, this.event.actionId);
        },
        enumerable: true,
        configurable: true
    });
    JobEventTileComponent.prototype.onReply = function () {
        var _this = this;
        var header = this.core.translate('frigg.comment');
        var placeholder = this.core.translate('frigg.comment');
        this.core.dialog.executeAction(header, placeholder, 2, this.core.translate('frigg.ok')).subscribe(function (result) {
            if (result.ok) {
                _this.addComment(result.comment);
            }
        });
    };
    JobEventTileComponent.prototype.addComment = function (comment) {
        var input = new __WEBPACK_IMPORTED_MODULE_2__proxies__["c" /* CommentEventInput */]();
        input.jobId = this.job.id;
        input.taskId = this.event.taskId;
        input.eventId = this.event.id;
        input.comment = comment;
        this.taskService.commentEvent(input)
            .subscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__proxies__["i" /* JobDefinitionDto */])
    ], JobEventTileComponent.prototype, "job", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__proxies__["h" /* EventDto */])
    ], JobEventTileComponent.prototype, "event", void 0);
    JobEventTileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'frigg-job-event-tile',
            template: __webpack_require__("./src/app/job-comments/job-comments/job-event-tile/job-event-tile.component.html"),
            styles: [__webpack_require__("./src/app/job-comments/job-comments/job-event-tile/job-event-tile.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_core_service__["a" /* CoreService */],
            __WEBPACK_IMPORTED_MODULE_2__proxies__["G" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_3__job_comments_service__["a" /* JobCommentsService */]])
    ], JobEventTileComponent);
    return JobEventTileComponent;
}());



/***/ })

});
//# sourceMappingURL=job-comments.module.chunk.js.map