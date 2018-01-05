/**
 * 
 * @authors Rico Wang
 * @date    2017-10-24 14:54:43
 */
let adaptation =  {
    props: {
        
    },
    data () {
        return {
            changeModel: true,
            hide: false,
            full:false,
            level_md:true,
            level_sm:true,
            level_xs:true,
        };
    },
    methods:{
        //隐藏带changeModel的内容
        hideModel(){
            this.changeModel= false;
        },
        //缩放
        scaleModel(data){
            this.$el.style.transform = 'scale('+data+') ';
        },
        zoom(scale){
            this.$el.style.zoom = scale;
        },
    },
    mounted () {
        let el = this.$el
        // el.style.position = 'relative';
        let windowH = document.documentElement.clientHeight;
        let elH = el.parentNode.offsetHeight;
        let scale = elH/windowH;
        // console.log(scale)
        if (scale >0.55) {
           this.level_md=false;
        }else if(scale >0.25){
            this.level_sm=false;
        }else{
            this.level_xs=false;
        }
        
    }
}
export default adaptation