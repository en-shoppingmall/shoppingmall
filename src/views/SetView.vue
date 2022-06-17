<template>
    <div>
        <top-menu></top-menu> <!-- 상단 메뉴바 -->
        <set-menu></set-menu>
        <bottom-menu></bottom-menu> <!-- 제일 하단 바 -->
    </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue'
import BottomMenu from '../components/BottomMenu.vue'
import SetMenu from '../components/SetMenu.vue'

export default {  
    name: 'SET',
    components: { 
    'top-menu' : TopMenu,
    'set-menu' : SetMenu,
    'bottom-menu' : BottomMenu
    }
}
</script>