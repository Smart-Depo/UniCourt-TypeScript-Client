"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormLawFirm = void 0;
var AssociatedNormLawFirm = (function () {
    function AssociatedNormLawFirm() {
    }
    AssociatedNormLawFirm.getAttributeTypeMap = function () {
        return AssociatedNormLawFirm.attributeTypeMap;
    };
    AssociatedNormLawFirm.discriminator = undefined;
    AssociatedNormLawFirm.attributeTypeMap = [
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
    return AssociatedNormLawFirm;
}());
exports.AssociatedNormLawFirm = AssociatedNormLawFirm;
//# sourceMappingURL=AssociatedNormLawFirm.js.map