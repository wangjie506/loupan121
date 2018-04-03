<template>
	<div class="wrap" >
		<dt v-for="i in state">
			<dd><img :src="i.img" /></dd>
			<dl>
				<p>{{i.name}}</p>
				<p>{{i.site}}</p>
				<p>{{i.house}}</p>
				<p>{{i.price}}</p>
			</dl>
		</dt>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				state:[]
			}
		},
		watch:{
			'$route'(){
				 this.$http.post('http://localhost:1000',{status:this.$route.params.status},{emulateJSON:true}).then(e=>this.state=e.body)
			}
		},
		created(){
			this.$http.post('http://localhost:1000',{status:this.$route.params.status},{emulateJSON:true}).then(e=>this.state=e.body)
		}
	}
</script>
<style>
	
</style>