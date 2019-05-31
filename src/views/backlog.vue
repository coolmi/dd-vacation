<template>
  <div>
    <div class="title_btn">
      <div class="title_r">资质更新</div>
      <div class="title_r">合同确认</div>
      <div class="title_r">订单确认</div>
      <div class="title_r" @click="xunprice">询价需求</div>
      <div class="title_r">处罚申诉</div>
    </div>
    <div class="tip_title">您的营业执照即将到期，请及时进行更新，以免影响业务。</div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="num"
        label="序号">
      </el-table-column>
      <el-table-column
        prop="content"
        label="证件名称">
      </el-table-column>
      <el-table-column
        prop="sendtime"
        label="到期时间">
      </el-table-column>
      <el-table-column
        label="更新"
        align="center">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="view(scope.row, tableData)"
            type="text">
            {{scope.row.state}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" style="width: 60%;margin: 20px 0" @click="uploadzizhi">上传资质</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          num: '1111',
          content: '新的',
          sendtime: '2019-09-09',
          state: '更新'
        }, {
          num: '2222',
          sendtime: '2019-09-09',
          content: '旧的',
          state: '更新'
        }, {
          num: '3333',
          sendtime: '2019-09-09',
          content: '新的',
          state: '更新'
        }, {
          num: '4444',
          sendtime: '2019-09-09',
          content: '新的',
          state: '更新'
        }]
      }
    },
    methods: {
      uploadzizhi () {
        this.$router.push('/upload')
      },
      xunprice () {
        this.$router.push('/askdemand')
      }
    }
  }
</script>
<style lang="less">
  .title_btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 5px;
    margin-left: -5px;
  }
  .title_r {
    background-color: #CCCCFF;
    border-radius: 3px;
    padding: 2px;
    font-size: 15px;
  }
  .tip_title {
    background-color: #e5e5e5;
    border-radius: 3px;
    margin: 10px 0;
    font-size: 13px;
    padding: 5px;
  }
</style>
