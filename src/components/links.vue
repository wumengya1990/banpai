<template>
    <div class="links">
      <router-link active-class="on" to="/top">顶部</router-link>
      <router-link active-class="on" to="/login">扫脸登录</router-link>
      <router-link active-class="on" to="/signIn">签到</router-link>
      <router-link active-class="on" to="/attendance">签到统计</router-link>
      <router-link active-class="on" to="/timetable">课表</router-link>
      <router-link active-class="on" to="/activity">班级活动</router-link>
      <router-link active-class="on" to="/classExamination">班级检查</router-link>
      <router-link active-class="on" to="/classSpace">班级空间</router-link>
      <router-link active-class="on" to="/dynamic">校园动态</router-link>
      <router-link active-class="on" to="/honor">荣耀</router-link>
      <router-link active-class="on" to="/appList">应用列表</router-link>
      <router-link active-class="on" to="/dynamicM">动态详情</router-link>
      <router-link active-class="on" to="/attendanceMine">我的考勤</router-link>
      <router-link active-class="on" to="/timeTableMine">我的课表</router-link>
      <router-link active-class="on" to="/achievement">学业成绩</router-link>
      <router-link active-class="on" to="/homePage">主页</router-link>
      <router-link active-class="on" to="/score">评价成绩</router-link>
      <router-link active-class="on" to="/homeWork">我的作业</router-link>
      <router-link active-class="on" to="/classDemeanor">班级风采</router-link>
      <router-link active-class="on" to="/classDemeanorCon">班级风采详情</router-link>
      <router-link active-class="on" to="/notifyList">通知列表</router-link>
    </div>
</template>

<script>
    export default {
        name: "links"
    }
</script>

<style scoped>
.links a{ display: inline-block; width:200px; height:60px; line-height: 60px; background: #FF7F00; color: #ffffff; font-size: 26px; text-align: center; margin: 0 0 10px 10px;}
</style>
