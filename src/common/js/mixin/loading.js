/**
 * 
 * @authors Rico Wang
 * @date    2017-10-24 14:54:43

 */
let loading =  {
    props: {
        
    },
    data () {
        return {
            isloading: false,
        };
    },
    methods:{

    },
    created(){
    	this.isloading=true;
    },
    mounted () {
		
    },
    components:{
    	Loading
    }
}
export default loading