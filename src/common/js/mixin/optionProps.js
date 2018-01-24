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
               this.watchTouristFn&&this.watchTouristFn(val)
            },
            deep:true,
        },
    },
    data () {
        return {
        };
    },
    methods:{

    },
    mounted () {
        
    }
}
export default optionProps