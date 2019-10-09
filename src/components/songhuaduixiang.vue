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
    			title:"病人"
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower2.jpg",
    			title:"长辈"
    		},
    		{
    			id:"003",
    			imgs:"/static/images/flower3.jpg",
    			title:"客户"
    		},
    		{
    			id:"004",
    			imgs:"/static/images/flower1.jpg",
    			title:"老师"
    		},
    		{
    			id:"005",
    			imgs:"/static/images/flower2.jpg",
    			title:"领导"
    		},
    		{
    			id:"006",
    			imgs:"/static/images/flower3.jpg",
    			title:"父母"
    		},
    		{
    			id:"007",
    			imgs:"/static/images/flower1.jpg",
    			title:"朋友"
    		},
    		{
    			id:"008",
    			imgs:"/static/images/flower2.jpg",
    			title:"恋人"
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