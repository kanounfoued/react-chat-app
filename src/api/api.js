import axios from "axios";

const env = process.env.NODE_ENV;
let apiServer = "/";

if (env === "development") {
  apiServer = "http://localhost:3001/";
}

export const customAxios = (token = null) => {
  const defaultOptions = {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  };

  return {
    get: (url, options = {}) =>
      axios.get(url, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      axios.post(url, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) =>
      axios.put(url, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) =>
      axios.delete(url, { ...defaultOptions, ...options }),
  };
};

export default apiServer;
