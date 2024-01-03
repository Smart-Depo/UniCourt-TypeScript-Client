"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUsageAPIApi = exports.ObjectPartyAnalyticsAPIApi = exports.ObjectPACERCredentialAPIApi = exports.ObjectPACERAPIApi = exports.ObjectLawFirmAnalyticsAPIApi = exports.ObjectJudgeAnalyticsAPIApi = exports.ObjectCourtStandardsAPIApi = exports.ObjectCourtAvailabilityAPIApi = exports.ObjectCaseUpdateAPIApi = exports.ObjectCaseTrackingAPIApi = exports.ObjectCaseSearchAPIApi = exports.ObjectCaseExportAPIApi = exports.ObjectCaseDocumentsAPIApi = exports.ObjectCaseDocketAPIApi = exports.ObjectCaseAnalyticsAPIApi = exports.ObjectCallbackAPIApi = exports.ObjectAuthenticationAPIApi = exports.ObjectAttorneyAnalyticsAPIApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectAttorneyAnalyticsAPIApi = (function () {
    function ObjectAttorneyAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAttorneyAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAttorneyAnalyticsAPIApi.prototype.getNormAttorneyByIdWithHttpInfo = function (param, options) {
        return this.api.getNormAttorneyByIdWithHttpInfo(param.normAttorneyId, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.getNormAttorneyById = function (param, options) {
        return this.api.getNormAttorneyById(param.normAttorneyId, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo = function (param, options) {
        return this.api.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(param.normAttorneyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormAttorney = function (param, options) {
        return this.api.getNormJudgesAssociatedWithNormAttorney(param.normAttorneyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo = function (param, options) {
        return this.api.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(param.normAttorneyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormAttorney = function (param, options) {
        return this.api.getNormLawFirmsAssociatedWithNormAttorney(param.normAttorneyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo = function (param, options) {
        return this.api.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(param.normAttorneyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormAttorney = function (param, options) {
        return this.api.getNormPartiesAssociatedWithNormAttorney(param.normAttorneyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchNormalizedAttorneysWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneys = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchNormalizedAttorneys(param.q, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysByIdWithHttpInfo = function (param, options) {
        return this.api.searchNormalizedAttorneysByIdWithHttpInfo(param.normAttorneySearchId, param.pageNumber, options).toPromise();
    };
    ObjectAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysById = function (param, options) {
        return this.api.searchNormalizedAttorneysById(param.normAttorneySearchId, param.pageNumber, options).toPromise();
    };
    return ObjectAttorneyAnalyticsAPIApi;
}());
exports.ObjectAttorneyAnalyticsAPIApi = ObjectAttorneyAnalyticsAPIApi;
var ObservableAPI_2 = require("./ObservableAPI");
var ObjectAuthenticationAPIApi = (function () {
    function ObjectAuthenticationAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAuthenticationAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectAuthenticationAPIApi.prototype.generateNewTokenWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.generateNewTokenWithHttpInfo(param.generateNewTokenRequest, options).toPromise();
    };
    ObjectAuthenticationAPIApi.prototype.generateNewToken = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.generateNewToken(param.generateNewTokenRequest, options).toPromise();
    };
    ObjectAuthenticationAPIApi.prototype.invalidateAllTokensWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.invalidateAllTokensWithHttpInfo(param.generateNewTokenRequest, options).toPromise();
    };
    ObjectAuthenticationAPIApi.prototype.invalidateAllTokens = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.invalidateAllTokens(param.generateNewTokenRequest, options).toPromise();
    };
    ObjectAuthenticationAPIApi.prototype.invalidateTokenWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.invalidateTokenWithHttpInfo(param.invalidateTokenRequest, options).toPromise();
    };
    ObjectAuthenticationAPIApi.prototype.invalidateToken = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.invalidateToken(param.invalidateTokenRequest, options).toPromise();
    };
    ObjectAuthenticationAPIApi.prototype.listAllTokenIdsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAllTokenIdsWithHttpInfo(param.generateNewTokenRequest, options).toPromise();
    };
    ObjectAuthenticationAPIApi.prototype.listAllTokenIds = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.listAllTokenIds(param.generateNewTokenRequest, options).toPromise();
    };
    return ObjectAuthenticationAPIApi;
}());
exports.ObjectAuthenticationAPIApi = ObjectAuthenticationAPIApi;
var ObservableAPI_3 = require("./ObservableAPI");
var ObjectCallbackAPIApi = (function () {
    function ObjectCallbackAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableCallbackAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCallbackAPIApi.prototype.getCallbacksWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCallbacksWithHttpInfo(param.date, param.status, options).toPromise();
    };
    ObjectCallbackAPIApi.prototype.getCallbacks = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCallbacks(param.date, param.status, options).toPromise();
    };
    return ObjectCallbackAPIApi;
}());
exports.ObjectCallbackAPIApi = ObjectCallbackAPIApi;
var ObservableAPI_4 = require("./ObservableAPI");
var ObjectCaseAnalyticsAPIApi = (function () {
    function ObjectCaseAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableCaseAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByAreaOfLawWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByAreaOfLawWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByAreaOfLaw = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByAreaOfLaw(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseClassWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCaseClassWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseClass = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCaseClass(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo = function (param, options) {
        return this.api.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(param.groupBy, param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseFiledDate = function (param, options) {
        return this.api.getCaseCountAnalyticsByCaseFiledDate(param.groupBy, param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCaseTypeWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseType = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCaseType(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeGroup = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCaseTypeGroup(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCourtWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourt = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCourt(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtLocationWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCourtLocationWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtLocation = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCourtLocation(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtSystemWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCourtSystemWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtSystem = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCourtSystem(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtTypeWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCourtTypeWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtType = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByCourtType(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByJurisdictionGeo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByJurisdictionGeo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormAttorneyWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByNormAttorneyWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormAttorney = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByNormAttorney(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormJudgeWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByNormJudgeWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormJudge = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByNormJudge(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormLawFirmWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByNormLawFirmWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormLawFirm = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByNormLawFirm(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormPartyWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByNormPartyWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormParty = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByNormParty(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo = function (param, options) {
        return this.api.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(param.normAttorneyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney = function (param, options) {
        return this.api.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney(param.normAttorneyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo = function (param, options) {
        return this.api.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(param.normLawFirmId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm = function (param, options) {
        return this.api.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm(param.normLawFirmId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo = function (param, options) {
        return this.api.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(param.normPartyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormPartyForANormParty = function (param, options) {
        return this.api.getCaseCountAnalyticsByOpposingNormPartyForANormParty(param.normPartyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByPartyRoleWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRole = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByPartyRole(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleGroup = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseCountAnalyticsByPartyRoleGroup(param.q, param.pageNumber, options).toPromise();
    };
    return ObjectCaseAnalyticsAPIApi;
}());
exports.ObjectCaseAnalyticsAPIApi = ObjectCaseAnalyticsAPIApi;
var ObservableAPI_5 = require("./ObservableAPI");
var ObjectCaseDocketAPIApi = (function () {
    function ObjectCaseDocketAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCaseDocketAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCaseDocketAPIApi.prototype.getAttorneyAssociatedPartiesWithHttpInfo = function (param, options) {
        return this.api.getAttorneyAssociatedPartiesWithHttpInfo(param.attorneyId, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getAttorneyAssociatedParties = function (param, options) {
        return this.api.getAttorneyAssociatedParties(param.attorneyId, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getAttorneyByIdWithHttpInfo = function (param, options) {
        return this.api.getAttorneyByIdWithHttpInfo(param.attorneyId, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getAttorneyById = function (param, options) {
        return this.api.getAttorneyById(param.attorneyId, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseWithHttpInfo = function (param, options) {
        return this.api.getCaseWithHttpInfo(param.caseId, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCase = function (param, options) {
        return this.api.getCase(param.caseId, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseAttorneysWithHttpInfo = function (param, options) {
        return this.api.getCaseAttorneysWithHttpInfo(param.caseId, param.isVisible, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseAttorneys = function (param, options) {
        return this.api.getCaseAttorneys(param.caseId, param.isVisible, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseDocketEntriesWithHttpInfo = function (param, options) {
        return this.api.getCaseDocketEntriesWithHttpInfo(param.caseId, param.docketNumber, param.sortBy, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseDocketEntries = function (param, options) {
        return this.api.getCaseDocketEntries(param.caseId, param.docketNumber, param.sortBy, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseHearingsWithHttpInfo = function (param, options) {
        return this.api.getCaseHearingsWithHttpInfo(param.caseId, param.sortBy, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseHearings = function (param, options) {
        return this.api.getCaseHearings(param.caseId, param.sortBy, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseJudgesWithHttpInfo = function (param, options) {
        return this.api.getCaseJudgesWithHttpInfo(param.caseId, param.isVisible, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseJudges = function (param, options) {
        return this.api.getCaseJudges(param.caseId, param.isVisible, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCasePartiesWithHttpInfo = function (param, options) {
        return this.api.getCasePartiesWithHttpInfo(param.caseId, param.isVisible, param.pageNumber, param.partyRoleId, param.partyRoleGroupId, param.attorneyRepresentationTypeId, param.partyClassificationType, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseParties = function (param, options) {
        return this.api.getCaseParties(param.caseId, param.isVisible, param.pageNumber, param.partyRoleId, param.partyRoleGroupId, param.attorneyRepresentationTypeId, param.partyClassificationType, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseRelatedCasesWithHttpInfo = function (param, options) {
        return this.api.getCaseRelatedCasesWithHttpInfo(param.caseId, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getCaseRelatedCases = function (param, options) {
        return this.api.getCaseRelatedCases(param.caseId, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getJudgeByIdWithHttpInfo = function (param, options) {
        return this.api.getJudgeByIdWithHttpInfo(param.judgeId, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getJudgeById = function (param, options) {
        return this.api.getJudgeById(param.judgeId, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getPartyAssociatedAttorneysWithHttpInfo = function (param, options) {
        return this.api.getPartyAssociatedAttorneysWithHttpInfo(param.partyId, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getPartyAssociatedAttorneys = function (param, options) {
        return this.api.getPartyAssociatedAttorneys(param.partyId, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getPartyByIdWithHttpInfo = function (param, options) {
        return this.api.getPartyByIdWithHttpInfo(param.partyId, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getPartyById = function (param, options) {
        return this.api.getPartyById(param.partyId, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getPrimaryDocumentsForDocketEntriesWithHttpInfo = function (param, options) {
        return this.api.getPrimaryDocumentsForDocketEntriesWithHttpInfo(param.caseId, param.docketNumber, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getPrimaryDocumentsForDocketEntries = function (param, options) {
        return this.api.getPrimaryDocumentsForDocketEntries(param.caseId, param.docketNumber, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getSecondaryDocumentsForDocketEntriesWithHttpInfo = function (param, options) {
        return this.api.getSecondaryDocumentsForDocketEntriesWithHttpInfo(param.caseId, param.docketNumber, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocketAPIApi.prototype.getSecondaryDocumentsForDocketEntries = function (param, options) {
        return this.api.getSecondaryDocumentsForDocketEntries(param.caseId, param.docketNumber, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.pageNumber, options).toPromise();
    };
    return ObjectCaseDocketAPIApi;
}());
exports.ObjectCaseDocketAPIApi = ObjectCaseDocketAPIApi;
var ObservableAPI_6 = require("./ObservableAPI");
var ObjectCaseDocumentsAPIApi = (function () {
    function ObjectCaseDocumentsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableCaseDocumentsAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCaseDocumentsAPIApi.prototype.getCaseDocumentDownloadByIdWithHttpInfo = function (param, options) {
        return this.api.getCaseDocumentDownloadByIdWithHttpInfo(param.caseDocumentId, param.isPreviewDocument, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getCaseDocumentDownloadById = function (param, options) {
        return this.api.getCaseDocumentDownloadById(param.caseDocumentId, param.isPreviewDocument, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbackByIdWithHttpInfo = function (param, options) {
        return this.api.getCaseDocumentOrderCallbackByIdWithHttpInfo(param.caseDocumentOrderCallbackId, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbackById = function (param, options) {
        return this.api.getCaseDocumentOrderCallbackById(param.caseDocumentOrderCallbackId, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbacksWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseDocumentOrderCallbacksWithHttpInfo(param.date, param.status, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbacks = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseDocumentOrderCallbacks(param.date, param.status, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getCaseDocumentsWithHttpInfo = function (param, options) {
        return this.api.getCaseDocumentsWithHttpInfo(param.caseId, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.firstFetchDate, param.sortBy, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getCaseDocuments = function (param, options) {
        return this.api.getCaseDocuments(param.caseId, param.inLibrary, param.afterFirstFetchDate, param.libraryDate, param.firstFetchDate, param.sortBy, param.pageNumber, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getDocumentByIdWithHttpInfo = function (param, options) {
        return this.api.getDocumentByIdWithHttpInfo(param.caseDocumentId, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.getDocumentById = function (param, options) {
        return this.api.getDocumentById(param.caseDocumentId, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.orderCaseDocumentWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.orderCaseDocumentWithHttpInfo(param.orderCaseDocumentRequest, options).toPromise();
    };
    ObjectCaseDocumentsAPIApi.prototype.orderCaseDocument = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.orderCaseDocument(param.orderCaseDocumentRequest, options).toPromise();
    };
    return ObjectCaseDocumentsAPIApi;
}());
exports.ObjectCaseDocumentsAPIApi = ObjectCaseDocumentsAPIApi;
var ObservableAPI_7 = require("./ObservableAPI");
var ObjectCaseExportAPIApi = (function () {
    function ObjectCaseExportAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableCaseExportAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCaseExportAPIApi.prototype.exportCaseWithHttpInfo = function (param, options) {
        return this.api.exportCaseWithHttpInfo(param.caseId, options).toPromise();
    };
    ObjectCaseExportAPIApi.prototype.exportCase = function (param, options) {
        return this.api.exportCase(param.caseId, options).toPromise();
    };
    ObjectCaseExportAPIApi.prototype.getCaseExportCallbackByIdWithHttpInfo = function (param, options) {
        return this.api.getCaseExportCallbackByIdWithHttpInfo(param.caseExportCallbackId, options).toPromise();
    };
    ObjectCaseExportAPIApi.prototype.getCaseExportCallbackById = function (param, options) {
        return this.api.getCaseExportCallbackById(param.caseExportCallbackId, options).toPromise();
    };
    ObjectCaseExportAPIApi.prototype.getCaseExportCallbacksWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseExportCallbacksWithHttpInfo(param.date, param.status, param.pageNumber, options).toPromise();
    };
    ObjectCaseExportAPIApi.prototype.getCaseExportCallbacks = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseExportCallbacks(param.date, param.status, param.pageNumber, options).toPromise();
    };
    return ObjectCaseExportAPIApi;
}());
exports.ObjectCaseExportAPIApi = ObjectCaseExportAPIApi;
var ObservableAPI_8 = require("./ObservableAPI");
var ObjectCaseSearchAPIApi = (function () {
    function ObjectCaseSearchAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableCaseSearchAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCaseSearchAPIApi.prototype.searchCasesWithHttpInfo = function (param, options) {
        return this.api.searchCasesWithHttpInfo(param.q, param.sort, param.order, param.pageNumber, options).toPromise();
    };
    ObjectCaseSearchAPIApi.prototype.searchCases = function (param, options) {
        return this.api.searchCases(param.q, param.sort, param.order, param.pageNumber, options).toPromise();
    };
    ObjectCaseSearchAPIApi.prototype.searchCasesByIdWithHttpInfo = function (param, options) {
        return this.api.searchCasesByIdWithHttpInfo(param.caseSearchId, param.pageNumber, options).toPromise();
    };
    ObjectCaseSearchAPIApi.prototype.searchCasesById = function (param, options) {
        return this.api.searchCasesById(param.caseSearchId, param.pageNumber, options).toPromise();
    };
    return ObjectCaseSearchAPIApi;
}());
exports.ObjectCaseSearchAPIApi = ObjectCaseSearchAPIApi;
var ObservableAPI_9 = require("./ObservableAPI");
var ObjectCaseTrackingAPIApi = (function () {
    function ObjectCaseTrackingAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableCaseTrackingAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCaseTrackingAPIApi.prototype.getCaseTrackByIdWithHttpInfo = function (param, options) {
        return this.api.getCaseTrackByIdWithHttpInfo(param.caseId, options).toPromise();
    };
    ObjectCaseTrackingAPIApi.prototype.getCaseTrackById = function (param, options) {
        return this.api.getCaseTrackById(param.caseId, options).toPromise();
    };
    ObjectCaseTrackingAPIApi.prototype.getCaseTracksWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseTracksWithHttpInfo(param.lastFetchDate, param.lastFetchDateWithUpdates, param.pageNumber, options).toPromise();
    };
    ObjectCaseTrackingAPIApi.prototype.getCaseTracks = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseTracks(param.lastFetchDate, param.lastFetchDateWithUpdates, param.pageNumber, options).toPromise();
    };
    ObjectCaseTrackingAPIApi.prototype.removeCaseTrackByIdWithHttpInfo = function (param, options) {
        return this.api.removeCaseTrackByIdWithHttpInfo(param.caseId, options).toPromise();
    };
    ObjectCaseTrackingAPIApi.prototype.removeCaseTrackById = function (param, options) {
        return this.api.removeCaseTrackById(param.caseId, options).toPromise();
    };
    ObjectCaseTrackingAPIApi.prototype.trackCaseWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.trackCaseWithHttpInfo(param.trackCaseRequest, options).toPromise();
    };
    ObjectCaseTrackingAPIApi.prototype.trackCase = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.trackCase(param.trackCaseRequest, options).toPromise();
    };
    return ObjectCaseTrackingAPIApi;
}());
exports.ObjectCaseTrackingAPIApi = ObjectCaseTrackingAPIApi;
var ObservableAPI_10 = require("./ObservableAPI");
var ObjectCaseUpdateAPIApi = (function () {
    function ObjectCaseUpdateAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableCaseUpdateAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCaseUpdateAPIApi.prototype.getCaseUpdateByCaseIdWithHttpInfo = function (param, options) {
        return this.api.getCaseUpdateByCaseIdWithHttpInfo(param.caseId, options).toPromise();
    };
    ObjectCaseUpdateAPIApi.prototype.getCaseUpdateByCaseId = function (param, options) {
        return this.api.getCaseUpdateByCaseId(param.caseId, options).toPromise();
    };
    ObjectCaseUpdateAPIApi.prototype.getCaseUpdatesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseUpdatesWithHttpInfo(param.caseId, param.requestedDate, param.status, param.pageNumber, options).toPromise();
    };
    ObjectCaseUpdateAPIApi.prototype.getCaseUpdates = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseUpdates(param.caseId, param.requestedDate, param.status, param.pageNumber, options).toPromise();
    };
    ObjectCaseUpdateAPIApi.prototype.updateCaseWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.updateCaseWithHttpInfo(param.updateCaseRequest, options).toPromise();
    };
    ObjectCaseUpdateAPIApi.prototype.updateCase = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.updateCase(param.updateCaseRequest, options).toPromise();
    };
    return ObjectCaseUpdateAPIApi;
}());
exports.ObjectCaseUpdateAPIApi = ObjectCaseUpdateAPIApi;
var ObservableAPI_11 = require("./ObservableAPI");
var ObjectCourtAvailabilityAPIApi = (function () {
    function ObjectCourtAvailabilityAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableCourtAvailabilityAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCourtAvailabilityAPIApi.prototype.getCourtCoverageWithHttpInfo = function (param, options) {
        return this.api.getCourtCoverageWithHttpInfo(param.courtId, options).toPromise();
    };
    ObjectCourtAvailabilityAPIApi.prototype.getCourtCoverage = function (param, options) {
        return this.api.getCourtCoverage(param.courtId, options).toPromise();
    };
    return ObjectCourtAvailabilityAPIApi;
}());
exports.ObjectCourtAvailabilityAPIApi = ObjectCourtAvailabilityAPIApi;
var ObservableAPI_12 = require("./ObservableAPI");
var ObjectCourtStandardsAPIApi = (function () {
    function ObjectCourtStandardsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableCourtStandardsAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectCourtStandardsAPIApi.prototype.getAppealCourtsForCourtWithHttpInfo = function (param, options) {
        return this.api.getAppealCourtsForCourtWithHttpInfo(param.courtId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAppealCourtsForCourt = function (param, options) {
        return this.api.getAppealCourtsForCourt(param.courtId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAreaOfLawWithHttpInfo = function (param, options) {
        return this.api.getAreaOfLawWithHttpInfo(param.areaOfLawId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAreaOfLaw = function (param, options) {
        return this.api.getAreaOfLaw(param.areaOfLawId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAreasOfLawWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAreasOfLawWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAreasOfLaw = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAreasOfLaw(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypeWithHttpInfo = function (param, options) {
        return this.api.getAttorneyRepresentationTypeWithHttpInfo(param.attorneyRepresentationTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAttorneyRepresentationType = function (param, options) {
        return this.api.getAttorneyRepresentationType(param.attorneyRepresentationTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAttorneyRepresentationTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypes = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAttorneyRepresentationTypes(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAttorneyTypeWithHttpInfo = function (param, options) {
        return this.api.getAttorneyTypeWithHttpInfo(param.attorneyTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAttorneyType = function (param, options) {
        return this.api.getAttorneyType(param.attorneyTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAttorneyTypesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAttorneyTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getAttorneyTypes = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getAttorneyTypes(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseClassWithHttpInfo = function (param, options) {
        return this.api.getCaseClassWithHttpInfo(param.caseClassId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseClass = function (param, options) {
        return this.api.getCaseClass(param.caseClassId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseRelationshipTypeWithHttpInfo = function (param, options) {
        return this.api.getCaseRelationshipTypeWithHttpInfo(param.caseRelationshipTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseRelationshipType = function (param, options) {
        return this.api.getCaseRelationshipType(param.caseRelationshipTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseRelationshipTypesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseRelationshipTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseRelationshipTypes = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseRelationshipTypes(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseStatusWithHttpInfo = function (param, options) {
        return this.api.getCaseStatusWithHttpInfo(param.caseStatusId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseStatus = function (param, options) {
        return this.api.getCaseStatus(param.caseStatusId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseStatusGroupWithHttpInfo = function (param, options) {
        return this.api.getCaseStatusGroupWithHttpInfo(param.caseStatusGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseStatusGroup = function (param, options) {
        return this.api.getCaseStatusGroup(param.caseStatusGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseStatusGroupsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseStatusGroupsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseStatusGroups = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseStatusGroups(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseTypeWithHttpInfo = function (param, options) {
        return this.api.getCaseTypeWithHttpInfo(param.caseTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseType = function (param, options) {
        return this.api.getCaseType(param.caseTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseTypeGroupWithHttpInfo = function (param, options) {
        return this.api.getCaseTypeGroupWithHttpInfo(param.caseTypeGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseTypeGroup = function (param, options) {
        return this.api.getCaseTypeGroup(param.caseTypeGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseTypeGroupsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseTypeGroupsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseTypeGroups = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseTypeGroups(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseTypesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCaseTypes = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCaseTypes(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCasesClassWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCasesClassWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCasesClass = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCasesClass(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCasesStatusWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCasesStatusWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCasesStatus = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCasesStatus(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCauseOfActionWithHttpInfo = function (param, options) {
        return this.api.getCauseOfActionWithHttpInfo(param.causeOfActionId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCauseOfAction = function (param, options) {
        return this.api.getCauseOfAction(param.causeOfActionId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCauseOfActionAdditionalDataWithHttpInfo = function (param, options) {
        return this.api.getCauseOfActionAdditionalDataWithHttpInfo(param.causeOfActionAdditionalDataId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCauseOfActionAdditionalData = function (param, options) {
        return this.api.getCauseOfActionAdditionalData(param.causeOfActionAdditionalDataId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCauseOfActionGroupWithHttpInfo = function (param, options) {
        return this.api.getCauseOfActionGroupWithHttpInfo(param.causeOfActionGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCauseOfActionGroup = function (param, options) {
        return this.api.getCauseOfActionGroup(param.causeOfActionGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCausesOfActionWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCausesOfActionWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCausesOfAction = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCausesOfAction(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCausesOfActionAdditionalDataWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCausesOfActionAdditionalDataWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCausesOfActionAdditionalData = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCausesOfActionAdditionalData(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCausesOfActionGroupWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCausesOfActionGroupWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCausesOfActionGroup = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCausesOfActionGroup(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeWithHttpInfo = function (param, options) {
        return this.api.getChargeWithHttpInfo(param.chargeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCharge = function (param, options) {
        return this.api.getCharge(param.chargeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeAdditionalDataWithHttpInfo = function (param, options) {
        return this.api.getChargeAdditionalDataWithHttpInfo(param.chargeAdditionalDataId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeAdditionalData = function (param, options) {
        return this.api.getChargeAdditionalData(param.chargeAdditionalDataId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeDegreeWithHttpInfo = function (param, options) {
        return this.api.getChargeDegreeWithHttpInfo(param.chargeDegreeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeDegree = function (param, options) {
        return this.api.getChargeDegree(param.chargeDegreeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeGroupWithHttpInfo = function (param, options) {
        return this.api.getChargeGroupWithHttpInfo(param.chargeGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeGroup = function (param, options) {
        return this.api.getChargeGroup(param.chargeGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeGroupsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargeGroupsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeGroups = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargeGroups(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeSeverityWithHttpInfo = function (param, options) {
        return this.api.getChargeSeverityWithHttpInfo(param.chargeSeverityId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargeSeverity = function (param, options) {
        return this.api.getChargeSeverity(param.chargeSeverityId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCharges = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCharges(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargesAdditionalDataWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargesAdditionalDataWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargesAdditionalData = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargesAdditionalData(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargesDegreeWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargesDegreeWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargesDegree = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargesDegree(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargesSeverityWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargesSeverityWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getChargesSeverity = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getChargesSeverity(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtWithHttpInfo = function (param, options) {
        return this.api.getCourtWithHttpInfo(param.courtId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourt = function (param, options) {
        return this.api.getCourt(param.courtId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtLocationWithHttpInfo = function (param, options) {
        return this.api.getCourtLocationWithHttpInfo(param.courtLocationId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtLocation = function (param, options) {
        return this.api.getCourtLocation(param.courtLocationId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtLocationsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtLocationsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtLocations = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtLocations(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtLocationsForCourtWithHttpInfo = function (param, options) {
        return this.api.getCourtLocationsForCourtWithHttpInfo(param.courtId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtLocationsForCourt = function (param, options) {
        return this.api.getCourtLocationsForCourt(param.courtId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtServiceStatusWithHttpInfo = function (param, options) {
        return this.api.getCourtServiceStatusWithHttpInfo(param.courtServiceStatusId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtServiceStatus = function (param, options) {
        return this.api.getCourtServiceStatus(param.courtServiceStatusId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtSystemWithHttpInfo = function (param, options) {
        return this.api.getCourtSystemWithHttpInfo(param.courtSystemId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtSystem = function (param, options) {
        return this.api.getCourtSystem(param.courtSystemId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtSystemsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtSystemsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtSystems = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtSystems(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtTypeWithHttpInfo = function (param, options) {
        return this.api.getCourtTypeWithHttpInfo(param.courtTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtType = function (param, options) {
        return this.api.getCourtType(param.courtTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtTypesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtTypes = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtTypes(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourts = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourts(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtsForCourtLocationWithHttpInfo = function (param, options) {
        return this.api.getCourtsForCourtLocationWithHttpInfo(param.courtLocationId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtsForCourtLocation = function (param, options) {
        return this.api.getCourtsForCourtLocation(param.courtLocationId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtsForJurisdictionGeoWithHttpInfo = function (param, options) {
        return this.api.getCourtsForJurisdictionGeoWithHttpInfo(param.jurisdictionGeoId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtsForJurisdictionGeo = function (param, options) {
        return this.api.getCourtsForJurisdictionGeo(param.jurisdictionGeoId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtsServiceStatusWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtsServiceStatusWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getCourtsServiceStatus = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getCourtsServiceStatus(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJudgeTypeWithHttpInfo = function (param, options) {
        return this.api.getJudgeTypeWithHttpInfo(param.judgeTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJudgeType = function (param, options) {
        return this.api.getJudgeType(param.judgeTypeId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJudgeTypesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getJudgeTypesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJudgeTypes = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getJudgeTypes(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJurisdictionGeoWithHttpInfo = function (param, options) {
        return this.api.getJurisdictionGeoWithHttpInfo(param.jurisdictionGeoId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJurisdictionGeo = function (param, options) {
        return this.api.getJurisdictionGeo(param.jurisdictionGeoId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJurisdictionGeoForCourtWithHttpInfo = function (param, options) {
        return this.api.getJurisdictionGeoForCourtWithHttpInfo(param.courtId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJurisdictionGeoForCourt = function (param, options) {
        return this.api.getJurisdictionGeoForCourt(param.courtId, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJurisdictionsGeoWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getJurisdictionsGeoWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getJurisdictionsGeo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getJurisdictionsGeo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getPartyRoleWithHttpInfo = function (param, options) {
        return this.api.getPartyRoleWithHttpInfo(param.partyRoleId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getPartyRole = function (param, options) {
        return this.api.getPartyRole(param.partyRoleId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getPartyRoleGroupWithHttpInfo = function (param, options) {
        return this.api.getPartyRoleGroupWithHttpInfo(param.partyRoleGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getPartyRoleGroup = function (param, options) {
        return this.api.getPartyRoleGroup(param.partyRoleGroupId, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getPartyRoleGroupsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getPartyRoleGroupsWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getPartyRoleGroups = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getPartyRoleGroups(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getPartyRolesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getPartyRolesWithHttpInfo(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    ObjectCourtStandardsAPIApi.prototype.getPartyRoles = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getPartyRoles(param.q, param.pageNumber, param.sort, param.order, options).toPromise();
    };
    return ObjectCourtStandardsAPIApi;
}());
exports.ObjectCourtStandardsAPIApi = ObjectCourtStandardsAPIApi;
var ObservableAPI_13 = require("./ObservableAPI");
var ObjectJudgeAnalyticsAPIApi = (function () {
    function ObjectJudgeAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableJudgeAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectJudgeAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo = function (param, options) {
        return this.api.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(param.normJudgeId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormJudge = function (param, options) {
        return this.api.getNormAttorneysAssociatedWithNormJudge(param.normJudgeId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.getNormJudgeByIdWithHttpInfo = function (param, options) {
        return this.api.getNormJudgeByIdWithHttpInfo(param.normJudgeId, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.getNormJudgeById = function (param, options) {
        return this.api.getNormJudgeById(param.normJudgeId, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo = function (param, options) {
        return this.api.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(param.normJudgeId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormJudge = function (param, options) {
        return this.api.getNormLawFirmsAssociatedWithNormJudge(param.normJudgeId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormJudgeWithHttpInfo = function (param, options) {
        return this.api.getNormPartiesAssociatedWithNormJudgeWithHttpInfo(param.normJudgeId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormJudge = function (param, options) {
        return this.api.getNormPartiesAssociatedWithNormJudge(param.normJudgeId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchNormalizedJudgesWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.searchNormalizedJudges = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchNormalizedJudges(param.q, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesByIdWithHttpInfo = function (param, options) {
        return this.api.searchNormalizedJudgesByIdWithHttpInfo(param.normJudgeSearchId, param.pageNumber, options).toPromise();
    };
    ObjectJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesById = function (param, options) {
        return this.api.searchNormalizedJudgesById(param.normJudgeSearchId, param.pageNumber, options).toPromise();
    };
    return ObjectJudgeAnalyticsAPIApi;
}());
exports.ObjectJudgeAnalyticsAPIApi = ObjectJudgeAnalyticsAPIApi;
var ObservableAPI_14 = require("./ObservableAPI");
var ObjectLawFirmAnalyticsAPIApi = (function () {
    function ObjectLawFirmAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableLawFirmAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectLawFirmAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo = function (param, options) {
        return this.api.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(param.normLawFirmId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormLawFirm = function (param, options) {
        return this.api.getNormAttorneysAssociatedWithNormLawFirm(param.normLawFirmId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo = function (param, options) {
        return this.api.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(param.normLawFirmId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormLawFirm = function (param, options) {
        return this.api.getNormJudgesAssociatedWithNormLawFirm(param.normLawFirmId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.getNormLawFirmByIdWithHttpInfo = function (param, options) {
        return this.api.getNormLawFirmByIdWithHttpInfo(param.normLawFirmId, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.getNormLawFirmById = function (param, options) {
        return this.api.getNormLawFirmById(param.normLawFirmId, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo = function (param, options) {
        return this.api.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(param.normLawFirmId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormLawFirm = function (param, options) {
        return this.api.getNormPartiesAssociatedWithNormLawFirm(param.normLawFirmId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchNormalizedLawFirmsWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirms = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchNormalizedLawFirms(param.q, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsByIdWithHttpInfo = function (param, options) {
        return this.api.searchNormalizedLawFirmsByIdWithHttpInfo(param.normLawFirmSearchId, param.pageNumber, options).toPromise();
    };
    ObjectLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsById = function (param, options) {
        return this.api.searchNormalizedLawFirmsById(param.normLawFirmSearchId, param.pageNumber, options).toPromise();
    };
    return ObjectLawFirmAnalyticsAPIApi;
}());
exports.ObjectLawFirmAnalyticsAPIApi = ObjectLawFirmAnalyticsAPIApi;
var ObservableAPI_15 = require("./ObservableAPI");
var ObjectPACERAPIApi = (function () {
    function ObjectPACERAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservablePACERAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPACERAPIApi.prototype.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (param, options) {
        return this.api.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.allCourtsPacerCaseLocatorCaseSearch = function (param, options) {
        return this.api.allCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.allCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (param, options) {
        return this.api.allCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.allCourtsPacerCaseLocatorPartySearch = function (param, options) {
        return this.api.allCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (param, options) {
        return this.api.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.natureOfSuitsArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.appealCourtsPacerCaseLocatorCaseSearch = function (param, options) {
        return this.api.appealCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.natureOfSuitsArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (param, options) {
        return this.api.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.appealCourtsPacerCaseLocatorPartySearch = function (param, options) {
        return this.api.appealCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (param, options) {
        return this.api.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.federalBankruptcyChapterArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.caseDischargedStartDate, param.caseDischargedEndDate, param.caseDismissedStartDate, param.caseDismissedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorCaseSearch = function (param, options) {
        return this.api.bankruptcyCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.federalBankruptcyChapterArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.caseDischargedStartDate, param.caseDischargedEndDate, param.caseDismissedStartDate, param.caseDismissedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (param, options) {
        return this.api.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.ssnOrEin, param.fourDigitSsn, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.caseDischargedStartDate, param.caseDischargedEndDate, param.caseDismissedStartDate, param.caseDismissedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorPartySearch = function (param, options) {
        return this.api.bankruptcyCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.ssnOrEin, param.fourDigitSsn, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.caseDischargedStartDate, param.caseDischargedEndDate, param.caseDismissedStartDate, param.caseDismissedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (param, options) {
        return this.api.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.natureOfSuitsArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.civilCourtsPacerCaseLocatorCaseSearch = function (param, options) {
        return this.api.civilCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.natureOfSuitsArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (param, options) {
        return this.api.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.civilCourtsPacerCaseLocatorPartySearch = function (param, options) {
        return this.api.civilCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (param, options) {
        return this.api.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.criminalCourtsPacerCaseLocatorCaseSearch = function (param, options) {
        return this.api.criminalCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (param, options) {
        return this.api.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.criminalCourtsPacerCaseLocatorPartySearch = function (param, options) {
        return this.api.criminalCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.importPacerCaseByCourtUsingCaseNumberWithHttpInfo = function (param, options) {
        return this.api.importPacerCaseByCourtUsingCaseNumberWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.courtId, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.importPacerCaseByCourtUsingCaseNumber = function (param, options) {
        return this.api.importPacerCaseByCourtUsingCaseNumber(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.courtId, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (param, options) {
        return this.api.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.jpmlNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorCaseSearch = function (param, options) {
        return this.api.multiDistrictCourtsPacerCaseLocatorCaseSearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.jpmlNumber, param.pacerCaseId, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (param, options) {
        return this.api.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.jpmlNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    ObjectPACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorPartySearch = function (param, options) {
        return this.api.multiDistrictCourtsPacerCaseLocatorPartySearch(param.pacerUserId, param.pacerClientCode, param.caseNumber, param.jpmlNumber, param.pacerCaseId, param.lastName, param.firstName, param.middleName, param.generation, param.partyType, param.partyExactNameMatch, param.partyRoleArray, param.caseTitle, param.caseOffice, param.caseSequenceNumber, param.caseYear, param.caseTypeArray, param.courtRegionIdArray, param.caseYearFrom, param.caseYearTo, param.caseFiledStartDate, param.caseFiledEndDate, param.caseTerminatedStartDate, param.caseTerminatedEndDate, param.sortParameterQuery, param.caseStatus, param.pageNumber, options).toPromise();
    };
    return ObjectPACERAPIApi;
}());
exports.ObjectPACERAPIApi = ObjectPACERAPIApi;
var ObservableAPI_16 = require("./ObservableAPI");
var ObjectPACERCredentialAPIApi = (function () {
    function ObjectPACERCredentialAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservablePACERCredentialAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPACERCredentialAPIApi.prototype.addPacerCredentialWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addPacerCredentialWithHttpInfo(param.addPacerCredentialRequest, options).toPromise();
    };
    ObjectPACERCredentialAPIApi.prototype.addPacerCredential = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.addPacerCredential(param.addPacerCredentialRequest, options).toPromise();
    };
    ObjectPACERCredentialAPIApi.prototype.getPacerCredentialWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getPacerCredentialWithHttpInfo(param.pageNumber, options).toPromise();
    };
    ObjectPACERCredentialAPIApi.prototype.getPacerCredential = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getPacerCredential(param.pageNumber, options).toPromise();
    };
    ObjectPACERCredentialAPIApi.prototype.getPacerCredentialByIdWithHttpInfo = function (param, options) {
        return this.api.getPacerCredentialByIdWithHttpInfo(param.pacerUserId, options).toPromise();
    };
    ObjectPACERCredentialAPIApi.prototype.getPacerCredentialById = function (param, options) {
        return this.api.getPacerCredentialById(param.pacerUserId, options).toPromise();
    };
    ObjectPACERCredentialAPIApi.prototype.removePacerCredentialByIdWithHttpInfo = function (param, options) {
        return this.api.removePacerCredentialByIdWithHttpInfo(param.pacerUserId, options).toPromise();
    };
    ObjectPACERCredentialAPIApi.prototype.removePacerCredentialById = function (param, options) {
        return this.api.removePacerCredentialById(param.pacerUserId, options).toPromise();
    };
    return ObjectPACERCredentialAPIApi;
}());
exports.ObjectPACERCredentialAPIApi = ObjectPACERCredentialAPIApi;
var ObservableAPI_17 = require("./ObservableAPI");
var ObjectPartyAnalyticsAPIApi = (function () {
    function ObjectPartyAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservablePartyAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectPartyAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormPartyWithHttpInfo = function (param, options) {
        return this.api.getNormAttorneysAssociatedWithNormPartyWithHttpInfo(param.normPartyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormParty = function (param, options) {
        return this.api.getNormAttorneysAssociatedWithNormParty(param.normPartyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormPartyWithHttpInfo = function (param, options) {
        return this.api.getNormJudgesAssociatedWithNormPartyWithHttpInfo(param.normPartyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormParty = function (param, options) {
        return this.api.getNormJudgesAssociatedWithNormParty(param.normPartyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo = function (param, options) {
        return this.api.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(param.normPartyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormParty = function (param, options) {
        return this.api.getNormLawFirmsAssociatedWithNormParty(param.normPartyId, param.q, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.getNormPartyByIdWithHttpInfo = function (param, options) {
        return this.api.getNormPartyByIdWithHttpInfo(param.normPartyId, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.getNormPartyById = function (param, options) {
        return this.api.getNormPartyById(param.normPartyId, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.searchNormalizedPartiesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchNormalizedPartiesWithHttpInfo(param.q, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.searchNormalizedParties = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.searchNormalizedParties(param.q, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.searchNormalizedPartiesByIdWithHttpInfo = function (param, options) {
        return this.api.searchNormalizedPartiesByIdWithHttpInfo(param.normPartySearchId, param.pageNumber, options).toPromise();
    };
    ObjectPartyAnalyticsAPIApi.prototype.searchNormalizedPartiesById = function (param, options) {
        return this.api.searchNormalizedPartiesById(param.normPartySearchId, param.pageNumber, options).toPromise();
    };
    return ObjectPartyAnalyticsAPIApi;
}());
exports.ObjectPartyAnalyticsAPIApi = ObjectPartyAnalyticsAPIApi;
var ObservableAPI_18 = require("./ObservableAPI");
var ObjectUsageAPIApi = (function () {
    function ObjectUsageAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableUsageAPIApi(configuration, requestFactory, responseProcessor);
    }
    ObjectUsageAPIApi.prototype.getBillingCyclesWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getBillingCyclesWithHttpInfo(options).toPromise();
    };
    ObjectUsageAPIApi.prototype.getBillingCycles = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.getBillingCycles(options).toPromise();
    };
    ObjectUsageAPIApi.prototype.getBillingUsageByBillingCycleWithHttpInfo = function (param, options) {
        return this.api.getBillingUsageByBillingCycleWithHttpInfo(param.billingCycle, options).toPromise();
    };
    ObjectUsageAPIApi.prototype.getBillingUsageByBillingCycle = function (param, options) {
        return this.api.getBillingUsageByBillingCycle(param.billingCycle, options).toPromise();
    };
    ObjectUsageAPIApi.prototype.getDailyUsageByDateWithHttpInfo = function (param, options) {
        return this.api.getDailyUsageByDateWithHttpInfo(param.date, options).toPromise();
    };
    ObjectUsageAPIApi.prototype.getDailyUsageByDate = function (param, options) {
        return this.api.getDailyUsageByDate(param.date, options).toPromise();
    };
    return ObjectUsageAPIApi;
}());
exports.ObjectUsageAPIApi = ObjectUsageAPIApi;
//# sourceMappingURL=ObjectParamAPI.js.map