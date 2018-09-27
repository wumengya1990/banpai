<template>
    <div class="SC_classList mesBox">
         <h3><span>班级列表</span></h3>
         <div class="classListScroll">
         <div class="classBox">
             <h4><span>一年级</span></h4>
             <a href="">一年级（1）班<em>99+</em></a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <div class="clear"></div>
         </div>
         <div class="classBox">
             <h4><span>二年级</span></h4>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <div class="clear"></div>
         </div>
         <div class="classBox">
             <h4><span>三年级</span></h4>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <div class="clear"></div>
         </div>
         <div class="classBox">
             <h4><span>四年级</span></h4>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <div class="clear"></div>
         </div>
         <div class="classBox">
             <h4><span>五年级</span></h4>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <a href="">一年级（1）班</a>
             <div class="clear"></div>
         </div>
         </div>

    <div class="SC_backBut"><input type="button" @click="backpage()" value="返回1"></div>

    </div>
</template>

<script>
export default {
    name:"classList",
    computed:{
        backpage(){
            this.$router.back(-1);
        }
    }
    
}
</script>

<style>

</style>
