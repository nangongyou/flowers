<template>
    <div class="flowers">
  		<router-link to="/goods" tag="div" v-for="(item,i) in Transit" :key="i">
  			<div class="imgs">
  				<img :src="item.imgs" alt="">
  				<p>{{item.title}}</p>
  				<div><span>&yen;{{item.price}}.00</span><div>已售{{item.sold}}件</div></div>
  			</div>		
  		</router-link>
  		<div v-for="j in abc"></div>
  	</div>
</template>

<script>
export default {
	props:["Transit"],
  data () {
    return {

    }
  },
  computed:{
		abc(){
			return 2-this.Transit.length%2
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
			width:48%;
			margin:3px 0;
		}
		.imgs{
			background-color:#fff;
			text-align:left;
			img{
				width:100%;
			}
			p{
				font-size: 14px;
				margin:10px 0;
			}
			div{
				span{
					color:red;
					font-size:16px;
				}
				div{
					float:right;
					color:#ccc;
				}
			}
		}
	}
</style>