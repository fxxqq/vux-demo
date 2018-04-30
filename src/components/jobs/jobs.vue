<template>
  <div class="jobs-page">
    <header>兰州理工大学校园平台</header>
    <div class="swiper">
        <swiper :list="imgList" auto  height="150px" dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
    <panel class="jobs-list" :header="header"  :list="list"  :footer="footer" :type="type" @on-img-error="onImgError">
       <div>xx人</div>
    </panel>
    
  </div>
 
</template>

<script>
import { Swiper, Panel } from "vux";
import footerBar from "../footerBar";

const imgList = [
  {
    url: "javascript:",
    img:
      "https://www.lgstatic.com/i/image/M00/8D/7C/CgpEMlrgXbuAOU_6AAeBOQXjnu8797.JPG",
    title: "送你一朵fua"
  },
  {
    url: "javascript:",
    img:
      "https://www.lgstatic.com/i/image/M00/8D/7C/CgpEMlrgXbuAOU_6AAeBOQXjnu8797.JPG",
    title: "送你一辆车"
  },
  {
    url: "javascript:",
    img:
      "https://www.lgstatic.com/i/image/M00/8D/7C/CgpEMlrgXbuAOU_6AAeBOQXjnu8797.JPG", // 404
    title: "送你一次旅行",
    fallbackImg:
      "https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg"
  }
];
export default {
  components: {
    Swiper,
    Panel,
    footerBar
  },
  methods: {
    onImgError(item, $event) {
      console.log(item, $event);
    }
  },
  data() {
    return {
      imgList: imgList,
      type: "5",
      header: "热门职位",
      list: [
        {
          src:
            "https://www.lgstatic.com/i/image/M00/8D/7C/CgpEMlrgXbuAOU_6AAeBOQXjnu8797.JPG",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "职位一",
          desc:
            " <a'>地点：兰州 <a/> " +
            "<a style='margin:0 35px'>5人 <a/> " +
            " <a> 6￥/时 </a>",
          url: "/info/dd/333",
          meta: {
            source: "88年12月24日刷新",
            // date: "**起开始工作",
            other: "**起开始工作"
          }
        },
        {
          src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "职位二",
          desc:
            " <a'>地点：兰州 <a/> " +
            "<a style='margin:0 35px'>5人 <a/> " +
            " <a> 6￥/时 </a>",
          url: "/info/dd/333",
          meta: {
            source: "88年12月24日刷新",
            // date: "**起开始工作",
            other: "**起开始工作"
          }
        }
      ],
      footer: {
        title: "more",
        url: "http://vux.li"
      }
    };
  },
  mounted: function() {
    console.log(this.$route.params);
  }
};
</script>

<style lang='scss'>
@import url(jobs.scss);
</style>
