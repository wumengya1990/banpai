<template>
    <div class="attendance">
     <top></top>

     <div class="SC_attendance">
         <h3><span>30</span><em>/</em>36</h3>
         <div class="SC_attendance1">
         <dl><dt>应到</dt><dd>36</dd></dl>
         <dl class="state1"><dt>实到</dt><dd>36</dd></dl>
         <dl class="state2"><dt>请假</dt><dd>36</dd></dl>
         <dl class="state3"><dt>未到</dt><dd>36</dd></dl>
         </div>
     </div>

     <div class="SC_signInMainLeft">
            <h3><span>当前签到情况</span></h3>
            <div class="SC_signInMainLeft_1">
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em class="have">已签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em class="have">已签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em class="have">已签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
                <dl><dt><img src="../../static/images/userImg_03.png"></dt><dd><span>张敏</span><em>未签到</em></dd></dl>
            </div>
        </div>

    <div class="SC_backBut"><input type="button" value="返回"></div>
    </div>
</template>

<script>
import top from'./top.vue'
export default {
name:'attendance',
components:{top}
}
</script>

<style>

</style>
