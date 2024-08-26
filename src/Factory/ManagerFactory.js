import { StorageManager, UserInfoStorage, DateFormat, Helper, SystemStorage, Validate, } from './Manager/index';
import { Router } from 'src/Route';
var applicationFactory = null;
class ApplicationFactory {
  constructor(config) {
    this.config = config;
    // Assigning all functions of Manager class to the instance of this class
    this.router = new Router();
    this.helper = new Helper(this.router);
    this.validate = new Validate(this.router);
    this.storageManager = new StorageManager();
    this.dateFormat = new DateFormat();
    this.systemStorage = new SystemStorage(this.storageManager, this.config.defaultData,);
    this.userInfoStorage = new UserInfoStorage(this.storageManager,);
  }

  /* When these below functions will be called from anywhere in the project they will call Manager functions  */
  getRouter() {
    return this.router;
  }
  getStorageManager() {
    return this.storageManager;
  }
  getValidate() {
    return this.validate;
  }
  getSystemStorage() {
    return this.systemStorage;
  }
  getUserInfoStorage() {
    return this.userInfoStorage;
  }
  getDateFormat() {
    return this.dateFormat;
  }
  getHelper() {
    return this.helper;
  }
}

/**
 * @param {*} config
 * @returns {ApplicationFactory}
 */
function getFactory(config) {
  if (!applicationFactory) {
    if (!config) {
      throw new Error('config not defined');
    }
    applicationFactory = new ApplicationFactory(config);
  }
  return applicationFactory;
}
module.exports = getFactory;
