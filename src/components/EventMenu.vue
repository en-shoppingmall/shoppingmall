<template>
    <div class = "EventMenu">
    <img src="../assets/eventMain.jpg" style="max-width:100%; height:auto;" art="에피민트" class="eventMain">
    <img src="../assets/eventBottom.jpg" style="max-width:100%; height:auto;" art="에피민트" class="eventBottom">
    <br><br><br><br><br><br><br><br>
    <div id="ContentContainer" onscroll="getScrollPoistion()"></div>
    </div>
</template>

<script>      
export default {
    data(){
    return{
    eventMainImage : "../assets/eventMain.jpg",
    }
  }
}

</script>

<style  scoped>

</style>
