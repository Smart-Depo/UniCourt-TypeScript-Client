# .CaseDocketAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAttorneyAssociatedParties**](CaseDocketAPIApi.md#getAttorneyAssociatedParties) | **GET** /attorney/{attorneyId}/associatedParties | Gets Associated Party details for a requested Attorney ID.
[**getAttorneyById**](CaseDocketAPIApi.md#getAttorneyById) | **GET** /attorney/{attorneyId} | Gets details for a requested Attorney ID.
[**getCase**](CaseDocketAPIApi.md#getCase) | **GET** /case/{caseId} | Gets case information for a requested Case ID.
[**getCaseAttorneys**](CaseDocketAPIApi.md#getCaseAttorneys) | **GET** /case/{caseId}/attorneys | Gets Attorneys for a requested Case ID.
[**getCaseDocketEntries**](CaseDocketAPIApi.md#getCaseDocketEntries) | **GET** /case/{caseId}/docketEntries | Gets Docket Entries for a requested Case ID.
[**getCaseHearings**](CaseDocketAPIApi.md#getCaseHearings) | **GET** /case/{caseId}/hearings | Gets Hearings for a requested Case ID.
[**getCaseJudges**](CaseDocketAPIApi.md#getCaseJudges) | **GET** /case/{caseId}/judges | Gets Judges for a requested Case ID.
[**getCaseParties**](CaseDocketAPIApi.md#getCaseParties) | **GET** /case/{caseId}/parties | Gets Parties for a requested Case ID.
[**getCaseRelatedCases**](CaseDocketAPIApi.md#getCaseRelatedCases) | **GET** /case/{caseId}/relatedCases | Gets Related Cases for a requested Case ID.
[**getJudgeById**](CaseDocketAPIApi.md#getJudgeById) | **GET** /judge/{judgeId} | Gets details for a requested Judge ID.
[**getPartyAssociatedAttorneys**](CaseDocketAPIApi.md#getPartyAssociatedAttorneys) | **GET** /party/{partyId}/associatedAttorneys | Gets Associated Attorney details for a requested Party ID.
[**getPartyById**](CaseDocketAPIApi.md#getPartyById) | **GET** /party/{partyId} | Gets details for a requested Party ID.
[**getPrimaryDocumentsForDocketEntries**](CaseDocketAPIApi.md#getPrimaryDocumentsForDocketEntries) | **GET** /case/{caseId}/docketEntries/primaryDocuments | Gets Primary Documents of Docket Entries.
[**getSecondaryDocumentsForDocketEntries**](CaseDocketAPIApi.md#getSecondaryDocumentsForDocketEntries) | **GET** /case/{caseId}/docketEntries/secondaryDocuments | Gets Secondary Documents of Docket Entries.


# **getAttorneyAssociatedParties**
> GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations getAttorneyAssociatedParties()

Retrieve the parties represented by the attorney with the specified attorneyId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetAttorneyAssociatedPartiesRequest = {
  // string | Retrieve the parties represented by the attorney with the specified attorneyId value.
  attorneyId: "ATTYgr3ae043d84ebc",
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getAttorneyAssociatedParties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attorneyId** | [**string**] | Retrieve the parties represented by the attorney with the specified attorneyId value. | defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getAttorneyById**
> GetCase200ResponseAttorneysAttorneyArrayInner getAttorneyById()

Retrieve the attorney with the specified attorneyId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetAttorneyByIdRequest = {
  // string | Retrieve the attorney with the specified attorneyId value.
  attorneyId: "ATTYgu01be2e4de654",
};

apiInstance.getAttorneyById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attorneyId** | [**string**] | Retrieve the attorney with the specified attorneyId value. | defaults to undefined


### Return type

**GetCase200ResponseAttorneysAttorneyArrayInner**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCase**
> GetCase200Response getCase()

Retrieve the case with the specified caseId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetCaseRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEgr45196c84f3ff",
};

apiInstance.getCase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined


### Return type

**GetCase200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseAttorneys**
> GetCase200ResponseAttorneys getCaseAttorneys()

Retrieve the attorneys in the case with the specified caseId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetCaseAttorneysRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEgq5943bd47a6d2",
  // boolean | Retrieve attorneys in the case with the specified caseId value whose isVisible flag is set to the specified value. (optional)
  isVisible: true,
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getCaseAttorneys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined
 **isVisible** | [**boolean**] | Retrieve attorneys in the case with the specified caseId value whose isVisible flag is set to the specified value. | (optional) defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponseAttorneys**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseDocketEntries**
> GetCase200ResponseDocketEntries getCaseDocketEntries()

Retrieve the docket entries in the case with the specified caseId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetCaseDocketEntriesRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEgle0bf14b74a96",
  // number | Retrieve the docket entry witih the specified docket number in the case with the specified caseId value. (optional)
  docketNumber: 1,
  // 'latest to oldest' | 'oldest to latest' | Sort the retrieved docket entries in ascending order or descending order of date. (optional)
  sortBy: "latest to oldest",
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getCaseDocketEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined
 **docketNumber** | [**number**] | Retrieve the docket entry witih the specified docket number in the case with the specified caseId value. | (optional) defaults to undefined
 **sortBy** | [**&#39;latest to oldest&#39; | &#39;oldest to latest&#39;**]**Array<&#39;latest to oldest&#39; &#124; &#39;oldest to latest&#39;>** | Sort the retrieved docket entries in ascending order or descending order of date. | (optional) defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponseDocketEntries**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseHearings**
> GetCase200ResponseHearings getCaseHearings()

Gets Hearings for a requested Case ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetCaseHearingsRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEar3c45901ef267",
  // 'latest to oldest' | 'oldest to latest' | Specify the sort order of hearings in the case with the specified caseId. (optional)
  sortBy: "latest to oldest",
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getCaseHearings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined
 **sortBy** | [**&#39;latest to oldest&#39; | &#39;oldest to latest&#39;**]**Array<&#39;latest to oldest&#39; &#124; &#39;oldest to latest&#39;>** | Specify the sort order of hearings in the case with the specified caseId. | (optional) defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponseHearings**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseJudges**
> GetCase200ResponseJudges getCaseJudges()

Retrieve the judges involved in the specified case.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetCaseJudgesRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEgq6e6ea66cd91d",
  // boolean | Retrieve attorneys judges in the case with the specified caseId value whose isVisible flag is set to the specified value. (optional)
  isVisible: true,
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getCaseJudges(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined
 **isVisible** | [**boolean**] | Retrieve attorneys judges in the case with the specified caseId value whose isVisible flag is set to the specified value. | (optional) defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponseJudges**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseParties**
> GetCase200ResponseParties getCaseParties()

Retrieve the parties involved in the case with the specified caseId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetCasePartiesRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEgq8f4cea2d8e1a",
  // boolean | Retrieve parties in the case with the specified caseId value whose isVisible flag is set to the specified value. (optional)
  isVisible: true,
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
  // string | Retrieve all parties with the specified partyRoleId value in the case with the specified caseId value. (optional)
  partyRoleId: "partyRoleId_example",
  // string | Retrieve all parties with the specified partyRoleGroupId value in the case with the specified caseId value. (optional)
  partyRoleGroupId: "partyRoleGroupId_example",
  // string | Retrieve all parties with the specified attorneyRepresentationTypeId value in the case with the specified caseId value. (optional)
  attorneyRepresentationTypeId: "attorneyRepresentationTypeId_example",
  // 'INDIVIDUAL' | 'COMPANY' | 'OTHER' | Retrieve all parties with the specified partyClassificationType value in the case with the specified caseId value. (optional)
  partyClassificationType: "INDIVIDUAL",
};

apiInstance.getCaseParties(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined
 **isVisible** | [**boolean**] | Retrieve parties in the case with the specified caseId value whose isVisible flag is set to the specified value. | (optional) defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined
 **partyRoleId** | [**string**] | Retrieve all parties with the specified partyRoleId value in the case with the specified caseId value. | (optional) defaults to undefined
 **partyRoleGroupId** | [**string**] | Retrieve all parties with the specified partyRoleGroupId value in the case with the specified caseId value. | (optional) defaults to undefined
 **attorneyRepresentationTypeId** | [**string**] | Retrieve all parties with the specified attorneyRepresentationTypeId value in the case with the specified caseId value. | (optional) defaults to undefined
 **partyClassificationType** | [**&#39;INDIVIDUAL&#39; | &#39;COMPANY&#39; | &#39;OTHER&#39;**]**Array<&#39;INDIVIDUAL&#39; &#124; &#39;COMPANY&#39; &#124; &#39;OTHER&#39;>** | Retrieve all parties with the specified partyClassificationType value in the case with the specified caseId value. | (optional) defaults to undefined


### Return type

**GetCase200ResponseParties**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseRelatedCases**
> GetCase200ResponseRelatedCases getCaseRelatedCases()

Retrieve cases that UniCourt has identified as related to the case with the specified caseId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetCaseRelatedCasesRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEba328623913f9f",
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getCaseRelatedCases(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponseRelatedCases**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getJudgeById**
> GetCase200ResponseJudgesJudgeArrayInner getJudgeById()

Retrieve the judge with the specified judgeId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetJudgeByIdRequest = {
  // string | Retrieve the judge with the specified judgeId value.
  judgeId: "JUDGbaf564ec55624a",
};

apiInstance.getJudgeById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **judgeId** | [**string**] | Retrieve the judge with the specified judgeId value. | defaults to undefined


### Return type

**GetCase200ResponseJudgesJudgeArrayInner**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPartyAssociatedAttorneys**
> GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations getPartyAssociatedAttorneys()

Retrieve the attorneys in the case with the specified partyId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetPartyAssociatedAttorneysRequest = {
  // string | Retrieve the party with the specified partyId value.
  partyId: "PRTYgu537f3901f406",
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getPartyAssociatedAttorneys(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyId** | [**string**] | Retrieve the party with the specified partyId value. | defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponsePartiesPartyArrayInnerPartyAttorneyAssociations**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPartyById**
> GetCase200ResponsePartiesPartyArrayInner getPartyById()

Retrieve the party with the specified partyId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetPartyByIdRequest = {
  // string | Retrieve the party with the specified partyId value.
  partyId: "PRTYgla171a8952aed",
};

apiInstance.getPartyById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partyId** | [**string**] | Retrieve the party with the specified partyId value. | defaults to undefined


### Return type

**GetCase200ResponsePartiesPartyArrayInner**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPrimaryDocumentsForDocketEntries**
> GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments getPrimaryDocumentsForDocketEntries()

Retrieve the primary documents in the case with the specified caseId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetPrimaryDocumentsForDocketEntriesRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEgq5da86597e9a4",
  // number | Retrieve the primary documents associated with the specified docket number in the case with the specified caseId value.
  docketNumber: 1,
  // boolean | Retrieve the primary documents in the with the specified inLibrary flag in the case with the specified caseId value. (optional)
  inLibrary: true,
  // Date | Retrieve all primary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date. (optional)
  afterFirstFetchDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Retrieve all primary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date. (optional)
  libraryDate: new Date('1970-01-01T00:00:00.00Z'),
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getPrimaryDocumentsForDocketEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined
 **docketNumber** | [**number**] | Retrieve the primary documents associated with the specified docket number in the case with the specified caseId value. | defaults to undefined
 **inLibrary** | [**boolean**] | Retrieve the primary documents in the with the specified inLibrary flag in the case with the specified caseId value. | (optional) defaults to undefined
 **afterFirstFetchDate** | [**Date**] | Retrieve all primary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date. | (optional) defaults to undefined
 **libraryDate** | [**Date**] | Retrieve all primary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date. | (optional) defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntryPrimaryDocuments**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getSecondaryDocumentsForDocketEntries**
> GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments getSecondaryDocumentsForDocketEntries()

Retrieve the secondary documents in the case with the specified caseId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseDocketAPIApi(configuration);

let body:.CaseDocketAPIApiGetSecondaryDocumentsForDocketEntriesRequest = {
  // string | Retrieve the case with the specified caseId value.
  caseId: "CASEgq5da86597e9a4",
  // number | Retrieve the secondary documents associated with the specified docket number in the case with the specified caseId value.
  docketNumber: 1,
  // boolean | Retrieve the secondary documents in the with the specified inLibrary flag in the case with the specified caseId value. (optional)
  inLibrary: true,
  // Date | Retrieve all secondary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date. (optional)
  afterFirstFetchDate: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Retrieve all secondary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date. (optional)
  libraryDate: new Date('1970-01-01T00:00:00.00Z'),
  // number | Query parameter specifying the page number of the search results to be retrieved. (optional)
  pageNumber: 1,
};

apiInstance.getSecondaryDocumentsForDocketEntries(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | Retrieve the case with the specified caseId value. | defaults to undefined
 **docketNumber** | [**number**] | Retrieve the secondary documents associated with the specified docket number in the case with the specified caseId value. | defaults to undefined
 **inLibrary** | [**boolean**] | Retrieve the secondary documents in the with the specified inLibrary flag in the case with the specified caseId value. | (optional) defaults to undefined
 **afterFirstFetchDate** | [**Date**] | Retrieve all secondary documents in the case with the specified caseId value that were first fetched by UniCourt on the specified date or within the specified date. | (optional) defaults to undefined
 **libraryDate** | [**Date**] | Retrieve all secondary documents in the case with the specified caseId value that were added to the Crowdsourced Library on the specified date or within the specified date. | (optional) defaults to undefined
 **pageNumber** | [**number**] | Query parameter specifying the page number of the search results to be retrieved. | (optional) defaults to undefined


### Return type

**GetCase200ResponseDocketEntriesDocketEntryArrayInnerDocketEntrySecondaryDocuments**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**400** | Invalid Input Parameter |  -  |
**404** | Resource Not Found |  -  |
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


