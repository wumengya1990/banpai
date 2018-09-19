<template>
    <div class="SC_classDemeanorCon mesBox">
        <top></top>
        <h3><span>班级风采</span></h3>
        <div class="leftDescribe">
            <h4>班级海报大赛</h4>
            <div class="leftDescribeText">
                <P>班级活动是班级群体为了满足彼此的需要，有目的地作用于客观事物，而实现的相互配合的动作系统其基本特点是第一，班级活动是一种交往活动；第二班级活动，目的的致性，产生了共同遵循的行为准则与规范第三，班级活动的时空具有一致性；第四，班级在活动中分工合作，互相配合，责任依从；第五，班级活动导致一系列诸如暗示、模仿、感染、舆论心理相容等社会心理现象的出现，产生良好和健康的人际关系关系。
      </P>
      <p>班级活动是班级群体为了满足彼此的需要，有目的地作用于客观事物而实现的相互配合的动作系统其基本特点是第一，班级活动是一种交往活动...</p>
            </div>
        </div>

        <ul class="imgList" id="imgList">
           <li><img src="../../static/images/huandengImg_03.png"></li>
        </ul>

    
        <div class="SC_backBut"><input type="button" value="返回"></div>
    </div>
</template>

<script>
import top from "./top.vue"
import $ from "jquery"
export default {
name:'classDemeanorCon',
components:{top},
mounted() {
  this.imgListSet();
},
methods:{
    imgListSet(){
        var imgchangdu = $(".imgList li").length;  //获取右侧图片数量
        switch(imgchangdu){
            case 1:
            $(".imgList").css({"position":"relative"})
            $(".imgList li").css({"position":"absolute","left":"0","top":"0","right":"0","bottom":"0","margin":"auto","width":"811px","height":"577px"})
            break;
            case 2:
            $(".imgList li").css({"width":"570px","height":"406px","margin":"170px 0 0 40px"})
            break;
            case 3:
            $(".imgList li").css({"width":"396px","margin":"80px 20px 0 0"})
            break;
        }
    }
}
}
</script>

<style>

</style>
