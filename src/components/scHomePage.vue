<template>
    <div class="SC_scHomePage">
        <div class="schoolIndexTop">
        <div class="logo">
          <div class="logoImg"><img src="../../static/images/logo_03.png"></div>
          {{schoolName}}
        </div>

        <div class="schoolWeather">
          <dl>
            <dt>小雨</dt>
            <dd>22~28度</dd>
          </dl>
        </div>

        <div class="localDate">
          <div class="localDateLeft" id="showTime"></div>
          <dl><dt>{{schooldDate}}</dt><dd>{{schooldYears}}</dd></dl>
        </div>


         <div class="clear"></div>
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
        <div class="leaveMessageList">
            <div class="tabTop"><span>班级通知</span><span>班级留言</span><em>请过往的同学相互转告</em><a href="">更多</a></div>
            <div class="leaveMessageListBox">
                <ul>
                    <li><p><em>四年级一班</em>请班长下课来班主任办公室一趟</p><span>2018-09-13</span><span>2018-09-13</span></li>
                </ul>

                 <ul>
                    <li>
                        <h5><span>一年级</span></h5>
                        <P><em>张洋（一班）</em></P>
                    </li>
                </ul>
            </div>
        </div>
        <div class="enterBox">
            <a href="">进入班牌</a>
            <a href="">签到考勤</a>
            <a href="">个人中心</a>
        </div>

      </div>
    </div>


     <div class="SC_bottomEnter">
      <img src="../../static/images/appcenterImg_03.png">
    </div>

    </div>
</template>

<script>
export default {
name:"scHomePage",
data(){
    return{
        schoolName:'徐州市第三十一中学',
            schooldDate:'',
            schoolTime:'',
            schooldYears:''
    }
},mounted() {
    this.localTime();
    this.jishi();
},
methods:{
    localTime:function () {
            var myDate = new Date();
            var dateNumber = myDate.getDay();
            var riqi = myDate.getDate();
            var yufen = myDate.getMonth()+1;
            var nian = myDate.getFullYear();
            this.schooldYears = nian + "年" + yufen + "月" + riqi + "日";
            switch (dateNumber){
              case 1:
                this.schooldDate='星期一';
                break;
              case 2:
                this.schooldDate='星期二';
                break;
              case 3:
                this.schooldDate='星期三';
                break;
              case 4:
                this.schooldDate='星期四';
                break;
              case 5:
                this.schooldDate='星期五';
                break;
              case 6:
                this.schooldDate='星期六';
                break;
              case 7:
                this.schooldDate='星期日';
                break;
            }
          },
          jishi:function(time){
            var t = '';
            var t = setTimeout(time,1000);//開始运行
              function time()
              {
                clearTimeout(t);//清除定时器
                var dt = new Date();
                var h = dt.getHours();//获取时
                var m = dt.getMinutes();//获取分
                var s = dt.getSeconds();//获取秒
                m=checkTime(m);
                s=checkTime(s);
                document.getElementById("showTime").innerHTML =  h+":"+m+":"+s;
                t = setTimeout(time,1000); //设定定时器，循环运行
              }

              function checkTime(i)
              {
              if (i<10)
                {i="0" + i}
                return i
              }
          }
}
}
</script>

<style>

</style>
