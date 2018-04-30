<template>
   <tabbar>
      <tabbar-item selected  @on-item-click="sendParams('jobs')">
        <img slot="icon" src="../assets/jobs.png">
        <span slot="label">机会</span>
      </tabbar-item>
      <tabbar-item   @on-item-click="sendParams('my')">
        <img slot="icon" src="../assets/my.png">
        <span slot="label">我的</span>
      </tabbar-item>
    
    </tabbar>
    
</template>
<script>
import { Tabbar, TabbarItem } from "vux";
import { constants } from "http";

export default {
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    sendParams(type) {
      const _this = this;
      const weixinOpenId = this.$route.params.weixinOpenId;
      if ((type == "jobs")) {
        _this.$router.push({
          path: `/jobs/${weixinOpenId}`
        });
      } else {
        _this.$router.push({
          path: `/my/${weixinOpenId}`
        });
      }
    }
  }
};
</script>
<style >
.weui-tabbar .weui-bar__item_on {
  background: #e7f3f0;
}

.weui-tabbar {
  display: flex;
  position: fixed !important;
  z-index: 500;
  bottom: 0;
  width: 100%;
}
</style>

