<template>
	<div class="box">
		<p class="title" @click="chose"><span>{{ctime}}</span><i :class="icon"></i></p>
		<ul class="list" v-show="showStatus" ref='list'>
			<li v-for="(item,index) in years" @mouseover="showMonth(item.year,$event)" ref='list'>{{item.year}}
				
			</li>
		</ul>
		<div class="subMenuBox">
			<ul class="subMenu" v-show="status">
				<li v-for="month in months" @click="choseDates(month)">{{month}}</li>
				<span class="arrow"></span>
			</ul>
		</div>
		
		<div class="toast" v-show="showStatus" @click="hide($event)"></div>
	</div>
</template>

<script>
	import Bus from '@/common/js/bus'
	let date = new Date();
	let year = date.getFullYear();
	let curMonth = date.getMonth()+1;
	let curDay = date.getDate();
	let yearData=[];
	for(let i=0; i<7; i++){
		yearData[i] = {year:year-i}
	}
	export default{
		data(){
			return {
				years:yearData,
				months:[1,2,3,4,5,6,7,8,9,10,11,12],
				showStatus:false,
				choseDate:[],
				choseDateStart:[],
				ctime:'年  ~ 月',
				timer:null,
				timerM:null,
				status:false,
			}
		},
		props:['isStart'], 
		mounted(){
			Bus.$on('reset', () => {
				this.ctime = '年  ~ 月';
			}),
			Bus.$on('swap',(data) => {
				if(this.isStart){
					this.ctime = data.begin[0]+" ~ "+ data.begin[1]
				}else{
					this.ctime = data.end[0]+" ~ "+ data.end[1]
				}
			})
		},
		computed:{
			icon(){
				if(this.showStatus){
					return 'up'
				}else{
					return 'down'
				}
			},
			comStatus(){
				
				return false
			}
		},
		methods:{
			chose(){
				this.showStatus = !this.showStatus;
			},
			hide(e){
				console.log(this.$el)
				//alert(21)
//				if(!this.$el.contains(e.target)){
					this.showStatus = false
					this.status = false
//				}
			},
			showMonth(val,e){
				window.clearTimeout(this.timer)
				if(this.isStart){
					this.choseDateStart[0] = val
				}else{
					this.choseDate[0] = val
				}
				this.status = true
				let list = this.$refs.list.childNodes;
				list.forEach( (v,i) => {
					v.className = ""
				})
				e.target.className = "active"
			},
			
			choseDates(data){
				
				this.showStatus = false;
				this.status = false;
				if(this.isStart){//开始日期
					if(this.choseDateStart[0]===year && data>curMonth){
						alert('选择时间不能大于当前月份!');
						this.ctime='年  ~ 月';
						return;
					}
					if(this.choseDateStart[0]===year && data===curMonth){
						this.choseDateStart[2] = curDay
					}else{
						this.choseDateStart[2] = "01"
					}
					 
					 this.choseDateStart[1] = data<10?"0"+data:data
					 this.ctime = this.choseDateStart[0] +" ~ "+ this.choseDateStart[1]
					 this.$emit('turistDate',this.choseDateStart)
					 //console.log(this.choseDateStart)
				}else{//结束日期
					if(this.choseDate[0]===year && data>curMonth){
						alert('选择时间不能大于当前月份!');
						this.ctime='年  ~ 月';
						return;
					}
					this.choseDate[1] = data
					if(data===2){ //闰年2月28天
						if((this.choseDate[0] % 4 === 0 && this.choseDate[0] % 100 !== 0)  || this.choseDate[0] % 400 === 0){
							this.choseDate[2] = 29
						}else{
							this.choseDate[2] = 28
						}
						
					}else if(data===4||data===6||data===9||data===11){
						this.choseDate[2] = 30
					}else{
						this.choseDate[2] = 31
					}
					if(this.choseDate[0]===year && data===curMonth){
						this.choseDate[2] = curDay
					}
					this.choseDate[1] = data<10?"0"+data:data
					this.ctime = this.choseDate[0] +" ~ "+ this.choseDate[1]
					Bus.$emit('turistDate',{end:this.choseDate})
				}
				
				
				if(this.choseDate&&this.choseDateStart){
										
				}
			} 
		}
		
	}
</script>

<style lang="less" scoped="scoped">
	.box{
		max-width: 260px;
		min-width: 200px;
		height: 2rem;
		position: relative;
		margin-left: 100px;
		margin-top: 1rem;
		background: none;
		font-size: 0.9rem;
		.toast{
			position: fixed;
			z-index: 100;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
		}
		.subMenuBox{
			width: 90px;
			overflow: hidden;
			position: absolute;
			height: 210px;
			top: -0.5rem;
			left: 50px;
			.subMenu{
				transform: translate(90px,44px);
				position: absolute;
				height: 210px;
				width: 100px;
				left: 50px;
				top: -0.5rem;
				background: #193583;
				border: 1px solid #1b44ba;
				overflow-y: auto;
				overflow-x: hidden;
				display: block;
				z-index: 123;
				box-shadow: 1px 0 30px rgba(1, 1, 13, 0.4);
				li{
					height: 30px;
					width: 100px;
					line-height: 30px;
					cursor: pointer;
				}
				li:hover{
					background-color: #3B69BE;
				}
			}
		}
			
		.title{
			width: 10rem;
			height: 1.5rem;
			line-height: 1.5rem;
			border: solid 1px #345bfa;
			cursor: pointer;
			font-size: 0.9rem;
			position: absolute;
			left: 1rem;
			span{
				margin-left: -1rem;
			}
			.up{
	    			display: block;
	    			position: absolute;
	    			right: 10px;
	    			top: 12px;
	    			width: 0;
	    			height: 0;
	    			border-width: 6px;
	    			border-color: #fff transparent transparent;
	    			border-style: solid;
	    		}
	    		.down{
	    			display: block;
	    			position: absolute;
	    			right: 10px;
	    			top: 4px;
	    			width: 0;
	    			height: 0;
	    			border-width: 6px;
	    			border-color:  transparent transparent #fff;
	    			border-style: solid;
	    		}
		}
		.list{
			background: #193583;
			border: 1px solid #1b44ba;
			height: 210px;
			max-width: 200px;
			overflow-y: auto;
			overflow-x: hidden;
			z-index: 1000;
			position: absolute;
			top: 1.8rem;
			left: 26px;
			box-shadow: 1px 0 30px rgba(1, 1, 13, 0.4);
			li{
				height: 30px;
				line-height: 30px;
				min-width: 110px;
				text-align: center;
			
			}
			.active{
				background-color: #3B69BE;
			}
			/*li:hover{
				background-color: #3B69BE;
			}*/
			li:hover .subMenu{
				display: block;
				color: #fff;
				background: #193583;
			}
		}
	}
	
	
		  .subMenu::-webkit-scrollbar,.list::-webkit-scrollbar{
			    width: 1px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.subMenu::-webkit-scrollbar-track,.list::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.subMenu::-webkit-scrollbar-thumb,.list::-webkit-scrollbar-thumb{
			    width: 0px;
			    height: 0rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #ccc;
			    background-color: #0F2059;
			}
			
			.subMenu::scrollbar,.list::scrollbar{
			    width: 0px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.subMenu::scrollbar-track,.list::scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			    border-radius: 10px;
			}
			/*ie*/
			.subMenu,.list{
				scrollbar-face-color: #0F2059;
				scrollbar-highlight-color: ;
				scrollbar-shadow-color: #02275A;
				scrollbar-track-color: #263984;
			}
			 
			/*定义滑块，内阴影及圆角*/
			.subMenu::scrollbar-thumb,.list::scrollbar-thumb{
			    width: 0px;
			    height: 0rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 6px #02275A;
			    background-color: #0F2059;
			}
</style>