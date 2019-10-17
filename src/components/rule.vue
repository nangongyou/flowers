<template>
  <div class="rule">
    <headers :titles="title"></headers>
    <section>
    	<img src="/static/images/jifengz.jpg" alt="">
    </section>
  </div>
</template>

<script>
import headers from '@/components/headers'
export default {
  data () {
    return {
    	title:"积分规则"
    }
  },
  components:{
  	headers
  }
}
</script>

<style scoped lang="less">
	.rule{
		section{
			img{
				width:100%;
			}
		}
	}
</style>