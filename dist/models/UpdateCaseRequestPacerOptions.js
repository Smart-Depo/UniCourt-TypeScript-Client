"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaseRequestPacerOptionsRefreshTypeEnum = exports.UpdateCaseRequestPacerOptions = void 0;
var UpdateCaseRequestPacerOptions = (function () {
    function UpdateCaseRequestPacerOptions() {
    }
    UpdateCaseRequestPacerOptions.getAttributeTypeMap = function () {
        return UpdateCaseRequestPacerOptions.attributeTypeMap;
    };
    UpdateCaseRequestPacerOptions.discriminator = undefined;
    UpdateCaseRequestPacerOptions.attributeTypeMap = [
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
            "type": "UpdateCaseRequestPacerOptionsRefreshTypeEnum",
            "format": ""
        },
        {
            "name": "additionalPageArray",
            "baseName": "additionalPageArray",
            "type": "Array<UpdateCaseRequestPacerOptionsAdditionalPageArrayInner>",
            "format": ""
        }
    ];
    return UpdateCaseRequestPacerOptions;
}());
exports.UpdateCaseRequestPacerOptions = UpdateCaseRequestPacerOptions;
var UpdateCaseRequestPacerOptionsRefreshTypeEnum;
(function (UpdateCaseRequestPacerOptionsRefreshTypeEnum) {
    UpdateCaseRequestPacerOptionsRefreshTypeEnum["FetchNewDocketEntries"] = "fetchNewDocketEntries";
    UpdateCaseRequestPacerOptionsRefreshTypeEnum["FetchAllDocketEntries"] = "fetchAllDocketEntries";
})(UpdateCaseRequestPacerOptionsRefreshTypeEnum = exports.UpdateCaseRequestPacerOptionsRefreshTypeEnum || (exports.UpdateCaseRequestPacerOptionsRefreshTypeEnum = {}));
//# sourceMappingURL=UpdateCaseRequestPacerOptions.js.map