<template>
    <div class="SC_classSpace">
      <top></top>
      <div class="SC_classSpaceM mesBox">
        <h3><span>班级空间</span></h3>
        <div class="SC_classSpaceContent">
<!-- 最外层循环 -->

            <div class="SC_LeaveMessageBox" v-for="(zhu , index) in spaceList">
              <div class="userHead">
                <div class="userImg"><img :src="zhu.userImg"></div>
                <h4>{{zhu.userName}}{{index}}</h4>
                <p>{{zhu.userSentTime}}</p>
                <div class="clear"></div>
              </div>

              <div class="useMessage">
                <div class="textBox"><p>{{zhu.userhdMessage}}</p></div>
                <div class="photoBox">
                  <ul>
                    <li v-for="zhuimg in zhu.userhdImgList">
                      <img :src="zhuimg">
                    </li>
                  </ul>
                  <div class="clear"></div>
                </div>
              </div>

              <div class="leaveBox">
                <div class="leaveBoxCon" v-for="(back , indexn) in zhu.backPeoList" v-show="indexn < listnumber[index]">
                  <div class="commenter">
                    <div class="touxiang"><img :src="back.backPeoImg"></div>
                    <div class="touxiangMes">
                    <h4>{{back.backPeoName}}{{index}}</h4>
                    <p>{{back.backPeoTime}}</p>
                    </div>
                  </div>
                  <div class="leaveMessage">
                    <p>{{back.backPeoMessage}}</p>
                  </div>
                  <div class="clear"></div>
                </div>

              
              <div class="moreMessage">
                <a @click="shouMore(index)" href="javascript:void(0);">{{txt}}</a>
              </div>

              </div>
            </div>
<!-- 最外层循环结束  -->



        </div>
      </div>
      <div class="SC_backBut"><input type="button" value="返回"></div>
    </div>
</template>

<script>
  import top from './top.vue'
    export default {
        name: "classSpace",
        components:{top},
        data(){
          return{
            // isShow: true,
            txt: '显示全部',
            num:2,
            listnumber:[],
            spaceList:[
              { 
                isShown: true,
                userImg:'../../static/images/userImg_03.png',
                userName:'张洋',
                userSentTime:'一周前',
                userhdMessage:'主活动内容主活动内容主活动内容主活动内容主活动内容主活动内容主活动内容主活动内容主活动内容',
                userhdImgList:['../../static/images/hdIMG.jpg','../../static/images/huandengImg_03.png','../../static/images/hdIMG.jpg'],
                backPeoList:[
                  {
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'王帅',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1'
                  },{
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'张飞',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2'
                  },{
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'张伟',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2'
                  },{
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'老王头',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2'
                  },{
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'王帅',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2'
                  }
                ]
              },
              { 
                isShown: true,
                userImg:'../../static/images/userImg_03.png',
                userName:'章程',
                userSentTime:'2周前',
                userhdMessage:'我是第二个我是第二个我是第二个我是第二个我是第二个我是第二个我是第二个我是第二个我是第二个我是第二个',
                userhdImgList:['../../static/images/hdIMG.jpg','../../static/images/hdIMG.jpg','../../static/images/hdIMG.jpg'],
                backPeoList:[
                  {
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'王帅',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1回复信息1'
                  },{
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'王帅',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2'
                  },{
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'王帅',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2'
                  },{
                    backPeoImg:'../../static/images/userImg_03.png',
                    backPeoName:'王帅',
                    backPeoTime:'19:09',
                    backPeoMessage:'回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2回复信息2'
                  }
                ]
              }
            ]
          }
        },
        methods:{
          shouMore:function(c){
          // var arr1 = [];
          // for( var i =0; i < this.spaceList.length; i++ ){
          //   this.listnumber[i] = 3
          // }
          // console.log('1', this.spaceList[c].isShown);
          this.spaceList[c].isShown = ! this.spaceList[c].isShown;
          // console.log('2', this.spaceList[c].isShown);
          this.num = this.spaceList[c].isShown? 3 : this.spaceList[c].backPeoList.length;
          this.txt = this.spaceList[c].isShown?  '显示全部':'收起';
          }
        },
        mounted() {
          for( var i =0; i < this.spaceList.length; i++ ){
            this.listnumber[i] = 2
          }
          console.log(this.listnumber);
        }
    }
</script>

<style scoped>

</style>
