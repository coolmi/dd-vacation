<template>
  <div class="login">
    <el-button type="primary" style="width: 50%;padding: 20px;background-color: #66CCCC;color: #fff;font-size: 18px" @click="longtimedemand">长期需求</el-button>
    <el-button type="primary" style="width: 50%;padding: 20px;margin: 200px 0  0 -1px;background-color: #66CCCC;color: #fff;font-size: 18px" @click="askdemand">询价需求</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    longtimedemand () {
      this.$router.push('/longtimedemand')
    },
    askdemand () {
      this.$router.push('/askdemand')
    }
}
}
</script>
<style lang="less">
  .login {
    margin: 150px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
