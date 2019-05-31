<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="num"
        label="发送人">
      </el-table-column>
      <el-table-column
        prop="sendtime"
        label="发送时间">
      </el-table-column>
      <el-table-column
        prop="endtime"
        label="截止时间">
      </el-table-column>
      <el-table-column
        prop="content"
        label="询价内容">
      </el-table-column>
      <el-table-column
        label="状态"
        align="center">
        <template slot-scope="scope">
          <el-button
            :disabled="scope.row.state === '已报价'"
            @click.native.prevent="view(scope.row, tableData)"
            type="text">
            {{scope.row.state}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" style="background-color: #66CCCC;color: #fff;margin-top: 20px" @click="event">返回</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        num: '1111',
        sendtime: '2019-09-09',
        endtime: '2019-09-09',
        content: '新的',
        state: '未报价'
      }, {
        num: '2222',
        sendtime: '2019-09-09',
        endtime: '2019-09-09',
        content: '旧的',
        state: '未报价'
      }, {
        num: '3333',
        sendtime: '2019-09-09',
        endtime: '2019-09-09',
        content: '新的',
        state: '已报价'
      }, {
        num: '4444',
        sendtime: '2019-09-09',
        endtime: '2019-09-09',
        content: '新的',
        state: '已报价'
      }]
    }
  },
  methods: {
    event () {
      this.$router.go(-1)
    },
    askdemand () {},
    view () {
      this.$router.push('/offer')
    }
  }
}
</script>
<style lang="less">
</style>
