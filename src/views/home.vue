<template>
  <div>
    <div class="title_card">
      <div class="title_tip">资质到期提醒</div>
      <div class="title_content">您的营业执照还有30天到期!</div>
      <div class="title_footer">>>>查看详情</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      longtimedemand () {
        this.$router.push('/longtimedemand')
      },
      askdemand () {
        this.$router.push('/askdemand')
      }
    }
  }
</script>
<style lang="less">
  .title_card {
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    margin-top: 20px;
  }
  .title_tip {
    text-align: left;
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
  }
  .title_content {
    text-indent: 20px;
    font-size: 15px;
  }
  .title_footer {
    text-align: right;
    font-size: 15px;
    margin-right: 10px;
    color: #999999;
  }
</style>
