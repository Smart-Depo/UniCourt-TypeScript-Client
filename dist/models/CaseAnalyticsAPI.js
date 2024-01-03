"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseAnalyticsAPI = void 0;
var CaseAnalyticsAPI = (function () {
    function CaseAnalyticsAPI() {
    }
    CaseAnalyticsAPI.getAttributeTypeMap = function () {
        return CaseAnalyticsAPI.attributeTypeMap;
    };
    CaseAnalyticsAPI.discriminator = undefined;
    CaseAnalyticsAPI.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseCountAnalyticsByCourtAPI",
            "baseName": "caseCountAnalyticsByCourtAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByCourtTypeAPI",
            "baseName": "caseCountAnalyticsByCourtTypeAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByCourtSystemAPI",
            "baseName": "caseCountAnalyticsByCourtSystemAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByCourtLocationAPI",
            "baseName": "caseCountAnalyticsByCourtLocationAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByJurisdictionGeoAPI",
            "baseName": "caseCountAnalyticsByJurisdictionGeoAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByAreaOfLawAPI",
            "baseName": "caseCountAnalyticsByAreaOfLawAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByCaseClassAPI",
            "baseName": "caseCountAnalyticsByCaseClassAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByCaseTypeAPI",
            "baseName": "caseCountAnalyticsByCaseTypeAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByCaseTypeGroupAPI",
            "baseName": "caseCountAnalyticsByCaseTypeGroupAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByPartyRoleAPI",
            "baseName": "caseCountAnalyticsByPartyRoleAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCountAnalyticsByPartyRoleGroupAPI",
            "baseName": "caseCountAnalyticsByPartyRoleGroupAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "totalCases",
            "baseName": "totalCases",
            "type": "number",
            "format": ""
        }
    ];
    return CaseAnalyticsAPI;
}());
exports.CaseAnalyticsAPI = CaseAnalyticsAPI;
//# sourceMappingURL=CaseAnalyticsAPI.js.map