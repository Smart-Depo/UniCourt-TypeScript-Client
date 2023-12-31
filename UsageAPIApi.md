# .UsageAPIApi

All URIs are relative to *https://enterpriseapi.unicourt.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBillingCycles**](UsageAPIApi.md#getBillingCycles) | **GET** /billingCycles | Get all the previous 12 billing cycles.
[**getBillingUsageByBillingCycle**](UsageAPIApi.md#getBillingUsageByBillingCycle) | **GET** /billingCycleUsage/{billingCycle} | Specify the billing cycle to know the API usage.
[**getDailyUsageByDate**](UsageAPIApi.md#getDailyUsageByDate) | **GET** /dailyUsage/{date} | Get API usage for a requested Date.


# **getBillingCycles**
> GetBillingCycles200Response getBillingCycles()

An endpoint to obtain information on the previous 12 billing cycles.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsageAPIApi(configuration);

let body:any = {};

apiInstance.getBillingCycles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**GetBillingCycles200Response**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getBillingUsageByBillingCycle**
> GetBillingUsageByBillingCycle200Response getBillingUsageByBillingCycle()

An endpoint to obtain information on API usage for a specific billing cycle.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsageAPIApi(configuration);

let body:.UsageAPIApiGetBillingUsageByBillingCycleRequest = {
  // string | The date obtainable from the /billingCycles endpoint which is used as an identifier for the specific billing cycle you wish to obtain information on.
  billingCycle: "2023-01-25to2023-02-25",
};

apiInstance.getBillingUsageByBillingCycle(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billingCycle** | [**string**] | The date obtainable from the /billingCycles endpoint which is used as an identifier for the specific billing cycle you wish to obtain information on. | defaults to undefined


### Return type

**GetBillingUsageByBillingCycle200Response**

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

# **getDailyUsageByDate**
> GetDailyUsageByDate200Response getDailyUsageByDate()

An endpoint to obtain information on API usage for a specific day.

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsageAPIApi(configuration);

let body:.UsageAPIApiGetDailyUsageByDateRequest = {
  // string | The specific date for which you wish to obtain information on API usage.
  date: new Date('2023-02-21').toISOString().split('T')[0];,
};

apiInstance.getDailyUsageByDate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **date** | [**string**] | The specific date for which you wish to obtain information on API usage. | defaults to undefined


### Return type

**GetDailyUsageByDate200Response**

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


