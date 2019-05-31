<template>
  <div>
    <el-collapse accordion>
      <el-collapse-item title="基本情况" name="1" style="margin: 0 10px;">
        <el-form label-width="80px" :model="form">
          <el-form-item label="名称">
            <el-input v-model="form.name" placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.password" placeholder="请输入地址"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.password" placeholder="请输入电话" @blur="getphone(form.password)"></el-input>
          </el-form-item>
          <el-form-item label="传真">
            <el-input v-model="form.password" placeholder="请输入传真" @blur="getfax(form1.fax)"></el-input>
          </el-form-item>
        </el-form>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="资质情况" name="1" style="margin: 0 10px;">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="content"
            label="证件类型">
          </el-table-column>
          <el-table-column
            prop="num"
            label="证件编号">
          </el-table-column>
          <el-table-column
            prop="sendtime"
            label="有效期">
          </el-table-column>
          <el-table-column
            label="操作"
            align="right">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="view(scope.row, tableData)"
                type="text">
                {{scope.row.state}}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" style="width: 60%;margin: 20px 0" @click="view">上传资质</el-button>
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="历史数据分析" name="1" style="margin: 0 10px;">
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="历史数据查询" name="1" style="margin: 0 10px;">
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="凤祥公司联系人" name="1" style="margin: 0 10px;">
      </el-collapse-item>
    </el-collapse>
    <el-collapse accordion>
      <el-collapse-item title="公司业务员" name="1" style="margin: 0 10px;">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="content"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="num"
            label="账号">
          </el-table-column>
          <el-table-column
            label="负责物料">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="view(scope.row, tableData)"
                type="text">
                查看
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            align="right">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="view(scope.row, tableData)"
                type="text">
                {{scope.row.state}}
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" style="width: 60%;margin: 20px 0" @click="addper">添加业务员</el-button>
      </el-collapse-item>
    </el-collapse>
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
      getphone (phone) {
        if (!(/^1[34578]\d{9}$/.test(phone))) {
          this.$message({
            message: '手机号码有误，请重填',
            center: true,
            type: 'warning'
          });
          return false;
        }
      },
      getfax (fax) {
        if (!(/^(\d{3,4}-)?\d{7,8}$/.test(fax))) {
          this.$message({
            message: '传真输入有误，请重填',
            center: true,
            type: 'warning'
          });
          return false;
        }
      },
      view() {
        this.$router.push('/upload')
      },
      addper () {
        this.$router.push('/addperson')
      }
    }
  }
</script>
<style lang="less">
</style>
