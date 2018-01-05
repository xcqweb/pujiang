import To_md5 from './md5.js'

let WEB_KEY='AE0ADC3949BA59ABBEW6E057F20F983E'
export let timestamp= Date.parse( new Date())+'';
export default function sign_key(json){
    return To_md5('oldPassword='+json.oldPassword+'&newPassword='+json.newPassword+'&timestamp='+timestamp+'&username='+json.username+WEB_KEY)
    // return To_md5('password=123456&timestamp=1498557361000&username=helloAE0ADC3949BA59ABBEW6E057F20F983E')
}