var config = require('../../config')  
// 判断开发环境  
// if(process.env.NODE_ENV!='production'){
//     console.log(process.env.NODE_ENV);
// };

export const API_HZ = process.env.NODE_ENV !== 'production' ? 'http://115.29.17.176' : 'http://115.29.17.176'
//export const API_HZ = process.env.NODE_ENV !== 'production' ? 'http://localhost:8008' : 'http://120.57.190.55'