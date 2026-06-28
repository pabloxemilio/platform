import '/coupon/js/axios.js';
const request = axios.create({
  baseURL: window.env.VITE_API_ENDPOINT, // 你的接口地址
  timeout: 60000, // 超时时间
});
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    const url = new URL(window.location.href);
    
    const token = url.searchParams.get('token')|| window.localStorage.getItem("authToken")
    if (token) {
      config.headers.Authorization = token
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 统一处理返回数据
    return response.data;
  },
  (error) => {
    console.error("请求出错:", error);
    return Promise.reject(error);
  }
);

window.request = request