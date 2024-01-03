"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormAttorney1ScoreConstituentsLawFirmEnum = exports.PossibleNormAttorney1ScoreConstituentsPhoneEnum = exports.PossibleNormAttorney1ScoreConstituentsEmailEnum = exports.PossibleNormAttorney1ScoreConstituentsAddressEnum = exports.PossibleNormAttorney1ScoreConstituentsBarIdEnum = exports.PossibleNormAttorney1ScoreConstituents = void 0;
var PossibleNormAttorney1ScoreConstituents = (function () {
    function PossibleNormAttorney1ScoreConstituents() {
    }
    PossibleNormAttorney1ScoreConstituents.getAttributeTypeMap = function () {
        return PossibleNormAttorney1ScoreConstituents.attributeTypeMap;
    };
    PossibleNormAttorney1ScoreConstituents.discriminator = undefined;
    PossibleNormAttorney1ScoreConstituents.attributeTypeMap = [
        {
            "name": "nameSimilarityScore",
            "baseName": "nameSimilarityScore",
            "type": "number",
            "format": "float"
        },
        {
            "name": "otherPotentialNormAttorneys",
            "baseName": "otherPotentialNormAttorneys",
            "type": "number",
            "format": ""
        },
        {
            "name": "barId",
            "baseName": "barId",
            "type": "PossibleNormAttorney1ScoreConstituentsBarIdEnum",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "PossibleNormAttorney1ScoreConstituentsAddressEnum",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "PossibleNormAttorney1ScoreConstituentsEmailEnum",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "PossibleNormAttorney1ScoreConstituentsPhoneEnum",
            "format": ""
        },
        {
            "name": "lawFirm",
            "baseName": "lawFirm",
            "type": "PossibleNormAttorney1ScoreConstituentsLawFirmEnum",
            "format": ""
        }
    ];
    return PossibleNormAttorney1ScoreConstituents;
}());
exports.PossibleNormAttorney1ScoreConstituents = PossibleNormAttorney1ScoreConstituents;
var PossibleNormAttorney1ScoreConstituentsBarIdEnum;
(function (PossibleNormAttorney1ScoreConstituentsBarIdEnum) {
    PossibleNormAttorney1ScoreConstituentsBarIdEnum["Matched"] = "Matched";
    PossibleNormAttorney1ScoreConstituentsBarIdEnum["Mismatched"] = "Mismatched";
    PossibleNormAttorney1ScoreConstituentsBarIdEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormAttorney1ScoreConstituentsBarIdEnum = exports.PossibleNormAttorney1ScoreConstituentsBarIdEnum || (exports.PossibleNormAttorney1ScoreConstituentsBarIdEnum = {}));
var PossibleNormAttorney1ScoreConstituentsAddressEnum;
(function (PossibleNormAttorney1ScoreConstituentsAddressEnum) {
    PossibleNormAttorney1ScoreConstituentsAddressEnum["Matched"] = "Matched";
    PossibleNormAttorney1ScoreConstituentsAddressEnum["Mismatched"] = "Mismatched";
    PossibleNormAttorney1ScoreConstituentsAddressEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormAttorney1ScoreConstituentsAddressEnum = exports.PossibleNormAttorney1ScoreConstituentsAddressEnum || (exports.PossibleNormAttorney1ScoreConstituentsAddressEnum = {}));
var PossibleNormAttorney1ScoreConstituentsEmailEnum;
(function (PossibleNormAttorney1ScoreConstituentsEmailEnum) {
    PossibleNormAttorney1ScoreConstituentsEmailEnum["Matched"] = "Matched";
    PossibleNormAttorney1ScoreConstituentsEmailEnum["Mismatched"] = "Mismatched";
    PossibleNormAttorney1ScoreConstituentsEmailEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormAttorney1ScoreConstituentsEmailEnum = exports.PossibleNormAttorney1ScoreConstituentsEmailEnum || (exports.PossibleNormAttorney1ScoreConstituentsEmailEnum = {}));
var PossibleNormAttorney1ScoreConstituentsPhoneEnum;
(function (PossibleNormAttorney1ScoreConstituentsPhoneEnum) {
    PossibleNormAttorney1ScoreConstituentsPhoneEnum["Matched"] = "Matched";
    PossibleNormAttorney1ScoreConstituentsPhoneEnum["Mismatched"] = "Mismatched";
    PossibleNormAttorney1ScoreConstituentsPhoneEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormAttorney1ScoreConstituentsPhoneEnum = exports.PossibleNormAttorney1ScoreConstituentsPhoneEnum || (exports.PossibleNormAttorney1ScoreConstituentsPhoneEnum = {}));
var PossibleNormAttorney1ScoreConstituentsLawFirmEnum;
(function (PossibleNormAttorney1ScoreConstituentsLawFirmEnum) {
    PossibleNormAttorney1ScoreConstituentsLawFirmEnum["Matched"] = "Matched";
    PossibleNormAttorney1ScoreConstituentsLawFirmEnum["Mismatched"] = "Mismatched";
    PossibleNormAttorney1ScoreConstituentsLawFirmEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormAttorney1ScoreConstituentsLawFirmEnum = exports.PossibleNormAttorney1ScoreConstituentsLawFirmEnum || (exports.PossibleNormAttorney1ScoreConstituentsLawFirmEnum = {}));
//# sourceMappingURL=PossibleNormAttorney1ScoreConstituents.js.map