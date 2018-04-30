<template>
  <div class="jobs-page">
    <!-- <header>个人资料</header> -->
    <group>
      <group-title slot="title" placeholder="必填" >个人资料</group-title>
      <x-input title="姓名" placeholder="请填写姓名" v-model="personInfo.name"  ></x-input>
      <popup-picker title="性别" placeholder="请选择" :data="genderList" v-model="personInfo.gender" value-text-align="right"></popup-picker>
      <datetime title="出生日期" v-model="personInfo.birthday" value-text-align="right"></datetime>
      <popup-picker title="身高" placeholder="请选择" :data="heightList" v-model="personInfo.height" value-text-align="right"></popup-picker>
     
    </group>
    <group>
      <group-title slot="title" placeholder="必填" >教育经历</group-title>
      <x-input title="毕业/所在院校" placeholder="请填写学校" v-model="personInfo.school"  ></x-input>
      <x-input title="专业" placeholder="请填写专业" v-model="personInfo.major" ></x-input>
       <popup-picker title="毕业状态" placeholder="请选择" :data="stateList" v-model="personInfo.state" value-text-align="right"></popup-picker>
       <x-input title="手机号" placeholder="请填写手机号" v-model="personInfo.phone"  ></x-input>
      <x-input title="qq" placeholder="请填写qq" v-model="personInfo.qq"  ></x-input>
      <x-input title="微信" placeholder="请填写微信" v-model="personInfo.wechat"  ></x-input>
      <x-textarea title="个人描述" placeholder="请填写个人描述" :show-counter="false" :rows="3"></x-textarea>
    </group>
     <x-button  :text="submit001" :disabled="disable001" @click.native="submitMyInfo" type="primary"></x-button>
  </div>
 
</template>

<script>
import {
  GroupTitle,
  Group,
  Cell,
  XInput,
  Selector,
  PopupPicker,
  Datetime,
  XNumber,
  ChinaAddressData,
  XAddress,
  XTextarea,
  XSwitch,
  XButton
} from "vux";
import { constants } from 'http';

export default {
  components: {
    Group,
    GroupTitle,
    Cell,
    XInput,
    Selector,
    PopupPicker,
    XAddress,
    Datetime,
    XNumber,
    XTextarea,
    XSwitch,
    XButton
  },
  methods: {
    submitMyInfo() {
      this.submit001 = "提交中...";
      this.disable001 = true;
    },
  },
  mounted:function(){
      // this.getHeightList()
  },
  data() {
    return {
      personInfo: {
        name: "",
        birthday: "2017-06-01",
        gender: ["男"],
        height: ["170"],
        state: ["在读"],
        school: "dd大学",
        major: "cc专业",
        phone: "",
        qq: "",
        wechat: "",
        personalDescription: ""
      },
      heightList:[[150, 151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,181,182,183]],
      genderList: [["男", "女"]],
      stateList: [["在读", "已毕业"]],
      submit001: "提交",
      disable001: false
    };
  }
};
</script>

<style lang='scss'>
@import url(my.scss);
</style>
