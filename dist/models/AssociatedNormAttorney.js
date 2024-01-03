"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssociatedNormAttorney = void 0;
var AssociatedNormAttorney = (function () {
    function AssociatedNormAttorney() {
    }
    AssociatedNormAttorney.getAttributeTypeMap = function () {
        return AssociatedNormAttorney.attributeTypeMap;
    };
    AssociatedNormAttorney.discriminator = undefined;
    AssociatedNormAttorney.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normAttorneyAPI",
            "baseName": "normAttorneyAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "normAttorneyId",
            "baseName": "normAttorneyId",
            "type": "string",
            "format": ""
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
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "middleName",
            "baseName": "middleName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
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
            "name": "stateBarDataArray",
            "baseName": "stateBarDataArray",
            "type": "Array<BarRecordPreview1>",
            "format": ""
        }
    ];
    return AssociatedNormAttorney;
}());
exports.AssociatedNormAttorney = AssociatedNormAttorney;
//# sourceMappingURL=AssociatedNormAttorney.js.map