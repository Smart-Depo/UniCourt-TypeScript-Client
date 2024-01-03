"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum = exports.UpdateCaseRequestPacerOptionsAdditionalPageArrayInner = void 0;
var UpdateCaseRequestPacerOptionsAdditionalPageArrayInner = (function () {
    function UpdateCaseRequestPacerOptionsAdditionalPageArrayInner() {
    }
    UpdateCaseRequestPacerOptionsAdditionalPageArrayInner.getAttributeTypeMap = function () {
        return UpdateCaseRequestPacerOptionsAdditionalPageArrayInner.attributeTypeMap;
    };
    UpdateCaseRequestPacerOptionsAdditionalPageArrayInner.discriminator = undefined;
    UpdateCaseRequestPacerOptionsAdditionalPageArrayInner.attributeTypeMap = [
        {
            "name": "page",
            "baseName": "page",
            "type": "UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum",
            "format": ""
        },
        {
            "name": "fetchIfOlderThanDays",
            "baseName": "fetchIfOlderThanDays",
            "type": "number",
            "format": ""
        }
    ];
    return UpdateCaseRequestPacerOptionsAdditionalPageArrayInner;
}());
exports.UpdateCaseRequestPacerOptionsAdditionalPageArrayInner = UpdateCaseRequestPacerOptionsAdditionalPageArrayInner;
var UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum;
(function (UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum) {
    UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum["AssociatedCases"] = "associatedCases";
    UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum["CaseSummary"] = "caseSummary";
    UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum["ListOfCreditors"] = "listOfCreditors";
})(UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum = exports.UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum || (exports.UpdateCaseRequestPacerOptionsAdditionalPageArrayInnerPageEnum = {}));
//# sourceMappingURL=UpdateCaseRequestPacerOptionsAdditionalPageArrayInner.js.map