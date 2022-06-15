import { navigate, goBack, isBack, isFocused, popToTop, PopTo } from "./RootNavigation";
import { StackActions } from '@react-navigation/native';

export default class Router {
  constructor() {
  }
  Splash = async (data) => await navigate('Splash', data)
  MainTab = async (data) => await navigate('MainTab', data)
  Home = async (data) => await navigate('Home', data)
  Profile = async (data) => await navigate('Profile', data)
  Explore = async (data) => await navigate('Explore', data)

  back(data) {
    if (data) {
      return goBack()
      // navigate.backTo({ refresh: { data, refreshs: new Date() } });
    }
    return goBack()
  }
  isBack = () => isBack()
  isFocused = () => isFocused()

  Popdata(data) {
    if (data) {
      return { refresh: { data } };
    }
    return data;
  }
  backTo(name) {
    PopTo(name)
  }
  backToTop(name) {
    popToTop()

  }

}
module.exports = { Router };
