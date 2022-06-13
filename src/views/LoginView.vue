<template>
    <div>
        <login-menu></login-menu> <!-- 상단 메뉴바 -->
    </div>
</template>

<script>
import LoginMenu from '../components/LoginMenu.vue'
import axios from 'axios'

export default {  
    name: 'LOGIN',
    components: { 
    'login-menu' : LoginMenu
    }
    
}
</script>