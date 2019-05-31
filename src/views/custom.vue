<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="name"
        label="客户名称">
      </el-table-column>
      <el-table-column
        prop="marter"
        label="供应物料">
      </el-table-column>
      <el-table-column
        prop="supply"
        label="供货量">
      </el-table-column>
      <el-table-column
        prop="pin"
        label="频次">
      </el-table-column>
    </el-table>
    <el-button type="primary" style="width: 60%;margin-top: 30px" @click="showcustom = true">添加供货客户</el-button>
    <el-dialog
      title="添加新客户"
      :visible.sync="showcustom"
      width="90%"
      center>
      <el-form label-width="80px" :model="form1">
        <el-form-item label="客户名称">
          <el-input v-model="form1.name" placeholder="请输入客户名称"></el-input>
        </el-form-item>
        <el-form-item label="供应物料">
          <el-input v-model="form1.name" placeholder="请输入供应物料"></el-input>
        </el-form-item>
        <el-form-item label="供货量">
          <el-input v-model="form1.name" placeholder="请输入供货量" type="number"></el-input>
        </el-form-item>
        <el-form-item label="合作次数">
          <el-input v-model="form1.name" placeholder="请输入合作次数" type="number"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showcustom = false">取 消</el-button>
        <el-button type="primary" @click="showcustom = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showcustom: false,
      testval: '',
      form1: {
        name: ''
      },
      tableData: [{
        name: '王小虎',
        marter: '玉米',
        supply: '200',
        pin: '5'
      }, {
        name: '王小虎',
        marter: '玉米',
        supply: '300',
        pin: '5'
      }, {
        name: '王小虎',
        marter: '玉米',
        supply: '500',
        pin: '5'
      }, {
        name: '王小虎',
        marter: '玉米',
        supply: '260',
        pin: '5'
      }]
    }
  },
  methods: {
  }
}
</script>
<style lang="less">
</style>
