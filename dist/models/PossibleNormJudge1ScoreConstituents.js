"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PossibleNormJudge1ScoreConstituentsPhoneEnum = exports.PossibleNormJudge1ScoreConstituentsEmailEnum = exports.PossibleNormJudge1ScoreConstituentsAddressEnum = exports.PossibleNormJudge1ScoreConstituents = void 0;
var PossibleNormJudge1ScoreConstituents = (function () {
    function PossibleNormJudge1ScoreConstituents() {
    }
    PossibleNormJudge1ScoreConstituents.getAttributeTypeMap = function () {
        return PossibleNormJudge1ScoreConstituents.attributeTypeMap;
    };
    PossibleNormJudge1ScoreConstituents.discriminator = undefined;
    PossibleNormJudge1ScoreConstituents.attributeTypeMap = [
        {
            "name": "nameSimilarityScore",
            "baseName": "nameSimilarityScore",
            "type": "number",
            "format": "float"
        },
        {
            "name": "otherPotentialNormJudges",
            "baseName": "otherPotentialNormJudges",
            "type": "number",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "PossibleNormJudge1ScoreConstituentsAddressEnum",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "PossibleNormJudge1ScoreConstituentsEmailEnum",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "PossibleNormJudge1ScoreConstituentsPhoneEnum",
            "format": ""
        }
    ];
    return PossibleNormJudge1ScoreConstituents;
}());
exports.PossibleNormJudge1ScoreConstituents = PossibleNormJudge1ScoreConstituents;
var PossibleNormJudge1ScoreConstituentsAddressEnum;
(function (PossibleNormJudge1ScoreConstituentsAddressEnum) {
    PossibleNormJudge1ScoreConstituentsAddressEnum["Matched"] = "Matched";
    PossibleNormJudge1ScoreConstituentsAddressEnum["Mismatched"] = "Mismatched";
    PossibleNormJudge1ScoreConstituentsAddressEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormJudge1ScoreConstituentsAddressEnum = exports.PossibleNormJudge1ScoreConstituentsAddressEnum || (exports.PossibleNormJudge1ScoreConstituentsAddressEnum = {}));
var PossibleNormJudge1ScoreConstituentsEmailEnum;
(function (PossibleNormJudge1ScoreConstituentsEmailEnum) {
    PossibleNormJudge1ScoreConstituentsEmailEnum["Matched"] = "Matched";
    PossibleNormJudge1ScoreConstituentsEmailEnum["Mismatched"] = "Mismatched";
    PossibleNormJudge1ScoreConstituentsEmailEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormJudge1ScoreConstituentsEmailEnum = exports.PossibleNormJudge1ScoreConstituentsEmailEnum || (exports.PossibleNormJudge1ScoreConstituentsEmailEnum = {}));
var PossibleNormJudge1ScoreConstituentsPhoneEnum;
(function (PossibleNormJudge1ScoreConstituentsPhoneEnum) {
    PossibleNormJudge1ScoreConstituentsPhoneEnum["Matched"] = "Matched";
    PossibleNormJudge1ScoreConstituentsPhoneEnum["Mismatched"] = "Mismatched";
    PossibleNormJudge1ScoreConstituentsPhoneEnum["NotProvidedByDataSource"] = "Not_Provided_By_Data_Source";
})(PossibleNormJudge1ScoreConstituentsPhoneEnum = exports.PossibleNormJudge1ScoreConstituentsPhoneEnum || (exports.PossibleNormJudge1ScoreConstituentsPhoneEnum = {}));
//# sourceMappingURL=PossibleNormJudge1ScoreConstituents.js.map