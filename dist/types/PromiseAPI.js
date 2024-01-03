"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseUsageAPIApi = exports.PromisePartyAnalyticsAPIApi = exports.PromisePACERCredentialAPIApi = exports.PromisePACERAPIApi = exports.PromiseLawFirmAnalyticsAPIApi = exports.PromiseJudgeAnalyticsAPIApi = exports.PromiseCourtStandardsAPIApi = exports.PromiseCourtAvailabilityAPIApi = exports.PromiseCaseUpdateAPIApi = exports.PromiseCaseTrackingAPIApi = exports.PromiseCaseSearchAPIApi = exports.PromiseCaseExportAPIApi = exports.PromiseCaseDocumentsAPIApi = exports.PromiseCaseDocketAPIApi = exports.PromiseCaseAnalyticsAPIApi = exports.PromiseCallbackAPIApi = exports.PromiseAuthenticationAPIApi = exports.PromiseAttorneyAnalyticsAPIApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseAttorneyAnalyticsAPIApi = (function () {
    function PromiseAttorneyAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableAttorneyAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAttorneyAnalyticsAPIApi.prototype.getNormAttorneyByIdWithHttpInfo = function (normAttorneyId, _options) {
        var result = this.api.getNormAttorneyByIdWithHttpInfo(normAttorneyId, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.getNormAttorneyById = function (normAttorneyId, _options) {
        var result = this.api.getNormAttorneyById(normAttorneyId, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo = function (normAttorneyId, q, pageNumber, _options) {
        var result = this.api.getNormJudgesAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormAttorney = function (normAttorneyId, q, pageNumber, _options) {
        var result = this.api.getNormJudgesAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo = function (normAttorneyId, q, pageNumber, _options) {
        var result = this.api.getNormLawFirmsAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormAttorney = function (normAttorneyId, q, pageNumber, _options) {
        var result = this.api.getNormLawFirmsAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo = function (normAttorneyId, q, pageNumber, _options) {
        var result = this.api.getNormPartiesAssociatedWithNormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormAttorney = function (normAttorneyId, q, pageNumber, _options) {
        var result = this.api.getNormPartiesAssociatedWithNormAttorney(normAttorneyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.searchNormalizedAttorneysWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneys = function (q, pageNumber, _options) {
        var result = this.api.searchNormalizedAttorneys(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysByIdWithHttpInfo = function (normAttorneySearchId, pageNumber, _options) {
        var result = this.api.searchNormalizedAttorneysByIdWithHttpInfo(normAttorneySearchId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseAttorneyAnalyticsAPIApi.prototype.searchNormalizedAttorneysById = function (normAttorneySearchId, pageNumber, _options) {
        var result = this.api.searchNormalizedAttorneysById(normAttorneySearchId, pageNumber, _options);
        return result.toPromise();
    };
    return PromiseAttorneyAnalyticsAPIApi;
}());
exports.PromiseAttorneyAnalyticsAPIApi = PromiseAttorneyAnalyticsAPIApi;
var ObservableAPI_2 = require("./ObservableAPI");
var PromiseAuthenticationAPIApi = (function () {
    function PromiseAuthenticationAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_2.ObservableAuthenticationAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseAuthenticationAPIApi.prototype.generateNewTokenWithHttpInfo = function (generateNewTokenRequest, _options) {
        var result = this.api.generateNewTokenWithHttpInfo(generateNewTokenRequest, _options);
        return result.toPromise();
    };
    PromiseAuthenticationAPIApi.prototype.generateNewToken = function (generateNewTokenRequest, _options) {
        var result = this.api.generateNewToken(generateNewTokenRequest, _options);
        return result.toPromise();
    };
    PromiseAuthenticationAPIApi.prototype.invalidateAllTokensWithHttpInfo = function (generateNewTokenRequest, _options) {
        var result = this.api.invalidateAllTokensWithHttpInfo(generateNewTokenRequest, _options);
        return result.toPromise();
    };
    PromiseAuthenticationAPIApi.prototype.invalidateAllTokens = function (generateNewTokenRequest, _options) {
        var result = this.api.invalidateAllTokens(generateNewTokenRequest, _options);
        return result.toPromise();
    };
    PromiseAuthenticationAPIApi.prototype.invalidateTokenWithHttpInfo = function (invalidateTokenRequest, _options) {
        var result = this.api.invalidateTokenWithHttpInfo(invalidateTokenRequest, _options);
        return result.toPromise();
    };
    PromiseAuthenticationAPIApi.prototype.invalidateToken = function (invalidateTokenRequest, _options) {
        var result = this.api.invalidateToken(invalidateTokenRequest, _options);
        return result.toPromise();
    };
    PromiseAuthenticationAPIApi.prototype.listAllTokenIdsWithHttpInfo = function (generateNewTokenRequest, _options) {
        var result = this.api.listAllTokenIdsWithHttpInfo(generateNewTokenRequest, _options);
        return result.toPromise();
    };
    PromiseAuthenticationAPIApi.prototype.listAllTokenIds = function (generateNewTokenRequest, _options) {
        var result = this.api.listAllTokenIds(generateNewTokenRequest, _options);
        return result.toPromise();
    };
    return PromiseAuthenticationAPIApi;
}());
exports.PromiseAuthenticationAPIApi = PromiseAuthenticationAPIApi;
var ObservableAPI_3 = require("./ObservableAPI");
var PromiseCallbackAPIApi = (function () {
    function PromiseCallbackAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_3.ObservableCallbackAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCallbackAPIApi.prototype.getCallbacksWithHttpInfo = function (date, status, _options) {
        var result = this.api.getCallbacksWithHttpInfo(date, status, _options);
        return result.toPromise();
    };
    PromiseCallbackAPIApi.prototype.getCallbacks = function (date, status, _options) {
        var result = this.api.getCallbacks(date, status, _options);
        return result.toPromise();
    };
    return PromiseCallbackAPIApi;
}());
exports.PromiseCallbackAPIApi = PromiseCallbackAPIApi;
var ObservableAPI_4 = require("./ObservableAPI");
var PromiseCaseAnalyticsAPIApi = (function () {
    function PromiseCaseAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_4.ObservableCaseAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByAreaOfLawWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByAreaOfLawWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByAreaOfLaw = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByAreaOfLaw(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseClassWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCaseClassWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseClass = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCaseClass(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo = function (groupBy, q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCaseFiledDateWithHttpInfo(groupBy, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseFiledDate = function (groupBy, q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCaseFiledDate(groupBy, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCaseTypeWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseType = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCaseType(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCaseTypeGroupWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCaseTypeGroup = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCaseTypeGroup(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCourtWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourt = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCourt(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtLocationWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCourtLocationWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtLocation = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCourtLocation(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtSystemWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCourtSystemWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtSystem = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCourtSystem(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtTypeWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCourtTypeWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByCourtType = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByCourtType(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByJurisdictionGeoWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByJurisdictionGeo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByJurisdictionGeo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormAttorneyWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByNormAttorneyWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormAttorney = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByNormAttorney(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormJudgeWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByNormJudgeWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormJudge = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByNormJudge(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormLawFirmWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByNormLawFirmWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormLawFirm = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByNormLawFirm(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormPartyWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByNormPartyWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByNormParty = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByNormParty(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo = function (normAttorneyId, q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorneyWithHttpInfo(normAttorneyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney = function (normAttorneyId, q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByOpposingNormAttorneyForANormAttorney(normAttorneyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo = function (normLawFirmId, q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm = function (normLawFirmId, q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByOpposingNormLawFirmForANormLawFirm(normLawFirmId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo = function (normPartyId, q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByOpposingNormPartyForANormPartyWithHttpInfo(normPartyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByOpposingNormPartyForANormParty = function (normPartyId, q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByOpposingNormPartyForANormParty(normPartyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByPartyRoleWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRole = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByPartyRole(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByPartyRoleGroupWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseAnalyticsAPIApi.prototype.getCaseCountAnalyticsByPartyRoleGroup = function (q, pageNumber, _options) {
        var result = this.api.getCaseCountAnalyticsByPartyRoleGroup(q, pageNumber, _options);
        return result.toPromise();
    };
    return PromiseCaseAnalyticsAPIApi;
}());
exports.PromiseCaseAnalyticsAPIApi = PromiseCaseAnalyticsAPIApi;
var ObservableAPI_5 = require("./ObservableAPI");
var PromiseCaseDocketAPIApi = (function () {
    function PromiseCaseDocketAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_5.ObservableCaseDocketAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCaseDocketAPIApi.prototype.getAttorneyAssociatedPartiesWithHttpInfo = function (attorneyId, pageNumber, _options) {
        var result = this.api.getAttorneyAssociatedPartiesWithHttpInfo(attorneyId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getAttorneyAssociatedParties = function (attorneyId, pageNumber, _options) {
        var result = this.api.getAttorneyAssociatedParties(attorneyId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getAttorneyByIdWithHttpInfo = function (attorneyId, _options) {
        var result = this.api.getAttorneyByIdWithHttpInfo(attorneyId, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getAttorneyById = function (attorneyId, _options) {
        var result = this.api.getAttorneyById(attorneyId, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseWithHttpInfo = function (caseId, _options) {
        var result = this.api.getCaseWithHttpInfo(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCase = function (caseId, _options) {
        var result = this.api.getCase(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseAttorneysWithHttpInfo = function (caseId, isVisible, pageNumber, _options) {
        var result = this.api.getCaseAttorneysWithHttpInfo(caseId, isVisible, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseAttorneys = function (caseId, isVisible, pageNumber, _options) {
        var result = this.api.getCaseAttorneys(caseId, isVisible, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseDocketEntriesWithHttpInfo = function (caseId, docketNumber, sortBy, pageNumber, _options) {
        var result = this.api.getCaseDocketEntriesWithHttpInfo(caseId, docketNumber, sortBy, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseDocketEntries = function (caseId, docketNumber, sortBy, pageNumber, _options) {
        var result = this.api.getCaseDocketEntries(caseId, docketNumber, sortBy, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseHearingsWithHttpInfo = function (caseId, sortBy, pageNumber, _options) {
        var result = this.api.getCaseHearingsWithHttpInfo(caseId, sortBy, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseHearings = function (caseId, sortBy, pageNumber, _options) {
        var result = this.api.getCaseHearings(caseId, sortBy, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseJudgesWithHttpInfo = function (caseId, isVisible, pageNumber, _options) {
        var result = this.api.getCaseJudgesWithHttpInfo(caseId, isVisible, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseJudges = function (caseId, isVisible, pageNumber, _options) {
        var result = this.api.getCaseJudges(caseId, isVisible, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCasePartiesWithHttpInfo = function (caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options) {
        var result = this.api.getCasePartiesWithHttpInfo(caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseParties = function (caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options) {
        var result = this.api.getCaseParties(caseId, isVisible, pageNumber, partyRoleId, partyRoleGroupId, attorneyRepresentationTypeId, partyClassificationType, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseRelatedCasesWithHttpInfo = function (caseId, pageNumber, _options) {
        var result = this.api.getCaseRelatedCasesWithHttpInfo(caseId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getCaseRelatedCases = function (caseId, pageNumber, _options) {
        var result = this.api.getCaseRelatedCases(caseId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getJudgeByIdWithHttpInfo = function (judgeId, _options) {
        var result = this.api.getJudgeByIdWithHttpInfo(judgeId, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getJudgeById = function (judgeId, _options) {
        var result = this.api.getJudgeById(judgeId, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getPartyAssociatedAttorneysWithHttpInfo = function (partyId, pageNumber, _options) {
        var result = this.api.getPartyAssociatedAttorneysWithHttpInfo(partyId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getPartyAssociatedAttorneys = function (partyId, pageNumber, _options) {
        var result = this.api.getPartyAssociatedAttorneys(partyId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getPartyByIdWithHttpInfo = function (partyId, _options) {
        var result = this.api.getPartyByIdWithHttpInfo(partyId, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getPartyById = function (partyId, _options) {
        var result = this.api.getPartyById(partyId, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getPrimaryDocumentsForDocketEntriesWithHttpInfo = function (caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options) {
        var result = this.api.getPrimaryDocumentsForDocketEntriesWithHttpInfo(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getPrimaryDocumentsForDocketEntries = function (caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options) {
        var result = this.api.getPrimaryDocumentsForDocketEntries(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getSecondaryDocumentsForDocketEntriesWithHttpInfo = function (caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options) {
        var result = this.api.getSecondaryDocumentsForDocketEntriesWithHttpInfo(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocketAPIApi.prototype.getSecondaryDocumentsForDocketEntries = function (caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options) {
        var result = this.api.getSecondaryDocumentsForDocketEntries(caseId, docketNumber, inLibrary, afterFirstFetchDate, libraryDate, pageNumber, _options);
        return result.toPromise();
    };
    return PromiseCaseDocketAPIApi;
}());
exports.PromiseCaseDocketAPIApi = PromiseCaseDocketAPIApi;
var ObservableAPI_6 = require("./ObservableAPI");
var PromiseCaseDocumentsAPIApi = (function () {
    function PromiseCaseDocumentsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_6.ObservableCaseDocumentsAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCaseDocumentsAPIApi.prototype.getCaseDocumentDownloadByIdWithHttpInfo = function (caseDocumentId, isPreviewDocument, _options) {
        var result = this.api.getCaseDocumentDownloadByIdWithHttpInfo(caseDocumentId, isPreviewDocument, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getCaseDocumentDownloadById = function (caseDocumentId, isPreviewDocument, _options) {
        var result = this.api.getCaseDocumentDownloadById(caseDocumentId, isPreviewDocument, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbackByIdWithHttpInfo = function (caseDocumentOrderCallbackId, _options) {
        var result = this.api.getCaseDocumentOrderCallbackByIdWithHttpInfo(caseDocumentOrderCallbackId, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbackById = function (caseDocumentOrderCallbackId, _options) {
        var result = this.api.getCaseDocumentOrderCallbackById(caseDocumentOrderCallbackId, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbacksWithHttpInfo = function (date, status, pageNumber, _options) {
        var result = this.api.getCaseDocumentOrderCallbacksWithHttpInfo(date, status, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getCaseDocumentOrderCallbacks = function (date, status, pageNumber, _options) {
        var result = this.api.getCaseDocumentOrderCallbacks(date, status, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getCaseDocumentsWithHttpInfo = function (caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options) {
        var result = this.api.getCaseDocumentsWithHttpInfo(caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getCaseDocuments = function (caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options) {
        var result = this.api.getCaseDocuments(caseId, inLibrary, afterFirstFetchDate, libraryDate, firstFetchDate, sortBy, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getDocumentByIdWithHttpInfo = function (caseDocumentId, _options) {
        var result = this.api.getDocumentByIdWithHttpInfo(caseDocumentId, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.getDocumentById = function (caseDocumentId, _options) {
        var result = this.api.getDocumentById(caseDocumentId, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.orderCaseDocumentWithHttpInfo = function (orderCaseDocumentRequest, _options) {
        var result = this.api.orderCaseDocumentWithHttpInfo(orderCaseDocumentRequest, _options);
        return result.toPromise();
    };
    PromiseCaseDocumentsAPIApi.prototype.orderCaseDocument = function (orderCaseDocumentRequest, _options) {
        var result = this.api.orderCaseDocument(orderCaseDocumentRequest, _options);
        return result.toPromise();
    };
    return PromiseCaseDocumentsAPIApi;
}());
exports.PromiseCaseDocumentsAPIApi = PromiseCaseDocumentsAPIApi;
var ObservableAPI_7 = require("./ObservableAPI");
var PromiseCaseExportAPIApi = (function () {
    function PromiseCaseExportAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_7.ObservableCaseExportAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCaseExportAPIApi.prototype.exportCaseWithHttpInfo = function (caseId, _options) {
        var result = this.api.exportCaseWithHttpInfo(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseExportAPIApi.prototype.exportCase = function (caseId, _options) {
        var result = this.api.exportCase(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseExportAPIApi.prototype.getCaseExportCallbackByIdWithHttpInfo = function (caseExportCallbackId, _options) {
        var result = this.api.getCaseExportCallbackByIdWithHttpInfo(caseExportCallbackId, _options);
        return result.toPromise();
    };
    PromiseCaseExportAPIApi.prototype.getCaseExportCallbackById = function (caseExportCallbackId, _options) {
        var result = this.api.getCaseExportCallbackById(caseExportCallbackId, _options);
        return result.toPromise();
    };
    PromiseCaseExportAPIApi.prototype.getCaseExportCallbacksWithHttpInfo = function (date, status, pageNumber, _options) {
        var result = this.api.getCaseExportCallbacksWithHttpInfo(date, status, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseExportAPIApi.prototype.getCaseExportCallbacks = function (date, status, pageNumber, _options) {
        var result = this.api.getCaseExportCallbacks(date, status, pageNumber, _options);
        return result.toPromise();
    };
    return PromiseCaseExportAPIApi;
}());
exports.PromiseCaseExportAPIApi = PromiseCaseExportAPIApi;
var ObservableAPI_8 = require("./ObservableAPI");
var PromiseCaseSearchAPIApi = (function () {
    function PromiseCaseSearchAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_8.ObservableCaseSearchAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCaseSearchAPIApi.prototype.searchCasesWithHttpInfo = function (q, sort, order, pageNumber, _options) {
        var result = this.api.searchCasesWithHttpInfo(q, sort, order, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseSearchAPIApi.prototype.searchCases = function (q, sort, order, pageNumber, _options) {
        var result = this.api.searchCases(q, sort, order, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseSearchAPIApi.prototype.searchCasesByIdWithHttpInfo = function (caseSearchId, pageNumber, _options) {
        var result = this.api.searchCasesByIdWithHttpInfo(caseSearchId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseSearchAPIApi.prototype.searchCasesById = function (caseSearchId, pageNumber, _options) {
        var result = this.api.searchCasesById(caseSearchId, pageNumber, _options);
        return result.toPromise();
    };
    return PromiseCaseSearchAPIApi;
}());
exports.PromiseCaseSearchAPIApi = PromiseCaseSearchAPIApi;
var ObservableAPI_9 = require("./ObservableAPI");
var PromiseCaseTrackingAPIApi = (function () {
    function PromiseCaseTrackingAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_9.ObservableCaseTrackingAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCaseTrackingAPIApi.prototype.getCaseTrackByIdWithHttpInfo = function (caseId, _options) {
        var result = this.api.getCaseTrackByIdWithHttpInfo(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseTrackingAPIApi.prototype.getCaseTrackById = function (caseId, _options) {
        var result = this.api.getCaseTrackById(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseTrackingAPIApi.prototype.getCaseTracksWithHttpInfo = function (lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options) {
        var result = this.api.getCaseTracksWithHttpInfo(lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseTrackingAPIApi.prototype.getCaseTracks = function (lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options) {
        var result = this.api.getCaseTracks(lastFetchDate, lastFetchDateWithUpdates, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseTrackingAPIApi.prototype.removeCaseTrackByIdWithHttpInfo = function (caseId, _options) {
        var result = this.api.removeCaseTrackByIdWithHttpInfo(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseTrackingAPIApi.prototype.removeCaseTrackById = function (caseId, _options) {
        var result = this.api.removeCaseTrackById(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseTrackingAPIApi.prototype.trackCaseWithHttpInfo = function (trackCaseRequest, _options) {
        var result = this.api.trackCaseWithHttpInfo(trackCaseRequest, _options);
        return result.toPromise();
    };
    PromiseCaseTrackingAPIApi.prototype.trackCase = function (trackCaseRequest, _options) {
        var result = this.api.trackCase(trackCaseRequest, _options);
        return result.toPromise();
    };
    return PromiseCaseTrackingAPIApi;
}());
exports.PromiseCaseTrackingAPIApi = PromiseCaseTrackingAPIApi;
var ObservableAPI_10 = require("./ObservableAPI");
var PromiseCaseUpdateAPIApi = (function () {
    function PromiseCaseUpdateAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_10.ObservableCaseUpdateAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCaseUpdateAPIApi.prototype.getCaseUpdateByCaseIdWithHttpInfo = function (caseId, _options) {
        var result = this.api.getCaseUpdateByCaseIdWithHttpInfo(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseUpdateAPIApi.prototype.getCaseUpdateByCaseId = function (caseId, _options) {
        var result = this.api.getCaseUpdateByCaseId(caseId, _options);
        return result.toPromise();
    };
    PromiseCaseUpdateAPIApi.prototype.getCaseUpdatesWithHttpInfo = function (caseId, requestedDate, status, pageNumber, _options) {
        var result = this.api.getCaseUpdatesWithHttpInfo(caseId, requestedDate, status, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseUpdateAPIApi.prototype.getCaseUpdates = function (caseId, requestedDate, status, pageNumber, _options) {
        var result = this.api.getCaseUpdates(caseId, requestedDate, status, pageNumber, _options);
        return result.toPromise();
    };
    PromiseCaseUpdateAPIApi.prototype.updateCaseWithHttpInfo = function (updateCaseRequest, _options) {
        var result = this.api.updateCaseWithHttpInfo(updateCaseRequest, _options);
        return result.toPromise();
    };
    PromiseCaseUpdateAPIApi.prototype.updateCase = function (updateCaseRequest, _options) {
        var result = this.api.updateCase(updateCaseRequest, _options);
        return result.toPromise();
    };
    return PromiseCaseUpdateAPIApi;
}());
exports.PromiseCaseUpdateAPIApi = PromiseCaseUpdateAPIApi;
var ObservableAPI_11 = require("./ObservableAPI");
var PromiseCourtAvailabilityAPIApi = (function () {
    function PromiseCourtAvailabilityAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_11.ObservableCourtAvailabilityAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCourtAvailabilityAPIApi.prototype.getCourtCoverageWithHttpInfo = function (courtId, _options) {
        var result = this.api.getCourtCoverageWithHttpInfo(courtId, _options);
        return result.toPromise();
    };
    PromiseCourtAvailabilityAPIApi.prototype.getCourtCoverage = function (courtId, _options) {
        var result = this.api.getCourtCoverage(courtId, _options);
        return result.toPromise();
    };
    return PromiseCourtAvailabilityAPIApi;
}());
exports.PromiseCourtAvailabilityAPIApi = PromiseCourtAvailabilityAPIApi;
var ObservableAPI_12 = require("./ObservableAPI");
var PromiseCourtStandardsAPIApi = (function () {
    function PromiseCourtStandardsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_12.ObservableCourtStandardsAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseCourtStandardsAPIApi.prototype.getAppealCourtsForCourtWithHttpInfo = function (courtId, pageNumber, sort, order, _options) {
        var result = this.api.getAppealCourtsForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAppealCourtsForCourt = function (courtId, pageNumber, sort, order, _options) {
        var result = this.api.getAppealCourtsForCourt(courtId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAreaOfLawWithHttpInfo = function (areaOfLawId, _options) {
        var result = this.api.getAreaOfLawWithHttpInfo(areaOfLawId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAreaOfLaw = function (areaOfLawId, _options) {
        var result = this.api.getAreaOfLaw(areaOfLawId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAreasOfLawWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getAreasOfLawWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAreasOfLaw = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getAreasOfLaw(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypeWithHttpInfo = function (attorneyRepresentationTypeId, _options) {
        var result = this.api.getAttorneyRepresentationTypeWithHttpInfo(attorneyRepresentationTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAttorneyRepresentationType = function (attorneyRepresentationTypeId, _options) {
        var result = this.api.getAttorneyRepresentationType(attorneyRepresentationTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getAttorneyRepresentationTypesWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAttorneyRepresentationTypes = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getAttorneyRepresentationTypes(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAttorneyTypeWithHttpInfo = function (attorneyTypeId, _options) {
        var result = this.api.getAttorneyTypeWithHttpInfo(attorneyTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAttorneyType = function (attorneyTypeId, _options) {
        var result = this.api.getAttorneyType(attorneyTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAttorneyTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getAttorneyTypesWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getAttorneyTypes = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getAttorneyTypes(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseClassWithHttpInfo = function (caseClassId, _options) {
        var result = this.api.getCaseClassWithHttpInfo(caseClassId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseClass = function (caseClassId, _options) {
        var result = this.api.getCaseClass(caseClassId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseRelationshipTypeWithHttpInfo = function (caseRelationshipTypeId, _options) {
        var result = this.api.getCaseRelationshipTypeWithHttpInfo(caseRelationshipTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseRelationshipType = function (caseRelationshipTypeId, _options) {
        var result = this.api.getCaseRelationshipType(caseRelationshipTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseRelationshipTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCaseRelationshipTypesWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseRelationshipTypes = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCaseRelationshipTypes(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseStatusWithHttpInfo = function (caseStatusId, _options) {
        var result = this.api.getCaseStatusWithHttpInfo(caseStatusId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseStatus = function (caseStatusId, _options) {
        var result = this.api.getCaseStatus(caseStatusId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseStatusGroupWithHttpInfo = function (caseStatusGroupId, _options) {
        var result = this.api.getCaseStatusGroupWithHttpInfo(caseStatusGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseStatusGroup = function (caseStatusGroupId, _options) {
        var result = this.api.getCaseStatusGroup(caseStatusGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseStatusGroupsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCaseStatusGroupsWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseStatusGroups = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCaseStatusGroups(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseTypeWithHttpInfo = function (caseTypeId, _options) {
        var result = this.api.getCaseTypeWithHttpInfo(caseTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseType = function (caseTypeId, _options) {
        var result = this.api.getCaseType(caseTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseTypeGroupWithHttpInfo = function (caseTypeGroupId, _options) {
        var result = this.api.getCaseTypeGroupWithHttpInfo(caseTypeGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseTypeGroup = function (caseTypeGroupId, _options) {
        var result = this.api.getCaseTypeGroup(caseTypeGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseTypeGroupsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCaseTypeGroupsWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseTypeGroups = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCaseTypeGroups(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCaseTypesWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCaseTypes = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCaseTypes(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCasesClassWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCasesClassWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCasesClass = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCasesClass(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCasesStatusWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCasesStatusWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCasesStatus = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCasesStatus(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCauseOfActionWithHttpInfo = function (causeOfActionId, _options) {
        var result = this.api.getCauseOfActionWithHttpInfo(causeOfActionId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCauseOfAction = function (causeOfActionId, _options) {
        var result = this.api.getCauseOfAction(causeOfActionId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCauseOfActionAdditionalDataWithHttpInfo = function (causeOfActionAdditionalDataId, _options) {
        var result = this.api.getCauseOfActionAdditionalDataWithHttpInfo(causeOfActionAdditionalDataId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCauseOfActionAdditionalData = function (causeOfActionAdditionalDataId, _options) {
        var result = this.api.getCauseOfActionAdditionalData(causeOfActionAdditionalDataId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCauseOfActionGroupWithHttpInfo = function (causeOfActionGroupId, _options) {
        var result = this.api.getCauseOfActionGroupWithHttpInfo(causeOfActionGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCauseOfActionGroup = function (causeOfActionGroupId, _options) {
        var result = this.api.getCauseOfActionGroup(causeOfActionGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCausesOfActionWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCausesOfActionWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCausesOfAction = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCausesOfAction(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCausesOfActionAdditionalDataWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCausesOfActionAdditionalDataWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCausesOfActionAdditionalData = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCausesOfActionAdditionalData(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCausesOfActionGroupWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCausesOfActionGroupWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCausesOfActionGroup = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCausesOfActionGroup(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeWithHttpInfo = function (chargeId, _options) {
        var result = this.api.getChargeWithHttpInfo(chargeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCharge = function (chargeId, _options) {
        var result = this.api.getCharge(chargeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeAdditionalDataWithHttpInfo = function (chargeAdditionalDataId, _options) {
        var result = this.api.getChargeAdditionalDataWithHttpInfo(chargeAdditionalDataId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeAdditionalData = function (chargeAdditionalDataId, _options) {
        var result = this.api.getChargeAdditionalData(chargeAdditionalDataId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeDegreeWithHttpInfo = function (chargeDegreeId, _options) {
        var result = this.api.getChargeDegreeWithHttpInfo(chargeDegreeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeDegree = function (chargeDegreeId, _options) {
        var result = this.api.getChargeDegree(chargeDegreeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeGroupWithHttpInfo = function (chargeGroupId, _options) {
        var result = this.api.getChargeGroupWithHttpInfo(chargeGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeGroup = function (chargeGroupId, _options) {
        var result = this.api.getChargeGroup(chargeGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeGroupsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargeGroupsWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeGroups = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargeGroups(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeSeverityWithHttpInfo = function (chargeSeverityId, _options) {
        var result = this.api.getChargeSeverityWithHttpInfo(chargeSeverityId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargeSeverity = function (chargeSeverityId, _options) {
        var result = this.api.getChargeSeverity(chargeSeverityId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargesWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCharges = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCharges(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargesAdditionalDataWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargesAdditionalDataWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargesAdditionalData = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargesAdditionalData(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargesDegreeWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargesDegreeWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargesDegree = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargesDegree(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargesSeverityWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargesSeverityWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getChargesSeverity = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getChargesSeverity(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtWithHttpInfo = function (courtId, _options) {
        var result = this.api.getCourtWithHttpInfo(courtId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourt = function (courtId, _options) {
        var result = this.api.getCourt(courtId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtLocationWithHttpInfo = function (courtLocationId, _options) {
        var result = this.api.getCourtLocationWithHttpInfo(courtLocationId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtLocation = function (courtLocationId, _options) {
        var result = this.api.getCourtLocation(courtLocationId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtLocationsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtLocationsWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtLocations = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtLocations(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtLocationsForCourtWithHttpInfo = function (courtId, pageNumber, sort, order, _options) {
        var result = this.api.getCourtLocationsForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtLocationsForCourt = function (courtId, pageNumber, sort, order, _options) {
        var result = this.api.getCourtLocationsForCourt(courtId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtServiceStatusWithHttpInfo = function (courtServiceStatusId, _options) {
        var result = this.api.getCourtServiceStatusWithHttpInfo(courtServiceStatusId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtServiceStatus = function (courtServiceStatusId, _options) {
        var result = this.api.getCourtServiceStatus(courtServiceStatusId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtSystemWithHttpInfo = function (courtSystemId, _options) {
        var result = this.api.getCourtSystemWithHttpInfo(courtSystemId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtSystem = function (courtSystemId, _options) {
        var result = this.api.getCourtSystem(courtSystemId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtSystemsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtSystemsWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtSystems = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtSystems(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtTypeWithHttpInfo = function (courtTypeId, _options) {
        var result = this.api.getCourtTypeWithHttpInfo(courtTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtType = function (courtTypeId, _options) {
        var result = this.api.getCourtType(courtTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtTypesWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtTypes = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtTypes(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtsWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourts = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourts(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtsForCourtLocationWithHttpInfo = function (courtLocationId, pageNumber, sort, order, _options) {
        var result = this.api.getCourtsForCourtLocationWithHttpInfo(courtLocationId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtsForCourtLocation = function (courtLocationId, pageNumber, sort, order, _options) {
        var result = this.api.getCourtsForCourtLocation(courtLocationId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtsForJurisdictionGeoWithHttpInfo = function (jurisdictionGeoId, pageNumber, sort, order, _options) {
        var result = this.api.getCourtsForJurisdictionGeoWithHttpInfo(jurisdictionGeoId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtsForJurisdictionGeo = function (jurisdictionGeoId, pageNumber, sort, order, _options) {
        var result = this.api.getCourtsForJurisdictionGeo(jurisdictionGeoId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtsServiceStatusWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtsServiceStatusWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getCourtsServiceStatus = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getCourtsServiceStatus(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJudgeTypeWithHttpInfo = function (judgeTypeId, _options) {
        var result = this.api.getJudgeTypeWithHttpInfo(judgeTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJudgeType = function (judgeTypeId, _options) {
        var result = this.api.getJudgeType(judgeTypeId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJudgeTypesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getJudgeTypesWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJudgeTypes = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getJudgeTypes(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJurisdictionGeoWithHttpInfo = function (jurisdictionGeoId, _options) {
        var result = this.api.getJurisdictionGeoWithHttpInfo(jurisdictionGeoId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJurisdictionGeo = function (jurisdictionGeoId, _options) {
        var result = this.api.getJurisdictionGeo(jurisdictionGeoId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJurisdictionGeoForCourtWithHttpInfo = function (courtId, pageNumber, sort, order, _options) {
        var result = this.api.getJurisdictionGeoForCourtWithHttpInfo(courtId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJurisdictionGeoForCourt = function (courtId, pageNumber, sort, order, _options) {
        var result = this.api.getJurisdictionGeoForCourt(courtId, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJurisdictionsGeoWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getJurisdictionsGeoWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getJurisdictionsGeo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getJurisdictionsGeo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getPartyRoleWithHttpInfo = function (partyRoleId, _options) {
        var result = this.api.getPartyRoleWithHttpInfo(partyRoleId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getPartyRole = function (partyRoleId, _options) {
        var result = this.api.getPartyRole(partyRoleId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getPartyRoleGroupWithHttpInfo = function (partyRoleGroupId, _options) {
        var result = this.api.getPartyRoleGroupWithHttpInfo(partyRoleGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getPartyRoleGroup = function (partyRoleGroupId, _options) {
        var result = this.api.getPartyRoleGroup(partyRoleGroupId, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getPartyRoleGroupsWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getPartyRoleGroupsWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getPartyRoleGroups = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getPartyRoleGroups(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getPartyRolesWithHttpInfo = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getPartyRolesWithHttpInfo(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    PromiseCourtStandardsAPIApi.prototype.getPartyRoles = function (q, pageNumber, sort, order, _options) {
        var result = this.api.getPartyRoles(q, pageNumber, sort, order, _options);
        return result.toPromise();
    };
    return PromiseCourtStandardsAPIApi;
}());
exports.PromiseCourtStandardsAPIApi = PromiseCourtStandardsAPIApi;
var ObservableAPI_13 = require("./ObservableAPI");
var PromiseJudgeAnalyticsAPIApi = (function () {
    function PromiseJudgeAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_13.ObservableJudgeAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseJudgeAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo = function (normJudgeId, q, pageNumber, _options) {
        var result = this.api.getNormAttorneysAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormJudge = function (normJudgeId, q, pageNumber, _options) {
        var result = this.api.getNormAttorneysAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.getNormJudgeByIdWithHttpInfo = function (normJudgeId, _options) {
        var result = this.api.getNormJudgeByIdWithHttpInfo(normJudgeId, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.getNormJudgeById = function (normJudgeId, _options) {
        var result = this.api.getNormJudgeById(normJudgeId, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo = function (normJudgeId, q, pageNumber, _options) {
        var result = this.api.getNormLawFirmsAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormJudge = function (normJudgeId, q, pageNumber, _options) {
        var result = this.api.getNormLawFirmsAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormJudgeWithHttpInfo = function (normJudgeId, q, pageNumber, _options) {
        var result = this.api.getNormPartiesAssociatedWithNormJudgeWithHttpInfo(normJudgeId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormJudge = function (normJudgeId, q, pageNumber, _options) {
        var result = this.api.getNormPartiesAssociatedWithNormJudge(normJudgeId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.searchNormalizedJudgesWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.searchNormalizedJudges = function (q, pageNumber, _options) {
        var result = this.api.searchNormalizedJudges(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesByIdWithHttpInfo = function (normJudgeSearchId, pageNumber, _options) {
        var result = this.api.searchNormalizedJudgesByIdWithHttpInfo(normJudgeSearchId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseJudgeAnalyticsAPIApi.prototype.searchNormalizedJudgesById = function (normJudgeSearchId, pageNumber, _options) {
        var result = this.api.searchNormalizedJudgesById(normJudgeSearchId, pageNumber, _options);
        return result.toPromise();
    };
    return PromiseJudgeAnalyticsAPIApi;
}());
exports.PromiseJudgeAnalyticsAPIApi = PromiseJudgeAnalyticsAPIApi;
var ObservableAPI_14 = require("./ObservableAPI");
var PromiseLawFirmAnalyticsAPIApi = (function () {
    function PromiseLawFirmAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_14.ObservableLawFirmAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseLawFirmAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo = function (normLawFirmId, q, pageNumber, _options) {
        var result = this.api.getNormAttorneysAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormLawFirm = function (normLawFirmId, q, pageNumber, _options) {
        var result = this.api.getNormAttorneysAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo = function (normLawFirmId, q, pageNumber, _options) {
        var result = this.api.getNormJudgesAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormLawFirm = function (normLawFirmId, q, pageNumber, _options) {
        var result = this.api.getNormJudgesAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.getNormLawFirmByIdWithHttpInfo = function (normLawFirmId, _options) {
        var result = this.api.getNormLawFirmByIdWithHttpInfo(normLawFirmId, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.getNormLawFirmById = function (normLawFirmId, _options) {
        var result = this.api.getNormLawFirmById(normLawFirmId, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo = function (normLawFirmId, q, pageNumber, _options) {
        var result = this.api.getNormPartiesAssociatedWithNormLawFirmWithHttpInfo(normLawFirmId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.getNormPartiesAssociatedWithNormLawFirm = function (normLawFirmId, q, pageNumber, _options) {
        var result = this.api.getNormPartiesAssociatedWithNormLawFirm(normLawFirmId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.searchNormalizedLawFirmsWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirms = function (q, pageNumber, _options) {
        var result = this.api.searchNormalizedLawFirms(q, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsByIdWithHttpInfo = function (normLawFirmSearchId, pageNumber, _options) {
        var result = this.api.searchNormalizedLawFirmsByIdWithHttpInfo(normLawFirmSearchId, pageNumber, _options);
        return result.toPromise();
    };
    PromiseLawFirmAnalyticsAPIApi.prototype.searchNormalizedLawFirmsById = function (normLawFirmSearchId, pageNumber, _options) {
        var result = this.api.searchNormalizedLawFirmsById(normLawFirmSearchId, pageNumber, _options);
        return result.toPromise();
    };
    return PromiseLawFirmAnalyticsAPIApi;
}());
exports.PromiseLawFirmAnalyticsAPIApi = PromiseLawFirmAnalyticsAPIApi;
var ObservableAPI_15 = require("./ObservableAPI");
var PromisePACERAPIApi = (function () {
    function PromisePACERAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_15.ObservablePACERAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromisePACERAPIApi.prototype.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.allCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.allCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.allCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.allCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.allCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.allCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.allCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.appealCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.appealCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.appealCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.appealCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.appealCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.appealCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.bankruptcyCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.bankruptcyCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, federalBankruptcyChapterArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.bankruptcyCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.bankruptcyCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.bankruptcyCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, ssnOrEin, fourDigitSsn, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, caseDischargedStartDate, caseDischargedEndDate, caseDismissedStartDate, caseDismissedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.civilCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.civilCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.civilCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, natureOfSuitsArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.civilCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.civilCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.civilCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.criminalCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.criminalCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.criminalCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.criminalCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.criminalCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.criminalCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.importPacerCaseByCourtUsingCaseNumberWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, courtId, _options) {
        var result = this.api.importPacerCaseByCourtUsingCaseNumberWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, courtId, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.importPacerCaseByCourtUsingCaseNumber = function (pacerUserId, pacerClientCode, caseNumber, courtId, _options) {
        var result = this.api.importPacerCaseByCourtUsingCaseNumber(pacerUserId, pacerClientCode, caseNumber, courtId, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.multiDistrictCourtsPacerCaseLocatorCaseSearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorCaseSearch = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.multiDistrictCourtsPacerCaseLocatorCaseSearch(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.multiDistrictCourtsPacerCaseLocatorPartySearchWithHttpInfo(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERAPIApi.prototype.multiDistrictCourtsPacerCaseLocatorPartySearch = function (pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options) {
        var result = this.api.multiDistrictCourtsPacerCaseLocatorPartySearch(pacerUserId, pacerClientCode, caseNumber, jpmlNumber, pacerCaseId, lastName, firstName, middleName, generation, partyType, partyExactNameMatch, partyRoleArray, caseTitle, caseOffice, caseSequenceNumber, caseYear, caseTypeArray, courtRegionIdArray, caseYearFrom, caseYearTo, caseFiledStartDate, caseFiledEndDate, caseTerminatedStartDate, caseTerminatedEndDate, sortParameterQuery, caseStatus, pageNumber, _options);
        return result.toPromise();
    };
    return PromisePACERAPIApi;
}());
exports.PromisePACERAPIApi = PromisePACERAPIApi;
var ObservableAPI_16 = require("./ObservableAPI");
var PromisePACERCredentialAPIApi = (function () {
    function PromisePACERCredentialAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_16.ObservablePACERCredentialAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromisePACERCredentialAPIApi.prototype.addPacerCredentialWithHttpInfo = function (addPacerCredentialRequest, _options) {
        var result = this.api.addPacerCredentialWithHttpInfo(addPacerCredentialRequest, _options);
        return result.toPromise();
    };
    PromisePACERCredentialAPIApi.prototype.addPacerCredential = function (addPacerCredentialRequest, _options) {
        var result = this.api.addPacerCredential(addPacerCredentialRequest, _options);
        return result.toPromise();
    };
    PromisePACERCredentialAPIApi.prototype.getPacerCredentialWithHttpInfo = function (pageNumber, _options) {
        var result = this.api.getPacerCredentialWithHttpInfo(pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERCredentialAPIApi.prototype.getPacerCredential = function (pageNumber, _options) {
        var result = this.api.getPacerCredential(pageNumber, _options);
        return result.toPromise();
    };
    PromisePACERCredentialAPIApi.prototype.getPacerCredentialByIdWithHttpInfo = function (pacerUserId, _options) {
        var result = this.api.getPacerCredentialByIdWithHttpInfo(pacerUserId, _options);
        return result.toPromise();
    };
    PromisePACERCredentialAPIApi.prototype.getPacerCredentialById = function (pacerUserId, _options) {
        var result = this.api.getPacerCredentialById(pacerUserId, _options);
        return result.toPromise();
    };
    PromisePACERCredentialAPIApi.prototype.removePacerCredentialByIdWithHttpInfo = function (pacerUserId, _options) {
        var result = this.api.removePacerCredentialByIdWithHttpInfo(pacerUserId, _options);
        return result.toPromise();
    };
    PromisePACERCredentialAPIApi.prototype.removePacerCredentialById = function (pacerUserId, _options) {
        var result = this.api.removePacerCredentialById(pacerUserId, _options);
        return result.toPromise();
    };
    return PromisePACERCredentialAPIApi;
}());
exports.PromisePACERCredentialAPIApi = PromisePACERCredentialAPIApi;
var ObservableAPI_17 = require("./ObservableAPI");
var PromisePartyAnalyticsAPIApi = (function () {
    function PromisePartyAnalyticsAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_17.ObservablePartyAnalyticsAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromisePartyAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormPartyWithHttpInfo = function (normPartyId, q, pageNumber, _options) {
        var result = this.api.getNormAttorneysAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.getNormAttorneysAssociatedWithNormParty = function (normPartyId, q, pageNumber, _options) {
        var result = this.api.getNormAttorneysAssociatedWithNormParty(normPartyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormPartyWithHttpInfo = function (normPartyId, q, pageNumber, _options) {
        var result = this.api.getNormJudgesAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.getNormJudgesAssociatedWithNormParty = function (normPartyId, q, pageNumber, _options) {
        var result = this.api.getNormJudgesAssociatedWithNormParty(normPartyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo = function (normPartyId, q, pageNumber, _options) {
        var result = this.api.getNormLawFirmsAssociatedWithNormPartyWithHttpInfo(normPartyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.getNormLawFirmsAssociatedWithNormParty = function (normPartyId, q, pageNumber, _options) {
        var result = this.api.getNormLawFirmsAssociatedWithNormParty(normPartyId, q, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.getNormPartyByIdWithHttpInfo = function (normPartyId, _options) {
        var result = this.api.getNormPartyByIdWithHttpInfo(normPartyId, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.getNormPartyById = function (normPartyId, _options) {
        var result = this.api.getNormPartyById(normPartyId, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.searchNormalizedPartiesWithHttpInfo = function (q, pageNumber, _options) {
        var result = this.api.searchNormalizedPartiesWithHttpInfo(q, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.searchNormalizedParties = function (q, pageNumber, _options) {
        var result = this.api.searchNormalizedParties(q, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.searchNormalizedPartiesByIdWithHttpInfo = function (normPartySearchId, pageNumber, _options) {
        var result = this.api.searchNormalizedPartiesByIdWithHttpInfo(normPartySearchId, pageNumber, _options);
        return result.toPromise();
    };
    PromisePartyAnalyticsAPIApi.prototype.searchNormalizedPartiesById = function (normPartySearchId, pageNumber, _options) {
        var result = this.api.searchNormalizedPartiesById(normPartySearchId, pageNumber, _options);
        return result.toPromise();
    };
    return PromisePartyAnalyticsAPIApi;
}());
exports.PromisePartyAnalyticsAPIApi = PromisePartyAnalyticsAPIApi;
var ObservableAPI_18 = require("./ObservableAPI");
var PromiseUsageAPIApi = (function () {
    function PromiseUsageAPIApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_18.ObservableUsageAPIApi(configuration, requestFactory, responseProcessor);
    }
    PromiseUsageAPIApi.prototype.getBillingCyclesWithHttpInfo = function (_options) {
        var result = this.api.getBillingCyclesWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseUsageAPIApi.prototype.getBillingCycles = function (_options) {
        var result = this.api.getBillingCycles(_options);
        return result.toPromise();
    };
    PromiseUsageAPIApi.prototype.getBillingUsageByBillingCycleWithHttpInfo = function (billingCycle, _options) {
        var result = this.api.getBillingUsageByBillingCycleWithHttpInfo(billingCycle, _options);
        return result.toPromise();
    };
    PromiseUsageAPIApi.prototype.getBillingUsageByBillingCycle = function (billingCycle, _options) {
        var result = this.api.getBillingUsageByBillingCycle(billingCycle, _options);
        return result.toPromise();
    };
    PromiseUsageAPIApi.prototype.getDailyUsageByDateWithHttpInfo = function (date, _options) {
        var result = this.api.getDailyUsageByDateWithHttpInfo(date, _options);
        return result.toPromise();
    };
    PromiseUsageAPIApi.prototype.getDailyUsageByDate = function (date, _options) {
        var result = this.api.getDailyUsageByDate(date, _options);
        return result.toPromise();
    };
    return PromiseUsageAPIApi;
}());
exports.PromiseUsageAPIApi = PromiseUsageAPIApi;
//# sourceMappingURL=PromiseAPI.js.map