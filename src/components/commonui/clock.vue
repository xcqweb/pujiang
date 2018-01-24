<style lang="less" scoped>
    .clock_box{
        height: 100%;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
        font{
            font-family:numberFont;
        }
    }
</style>

<template>
    <div class="clock_box">
         <font>{{timeDate}}</font>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: '',
    data () {
        return {
                timeDate:'',
        }
    },
    components:{

    },
    computed: { 

    },
    methods: {
        realSysTime() {  
            var now = new Date();
            var year = now.getFullYear(); //获取年份  
            var month = now.getMonth(); //获取月份  
            var date = now.getDate(); //获取日期  
            var day = now.getDay(); //获取星期  
            var hour = now.getHours() <10?"0"+now.getHours():now.getHours(); //获取小时  
            var minute = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes(); //获取分钟  
            var seconds = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds();//获取秒  
            month = month + 1;  
            var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");  
            var week = arr_week[day];
            
            var time = year + "年" + month + "月" + date + "日 " + week + " " + hour + ":" + minute + ":" + seconds;  
            this.timeDate = time
        },
        setDate(){
            setInterval(this.realSysTime,1000)
        },
    },
    mounted(){
            this.setDate();
    },
}
</script>

