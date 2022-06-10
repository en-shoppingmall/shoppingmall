<template>
    <div>
        <top-menu></top-menu> <!-- 상단 메뉴바 -->
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>


        <bottom-menu></bottom-menu> <!-- 제일 하단 바 -->
    </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue'
import BottomMenu from '../components/BottomMenu.vue'

export default {  
    name: 'SET',
    components: { 
    'top-menu' : TopMenu,
    'bottom-menu' : BottomMenu
    }
}
</script>
