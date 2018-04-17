<style lang="less">
.d3{
    width:100%;
    height:92%;
    position:relative;
    overflow-y: scroll;
    overflow-x: hidden;
    top: 5%;
    h1{
        position:absolute;
        width:100%;
        top:1.3rem;
        left:25%;
        text-align:left;
        font-size: 1.1rem;
        background-color: #163387;
        color:white;
    }
    img{                  
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
    ul{
        li{
            display:inline-block;
            float:left;
            width:12%;
            height:auto;
            margin-left:1%;
            text-align: center;

        }
    }
    .title-star{
         position:absolute;
         top:3rem;
         left:5%;
    }

    .linebox{
        position:relative;
        margin-top:2%;
        margin-left: 5%;
        width:90%;
        height:11%;
        .title{
            position:absolute;
            top:0;
            left:0;
            color:white;
        }
        .imgleft{
            position:absolute;
            bottom:12px;
            height:auto;
            width:10%;
            span{
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50% ,-95%);
                font-size:0.8rem;
                font-family: numberFont;
            }
        }
        .imgright{
            position:absolute;
            bottom:12px;
            height:auto;
            width:10%;
        		
            span{
            	font-family: numberFont;
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50% ,-95%);
                font-size:0.8rem;
            }
        }
        .titleleft{
            position:absolute;
            left: 1rem;
            bottom:15px;
            width: 3rem;
            height: 1rem;
        }
        .titleright{
            position:absolute;
            right: 1rem;
            bottom:15px;
            width: 3rem;
            height: 1rem;
        }
        .line{
            position:absolute;
            bottom: 0;
            width: 100%;
            height: 10px;
            .lineleft{
                position:absolute;
                left: 0;
                width: 55%;
                height: 100%;
                border-radius: 5px 0 0 5px;
            }
            .lineright{
                position:absolute;
                right: 0;
                width: 55%;
                height: 100%;
                border-radius:  0 5px 5px 0;
            }
        }
    }
    .progress{
        /*margin-top:16%;*/
    }
    .msg{
        position:relative;
        margin-top:3%;
        margin-left: 5%;
        width:90%;
        font-size: 0.7rem;
        color:white;
        .title{
            display:block;
            margin-left:0;
            text-align:left;
        }
        .comment{
            text-align:left;
            margin-top: 0.8rem;
            .name{
				font-size: 0.8rem;
            }
            .place{
                margin-left:20px;
                font-size: 0.8rem;
            }
            .comment-star{
                display:inline-block;
                width:30%;
                transform: translateY(10%);
            }
            .text{
            	text-indent: 2em;
            	font-size: 0.6rem;
                display:block;
                margin-top:5px;
                line-height:1.5rem;
            }
        }
    }
}

			.d3::-webkit-scrollbar{
			    width: 0.3rem;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.d3::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.09);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.d3::-webkit-scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: rgba(255,255,255,0.5);
			}
			
			.d3::scrollbar{
			    width: 0.45rem;
			    height: 3rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.d3::scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.01);
			    border-radius: 10px;
			}
			/*ie*/
			.d3{
				scrollbar-face-color: #0F2059;
				scrollbar-highlight-color: ;
				scrollbar-shadow-color: #02275A;
				scrollbar-track-color: #263984;
			}
			 
			/*定义滑块，内阴影及圆角*/
			.d3::scrollbar-thumb{
			    width: 10px;
			    height: 10rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
</style>

<template>
    <div class="d3">
        <!--<vline :progressbar='oneprogressbar' class='progress'></vline>-->
        <div class="msg">
            <div class="comment" v-for="comment in commentList">
                <span class="name">{{comment.uid}}</span>
                <span class="place">{{comment.name}}</span>
                <vstar 
                class='comment-star'
                :star='comment.grade'>
                </vstar>
                <span class="text">
                    {{comment.con}}
                </span>
            </div>
        </div>
        <Loading v-show="isloading"></Loading>
    </div>
</template>

<script>
import Vue from 'vue'
import optionProps from '@/common/js/mixin/optionProps.js'
export default {
    name: 'd3',
    mixins: [optionProps],
    props:['place'],
    data () {
        return {
        	commentProp:{},
        	allData:{},
        	comments:[],
            topStar:{
                numb: 5,
                width:'30%',
            },
            oneprogressbar:{
                title:'满意度',
                leftimg:require('../../../assets/images/home/d/compoment.png'),
                rightimg:null,
                leftProcess:90,
                rightProcess:10,
                leftColor:'#6dffeb',
                rightColor:'#4299b9',
                leftTitle:'',
                rightTitle:'',
            },
        }
    },
    watch:{
    },
    computed: { 
		commentList(){
			return this.comments
		}
    },
    methods: {
		//请求数据
	  	getData(){ 
	  		let params = {}; 
	  		params.code = this.code;
	  		params.limit = 100;
	  		params.curPage = 1;
	  		api.getComments(params).then( (re) =>{
	  				let reData = re.data.data;
	  				this.comments = reData.comments;
	  				
	  				//console.log(this.comments)
	  				this.oneprogressbar.leftProcess = reData.satisfyPercent;
	  				this.oneprogressbar.rightProcess = 100-reData.satisfyPercent;
					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
	  	
    },
    created(){
    	this.getData();
    },
    mounted(){
    	
    },
}
Vue.component('vstar',{
        props:['star'],
        data(){
            return{
                 imgStar:require('../../../assets/images/home/d/star.png'),
            }
        },
        template:`<ul><li v-for='item in arr'><img :src="imgStar"/></li></ul>`,
        computed: { 
            arr:function(){
                let arrstar=[]
                for (var i = 0; i < this.star; i++) {
                    arrstar.push(i)
                }
                return arrstar
            }
        },
        methods:{
            chosen:function(){
            },
                
        },
    }
)

Vue.component('vline',{
        props:['progressbar'],
        data(){
            return{
                 imgStar:require('../../../assets/images/home/d/star.png'),
            }
        },
        template:`
        <div class='linebox'>
            <span class='title'>{{progressbar.title}}</span>
            <div class='imgleft' 
                :style="{left:progressbar.leftProcess-15+'%'}">
                <span>{{progressbar.leftProcess}}%</span>
                <img :src="progressbar.leftimg"/></div>
            <div class='imgright' 
                :style="{right:progressbar.rightProcess-10+'%'}">
                <span v-show='progressbar.rightimg'>{{progressbar.rightProcess}}%</span>
                <img :src="progressbar.rightimg"/></div>
            <font class='titleleft' :style="{color:progressbar.leftColor}">{{progressbar.leftTitle}}</font>
            <font class='titleright' :style="{color:progressbar.rightColor}">{{progressbar.rightTitle}}</font>
            <div class='line'>
                <div class='lineleft' :style="{width:progressbar.leftProcess+'%',backgroundColor:progressbar.leftColor}"></div>
                <div class='lineright' :style="{width:progressbar.rightProcess+'%',backgroundColor:progressbar.rightColor}"></div>
            </div>
        </div>`,
        computed: { 
            arr:function(){
                let arrstar=[]
                for (var i = 0; i < this.star; i++) {
                    arrstar.push(i)
                }
                return arrstar
            }
        },
        methods:{
            chosen:function(){
            },
                
        },
    }
)
</script>

