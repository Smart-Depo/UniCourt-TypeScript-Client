"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PACERAPIApiResponseProcessor = exports.PACERAPIApiRequestFactory = void 0;
var baseapi_1 = require("./baseapi");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
var PACERAPIApiRequestFactory = (function (_super) {
    __extends(PACERAPIApiRequestFactory, _super);
    function PACERAPIApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PACERAPIApiRequestFactory.prototype.allCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "allCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "allCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/caseSearch/allCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.allCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "allCourtsPacerCaseLocatorPartySearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "allCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/partySearch/allCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (lastName !== undefined) {
                            requestContext.setQueryParam("lastName", ObjectSerializer_1.ObjectSerializer.serialize(lastName, "string", ""));
                        }
                        if (firstName !== undefined) {
                            requestContext.setQueryParam("firstName", ObjectSerializer_1.ObjectSerializer.serialize(firstName, "string", ""));
                        }
                        if (middleName !== undefined) {
                            requestContext.setQueryParam("middleName", ObjectSerializer_1.ObjectSerializer.serialize(middleName, "string", ""));
                        }
                        if (generation !== undefined) {
                            requestContext.setQueryParam("generation", ObjectSerializer_1.ObjectSerializer.serialize(generation, "string", ""));
                        }
                        if (partyType !== undefined) {
                            requestContext.setQueryParam("partyType", ObjectSerializer_1.ObjectSerializer.serialize(partyType, "string", ""));
                        }
                        if (partyExactNameMatch !== undefined) {
                            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer_1.ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
                        }
                        if (partyRoleArray !== undefined) {
                            requestContext.setQueryParam("partyRoleArray", ObjectSerializer_1.ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseYearFrom !== undefined) {
                            requestContext.setQueryParam("caseYearFrom", ObjectSerializer_1.ObjectSerializer.serialize(caseYearFrom, "number", ""));
                        }
                        if (caseYearTo !== undefined) {
                            requestContext.setQueryParam("caseYearTo", ObjectSerializer_1.ObjectSerializer.serialize(caseYearTo, "number", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.appealCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "appealCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "appealCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/caseSearch/appealCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (natureOfSuitsArray !== undefined) {
                            requestContext.setQueryParam("natureOfSuitsArray", ObjectSerializer_1.ObjectSerializer.serialize(natureOfSuitsArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.appealCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "appealCourtsPacerCaseLocatorPartySearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "appealCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/partySearch/appealCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (lastName !== undefined) {
                            requestContext.setQueryParam("lastName", ObjectSerializer_1.ObjectSerializer.serialize(lastName, "string", ""));
                        }
                        if (firstName !== undefined) {
                            requestContext.setQueryParam("firstName", ObjectSerializer_1.ObjectSerializer.serialize(firstName, "string", ""));
                        }
                        if (middleName !== undefined) {
                            requestContext.setQueryParam("middleName", ObjectSerializer_1.ObjectSerializer.serialize(middleName, "string", ""));
                        }
                        if (generation !== undefined) {
                            requestContext.setQueryParam("generation", ObjectSerializer_1.ObjectSerializer.serialize(generation, "string", ""));
                        }
                        if (partyType !== undefined) {
                            requestContext.setQueryParam("partyType", ObjectSerializer_1.ObjectSerializer.serialize(partyType, "string", ""));
                        }
                        if (partyExactNameMatch !== undefined) {
                            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer_1.ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
                        }
                        if (partyRoleArray !== undefined) {
                            requestContext.setQueryParam("partyRoleArray", ObjectSerializer_1.ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseYearFrom !== undefined) {
                            requestContext.setQueryParam("caseYearFrom", ObjectSerializer_1.ObjectSerializer.serialize(caseYearFrom, "number", ""));
                        }
                        if (caseYearTo !== undefined) {
                            requestContext.setQueryParam("caseYearTo", ObjectSerializer_1.ObjectSerializer.serialize(caseYearTo, "number", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.bankruptcyCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "bankruptcyCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "bankruptcyCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/caseSearch/bankruptcyCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (federalBankruptcyChapterArray !== undefined) {
                            requestContext.setQueryParam("federalBankruptcyChapterArray", ObjectSerializer_1.ObjectSerializer.serialize(federalBankruptcyChapterArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (caseDischargedStartDate !== undefined) {
                            requestContext.setQueryParam("caseDischargedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseDischargedStartDate, "Date", "date-time"));
                        }
                        if (caseDischargedEndDate !== undefined) {
                            requestContext.setQueryParam("caseDischargedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseDischargedEndDate, "Date", "date-time"));
                        }
                        if (caseDismissedStartDate !== undefined) {
                            requestContext.setQueryParam("caseDismissedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseDismissedStartDate, "Date", "date-time"));
                        }
                        if (caseDismissedEndDate !== undefined) {
                            requestContext.setQueryParam("caseDismissedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseDismissedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.bankruptcyCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "bankruptcyCourtsPacerCaseLocatorPartySearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "bankruptcyCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/partySearch/bankruptcyCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (lastName !== undefined) {
                            requestContext.setQueryParam("lastName", ObjectSerializer_1.ObjectSerializer.serialize(lastName, "string", ""));
                        }
                        if (firstName !== undefined) {
                            requestContext.setQueryParam("firstName", ObjectSerializer_1.ObjectSerializer.serialize(firstName, "string", ""));
                        }
                        if (middleName !== undefined) {
                            requestContext.setQueryParam("middleName", ObjectSerializer_1.ObjectSerializer.serialize(middleName, "string", ""));
                        }
                        if (generation !== undefined) {
                            requestContext.setQueryParam("generation", ObjectSerializer_1.ObjectSerializer.serialize(generation, "string", ""));
                        }
                        if (partyType !== undefined) {
                            requestContext.setQueryParam("partyType", ObjectSerializer_1.ObjectSerializer.serialize(partyType, "string", ""));
                        }
                        if (partyExactNameMatch !== undefined) {
                            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer_1.ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
                        }
                        if (partyRoleArray !== undefined) {
                            requestContext.setQueryParam("partyRoleArray", ObjectSerializer_1.ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseYearFrom !== undefined) {
                            requestContext.setQueryParam("caseYearFrom", ObjectSerializer_1.ObjectSerializer.serialize(caseYearFrom, "number", ""));
                        }
                        if (caseYearTo !== undefined) {
                            requestContext.setQueryParam("caseYearTo", ObjectSerializer_1.ObjectSerializer.serialize(caseYearTo, "number", ""));
                        }
                        if (ssnOrEin !== undefined) {
                            requestContext.setQueryParam("ssnOrEin", ObjectSerializer_1.ObjectSerializer.serialize(ssnOrEin, "string", ""));
                        }
                        if (fourDigitSsn !== undefined) {
                            requestContext.setQueryParam("fourDigitSsn", ObjectSerializer_1.ObjectSerializer.serialize(fourDigitSsn, "string", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (caseDischargedStartDate !== undefined) {
                            requestContext.setQueryParam("caseDischargedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseDischargedStartDate, "Date", "date-time"));
                        }
                        if (caseDischargedEndDate !== undefined) {
                            requestContext.setQueryParam("caseDischargedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseDischargedEndDate, "Date", "date-time"));
                        }
                        if (caseDismissedStartDate !== undefined) {
                            requestContext.setQueryParam("caseDismissedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseDismissedStartDate, "Date", "date-time"));
                        }
                        if (caseDismissedEndDate !== undefined) {
                            requestContext.setQueryParam("caseDismissedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseDismissedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.civilCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "civilCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "civilCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/caseSearch/civilCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (natureOfSuitsArray !== undefined) {
                            requestContext.setQueryParam("natureOfSuitsArray", ObjectSerializer_1.ObjectSerializer.serialize(natureOfSuitsArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.civilCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "civilCourtsPacerCaseLocatorPartySearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "civilCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/partySearch/civilCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (lastName !== undefined) {
                            requestContext.setQueryParam("lastName", ObjectSerializer_1.ObjectSerializer.serialize(lastName, "string", ""));
                        }
                        if (firstName !== undefined) {
                            requestContext.setQueryParam("firstName", ObjectSerializer_1.ObjectSerializer.serialize(firstName, "string", ""));
                        }
                        if (middleName !== undefined) {
                            requestContext.setQueryParam("middleName", ObjectSerializer_1.ObjectSerializer.serialize(middleName, "string", ""));
                        }
                        if (generation !== undefined) {
                            requestContext.setQueryParam("generation", ObjectSerializer_1.ObjectSerializer.serialize(generation, "string", ""));
                        }
                        if (partyType !== undefined) {
                            requestContext.setQueryParam("partyType", ObjectSerializer_1.ObjectSerializer.serialize(partyType, "string", ""));
                        }
                        if (partyExactNameMatch !== undefined) {
                            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer_1.ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
                        }
                        if (partyRoleArray !== undefined) {
                            requestContext.setQueryParam("partyRoleArray", ObjectSerializer_1.ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseYearFrom !== undefined) {
                            requestContext.setQueryParam("caseYearFrom", ObjectSerializer_1.ObjectSerializer.serialize(caseYearFrom, "number", ""));
                        }
                        if (caseYearTo !== undefined) {
                            requestContext.setQueryParam("caseYearTo", ObjectSerializer_1.ObjectSerializer.serialize(caseYearTo, "number", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.criminalCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "criminalCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "criminalCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/caseSearch/criminalCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.criminalCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "criminalCourtsPacerCaseLocatorPartySearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "criminalCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/partySearch/criminalCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (lastName !== undefined) {
                            requestContext.setQueryParam("lastName", ObjectSerializer_1.ObjectSerializer.serialize(lastName, "string", ""));
                        }
                        if (firstName !== undefined) {
                            requestContext.setQueryParam("firstName", ObjectSerializer_1.ObjectSerializer.serialize(firstName, "string", ""));
                        }
                        if (middleName !== undefined) {
                            requestContext.setQueryParam("middleName", ObjectSerializer_1.ObjectSerializer.serialize(middleName, "string", ""));
                        }
                        if (generation !== undefined) {
                            requestContext.setQueryParam("generation", ObjectSerializer_1.ObjectSerializer.serialize(generation, "string", ""));
                        }
                        if (partyType !== undefined) {
                            requestContext.setQueryParam("partyType", ObjectSerializer_1.ObjectSerializer.serialize(partyType, "string", ""));
                        }
                        if (partyExactNameMatch !== undefined) {
                            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer_1.ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
                        }
                        if (partyRoleArray !== undefined) {
                            requestContext.setQueryParam("partyRoleArray", ObjectSerializer_1.ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseYearFrom !== undefined) {
                            requestContext.setQueryParam("caseYearFrom", ObjectSerializer_1.ObjectSerializer.serialize(caseYearFrom, "number", ""));
                        }
                        if (caseYearTo !== undefined) {
                            requestContext.setQueryParam("caseYearTo", ObjectSerializer_1.ObjectSerializer.serialize(caseYearTo, "number", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.importPacerCaseByCourtUsingCaseNumber = function (pacerUserId, pacerClientCode, caseNumber, courtId, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "importPacerCaseByCourtUsingCaseNumber", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "importPacerCaseByCourtUsingCaseNumber", "pacerClientCode");
                        }
                        if (caseNumber === null || caseNumber === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "importPacerCaseByCourtUsingCaseNumber", "caseNumber");
                        }
                        if (courtId === null || courtId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "importPacerCaseByCourtUsingCaseNumber", "courtId");
                        }
                        localVarPath = '/pacer/importCaseByCourtUsingCaseNumber';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (courtId !== undefined) {
                            requestContext.setQueryParam("courtId", ObjectSerializer_1.ObjectSerializer.serialize(courtId, "string", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.multiDistrictCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "multiDistrictCourtsPacerCaseLocatorCaseSearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "multiDistrictCourtsPacerCaseLocatorCaseSearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/caseSearch/multiDistrictCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (jpmlNumber !== undefined) {
                            requestContext.setQueryParam("jpmlNumber", ObjectSerializer_1.ObjectSerializer.serialize(jpmlNumber, "number", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    PACERAPIApiRequestFactory.prototype.multiDistrictCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var _config, localVarPath, requestContext, authMethod, defaultAuth;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _config = _options || this.configuration;
                        if (pacerUserId === null || pacerUserId === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "multiDistrictCourtsPacerCaseLocatorPartySearch", "pacerUserId");
                        }
                        if (pacerClientCode === null || pacerClientCode === undefined) {
                            throw new baseapi_1.RequiredError("PACERAPIApi", "multiDistrictCourtsPacerCaseLocatorPartySearch", "pacerClientCode");
                        }
                        localVarPath = '/pacerCaseLocator/partySearch/multiDistrictCourts';
                        requestContext = _config.baseServer.makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        if (pacerUserId !== undefined) {
                            requestContext.setQueryParam("pacerUserId", ObjectSerializer_1.ObjectSerializer.serialize(pacerUserId, "string", ""));
                        }
                        if (pacerClientCode !== undefined) {
                            requestContext.setQueryParam("pacerClientCode", ObjectSerializer_1.ObjectSerializer.serialize(pacerClientCode, "string", ""));
                        }
                        if (caseNumber !== undefined) {
                            requestContext.setQueryParam("caseNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseNumber, "string", ""));
                        }
                        if (jpmlNumber !== undefined) {
                            requestContext.setQueryParam("jpmlNumber", ObjectSerializer_1.ObjectSerializer.serialize(jpmlNumber, "number", ""));
                        }
                        if (pacerCaseId !== undefined) {
                            requestContext.setQueryParam("pacerCaseId", ObjectSerializer_1.ObjectSerializer.serialize(pacerCaseId, "number", ""));
                        }
                        if (lastName !== undefined) {
                            requestContext.setQueryParam("lastName", ObjectSerializer_1.ObjectSerializer.serialize(lastName, "string", ""));
                        }
                        if (firstName !== undefined) {
                            requestContext.setQueryParam("firstName", ObjectSerializer_1.ObjectSerializer.serialize(firstName, "string", ""));
                        }
                        if (middleName !== undefined) {
                            requestContext.setQueryParam("middleName", ObjectSerializer_1.ObjectSerializer.serialize(middleName, "string", ""));
                        }
                        if (generation !== undefined) {
                            requestContext.setQueryParam("generation", ObjectSerializer_1.ObjectSerializer.serialize(generation, "string", ""));
                        }
                        if (partyType !== undefined) {
                            requestContext.setQueryParam("partyType", ObjectSerializer_1.ObjectSerializer.serialize(partyType, "string", ""));
                        }
                        if (partyExactNameMatch !== undefined) {
                            requestContext.setQueryParam("partyExactNameMatch", ObjectSerializer_1.ObjectSerializer.serialize(partyExactNameMatch, "boolean", ""));
                        }
                        if (partyRoleArray !== undefined) {
                            requestContext.setQueryParam("partyRoleArray", ObjectSerializer_1.ObjectSerializer.serialize(partyRoleArray, "Array<string>", ""));
                        }
                        if (caseTitle !== undefined) {
                            requestContext.setQueryParam("caseTitle", ObjectSerializer_1.ObjectSerializer.serialize(caseTitle, "string", ""));
                        }
                        if (caseOffice !== undefined) {
                            requestContext.setQueryParam("caseOffice", ObjectSerializer_1.ObjectSerializer.serialize(caseOffice, "number", ""));
                        }
                        if (caseSequenceNumber !== undefined) {
                            requestContext.setQueryParam("caseSequenceNumber", ObjectSerializer_1.ObjectSerializer.serialize(caseSequenceNumber, "number", ""));
                        }
                        if (caseYear !== undefined) {
                            requestContext.setQueryParam("caseYear", ObjectSerializer_1.ObjectSerializer.serialize(caseYear, "number", ""));
                        }
                        if (caseTypeArray !== undefined) {
                            requestContext.setQueryParam("caseTypeArray", ObjectSerializer_1.ObjectSerializer.serialize(caseTypeArray, "Array<string>", ""));
                        }
                        if (courtRegionIdArray !== undefined) {
                            requestContext.setQueryParam("courtRegionIdArray", ObjectSerializer_1.ObjectSerializer.serialize(courtRegionIdArray, "Array<string>", ""));
                        }
                        if (caseYearFrom !== undefined) {
                            requestContext.setQueryParam("caseYearFrom", ObjectSerializer_1.ObjectSerializer.serialize(caseYearFrom, "number", ""));
                        }
                        if (caseYearTo !== undefined) {
                            requestContext.setQueryParam("caseYearTo", ObjectSerializer_1.ObjectSerializer.serialize(caseYearTo, "number", ""));
                        }
                        if (caseFiledStartDate !== undefined) {
                            requestContext.setQueryParam("caseFiledStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledStartDate, "Date", "date-time"));
                        }
                        if (caseFiledEndDate !== undefined) {
                            requestContext.setQueryParam("caseFiledEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseFiledEndDate, "Date", "date-time"));
                        }
                        if (caseTerminatedStartDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedStartDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedStartDate, "Date", "date-time"));
                        }
                        if (caseTerminatedEndDate !== undefined) {
                            requestContext.setQueryParam("caseTerminatedEndDate", ObjectSerializer_1.ObjectSerializer.serialize(caseTerminatedEndDate, "Date", "date-time"));
                        }
                        if (sortParameterQuery !== undefined) {
                            requestContext.setQueryParam("sortParameterQuery", ObjectSerializer_1.ObjectSerializer.serialize(sortParameterQuery, "string", ""));
                        }
                        if (caseStatus !== undefined) {
                            requestContext.setQueryParam("caseStatus", ObjectSerializer_1.ObjectSerializer.serialize(caseStatus, "'open' | 'closed'", ""));
                        }
                        if (pageNumber !== undefined) {
                            requestContext.setQueryParam("pageNumber", ObjectSerializer_1.ObjectSerializer.serialize(pageNumber, "number", ""));
                        }
                        authMethod = _config.authMethods["bearerAuth"];
                        if (!(authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication)) return [3, 2];
                        return [4, (authMethod === null || authMethod === void 0 ? void 0 : authMethod.applySecurityAuthentication(requestContext))];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2:
                        defaultAuth = ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null || _a === void 0 ? void 0 : _a.default) || ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) === null || _c === void 0 ? void 0 : _c.default);
                        if (!(defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication)) return [3, 4];
                        return [4, (defaultAuth === null || defaultAuth === void 0 ? void 0 : defaultAuth.applySecurityAuthentication(requestContext))];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4: return [2, requestContext];
                }
            });
        });
    };
    return PACERAPIApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.PACERAPIApiRequestFactory = PACERAPIApiRequestFactory;
var PACERAPIApiResponseProcessor = (function () {
    function PACERAPIApiResponseProcessor() {
    }
    PACERAPIApiResponseProcessor.prototype.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.allCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.importPacerCaseByCourtUsingCaseNumberWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "ImportPacerCaseByCourtUsingCaseNumber200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "ImportPacerCaseByCourtUsingCaseNumber200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorCaseSearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    PACERAPIApiResponseProcessor.prototype.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body, _a, _b, _c, _d, body, _e, _f, _g, _h, body, _j, _k, _l, _m, _o, _p;
            return __generator(this, function (_q) {
                switch (_q.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!(0, util_1.isCodeInRange)("200", response.httpStatusCode)) return [3, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 1:
                        body = _b.apply(_a, [_d.apply(_c, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 2:
                        if (!(0, util_1.isCodeInRange)("400", response.httpStatusCode)) return [3, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 3:
                        body = _f.apply(_e, [_h.apply(_g, [_q.sent(), contentType]),
                            "Exception1", ""]);
                        throw new exception_1.ApiException(response.httpStatusCode, "Invalid Input Parameter", body, response.headers);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4, response.body.text()];
                    case 5:
                        body = _k.apply(_j, [_m.apply(_l, [_q.sent(), contentType]),
                            "AllCourtsPacerCaseLocatorPartySearch200Response", ""]);
                        return [2, new http_1.HttpInfo(response.httpStatusCode, response.headers, response.body, body)];
                    case 6:
                        _o = exception_1.ApiException.bind;
                        _p = [void 0, response.httpStatusCode, "Unknown API Status Code!"];
                        return [4, response.getBodyAsAny()];
                    case 7: throw new (_o.apply(exception_1.ApiException, _p.concat([_q.sent(), response.headers])))();
                }
            });
        });
    };
    return PACERAPIApiResponseProcessor;
}());
exports.PACERAPIApiResponseProcessor = PACERAPIApiResponseProcessor;
//# sourceMappingURL=PACERAPIApi.js.map