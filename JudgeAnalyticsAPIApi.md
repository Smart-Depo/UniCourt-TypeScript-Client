# .JudgeAnalyticsAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNormAttorneysAssociatedWithNormJudge**](JudgeAnalyticsAPIApi.md#getNormAttorneysAssociatedWithNormJudge) | **GET** /normJudge/{normJudgeId}/associatedNormAttorneys | Attorneys Associated with the Judge.
[**getNormJudgeById**](JudgeAnalyticsAPIApi.md#getNormJudgeById) | **GET** /normJudge/{normJudgeId} | Norm Judge Details.
[**getNormLawFirmsAssociatedWithNormJudge**](JudgeAnalyticsAPIApi.md#getNormLawFirmsAssociatedWithNormJudge) | **GET** /normJudge/{normJudgeId}/associatedNormLawFirms | Law Firms Associated With the Judge.
[**getNormPartiesAssociatedWithNormJudge**](JudgeAnalyticsAPIApi.md#getNormPartiesAssociatedWithNormJudge) | **GET** /normJudge/{normJudgeId}/associatedNormParties | Parties Associated with the Judge.
[**searchNormalizedJudges**](JudgeAnalyticsAPIApi.md#searchNormalizedJudges) | **GET** /normJudgeSearch | Judge search.
[**searchNormalizedJudgesById**](JudgeAnalyticsAPIApi.md#searchNormalizedJudgesById) | **GET** /normJudgeSearch/{normJudgeSearchId} | Norm judge search results for a given normJudgeSearchId.


# **getNormAttorneysAssociatedWithNormJudge**
> AssociatedNormAttorneyResponse1 getNormAttorneysAssociatedWithNormJudge()

Search for attorneys who have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all attorneys associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JudgeAnalyticsAPIApi(configuration);

let body:.JudgeAnalyticsAPIApiGetNormAttorneysAssociatedWithNormJudgeRequest = {
  // string | The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
  normJudgeId: "NJUDT7jCZyFNeLGpRq",
  // string | The keyword expression targeting the desired attorneys. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormAttorneysAssociatedWithNormJudge(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normJudgeId** | [**string**] | The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18  | defaults to undefined
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

# **getNormJudgeById**
> NormJudge1 getNormJudgeById()

Retrieve the specified judge. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JudgeAnalyticsAPIApi(configuration);

let body:.JudgeAnalyticsAPIApiGetNormJudgeByIdRequest = {
  // string | The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
  normJudgeId: "NJUDT7jCZyFNeLGpRq",
};

apiInstance.getNormJudgeById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normJudgeId** | [**string**] | The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18  | defaults to undefined


### Return type

**NormJudge1**

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

# **getNormLawFirmsAssociatedWithNormJudge**
> AssociatedNormLawFirmResponse1 getNormLawFirmsAssociatedWithNormJudge()

Search for law firms that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLOPUfJRhw5yPxgRi\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Law Firms associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JudgeAnalyticsAPIApi(configuration);

let body:.JudgeAnalyticsAPIApiGetNormLawFirmsAssociatedWithNormJudgeRequest = {
  // string | The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
  normJudgeId: "NJUDT7jCZyFNeLGpRq",
  // string | The keyword expression targeting the desired law firms. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormLawFirmsAssociatedWithNormJudge(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normJudgeId** | [**string**] | The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18  | defaults to undefined
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

# **getNormPartiesAssociatedWithNormJudge**
> AssociatedNormPartyResponse1 getNormPartiesAssociatedWithNormJudge()

Search for parties that have appeared before the specified judge using a keyword expression. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtLocationId IN (\"COLODj4BBVTho3pKpz\",\"COLOPUfJRhw5yPxgRi\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all Parties associated with judge with norm id NJUDT7jCZyFNeLGpRq of all cases with case type id CTYPGkaW3aGJyKGyfn and case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JudgeAnalyticsAPIApi(configuration);

let body:.JudgeAnalyticsAPIApiGetNormPartiesAssociatedWithNormJudgeRequest = {
  // string | The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18 
  normJudgeId: "NJUDT7jCZyFNeLGpRq",
  // string | The keyword expression targeting the desired parties. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormPartiesAssociatedWithNormJudge(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normJudgeId** | [**string**] | The normJudgeId value of the desired judge.   - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The keyword expression targeting the desired parties. | (optional) defaults to undefined
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

# **searchNormalizedJudges**
> SearchNormalizedJudges200Response searchNormalizedJudges()

### Search for a judge using a keyword expression. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JudgeAnalyticsAPIApi(configuration);

let body:.JudgeAnalyticsAPIApiSearchNormalizedJudgesRequest = {
  // string | The keyword expression targeting the desired judge.</a>  (optional)
  q: "normJudgeId:"NJUDFAJDwRVLYPoPjk"",
  // number | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  (optional)
  pageNumber: 1,
};

apiInstance.searchNormalizedJudges(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | The keyword expression targeting the desired judge.&lt;/a&gt;  | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  | (optional) defaults to undefined


### Return type

**SearchNormalizedJudges200Response**

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

# **searchNormalizedJudgesById**
> SearchNormalizedJudges200Response searchNormalizedJudgesById()

### Retrieve the desired search for a judge. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JudgeAnalyticsAPIApi(configuration);

let body:.JudgeAnalyticsAPIApiSearchNormalizedJudgesByIdRequest = {
  // string | The normJudgeSearchId value of the desired search.
  normJudgeSearchId: "JSRCi9NPpS2X4QNAt5",
  // number | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  (optional)
  pageNumber: 1,
};

apiInstance.searchNormalizedJudgesById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normJudgeSearchId** | [**string**] | The normJudgeSearchId value of the desired search. | defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  | (optional) defaults to undefined


### Return type

**SearchNormalizedJudges200Response**

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


