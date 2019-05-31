<template>
  <div>
    <div class="title_top">添加业务员</div>
    <el-form label-width="80px" :model="form">
      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.password" placeholder="请输入手机"></el-input>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.password" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.password" placeholder="请输入确认密码" show-password></el-input>
      </el-form-item>
    </el-form>
    <div class="title_top">负责物料</div>
    <el-form label-width="80px" :model="form">
      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.password" placeholder="请输入手机"></el-input>
      </el-form-item>
      <el-form-item label="账号">
        <el-input v-model="form.password" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.password" placeholder="请输入确认密码" show-password></el-input>
      </el-form-item>
    </el-form>
    <div class="title_top">授权调整文件</div>
    <el-upload
      class="upload-demo"
      style="margin: 10px 0  10px 30px"
      action=""
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :auto-upload="false"
      :file-list="fileList">
      <div class="upload_file">
        <el-button size="small" type="primary" style="width: 100%">点击上传</el-button>
      </div>
    </el-upload>
    <el-button type="primary" style="width: 100%">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: ''
      },
    fileList: []
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
}
</script>
<style lang="less">
  .title_top {
    background-color: #66CCFF;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    margin: 5px 0;
  }
  .upload_file {
  }
</style>
