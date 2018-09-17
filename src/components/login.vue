<template>
    <div class="SC_login">
        <top></top>
        <div class="SC_recognitionBox "></div>
        <div class="SC_Tips">
            <h3><span>识别窗口</span></h3>
            <p>请目视前方摄像头，确保人脸图像清晰。</p>
        </div>
        <div class="SC_result">
            <h3><span>识别结果</span></h3>
            <dl><dt>张洋</dt><dd>即将跳转个人中心</dd></dl>
        </div>
    </div>
</template>

<script>
import top from './top.vue'
export default {
    name:'login',
    components:{top},
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scope>

</style>
