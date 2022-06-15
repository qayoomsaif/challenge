const production = false;
const dev = {
  BASE_URL: `https://api.giphy.com/`,
  BASE_URL2: `http://ec2-3-225-241-56.compute-1.amazonaws.com:3000/api2/`,
  BASE_URL3: `http://ec2-user@ec2-34-244-165-42.eu-west-1.compute.amazonaws.com:3005/api/`,
};
const live = {
  BASE_URL: `https://api.giphy.com/`,
  BASE_URL2: `$http://ec2-54-229-246-108.eu-west-1.compute.amazonaws.com:4000/api2/`,
  BASE_URL3: `http://ec2-34-244-165-42.eu-west-1.compute.amazonaws.com:3007/api/`,
};
export const baseUrl = production ? live : dev;
