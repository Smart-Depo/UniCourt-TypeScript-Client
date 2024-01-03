"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdatePacerOptionsResponseRefreshTypeEnum = exports.CaseUpdatePacerOptionsResponse = void 0;
var CaseUpdatePacerOptionsResponse = (function () {
    function CaseUpdatePacerOptionsResponse() {
    }
    CaseUpdatePacerOptionsResponse.getAttributeTypeMap = function () {
        return CaseUpdatePacerOptionsResponse.attributeTypeMap;
    };
    CaseUpdatePacerOptionsResponse.discriminator = undefined;
    CaseUpdatePacerOptionsResponse.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
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
            "type": "CaseUpdatePacerOptionsResponseRefreshTypeEnum",
            "format": ""
        },
        {
            "name": "additionalPageArray",
            "baseName": "additionalPageArray",
            "type": "Array<UpdateCaseRequestPacerOptionsAdditionalPageArrayInner>",
            "format": ""
        }
    ];
    return CaseUpdatePacerOptionsResponse;
}());
exports.CaseUpdatePacerOptionsResponse = CaseUpdatePacerOptionsResponse;
var CaseUpdatePacerOptionsResponseRefreshTypeEnum;
(function (CaseUpdatePacerOptionsResponseRefreshTypeEnum) {
    CaseUpdatePacerOptionsResponseRefreshTypeEnum["FetchNewDocketEntries"] = "fetchNewDocketEntries";
    CaseUpdatePacerOptionsResponseRefreshTypeEnum["FetchAllDocketEntries"] = "fetchAllDocketEntries";
})(CaseUpdatePacerOptionsResponseRefreshTypeEnum = exports.CaseUpdatePacerOptionsResponseRefreshTypeEnum || (exports.CaseUpdatePacerOptionsResponseRefreshTypeEnum = {}));
//# sourceMappingURL=CaseUpdatePacerOptionsResponse.js.map