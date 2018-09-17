<template>
    <div class="dynamicM">
      <div class="SC_dynamicM mesBox">
        <top></top>
        <h3><span>校园动态</span></h3>
        <div class="leftImgList">
          <div class="imgList">
            <div class="imgBox"><img src="../../static/images/lunboImg_03.png"></div>
            <div class="imgBox"><img src="../../static/images/lunboImg_03.png"></div>
            <div class="imgBox"><img src="../../static/images/lunboImg_03.png"></div>
          </div>
          <div class="shuoyin">
            <ul>
              <li class="on"><img src="../../static/images/lunboImg_03.png"></li>
              <li><img src="../../static/images/lunboImg_03.png"></li>
              <li><img src="../../static/images/lunboImg_03.png"></li>
              <li><img src="../../static/images/lunboImg_03.png"></li>
              <li><img src="../../static/images/lunboImg_03.png"></li>
              <li><img src="../../static/images/lunboImg_03.png"></li>
            </ul>
          </div>
        </div>

        <div class="rightList">
          <ul>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
            <li><a href="">列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题列表标题</a></li>
          </ul>
        </div>

      </div>
    </div>
</template>

<script>
  import $ from "jquery"
  import top from './top.vue'
    export default {
        name: "dynamicM",
      components:{top},
      mounted(){
          this.huadong();
      },
      methods:{
          huadong:function () {
           function scroll(){
             $(".imgList").animate({
               "margin-left":"-930px"
             },function () {
               $(".imgList div:eq(0)").appendTo($(".gundong ul"))
               $(".imgList").css({"margin-left":0})
             })
           }
           setInterval(scroll,5000);
          }
      }
    }
</script>

<style scoped>

</style>
