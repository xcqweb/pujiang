import To_md5 from './md5.js'
    var json={
    password: '123456',        //表单v-model的值
    username: 'hello', 
    code:'dsa'
    }
function jsonUrl(json){
    var arr=[];
    console.log(json[key]);
    for(var name in json){
        arr.push(name+'='+json[name]);
    }

    return arr.join('&');
};
jsonUrl(json);

// let WEB_KEY='AE0ADC3949BA59ABBEW6E057F20F983E'
// export let timestamp= Date.parse( new Date())+'';
// export default function sign_key(json){
//     console.log('加密');
//     console.log(timestamp);
//     return To_md5('code='+json.code+'&password='+json.password+'&timestamp='+timestamp+'&username='+json.username+WEB_KEY)
// }