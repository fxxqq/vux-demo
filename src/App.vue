<template>
  <div id="app">
    <router-view></router-view>
      <footerBar></footerBar>
  </div>
 
</template>

<script>
import footerBar from './components/footerBar'
export default {
  name: "App",
  components:{
    footerBar
  },
  mounted() {
    var maxDeviceWidth = 7.5;
    var windowWidth = window.innerWidth;
    var that = this;
    window.onload = function() {
      that.onload = false;
      that.calFontSize(maxDeviceWidth);
    };
  },
  methods: {
    //移动端设置100px为1rem
    calFontSize() {
      var maxDeviceWidth = 7.5;
      var bodyRemVal = 7.5;
      document.documentElement.style.fontSize =
        document.getElementById("app").offsetWidth / bodyRemVal + "px";
    }
  }
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
header{
    height: 45px;
    line-height: 45px;
    background-color: #00b38a;
    color: #fff;
    font-size: .36rem;
    text-align: center;
    position: relative;
}
 
</style>
