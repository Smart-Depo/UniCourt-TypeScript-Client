# .CaseUpdateAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCaseUpdateByCaseId**](CaseUpdateAPIApi.md#getCaseUpdateByCaseId) | **GET** /caseUpdate/{caseId} | Get Case Updates for a requested CaseId.
[**getCaseUpdates**](CaseUpdateAPIApi.md#getCaseUpdates) | **GET** /caseUpdates | Get Case Update  list for a requested Date.
[**updateCase**](CaseUpdateAPIApi.md#updateCase) | **PUT** /caseUpdate | Add Case Update for the requested Case Id.


# **getCaseUpdateByCaseId**
> UpdateCase200Response getCaseUpdateByCaseId()

Retrieve case updates for the specified case object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseUpdateAPIApi(configuration);

let body:.CaseUpdateAPIApiGetCaseUpdateByCaseIdRequest = {
  // string | The caseId value of the case object for which updates are to be retrieved.
  caseId: "CASEak99a698ea5413",
};

apiInstance.getCaseUpdateByCaseId(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | The caseId value of the case object for which updates are to be retrieved. | defaults to undefined


### Return type

**UpdateCase200Response**

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
**451** | Sealed Case |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseUpdates**
> GetCaseUpdates200Response getCaseUpdates()

Retrieve case updates for the specified date.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseUpdateAPIApi(configuration);

let body:.CaseUpdateAPIApiGetCaseUpdatesRequest = {
  // string | The caseId value of the case for which updates should be retrieved. (optional)
  caseId: "CASEak99a698ea5413",
  // Date | The date for which case updates are to be retrieved. (optional)
  requestedDate: new Date('2023-03-08T10:17:56+00:00'),
  // 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | Status of the case updates to be retrieved. (optional)
  status: "",
  // number | The page number of the callbacks to be retrieved.<br>   - Minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getCaseUpdates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | The caseId value of the case for which updates should be retrieved. | (optional) defaults to undefined
 **requestedDate** | [**Date**] | The date for which case updates are to be retrieved. | (optional) defaults to undefined
 **status** | [**&#39;IN_PROGRESS&#39; | &#39;COMPLETE&#39; | &#39;FAILURE&#39;**]**Array<&#39;IN_PROGRESS&#39; &#124; &#39;COMPLETE&#39; &#124; &#39;FAILURE&#39;>** | Status of the case updates to be retrieved. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1  | (optional) defaults to 1


### Return type

**GetCaseUpdates200Response**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateCase**
> UpdateCase200Response updateCase()

Request case updates for the specified case.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseUpdateAPIApi(configuration);

let body:.CaseUpdateAPIApiUpdateCaseRequest = {
  // UpdateCaseRequest (optional)
  updateCaseRequest: {
    caseId: "CASEhq9d8b72d0800c",
    pacerOptions: {
      pacerUserId: "URKYwer3tyh5r56gq2",
      pacerClientCode: "Test UniCourt API",
      fetchParticipantsIfOlderThanDays: 30,
      refreshType: "fetchNewDocketEntries",
      additionalPageArray: [
        {
          page: "caseSummary",
          fetchIfOlderThanDays: 30,
        },
      ],
    },
  },
};

apiInstance.updateCase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCaseRequest** | **UpdateCaseRequest**|  |


### Return type

**UpdateCase200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


