# .LawFirmAnalyticsAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNormAttorneysAssociatedWithNormLawFirm**](LawFirmAnalyticsAPIApi.md#getNormAttorneysAssociatedWithNormLawFirm) | **GET** /normLawFirm/{normLawFirmId}/associatedNormAttorneys | Attorneys working for the Law Firm.
[**getNormJudgesAssociatedWithNormLawFirm**](LawFirmAnalyticsAPIApi.md#getNormJudgesAssociatedWithNormLawFirm) | **GET** /normLawFirm/{normLawFirmId}/associatedNormJudges | Judges Faced By the Law Firm.
[**getNormLawFirmById**](LawFirmAnalyticsAPIApi.md#getNormLawFirmById) | **GET** /normLawFirm/{normLawFirmId} | Norm LawFirm Details.
[**getNormPartiesAssociatedWithNormLawFirm**](LawFirmAnalyticsAPIApi.md#getNormPartiesAssociatedWithNormLawFirm) | **GET** /normLawFirm/{normLawFirmId}/associatedNormParties | Parties Represented by the Law Firm.
[**searchNormalizedLawFirms**](LawFirmAnalyticsAPIApi.md#searchNormalizedLawFirms) | **GET** /normLawFirmSearch | Law firm search.
[**searchNormalizedLawFirmsById**](LawFirmAnalyticsAPIApi.md#searchNormalizedLawFirmsById) | **GET** /normLawFirmSearch/{normLawFirmSearchId} | Norm law firm search result for a given normLawFirmSearchId.


# **getNormAttorneysAssociatedWithNormLawFirm**
> AssociatedNormAttorneyResponse1 getNormAttorneysAssociatedWithNormLawFirm()

Retrieve the attorneys associated with a given normalized law firm. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId**  | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate**  | Single Allowed |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo**  | Multiple Ids Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br>         ## Example Query Query to get all attorneys associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LawFirmAnalyticsAPIApi(configuration);

let body:.LawFirmAnalyticsAPIApiGetNormAttorneysAssociatedWithNormLawFirmRequest = {
  // string | The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
  normLawFirmId: "NORGrPmQyLdx9NGHcT",
  // string | The keyword expression targeting the desired attorneys. Keywords should be constructed according to the guidelines given above. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormAttorneysAssociatedWithNormLawFirm(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normLawFirmId** | [**string**] | The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The keyword expression targeting the desired attorneys. Keywords should be constructed according to the guidelines given above. | (optional) defaults to undefined
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

# **getNormJudgesAssociatedWithNormLawFirm**
> AssociatedNormJudgeResponse1 getNormJudgesAssociatedWithNormLawFirm()

Retrieve the judges before which a given normalized law firm has appeared. <br><br> ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed  |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed  |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed  |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed  |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed  |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed  |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **caseFiledDate** | Single Allowed   |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple Ids Allowed  |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all judges associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LawFirmAnalyticsAPIApi(configuration);

let body:.LawFirmAnalyticsAPIApiGetNormJudgesAssociatedWithNormLawFirmRequest = {
  // string | The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
  normLawFirmId: "NORGrPmQyLdx9NGHcT",
  // string | The keyword expression targeting the desired judges. Keywords should be constructed according to the guidelines given above. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormJudgesAssociatedWithNormLawFirm(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normLawFirmId** | [**string**] | The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18  | defaults to undefined
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

# **getNormLawFirmById**
> NormLawFirm1 getNormLawFirmById()

Retrieve the specified normalized law firm. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LawFirmAnalyticsAPIApi(configuration);

let body:.LawFirmAnalyticsAPIApiGetNormLawFirmByIdRequest = {
  // string | The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
  normLawFirmId: "NORGrPmQyLdx9NGHcT",
};

apiInstance.getNormLawFirmById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normLawFirmId** | [**string**] | The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18  | defaults to undefined


### Return type

**NormLawFirm1**

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

# **getNormPartiesAssociatedWithNormLawFirm**
> AssociatedNormPartyResponse1 getNormPartiesAssociatedWithNormLawFirm()

Retrieve the parties that the given normalized law firm has represented. ## Terms and Connectors | Connector | Schema   | Description  | Example | | ------| ------| ------|------| | **AND** ||Find analytics containing all connected terms. The word AND does not have to be capitalized.|**courtId:\"CORTV4vCEaKrhystBz\" AND courtLocationId:\"COLO6b82CkRqS846hx\"**| | **IN()** || Allows you to specify multiple values, for a limit of up to 10.| **courtId IN (\"CORTKQiA4LJuv54tEj\",\"CORTV4vCEaKrhystBz\")**| | **courtId** | Multiple Ids Allowed |Find Analytics for a particular Court Object. | **courtId:\"CORTV4vCEaKrhystBz\"** | | **courtSystemId** | Multiple Ids Allowed |Find Analytics for a particular Court System Object. | **courtSystemId:\"COSYACHBdMewtaG5DY\"** | | **courtTypeId** | Multiple Ids Allowed |Find Analytics for a particular Court Type Object. | **courtTypeId:\"COTPm8jjc2PAydpFhq\"** | | **courtLocationId** | Multiple Ids Allowed |Find Analytics for a particular Court Location Object. | **courtLocationId:\"COLO6b82CkRqS846hx\"** | | **caseTypeId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Object. | **caseTypeId:\"CTYPGkaW3aGJyKGyfn\"** | | **caseTypeGroupId** | Multiple Ids Allowed |Find Analytics for a particular Case Type Group Object. | **caseTypeGroupId:\"CTYGBDwLfbbNBPBn5e\"** | | **areaOfLawId** | Multiple Ids Allowed |Find Analytics for a particular Area Of Law Object. | **areaOfLawId:\"AOFL2UxEWfVmTPMyqf\"** | | **caseClassId** | Multiple Ids Allowed |Find Analytics for a particular Case Class Category Object. | **caseClassId:\"CSCLNjbKTN7Yfo2wdb\"** | | **partyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Object. | **partyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **partyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Party Type Group Object. | **partyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **attorneyPartyRoleId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Object. | **attorneyPartyRoleId:\"PTYRiP8nMgPxBsPc5i\"** | | **attorneyPartyRoleGroupId** | Multiple Ids Allowed |Find Analytics for a particular Attorney Party Type Group Object. | **attorneyPartyRoleGroupId:\"PTYGBnjxbx6tKNfVEP\"** | | **caseFiledDate** | Single Allowed  |Find Analytics within a particular date range. | **caseFiledDate:[2018-05-08T00:00:00+00:00TO2019-05-08T00:00:00+00:00]** | | **JurisdictionGeo** | Multiple filters Allowed |Find Analytics within a particular Jurisdiction Geo. | **(JurisdictionGeo:(state:\"California\"))** | | **confidenceScore** | Single Allowed |Find Analytics for a given ConfidenceScore  | **confidenceScore:[0.3 TO \\*]** | | **bestMatch** | Single Allowed |True if the normEntity has the highest Confidence Score of all possible normEntities | **bestMatch:true** | <br> ## Example Query Query to get all parties associated with LawFirm with norm id NORGrPmQyLdx9NGHcT of all cases with case type id CTYPGkaW3aGJyKGyfn and  case filed date between Jan 1st, 2017 to Nov 30th,2021<br> q=caseTypeId:\"CTYPGkaW3aGJyKGyfn\" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00] <br><br> 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LawFirmAnalyticsAPIApi(configuration);

let body:.LawFirmAnalyticsAPIApiGetNormPartiesAssociatedWithNormLawFirmRequest = {
  // string | The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18 
  normLawFirmId: "NORGrPmQyLdx9NGHcT",
  // string | The keyword expression targeting the desired parties. Keywords should be constructed according to the guidelines given above. (optional)
  q: "caseTypeId:"CTYPGkaW3aGJyKGyfn" AND caseFiledDate:[2017-01-01T00:00:00+00:00TO2021-11-30T00:00:00+00:00]",
  // number | The page number of the desired page of results. - minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getNormPartiesAssociatedWithNormLawFirm(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normLawFirmId** | [**string**] | The normLawFirmId value of the desired normalized law firm.   - minimum: 18   - maximum: 18  | defaults to undefined
 **q** | [**string**] | The keyword expression targeting the desired parties. Keywords should be constructed according to the guidelines given above. | (optional) defaults to undefined
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

# **searchNormalizedLawFirms**
> SearchNormalizedLawFirms200Response searchNormalizedLawFirms()

### Retrieve a normalized law firm using a keyword expression. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LawFirmAnalyticsAPIApi(configuration);

let body:.LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsRequest = {
  // string | The keyword expression targeting the desired law firms.</a>  (optional)
  q: "normLawFirmId:"NORGDiJQPjeed2mtvx"",
  // number | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  (optional)
  pageNumber: 1,
};

apiInstance.searchNormalizedLawFirms(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | The keyword expression targeting the desired law firms.&lt;/a&gt;  | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  | (optional) defaults to undefined


### Return type

**SearchNormalizedLawFirms200Response**

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

# **searchNormalizedLawFirmsById**
> SearchNormalizedLawFirms200Response searchNormalizedLawFirmsById()

### Retrieve the specified search for a normalized law firm. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .LawFirmAnalyticsAPIApi(configuration);

let body:.LawFirmAnalyticsAPIApiSearchNormalizedLawFirmsByIdRequest = {
  // string | The normLawFirmSearchId value of the search to be retrieved.
  normLawFirmSearchId: "LSRCeCT9pC3maopkW7",
  // number | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  (optional)
  pageNumber: 1,
};

apiInstance.searchNormalizedLawFirmsById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **normLawFirmSearchId** | [**string**] | The normLawFirmSearchId value of the search to be retrieved. | defaults to undefined
 **pageNumber** | [**number**] | The page number of the desired page of results. - Minimum: 1 - Maximum: 1000  | (optional) defaults to undefined


### Return type

**SearchNormalizedLawFirms200Response**

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


