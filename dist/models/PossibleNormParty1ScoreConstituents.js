"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormParty1ScoreConstituentsPhoneEnum = exports.PossibleNormParty1ScoreConstituentsEmailEnum = exports.PossibleNormParty1ScoreConstituentsAddressEnum = exports.PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum = exports.PossibleNormParty1ScoreConstituents = void 0;
var PossibleNormParty1ScoreConstituents = (function () {
    function PossibleNormParty1ScoreConstituents() {
    }
    PossibleNormParty1ScoreConstituents.getAttributeTypeMap = function () {
        return PossibleNormParty1ScoreConstituents.attributeTypeMap;
    };
    PossibleNormParty1ScoreConstituents.discriminator = undefined;
    PossibleNormParty1ScoreConstituents.attributeTypeMap = [
        {
            "name": "nameSimilarityScore",
            "baseName": "nameSimilarityScore",
            "type": "number",
            "format": "float"
        },
        {
            "name": "otherPotentialNormParties",
            "baseName": "otherPotentialNormParties",
            "type": "number",
            "format": ""
        },
        {
            "name": "secretaryOfStateId",
            "baseName": "secretaryOfStateId",
            "type": "PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "PossibleNormParty1ScoreConstituentsAddressEnum",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "PossibleNormParty1ScoreConstituentsEmailEnum",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "PossibleNormParty1ScoreConstituentsPhoneEnum",
            "format": ""
        }
    ];
    return PossibleNormParty1ScoreConstituents;
}());
exports.PossibleNormParty1ScoreConstituents = PossibleNormParty1ScoreConstituents;
var PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum;
(function (PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum) {
    PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum["Matched"] = "Matched";
    PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum["Mismatched"] = "Mismatched";
    PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum = exports.PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum || (exports.PossibleNormParty1ScoreConstituentsSecretaryOfStateIdEnum = {}));
var PossibleNormParty1ScoreConstituentsAddressEnum;
(function (PossibleNormParty1ScoreConstituentsAddressEnum) {
    PossibleNormParty1ScoreConstituentsAddressEnum["Matched"] = "Matched";
    PossibleNormParty1ScoreConstituentsAddressEnum["Mismatched"] = "Mismatched";
    PossibleNormParty1ScoreConstituentsAddressEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormParty1ScoreConstituentsAddressEnum = exports.PossibleNormParty1ScoreConstituentsAddressEnum || (exports.PossibleNormParty1ScoreConstituentsAddressEnum = {}));
var PossibleNormParty1ScoreConstituentsEmailEnum;
(function (PossibleNormParty1ScoreConstituentsEmailEnum) {
    PossibleNormParty1ScoreConstituentsEmailEnum["Matched"] = "Matched";
    PossibleNormParty1ScoreConstituentsEmailEnum["Mismatched"] = "Mismatched";
    PossibleNormParty1ScoreConstituentsEmailEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormParty1ScoreConstituentsEmailEnum = exports.PossibleNormParty1ScoreConstituentsEmailEnum || (exports.PossibleNormParty1ScoreConstituentsEmailEnum = {}));
var PossibleNormParty1ScoreConstituentsPhoneEnum;
(function (PossibleNormParty1ScoreConstituentsPhoneEnum) {
    PossibleNormParty1ScoreConstituentsPhoneEnum["Matched"] = "Matched";
    PossibleNormParty1ScoreConstituentsPhoneEnum["Mismatched"] = "Mismatched";
    PossibleNormParty1ScoreConstituentsPhoneEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormParty1ScoreConstituentsPhoneEnum = exports.PossibleNormParty1ScoreConstituentsPhoneEnum || (exports.PossibleNormParty1ScoreConstituentsPhoneEnum = {}));
//# sourceMappingURL=PossibleNormParty1ScoreConstituents.js.map