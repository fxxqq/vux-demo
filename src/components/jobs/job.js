
export default {
  components: {
    Swiper,
    Panel
  },
   methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data() {
    return {
      imgList:  [
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
      ],
      type: "1",
      list: [
        {
          src: "http://somedomain.somdomain/x.jpg",
          fallbackSrc: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "职位一",
          desc:
            "88年12月24日刷新",
          url: "/component/cell"
        },
        {
          src: "http://placeholder.qiniudn.com/60x60/3cc51f/ffffff",
          title: "职位二",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: {
            path: "/component/radio",
            replace: false
          },
          meta: {
            source: "来源信息",
            date: "时间",
            other: "其他信息"
          }
        }
      ],
      footer: {
        title: "more",
        url: "http://vux.li"
      }
    };
  }
};