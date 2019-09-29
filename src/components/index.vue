<template>
  <div class="index">
    <nav>
    	<ul>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="../../static/images/首页 (1).png" alt="">
	    			<br>
	    			首页
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="../../static/images/分类 (1).png" alt="">
	    			<br>
	    			分类
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="../../static/images/电话.png" alt="">
	    			<br>
	    			电话
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="../../static/images/购物车.png" alt="">
	    			<br>
	    			购物车
	    		</router-link>
    		</li>
    		<li>
    			<router-link to="/" tag="div">
	    			<img src="../../static/images/我的.png" alt="">
	    			<br>
	    			我的
	    		</router-link>
    		</li>
    	</ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
    	// img1:
    }
  }
}
</script>

<style scoped lang="less">
.index nav{
	width: 100%;
	position:fixed;
	bottom:0;
	ul{
		list-style:none;
		display:flex;
		li{
			flex-grow:1;
			img{
				width:20px;
			}
		}
	}
}

</style>