<template>
  <div class="email">
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  mounted() {
   console.log(this.$bus) 
  },
  methods:{
    handleClick(){
      this.$bus.$emit('on-click','hello')//需要注意的是$emit和$on都是针对当前实例，所以这里是this.$bus.$emit而非this.$emit
    }
  }
}
</script>

<style>
  .email{
    border: 1px solid green
  }
</style>
