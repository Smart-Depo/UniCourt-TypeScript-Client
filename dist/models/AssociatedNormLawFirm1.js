"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormLawFirm1 = void 0;
var AssociatedNormLawFirm1 = (function () {
    function AssociatedNormLawFirm1() {
    }
    AssociatedNormLawFirm1.getAttributeTypeMap = function () {
        return AssociatedNormLawFirm1.attributeTypeMap;
    };
    AssociatedNormLawFirm1.discriminator = undefined;
    AssociatedNormLawFirm1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normLawFirmId",
            "baseName": "normLawFirmId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normLawFirmAPI",
            "baseName": "normLawFirmAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseTimeline",
            "baseName": "caseTimeline",
            "type": "CaseTimeline1",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "caseSearchAPI",
            "baseName": "caseSearchAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "caseCount",
            "baseName": "caseCount",
            "type": "number",
            "format": ""
        },
        {
            "name": "sosDataArray",
            "baseName": "sosDataArray",
            "type": "Array<SOSDataPreview1>",
            "format": ""
        }
    ];
    return AssociatedNormLawFirm1;
}());
exports.AssociatedNormLawFirm1 = AssociatedNormLawFirm1;
//# sourceMappingURL=AssociatedNormLawFirm1.js.map