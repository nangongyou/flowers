<template>
    <div class="model">
  		<router-link to="/search" tag="div" v-for="(item,i) in a" :key="i">
  			<div class="imgs">
  				<img :src="item.imgs" alt="">
  			</div>
  			<p>{{item.title}}</p>
  		</router-link>
  		<div v-for="j in abc"></div>
  	</div>
</template>

<script>
export default {
	props:["a"],
  data () {
    return {

    }
  },
  computed:{
		abc(){
			return 3-this.a.length%3
		}
	}
}
</script>

<style scoped lang="less">
	.model{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		&>*{
			width:30%;
			margin:20px 0;
		}
		.imgs{
			img{
				width:100%;
			}
		}
	}
</style>