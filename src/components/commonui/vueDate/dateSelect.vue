<template>
	<div class="box">
		<p class="title" @click="chose"><span>{{ctime}}</span><i :class="icon"></i></p>
		<ul class="list" v-show="showStatus" id='list'>
			<li v-for="(item,index) in years" @mouseover="showMonth(item.year,$event)">{{item.year}}
				
			</li>
		</ul>
		<div class="subMenuBox">
			<ul class="subMenu" v-show="status">
				<li v-for="month in months" @click="choseDates(month)">{{month}}</li>
				<span class="arrow"></span>
			</ul>
		</div>
		
		<div class="toast" v-show="showStatus" @click.self="hide($event)"></div>
	</div>
</template>

<script>
	import Bus from '@/common/js/bus'
	let date = new Date();
	let year = date.getFullYear();
	let curMonth = date.getMonth();
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
				//ctime:`${year}  ~ ${curMonth>10?curMonth:'0'+curMonth}`,
				ctime:'年  ~ 月',
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
		beforeDestroy(){
			Bus.$off()
			this.$off()
		},
		computed:{
			icon(){
				if(this.showStatus){
					return 'down'
				}else{
					return 'up'
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
					this.showStatus = false
					this.status = false
			},
			showMonth(val,e){
				if(this.isStart){
					this.choseDateStart[0] = val
				}else{
					this.choseDate[0] = val
				}
				this.status = true;
				
				//将维数组转化为数组 // ie 不识别维数组
				let list =Array.from(document.getElementById('list').childNodes);
				list.forEach( (v,i) => {
					//v.classList.remove('active')  //ie10
					v.className = '';
				})
				e.target.className = 'active';
			},
			
			choseDates(data){
				
				this.showStatus = false;
				this.status = false;
				if(this.isStart){//开始日期
					if(this.choseDateStart[0]===year && data>curMonth+1){
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
		max-width: 13rem;
		min-width: 10rem;
		height: 2rem;
		position: relative;
		margin-left: 5rem;
		margin-top: 0rem;
		background: none;
		font-size: 0.8rem;
		.toast{
			position: fixed;
			z-index: 500;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
		}
		.subMenuBox{
			width: 5rem;
			position: absolute;
			z-index: 600;
			height: 11.5rem;
			top: 1.8rem;
			left: 6.9rem;
			.subMenu{
				position: absolute;
				height: 10.5rem;
				width: 5rem;
				left: 0.1rem;
				top: 1rem;
				background: #193583;
				border: 1px solid #1b44ba;
				overflow-y: auto;
				overflow-x: hidden;
				display: block;
				z-index: 600;
				box-shadow: 0.1rem 0 1.5rem rgba(1, 1, 13, 0.4);
				&:hover{
					box-shadow: 1px 0 30px  rgba(1,1,13,1);
				}
				li{
					height: 1.5rem;
					width: 5rem;
					line-height: 1.5rem;
					cursor: pointer;
				}
				li:hover{
					background-color: #3B69BE;
				}
			}
		}
			
		.title{
			width: 11rem;
			height: 1.8rem;
			line-height: 1.8rem;
			box-shadow: 1px 0 30px  rgba(1,1,13,0.4);
			cursor: pointer;
			font-size: 0.8rem;
			position: absolute;
			left: 1rem;
			top: 0.9rem;
			&:hover{
					box-shadow: 1px 0 30px  rgba(1,1,13,1);
				}
			span{
				margin-left: -1rem;
			}
			.up{
	    			display: block;
	    			position: absolute;
	    			right: 0.5rem;
	    			top: 0.8rem;
	    			width: 0;
	    			height: 0;
	    			border-width: 0.3rem;
	    			border-color: #fff transparent transparent;
	    			border-style: solid;
	    		}
	    		.down{
	    			display: block;
	    			position: absolute;
	    			right: 0.5rem;
	    			top: 0.5rem;
	    			width: 0;
	    			height: 0;
	    			border-width: 0.3rem;
	    			border-color:  transparent transparent #fff;
	    			border-style: solid;
	    		}
		}
		.list{
			background: #193583;
			border: 1px solid #1b44ba;
			height: 10.5rem;
			max-width: 10rem;
			overflow-y: auto;
			overflow-x: hidden;
			z-index: 1000;
			position: absolute;
			font-size: 0.8rem;
			top: 2.8rem;
			left: 1.3rem;
			box-shadow: 1px 0 1.5rem rgba(1, 1, 13, 0.4);
			&:hover{
					box-shadow: 1px 0 30px  rgba(1,1,13,1);
				}
			li{
				height: 1.5rem;
				line-height: 1.5rem;
				min-width: 5.5rem;
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
			
			.subMenu::-moz-scrollbar,.list::-webkit-scrollbar{
			    width: 1px;
			    height: 0rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.subMenu::-moz-scrollbar-track,.list::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.subMenu::-moz-scrollbar-thumb,.list::-webkit-scrollbar-thumb{
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