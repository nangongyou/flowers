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
    			title:"缅怀日"
    		},
    		{
    			id:"002",
    			imgs:"/static/images/flower2.jpg",
    			title:"生日"
    		},
    		{
    			id:"003",
    			imgs:"/static/images/flower3.jpg",
    			title:"父亲节"
    		},
    		{
    			id:"004",
    			imgs:"/static/images/flower1.jpg",
    			title:"感恩节"
    		},
    		{
    			id:"005",
    			imgs:"/static/images/flower2.jpg",
    			title:"中秋节"
    		},
    		{
    			id:"006",
    			imgs:"/static/images/flower3.jpg",
    			title:"圣诞节"
    		},
    		{
    			id:"007",
    			imgs:"/static/images/flower1.jpg",
    			title:"光棍节"
    		},
    		{
    			id:"008",
    			imgs:"/static/images/flower2.jpg",
    			title:"妇女节"
    		},
    		{
    			id:"009",
    			imgs:"/static/images/flower3.jpg",
    			title:"教师节"
    		},
    		{
    			id:"010",
    			imgs:"/static/images/flower1.jpg",
    			title:"母亲节"
    		},
    		{
    			id:"011",
    			imgs:"/static/images/flower2.jpg",
    			title:"情人节"
    		},
    		{
    			id:"012",
    			imgs:"/static/images/flower3.jpg",
    			title:"七夕节"
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