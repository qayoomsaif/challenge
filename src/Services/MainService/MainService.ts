import { requestSend } from './RequestSend';
import { UserInfoStorage } from 'Factory';
import { generateApiError, generateNetworkError } from 'CustomError/genrateError';
import { baseUrl } from '../enviroments'
export const get = async (
  api: string,
  param: any = null,
  isLogin: boolean = false,
  contentType: number = 0,
  dataFormType: any = 0,
  baseUrlType: number = 0,
  header: any = {},
) => {
  let url, cofigData;
  cofigData = await setCofig(
    api,
    header,
    baseUrlType,
    contentType,
    isLogin,
  );
  url = cofigData.url;
  if (param) {
    let encodedData = await toFormUrlEncoded(param);
    url = cofigData.url += '?' + encodedData;
  }
  let response = await requestSend(
    cofigData.url,
    null,
    cofigData.header,
    'GET',
  );
  return response;
}
export const post = async (
  api: string,
  param: any = null,
  isLogin: boolean = false,
  contentType: number = 0,
  dataFormType: any = 0,
  baseUrlType: number = 0,
  dataConvert: boolean = true,
  header: any = {},
) => {

  let body, cofigData;
  cofigData = await setCofig(
    api,
    header,
    baseUrlType,
    contentType,
    isLogin,
  );
  if (dataConvert) {
    if (
      (dataFormType == 0 && contentType == 0) ||
      (!dataFormType && !contentType)
    ) {
      body = await toFormUrlEncoded(param);
    } else if (dataFormType == 1) {
      body = await JSON.stringify(param);
      // this.serializeJSON(param);
    } else if (dataFormType == 2) {
      body = await multiForm(param)
    }
  } else {
    body = param
  }
  let response = await requestSend(
    cofigData.url,
    body,
    cofigData.header,
    'POST',
  );
  return response;
}
export const patch = async (
  api: string,
  param: any = null,
  isLogin: boolean = false,
  contentType: number = 0,
  dataFormType: any = 0,
  baseUrlType: number = 0,
  header: any = {},
) => {
  let body, cofigData;
  cofigData = await setCofig(
    api,
    header,
    baseUrlType,
    contentType,
    isLogin,
  );
  if (
    (dataFormType == 0 && contentType == 0) ||
    (!dataFormType && !contentType)
  ) {
    body = await toFormUrlEncoded(param);
  } else if (dataFormType == 1) {
    body = await serializeJSON(param);
  } else if (dataFormType == 2) {
    body = JSON.stringify(param);
  }
  let response = await requestSend(
    cofigData.url,
    body,
    cofigData.header,
    'PATCH',
  );
  return response;
}
export const del = async (
  api: string,
  param: any = null,
  isLogin: boolean = false,
  contentType: number = 0,
  dataFormType: any = 0,
  baseUrlType: number = 0,
  header: any = {},
) => {
  let body, cofigData;
  cofigData = await setCofig(
    api,
    header,
    baseUrlType,
    contentType,
    isLogin,
  );
  if (
    (dataFormType == 0 && contentType == 0) ||
    (!dataFormType && !contentType)
  ) {
    body = await toFormUrlEncoded(param);
  } else if (dataFormType == 1) {
    body = await serializeJSON(param);
  } else if (dataFormType == 2) {
    body = JSON.stringify(param);
  }
  let response = await requestSend(
    cofigData.url,
    body,
    cofigData.header,
    'DELETE',
  );
  return response;
}
export const put = async (
  api: string,
  param: any = null,
  isLogin: boolean = false,
  contentType: number = 0,
  dataFormType: any = 0,
  baseUrlType: number = 0,
  header: any = {},
) => {
  let body, cofigData;
  cofigData = await setCofig(
    api,
    header,
    baseUrlType,
    contentType,
    isLogin,
  );
  if (
    (dataFormType == 0 && contentType == 0) ||
    (!dataFormType && !contentType)
  ) {
    body = await toFormUrlEncoded(param);
  } else if (dataFormType == 1) {
    body = await serializeJSON(param);
  } else if (dataFormType == 2) {
    body = JSON.stringify(param);
  }
  let response = await requestSend(
    cofigData.url,
    body,
    cofigData.header,
    'PUT',
  );
  return response;
}
// sets configs e.g header, contentType
const setCofig = async (api, header, baseUrlType, contentType, isLogin) => {
  let url = baseUrl.BASE_URL + api,
    token,
    Content_Type = 'application/x-www-form-urlencoded';
  if (contentType == 1) {
    Content_Type = 'application/json'; // default value for Content_Type
  }
  if (contentType == 2) {
    Content_Type = 'multipart/form-data';
  }
  var requestHeader = {
    Accept: 'application/json',
    'Content-Type': Content_Type,
  };
  if (header) {
    requestHeader = Object.assign(requestHeader, header);
  }
  if (!baseUrlType) {
    url = baseUrl.BASE_URL + api;
  }
  if (baseUrlType === 1) {
    url = baseUrl.BASE_URL2 + api;
  }
  if (baseUrlType === 2) {
    url = baseUrl.BASE_URL3 + api;
  }
  if (isLogin) {
    let response = await UserInfoStorage.get();
    if (response && response.token) {
      requestHeader = Object.assign(requestHeader, {
        Authorization: 'Bearer ' + response.token,
      });
    } else {
      // await this.userInfoStorage.clearUserSystemStorageInfo();
      generateApiError(
        requestHeader,
        { status: 402 },
        url,
        null,
        'authorization',
        null,
      );
      return;
    }
  }
  return {
    header: requestHeader,
    url: url,
  };
}
async function toFormUrlEncoded(param) {
  let promise = new Promise(async (resolve, reject) => {
    const formBody = Object.keys(param)
      .map(
        key => encodeURIComponent(key) + '=' + encodeURIComponent(param[key]),
      )
      .join('&');
    return resolve(formBody);
  });
  return promise;
}
async function multiForm(param) {
  try {
    let formData = new FormData()
    Object.keys(param).forEach(key => {
      if (key != "upload_files") {
        formData.append(key, param[key])
      }
      if (key == "upload_files") {

        let data = param[key]
        for (const object of data) {
          formData.append(key, object)
        }
        // formData.append(key, param[key])

        // formData.append(key, param[key])
      }
    });
    return formData
  } catch (e) {
    return e
  }

}
async function serializeJSON(data) {
  return Object.keys(data)
    .map(function (keyName) {
      return (
        encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])
      );
    })
    .join('&');
}
