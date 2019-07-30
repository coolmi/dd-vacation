<template>
  <div style="height: 100%;">
  </div>
</template>

<script>
  // import api from '../api/api'
  import whole from '../lib/whole'
  export default {
    data () {
      return {
      }
    },
    created () {
    },
    methods: {
      // 报表管理
      toReport () {
        this.$router.push({ path: '/reportList' })
      },
      // 环控数据
      hkInfoShow () {
        this.$router.push({ path: '/environmentalData' })
      },
      // 环控对比
      toCons () {
        this.$router.push({ path: '/environContrast' })
      },
      // 环控配置跳转
      checkHk() {
        this.$router.push({ path: '/table' })
      },
      // 警告信息
      hkWarnShow () {
        this.$router.push({ path: '/warning' })
      },
      // 生产录入
      fhhkWarnShow () {
        this.$router.push({ path: '/productionEntry' })
      },
      // 天气列表
      toWeather () {
        this.$router.push({ path: '/weather' })
      },
      showError() {
        whole.showTop('当前功能暂未开通,敬请期待')
      },
      // 孵化环控信息
      toFhhk () {
        this.$router.push({ path: '/hatch/encontrolchioce' })
      },
      // 孵化报表管理
      toFhReport () {
        // alert(1)
        this.$router.push({ path: '/reportForms/fhselect1' })
      },
      // 种禽生产指标查看
      toProduction () {
        this.$router.push({ path: '/production/production' })
        // window.location.href = encodeURI(baseConfig.baseURL + '/production/production?dd_orientation=landscape&dd_full_screen=true')
      },
      // 种禽产量预算
      toBudget () {
        this.$router.push({ path: '/budget/budget' })
      },
      // 孵化生产指标
      toFhProduction () {
        this.$router.push({ path: '/fhproduction/fhproduction' })
      }
    }
  }
</script>

<style scoped lang="less">
</style>
