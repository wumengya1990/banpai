<template>
    <div class="SC_classSpace">
      <top></top>
      <div class="SC_classSpaceM mesBox">
        <h3><span>班级空间</span></h3>
        <div class="SC_classSpaceContent">
            <div class="SC_LeaveMessageBox">
              <div class="userHead">
                <div class="userImg"><img src="../../static/images/userImg_03.png"></div>
                <h4>还拿</h4>
                <p>一周前</p>
                <div class="clear"></div>
              </div>

              <div class="useMessage">
                <div class="textBox"><p>活动内容活动内容活动内容活动内容活动内容</p></div>
                <div class="photoBox">
                  <ul>
                    <li><img src="../../static/images/hdIMG.jpg"></li>
                    <li><img src="../../static/images/hdIMG.jpg"></li>
                    <li><img src="../../static/images/hdIMG.jpg"></li>
                    <li><img src="../../static/images/hdIMG.jpg"></li>
                  </ul>
                  <div class="clear"></div>
                </div>
              </div>

              <div class="leaveBox">
                <div class="leaveBoxCon">
                  <div class="commenter">
                    <div class="touxiang"><img src="../../static/images/userImg_03.png"></div>
                    <div class="touxiangMes">
                    <h4>张洋回复还拿</h4>
                    <p>19：05</p>
                    </div>
                  </div>
                  <div class="leaveMessage">
                    <p>留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容</p>
                  </div>
                  <div class="clear"></div>
                    <div class="leaveBoxCon">
                      <div class="commenter">
                        <div class="touxiang"><img src="../../static/images/userImg_03.png"></div>
                        <div class="touxiangMes">
                          <h4>张洋回复还拿</h4>
                          <p>19：05</p>
                        </div>
                      </div>
                      <div class="leaveMessage">
                        <p>留言内容留言内容留言内容留言内容留言内容留言内容留言内容留言内容</p>
                      </div>
                      <div class="clear"></div>
                    </div>

                </div>

              <div class="moreMessage">
                <a>查看更多评论</a>
              </div>
              </div>
            </div>
        </div>
      </div>
      <div class="SC_backBut"><input type="button" value="返回"></div>
    </div>
</template>

<script>
  import top from './top.vue'
    export default {
        name: "classSpace",
        components:{top}
    }
</script>

<style scoped>

</style>
