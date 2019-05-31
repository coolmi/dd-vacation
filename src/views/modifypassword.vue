<template>
  <div class="change">
    <el-form label-width="80px" :model="form">
      <el-form-item label="账号">
        <el-input v-model="form.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="原密码">
        <el-input v-model="form.password" placeholder="请输入原密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="form.password" placeholder="请输入新密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.password" placeholder="请再次输入新密码" show-password></el-input>
      </el-form-item>
      <el-button type="primary" style="width: 100%;margin-top: 20px" @click="okchange">确认修改</el-button>
    </el-form>
  </div>
</template>
<script>
  export default {
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    okchange() {
      this.$message({
        message: '密码修改成功,请重新登录',
        center: true,
        type: 'success'
      });
      this.$router.push('/')
    }
  }
}
</script>
<style lang="less">
  .change {
    margin: 150px auto;
    width: 80%;
  }
</style>
