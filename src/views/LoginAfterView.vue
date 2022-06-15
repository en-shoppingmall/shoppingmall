<template>
<div>
  <event-box></event-box> <!--위에 2개 구매시 추가 할인 이벤트 안내 문구-->

  <login-after-menu></login-after-menu> <!-- 상단 메뉴바 -->
 
  <div> <!-- 이 div는 중앙화면 Div임 그니까 밑에 footer를 중앙화면 div만들고 안에 넣으면 됨-->
    <main-background></main-background>
    <bottom-menu></bottom-menu><!-- 이게 밑에 CONTACT 안내 문구 -->
  </div>
</div>
</template>

<script>
import EventBox from '../components/EventBox.vue'
import LoginAfterMenu from '../components/LoginAfterMenu.vue'
import BottomMenu from '../components/BottomMenu.vue'
import Mainbackground from '../components/Mainbackground.vue'

export default {
    name: 'MainView',
    components: { 
    'event-box' : EventBox,
    'login-after-menu' : LoginAfterMenu,
    'main-background': Mainbackground,
    'bottom-menu' : BottomMenu
    },
}
</script>

<style>

</style>