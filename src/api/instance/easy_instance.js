import {endtime,begintime,todaybegin} from '@/common/js/gtime.js'
import {API_HZ} from './env.js'
import To_md5 from '@/common/js/md5.js'

let WEB_KEY='AE0ADC3949BA59ABBEW6E057F20F983E'
let timestamp= Date.parse( new Date())+'';
var token =window.localStorage.getItem('token')
var pagram={
  begintime:todaybegin,
  endtime:endtime,
  timestamp:timestamp,
  type:'11',
  token:token
}
var sign_key=function(json){
    return To_md5('begintime='+todaybegin+'&endtime='+json.endtime+'&timestamp='+timestamp+'&token='+json.token+'&type='+json.type
      +WEB_KEY)
}

var sign=sign_key(pagram);

var url =API_HZ+"data/lastFewDaysDataNLS"+'?'+'sign='+sign+'&begintime='+todaybegin+'&endtime='+pagram.endtime+'&timestamp='+pagram.timestamp+'&token='+pagram.token+'&type=11';
var instance = axios.create();
var bigheader='bigdata_'+timestamp;
instance.defaults.headers.common['bigdata'] = To_md5(bigheader);


export default instance