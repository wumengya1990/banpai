<template>
    <div class="SC_homework mesBox">
      <h3><span>我的作业</span></h3>
      <div class="homeworkTop">
        <span>全部</span>
        <span>语文</span>
        <span>数学</span>
        <span>英语</span>
        <span>物理</span>
        <span>历史</span>
        <span>政治</span>
        <span>地理</span>
        <span>化学</span>
        <span>生物</span>

      </div>

        <div class="homeworkTable">
            <table class="SC_tableStyle1" width="100%">
                        <tr>
                                <td><dl><dt>语文作业</dt><dd>练习册上第201-202页，练习题全做，重新抄题。</dd></dl></td>
                                <td><dl><dt>发布人</dt><dd>语文老师</dd></dl></td>
                                <td><dl><dt>发布时间</dt><dd>2018-09-08</dd></dl></td>
                            </tr>
                            <tr>
                                <td><dl><dt>语文作业</dt><dd>练习册上第201-202页，练习题全做，重新抄题。</dd></dl></td>
                                <td><dl><dt>发布人</dt><dd>语文老师</dd></dl></td>
                                <td><dl><dt>发布时间</dt><dd>2018-09-08</dd></dl></td>
                            </tr>
                            <tr>
                                <td><dl><dt>语文作业</dt><dd>练习册上第201-202页，练习题全做，重新抄题。</dd></dl></td>
                                <td><dl><dt>发布人</dt><dd>语文老师</dd></dl></td>
                                <td><dl><dt>发布时间</dt><dd>2018-09-08</dd></dl></td>
                            </tr>
                            <tr>
                                <td><dl><dt>语文作业</dt><dd>练习册上第201-202页，练习题全做，重新抄题。</dd></dl></td>
                                <td><dl><dt>发布人</dt><dd>语文老师</dd></dl></td>
                                <td><dl><dt>发布时间</dt><dd>2018-09-08</dd></dl></td>
                            </tr>
                            
                    </table>
        </div>

    <div class="SC_backBut">
        <input class="bt1" type="button" value="返回">
    </div>


 </div>
</template>

<script>
import $ from 'jquery'
    export default {
        name: "homeWork",
        mounted(){
          this.tabchang();
        },
        methods:{
            tabchang:function () {
                $(".SC_tableStyle1 tr th:nth-child(1)").css({"text-align":"left","padding":"0 0 0 20px"});
                $(".SC_tableStyle1 tr td:nth-child(1)").css({"text-align":"left","padding":"0 0 0 20px"});
            }
        }

    }
</script>

<style scoped>

</style>
