# .CourtAvailabilityAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCourtCoverage**](CourtAvailabilityAPIApi.md#getCourtCoverage) | **GET** /courtCoverage/{courtId} | Gets Court Coverage of all courts of specific type.


# **getCourtCoverage**
> GetCourtCoverage200Response getCourtCoverage()

Determine whether the specified court is covered by UniCourt.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CourtAvailabilityAPIApi(configuration);

let body:.CourtAvailabilityAPIApiGetCourtCoverageRequest = {
  // string | The courtId value of the target court.
  courtId: "CORTV4vCEaKrhystBz",
};

apiInstance.getCourtCoverage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **courtId** | [**string**] | The courtId value of the target court. | defaults to undefined


### Return type

**GetCourtCoverage200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request is received. |  -  |
**404** | Resource Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


