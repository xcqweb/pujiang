export default {
    typesof:function(dd){
        let ss = Object.prototype.toString.call(dd).slice(8, -1)
        console.log(ss)
    }
}