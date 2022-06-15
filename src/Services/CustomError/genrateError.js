import {NetworkError, ApiError} from './index';
export function generateApiError(
  option,
  response,
  url,
  message,
  messageApi,
  object,
) {
  throw new ApiError({
    message: message ? message : null,
    status: response ? (response.status ? response.status : null) : null,
    url: url ? url : null,
    messageApi: messageApi ? messageApi : message ? message : 'error not found',
    object: object ? object : {},
    option: option ? option : null,
    // option: option,
  });
}

export function generateNetworkError(url, option, e) {
  throw new NetworkError({
    message: null,
    status: 999,
    url: url ? url : null,
    messageApi: e.message ? e.message : 'null',
    object: e ? e : {},
    option: option ? option : null,
  });
}
