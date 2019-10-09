<template>
    <div class="flowers">
  		<div v-for="i in a">
  			<div class="imgs">
  				<img :src="i.imgs" alt="">
  			</div>
  			<p>{{i.title}}</p>
  		</div>
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
	.flowers{
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