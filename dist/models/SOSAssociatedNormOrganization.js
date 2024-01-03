"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOSAssociatedNormOrganizationRelationshipTypeEnum = exports.SOSAssociatedNormOrganization = void 0;
var SOSAssociatedNormOrganization = (function () {
    function SOSAssociatedNormOrganization() {
    }
    SOSAssociatedNormOrganization.getAttributeTypeMap = function () {
        return SOSAssociatedNormOrganization.attributeTypeMap;
    };
    SOSAssociatedNormOrganization.discriminator = undefined;
    SOSAssociatedNormOrganization.attributeTypeMap = [
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
            "type": "SOSAssociatedNormOrganizationRelationshipTypeEnum",
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
    return SOSAssociatedNormOrganization;
}());
exports.SOSAssociatedNormOrganization = SOSAssociatedNormOrganization;
var SOSAssociatedNormOrganizationRelationshipTypeEnum;
(function (SOSAssociatedNormOrganizationRelationshipTypeEnum) {
    SOSAssociatedNormOrganizationRelationshipTypeEnum["Parent"] = "Parent";
    SOSAssociatedNormOrganizationRelationshipTypeEnum["Child"] = "Child";
})(SOSAssociatedNormOrganizationRelationshipTypeEnum = exports.SOSAssociatedNormOrganizationRelationshipTypeEnum || (exports.SOSAssociatedNormOrganizationRelationshipTypeEnum = {}));
//# sourceMappingURL=SOSAssociatedNormOrganization.js.map