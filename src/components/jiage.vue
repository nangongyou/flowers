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
    			title:"800元以上"
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower2.jpg",
    			title:"500-800元"
    		},
    		{
    			id:"003",
    			imgs:"/static/images/flower3.jpg",
    			title:"300-500元"
    		},
    		{
    			id:"004",
    			imgs:"/static/images/flower1.jpg",
    			title:"200-300元"
    		},
    		{
    			id:"005",
    			imgs:"/static/images/flower2.jpg",
    			title:"100-200元"
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