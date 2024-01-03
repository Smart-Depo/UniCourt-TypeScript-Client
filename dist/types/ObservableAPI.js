"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableUsageAPIApi = exports.ObservablePartyAnalyticsAPIApi = exports.ObservablePACERCredentialAPIApi = exports.ObservablePACERAPIApi = exports.ObservableLawFirmAnalyticsAPIApi = exports.ObservableJudgeAnalyticsAPIApi = exports.ObservableCourtStandardsAPIApi = exports.ObservableCourtAvailabilityAPIApi = exports.ObservableCaseUpdateAPIApi = exports.ObservableCaseTrackingAPIApi = exports.ObservableCaseSearchAPIApi = exports.ObservableCaseExportAPIApi = exports.ObservableCaseDocumentsAPIApi = exports.ObservableCaseDocketAPIApi = exports.ObservableCaseAnalyticsAPIApi = exports.ObservableCallbackAPIApi = exports.ObservableAuthenticationAPIApi = exports.ObservableAttorneyAnalyticsAPIApi = void 0;
var rxjsStub_1 = require("../rxjsStub");
var rxjsStub_2 = require("../rxjsStub");
var AttorneyAnalyticsAPIApi_1 = require("../apis/AttorneyAnalyticsAPIApi");
var ObservableAttorneyAnalyticsAPIApi = (function () {
    function ObservableAttorneyAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AttorneyAnalyticsAPIApi_1.AttorneyAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AttorneyAnalyticsAPIApi_1.AttorneyAnalyticsAPIApiResponseProcessor();
    }
    ObservableAttorneyAnalyticsAPIApi.prototype.getNormAttorneyByIdWithHttpInfo = function (normAttorneyId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormAttorneyById(normAttorneyId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_1 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_1(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_2 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_2(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormAttorneyByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.getNormAttorneyById = function (normAttorneyId, _options) {
        return this.getNormAttorneyByIdWithHttpInfo(normAttorneyId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo = function (normAttorneyId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormJudgesAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_3 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_3(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_4 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_4(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(rsp); }));
        }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormAttorney = function (normAttorneyId, q, pageNumber, _options) {
        return this.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo = function (normAttorneyId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormLawFirmsAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_5 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_5(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_6 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_6(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(rsp); }));
        }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormAttorney = function (normAttorneyId, q, pageNumber, _options) {
        return this.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo = function (normAttorneyId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormPartiesAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_7 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_7(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_8 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_8(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(rsp); }));
        }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormAttorney = function (normAttorneyId, q, pageNumber, _options) {
        return this.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchNormalizedAttorneys(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_9 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_9(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_10 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_10(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchNormalizedAttorneysWithHttpInfo(rsp); }));
        }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneys = function (q, pageNumber, _options) {
        return this.searchNormalizedAttorneysWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysByIdWithHttpInfo = function (normAttorneySearchId, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchNormalizedAttorneysById(normAttorneySearchId, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_11 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_11(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_12 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_12(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchNormalizedAttorneysByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysById = function (normAttorneySearchId, pageNumber, _options) {
        return this.searchNormalizedAttorneysByIdWithHttpInfo(normAttorneySearchId, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAttorneyAnalyticsAPIApi;
}());
exports.ObservableAttorneyAnalyticsAPIApi = ObservableAttorneyAnalyticsAPIApi;
var AuthenticationAPIApi_1 = require("../apis/AuthenticationAPIApi");
var ObservableAuthenticationAPIApi = (function () {
    function ObservableAuthenticationAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthenticationAPIApi_1.AuthenticationAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthenticationAPIApi_1.AuthenticationAPIApiResponseProcessor();
    }
    ObservableAuthenticationAPIApi.prototype.generateNewTokenWithHttpInfo = function (generateNewTokenRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.generateNewToken(generateNewTokenRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_13 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_13(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_14 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_14(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.generateNewTokenWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthenticationAPIApi.prototype.generateNewToken = function (generateNewTokenRequest, _options) {
        return this.generateNewTokenWithHttpInfo(generateNewTokenRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthenticationAPIApi.prototype.invalidateAllTokensWithHttpInfo = function (generateNewTokenRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.invalidateAllTokens(generateNewTokenRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_15 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_15(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_16 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_16(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.invalidateAllTokensWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthenticationAPIApi.prototype.invalidateAllTokens = function (generateNewTokenRequest, _options) {
        return this.invalidateAllTokensWithHttpInfo(generateNewTokenRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthenticationAPIApi.prototype.invalidateTokenWithHttpInfo = function (invalidateTokenRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.invalidateToken(invalidateTokenRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_17 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_17(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_18 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_18(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.invalidateTokenWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthenticationAPIApi.prototype.invalidateToken = function (invalidateTokenRequest, _options) {
        return this.invalidateTokenWithHttpInfo(invalidateTokenRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableAuthenticationAPIApi.prototype.listAllTokenIdsWithHttpInfo = function (generateNewTokenRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.listAllTokenIds(generateNewTokenRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_19 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_19(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_20 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_20(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.listAllTokenIdsWithHttpInfo(rsp); }));
        }));
    };
    ObservableAuthenticationAPIApi.prototype.listAllTokenIds = function (generateNewTokenRequest, _options) {
        return this.listAllTokenIdsWithHttpInfo(generateNewTokenRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableAuthenticationAPIApi;
}());
exports.ObservableAuthenticationAPIApi = ObservableAuthenticationAPIApi;
var CallbackAPIApi_1 = require("../apis/CallbackAPIApi");
var ObservableCallbackAPIApi = (function () {
    function ObservableCallbackAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CallbackAPIApi_1.CallbackAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CallbackAPIApi_1.CallbackAPIApiResponseProcessor();
    }
    ObservableCallbackAPIApi.prototype.getCallbacksWithHttpInfo = function (date, status, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCallbacks(date, status, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_21 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_21(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_22 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_22(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCallbacksWithHttpInfo(rsp); }));
        }));
    };
    ObservableCallbackAPIApi.prototype.getCallbacks = function (date, status, _options) {
        return this.getCallbacksWithHttpInfo(date, status, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCallbackAPIApi;
}());
exports.ObservableCallbackAPIApi = ObservableCallbackAPIApi;
var CaseAnalyticsAPIApi_1 = require("../apis/CaseAnalyticsAPIApi");
var ObservableCaseAnalyticsAPIApi = (function () {
    function ObservableCaseAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseAnalyticsAPIApi_1.CaseAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseAnalyticsAPIApi_1.CaseAnalyticsAPIApiResponseProcessor();
    }
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByAreaOfLawWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByAreaOfLaw(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_23 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_23(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_24 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_24(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByAreaOfLawWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByAreaOfLaw = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByAreaOfLawWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseClassWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCaseClass(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_25 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_25(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_26 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_26(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByCaseClassWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseClass = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByCaseClassWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo = function (groupBy, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCaseFiledDate(groupBy, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_27 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_27(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_28 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_28(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseFiledDate = function (groupBy, q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(groupBy, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCaseType(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_29 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_29(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_30 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_30(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByCaseTypeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseType = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByCaseTypeWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCaseTypeGroup(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_31 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_31(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_32 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_32(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeGroup = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCourt(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_33 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_33(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_34 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_34(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByCourtWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourt = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByCourtWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtLocationWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCourtLocation(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_35 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_35(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_36 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_36(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByCourtLocationWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtLocation = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByCourtLocationWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtSystemWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCourtSystem(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_37 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_37(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_38 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_38(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByCourtSystemWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtSystem = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByCourtSystemWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtTypeWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByCourtType(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_39 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_39(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_40 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_40(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByCourtTypeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtType = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByCourtTypeWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByJurisdictionGeo(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_41 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_41(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_42 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_42(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByJurisdictionGeo = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormAttorneyWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByNormAttorney(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_43 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_43(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_44 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_44(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByNormAttorneyWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormAttorney = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByNormAttorneyWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormJudgeWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByNormJudge(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_45 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_45(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_46 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_46(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByNormJudgeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormJudge = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByNormJudgeWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormLawFirmWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByNormLawFirm(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_47 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_47(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_48 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_48(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByNormLawFirmWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormLawFirm = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByNormLawFirmWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormPartyWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByNormParty(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_49 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_49(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_50 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_50(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByNormPartyWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormParty = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByNormPartyWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo = function (normAttorneyId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney(normAttorneyId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_51 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_51(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_52 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_52(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney = function (normAttorneyId, q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo = function (normLawFirmId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm(normLawFirmId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_53 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_53(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_54 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_54(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm = function (normLawFirmId, q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo = function (normPartyId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByOpposingNormPartyForANormParty(normPartyId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_55 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_55(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_56 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_56(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormPartyForANormParty = function (normPartyId, q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(normPartyId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByPartyRole(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_57 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_57(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_58 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_58(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByPartyRoleWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRole = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByPartyRoleWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseCountAnalyticsByPartyRoleGroup(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_59 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_59(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_60 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_60(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleGroup = function (q, pageNumber, _options) {
        return this.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCaseAnalyticsAPIApi;
}());
exports.ObservableCaseAnalyticsAPIApi = ObservableCaseAnalyticsAPIApi;
var CaseDocketAPIApi_1 = require("../apis/CaseDocketAPIApi");
var ObservableCaseDocketAPIApi = (function () {
    function ObservableCaseDocketAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseDocketAPIApi_1.CaseDocketAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseDocketAPIApi_1.CaseDocketAPIApiResponseProcessor();
    }
    ObservableCaseDocketAPIApi.prototype.getAttorneyAssociatedPartiesWithHttpInfo = function (attorneyId, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAttorneyAssociatedParties(attorneyId, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_61 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_61(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_62 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_62(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAttorneyAssociatedPartiesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getAttorneyAssociatedParties = function (attorneyId, pageNumber, _options) {
        return this.getAttorneyAssociatedPartiesWithHttpInfo(attorneyId, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getAttorneyByIdWithHttpInfo = function (attorneyId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAttorneyById(attorneyId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_63 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_63(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_64 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_64(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAttorneyByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getAttorneyById = function (attorneyId, _options) {
        return this.getAttorneyByIdWithHttpInfo(attorneyId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseWithHttpInfo = function (caseId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCase(caseId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_65 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_65(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_66 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_66(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getCase = function (caseId, _options) {
        return this.getCaseWithHttpInfo(caseId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseAttorneysWithHttpInfo = function (caseId, isVisible, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseAttorneys(caseId, isVisible, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_67 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_67(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_68 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_68(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseAttorneysWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseAttorneys = function (caseId, isVisible, pageNumber, _options) {
        return this.getCaseAttorneysWithHttpInfo(caseId, isVisible, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseDocketEntriesWithHttpInfo = function (caseId, docketNumber, sortBy, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseDocketEntries(caseId, docketNumber, sortBy, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_69 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_69(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_70 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_70(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseDocketEntriesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseDocketEntries = function (caseId, docketNumber, sortBy, pageNumber, _options) {
        return this.getCaseDocketEntriesWithHttpInfo(caseId, docketNumber, sortBy, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseHearingsWithHttpInfo = function (caseId, sortBy, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseHearings(caseId, sortBy, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_71 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_71(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_72 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_72(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseHearingsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseHearings = function (caseId, sortBy, pageNumber, _options) {
        return this.getCaseHearingsWithHttpInfo(caseId, sortBy, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseJudgesWithHttpInfo = function (caseId, isVisible, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseJudges(caseId, isVisible, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_73 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_73(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_74 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_74(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseJudgesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseJudges = function (caseId, isVisible, pageNumber, _options) {
        return this.getCaseJudgesWithHttpInfo(caseId, isVisible, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getCasePartiesWithHttpInfo = function (caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseParties(caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_75 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_75(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_76 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_76(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCasePartiesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseParties = function (caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options) {
        return this.getCasePartiesWithHttpInfo(caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseRelatedCasesWithHttpInfo = function (caseId, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseRelatedCases(caseId, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_77 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_77(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_78 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_78(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseRelatedCasesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getCaseRelatedCases = function (caseId, pageNumber, _options) {
        return this.getCaseRelatedCasesWithHttpInfo(caseId, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getJudgeByIdWithHttpInfo = function (judgeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getJudgeById(judgeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_79 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_79(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_80 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_80(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getJudgeByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getJudgeById = function (judgeId, _options) {
        return this.getJudgeByIdWithHttpInfo(judgeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getPartyAssociatedAttorneysWithHttpInfo = function (partyId, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPartyAssociatedAttorneys(partyId, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_81 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_81(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_82 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_82(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPartyAssociatedAttorneysWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getPartyAssociatedAttorneys = function (partyId, pageNumber, _options) {
        return this.getPartyAssociatedAttorneysWithHttpInfo(partyId, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getPartyByIdWithHttpInfo = function (partyId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPartyById(partyId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_83 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_83(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_84 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_84(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPartyByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getPartyById = function (partyId, _options) {
        return this.getPartyByIdWithHttpInfo(partyId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getPrimaryDocumentsForDocketEntriesWithHttpInfo = function (caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPrimaryDocumentsForDocketEntries(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_85 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_85(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_86 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_86(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPrimaryDocumentsForDocketEntriesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getPrimaryDocumentsForDocketEntries = function (caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options) {
        return this.getPrimaryDocumentsForDocketEntriesWithHttpInfo(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocketAPIApi.prototype.getSecondaryDocumentsForDocketEntriesWithHttpInfo = function (caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getSecondaryDocumentsForDocketEntries(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_87 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_87(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_88 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_88(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getSecondaryDocumentsForDocketEntriesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocketAPIApi.prototype.getSecondaryDocumentsForDocketEntries = function (caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options) {
        return this.getSecondaryDocumentsForDocketEntriesWithHttpInfo(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCaseDocketAPIApi;
}());
exports.ObservableCaseDocketAPIApi = ObservableCaseDocketAPIApi;
var CaseDocumentsAPIApi_1 = require("../apis/CaseDocumentsAPIApi");
var ObservableCaseDocumentsAPIApi = (function () {
    function ObservableCaseDocumentsAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseDocumentsAPIApi_1.CaseDocumentsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseDocumentsAPIApi_1.CaseDocumentsAPIApiResponseProcessor();
    }
    ObservableCaseDocumentsAPIApi.prototype.getCaseDocumentDownloadByIdWithHttpInfo = function (caseDocumentId, isPreviewDocument, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseDocumentDownloadById(caseDocumentId, isPreviewDocument, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_89 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_89(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_90 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_90(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseDocumentDownloadByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getCaseDocumentDownloadById = function (caseDocumentId, isPreviewDocument, _options) {
        return this.getCaseDocumentDownloadByIdWithHttpInfo(caseDocumentId, isPreviewDocument, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbackByIdWithHttpInfo = function (caseDocumentOrderCallbackId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseDocumentOrderCallbackById(caseDocumentOrderCallbackId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_91 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_91(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_92 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_92(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseDocumentOrderCallbackByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbackById = function (caseDocumentOrderCallbackId, _options) {
        return this.getCaseDocumentOrderCallbackByIdWithHttpInfo(caseDocumentOrderCallbackId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbacksWithHttpInfo = function (date, status, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseDocumentOrderCallbacks(date, status, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_93 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_93(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_94 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_94(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseDocumentOrderCallbacksWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbacks = function (date, status, pageNumber, _options) {
        return this.getCaseDocumentOrderCallbacksWithHttpInfo(date, status, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getCaseDocumentsWithHttpInfo = function (caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseDocuments(caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_95 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_95(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_96 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_96(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseDocumentsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getCaseDocuments = function (caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options) {
        return this.getCaseDocumentsWithHttpInfo(caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getDocumentByIdWithHttpInfo = function (caseDocumentId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getDocumentById(caseDocumentId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_97 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_97(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_98 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_98(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getDocumentByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocumentsAPIApi.prototype.getDocumentById = function (caseDocumentId, _options) {
        return this.getDocumentByIdWithHttpInfo(caseDocumentId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseDocumentsAPIApi.prototype.orderCaseDocumentWithHttpInfo = function (orderCaseDocumentRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.orderCaseDocument(orderCaseDocumentRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_99 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_99(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_100 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_100(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.orderCaseDocumentWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseDocumentsAPIApi.prototype.orderCaseDocument = function (orderCaseDocumentRequest, _options) {
        return this.orderCaseDocumentWithHttpInfo(orderCaseDocumentRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCaseDocumentsAPIApi;
}());
exports.ObservableCaseDocumentsAPIApi = ObservableCaseDocumentsAPIApi;
var CaseExportAPIApi_1 = require("../apis/CaseExportAPIApi");
var ObservableCaseExportAPIApi = (function () {
    function ObservableCaseExportAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseExportAPIApi_1.CaseExportAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseExportAPIApi_1.CaseExportAPIApiResponseProcessor();
    }
    ObservableCaseExportAPIApi.prototype.exportCaseWithHttpInfo = function (caseId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.exportCase(caseId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_101 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_101(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_102 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_102(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.exportCaseWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseExportAPIApi.prototype.exportCase = function (caseId, _options) {
        return this.exportCaseWithHttpInfo(caseId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseExportAPIApi.prototype.getCaseExportCallbackByIdWithHttpInfo = function (caseExportCallbackId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseExportCallbackById(caseExportCallbackId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_103 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_103(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_104 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_104(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseExportCallbackByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseExportAPIApi.prototype.getCaseExportCallbackById = function (caseExportCallbackId, _options) {
        return this.getCaseExportCallbackByIdWithHttpInfo(caseExportCallbackId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseExportAPIApi.prototype.getCaseExportCallbacksWithHttpInfo = function (date, status, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseExportCallbacks(date, status, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_105 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_105(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_106 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_106(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseExportCallbacksWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseExportAPIApi.prototype.getCaseExportCallbacks = function (date, status, pageNumber, _options) {
        return this.getCaseExportCallbacksWithHttpInfo(date, status, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCaseExportAPIApi;
}());
exports.ObservableCaseExportAPIApi = ObservableCaseExportAPIApi;
var CaseSearchAPIApi_1 = require("../apis/CaseSearchAPIApi");
var ObservableCaseSearchAPIApi = (function () {
    function ObservableCaseSearchAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseSearchAPIApi_1.CaseSearchAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseSearchAPIApi_1.CaseSearchAPIApiResponseProcessor();
    }
    ObservableCaseSearchAPIApi.prototype.searchCasesWithHttpInfo = function (q, sort, order, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchCases(q, sort, order, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_107 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_107(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_108 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_108(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchCasesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseSearchAPIApi.prototype.searchCases = function (q, sort, order, pageNumber, _options) {
        return this.searchCasesWithHttpInfo(q, sort, order, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseSearchAPIApi.prototype.searchCasesByIdWithHttpInfo = function (caseSearchId, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchCasesById(caseSearchId, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_109 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_109(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_110 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_110(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchCasesByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseSearchAPIApi.prototype.searchCasesById = function (caseSearchId, pageNumber, _options) {
        return this.searchCasesByIdWithHttpInfo(caseSearchId, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCaseSearchAPIApi;
}());
exports.ObservableCaseSearchAPIApi = ObservableCaseSearchAPIApi;
var CaseTrackingAPIApi_1 = require("../apis/CaseTrackingAPIApi");
var ObservableCaseTrackingAPIApi = (function () {
    function ObservableCaseTrackingAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseTrackingAPIApi_1.CaseTrackingAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseTrackingAPIApi_1.CaseTrackingAPIApiResponseProcessor();
    }
    ObservableCaseTrackingAPIApi.prototype.getCaseTrackByIdWithHttpInfo = function (caseId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseTrackById(caseId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_111 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_111(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_112 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_112(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseTrackByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseTrackingAPIApi.prototype.getCaseTrackById = function (caseId, _options) {
        return this.getCaseTrackByIdWithHttpInfo(caseId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseTrackingAPIApi.prototype.getCaseTracksWithHttpInfo = function (lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseTracks(lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_113 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_113(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_114 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_114(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseTracksWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseTrackingAPIApi.prototype.getCaseTracks = function (lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options) {
        return this.getCaseTracksWithHttpInfo(lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseTrackingAPIApi.prototype.removeCaseTrackByIdWithHttpInfo = function (caseId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removeCaseTrackById(caseId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_115 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_115(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_116 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_116(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.removeCaseTrackByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseTrackingAPIApi.prototype.removeCaseTrackById = function (caseId, _options) {
        return this.removeCaseTrackByIdWithHttpInfo(caseId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseTrackingAPIApi.prototype.trackCaseWithHttpInfo = function (trackCaseRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.trackCase(trackCaseRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_117 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_117(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_118 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_118(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.trackCaseWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseTrackingAPIApi.prototype.trackCase = function (trackCaseRequest, _options) {
        return this.trackCaseWithHttpInfo(trackCaseRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCaseTrackingAPIApi;
}());
exports.ObservableCaseTrackingAPIApi = ObservableCaseTrackingAPIApi;
var CaseUpdateAPIApi_1 = require("../apis/CaseUpdateAPIApi");
var ObservableCaseUpdateAPIApi = (function () {
    function ObservableCaseUpdateAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CaseUpdateAPIApi_1.CaseUpdateAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CaseUpdateAPIApi_1.CaseUpdateAPIApiResponseProcessor();
    }
    ObservableCaseUpdateAPIApi.prototype.getCaseUpdateByCaseIdWithHttpInfo = function (caseId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseUpdateByCaseId(caseId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_119 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_119(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_120 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_120(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseUpdateByCaseIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseUpdateAPIApi.prototype.getCaseUpdateByCaseId = function (caseId, _options) {
        return this.getCaseUpdateByCaseIdWithHttpInfo(caseId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseUpdateAPIApi.prototype.getCaseUpdatesWithHttpInfo = function (caseId, requestedDate, status, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseUpdates(caseId, requestedDate, status, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_121 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_121(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_122 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_122(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseUpdatesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseUpdateAPIApi.prototype.getCaseUpdates = function (caseId, requestedDate, status, pageNumber, _options) {
        return this.getCaseUpdatesWithHttpInfo(caseId, requestedDate, status, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCaseUpdateAPIApi.prototype.updateCaseWithHttpInfo = function (updateCaseRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.updateCase(updateCaseRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_123 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_123(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_124 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_124(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.updateCaseWithHttpInfo(rsp); }));
        }));
    };
    ObservableCaseUpdateAPIApi.prototype.updateCase = function (updateCaseRequest, _options) {
        return this.updateCaseWithHttpInfo(updateCaseRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCaseUpdateAPIApi;
}());
exports.ObservableCaseUpdateAPIApi = ObservableCaseUpdateAPIApi;
var CourtAvailabilityAPIApi_1 = require("../apis/CourtAvailabilityAPIApi");
var ObservableCourtAvailabilityAPIApi = (function () {
    function ObservableCourtAvailabilityAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CourtAvailabilityAPIApi_1.CourtAvailabilityAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CourtAvailabilityAPIApi_1.CourtAvailabilityAPIApiResponseProcessor();
    }
    ObservableCourtAvailabilityAPIApi.prototype.getCourtCoverageWithHttpInfo = function (courtId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtCoverage(courtId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_125 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_125(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_126 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_126(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtCoverageWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtAvailabilityAPIApi.prototype.getCourtCoverage = function (courtId, _options) {
        return this.getCourtCoverageWithHttpInfo(courtId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCourtAvailabilityAPIApi;
}());
exports.ObservableCourtAvailabilityAPIApi = ObservableCourtAvailabilityAPIApi;
var CourtStandardsAPIApi_1 = require("../apis/CourtStandardsAPIApi");
var ObservableCourtStandardsAPIApi = (function () {
    function ObservableCourtStandardsAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CourtStandardsAPIApi_1.CourtStandardsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CourtStandardsAPIApi_1.CourtStandardsAPIApiResponseProcessor();
    }
    ObservableCourtStandardsAPIApi.prototype.getAppealCourtsForCourtWithHttpInfo = function (courtId, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAppealCourtsForCourt(courtId, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_127 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_127(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_128 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_128(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAppealCourtsForCourtWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAppealCourtsForCourt = function (courtId, pageNumber, sort, order, _options) {
        return this.getAppealCourtsForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAreaOfLawWithHttpInfo = function (areaOfLawId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAreaOfLaw(areaOfLawId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_129 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_129(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_130 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_130(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAreaOfLawWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAreaOfLaw = function (areaOfLawId, _options) {
        return this.getAreaOfLawWithHttpInfo(areaOfLawId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAreasOfLawWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAreasOfLaw(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_131 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_131(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_132 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_132(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAreasOfLawWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAreasOfLaw = function (q, pageNumber, sort, order, _options) {
        return this.getAreasOfLawWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypeWithHttpInfo = function (attorneyRepresentationTypeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAttorneyRepresentationType(attorneyRepresentationTypeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_133 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_133(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_134 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_134(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAttorneyRepresentationTypeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAttorneyRepresentationType = function (attorneyRepresentationTypeId, _options) {
        return this.getAttorneyRepresentationTypeWithHttpInfo(attorneyRepresentationTypeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAttorneyRepresentationTypes(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_135 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_135(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_136 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_136(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAttorneyRepresentationTypesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypes = function (q, pageNumber, sort, order, _options) {
        return this.getAttorneyRepresentationTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAttorneyTypeWithHttpInfo = function (attorneyTypeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAttorneyType(attorneyTypeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_137 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_137(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_138 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_138(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAttorneyTypeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAttorneyType = function (attorneyTypeId, _options) {
        return this.getAttorneyTypeWithHttpInfo(attorneyTypeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAttorneyTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getAttorneyTypes(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_139 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_139(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_140 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_140(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getAttorneyTypesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getAttorneyTypes = function (q, pageNumber, sort, order, _options) {
        return this.getAttorneyTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseClassWithHttpInfo = function (caseClassId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseClass(caseClassId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_141 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_141(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_142 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_142(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseClassWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseClass = function (caseClassId, _options) {
        return this.getCaseClassWithHttpInfo(caseClassId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseRelationshipTypeWithHttpInfo = function (caseRelationshipTypeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseRelationshipType(caseRelationshipTypeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_143 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_143(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_144 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_144(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseRelationshipTypeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseRelationshipType = function (caseRelationshipTypeId, _options) {
        return this.getCaseRelationshipTypeWithHttpInfo(caseRelationshipTypeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseRelationshipTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseRelationshipTypes(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_145 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_145(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_146 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_146(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseRelationshipTypesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseRelationshipTypes = function (q, pageNumber, sort, order, _options) {
        return this.getCaseRelationshipTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseStatusWithHttpInfo = function (caseStatusId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseStatus(caseStatusId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_147 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_147(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_148 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_148(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseStatusWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseStatus = function (caseStatusId, _options) {
        return this.getCaseStatusWithHttpInfo(caseStatusId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseStatusGroupWithHttpInfo = function (caseStatusGroupId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseStatusGroup(caseStatusGroupId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_149 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_149(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_150 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_150(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseStatusGroupWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseStatusGroup = function (caseStatusGroupId, _options) {
        return this.getCaseStatusGroupWithHttpInfo(caseStatusGroupId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseStatusGroupsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseStatusGroups(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_151 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_151(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_152 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_152(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseStatusGroupsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseStatusGroups = function (q, pageNumber, sort, order, _options) {
        return this.getCaseStatusGroupsWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseTypeWithHttpInfo = function (caseTypeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseType(caseTypeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_153 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_153(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_154 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_154(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseTypeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseType = function (caseTypeId, _options) {
        return this.getCaseTypeWithHttpInfo(caseTypeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseTypeGroupWithHttpInfo = function (caseTypeGroupId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseTypeGroup(caseTypeGroupId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_155 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_155(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_156 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_156(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseTypeGroupWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseTypeGroup = function (caseTypeGroupId, _options) {
        return this.getCaseTypeGroupWithHttpInfo(caseTypeGroupId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseTypeGroupsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseTypeGroups(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_157 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_157(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_158 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_158(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseTypeGroupsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseTypeGroups = function (q, pageNumber, sort, order, _options) {
        return this.getCaseTypeGroupsWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCaseTypes(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_159 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_159(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_160 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_160(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCaseTypesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCaseTypes = function (q, pageNumber, sort, order, _options) {
        return this.getCaseTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCasesClassWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCasesClass(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_161 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_161(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_162 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_162(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCasesClassWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCasesClass = function (q, pageNumber, sort, order, _options) {
        return this.getCasesClassWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCasesStatusWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCasesStatus(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_163 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_163(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_164 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_164(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCasesStatusWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCasesStatus = function (q, pageNumber, sort, order, _options) {
        return this.getCasesStatusWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCauseOfActionWithHttpInfo = function (causeOfActionId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCauseOfAction(causeOfActionId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_165 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_165(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_166 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_166(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCauseOfActionWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCauseOfAction = function (causeOfActionId, _options) {
        return this.getCauseOfActionWithHttpInfo(causeOfActionId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCauseOfActionAdditionalDataWithHttpInfo = function (causeOfActionAdditionalDataId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCauseOfActionAdditionalData(causeOfActionAdditionalDataId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_167 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_167(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_168 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_168(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCauseOfActionAdditionalDataWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCauseOfActionAdditionalData = function (causeOfActionAdditionalDataId, _options) {
        return this.getCauseOfActionAdditionalDataWithHttpInfo(causeOfActionAdditionalDataId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCauseOfActionGroupWithHttpInfo = function (causeOfActionGroupId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCauseOfActionGroup(causeOfActionGroupId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_169 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_169(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_170 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_170(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCauseOfActionGroupWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCauseOfActionGroup = function (causeOfActionGroupId, _options) {
        return this.getCauseOfActionGroupWithHttpInfo(causeOfActionGroupId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCausesOfActionWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCausesOfAction(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_171 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_171(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_172 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_172(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCausesOfActionWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCausesOfAction = function (q, pageNumber, sort, order, _options) {
        return this.getCausesOfActionWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCausesOfActionAdditionalDataWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCausesOfActionAdditionalData(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_173 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_173(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_174 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_174(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCausesOfActionAdditionalDataWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCausesOfActionAdditionalData = function (q, pageNumber, sort, order, _options) {
        return this.getCausesOfActionAdditionalDataWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCausesOfActionGroupWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCausesOfActionGroup(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_175 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_175(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_176 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_176(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCausesOfActionGroupWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCausesOfActionGroup = function (q, pageNumber, sort, order, _options) {
        return this.getCausesOfActionGroupWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeWithHttpInfo = function (chargeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCharge(chargeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_177 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_177(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_178 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_178(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCharge = function (chargeId, _options) {
        return this.getChargeWithHttpInfo(chargeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeAdditionalDataWithHttpInfo = function (chargeAdditionalDataId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getChargeAdditionalData(chargeAdditionalDataId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_179 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_179(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_180 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_180(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargeAdditionalDataWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeAdditionalData = function (chargeAdditionalDataId, _options) {
        return this.getChargeAdditionalDataWithHttpInfo(chargeAdditionalDataId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeDegreeWithHttpInfo = function (chargeDegreeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getChargeDegree(chargeDegreeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_181 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_181(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_182 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_182(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargeDegreeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeDegree = function (chargeDegreeId, _options) {
        return this.getChargeDegreeWithHttpInfo(chargeDegreeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeGroupWithHttpInfo = function (chargeGroupId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getChargeGroup(chargeGroupId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_183 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_183(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_184 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_184(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargeGroupWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeGroup = function (chargeGroupId, _options) {
        return this.getChargeGroupWithHttpInfo(chargeGroupId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeGroupsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getChargeGroups(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_185 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_185(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_186 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_186(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargeGroupsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeGroups = function (q, pageNumber, sort, order, _options) {
        return this.getChargeGroupsWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeSeverityWithHttpInfo = function (chargeSeverityId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getChargeSeverity(chargeSeverityId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_187 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_187(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_188 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_188(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargeSeverityWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargeSeverity = function (chargeSeverityId, _options) {
        return this.getChargeSeverityWithHttpInfo(chargeSeverityId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCharges(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_189 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_189(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_190 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_190(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCharges = function (q, pageNumber, sort, order, _options) {
        return this.getChargesWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargesAdditionalDataWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getChargesAdditionalData(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_191 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_191(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_192 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_192(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargesAdditionalDataWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargesAdditionalData = function (q, pageNumber, sort, order, _options) {
        return this.getChargesAdditionalDataWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargesDegreeWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getChargesDegree(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_193 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_193(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_194 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_194(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargesDegreeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargesDegree = function (q, pageNumber, sort, order, _options) {
        return this.getChargesDegreeWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargesSeverityWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getChargesSeverity(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_195 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_195(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_196 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_196(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getChargesSeverityWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getChargesSeverity = function (q, pageNumber, sort, order, _options) {
        return this.getChargesSeverityWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtWithHttpInfo = function (courtId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourt(courtId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_197 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_197(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_198 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_198(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourt = function (courtId, _options) {
        return this.getCourtWithHttpInfo(courtId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtLocationWithHttpInfo = function (courtLocationId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtLocation(courtLocationId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_199 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_199(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_200 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_200(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtLocationWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtLocation = function (courtLocationId, _options) {
        return this.getCourtLocationWithHttpInfo(courtLocationId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtLocationsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtLocations(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_201 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_201(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_202 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_202(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtLocationsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtLocations = function (q, pageNumber, sort, order, _options) {
        return this.getCourtLocationsWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtLocationsForCourtWithHttpInfo = function (courtId, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtLocationsForCourt(courtId, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_203 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_203(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_204 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_204(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtLocationsForCourtWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtLocationsForCourt = function (courtId, pageNumber, sort, order, _options) {
        return this.getCourtLocationsForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtServiceStatusWithHttpInfo = function (courtServiceStatusId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtServiceStatus(courtServiceStatusId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_205 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_205(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_206 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_206(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtServiceStatusWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtServiceStatus = function (courtServiceStatusId, _options) {
        return this.getCourtServiceStatusWithHttpInfo(courtServiceStatusId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtSystemWithHttpInfo = function (courtSystemId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtSystem(courtSystemId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_207 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_207(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_208 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_208(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtSystemWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtSystem = function (courtSystemId, _options) {
        return this.getCourtSystemWithHttpInfo(courtSystemId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtSystemsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtSystems(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_209 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_209(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_210 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_210(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtSystemsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtSystems = function (q, pageNumber, sort, order, _options) {
        return this.getCourtSystemsWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtTypeWithHttpInfo = function (courtTypeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtType(courtTypeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_211 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_211(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_212 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_212(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtTypeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtType = function (courtTypeId, _options) {
        return this.getCourtTypeWithHttpInfo(courtTypeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtTypes(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_213 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_213(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_214 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_214(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtTypesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtTypes = function (q, pageNumber, sort, order, _options) {
        return this.getCourtTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourts(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_215 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_215(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_216 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_216(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourts = function (q, pageNumber, sort, order, _options) {
        return this.getCourtsWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtsForCourtLocationWithHttpInfo = function (courtLocationId, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtsForCourtLocation(courtLocationId, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_217 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_217(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_218 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_218(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtsForCourtLocationWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtsForCourtLocation = function (courtLocationId, pageNumber, sort, order, _options) {
        return this.getCourtsForCourtLocationWithHttpInfo(courtLocationId, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtsForJurisdictionGeoWithHttpInfo = function (jurisdictionGeoId, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtsForJurisdictionGeo(jurisdictionGeoId, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_219 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_219(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_220 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_220(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtsForJurisdictionGeoWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtsForJurisdictionGeo = function (jurisdictionGeoId, pageNumber, sort, order, _options) {
        return this.getCourtsForJurisdictionGeoWithHttpInfo(jurisdictionGeoId, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtsServiceStatusWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getCourtsServiceStatus(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_221 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_221(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_222 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_222(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getCourtsServiceStatusWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getCourtsServiceStatus = function (q, pageNumber, sort, order, _options) {
        return this.getCourtsServiceStatusWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJudgeTypeWithHttpInfo = function (judgeTypeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getJudgeType(judgeTypeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_223 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_223(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_224 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_224(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getJudgeTypeWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJudgeType = function (judgeTypeId, _options) {
        return this.getJudgeTypeWithHttpInfo(judgeTypeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJudgeTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getJudgeTypes(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_225 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_225(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_226 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_226(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getJudgeTypesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJudgeTypes = function (q, pageNumber, sort, order, _options) {
        return this.getJudgeTypesWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJurisdictionGeoWithHttpInfo = function (jurisdictionGeoId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getJurisdictionGeo(jurisdictionGeoId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_227 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_227(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_228 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_228(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getJurisdictionGeoWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJurisdictionGeo = function (jurisdictionGeoId, _options) {
        return this.getJurisdictionGeoWithHttpInfo(jurisdictionGeoId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJurisdictionGeoForCourtWithHttpInfo = function (courtId, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getJurisdictionGeoForCourt(courtId, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_229 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_229(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_230 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_230(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getJurisdictionGeoForCourtWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJurisdictionGeoForCourt = function (courtId, pageNumber, sort, order, _options) {
        return this.getJurisdictionGeoForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJurisdictionsGeoWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getJurisdictionsGeo(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_231 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_231(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_232 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_232(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getJurisdictionsGeoWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getJurisdictionsGeo = function (q, pageNumber, sort, order, _options) {
        return this.getJurisdictionsGeoWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getPartyRoleWithHttpInfo = function (partyRoleId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPartyRole(partyRoleId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_233 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_233(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_234 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_234(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPartyRoleWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getPartyRole = function (partyRoleId, _options) {
        return this.getPartyRoleWithHttpInfo(partyRoleId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getPartyRoleGroupWithHttpInfo = function (partyRoleGroupId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPartyRoleGroup(partyRoleGroupId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_235 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_235(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_236 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_236(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPartyRoleGroupWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getPartyRoleGroup = function (partyRoleGroupId, _options) {
        return this.getPartyRoleGroupWithHttpInfo(partyRoleGroupId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getPartyRoleGroupsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPartyRoleGroups(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_237 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_237(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_238 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_238(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPartyRoleGroupsWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getPartyRoleGroups = function (q, pageNumber, sort, order, _options) {
        return this.getPartyRoleGroupsWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableCourtStandardsAPIApi.prototype.getPartyRolesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPartyRoles(q, pageNumber, sort, order, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_239 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_239(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_240 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_240(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPartyRolesWithHttpInfo(rsp); }));
        }));
    };
    ObservableCourtStandardsAPIApi.prototype.getPartyRoles = function (q, pageNumber, sort, order, _options) {
        return this.getPartyRolesWithHttpInfo(q, pageNumber, sort, order, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableCourtStandardsAPIApi;
}());
exports.ObservableCourtStandardsAPIApi = ObservableCourtStandardsAPIApi;
var JudgeAnalyticsAPIApi_1 = require("../apis/JudgeAnalyticsAPIApi");
var ObservableJudgeAnalyticsAPIApi = (function () {
    function ObservableJudgeAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JudgeAnalyticsAPIApi_1.JudgeAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JudgeAnalyticsAPIApi_1.JudgeAnalyticsAPIApiResponseProcessor();
    }
    ObservableJudgeAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo = function (normJudgeId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormAttorneysAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_241 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_241(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_242 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_242(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(rsp); }));
        }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormJudge = function (normJudgeId, q, pageNumber, _options) {
        return this.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.getNormJudgeByIdWithHttpInfo = function (normJudgeId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormJudgeById(normJudgeId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_243 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_243(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_244 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_244(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormJudgeByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.getNormJudgeById = function (normJudgeId, _options) {
        return this.getNormJudgeByIdWithHttpInfo(normJudgeId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo = function (normJudgeId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormLawFirmsAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_245 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_245(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_246 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_246(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(rsp); }));
        }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormJudge = function (normJudgeId, q, pageNumber, _options) {
        return this.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormJudgeWithHttpInfo = function (normJudgeId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormPartiesAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_247 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_247(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_248 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_248(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormPartiesAssociatedWithNormJudgeWithHttpInfo(rsp); }));
        }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormJudge = function (normJudgeId, q, pageNumber, _options) {
        return this.getNormPartiesAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchNormalizedJudges(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_249 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_249(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_250 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_250(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchNormalizedJudgesWithHttpInfo(rsp); }));
        }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.searchNormalizedJudges = function (q, pageNumber, _options) {
        return this.searchNormalizedJudgesWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesByIdWithHttpInfo = function (normJudgeSearchId, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchNormalizedJudgesById(normJudgeSearchId, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_251 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_251(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_252 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_252(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchNormalizedJudgesByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesById = function (normJudgeSearchId, pageNumber, _options) {
        return this.searchNormalizedJudgesByIdWithHttpInfo(normJudgeSearchId, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableJudgeAnalyticsAPIApi;
}());
exports.ObservableJudgeAnalyticsAPIApi = ObservableJudgeAnalyticsAPIApi;
var LawFirmAnalyticsAPIApi_1 = require("../apis/LawFirmAnalyticsAPIApi");
var ObservableLawFirmAnalyticsAPIApi = (function () {
    function ObservableLawFirmAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LawFirmAnalyticsAPIApi_1.LawFirmAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LawFirmAnalyticsAPIApi_1.LawFirmAnalyticsAPIApiResponseProcessor();
    }
    ObservableLawFirmAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo = function (normLawFirmId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormAttorneysAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_253 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_253(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_254 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_254(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(rsp); }));
        }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormLawFirm = function (normLawFirmId, q, pageNumber, _options) {
        return this.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo = function (normLawFirmId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormJudgesAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_255 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_255(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_256 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_256(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(rsp); }));
        }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormLawFirm = function (normLawFirmId, q, pageNumber, _options) {
        return this.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.getNormLawFirmByIdWithHttpInfo = function (normLawFirmId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormLawFirmById(normLawFirmId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_257 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_257(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_258 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_258(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormLawFirmByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.getNormLawFirmById = function (normLawFirmId, _options) {
        return this.getNormLawFirmByIdWithHttpInfo(normLawFirmId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo = function (normLawFirmId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormPartiesAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_259 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_259(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_260 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_260(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(rsp); }));
        }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormLawFirm = function (normLawFirmId, q, pageNumber, _options) {
        return this.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchNormalizedLawFirms(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_261 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_261(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_262 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_262(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchNormalizedLawFirmsWithHttpInfo(rsp); }));
        }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirms = function (q, pageNumber, _options) {
        return this.searchNormalizedLawFirmsWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsByIdWithHttpInfo = function (normLawFirmSearchId, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchNormalizedLawFirmsById(normLawFirmSearchId, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_263 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_263(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_264 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_264(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchNormalizedLawFirmsByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservableLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsById = function (normLawFirmSearchId, pageNumber, _options) {
        return this.searchNormalizedLawFirmsByIdWithHttpInfo(normLawFirmSearchId, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableLawFirmAnalyticsAPIApi;
}());
exports.ObservableLawFirmAnalyticsAPIApi = ObservableLawFirmAnalyticsAPIApi;
var PACERAPIApi_1 = require("../apis/PACERAPIApi");
var ObservablePACERAPIApi = (function () {
    function ObservablePACERAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PACERAPIApi_1.PACERAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PACERAPIApi_1.PACERAPIApiResponseProcessor();
    }
    ObservablePACERAPIApi.prototype.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.allCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_265 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_265(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_266 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_266(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.allCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.allCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.allCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_267 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_267(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_268 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_268(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.allCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.allCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.allCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.appealCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_269 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_269(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_270 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_270(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.appealCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.appealCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_271 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_271(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_272 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_272(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.appealCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bankruptcyCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_273 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_273(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_274 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_274(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.bankruptcyCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_275 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_275(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_276 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_276(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.civilCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_277 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_277(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_278 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_278(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.civilCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.civilCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_279 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_279(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_280 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_280(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.civilCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.criminalCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_281 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_281(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_282 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_282(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.criminalCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.criminalCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_283 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_283(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_284 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_284(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.criminalCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.importPacerCaseByCourtUsingCaseNumberWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, courtId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.importPacerCaseByCourtUsingCaseNumber(pacerUserId, pacerClientCode, caseNumber, courtId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_285 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_285(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_286 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_286(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.importPacerCaseByCourtUsingCaseNumberWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.importPacerCaseByCourtUsingCaseNumber = function (pacerUserId, pacerClientCode, caseNumber, courtId, _options) {
        return this.importPacerCaseByCourtUsingCaseNumberWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, courtId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.multiDistrictCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_287 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_287(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_288 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_288(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.multiDistrictCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_289 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_289(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_290 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_290(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        return this.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePACERAPIApi;
}());
exports.ObservablePACERAPIApi = ObservablePACERAPIApi;
var PACERCredentialAPIApi_1 = require("../apis/PACERCredentialAPIApi");
var ObservablePACERCredentialAPIApi = (function () {
    function ObservablePACERCredentialAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PACERCredentialAPIApi_1.PACERCredentialAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PACERCredentialAPIApi_1.PACERCredentialAPIApiResponseProcessor();
    }
    ObservablePACERCredentialAPIApi.prototype.addPacerCredentialWithHttpInfo = function (addPacerCredentialRequest, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.addPacerCredential(addPacerCredentialRequest, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_291 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_291(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_292 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_292(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.addPacerCredentialWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERCredentialAPIApi.prototype.addPacerCredential = function (addPacerCredentialRequest, _options) {
        return this.addPacerCredentialWithHttpInfo(addPacerCredentialRequest, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERCredentialAPIApi.prototype.getPacerCredentialWithHttpInfo = function (pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPacerCredential(pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_293 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_293(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_294 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_294(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPacerCredentialWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERCredentialAPIApi.prototype.getPacerCredential = function (pageNumber, _options) {
        return this.getPacerCredentialWithHttpInfo(pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERCredentialAPIApi.prototype.getPacerCredentialByIdWithHttpInfo = function (pacerUserId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getPacerCredentialById(pacerUserId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_295 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_295(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_296 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_296(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getPacerCredentialByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERCredentialAPIApi.prototype.getPacerCredentialById = function (pacerUserId, _options) {
        return this.getPacerCredentialByIdWithHttpInfo(pacerUserId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePACERCredentialAPIApi.prototype.removePacerCredentialByIdWithHttpInfo = function (pacerUserId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.removePacerCredentialById(pacerUserId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_297 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_297(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_298 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_298(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.removePacerCredentialByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservablePACERCredentialAPIApi.prototype.removePacerCredentialById = function (pacerUserId, _options) {
        return this.removePacerCredentialByIdWithHttpInfo(pacerUserId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePACERCredentialAPIApi;
}());
exports.ObservablePACERCredentialAPIApi = ObservablePACERCredentialAPIApi;
var PartyAnalyticsAPIApi_1 = require("../apis/PartyAnalyticsAPIApi");
var ObservablePartyAnalyticsAPIApi = (function () {
    function ObservablePartyAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PartyAnalyticsAPIApi_1.PartyAnalyticsAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PartyAnalyticsAPIApi_1.PartyAnalyticsAPIApiResponseProcessor();
    }
    ObservablePartyAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormPartyWithHttpInfo = function (normPartyId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormAttorneysAssociatedWithNormParty(normPartyId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_299 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_299(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_300 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_300(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormAttorneysAssociatedWithNormPartyWithHttpInfo(rsp); }));
        }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormParty = function (normPartyId, q, pageNumber, _options) {
        return this.getNormAttorneysAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormPartyWithHttpInfo = function (normPartyId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormJudgesAssociatedWithNormParty(normPartyId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_301 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_301(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_302 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_302(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormJudgesAssociatedWithNormPartyWithHttpInfo(rsp); }));
        }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormParty = function (normPartyId, q, pageNumber, _options) {
        return this.getNormJudgesAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo = function (normPartyId, q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormLawFirmsAssociatedWithNormParty(normPartyId, q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_303 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_303(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_304 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_304(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(rsp); }));
        }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormParty = function (normPartyId, q, pageNumber, _options) {
        return this.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.getNormPartyByIdWithHttpInfo = function (normPartyId, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getNormPartyById(normPartyId, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_305 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_305(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_306 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_306(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getNormPartyByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.getNormPartyById = function (normPartyId, _options) {
        return this.getNormPartyByIdWithHttpInfo(normPartyId, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.searchNormalizedPartiesWithHttpInfo = function (q, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchNormalizedParties(q, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_307 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_307(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_308 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_308(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchNormalizedPartiesWithHttpInfo(rsp); }));
        }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.searchNormalizedParties = function (q, pageNumber, _options) {
        return this.searchNormalizedPartiesWithHttpInfo(q, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.searchNormalizedPartiesByIdWithHttpInfo = function (normPartySearchId, pageNumber, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.searchNormalizedPartiesById(normPartySearchId, pageNumber, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_309 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_309(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_310 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_310(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.searchNormalizedPartiesByIdWithHttpInfo(rsp); }));
        }));
    };
    ObservablePartyAnalyticsAPIApi.prototype.searchNormalizedPartiesById = function (normPartySearchId, pageNumber, _options) {
        return this.searchNormalizedPartiesByIdWithHttpInfo(normPartySearchId, pageNumber, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservablePartyAnalyticsAPIApi;
}());
exports.ObservablePartyAnalyticsAPIApi = ObservablePartyAnalyticsAPIApi;
var UsageAPIApi_1 = require("../apis/UsageAPIApi");
var ObservableUsageAPIApi = (function () {
    function ObservableUsageAPIApi(configuration, requestFactory, responseProcessor) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsageAPIApi_1.UsageAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsageAPIApi_1.UsageAPIApiResponseProcessor();
    }
    ObservableUsageAPIApi.prototype.getBillingCyclesWithHttpInfo = function (_options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getBillingCycles(_options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_311 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_311(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_312 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_312(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getBillingCyclesWithHttpInfo(rsp); }));
        }));
    };
    ObservableUsageAPIApi.prototype.getBillingCycles = function (_options) {
        return this.getBillingCyclesWithHttpInfo(_options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableUsageAPIApi.prototype.getBillingUsageByBillingCycleWithHttpInfo = function (billingCycle, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getBillingUsageByBillingCycle(billingCycle, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_313 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_313(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_314 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_314(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getBillingUsageByBillingCycleWithHttpInfo(rsp); }));
        }));
    };
    ObservableUsageAPIApi.prototype.getBillingUsageByBillingCycle = function (billingCycle, _options) {
        return this.getBillingUsageByBillingCycleWithHttpInfo(billingCycle, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    ObservableUsageAPIApi.prototype.getDailyUsageByDateWithHttpInfo = function (date, _options) {
        var _this = this;
        var requestContextPromise = this.requestFactory.getDailyUsageByDate(date, _options);
        var middlewarePreObservable = (0, rxjsStub_1.from)(requestContextPromise);
        var _loop_315 = function (middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return middleware.pre(ctx); }));
        };
        for (var _i = 0, _a = this.configuration.middleware; _i < _a.length; _i++) {
            var middleware = _a[_i];
            _loop_315(middleware);
        }
        return middlewarePreObservable.pipe((0, rxjsStub_2.mergeMap)(function (ctx) { return _this.configuration.httpApi.send(ctx); })).
            pipe((0, rxjsStub_2.mergeMap)(function (response) {
            var middlewarePostObservable = (0, rxjsStub_1.of)(response);
            var _loop_316 = function (middleware) {
                middlewarePostObservable = middlewarePostObservable.pipe((0, rxjsStub_2.mergeMap)(function (rsp) { return middleware.post(rsp); }));
            };
            for (var _i = 0, _a = _this.configuration.middleware; _i < _a.length; _i++) {
                var middleware = _a[_i];
                _loop_316(middleware);
            }
            return middlewarePostObservable.pipe((0, rxjsStub_2.map)(function (rsp) { return _this.responseProcessor.getDailyUsageByDateWithHttpInfo(rsp); }));
        }));
    };
    ObservableUsageAPIApi.prototype.getDailyUsageByDate = function (date, _options) {
        return this.getDailyUsageByDateWithHttpInfo(date, _options).pipe((0, rxjsStub_2.map)(function (apiResponse) { return apiResponse.data; }));
    };
    return ObservableUsageAPIApi;
}());
exports.ObservableUsageAPIApi = ObservableUsageAPIApi;
//# sourceMappingURL=ObservableAPI.js.map