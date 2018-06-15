<style lang="less">
.d3{
    width:100%;
    height:92%;
    position:absolute;
    cursor: all-scroll;
    -webkit-overflow-scrolling: auto;
    overflow-y: scroll;
    overflow-x: hidden;
    top: 8%;
    
    .date{
    	width: 13rem;
    	height: 1.5rem;
		border-radius: 6px;
		position: fixed;
		top: 1.5rem;
		right: 8rem;
        box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
    }
    .date:hover{
    	box-shadow: 1px 0 30px  rgba(1,1,13,1);
    }
    .loading{
    	height: 120%;
    }
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
    	width: 0.7rem;            
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
        margin-top:20px;
        margin-left: 5%;
        width:90%;
        font-size: 13px;
        color:white;
        .title{
            display:block;
            margin-left:0;
            text-align:left;
        }
        .comment{
            text-align:left;
            margin-top: 1rem;
            .name{
				font-size: 0.65rem;
				margin: 0.35rem 0.35rem 0 0 ;
				color: rgba(255,255,255,0.7);
            }
            .place{
                font-size: 0.8rem;
                font-weight: bold;
            }
            .comment-star{
                display:inline-block;
                width:30%;
                transform: translateY(10%);
            }
            .text{
            	font-size: 0.7rem;
                display:block;
                margin: 0.35rem 0;
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
    <div class="d3" @scroll="loadMore($event)">
        <div class="msg" v-show='status'>
            <div class="comment" v-for="comment in commentList">
                <span class="place">{{comment.name}}</span>
                <ul class='comment-star'>
                	<li v-for='item in comment.grade'><img :src="imgStar"/></li>
                </ul>
                <span class="text">
                    {{comment.con}}
                </span>
                <span class="name">{{comment.uid}}</span>
                <span class="name">{{`${comment.date.substr(0,4)}-${comment.date.substring(4,6)}-${comment.date.substring(6,8)} ${comment.date.substring(8,10)}:${comment.date.substring(10,12)}`}}</span>
                
            </div>
        </div>
        <div class="date">
        	<vdate
        		@pageDate='getDate'
        	></vdate>
        </div>
        <Loading v-show="isloading" class='loading'></Loading>
    </div>
</template>

<script>
import optionProps from '@/common/js/mixin/optionProps.js'
import vdate from '@/components/commonui/vueDate/apps.vue'
import loadMore from '@/common/js/directives/loadMore.js'
import {debounce} from 'lodash'
export default {
    name: 'd3',
    mixins: [optionProps],
    props:['place'],
    data () {
        return {
        	imgStar:require('../../../assets/images/home/d/star.png'),
        	timeRange:{begin:'',end:''},
        	commentProp:{},
        	allData:{},
        	comments:[],
        	status:true,
        	pageNum:1,
        	isLoad:true,//滚动到无数据时禁止发请求
            topStar:{
                numb: 5,
                width:'30%',
            },
        }
    },
    watch:{
    	timeRange:function(val){
    		this.status = false;
    		window.setTimeout( () => {
    			this.status = true
    		},100)
    		this.comments = []
    		let params = {}
    		params.beginDate = val.begin.join("-");
    		params.endDate = val.end.join("-");
    		params.code = this.code;
    		params.limit = 20;
	  		params.curPage = 0;
    		this.request(params)
    	},
    	code:function(val){
    		this.comments = []
    		this.status = false;
    		window.setTimeout( () => {
    			this.status = true
    		},100)
    		let params = {}
    		if(this.timeRange.begin && this.timeRange.end){
    			params.beginDate = this.timeRange.begin.join("-");
      			params.endDate = this.timeRange.end.join("-");
    		}
      		
    		params.code = this.code;
    		params.limit = 20;
	  		params.curPage = 0;
	  		this.request(params)
    	}
    },
    computed: { 
		commentList(){
			return this.comments
		},
    },
     created(){
     	let params = {code:0,limit:20,curPage:1}
     	this.request(params)
    },
    methods: {
		
		loadMore: debounce(function(e){
			var scrollT = Math.ceil(e.target.scrollTop+e.target.clientHeight),
		    offsetT = e.target.getElementsByClassName('msg')[0].offsetHeight;
		    //console.log(scrollT,offsetT)
        	if(offsetT-scrollT<=0){
        		let paramsObj = {}
    				if(this.timeRange.begin && this.timeRange.end){
		    			 paramsObj = {
			                code:this.code,
			                limit:20,
			                curPage:this.pageNum++,
			                beginDate : this.timeRange.begin.join("-"),
	    					endDate : this.timeRange.end.join("-"),
			            }
		    		}else{
		    			 paramsObj = {
			                code:this.code,
			                limit:20,
			                curPage:this.pageNum++,
			            }
		    		}
		       		if(this.isLoad){
			  			this.request(paramsObj)
			  		}
        	}
		},500),
		
		getDate(val){
			this.timeRange = val
		},
    	getData(){},
		//请求数据
	  	request(data){ 
	  		api.getComments(data).then( (re) =>{
	  				let reData = re.data.data.comments;
	  				if(reData.length===0){
	  					this.isLoad = false
		  				return
		  			}
	  				
	  				this.isLoad = true
	  				reData.forEach( (v,i) => {
	  					this.comments.push(v)
	  				})

					if(re.status===200){
						this.isloading = false;
					}
		    }).catch( (e) => {
		    	console.log(e);
		    })
	  	},
	  	
    },
     components:{
        	vdate
        },
}

</script>

