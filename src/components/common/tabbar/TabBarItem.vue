<!--  -->
<template>
<div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
       // isActive:true
    }
  },
  props:{
      path:String,
      activeColor:{
          type:String,
          default:"red"
      }
  },
  computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
          return this.isActive?{color:this.activeColor}:{}
      } 
      },
  methods:{
      btnClick(){
          this.$router.push(this.path)
      }
  }
}
</script>

<style  scoped>
.tab-bar-item{
  flex: 1;
  height: 49px;
  font-size: 12px;
  margin-top: 5px;
}
.tab-bar-item img{
    height: 20px;
}
/* .active{
    color:red;
} */
</style>
