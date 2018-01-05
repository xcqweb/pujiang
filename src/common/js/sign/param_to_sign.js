import To_md5 from'md5'
// import WEB_KEY from './WEB_KEY.js'
/**
传入 const source={
        dd:'fda',
        aa:'dfsd',
        bc:'dfdsf',
        bb:'daew',
    }
返回 经过md5加密后添加尾部WEB_KEY的sign字符串和带有?的请求url;
**/
export function before_md5(param){
        
        let arr=[];

        for(name in param){
            arr.push(name)
        }
        arr.sort();
        let str=[];
        for(var i=0;i<arr.length;i++){
            str.push(arr[i]+'='+param[arr[i]])
        }
        //sign未加密字符串
        let not_md5=str.join('&');
        return not_md5
}

export  function paramToSign(param){
        const WEB_KEY='AE0ADC3949BA59ABBEW6E057F20F983E'
        let not_md5=before_md5(param);
        //sign经过md5加密尾部加WEB_KEY
        let sign=To_md5(not_md5+WEB_KEY)
        return sign
    }
export function askUrl(param){
        let not_md5 = before_md5(param);
        let sign = paramToSign(param);
        let askUrl = '?'+not_md5 +'&sign='+sign;
        return askUrl 
}
export default function getConfig(param){
        let sign = paramToSign(param);
        param.sign= sign;
        return param
}   
