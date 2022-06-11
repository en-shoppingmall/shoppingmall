<template>
    <div>
        <top-menu></top-menu> <!-- 상단 메뉴바 -->
        <flavor-menu></flavor-menu>
        <bottom-menu></bottom-menu> <!-- 제일 하단 바 -->
    </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue'
import BottomMenu from '../components/BottomMenu.vue'
import FlavorMenu from '../components/FlavorMenu.vue'// 이거 출력은 되는데 왜 빨간줄뜨냐 함 물어봐야함ㅠ

export default {  
    name: 'FLAVOR',
    components: { 
    'top-menu' : TopMenu,
    'flavor-menu' : FlavorMenu,
    'bottom-menu' : BottomMenu
    }
}
</script>
