"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseUpdatePacerOptionsResponse1RefreshTypeEnum = exports.CaseUpdatePacerOptionsResponse1 = void 0;
var CaseUpdatePacerOptionsResponse1 = (function () {
    function CaseUpdatePacerOptionsResponse1() {
    }
    CaseUpdatePacerOptionsResponse1.getAttributeTypeMap = function () {
        return CaseUpdatePacerOptionsResponse1.attributeTypeMap;
    };
    CaseUpdatePacerOptionsResponse1.discriminator = undefined;
    CaseUpdatePacerOptionsResponse1.attributeTypeMap = [
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
            "type": "CaseUpdatePacerOptionsResponse1RefreshTypeEnum",
            "format": ""
        },
        {
            "name": "additionalPageArray",
            "baseName": "additionalPageArray",
            "type": "Array<UpdateCaseRequestPacerOptionsAdditionalPageArrayInner>",
            "format": ""
        }
    ];
    return CaseUpdatePacerOptionsResponse1;
}());
exports.CaseUpdatePacerOptionsResponse1 = CaseUpdatePacerOptionsResponse1;
var CaseUpdatePacerOptionsResponse1RefreshTypeEnum;
(function (CaseUpdatePacerOptionsResponse1RefreshTypeEnum) {
    CaseUpdatePacerOptionsResponse1RefreshTypeEnum["FetchNewDocketEntries"] = "fetchNewDocketEntries";
    CaseUpdatePacerOptionsResponse1RefreshTypeEnum["FetchAllDocketEntries"] = "fetchAllDocketEntries";
})(CaseUpdatePacerOptionsResponse1RefreshTypeEnum = exports.CaseUpdatePacerOptionsResponse1RefreshTypeEnum || (exports.CaseUpdatePacerOptionsResponse1RefreshTypeEnum = {}));
//# sourceMappingURL=CaseUpdatePacerOptionsResponse1.js.map