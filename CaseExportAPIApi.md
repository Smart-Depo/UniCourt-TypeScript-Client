# .CaseExportAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportCase**](CaseExportAPIApi.md#exportCase) | **GET** /caseExport/{caseId} | Gets case exported for a requested Case ID.
[**getCaseExportCallbackById**](CaseExportAPIApi.md#getCaseExportCallbackById) | **GET** /caseExport/callbacks/{caseExportCallbackId} | Get Case Export Callback for a requested Case Export Callback Id.
[**getCaseExportCallbacks**](CaseExportAPIApi.md#getCaseExportCallbacks) | **GET** /caseExport/callbacks | Get Case Export Callback list for a requested Date.


# **exportCase**
> ExportCase200Response exportCase()

Retrieve information about the specified case export.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseExportAPIApi(configuration);

let body:.CaseExportAPIApiExportCaseRequest = {
  // string | The caseId value of the case for which case export information is to be retrieved.
  caseId: "CASEhq2c3224900a48",
};

apiInstance.exportCase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | The caseId value of the case for which case export information is to be retrieved. | defaults to undefined


### Return type

**ExportCase200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is recieved. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaseExportCallbackById**
> ExportCase200Response getCaseExportCallbackById()

Retrieve the specified case export callback object.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseExportAPIApi(configuration);

let body:.CaseExportAPIApiGetCaseExportCallbackByIdRequest = {
  // string | The caseExportCallbackId value of the case export callback object to be retrieved.
  caseExportCallbackId: "CBCEG63f4e233eXqD1",
};

apiInstance.getCaseExportCallbackById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseExportCallbackId** | [**string**] | The caseExportCallbackId value of the case export callback object to be retrieved. | defaults to undefined


### Return type

**ExportCase200Response**

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

# **getCaseExportCallbacks**
> GetCaseExportCallbacks200Response getCaseExportCallbacks()

Retrieve callbacks according to the specified criteria.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseExportAPIApi(configuration);

let body:.CaseExportAPIApiGetCaseExportCallbacksRequest = {
  // Date | The date for which callbacks are to be retrieved. (optional)
  date: new Date('2023-03-08T10:17:56+00:00'),
  // 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | The status code of the callbacks to be retrieved. (optional)
  status: "",
  // number | The page number of the callbacks to be retrieved.<br>   - Minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getCaseExportCallbacks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | [**Date**] | The date for which callbacks are to be retrieved. | (optional) defaults to undefined
 **status** | [**&#39;IN_PROGRESS&#39; | &#39;COMPLETE&#39; | &#39;FAILURE&#39;**]**Array<&#39;IN_PROGRESS&#39; &#124; &#39;COMPLETE&#39; &#124; &#39;FAILURE&#39;>** | The status code of the callbacks to be retrieved. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the callbacks to be retrieved.&lt;br&gt;   - Minimum: 1  | (optional) defaults to 1


### Return type

**GetCaseExportCallbacks200Response**

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


