import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

instance.defaults.timeout = 300000;

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(handleSuccess, handleError);

const logout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

function handleSuccess(response) {
  return { data: response.data };
}
function handleError(error) {
  if (error.message === "Network Error") {
    // The user doesn't have internet
    alert("Network Error")
    return Promise.reject(error);
  }
  switch (error.response.status) {
    case 400:
      return {
        data: {
          message: error.response.data.data.password[0]
        }
      }
      // break;

    case 401:

      if (
        error.response.data.error === "login failed" ||
        error.response.data.error === "login failed main"
      ) {
        logout();
      }
      break;
    case 404:
      alert(error.response.data.message)

      break;
    case 500:
      alert("Internal Server Error")
      break;
    default:
      break;
  }
  return Promise.reject(error);
}

export default instance;
