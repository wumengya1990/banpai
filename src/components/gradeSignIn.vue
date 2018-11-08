<template>
    <div class="SC_gradeSignIn mesBox">
        <h3><span>年级签到</span></h3>
        <!-- 年鸡牌右侧扫描结果列表 -->
         <div class="rightScanningResult">
            <h4><span>识别结果</span></h4>
            <ul>
                <li class="success"><span>四年级一班</span><span>张洋</span><span>签到识别成功</span></li>
                <li class="success"><span>四年级一班</span><span>张洋</span><span>签到识别成功</span></li>
                <li class="success"><span>四年级一班</span><span>张洋</span><span>签到识别成功</span></li>
                <li class="success"><span>四年级一班</span><span>张洋</span><span>签到识别成功</span></li>
                <li class="fail">识别失败，请重试或联系班主任处理</li>
                <li class="fail">识别失败，请重试或联系班主任处理</li>
            </ul>
        </div>
        <!-- 左侧脸部扫描 -->
        <div class="leftScanning">
            <div class="ScanningImg"></div>
            <div class="ScanningImgNotice"><span>识别窗口</span>请目视前方摄像头，保持人脸处于中部</div>
        </div>
       
    </div>
</template>

<script>
export default {
name:'gradeSignIn'
}
</script>

<style>

</style>
