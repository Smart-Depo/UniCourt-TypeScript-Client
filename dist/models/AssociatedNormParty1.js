"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormParty1 = void 0;
var AssociatedNormParty1 = (function () {
    function AssociatedNormParty1() {
    }
    AssociatedNormParty1.getAttributeTypeMap = function () {
        return AssociatedNormParty1.attributeTypeMap;
    };
    AssociatedNormParty1.discriminator = undefined;
    AssociatedNormParty1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyId",
            "baseName": "normPartyId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normPartyAPI",
            "baseName": "normPartyAPI",
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
    return AssociatedNormParty1;
}());
exports.AssociatedNormParty1 = AssociatedNormParty1;
//# sourceMappingURL=AssociatedNormParty1.js.map