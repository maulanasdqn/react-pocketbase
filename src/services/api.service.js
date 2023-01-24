import axios from "axios";
import TokenService from "./token.service";

const ApiService = {
  _401interceptor: null || 0,

  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  setHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${TokenService.getToken()}`;
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  customRequest(data) {
    return axios(data);
  },
};

export default ApiService;
