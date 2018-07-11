<template>
	<transition name='fades'>
		<div class="detailas">
			<div class="border">
				<span class="close" @click="close" title="关闭">×</span>
				<div class="con">
					<div class="title">{{currentItem}}</div>
					<div class="conTxt">
						
						<!--景点-->
						<div class="right" v-if="currentItem==='景点'" @scroll="loadMore($event)">
							<div class="titleBox">
								<ul class="title" :style="{'min-width':titles.length*16+'rem'}">
									<li v-for="item in titles" :class="{bigW:item==='简介'||item==='自驾车路线',smallW:item==='温馨提示'||item==='优惠政策'||item==='公共交通',}" :key='item'>{{item}}</li>
								</ul>
							</div>
							<div class="conBox">
								<ul class="mainList" v-for="item in reData" :style="{'min-width':titles.length*16+'rem'}" :key='item.AuditUnitID'>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.FlagPic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.FlagPic"width="100%" alt="暂无图片" /></li>
									<li><span>{{item.UnitName}}</span></li>
									<li><span>{{item.AreaCode}}</span></li>
									<li><span>{{item.address}}</span></li>
									
									<li><span>{{item.Level}}</span></li>
									<li><span>{{item.SiteType}}</span></li>
									<li><span>{{item.Price}}</span></li>
									<li class="bigW"><span>{{item.ResourceInfo}}</span></li>
									
									<li class="smallW"><span>{{item.TrafficPublic}}</span></li>
									
									<li class="bigW"><span>{{item.TrafficSelf}}</span></li>
									<li><span>{{item.OpenTime}}</span></li>
									<li class="smallW"><span>{{item.PrePolicies}}</span></li>
									<li><span>{{item.scenictitle}}</span></li>
									<li><span>{{item.SiteFacilities}}</span></li>
									
									
									<li><span>{{item.lng}}</span></li>
									<li><span>{{item.lat}}</span></li>
									<li><span>{{item.PostCode}}</span></li>
									<li><span>{{item.Fax}}</span></li>
									<li><span>{{item.Web}}</span></li>
									<li><span>{{item.tel}}</span></li>
									<!--<li><span>{{item.email}}</span></li>
									<li><span>{{item.weibo}}</span></li>
									<li><span>{{item.weixin}}</span></li>
									<li><span>{{item.WXQRCode}}</span></li>-->
									<li><span>{{item.zxphone}}</span></li>
									<li><span>{{item.tsphone}}</span></li>
									<li class="smallW"><span>{{item.Remind}}</span></li>
									<li><span>{{item.Credit}}</span></li>
									<li><span>{{item.CarPark}}</span></li>
									<!--<li><span>{{item.Leader}}</span></li>-->
									<li><span>{{item.LeaderPhone}}</span></li>
								</ul>
							</div>
						</div>
						
						<!--酒店-->
						<div class="right" v-if="currentItem==='酒店'" @scroll="loadMore($event)">
							<div class="titleBox">
								<ul class="title" :style="{'min-width':titles.length*16+'rem'}">
									<li v-for="item in titles" :class="{smallW2:item==='公共交通'||item==='简介'||item==='酒店政策'||item==='客房服务',}" :key='item'>{{item}}</li>
								</ul>
							</div>
							<div class="conBox">
								<ul class="mainList" v-for="item in reData" :style="{'min-width':titles.length*16+'rem'}" :key='item.AuditUnitID'>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.FlagPic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.FlagPic"width="100%" alt="暂无图片" /></li>
									<li><span>{{item.UnitName}}</span></li>
									<li><span>{{item.AreaCode}}</span></li>
									<li><span>{{item.address}}</span></li>
									
									<li><span>{{item.Level}}</span></li>
									<li><span>{{item.hotelTypes}}</span></li>
									<li><span>{{item.minPrice}}</span></li>
									<li class="smallW2"><span>{{item.Describe}}</span></li>
									
									<li class="smallW2"><span>{{item.TrafficPublic}}</span></li>
									
									<li><span>{{item.OpenDate}}</span></li>
									
									<li class="smallW2"><span>{{item.PrePolicies}}</span></li>
									<li><span>{{item.Service}}</span></li>
									<li><span>{{item.RoomCount}}</span></li>
									<li class="smallW2"><span>{{item.RoomKind}}</span></li>
									<!--<li><span>{{item.email}}</span></li>-->
									
									<!--<li><span>{{item.lng}}</span></li>
									<li><span>{{item.lat}}</span></li>
									<li><span>{{item.PostCode}}</span></li>-->
									
									<li><span>{{item.Fax}}</span></li>
									<!--<li><span>{{item.Web}}</span></li>-->
									<!--<li><span>{{item.Tel}}</span></li>-->
									
									<!--<li><span>{{item.weibo}}</span></li>
									<li><span>{{item.weixin}}</span></li>
									<li><span>{{item.WXQRCode}}</span></li>-->
									
									<li><span>{{item.zxphone}}</span></li>
									<li><span>{{item.tsphone}}</span></li>
									
									<li><span>{{item.RenDate}}</span></li>
									
									<!--<li><span>{{item.Credit}}</span></li>-->
									<!--<li><span>{{item.CarPark}}</span></li>-->
									<!--<li><span>{{item.Leader}}</span></li>-->
									<li><span>{{item.LeaderPhone}}</span></li>
									<!--<li><span>{{item.Honor}}</span></li>-->
								</ul>
							</div>
						</div>
						
						<!--农家乐-->
						<div class="right" v-if="currentItem==='农家乐'" @scroll="loadMore($event)">
							<div class="titleBox">
								<ul class="title" :style="{'min-width':titles.length*16+'rem'}">
									<li v-for="item in titles" :class="{smallW2:item==='公共交通'||item==='简介'||item==='自驾线路'}" :key='item'>{{item}}</li>
								</ul>
							</div>
							<div class="conBox">
								<ul class="mainList" v-for="item in reData" :style="{'min-width':titles.length*16+'rem'}" :key='item.AuditUnitID'>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.FlagPic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.FlagPic"width="100%" alt="暂无图片" /></li>
									<li><span>{{item.UnitName}}</span></li>
									<li><span>{{item.AreaCode}}</span></li>
									<li><span>{{item.address}}</span></li>
									<li><span>{{item.Level}}</span></li>
									<li><span>{{item.formEnterPictureType}}</span></li>
									<li><span>{{item.consumPerPerson}}</span></li>
									<li class="smallW2"><span>{{item.describe}}</span></li>
									<li><span>{{item.RoomKind}}</span></li>
									<li><span>{{item.bedNum}}</span></li>
									<li class="smallW2"><span>{{item.transit}}</span></li>
									<li><span>{{item.OpenHour}}</span></li>
									<li><span>{{item.formCuisines}}</span></li>
									<li><span>{{item.PubRoad}}</span></li>
									<li><span>{{item.TrafficLevel}}</span></li>
									<li class="smallW2"><span>{{item.TrafficSelf}}</span></li>
									<li><span>{{item.SurroundEnvironment}}</span></li>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.describePic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.describePic"width="100%" alt="暂无图片"/></li>
									<li><span>{{item.Facilities}}</span></li>
									<!--<li><span>{{item.SurroundFacilities}}</span></li>-->
									<!--<li><span>{{item.AdditionalService}}</span></li>-->
									<li><span>{{item.ResStatistics}}</span></li>
									<li><span>{{item.AccommodatePeople}}</span></li>
									<!--<li><span>{{item.TicketInfo}}</span></li>-->
									<!--<li><span>{{item.GuideInfo}}</span></li>-->
									<li><span>{{item.formType}}</span></li>
									<li><span>{{item.minPrice}}</span></li>
									<!--<li><span>{{item.Style}}</span></li>-->
									<!--<li><span>{{item.special}}</span></li>-->
									<!--<li><span>{{item.email}}</span></li>-->
									<!--<li><span>{{item.weibo}}</span></li>-->
									<li><span>{{item.lng}}</span></li>
									<li><span>{{item.lat}}</span></li>
									<!--<li><span>{{item.PostCode}}</span></li>-->
									<li><span>{{item.Fax}}</span></li>
									<!--<li><span>{{item.Web}}</span></li>-->
									<!--<li><span>{{item.Tel}}</span></li>-->
									<!--<li><span>{{item.weixin}}</span></li>-->
									<!--<li><span>{{item.WXQRCode}}</span></li>-->
									
									<li><span>{{item.zxphone}}</span></li>
									<li><span>{{item.tsphone}}</span></li>
									<li><span>{{item.Credit}}</span></li>
									<li><span>{{item.CarPark}}</span></li>
									<li><span>{{item.Mobile}}</span></li>
									<li><span>{{item.roomNum}}</span></li>
									<!--<li><span>{{item.Honor}}</span></li>-->
									<li><span>{{item.OpenTime}}</span></li>
									<!--<li><span>{{item.RenovationDate}}</span></li>-->
								</ul>
							</div>
						</div>
						
						<!--餐饮-->
						<div class="right" v-if="currentItem==='餐饮'" @scroll="loadMore($event)">
							<div class="titleBox">
								<ul class="title" :style="{'min-width':titles.length*16+'rem'}">
									<li v-for="item in titles" :class="{smallW2:item==='简介'}" :key='item'>{{item}}</li>
								</ul>
							</div>
							<div class="conBox">
								<ul class="mainList" v-for="item in reData" :style="{'min-width':titles.length*16+'rem'}" :key='item.AuditUnitID'>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.FlagPic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.FlagPic"width="100%" alt="暂无图片" /></li>
									<li><span>{{item.UnitName}}</span></li>
									<li><span>{{item.AreaCode}}</span></li>
									<li><span>{{item.address}}</span></li>
									<li><span>{{item.table_num}}</span></li>
									<li><span>{{item.consum_per_person}}</span></li>
									<li><span>{{item.cuisine_name}}</span></li>
									<li><span>{{item.eatway_name}}</span></li>
									<li><span>{{item.room_num}}</span></li>
									<!--<li><span>{{item.email}}</span></li>
									<li><span>{{item.weibo}}</span></li>
									<li><span>{{item.weixin}}</span></li>-->
									<li><span>{{item.lng}}</span></li>
									<li><span>{{item.lat}}</span></li>
									<li><span>{{item.PostCode}}</span></li>
									<li><span>{{item.Fax}}</span></li>
									<!--<li><span>{{item.Web}}</span></li>
									<li><span>{{item.Tel}}</span></li>
									<li><span>{{item.WXQRCode}}</span></li>-->
									
									<li><span>{{item.zxphone}}</span></li>
									<li><span>{{item.tsphone}}</span></li>
									<li><span>{{item.OpenTime}}</span></li>
									<li><span>{{item.Credit}}</span></li>
									<li><span>{{item.CarPark}}</span></li>
									<!--<li><span>{{item.Leader}}</span></li>-->
									<li><span>{{item.LeaderPhone}}</span></li>
									<li><span>{{item.DecorateTime}}</span></li>
									<li class="smallW2"><span>{{item.Describe}}</span></li>
									<!--<li><span>{{item.Honor}}</span></li>-->
									<li><span>{{item.IsWifi}}</span></li>
								</ul>
							</div>
						</div>
						
						<!--购物点-->
						<div class="right" v-if="currentItem==='购物点'" @scroll="loadMore($event)">
							<div class="titleBox">
								<ul class="title" :style="{'min-width':titles.length*16+'rem'}">
									<li v-for="item in titles" :key='item'>{{item}}</li>
								</ul>
							</div>
							<div class="conBox">
								<ul class="mainList" v-for="item in reData" :style="{'min-width':titles.length*16+'rem'}" :key='item.AuditUnitID'>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.FlagPic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.FlagPic"width="100%" alt="暂无图片" /></li>
									
									<li><span>{{item.UnitName}}</span></li>
									<li><span>{{item.AreaCode}}</span></li>
									<li><span>{{item.address}}</span></li>
									<li><span>{{item.transit}}</span></li>
									<li><span>{{item.OpenTime}}</span></li>
									<!--<li><span>{{item.email}}</span></li>
									<li><span>{{item.weibo}}</span></li>
									<li><span>{{item.weixin}}</span></li>
									<li><span>{{item.WXQRCode}}</span></li>-->
									<li><span>{{item.lng}}</span></li>
									<li><span>{{item.lat}}</span></li>
									<li><span>{{item.PostCode}}</span></li>
									<li><span>{{item.Fax}}</span></li>
									<li><span>{{item.Web}}</span></li>
									<!--<li><span>{{item.Tel}}</span></li>-->
									<li><span>{{item.zxphone}}</span></li>
									<li><span>{{item.tsphone}}</span></li>
									<li><span>{{item.Credit}}</span></li>
									<li><span>{{item.CarPark}}</span></li>
								</ul>
							</div>
						</div>
						
						<!--休闲娱乐-->
						<div class="right" v-if="currentItem==='休闲娱乐'" @scroll="loadMore($event)">
							<div class="titleBox">
								<ul class="title" :style="{'min-width':titles.length*16+'rem'}">
									<li v-for="item in titles" :key='item'>{{item}}</li>
								</ul>
							</div>
							<div class="conBox">
								<ul class="mainList" v-for="item in reData" :style="{'min-width':titles.length*16+'rem'}" :key='item.AuditUnitID'>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.FlagPic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.FlagPic"width="100%" alt="暂无图片" /></li>
									<li><span>{{item.UnitName}}</span></li>
									<li><span>{{item.AreaCode}}</span></li>
									<li><span>{{item.address}}</span></li>
									<li><span>{{item.transit}}</span></li>
									<li><span>{{item.OpenTime}}</span></li>
									<li><span>{{item.enter_type_name}}</span></li>
									<!--<li><span>{{item.email}}</span></li>
									<li><span>{{item.weibo}}</span></li>
									<li><span>{{item.weixin}}</span></li>-->
									<li><span>{{item.lng}}</span></li>
									<li><span>{{item.lat}}</span></li>
									<li><span>{{item.PostCode}}</span></li>
									<li><span>{{item.Fax}}</span></li>
									<li><span>{{item.Web}}</span></li>
									<!--<li><span>{{item.Tel}}</span></li>
									<li><span>{{item.WXQRCode}}</span></li>-->
									
									<li><span>{{item.zxphone}}</span></li>
									<li><span>{{item.tsphone}}</span></li>
									<li><span>{{item.Credit}}</span></li>
									<li><span>{{item.CarPark}}</span></li>
								</ul>
							</div>
						</div>
						
						<!--旅行社-->
						<div class="right" v-if="currentItem==='旅行社'" @scroll="loadMore($event)">
							<div class="titleBox">
								<ul class="title" :style="{'min-width':titles.length*16+'rem'}">
									<li v-for="item in titles" :key='item'>{{item}}</li>
								</ul>
							</div>
							<div class="conBox">
								<ul class="mainList" v-for="item in reData" :style="{'min-width':titles.length*16+'rem'}" :key='item.AuditUnitID'>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.FlagPic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.FlagPic"width="100%" alt="暂无图片" /></li>
									<li><span>{{item.UnitName}}</span></li>
									<li><span>{{item.AreaCode}}</span></li>
									<li><span>{{item.address}}</span></li>
									<li><span>{{item.Level}}</span></li>
									<li><span>{{item.lng}}</span></li>
									<li><span>{{item.lat}}</span></li>
									<li><span>{{item.PostCode}}</span></li>
									<li><span>{{item.Fax}}</span></li>
									<li><span>{{item.Web}}</span></li>
									<!--<li><span>{{item.Tel}}</span></li>-->
									<li><span>{{item.transit}}</span></li>
									<li><span>{{item.LicenseNo}}</span></li>
									<!--<li><span>{{item.email}}</span></li>-->
									<!--<li><span>{{item.weibo}}</span></li>
									<li><span>{{item.weixin}}</span></li>
									<li><span>{{item.WXQRCode}}</span></li>-->
									<li><span>{{item.PlaceType}}</span></li>
									<li><span>{{item.zxphone}}</span></li>
									<li><span>{{item.tsphone}}</span></li>
									<li><span>{{item.travel_type}}</span></li>
									<!--<li><span>{{item.travel_language}}</span></li>-->
								</ul>
							</div>
						</div>
						
						<!--公共设施-->
						<div class="right" v-if="currentItem==='公共设施'" @scroll="loadMore($event)">
							<div class="titleBox">
								<ul class="title" :style="{'min-width':titles.length*16+'rem'}">
									<li v-for="item in titles" :key='item'>{{item}}</li>
								</ul>
							</div>
							<div class="conBox">
								<ul class="mainList" v-for="item in reData" :style="{'min-width':titles.length*16+'rem'}" :key='item.AuditUnitID'>
									<li><img style="cursor: pointer;" title="点击查看大图" @click="openBigImg(item.FlagPic)" :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+item.FlagPic"width="100%" alt="暂无图片" /></li>
									<li><span>{{item.UnitName}}</span></li>
									<li><span>{{item.AreaCode}}</span></li>
									<li><span>{{item.address}}</span></li>
									<li><span>{{item.transit}}</span></li>
									<!--<li><span>{{item.email}}</span></li>
									<li><span>{{item.weibo}}</span></li>
									<li><span>{{item.weixin}}</span></li>
									<li><span>{{item.WXQRCode}}</span></li>-->
									
									<li><span>{{item.lng}}</span></li>
									<li><span>{{item.lat}}</span></li>
									<li><span>{{item.PostCode}}</span></li>
									<li><span>{{item.Fax}}</span></li>
									<li><span>{{item.Web}}</span></li>
									<!--<li><span>{{item.Tel}}</span></li>-->
									<li><span>{{item.zxphone}}</span></li>
									<li><span>{{item.tsphone}}</span></li>
									<li><span>{{item.serve_time}}</span></li>
									<li><span>{{item.ServerTypeName}}</span></li>
								</ul>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<show-img :status='showBigImg' @closeBigImg='closeBigImg' :imgSrc='imgSrc'></show-img>
		</div>
	</transition>
	
</template>

<script>
	import showImg from '@/components/commonui/showImg/showImg'
	import _ from 'lodash'
	export default{
		data(){
			return {
				reData:[],
				titles:[],
				page:0,
				flag:true,//防止数据加载完是再次请求
				showBigImg:false,
				imgSrc:''
			}
		},
		props:['currentItem'],
		watch:{
			currentItem:function(val){
				this.page=0
				this.reData=[]
				this.getData()
			}
		},
		beforeDestroy(){
	    	this.$off()
	    	if(window.removeEventListener){
	    		window.removeEventListener('error', (msg, url, row, col, error) => {
				  if(msg.target.tagName==='IMG'){
				  	msg.target.src = 'http://115.29.17.176/img/noImg.jpg'
				  }
				}, true);
	    	}else{
	    		window.detachEvent('onerror', (msg, url, row, col, error) => {
				  if(msg.target.tagName==='IMG'){
				  	msg.target.src = 'http://115.29.17.176/img/noImg.jpg'
				  }
				}, true)
	    	}
	    },
	    mounted(){
	    	this.$nextTick( () => {
	    		if(window.attachEvent){
	    			window.attachEvent('error', (msg, url, row, col, error) => {
					  if(msg.target.tagName==='IMG'){
					  	msg.target.src = 'http://115.29.17.176/img/noImg.jpg'
					  }
					}, true);
	    		}else{
	    			window.addEventListener('error', (msg, url, row, col, error) => {
					  if(msg.target.tagName==='IMG'){
					  	msg.target.src = 'http://115.29.17.176/img/noImg.jpg'
					  }
					}, true);
	    		}
	    	})
	    },
		methods:{
			loadMore:_.debounce( function(e){//去抖函数 
				if(!this.flag){
					return
				}
				let _self = this;
		       		scrollT = 0;
		       		offsetT = 0;
		       		var scrollT = Math.ceil(e.target.scrollTop+e.target.clientHeight),
		       			offsetT = e.target.getElementsByClassName('conBox')[0].offsetHeight;
		       		if(offsetT-scrollT<=200){
		       			_self.page++
		       			_self.getData()
		       		}
			},300),
			close(){
				this.$emit('closeToast')
			},
			openBigImg(data){
				this.imgSrc = data
				this.showBigImg = true
			},
			closeBigImg(){
				this.showBigImg = false
			},
			getData(){
				let _self = this
				api.params.code=0
				api.params.curPage = this.page
				api.params.limit = 20
				api.params.unitType = this.switchType(this.currentItem)
				api.getProductDataDetial(api.params).then( (r) => {
					if(!r.data.data.length){
						this.flag = false
						return
					}else{
						this.flag = true
					}
					if(r.data.code==='200'||r.data.code===200){
						_self.reData=_self.reData.concat(r.data.data)
					}
					
				})
			},
			switchType(type){
				switch(type){
					case '景点':
					this.titles=['标志图', '全称', '行政区划编码', '街道地址', '等级', '景点类型', '门票价格', '简介', '公共交通', '自驾车路线', '开放时间', '优惠政策', '景点称号', '景点设施', '经度', '纬度', '邮编', '传真', '网址', '联系电话', '咨询电话', '投诉电话', '温馨提示', '信用卡', '有无停车场', '负责人电话'];
					return 'listScenic';
					break;
					
					case '酒店':
					this.titles=['标志图', '全称', '行政区划编码', '街道地址', '等级', '酒店类型', '最低房价', '简介', '公共交通', '开业时间', '酒店政策', '酒店服务', '房间总数', '客房服务', '传真', '咨询电话', '投诉电话', '装修时间', '负责人电话'];
					return 'listHotel';
					break;
					
					case '农家乐':
					this.titles=['标志图', '全称', '行政区划编码', '街道地址', '等级', '休闲娱乐', '餐饮均价', '简介', '客房设施', '床位数', '公共交通', '营业时间', '主营内容', '公路情况', '交通方便级别', '自驾线路',  '简介图片', '配套设施', '餐厅统计', '餐厅可容纳人数',  '农家乐类型', '房间起价', '经度', '纬度', '邮编', '传真', '咨询电话', '投诉电话', '信用卡', '有无停车场', '移动电话', '客房数',  '开业时间'];
					return 'listFormHouse';
					break;
					
					case '餐饮':
					this.titles=['标志图', '全称', '行政区划编码', '街道地址', '餐位数', '餐饮均价（元）', '主营菜系', '就餐方式', '包间数', '经度', '纬度', '邮编', '传真' , '咨询电话', '投诉电话', '营业时间', '信用卡', '有无停车场', '负责人电话', '装修时间', '简介', '是否有WIFI'];
					return 'listrestaurant';
					break;
					
					case '购物点':
					this.titles=['标志图', '全称', '行政区划编码', '街道地址', '交通路线', '开放时间', '经度', '纬度', '邮编', '传真', '网址', '咨询电话', '投诉电话', '信用卡', '有无停车场']
					return 'listshopping';
					break;
					
					case '休闲娱乐':
					this.titles=['标志图', '全称', '行政区划编码', '街道地址', '交通路线', '开放时间', '类型', '经度', '纬度', '邮编', '传真', '网址', '咨询电话', '投诉电话', '信用卡', '有无停车场'];
					return 'listentertainment';
					break;
					
					case '旅行社':
					this.titles=['标志图','全称', '行政区划编码', '街道地址', '等级', '经度', '纬度', '邮编', '传真', '网址', '公共交通', '许可证号', '业务范围', '咨询电话', '投诉电话', '旅行社类型']
					return 'listTravel';
					break;
					
					case '公共设施':
					this.titles=['标志图', '全称', '行政区划编码', '街道地址', '交通路线', '经度', '纬度', '邮编', '传真', '网址', '咨询电话', '投诉电话', '服务时间', '服务类型']
					return 'listpublicserve';
					break;
				}
			}
		},
		created(){
			this.getData()
		},
		components:{
			showImg,
		}
	}
</script>

<style lang="less" scoped="scoped">
@borderColor:#52DAFC;
.detailas{
	width: 100vw;
	height: 100vh;
	background-color: rgba(10, 14, 39,0.8);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
	.border{
		width: 1350/1536*100vw;
		height: 620/736*100vh;
		background-color: #193684;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		&:before {
	        position:absolute;
	        bottom: -0.1rem;
	        left: -0.1rem;
	        width: 1rem;
	        height: 1rem;
	        border-bottom: 0.1rem solid @borderColor;
	        border-left:0.1rem solid @borderColor;
	        content: " ";
	        z-index: 100;
        }
        &:after {
	        position:absolute;
	        bottom: -0.1rem;
	        right: -0.1rem;
	        width: 1rem;
	        height: 1rem;
	        border-bottom:0.1rem solid @borderColor;
	        border-right:0.1rem solid @borderColor;
	        content: " ";
	        z-index: 100;
        }
        .close{
        	display: block;
        	padding: 0.3rem 0.5rem 0 0;
        	font-size: 2rem;
        	text-align: center;
        	position: absolute;
        	right: 0;
        	top: 0;
        	z-index: 1000;
        	color: #ccc;
        	cursor: pointer;
        	-webkit-user-select: none;
        	-ms-user-select: none;
        	-moz-user-select: none;
        	user-select: none;
        }
        .close:hover{
        	color: #fff;
        }
	}
	.con{
		width: 1350/1536*100vw;
		height: 620/736*100vh;
		background-color: #193684;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		box-shadow: 0 0 10rem #888;
		&:before {
	        position:absolute;
	        top: -0.1rem;
	        left: -0.1rem;
	        width: 1rem;
	        height: 1rem;
	        border-top:0.1rem solid @borderColor;
	        border-left:0.1rem solid @borderColor;
	        content: " ";
        }
        &:after {
	        position:absolute;
	        top: -0.1rem;
	        right: -0.1rem;
	        width: 1rem;
	        height: 1rem;
	        border-top:0.1rem solid @borderColor;
	        border-right:0.1rem solid @borderColor;
	        content: " ";
        }
	}
	.title{
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		font-size: 1.5rem;
		color: #fff;
		letter-spacing: 0.1rem;
		text-align: center;
		font-weight: bold;
	}
	.conTxt{
		width: 100%;
		height: 560/736*100vh;
		box-sizing: border-box;
		.right{
			width: 100%;
			height: 100%;
			text-align: center;
			background-color: #224299;
			overflow-x: scroll;
			.bigW{
				flex: 10 !important;	
			}
			.smallW{
				flex: 3 !important;	
			}
			.smallW2{
				flex: 5 !important;	
			}
			.titleBox{
				font-size: 1rem;
				background-color: #224299;
				.title{
					text-align: center;
					font-size: 1rem;
					display: flex;
					font-weight: bold;
					li{
						flex: 1;
						padding: 0 1rem;
					}
				}
			}
			.conBox{
				flex: 8;
				text-align: center;
				.mainList{
					color: #fff;
					font-size: 0.8rem;
					display: flex;
					letter-spacing: 0.05rem;
					text-align: center;
					li{
						flex: 1;
						line-height: 1.5rem;
						display: flex;
						justify-content: center;
						align-content: center;
						align-items: center;
						text-overflow: ellipsis;
						word-wrap: break-word;
						overflow: hidden;
						padding: 0.5rem 1rem;
						span{
							flex: 1;
							word-break: break-all;
						}
					}
					&:nth-child(2n){
						background-color: #224299
					}
					&:nth-child(2n+1){
						background-color: #193684;;
					}
				}
			}
		}
	}
}

	@keyframes full{
		from{
			transform: translateY(-100%);
		}
		to{
			transform: translateY(0);
		}
	}
	
	@keyframes out{
		from{
			transform: translateY(0);
		}
		to{
			transform: translateY(-100%);
		}
	}
	
	.fades-enter-active,  {
	  animation: full 0.2s ease-in-out;  
	}
	.fades-leave-active{
		animation: out 0.2s ease-out; 
	}
	
			.right::-webkit-scrollbar{
			    width: 0.8rem;
			    height: 0.8rem;
			}
			/*定义滚动条的轨道，内阴影及圆角*/
			.right::-webkit-scrollbar-track{
			    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.4);
			    border-radius: 10px;
			}
			/*定义滑块，内阴影及圆角*/
			.right::-webkit-scrollbar-thumb{
			    width: 0.8rem;
			    height: 0.8rem;
			    border-radius: 10px;
			    -webkit-box-shadow: inset 0 0 0.5rem #02275A;
			    background-color: #999
			}
			/*ie*/
			.right{
				scrollbar-face-color: #999;
				scrollbar-highlight-color: #193684;
				scrollbar-shadow-color: #193684;
				scrollbar-track-color: #224299;
				scrollbar-arrow-color:#0F2059;
			}
</style>