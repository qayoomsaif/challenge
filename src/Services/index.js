import CustomError from './CustomError';
import GifsServices from './GifsServices';
var Services = {
  gifsServices: new GifsServices(),
};
module.exports = {
  Services: Services,
  error: CustomError,
};
