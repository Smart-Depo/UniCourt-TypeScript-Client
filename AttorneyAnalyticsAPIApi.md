# .AttorneyAnalyticsAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNormAttorneyById**](AttorneyAnalyticsAPIApi.md#getNormAttorneyById) | **GET** /normAttorney/{normAttorneyId} | Norm Attorney Details.
[**getNormJudgesAssociatedWithNormAttorney**](AttorneyAnalyticsAPIApi.md#getNormJudgesAssociatedWithNormAttorney) | **GET** /normAttorney/{normAttorneyId}/associatedNormJudges | Judges faced by the Attorney.
[**getNormLawFirmsAssociatedWithNormAttorney**](AttorneyAnalyticsAPIApi.md#getNormLawFirmsAssociatedWithNormAttorney) | **GET** /normAttorney/{normAttorneyId}/associatedNormLawFirms | Law Firms the attorney has worked for.
[**getNormPartiesAssociatedWithNormAttorney**](AttorneyAnalyticsAPIApi.md#getNormPartiesAssociatedWithNormAttorney) | **GET** /normAttorney/{normAttorneyId}/associatedNormParties | Parties Represented By the Attorney.
[**searchNormalizedAttorneys**](AttorneyAnalyticsAPIApi.md#searchNormalizedAttorneys) | **GET** /normAttorneySearch | Attorney search.
[**searchNormalizedAttorneysById**](AttorneyAnalyticsAPIApi.md#searchNormalizedAttorneysById) | **GET** /normAttorneySearch/{normAttorneySearchId} | Norm attorney search results for a given normAttorneySearchId.


# **getNormAttorneyById**
> NormAttorney1 getNormAttorneyById()

This endpoint retrieves information on the attorney in our normalized attorney database which matches the normAttorneyId specified in the request.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AttorneyAnalyticsAPIApi(configuration);

let body:.AttorneyAnalyticsAPIApiGetNormAttorneyByIdRequest = {
  // string | Norm ID of Attorney.    - minimum: 18   - maximum: 18 
  normAttorneyId: "NATYs4P6kDBkhKL8CF",
};

apiInstance.getNormAttorneyById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normAttorneyId** | [**string**] | Norm ID of Attorney.    - minimum: 18   - maximum: 18  | defaults to undefined


### Return type

**NormAttorney1**

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

# **getNormJudgesAssociatedWithNormAttorney**
> AssociatedNormJudgeResponse1 getNormJudgesAssociatedWithNormAttorney()

This endpoint returns information on all judges which have appeared in cases with the attorney specified by the normAttorneyId. The returned judges are ordered in descending order of number of cases shared with the relevant attorney. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AttorneyAnalyticsAPIApi(configuration);

let body:.AttorneyAnalyticsAPIApiGetNormJudgesAssociatedWithNormAttorneyRequest = {
  // string | Norm ID of Attorney.    - minimum: 18   - maximum: 18 
  normAttorneyId: "NATYfwmXwRHS279WPY",
  // string | The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormJudgesAssociatedWithNormAttorney(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normAttorneyId** | [**string**] | Norm ID of Attorney.    - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters. All options are documented above. | (optional) defaults to undefined
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

# **getNormLawFirmsAssociatedWithNormAttorney**
> AssociatedNormLawFirmResponse1 getNormLawFirmsAssociatedWithNormAttorney()

Retrieve law firms with which the specified attorney is known to have been associated. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all LawFirms associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AttorneyAnalyticsAPIApi(configuration);

let body:.AttorneyAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormAttorneyRequest = {
  // string | The normAttorneyId value of the desired attorney.    - minimum: 18   - maximum: 18 
  normAttorneyId: "NATYfwmXwRHS279WPY",
  // string | The keyword expression targeting the desired firms. Keyword expressions should be constructed according to the guidelines shown above. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormLawFirmsAssociatedWithNormAttorney(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normAttorneyId** | [**string**] | The normAttorneyId value of the desired attorney.    - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The keyword expression targeting the desired firms. Keyword expressions should be constructed according to the guidelines shown above. | (optional) defaults to undefined
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

# **getNormPartiesAssociatedWithNormAttorney**
> AssociatedNormPartyResponse1 getNormPartiesAssociatedWithNormAttorney()

Retrieve the parties for which an attorney is known to have represented. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\"  AND  courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTV4vCEaKrhystBz\", \"CORTKQiA4LJuv54tEj\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object.. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with attorney with norm id NATYfwmXwRHS279WPY of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AttorneyAnalyticsAPIApi(configuration);

let body:.AttorneyAnalyticsAPIApiGetNormPartiesAssociatedWithNormAttorneyRequest = {
  // string | The normAttorneyId value of the desired attorney.   - minimum: 18   - maximum: 18 
  normAttorneyId: "NATYfwmXwRHS279WPY",
  // string | The keyword expression targeting the desired parties. Keyword expressions should be constructed according to the guidelines shown above. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormPartiesAssociatedWithNormAttorney(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normAttorneyId** | [**string**] | The normAttorneyId value of the desired attorney.   - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The keyword expression targeting the desired parties. Keyword expressions should be constructed according to the guidelines shown above. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - minimum: 1  | (optional) defaults to undefined


### Return type

**AssociatedNormPartyResponse1**

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

# **searchNormalizedAttorneys**
> SearchNormalizedAttorneys200Response searchNormalizedAttorneys()

### This endpoint retrieves information, including the normAttorneyId, on all attorneys in our normalized attorney database which match the request parameters. All query parameters supported by this API can be found in the schema section below. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AttorneyAnalyticsAPIApi(configuration);

let body:.AttorneyAnalyticsAPIApiSearchNormalizedAttorneysRequest = {
  // string | The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters.</a>  (optional)
  q: "normAttorneyId:"NATYhUvNaef3b2iP8D"",
  // number | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  (optional)
  pageNumber: 1,
};

apiInstance.searchNormalizedAttorneys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | The URL encoded query you are searching for. The query can be as simple as a keyword, but supports many additional options and filters.&lt;/a&gt;  | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  | (optional) defaults to undefined


### Return type

**SearchNormalizedAttorneys200Response**

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

# **searchNormalizedAttorneysById**
> SearchNormalizedAttorneys200Response searchNormalizedAttorneysById()

### All query parameters supported for this API can be found in below schema section. Schema --> NormAttorneySearchQueryObject 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AttorneyAnalyticsAPIApi(configuration);

let body:.AttorneyAnalyticsAPIApiSearchNormalizedAttorneysByIdRequest = {
  // string | Norm Attorney Search information for the given normAttorneySearchId.
  normAttorneySearchId: "ASRCJxUHYsgddr4Hc5",
  // number | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  (optional)
  pageNumber: 1,
};

apiInstance.searchNormalizedAttorneysById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normAttorneySearchId** | [**string**] | Norm Attorney Search information for the given normAttorneySearchId. | defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  | (optional) defaults to undefined


### Return type

**SearchNormalizedAttorneys200Response**

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


