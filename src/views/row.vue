<template>
  <div>
    <Row>
      <i-col>
      </i-col>
    </Row>
    <Row gutter="10">
      <i-col span="12"></i-col>
      <i-col span="12"></i-col>
    </Row>
    <Row gutter="10" class="blue">
      <!-- <i-col span="4" offset="12"></i-col>
      <i-col span="4" push="1"></i-col>
      <i-col span="4"></i-col> -->
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
      <i-col :md="6" :sm="12" :xs="24"></i-col>
    </Row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .ivu-col{
    height:50px;
    background: pink;
    background-clip: content-box;
    margin-top: 10px;
  }
  .blue{
    .ivu-col{
      background:blue;
      background-clip: content-box;
    }
  }
</style>
