
var Vue = require('vue');
var echarts = require('echarts');

module.exports = {
    inserted: function (el, binding) {
        let _self = this;
        el.chart = echarts.init(el)
        // binding.value.grid={
        //     show: true,
        //     left: '10%',
        //     top: '20%',
        //     right: '10%',
        //     bottom: '15%',
        //     borderWidth: 0,
        //     borderColor: 'rgba(170,172,178,0.33)',
        //     backgroundColor: 'rgba(0,0,0,0)',
        // }
        // binding.value.backgroundColor='rgba(0,0,0,0)'
        // binding.value.yAxis[0].axisLabel=binding.value.xAxis[0].axisLabel={
        //     textStyle: {
        //         color: 'rgba(255,255,255,0.83)',
        //         fontSize: 12,
        //     },
        // }
        el.chart.setOption(binding.value)
        var resizeEvent = new Event('resize');
        var resizeEventHandler = function () {
        el.chart.resize();
        };
        if(window.attachEvent){
            el.attachEvent('onresize',_this.resizeEventHandler);
        }else{
            el.addEventListener('resize', resizeEventHandler, false);
        } 
        window.onresize = function () {
        el.dispatchEvent(resizeEvent);
        };
    },
    update: function (el, binding) {
        if(binding.value!==binding.oldValue){
               el.chart.setOption(binding.value);
       }  
    },
}