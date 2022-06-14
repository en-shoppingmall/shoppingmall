<template>
    <div>
        <signup-detail-menu></signup-detail-menu> <!-- 회원가입 -->
    </div>
</template>

<script>
import SignupDetail from '../components/SignupDetail.vue'

export default {  
    name: 'SignupDetail',
    components: { 
    'signup-detail-menu' : SignupDetail,
    }
}
</script>