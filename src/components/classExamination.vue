<template>
    <div class="SC_classExamination">
      <top></top>
      <div class="SC_classExaminationM mesBox">
        <h3><span>班级检查</span></h3>
        <p class="history">（上周得分100分，年级第一名，流动红旗班级）</p>

        <div class="SC_rankingList">
          <h4><span>本周榜单</span><span>上周榜单</span></h4>
          <div class="rankingListM">
            <ul>
              <li><span>12分</span><p>三年级二班</p></li>
              <li><span>10分</span><p>三年级二班</p></li>
              <li><span>9分</span><p>三年级二班</p></li>
              <li><span>8分</span><p>三年级二班</p></li>
              <li><span>8分</span><p>三年级二班</p></li>
              <li><span>8分</span><p>三年级二班</p></li>
              <li><span>7分</span><p>三年级二班</p></li>
              <li><span>7分</span><p>三年级二班</p></li>
            </ul>

            <ul>
              <li><span>12分</span><p>三年级三班</p></li>
              <li><span>10分</span><p>三年级四班</p></li>
              <li><span>9分</span><p>三年级五班</p></li>
              <li><span>8分</span><p>三年级二班</p></li>
              <li><span>8分</span><p>三年级二班</p></li>
              <li><span>8分</span><p>三年级二班</p></li>
              <li><span>7分</span><p>三年级二班</p></li>
              <li><span>7分</span><p>三年级二班</p></li>
            </ul>
          </div>
        </div>

        <div class="SC_inspectTable">
          <table class="SC_tableStyle fixTop " width="100%">
            <thead>
            <tr><th>检查项</th><th width="20%">分值区间</th><th width="20%">得分</th></tr>
            </thead>
          </table>
          <div class="tableScroll">
          <table class="SC_tableStyle SC_tableStyle_borderLine" width="100%">
            <thead>
            <tr><th>检查项</th><th width="20%">分值区间</th><th width="20%">得分</th></tr>
            </thead>
            <tbody>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>眼保健操眼保健操眼保健操眼保健操</td><td>0~5</td><td>5</td></tr>
            <tr><td>总分</td><td></td><td>16</td></tr>
            </tbody>
          </table>
          </div>
          </div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  import top from './top.vue'
    export default {
        name: "classExamination",
         components:{top},
      data(){
          return{

          }
      },
      mounted(){
          this.tabchang();
      },
      methods:{
          tabchang:function () {
            $(".SC_tableStyle tr th:nth-child(1)").css({"text-align":"left","padding":"0 0 0 20px"});
            $(".SC_tableStyle tr td:nth-child(1)").css({"text-align":"left","padding":"0 0 0 20px"});
            $(".SC_rankingList h4").find("span").eq(0).addClass("on");
            $(".rankingListM ul").hide();
            $(".rankingListM").find("ul").eq(0).show();
            $(".SC_rankingList h4 span").click(function () {
              var thisINdex  = $(this).index();
              $(this).addClass("on").siblings().removeClass("on");
              $(".rankingListM").find("ul").hide().eq(thisINdex).show();
            })
          }
      }
    }
</script>

<style scoped>

</style>
