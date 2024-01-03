"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOSAssociatedNormOrganization1RelationshipTypeEnum = exports.SOSAssociatedNormOrganization1 = void 0;
var SOSAssociatedNormOrganization1 = (function () {
    function SOSAssociatedNormOrganization1() {
    }
    SOSAssociatedNormOrganization1.getAttributeTypeMap = function () {
        return SOSAssociatedNormOrganization1.attributeTypeMap;
    };
    SOSAssociatedNormOrganization1.discriminator = undefined;
    SOSAssociatedNormOrganization1.attributeTypeMap = [
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "normOrganizationId",
            "baseName": "normOrganizationId",
            "type": "string",
            "format": ""
        },
        {
            "name": "normOrganizationAPI",
            "baseName": "normOrganizationAPI",
            "type": "string",
            "format": "uri"
        },
        {
            "name": "relationshipType",
            "baseName": "relationshipType",
            "type": "SOSAssociatedNormOrganization1RelationshipTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromDate",
            "baseName": "fromDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "toDate",
            "baseName": "toDate",
            "type": "Date",
            "format": "date-time"
        }
    ];
    return SOSAssociatedNormOrganization1;
}());
exports.SOSAssociatedNormOrganization1 = SOSAssociatedNormOrganization1;
var SOSAssociatedNormOrganization1RelationshipTypeEnum;
(function (SOSAssociatedNormOrganization1RelationshipTypeEnum) {
    SOSAssociatedNormOrganization1RelationshipTypeEnum["Parent"] = "Parent";
    SOSAssociatedNormOrganization1RelationshipTypeEnum["Child"] = "Child";
})(SOSAssociatedNormOrganization1RelationshipTypeEnum = exports.SOSAssociatedNormOrganization1RelationshipTypeEnum || (exports.SOSAssociatedNormOrganization1RelationshipTypeEnum = {}));
//# sourceMappingURL=SOSAssociatedNormOrganization1.js.map