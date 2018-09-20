<template>
    <div class="SC_topBar">
        <div class="SC_class">{{banji}}</div>
        <div class="SC_classState">{{classState}}</div>
        <div class="SC_time">{{dqtime}}<span>{{schooldDate}}</span><span id="showTime"></span></div>

    </div>
</template>

<script>
export default {
    name:'top',
    data(){
        return{
            banji:'三年级二班(班主任张效诚)',
            classState:'上课中(语文 14:10~14:55 张敏)',
            dqtime:'',
            schooldDate:''
        }
    },
    mounted() {
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
            this.dqtime = nian + "年" + yufen + "月" + riqi + "日";
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

<style scoped>

</style>

