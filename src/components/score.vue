<template>
    <div class="SC_score mesBox">
        <h3><span>评价成绩</span></h3>
        <div class="topBox">
        <div class="topBoxTitle">
            <table class="SC_tableStyle" width="100%">
                <tr><th width="40%">分类</th><th width="15%">得分</th><th width="15%">评价人</th><th width="15%">评价时间</th><th width="15%">详情</th></tr>
            </table>
        </div>

        <div class="topBoxbody">
            <table class="SC_tableStyle" width="100%">
                <tr><th width="40%">分类</th><th width="15%">得分</th><th width="15%">评价人</th><th width="15%">评价时间</th><th width="15%">详情</th></tr>
                <tr><td><em class="biaoshi"></em>课堂表现评价</td><td>14.00</td><td>张洋</td><td>2018-09-21</td><td><a href="">查看详情</a></td></tr>
                <tr><td><em></em>课堂表现评价</td><td>14.00</td><td>张洋</td><td>2018-09-21</td><td><a href="">查看详情</a></td></tr>
                 <tr><td>课堂表现评价</td><td>14.00</td><td>张洋</td><td>2018-09-21</td><td><a href="">查看详情</a></td></tr>
                  <tr><td>课堂表现评价</td><td>14.00</td><td>张洋</td><td>2018-09-21</td><td><a href="">查看详情</a></td></tr>
            </table>
        </div>

        </div>

        <div class="bottomBox">
            <table class="SC_tableStyle" width="100%">
                <thead>
                  <tr><th>评价指标</th><th width="20%" >分数</th></tr>
                </thead>
                <tbody>
                  <tr><td>课堂表现：善于与人合作，虚心听取别人建议</td><td>5</td></tr>
                  <tr><td>课堂表现：善于与人合作，虚心听取别人建议</td><td>5</td></tr>
                  <tr><td>课堂表现：善于与人合作，虚心听取别人建议</td><td>5</td></tr>
                  <tr><td>课堂表现：善于与人合作，虚心听取别人建议</td><td>5</td></tr>
                  <tr><td>课堂表现：善于与人合作，虚心听取别人建议</td><td>5</td></tr>
                  <tr><td>课堂表现：善于与人合作，虚心听取别人建议</td><td>5</td></tr>
                
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
 import $ from 'jquery'
export default {
    name:'score',
      mounted(){
          this.tabchang();
      },
      methods:{
          tabchang:function () {
            $(".SC_tableStyle tr th:nth-child(1)").css({"text-align":"left","padding":"0 0 0 20px"});
            $(".SC_tableStyle tr td:nth-child(1)").css({"text-align":"left","padding":"0 0 0 20px"});
          }
      }
}
</script>

<style>

</style>
