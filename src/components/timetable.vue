<template>
    <div class="SC_timetable">
        <top></top>
        <div class="SC_timetableRihgt">
            <h4><span>调课通知</span></h4>
            <ul>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
                <li>由于数学老师生病请假，第二节课数学课改上语文课。</li>
            </ul>
        </div>
        <div class="SC_timetableLeft">
            <h3><span>今日课表</span></h3>
            <table class="SC_tableStyle" width="100%">
                <thead>
                  <tr><th>节次</th><th>星期一</th><th>星期二</th><th>星期三</th><th>星期四</th><th>星期五</th></tr>
                </thead>
                <tbody>
                  <tr><th>第一节</th><td>语文</td><td>语文</td><td>语文</td><td>语文</td><td>语文</td></tr>
                  <tr><th>第二节</th><td>语文</td><td>语文</td><td>语文</td><td>语文</td><td>语文</td></tr>
                  <tr><th>第三节</th><td>语文</td><td>语文</td><td>语文</td><td>语文</td><td>语文</td></tr>
                  <tr><th>第四节</th><td>语文</td><td>语文</td><td>语文</td><td>语文</td><td>语文</td></tr>
                  <tr><th>第五节</th><td>语文</td><td>语文</td><td>语文</td><td>语文</td><td>语文</td></tr>
                  <tr><th>第六节</th><td>语文</td><td>语文</td><td>语文</td><td>语文</td><td>语文</td></tr>
                  <tr><th>第七节</th><td>语文</td><td>语文</td><td>语文</td><td>语文</td><td>语文</td></tr>
                  <tr><th>第八节</th><td>语文</td><td>语文</td><td>语文</td><td>语文</td><td>语文</td></tr>
                </tbody>
            </table>
        </div>

        <div class="SC_backBut">
          <input class="bt1" type="button" value="返回">
          <input class="bt2" type="button" value="退出">
        </div>

    </div>

</template>

<script>

import top from './top.vue'
export default {
name:'timetable',
components:{top}
}
</script>

<style>

</style>
