<template>
  <div class="login">
    <h3>用户登录</h3>
    <el-input v-model="name" placeholder="请输入账号" style="margin: 20px 0"></el-input>
    <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
    <div class="nextbtn">
      <span><a href="/register">注册</a></span>
      <span><a href="/modifypassword">找回/修改密码</a></span>
    </div>
    <el-button type="primary" style="width: 100%">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: ''
    }
  }
}
</script>
<style lang="less">
  .login {
    width: 80%;
    margin: 150px auto;
  }
  .nextbtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:active {
    color: blue;
    text-decoration:none;
  }
</style>
