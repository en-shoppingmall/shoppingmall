<template>
    <div>
        <login-menu></login-menu> <!-- 상단 메뉴바 -->
    </div>
</template>

<script>
import LoginMenu from '../components/LoginMenu.vue'

export default {  
    name: 'FLAVOR',
    components: { 
    'login-menu' : LoginMenu
    }
}
</script>