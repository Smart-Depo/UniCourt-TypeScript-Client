# .CallbackAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCallbacks**](CallbackAPIApi.md#getCallbacks) | **GET** /callbacks | Get list of callback types with count for a requested Date.


# **getCallbacks**
> GetCallbacks200Response getCallbacks()

Get list of callback types with count for a requested Date.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CallbackAPIApi(configuration);

let body:.CallbackAPIApiGetCallbacksRequest = {
  // Date | Date for which fetch the callback type list. By default, the date will be set to current date. (optional)
  date: new Date('2023-03-08T00:00:00+00:00'),
  // 'IN_PROGRESS' | 'COMPLETE' | 'FAILURE' | Status of the callbacks. Default status will fetch all callbacks. (optional)
  status: "IN_PROGRESS",
};

apiInstance.getCallbacks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | [**Date**] | Date for which fetch the callback type list. By default, the date will be set to current date. | (optional) defaults to undefined
 **status** | [**&#39;IN_PROGRESS&#39; | &#39;COMPLETE&#39; | &#39;FAILURE&#39;**]**Array<&#39;IN_PROGRESS&#39; &#124; &#39;COMPLETE&#39; &#124; &#39;FAILURE&#39;>** | Status of the callbacks. Default status will fetch all callbacks. | (optional) defaults to undefined


### Return type

**GetCallbacks200Response**

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


