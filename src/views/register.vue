<template>
  <div>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="true">供应商注册</el-radio-button>
      <el-radio-button label="false">个体户注册</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px;"></div>
    <el-form v-show="labelPosition === 'true'" label-width="80px" :model="form1">
      <el-form-item label="账号">
        <el-input v-model="form1.name" placeholder="请输入登录账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form1.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form1.morepassword" placeholder="再次确认密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="公司名称">
        <el-input v-model="form1.companyname" placeholder="请输入公司名称"></el-input>
      </el-form-item>
      <el-form-item label="公司地址">
        <el-input v-model="form1.companyaddress" placeholder="请输入公司地址"></el-input>
      </el-form-item>
      <el-form-item label="公司法人">
        <el-input v-model="form1.companyfa" placeholder="请输入公司法人"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form1.phone" placeholder="请输入联系电话" @blur="getphone(form1.phone)"></el-input>
      </el-form-item>
      <el-form-item label="传真">
        <el-input v-model="form1.fax" placeholder="请输入传真" @blur="getfax(form1.fax)"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="form1.contactper" placeholder="请输入常用联系人"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form1.email" placeholder="请输入邮箱" @blur="getemail(form1.email)"></el-input>
      </el-form-item>
      <el-form-item label="营业执照">
        <el-input v-model="form1.license" placeholder="请输入营业执照号"></el-input>
      </el-form-item>
      <el-form-item label="到期时间">
        <el-date-picker
          v-model="form2.email"
          type="date"
          style="width: 100%;"
          placeholder="请输入到期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="注册资金">
        <el-input v-model="form1.capital" placeholder="请输入注册资金" type="number"></el-input>
      </el-form-item>
      <el-form-item label="企业性质">
        <el-select v-model="form1.nature" placeholder="请选择企业性质" style="width: 100%">
        <el-option
          v-for="item in companylist"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </el-form-item>
      <el-button native-type="button" style="width: 100%" @click="saveupload">保存并前往上传资质</el-button>
    </el-form>
    <el-form v-show="labelPosition === 'false'" label-width="80px" :model="form2">
      <el-form-item label="账号">
        <el-input v-model="form2.name" placeholder="请输入登录账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form2.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form2.morepassword" placeholder="再次确认密码" show-password></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form2.companyname" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form2.companyaddress" placeholder="请输入身份证号" @blur="getID(form2.companyaddress)"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form2.phone" placeholder="请输入联系电话" @blur="getphone(form1.phone)"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form2.email" placeholder="请输入邮箱" @blur="getemail(form1.email)"></el-input>
      </el-form-item>
      <el-form-item label="靠挂公司">
        <el-select v-model="form2.nature" placeholder="请选择靠挂公司名称" style="width: 100%">
          <el-option
            v-for="item in companylist"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-button native-type="button" style="width: 100%">提交</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'true',
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
      ],
      form1: {
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
      },
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
    saveupload() {
      this.$router.push('/upload')
    },
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
    getemail (email) {
      if (!(/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(email))) {
        this.$message({
          message: '邮箱输入有误，请重填',
          center: true,
          type: 'warning'
        });
        return false;
      }
    },
    getID (userId) {
      if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(userId))) {
        this.$message({
          message: '身份证有误，请重填',
          center: true,
          type: 'warning'
        });
        return false;
      }
    }
  }
}
</script>
<style lang="less">
</style>
