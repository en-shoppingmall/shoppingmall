<template>
    <div class="top-position">
        <div class="title">REVIEW</div><br>
        <span>모든리뷰</span>
    </div>
    <div>

    </div>

</template>

<script>
export default {
    data() {
        return{

        }
    }

}
</script>

<style scoped>
@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
}

.top-position {
    padding-top:150px;
}
 

.title {
    top: 1000px;
    animation: fadeInUp 1s;
}

</style>
