# .AuthenticationAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateNewToken**](AuthenticationAPIApi.md#generateNewToken) | **POST** /generateNewToken | Generate new token to access API.
[**invalidateAllTokens**](AuthenticationAPIApi.md#invalidateAllTokens) | **PUT** /invalidateAllTokens | API to invalidate all access tokens.
[**invalidateToken**](AuthenticationAPIApi.md#invalidateToken) | **PUT** /invalidateToken | API to invalidate the access token.
[**listAllTokenIds**](AuthenticationAPIApi.md#listAllTokenIds) | **PUT** /listAllTokenIds | API to list all the access tokens Id.


# **generateNewToken**
> GenerateNewToken200Response generateNewToken()

This endpoint allows you to generate a new access token, which is a required field for all UniCourt API endpoints except for the Authentication API. To generate a new token, you must provide your Client ID and Client Secret ID which you can find by logging into your UniCourt account. At any time, you can have a maximum of 10 active access tokens. The tokens never expire and, if you make a request which would otherwise lead to you having more than 10 active tokens, you will receive an error message.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationAPIApi(configuration);

let body:.AuthenticationAPIApiGenerateNewTokenRequest = {
  // GenerateNewTokenRequest | The endpoint accepts your Client ID and Client Secret ID as part of the request. (optional)
  generateNewTokenRequest: {
    clientId: "G3cfixgetVzfaoszGOBp5LPGtih1nMJ9",
    clientSecret: "u6PTti57IjPlrwU5MzOwLBD2MCwx-IEbo8sTStTivh1I-EqQ8Jcm27Gfo2GhpHCw",
  },
};

apiInstance.generateNewToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateNewTokenRequest** | **GenerateNewTokenRequest**| The endpoint accepts your Client ID and Client Secret ID as part of the request. |


### Return type

**GenerateNewToken200Response**

### Authorization

No authorization required

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

# **invalidateAllTokens**
> Success1 invalidateAllTokens()

An endpoint which allows you to invalidate all existing access tokens associated with your UniCourt account.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationAPIApi(configuration);

let body:.AuthenticationAPIApiInvalidateAllTokensRequest = {
  // GenerateNewTokenRequest | The endpoint accepts your Client ID and Secret Client ID as part of the request. (optional)
  generateNewTokenRequest: {
    clientId: "G3cfixgetVzfaoszGOBp5LPGtih1nMJ9",
    clientSecret: "u6PTti57IjPlrwU5MzOwLBD2MCwx-IEbo8sTStTivh1I-EqQ8Jcm27Gfo2GhpHCw",
  },
};

apiInstance.invalidateAllTokens(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateNewTokenRequest** | **GenerateNewTokenRequest**| The endpoint accepts your Client ID and Secret Client ID as part of the request. |


### Return type

**Success1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **invalidateToken**
> Success1 invalidateToken()

An endpoint which allows you to invalidate a given access token.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationAPIApi(configuration);

let body:.AuthenticationAPIApiInvalidateTokenRequest = {
  // InvalidateTokenRequest | The endpoint accepts your Client ID, Client Secret ID and the Token ID for the access token you wish to invalidate as part of the request. You can obtain a list of all Token IDs from the /listAllTokenIds endpoint within this API. (optional)
  invalidateTokenRequest: {
    clientId: "G3cfixgetVzfaoszGOBp5LPGtih1nMJ9",
    clientSecret: "u6PTti57IjPlrwU5MzOwLBD2MCwx-IEbo8sTStTivh1I-EqQ8Jcm27Gfo2GhpHCw",
    tokenId: "TKID384a057WFC3Dp3",
  },
};

apiInstance.invalidateToken(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invalidateTokenRequest** | **InvalidateTokenRequest**| The endpoint accepts your Client ID, Client Secret ID and the Token ID for the access token you wish to invalidate as part of the request. You can obtain a list of all Token IDs from the /listAllTokenIds endpoint within this API. |


### Return type

**Success1**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **listAllTokenIds**
> ListAllTokenIds200Response listAllTokenIds()

An endpoint which allows you to view all active access tokens associated with your Client ID and Client Secret ID.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthenticationAPIApi(configuration);

let body:.AuthenticationAPIApiListAllTokenIdsRequest = {
  // GenerateNewTokenRequest | The endpoint accepts your Client ID and Client Secret ID as part of the request. (optional)
  generateNewTokenRequest: {
    clientId: "G3cfixgetVzfaoszGOBp5LPGtih1nMJ9",
    clientSecret: "u6PTti57IjPlrwU5MzOwLBD2MCwx-IEbo8sTStTivh1I-EqQ8Jcm27Gfo2GhpHCw",
  },
};

apiInstance.listAllTokenIds(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateNewTokenRequest** | **GenerateNewTokenRequest**| The endpoint accepts your Client ID and Client Secret ID as part of the request. |


### Return type

**ListAllTokenIds200Response**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


