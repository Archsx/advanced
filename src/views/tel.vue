<template>
  <div class="tel">
   <p> {{message}} </p>
  </div>
</template>

<script>
export default {
  mounted() {
   this.$bus.$on('on-click',mes => {
     this.message = mes
   }) 
  },
  data(){
    return {
      message:''
    }
  }
}
</script>

<style>
  .tel{
    border: 1px solid red
  }
</style>
