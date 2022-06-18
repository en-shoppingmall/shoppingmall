<template>
    <div>
        <signup-detail-menu></signup-detail-menu> <!-- 회원가입 -->
          <bottom-menu></bottom-menu>
    </div>
</template>

<script>
import SignupDetail from '../components/SignupDetail.vue'
import BottomMenu from '../components/BottomMenu.vue'

export default {  
    name: 'SignupDetail',
    components: { 
    'signup-detail-menu' : SignupDetail,
    'bottom-menu' : BottomMenu
    }
}
</script>