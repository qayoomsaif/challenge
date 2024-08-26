import * as types from './type';
import { Services } from 'Services'
export const getGifs = (text) => {
  return async (dispatch, store) => {
    dispatch(setIsError())
    if (store().gifs.offset == 0) { dispatch(setLoading(true)) }
    try {
      let response = await Services.gifsServices.getGifs(store().gifs.offset, text, 20)
      dispatch(setLoading())
      if (response?.data?.length) {
        dispatch(setOffset(store().gifs.offset + response?.data?.length))
        if (store().gifs.offset == 0) {
          dispatch({ type: types.GIFS_DATA, data: response?.data?.length ? response?.data : [], });
          return response?.data
        } else {
          dispatch({ type: types.GIFS_DATA, data: [...store().gifs?.gifsData, ...response?.data], });
        }
      }
    } catch (e) {
      dispatch(setLoading())
      if (store().gifs.offset == 0) {
        dispatch(setIsError(e))
      } else {
        dispatch(setIsError())
      }
    }
  };
};
export const resetData = (text) => {
  return async (dispatch, store) => {
    dispatch({ type: types.RESET_DATA })
    dispatch(getGifs(text))
  };
};
const setIsError = error => ({
  type: types.IS_ERROR,
  isError: error ? true : false,
  errMsg: error?.message ? error?.message : '',
  errObject: error ? error : {},
})
const setLoading = isLoading => ({ type: types.IS_LOADING, isLoading: isLoading ? isLoading : false })
const setOffset = offset => ({ type: types.SET_OFFSET, offset: offset ? offset : 0 })


