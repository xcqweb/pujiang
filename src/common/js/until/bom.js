

export default {
     //cookie
    //设置cookie
    setCookie: function (name, value, iDay) {
        var oDate = new Date();
        oDate.setDate(oDate.getDate() + iDay);
        document.cookie = name + '=' + value + ';expires=' + oDate;
    },
    //获取cookie
    getCookie: function (name) {
        var arr = document.cookie.split('; ');
        for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
        return '';
    },
    //删除cookie
    removeCookie: function (name) {
        this.setCookie(name, 1, -1);
    },
    //localStorage
    setLocalStorage:function(tokenName,value){
        window.localStorage.setItem(tokenName, value);
        
    },
    getLocalStorage:function(tokenName){
        var token =window.localStorage.getItem(tokenName)
        return token
    },
    removeLocalStorage:function(){
        
    },
    
}