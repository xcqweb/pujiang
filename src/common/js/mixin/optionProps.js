/**
 * 
 * @authors Rico Wang
 * @date   2018-01-24 09:00:04
 */
let optionProps =  {
    props: {
        touristProp:String,
    },
    watch:{
        touristProp:{
            handler:function(val, oldVal){
               this.watchTouristFn&&this.watchTouristFn(this.nameToCode[val])
            },
            deep:true,
        },
    },
    data () {
        return {
        	code:0,//景区编码
        	isloading: false,
            nameToCode:{
                '全部':0,
                '仙华山':1,
                '前吴村':2,
                '塘波村':3,	
                '民生村':4,	
                '罗源村':5,	
                '白石湾':6,	
                '江南第一家':7,	
                '嵩溪村':8,	
                '宝掌幽谷':9,	
                '宝掌幽谷':9,	
                '登高村':10,	
                '神丽峡':11,	
                '礼张村':12,	
                '农批市场':13,	
                '檀溪镇':14,	
                '冷坞村':15,	
                '上河村':16,	
                '汽车客运站':17,	
                '翠湖':18,	
                '马岭':19,
                '利民村':20,	
                '下湾村':21,	
                '新光村':22,	
                '西山村':23,	
                '田后蓬':24,	
                '薛下庄村':25,	
                '金狮湖':26,	
                '高速路':27,	
                '官岩寺':28,	
                '上山遗址':29,	
                '渠南村':30,	
                '温泉':31	,
                '下薛宅':32,	
                '水晶城':33,	
                '水竹湾':34,	
                '平湖森林果园':35,	
                '三角潭林场':36,
                '罗家村':37,	
                '白岩山前滑草基地':38,	
                '里黄宅村':39,	
                '善庆村':40,	
                '文化馆':41,	
                '通济桥水库大坝':42,	
                '三城山农庄':43,	
                '塔山宾馆':45,	
                '月泉书院遗址公园':46,
            }
        };
    },
    methods:{
        watchTouristFn(val){
            //console.log(val)
            this.code = val;
        },	
    },
    created(){
    	this.isloading=true;
    },
    mounted () {
        
    }
}
export default optionProps