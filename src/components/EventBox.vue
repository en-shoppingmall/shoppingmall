<template>
  <div class ="event-Box">
    <router-link to="/event" style = "color:rgb(255, 255, 255); text-decoration : none; padding : 7px; font-weight:bold;">
    {{eventsentence}}</router-link>   <!--이벤트 페이지 링크 --> 
    <router-view/>
  </div>
</template>

<script>
export default {
    data(){
    return{
    eventsentence : "2개 구매시 추가 3개 50% 할인 이벤트!"
    }
  }
}
</script>

<style>
.event-Box { /* 가장 상단에 있는 이벤트 문구 박스*/
    display: flex;
    justify-content: center;     
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 1000;
    font-size: 23px;
    background : rgb(51, 51, 51);
}
</style>