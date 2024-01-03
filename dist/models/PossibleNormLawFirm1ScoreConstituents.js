"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormLawFirm1ScoreConstituentsPhoneEnum = exports.PossibleNormLawFirm1ScoreConstituentsEmailEnum = exports.PossibleNormLawFirm1ScoreConstituentsAddressEnum = exports.PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum = exports.PossibleNormLawFirm1ScoreConstituents = void 0;
var PossibleNormLawFirm1ScoreConstituents = (function () {
    function PossibleNormLawFirm1ScoreConstituents() {
    }
    PossibleNormLawFirm1ScoreConstituents.getAttributeTypeMap = function () {
        return PossibleNormLawFirm1ScoreConstituents.attributeTypeMap;
    };
    PossibleNormLawFirm1ScoreConstituents.discriminator = undefined;
    PossibleNormLawFirm1ScoreConstituents.attributeTypeMap = [
        {
            "name": "nameSimilarityScore",
            "baseName": "nameSimilarityScore",
            "type": "number",
            "format": "float"
        },
        {
            "name": "otherPotentialNormLawFirms",
            "baseName": "otherPotentialNormLawFirms",
            "type": "number",
            "format": ""
        },
        {
            "name": "secretaryOfStateId",
            "baseName": "secretaryOfStateId",
            "type": "PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "PossibleNormLawFirm1ScoreConstituentsAddressEnum",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "PossibleNormLawFirm1ScoreConstituentsEmailEnum",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "PossibleNormLawFirm1ScoreConstituentsPhoneEnum",
            "format": ""
        }
    ];
    return PossibleNormLawFirm1ScoreConstituents;
}());
exports.PossibleNormLawFirm1ScoreConstituents = PossibleNormLawFirm1ScoreConstituents;
var PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum;
(function (PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum) {
    PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum["Matched"] = "Matched";
    PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum["Mismatched"] = "Mismatched";
    PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum = exports.PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum || (exports.PossibleNormLawFirm1ScoreConstituentsSecretaryOfStateIdEnum = {}));
var PossibleNormLawFirm1ScoreConstituentsAddressEnum;
(function (PossibleNormLawFirm1ScoreConstituentsAddressEnum) {
    PossibleNormLawFirm1ScoreConstituentsAddressEnum["Matched"] = "Matched";
    PossibleNormLawFirm1ScoreConstituentsAddressEnum["Mismatched"] = "Mismatched";
    PossibleNormLawFirm1ScoreConstituentsAddressEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormLawFirm1ScoreConstituentsAddressEnum = exports.PossibleNormLawFirm1ScoreConstituentsAddressEnum || (exports.PossibleNormLawFirm1ScoreConstituentsAddressEnum = {}));
var PossibleNormLawFirm1ScoreConstituentsEmailEnum;
(function (PossibleNormLawFirm1ScoreConstituentsEmailEnum) {
    PossibleNormLawFirm1ScoreConstituentsEmailEnum["Matched"] = "Matched";
    PossibleNormLawFirm1ScoreConstituentsEmailEnum["Mismatched"] = "Mismatched";
    PossibleNormLawFirm1ScoreConstituentsEmailEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormLawFirm1ScoreConstituentsEmailEnum = exports.PossibleNormLawFirm1ScoreConstituentsEmailEnum || (exports.PossibleNormLawFirm1ScoreConstituentsEmailEnum = {}));
var PossibleNormLawFirm1ScoreConstituentsPhoneEnum;
(function (PossibleNormLawFirm1ScoreConstituentsPhoneEnum) {
    PossibleNormLawFirm1ScoreConstituentsPhoneEnum["Matched"] = "Matched";
    PossibleNormLawFirm1ScoreConstituentsPhoneEnum["Mismatched"] = "Mismatched";
    PossibleNormLawFirm1ScoreConstituentsPhoneEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormLawFirm1ScoreConstituentsPhoneEnum = exports.PossibleNormLawFirm1ScoreConstituentsPhoneEnum || (exports.PossibleNormLawFirm1ScoreConstituentsPhoneEnum = {}));
//# sourceMappingURL=PossibleNormLawFirm1ScoreConstituents.js.map