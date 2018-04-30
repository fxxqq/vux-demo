<template>
  <div class="info-page">
    <header>职位详情</header>
   <div id="content">
        <div class="postitle">
            <h2 class="title">海外市场推广专员</h2>
        </div>
        <card :header="{title:'职位信息'}">
              <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="vux-1px-r">
                  薪资： <span>11元/小时</span>
                </div>
                <div class="vux-1px-r">
                  发布时间：<span>15</span>
                </div>
                <div class="vux-1px-r">
                  地点： <span>兰州</span>
                </div>
              </div>
              <div slot="content" class="card-demo-flex card-demo-content01">
                <div class="vux-1px-r">
                  招聘人数： <span>1130</span>
                </div>
                <div class="vux-1px-r">
                  性别要求：<span>15</span>
                </div>
                <div class="vux-1px-r">
                  人数： <span>8人</span>
                </div>
              </div>
              <div slot="content" class="card-demo-flex card-demo-content01">
                  <div class="vux-1px-r">
                    工作日期：<span>11￥/小时</span>
                  </div>
                  <div class="vux-1px-r">
                    上班时段：<span>15</span>
                  </div>
                  <div class="vux-1px-r"></div>
              </div>
        </card>
         <card :header="{title: '职位描述' }" >
             <p slot="content" class="card-padding">{{'作为刚从加拿大分公司派驻了半年时间，并将在几个月后再次踏上加拿大分市场的征程的海外市场推广专员来说，我们希望这样的工作伙伴:'}}</p>
             <p slot="content" class="card-padding">{{'作为刚从加拿大分公司派驻了半年时间，并将在几个月后再次踏上加拿大分市场的征程的海外市场推广专员来说，我们希望这样的工作伙伴:'}}</p>
              <p slot="content" class="card-padding">{{'作为刚从加拿大分公司派驻了半年时间，并将在几个月后再次踏上加拿大分市场的征程的海外市场推广专员来说，我们希望这样的工作伙伴:'}}</p>
               <p slot="content" class="identification">
                  （本职位由"学生营业厅"公众号发布，信息经过核实可信）
               </p>
       </card>
         <divider>我是有底线的</divider>
        
    </div>
</div>

 
</template>

<script>
import { Card ,Divider} from "vux";
export default {
  components: {
    Card,
    Divider
  },
   methods: {
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data() {
    return {
     
    };
  }
};
</script>

<style lang='scss'>
@import './info.scss';
// @import '~vux/src/styles/1px.scss';

</style>
