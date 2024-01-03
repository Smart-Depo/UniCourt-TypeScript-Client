"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormLawFirm1SourceDetailsSourceEnum = exports.PossibleNormLawFirm1SourceDetails = void 0;
var PossibleNormLawFirm1SourceDetails = (function () {
    function PossibleNormLawFirm1SourceDetails() {
    }
    PossibleNormLawFirm1SourceDetails.getAttributeTypeMap = function () {
        return PossibleNormLawFirm1SourceDetails.attributeTypeMap;
    };
    PossibleNormLawFirm1SourceDetails.discriminator = undefined;
    PossibleNormLawFirm1SourceDetails.attributeTypeMap = [
        {
            "name": "source",
            "baseName": "source",
            "type": "PossibleNormLawFirm1SourceDetailsSourceEnum",
            "format": ""
        },
        {
            "name": "linkedNormAttorneyIdArray",
            "baseName": "linkedNormAttorneyIdArray",
            "type": "Array<string>",
            "format": ""
        }
    ];
    return PossibleNormLawFirm1SourceDetails;
}());
exports.PossibleNormLawFirm1SourceDetails = PossibleNormLawFirm1SourceDetails;
var PossibleNormLawFirm1SourceDetailsSourceEnum;
(function (PossibleNormLawFirm1SourceDetailsSourceEnum) {
    PossibleNormLawFirm1SourceDetailsSourceEnum["LinkedInOtherCases"] = "Case_Attorney_Linked_In_Other_Cases";
    PossibleNormLawFirm1SourceDetailsSourceEnum["FieldContainsLawFirm"] = "Case_Attorney_Field_Contains_Law_Firm";
})(PossibleNormLawFirm1SourceDetailsSourceEnum = exports.PossibleNormLawFirm1SourceDetailsSourceEnum || (exports.PossibleNormLawFirm1SourceDetailsSourceEnum = {}));
//# sourceMappingURL=PossibleNormLawFirm1SourceDetails.js.map