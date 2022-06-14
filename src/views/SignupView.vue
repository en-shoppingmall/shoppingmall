<template>
    <div>
        <signup-menu></signup-menu> <!-- 회원가입 -->
    </div>
</template>

<script>
import SignupMenu from '../components/SignupMenu.vue'

export default {  
    name: 'Signup',
    components: { 
    'signup-menu' : SignupMenu,
    }
}
</script>