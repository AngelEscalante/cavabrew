import axios from "axios";
axios.interceptors.request.use(function (config) {
    if (requestCache.isCached(config)) {
      const skipXHRError = new Error('skip')
      skipXHRError.isSkipXHR = true
      skipXHRError.request = config
      throw skipXHRError
    } else {
      if (requestCache.shouldThrottle(config)) {
        requestCache.waitForResponse(config)
      }
      return config;
    }
  });
  axios.interceptors.response.use(function (response) {
    requestCache.setCachedResponse(response.config, response)
    return response;
  }, function (error) {
    if (error.isSkipXHR) {
      return requestCache.getCachedResponse(error.request)
    }
    return Promise.reject(error);
  });