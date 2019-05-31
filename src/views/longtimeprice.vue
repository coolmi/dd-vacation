<template>
  <div>
    <div class="title_top">物料报价</div>
    <el-form label-width="100px" :model="form2">
      <el-form-item label="物料描述">
        <el-input v-model="form2.name" placeholder="请输入物料描述"></el-input>
      </el-form-item>
      <el-form-item label="采购单位">
        <el-input v-model="form2.password" placeholder="请输入采购单位"></el-input>
      </el-form-item>
      <el-form-item label="大概需求日期">
        <el-date-picker
          v-model="form2.email"
          type="date"
          style="width: 100%;"
          placeholder="请输入大概需求日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="其他要求">
        <el-input v-model="form2.companyname" placeholder="请输入其他要求" type="textarea" :rows="2"></el-input>
      </el-form-item>
      <el-form-item label="出厂价">
        <el-input v-model="form2.phone" placeholder="请输入出厂价"></el-input>
      </el-form-item>
      <el-form-item label="到厂价">
        <el-input v-model="form2.email" placeholder="请输入到厂价"></el-input>
      </el-form-item>
      <el-form-item label="供货期">
        <el-date-picker
          v-model="form2.email"
          type="date"
          style="width: 100%;"
          placeholder="请输入供货期">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div class="title_top" style="margin-top: -15px">其他合作客户</div>
    <el-form label-width="100px" :model="form2">
      <el-form-item label="合作客户名称">
        <el-input v-model="form2.name"></el-input>
      </el-form-item>
      <el-form-item label="年供应量">
        <el-input v-model="form2.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" style="width: 80%;margin-top: 20px" @click="event">提交</el-button>
    <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);margin-top: 10px;padding: 10px;border-radius: 5px;">
      <div style="text-align: left;margin-left: 5px">注意事项:</div>
      <div style="text-indent:20px">本次报价为一次报价，请分别报出价格均为含税单价，请分别报出厂家和运费价格。</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form2: {
          name: '',
          password: '',
          morepassword: '',
          companyname: '',
          companyaddress: '',
          companyfa: '',
          phone: '',
          fax: '',
          contactper: '',
          email: '',
          license: '',
          endtime: '',
          capital: '',
          nature: ''
        }
      }
    },
    methods: {
      event () {
        this.$router.go(-1)
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
</style>
