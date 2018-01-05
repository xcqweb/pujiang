import axios form 'axios'

//axios 配置
 axios.defaults.baseURL = 'http://rapapi.org/mockjsdata/2535'

 //http request 拦截器

 axios.interceptors.request.use(
        config =>{...};
        err => {...};
    );
 //http response 拦截器
 axios.interceptors.response.use(
    config =>{...};
        err => {...});

 export defaults axios;
