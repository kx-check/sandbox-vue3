import axios from "axios";
// import store from '@/store'
import store from "../store";
import router from "../router";

const request = axios.create({
  baseURL: '/api',
  timeout: 30000,
});

// 添加请求拦截器
request.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  const isLogin = store.getters["user/isLogin"];
  if (isLogin) {
    const token = store.getters["user/getAccessToken"];
    if (token) {
      config.headers.token = ["Authentication ", token].join("");
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  console.log(error) // for debug
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use((response) => {
  // 获取服务器的数据
  const res = response.data;
  if (response.data.code !== 200) {
    // 可以让我错误延续到页面去处理
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    // 这个res在外部你可以少写一级。直接从R类开始
    return res;
  }
}, function (error) {
  // 这里是响应流的错误。
  if (error.data.code === 500) {
    alert("服务器脱离了地球表面");
    return;
  }
  if (error.data.code === 404) {
    alert("服务器脱离了地球表面");
    return;
  }
  if (error.data.code === 601) {
    alert("token已失效");
    //要重新登录
    router.push("/login")
    return;
  }
  // 对响应错误做点什么
  return Promise.reject(error);
});


export default request;
