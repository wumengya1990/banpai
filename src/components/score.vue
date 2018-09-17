<template>
    <div class="SC_score">
        <div class="topBox">
        <h3><span>分类</span><span>得分</span><span>评价人</span><span>评价时间</span><span>详情</span></h3>
        <ul>
            <li><p>课堂表现评价</p><span></span><a href="">点击查看详情</a></li>
        </ul>
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
