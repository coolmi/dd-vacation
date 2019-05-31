<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="num"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="marter"
        label="物料描述">
      </el-table-column>
      <el-table-column
        label="操作"
      align="center">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="view(scope.$index, tableData)"
            type="text">
            查看
          </el-button>
          <el-button
            @click="showPrice = true"
            type="text">
            报价
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="提示"
      :visible.sync="showPrice"
      width="80%"
      center>
      <span style="margin-left: 50px">需要上传产品生产许可证,请上传!</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showPrice = false">取消</el-button>
        <el-button type="primary" @click="baoprice">上传</el-button>
      </span>
    </el-dialog>
    <el-button type="primary" style="margin-top: 20px;width: 80%" @click="returnpage">返回</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPrice: false,
      tableData: [{
        num: '1',
        marter: '玉米'
      }, {
        num: '2',
        marter: '小米'
      }, {
        num: '3',
        marter: '大米'
      }, {
        num: '4',
        marter: '小麦'
      }]
    }
  },
  methods: {
    view () {
      this.$message({
        message: '玉米长势喜人',
        center: true,
        type: 'info'
      })
    },
    baoprice () {
      this.showPrice = false
      this.$router.push('/upload')
    },
    returnpage () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
</style>
