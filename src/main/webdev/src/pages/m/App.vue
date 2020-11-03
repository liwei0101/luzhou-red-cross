<template>
  <div id="app">
		<keep-alive v-if="$route.meta && $route.meta.keepAlive">
			<router-view></router-view>
		</keep-alive>
		<router-view v-else></router-view>
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>
<style>
	#app{
		height: 100%;
		width: 100%;
		background:#F8F8FB; 
		font-family:PingFangSC-Regular;
		font-size:16px;
		-webkit-overflow-scrolling: touch;
	}
</style>