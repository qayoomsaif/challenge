

import { UserInfoStorage } from 'Factory';
import { get, post, patch, put, del } from './MainService/MainService';

export default class GifsServices {
  async getGifs(offset = 0, text = '', limit = 20) {
    let url = ''
    if (text) {
      url = `v1/gifs/search?api_key=BvFV6zTeyxB9U8Y4SZsxL0Hn3MmHkuXq&q=${text}&limit=${limit}&offset=${offset}`
    } else {
      url = `v1/gifs/trending?api_key=BvFV6zTeyxB9U8Y4SZsxL0Hn3MmHkuXq&limit=${limit}&offset=${offset}`
    }
    return await get(url);
  }
}