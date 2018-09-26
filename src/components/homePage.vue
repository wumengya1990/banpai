<template>
  <div class="SC_homePage">

    <div class="SC_noticeBar">
         <!-- <marquee direction="left" class="scrollBar">
            <p>小名同学，你有一条最新的留言信息，请注意查收1</p>
            <p>小名同学，你有一条最新的留言信息，请注意查收2</p>
            <p>小名同学，你有一条最新的留言信息，请注意查收3</p>
            <p>小名同学，你有一条最新的留言信息，请注意查收4</p>
            <p>小名同学，你有一条最新的留言信息，请注意查收5</p>
            </marquee> -->

            <div class="LRScroll" id="LRScroll">
              <ul class="LRScrollbox1" id="LRScrollbox1">
                <li><p>小名同学，你有一条最新的留言信息，请注意查收1</p></li>
                <li><p>小名同学，你有一条最新的留言信息，请注意查收2</p></li>
                <li><p>小名同学，你有一条最新的留言信息，请注意查收3</p></li>
                <li><p>小名同学，你有一条最新的留言信息，请注意查收4</p></li>
                <li><p>小名同学，你有一条最新的留言信息，请注意查收5</p></li>
              </ul>
              <ul class="LRScrollbox2" id="LRScrollbox2"></ul>
            </div>
            
    </div>

    <div class="SC_topMessage">
      <dl class="classSurvey">
        <dt>
          <div class="userImg"><img src="../../static/images/uerImg_07.png"></div> <h4>三年级一班</h4>
          <div class="clear"></div>
        </dt>
        <dd><span>班主任：张明</span><span>别名：晨曦班</span></dd>
      </dl>

      <div class="weather">
        <dl><dt>多云</dt><dd>22°~28°</dd></dl>
        <div class="weatherImg"></div>
      </div>

      <div class="classTime">
        <div class="classState">
          <!-- <p>上课中</p>
          <h4>语文</h4>
          <p>（10:00~10:45）</p> -->
          <h1>休息中</h1>
        </div>
        <dl><dt>10:16</dt><dd><span>2018年07月12日</span><span>星期四</span></dd></dl>
      </div>
    </div>

    <div class="SC_noticeList">
      <h3><span>通知公告<em class="entry">（12<i>/</i>13）</em></span><router-link class="more" to="/notifyList">更多</router-link></h3>
      <div id="scrollBox" style="height:60px; overflow:hidden;">
      <ul id="schoollist1">
        <li><span>校园通知：</span>111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</li>
         <li><span>校园通知：</span>2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222</li>
          <li><span>校园通知：</span>3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333</li>
      </ul>
      <ul id="schoollist2"></ul>
      </div>
    </div>

    <div class="SC_indexMessage">
      <div class="leftHD">
          <ul>
            <li><a title="标题1标题1标题1标题1标题1标题1标题1标题1标题1" href=""><img src="../../static/images/huandengImg_03.png"></a></li>
            <li><a title="标题2标题2标题2标题2标题2标题2标题2标题2标题2" href=""><img src="../../static/images/huandengImg_03.png"></a></li>
            <li><a title="标题3标题3标题3标题3标题3标题3标题3标题3标题3" href=""><img src="../../static/images/huandengImg_03.png"></a></li>
            <li><a title="标题4标题4标题4标题4标题4标题4标题4标题4标题4" href=""><img src="../../static/images/huandengImg_03.png"></a></li>
          </ul>
        <div class="imgtitle">内容信息内容信息内容信息内容信息内容信息内容信息内容信息内容信息内容信息</div>
      </div>

      <div class="rightStatistics">
        <div class="topBox">
          <h3><span>班级检查</span></h3>
            <div>
            <dl><dt><span>今日得分：</span>12分</dt><dd><span>今日排名：</span>第一名</dd></dl>
            <dl><dt><span>今日得分：</span>12分</dt><dd><span>今日排名：</span>第一名</dd></dl>
            <div class="clear"></div>
            </div>
          </div>
        <div class="leftRankings">
          <h4><span>小组排行</span></h4>
          <ul>
            <li><span>12分</span><p>苹果组</p></li>
            <li><span>12分</span><p>香蕉组</p></li>
            <li><span>12分</span><p>柠檬组</p></li>
            <li><span>12分</span><p>草莓组</p></li>
            </ul>
        </div>
        <div class="rightTool">
          <dl><dt><span>今日值日生</span></dt><dd><span>张扬</span><span>张扬</span><span>张扬</span></dd></dl>
          <div><h4>签到考勤</h4><p>30/36</p></div>
          <a class="selfEnter" href="">个人中心</a>
          
        </div>
      </div>


    </div>


    <div class="SC_bottomEnter">
      <img src="../../static/images/appcenterImg_03.png">
    </div>

  </div>
</template>

<script>
import $ from "jquery"
    export default {
        name: "homePage",
        mounted(){
          this.gundong;
          this.gundong1;
          this.huadong;
          
        },computed:{
           huadong:function () {
            function scroll(){
              $(".leftHD ul").animate({
                "margin-left":"-862px"
              },function () {
                $(".leftHD li:eq(0)").appendTo($(".gundong ul"));
                $(".leftHD ul").css({"margin-left":0});

              })
            }
            setInterval(scroll,5000);
            },
          gundong:function(){
            let speed = 120 ;
            let hdemo=document.getElementById("scrollBox"); 
            let hdemo1=document.getElementById("schoollist1"); 
            let hdemo2=document.getElementById("schoollist2"); 
            hdemo2.innerHTML=hdemo1.innerHTML;
            function Marquee(){ 
              if(hdemo.scrollTop>=hdemo1.offsetHeight){
              hdemo.scrollTop=0; 
              }
              else{ 
                hdemo.scrollTop=hdemo.scrollTop+1;
              } 
            } 
            var MyMar=setInterval(Marquee,speed) 
              hdemo.onmouseenter=function(){clearInterval(MyMar)} 
              hdemo.onmouseleave=function(){MyMar=setInterval(Marquee,speed)} 
          },
          gundong1:function(){
             let speed = 10 ;
             let demo=document.getElementById("LRScroll"); 
             let demo1=document.getElementById("LRScrollbox1"); 
             let demo2=document.getElementById("LRScrollbox2"); 
              demo2.innerHTML=demo1.innerHTML;
              function Marquee(){ 
              if(demo.scrollLeft>=demo1.offsetWidth){
                 demo.scrollLeft=0; 
              }
              else{ 
                demo.scrollLeft=demo.scrollLeft+1;
              } 
            } 
            var MyMar=setInterval(Marquee,speed) 
              demo.onmouseenter=function(){clearInterval(MyMar)} 
              demo.onmouseleave=function(){MyMar=setInterval(Marquee,speed)} 
              
          }
          

        }
    }
</script>

<style scoped>

</style>
