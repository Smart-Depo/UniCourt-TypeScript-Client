# .PartyAnalyticsAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNormAttorneysAssociatedWithNormParty**](PartyAnalyticsAPIApi.md#getNormAttorneysAssociatedWithNormParty) | **GET** /normParty/{normPartyId}/associatedNormAttorneys | Attorneys that represented the Party.
[**getNormJudgesAssociatedWithNormParty**](PartyAnalyticsAPIApi.md#getNormJudgesAssociatedWithNormParty) | **GET** /normParty/{normPartyId}/associatedNormJudges | Judges Faced By the Party.
[**getNormLawFirmsAssociatedWithNormParty**](PartyAnalyticsAPIApi.md#getNormLawFirmsAssociatedWithNormParty) | **GET** /normParty/{normPartyId}/associatedNormLawFirms | Law Firms that represented the Party.
[**getNormPartyById**](PartyAnalyticsAPIApi.md#getNormPartyById) | **GET** /normParty/{normPartyId} | Norm Party Details.
[**searchNormalizedParties**](PartyAnalyticsAPIApi.md#searchNormalizedParties) | **GET** /normPartySearch | Party search.
[**searchNormalizedPartiesById**](PartyAnalyticsAPIApi.md#searchNormalizedPartiesById) | **GET** /normPartySearch/{normPartySearchId} | Norm party search results for a given normPartySearchId.


# **getNormAttorneysAssociatedWithNormParty**
> AssociatedNormAttorneyResponse1 getNormAttorneysAssociatedWithNormParty()

Search for attorneys who have represented a given party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartyAnalyticsAPIApi(configuration);

let body:.PartyAnalyticsAPIApiGetNormAttorneysAssociatedWithNormPartyRequest = {
  // string | The normPartyID value of the desired party.   - minimum: 18   - maximum: 18 
  normPartyId: "NORGrPmQyLdx9NGHcT",
  // string | The keyword expression targeting the desired attorneys. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormAttorneysAssociatedWithNormParty(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normPartyId** | [**string**] | The normPartyID value of the desired party.   - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The keyword expression targeting the desired attorneys. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - minimum: 1  | (optional) defaults to undefined


### Return type

**AssociatedNormAttorneyResponse1**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNormJudgesAssociatedWithNormParty**
> AssociatedNormJudgeResponse1 getNormJudgesAssociatedWithNormParty()

Search for judges before whom a party has appeared using a keyword expression. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartyAnalyticsAPIApi(configuration);

let body:.PartyAnalyticsAPIApiGetNormJudgesAssociatedWithNormPartyRequest = {
  // string | The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
  normPartyId: "NORGrPmQyLdx9NGHcT",
  // string | The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormJudgesAssociatedWithNormParty(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normPartyId** | [**string**] | The normPartyId value of the desired party.   - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - minimum: 1  | (optional) defaults to undefined


### Return type

**AssociatedNormJudgeResponse1**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNormLawFirmsAssociatedWithNormParty**
> AssociatedNormLawFirmResponse1 getNormLawFirmsAssociatedWithNormParty()

Search for law firms that have represented the specified party using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\",\"CORTYsomR6GiiiPovp\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all lawfirms associated with Party with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartyAnalyticsAPIApi(configuration);

let body:.PartyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormPartyRequest = {
  // string | The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
  normPartyId: "NORGrPmQyLdx9NGHcT",
  // string | The keyword expression targeting the desired law firms. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormLawFirmsAssociatedWithNormParty(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normPartyId** | [**string**] | The normPartyId value of the desired party.   - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The keyword expression targeting the desired law firms. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - minimum: 1  | (optional) defaults to undefined


### Return type

**AssociatedNormLawFirmResponse1**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getNormPartyById**
> NormParty1 getNormPartyById()

Retrieve the specified party. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartyAnalyticsAPIApi(configuration);

let body:.PartyAnalyticsAPIApiGetNormPartyByIdRequest = {
  // string | The normPartyId value of the desired party.   - minimum: 18   - maximum: 18 
  normPartyId: "NORGrPmQyLdx9NGHcT",
};

apiInstance.getNormPartyById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normPartyId** | [**string**] | The normPartyId value of the desired party.   - minimum: 18   - maximum: 18  | defaults to undefined


### Return type

**NormParty1**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchNormalizedParties**
> SearchNormalizedParties200Response searchNormalizedParties()

### Search for a party using a keyword expression. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartyAnalyticsAPIApi(configuration);

let body:.PartyAnalyticsAPIApiSearchNormalizedPartiesRequest = {
  // string | The keyword expression targeting the desired party.</a>  (optional)
  q: "normPartyId:"NORGJWPpNLekV7dKTm"",
  // number | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  (optional)
  pageNumber: 1,
};

apiInstance.searchNormalizedParties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | The keyword expression targeting the desired party.&lt;/a&gt;  | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  | (optional) defaults to undefined


### Return type

**SearchNormalizedParties200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **searchNormalizedPartiesById**
> SearchNormalizedParties200Response searchNormalizedPartiesById()

### Retrieve a search for a party. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PartyAnalyticsAPIApi(configuration);

let body:.PartyAnalyticsAPIApiSearchNormalizedPartiesByIdRequest = {
  // string | The normPartySearchId value of the search to be retrieved.
  normPartySearchId: "PSRCUoacNCGj9ezvqf",
  // number | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  (optional)
  pageNumber: 1,
};

apiInstance.searchNormalizedPartiesById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normPartySearchId** | [**string**] | The normPartySearchId value of the search to be retrieved. | defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  | (optional) defaults to undefined


### Return type

**SearchNormalizedParties200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Error |  -  |
**404** | Returned if the resource is not found. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


