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
    			title:"绿色植物"
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower2.jpg",
    			title:"盆栽花卉"
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