<template>
    <div>
        <top-menu></top-menu>
        <detail-menu></detail-menu>
        <bottom-menu></bottom-menu>
    </div>
</template>

<script>
import DetailPage from '../components/DetailPage.vue'
import TopMenu from '../components/TopMenu.vue'
import BottomMenu from '../components/BottomMenu.vue'

export default{
    name : 'event',
    components : {
        'detail-menu' : DetailPage,
        'top-menu' : TopMenu,
        'bottom-menu' : BottomMenu
    }
}
</script>
