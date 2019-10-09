<template>
  <div>
    <flowers :a="flower"></flowers>
  </div>
</template>

<script>
import flowers from "@/components/model"
export default {
  data () {
    return {
    	flower:[
    		{
    			id:"001",
    			imgs:"/static/images/seven.png",
    			title:"七彩色"
    		},
    		{
    			id:"002",
    			imgs:"/static/images/orange.png",
    			title:"橙色"
    		},
    		{
    			id:"003",
    			imgs:"/static/images/green.png",
    			title:"绿色"
    		},
    		{
    			id:"004",
    			imgs:"/static/images/parpur.png",
    			title:"紫红色"
    		},
    		{
    			id:"005",
    			imgs:"/static/images/jured.png",
    			title:"橘红色"
    		},
    		{
    			id:"006",
    			imgs:"/static/images/xiangbin.png",
    			title:"香槟色"
    		},
    		{
    			id:"007",
    			imgs:"/static/images/blue.png",
    			title:"蓝色"
    		},
    		{
    			id:"008",
    			imgs:"/static/images/white.png",
    			title:"白色"
    		},
    		{
    			id:"009",
    			imgs:"/static/images/yellow.png",
    			title:"黄色"
    		},
    		{
    			id:"010",
    			imgs:"/static/images/zise.png",
    			title:"紫色"
    		},
    		{
    			id:"011",
    			imgs:"/static/images/fense.png",
    			title:"粉色"
    		},
    		{
    			id:"012",
    			imgs:"/static/images/red.png",
    			title:"红色"
    		}

    	]
    }
  },
  components:{
  	flowers
  }
}
</script>

<style scoped>

</style>