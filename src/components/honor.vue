<template>
  <div class="honor">
    <top></top>
    <div class="SC_honor mesBox">
      <h3><span>班级荣誉墙</span></h3>
      <div class="rightHonorList">
        <h4>荣誉榜</h4>
        <ul>
          <li><span>X12</span><p>张敏</p></li>
          <li><span>X12</span><p>张敏</p></li>
          <li><span>X12</span><p>张敏</p></li>
          <li><span>X12</span><p>张敏</p></li>
          <li><span>X12</span><p>张敏</p></li>
          <li><span>X12</span><p>张敏</p></li>
		  
        </ul>
      </div>

      <div class="LeftHonorBox">
        <div class="choTab"><span>全部</span><span>国家级</span><span>省级</span><span>市级</span><span>区级</span><span>校级</span></div>
        <div class="choResultBox">
          <dl>
            <dt><img src="../../static/images/honorImg.jpg"></dt>
            <dd>
              <div class="userImg"><img src="../../static/images/userImg_03.png"></div>
              <h4>张洋</h4>
              <p>校一等奖</p>
            </dd>
          </dl>

          <dl>
            <dt><img src="../../static/images/honorImg.jpg"></dt>
            <dd>
              <div class="userImg"><img src="../../static/images/userImg_03.png"></div>
              <h4>张洋</h4>
              <p>校一等奖</p>
            </dd>
          </dl>

          <dl>
            <dt><img src="../../static/images/honorImg.jpg"></dt>
            <dd>
              <div class="userImg"><img src="../../static/images/userImg_03.png"></div>
              <h4>张洋</h4>
              <p>校一等奖</p>
            </dd>
          </dl>

          <dl>
            <dt><img src="../../static/images/honorImg.jpg"></dt>
            <dd>
              <div class="userImg"><img src="../../static/images/userImg_03.png"></div>
              <h4>张洋</h4>
              <p>校一等奖</p>
            </dd>
          </dl>

          <dl>
            <dt><img src="../../static/images/honorImg.jpg"></dt>
            <dd>
              <div class="userImg"><img src="../../static/images/userImg_03.png"></div>
              <h4>张洋</h4>
              <p>校一等奖</p>
            </dd>
          </dl>



        </div>
      </div>

    </div>

    <div class="SC_backBut">
      <input class="bt1" type="button" value="返回">
    </div>

  </div>
</template>

<script>
  import $ from "jquery"
  import top from './top.vue'
    export default {
        name: "honor",
      components:{top},
      data(){
        return{

        }
      },
      mounted(){
        this.setTOP()
      },
      methods:{
        setTOP:function () {
          $(".choTab").find("span").eq(0).addClass("on");

          $(".choTab span").click(function () {
            $(this).addClass("on").siblings().removeClass("on");
          })
        }
      }
    }
</script>

<style scoped>

</style>
