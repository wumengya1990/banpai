<template>
  <div id="index" class="SC_bgColor" >
   
    <!-- <Nav></Nav>
    <mainContent></mainContent>
    <outPoint></outPoint> -->
    <!--<suspensionPortrait></suspensionPortrait>-->
    <router-view/>

  </div>
</template>


<script>
  // import Nav from '../src/components/Nav.vue'
  // import mainContent from '../src/components/mainContent.vue'
  // import suspensionPortrait from '../src/components/suspensionPortrait'
  // import outPoint from '../src/components/outPoint'
export default {
  name: 'index',
  // components:{
  //   mainContent,
  //   Nav,
  //   suspensionPortrait,
  //   outPoint }

}
</script>

<style>
  .SC_bgColor{  background: -webkit-linear-gradient(#507ea2, #284052); /* Safari 5.1 - 6.0 */
  background: linear-gradient(#507ea2 50%, #284052 100%); /* 标准的语法 */ 
  position: fixed; left: 0; top: 0; right: 0; bottom: 0; margin: auto; z-index: 1;}
</style>
