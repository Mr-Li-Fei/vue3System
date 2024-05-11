import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    if(!token) return config;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const token = response.headers.Authorization;
    if(!token) return;
    if(response.headers.Authorization) {
        localStorage.setItem('token', token);
    }
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
