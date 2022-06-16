<template>
<div>
    <purchase-page></purchase-page> 
    <bottom-menu></bottom-menu><!-- 이게 밑에 CONTACT 안내 문구 -->
  
</div>
</template>

<script>
import PurchasePage from '../components/PurchasePage.vue'
import BottomMenu from '../components/BottomMenu.vue'

export default {
    name: 'purchasepage',
    components: { 
    'purchase-page' : PurchasePage,
    'bottom-menu' : BottomMenu
    },
}
</script>

<style>

</style>