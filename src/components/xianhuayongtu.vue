<template>
  <div class="">
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
    			imgs:"/static/images/flower1.jpg",
    			title:"缅怀鲜花"
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower2.jpg",
    			title:"纪念日鲜花"
    		},
    		{
    			id:"003",
    			imgs:"/static/images/flower3.jpg",
    			title:"商务用花"
    		},
    		{
    			id:"004",
    			imgs:"/static/images/flower1.jpg",
    			title:"求婚鲜花"
    		},
    		{
    			id:"005",
    			imgs:"/static/images/flower2.jpg",
    			title:"探望慰问"
    		},
    		{
    			id:"006",
    			imgs:"/static/images/flower3.jpg",
    			title:"老师长辈"
    		},
    		{
    			id:"007",
    			imgs:"/static/images/flower1.jpg",
    			title:"友情鲜花"
    		},
    		{
    			id:"008",
    			imgs:"/static/images/flower2.jpg",
    			title:"生日鲜花"
    		},
    		{
    			id:"009",
    			imgs:"/static/images/flower3.jpg",
    			title:"爱情鲜花"
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