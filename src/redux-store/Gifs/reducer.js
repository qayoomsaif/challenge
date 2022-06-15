import * as types from './type';
const INITIAL_STATE = {
  gifsData: [],
  isLoading: false,
  isError: false,
  errMsg: '',
  errObject: {},
  offset: 0,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GIFS_DATA:
      return {
        ...state,
        gifsData: action.data,
        isLoading: false,
        isError: false,
        errMsg: '',
        errObject: {}
      };
    case types.SET_OFFSET:
      return {
        ...state,
        offset: action.offset
      };
    case types.RESET_DATA:
      return {
        ...state,
        offset: 0,
        gifsData: [],
        isLoading: false,
        isError: false,
        errMsg: '',
        errObject: {}
      };
    case types.IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case types.IS_ERROR:
      return { ...state, isError: action?.isError, errMsg: action?.errMsg, errObject: action?.errObject };
    default:
      return state;
  }
};
