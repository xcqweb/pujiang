<template>
	<div class="showImg" v-if="status">
		<p @click="close" title="关闭">×</p>
		<img :src="'http://txl.tourzj.gov.cn/sitepic/Imgbig/'+imgSrc" alt="暂无照片"/>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		beforeDestroy(){
			this.$off()
		},
		props:['status','imgSrc'],
		methods:{
			close(){
				this.$emit('closeBigImg')
			},
		}
	}
</script>

<style scoped="scoped" lang="less">
.showImg{
	    width: 1350/1536*100vw;
		height: 620/736*100vh;
		background-color: rgba(10, 14, 39,0.9);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 100000;
		line-height: 620/736*100vh;
		img{
			height: 360/736*100vh;
			line-height: 360/736*100vh;
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			color: #fff;
			font-size: 2rem;
		}
		p{
			position: absolute;
			color: #ccc;
			font-size: 2rem;
			top: 2rem;
			right: 1rem;
			width: 2rem;
			transform: translateY(-50%);
			cursor: pointer;
		}
		p:hover{
			color: #fff;
		}
}
</style>