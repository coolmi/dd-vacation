<template>
  <div>
    <!--<div class="upload_content">-->
      <!--<el-input v-model="name" style="width: 60%"></el-input>-->
      <!--<div class="nei" style="">-->
        <!--<i class="el-icon-upload" style="font-size: 25px"></i>-->
        <!--<span>上传文件</span>-->
      <!--</div>-->
    <!--</div>-->
    <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);padding: 10px;border-radius: 5px;">
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
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" style="margin-left: 20px;font-size: 12px;color: #999999">支持扩展名: .doc.docx.pdf.jpg...</div>
        </div>
      </el-upload>
      <el-input v-model="name" :disabled="true" placeholder="资质类型" style="width: 80%;margin: 5px 0"></el-input>
      <el-date-picker
        v-model="password"
        type="date"
        style="width: 80%;margin: 5px 0"
        placeholder="开始时间">
      </el-date-picker>
      <el-input v-model="name" placeholder="有效时间" type="number" style="width: 80%;margin: 5px 0"></el-input>
    </div>
    <el-button type="primary" style="width: 60%;margin: 20px 0" @click="showotherzz = true">上传其他资质</el-button>
    <el-button type="primary" style="width: 60%;margin: 20px 0" @click="uploadotherkh">合作的其他客户</el-button>
    <el-button type="primary" style="width: 60%;margin: 20px 0" @click="event">完成</el-button>
    <el-dialog
      title="选择资质类型"
      :visible.sync="showotherzz"
      width="80%"
      center>
      <el-select v-model="name" placeholder="请选择资质类型" style="width: 100%">
        <el-option
          v-for="item in companylist"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showotherzz = false">取 消</el-button>
        <el-button type="primary" @click="showotherzz = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      password: '',
      showotherzz: false,
      fileList: [],
      companylist: [
        {
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }
      ]
    }
  },
  methods: {
    uploadotherkh () {
      this.$router.push('/custom')
    },
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
    },
    event() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
  .upload_content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .nei {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 38px;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
  }
  .timemodel {
    display: flex;
  }
  .upload_file {
    display: flex;
    align-items: center;
  }
</style>
