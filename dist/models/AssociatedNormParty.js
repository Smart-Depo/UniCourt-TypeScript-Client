"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormParty = void 0;
var AssociatedNormParty = (function () {
    function AssociatedNormParty() {
    }
    AssociatedNormParty.getAttributeTypeMap = function () {
        return AssociatedNormParty.attributeTypeMap;
    };
    AssociatedNormParty.discriminator = undefined;
    AssociatedNormParty.attributeTypeMap = [
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
    return AssociatedNormParty;
}());
exports.AssociatedNormParty = AssociatedNormParty;
//# sourceMappingURL=AssociatedNormParty.js.map