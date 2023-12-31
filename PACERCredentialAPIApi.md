# .PACERCredentialAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPacerCredential**](PACERCredentialAPIApi.md#addPacerCredential) | **PUT** /pacerCredential | Add Pacer Credential.
[**getPacerCredential**](PACERCredentialAPIApi.md#getPacerCredential) | **GET** /pacerCredential | Get Pacer Credential List.
[**getPacerCredentialById**](PACERCredentialAPIApi.md#getPacerCredentialById) | **GET** /pacerCredential/{pacerUserId} | Get Pacer Credential for a requested pacer User Id.
[**removePacerCredentialById**](PACERCredentialAPIApi.md#removePacerCredentialById) | **DELETE** /pacerCredential/{pacerUserId} | Remove Pacer credential for a specific Pacer User Id.


# **addPacerCredential**
> Success1 addPacerCredential()

Register PACER credentials with UniCourt.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERCredentialAPIApi(configuration);

let body:.PACERCredentialAPIApiAddPacerCredentialRequest = {
  // AddPacerCredentialRequest (optional)
  addPacerCredentialRequest: {
    pacerUserId: "URKYwer3tyh5r56gq2",
    defaultPacerClientCode: "Test UniCourt API",
    password: "your password",
  },
};

apiInstance.addPacerCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addPacerCredentialRequest** | **AddPacerCredentialRequest**|  |


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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getPacerCredential**
> GetPacerCredential200Response getPacerCredential()

List registered PACER credentials.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERCredentialAPIApi(configuration);

let body:.PACERCredentialAPIApiGetPacerCredentialRequest = {
  // number | The page number of the PACER credentials to be retrieved.<br>   - Minimum: 1  (optional)
  pageNumber: 1,
};

apiInstance.getPacerCredential(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageNumber** | [**number**] | The page number of the PACER credentials to be retrieved.&lt;br&gt;   - Minimum: 1  | (optional) defaults to undefined


### Return type

**GetPacerCredential200Response**

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

# **getPacerCredentialById**
> GetPacerCredential200ResponsePacerCredentialArrayInner getPacerCredentialById()

Retrieve the PACER credentials for the specified PACER username.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERCredentialAPIApi(configuration);

let body:.PACERCredentialAPIApiGetPacerCredentialByIdRequest = {
  // string | The PACER username for which PACER credentials are to be retrieved.
  pacerUserId: "URKYwer3tyh5r56gq2",
};

apiInstance.getPacerCredentialById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The PACER username for which PACER credentials are to be retrieved. | defaults to undefined


### Return type

**GetPacerCredential200ResponsePacerCredentialArrayInner**

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

# **removePacerCredentialById**
> Success1 removePacerCredentialById()

De-register the PACER credentials for the specified PACER username.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PACERCredentialAPIApi(configuration);

let body:.PACERCredentialAPIApiRemovePacerCredentialByIdRequest = {
  // string | The PACER username for which PACER credentials are to be retrieved.
  pacerUserId: "URKYwer3tyh5r56gq2",
};

apiInstance.removePacerCredentialById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pacerUserId** | [**string**] | The PACER username for which PACER credentials are to be retrieved. | defaults to undefined


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


