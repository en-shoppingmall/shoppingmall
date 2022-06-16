<template>
    <div>
        <top-menu></top-menu> <!-- 상단 메뉴바 -->
        <review-menu></review-menu>
        <bottom-menu></bottom-menu> <!-- 제일 하단 바 -->
    </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue'
import BottomMenu from '../components/BottomMenu.vue'
import ReviewMenu from '../components/ReviewMenu.vue'

export default {  
    name: 'review',
    components: { 
    'top-menu' : TopMenu,
    'review-menu' : ReviewMenu,
    'bottom-menu' : BottomMenu
    }
}
</script>