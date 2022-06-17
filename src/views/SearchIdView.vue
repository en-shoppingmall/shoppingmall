<template>
    <div>
        <top-menu></top-menu> <!-- 상단 메뉴바 -->
       <search-id></search-id>
        <bottom-menu></bottom-menu> <!-- 제일 하단 바 -->
    </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue'
import BottomMenu from '../components/BottomMenu.vue'
import SearchId from '../components/SearchId.vue'

export default {  
    name: 'search',
    components: { 
    'top-menu' : TopMenu,
    'search-id' : SearchId,
    'bottom-menu' : BottomMenu
    }
}
</script>