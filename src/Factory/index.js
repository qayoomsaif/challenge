import ManagerFactory from './ManagerFactory';
import config from './config';
const factory = ManagerFactory(config);
// Whenever we need a Manager function, we will import factory and write the name of the desired key. In this way we will be able to call any manager function via factory!
module.exports = {
  Router: factory.getRouter(),
  Helper: factory.getHelper(),
  Validate: factory.getValidate(),
  StorageManager: factory.getStorageManager(),
  SystemStorage: factory.getSystemStorage(),
  DateFormat: factory.getDateFormat(),
  UserInfoStorage: factory.getUserInfoStorage(),
  GlobalConfig: config.defaultData,
};
