<template>
  <div>
    <div class="top_card">
      <div class="content_col">
        <div class="li_item">
          <span>询价单号:</span>
          <span class="col_val">f34343</span>
        </div>
        <div class="li_item">
          <span>需求公司名称:</span>
          <span class="col_val">济南大多数</span>
        </div>
        <div class="li_item">
          <span>联系电话:</span>
          <span class="col_val">12323</span>
        </div>
      </div>
      <div class="content_col">
        <div class="li_item">
          <span>需求汇总号:</span>
          <span class="col_val">43434rwe</span>
        </div>
        <div class="li_item">
          <span>联系人:</span>
          <span class="col_val">打的</span>
        </div>
        <div class="li_item">
          <span>传真:</span>
          <span class="col_val">3453</span>
        </div>
      </div>
    </div>
    <el-form label-width="90px" :model="form2">
      <el-form-item label="物料描述">
        <el-input v-model="form2.name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="采购单位">
        <el-input v-model="form2.password" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="需求数量">
        <el-input v-model="form2.morepassword" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="要求交货日">
        <el-input v-model="form2.companyname" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="供货量">
        <el-input v-model="form2.companyaddress" placeholder="请输入供货量"></el-input>
      </el-form-item>
      <el-form-item label="出厂价">
        <el-input v-model="form2.phone" placeholder="请输入出厂价"></el-input>
      </el-form-item>
      <el-form-item label="到厂价">
        <el-input v-model="form2.email" placeholder="请输入到厂价"></el-input>
      </el-form-item>
      <el-form-item label="最快交货日">
        <el-date-picker
          v-model="form2.email"
          type="date"
          style="width: 100%;"
          placeholder="请输入最快交货日">
        </el-date-picker>
      </el-form-item>
      <el-button native-type="button" style="width: 100%" @click="event">报价</el-button>
    </el-form>
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
  .top_card {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  .content_col {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    font-size: 14px;
  }
  .li_item {
    margin: 3px 0;
  }
  .col_val {
    font-size: 11px;
    color: #666666;
  }
</style>
