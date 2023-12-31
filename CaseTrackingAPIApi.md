# .CaseTrackingAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCaseTrackById**](CaseTrackingAPIApi.md#getCaseTrackById) | **GET** /caseTrack/{caseId} | Get Case Track for a requested Case Id.
[**getCaseTracks**](CaseTrackingAPIApi.md#getCaseTracks) | **GET** /caseTracks | Get Case Track list.
[**removeCaseTrackById**](CaseTrackingAPIApi.md#removeCaseTrackById) | **DELETE** /caseTrack/{caseId} | Remove Case Track for a specific Case Id.
[**trackCase**](CaseTrackingAPIApi.md#trackCase) | **PUT** /caseTrack | Add Case Track for the requested Case Id.


# **getCaseTrackById**
> CaseTrackPostRequest getCaseTrackById()

Retrieve case tracking information for the specified caseId value.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseTrackingAPIApi(configuration);

let body:.CaseTrackingAPIApiGetCaseTrackByIdRequest = {
  // string | The caseId value for which case tracking information is to be retrieved.
  caseId: "CASEak99a698ea5413",
};

apiInstance.getCaseTrackById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | The caseId value for which case tracking information is to be retrieved. | defaults to undefined


### Return type

**CaseTrackPostRequest**

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

# **getCaseTracks**
> GetCaseTracks200Response getCaseTracks()

Retrieve a list of all tracked cases.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseTrackingAPIApi(configuration);

let body:.CaseTrackingAPIApiGetCaseTracksRequest = {
  // Date | The lastFetchDate value of the tracked case. The date value should be entered in the format YYYY-MM-DDTHH:MM:SS+ZZ:zz.  (optional)
  lastFetchDate: new Date('2023-03-08T10:17:56+00:00'),
  // Date | The date on which changes were last found in the case information.  (optional)
  lastFetchDateWithUpdates: new Date('2023-03-08T10:17:56+00:00'),
  // number | The page number of the results to be retrieved.<br>   - Minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getCaseTracks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lastFetchDate** | [**Date**] | The lastFetchDate value of the tracked case. The date value should be entered in the format YYYY-MM-DDTHH:MM:SS+ZZ:zz.  | (optional) defaults to undefined
 **lastFetchDateWithUpdates** | [**Date**] | The date on which changes were last found in the case information.  | (optional) defaults to undefined
 **pageNumber** | [**number**] | The page number of the results to be retrieved.&lt;br&gt;   - Minimum: 1  | (optional) defaults to undefined


### Return type

**GetCaseTracks200Response**

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

# **removeCaseTrackById**
> Success1 removeCaseTrackById()

Remove Case Track for a specific Case Id.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseTrackingAPIApi(configuration);

let body:.CaseTrackingAPIApiRemoveCaseTrackByIdRequest = {
  // string | The caseId value for which case tracking information is to be retrieved.
  caseId: "CASEak99a698ea5413",
};

apiInstance.removeCaseTrackById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **caseId** | [**string**] | The caseId value for which case tracking information is to be retrieved. | defaults to undefined


### Return type

**Success1**

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

# **trackCase**
> Success1 trackCase()

Track the specified case.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .CaseTrackingAPIApi(configuration);

let body:.CaseTrackingAPIApiTrackCaseRequest = {
  // TrackCaseRequest (optional)
  trackCaseRequest: {
    caseTrackParams: {
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
    schedule: {
      type: "weekly",
      days: [1,3,5],
    },
  },
};

apiInstance.trackCase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trackCaseRequest** | **TrackCaseRequest**|  |


### Return type

**Success1**

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
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


