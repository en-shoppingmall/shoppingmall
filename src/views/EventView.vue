<template>
    <div>
        <top-menu></top-menu>
        <event-menu></event-menu>
        <bottom-menu></bottom-menu>
    </div>
</template>

<script>
import EventMenu from '../components/EventMenu.vue'
import TopMenu from '../components/TopMenu.vue'
import BottomMenu from '../components/BottomMenu.vue'

export default{
    name : 'event',
    components : {
        'event-menu' : EventMenu,
        'top-menu' : TopMenu,
        'bottom-menu' : BottomMenu
    }
}
</script>
