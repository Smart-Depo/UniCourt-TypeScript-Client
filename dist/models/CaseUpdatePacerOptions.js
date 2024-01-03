"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdatePacerOptionsRefreshTypeEnum = exports.CaseUpdatePacerOptions = void 0;
var CaseUpdatePacerOptions = (function () {
    function CaseUpdatePacerOptions() {
    }
    CaseUpdatePacerOptions.getAttributeTypeMap = function () {
        return CaseUpdatePacerOptions.attributeTypeMap;
    };
    CaseUpdatePacerOptions.discriminator = undefined;
    CaseUpdatePacerOptions.attributeTypeMap = [
        {
            "name": "pacerUserId",
            "baseName": "pacerUserId",
            "type": "string",
            "format": ""
        },
        {
            "name": "pacerClientCode",
            "baseName": "pacerClientCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "fetchParticipantsIfOlderThanDays",
            "baseName": "fetchParticipantsIfOlderThanDays",
            "type": "number",
            "format": ""
        },
        {
            "name": "refreshType",
            "baseName": "refreshType",
            "type": "CaseUpdatePacerOptionsRefreshTypeEnum",
            "format": ""
        },
        {
            "name": "additionalPageArray",
            "baseName": "additionalPageArray",
            "type": "Array<UpdateCaseRequestPacerOptionsAdditionalPageArrayInner>",
            "format": ""
        }
    ];
    return CaseUpdatePacerOptions;
}());
exports.CaseUpdatePacerOptions = CaseUpdatePacerOptions;
var CaseUpdatePacerOptionsRefreshTypeEnum;
(function (CaseUpdatePacerOptionsRefreshTypeEnum) {
    CaseUpdatePacerOptionsRefreshTypeEnum["FetchNewDocketEntries"] = "fetchNewDocketEntries";
    CaseUpdatePacerOptionsRefreshTypeEnum["FetchAllDocketEntries"] = "fetchAllDocketEntries";
})(CaseUpdatePacerOptionsRefreshTypeEnum = exports.CaseUpdatePacerOptionsRefreshTypeEnum || (exports.CaseUpdatePacerOptionsRefreshTypeEnum = {}));
//# sourceMappingURL=CaseUpdatePacerOptions.js.map