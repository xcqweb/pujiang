<template>
	<div class="d9">
		<div class="left">
			<D8
			:isVideo=true
			></D8>
		</div>
		<div class="right">
			<B2
			:isVideo=true
			:touristProp='touristProp'
			></B2>
		</div>
	</div>
</template>

<script>
	import componetstatus from '@/pages/home/componentstatus.js'
	export default{
		data(){
			return{
				
			}
		},
		props:{
			touristProp:String
		},
		components:{
			...componetstatus
		}
	}
</script>

<style scoped="scoped" lang="less">
.d9{
	width: 100%;
	height: 100%;
	text-align: center;
	display: flex;
	.left{
		flex: 1;
		position: relative;
	}
	.right{
		flex: 1;
		position: relative;
	}
}
</style>