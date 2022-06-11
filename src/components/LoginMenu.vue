<template>
    <div id = "login-frame">
        <div id = "login-top"><!-- 로그인 화면 상단-->
            <div class="back-button" onclick="history.back();return false;">뒤로가기</div>
            <h3 id = "go-home">
                <router-link to="/">
                <img src="../assets/epimint.jpg" art="에피민트" id="epimint">
                </router-link>   <!-- 홈 링크 --> 
                <router-view/>
            </h3>
        </div>

        <hr width = "40%" color = "gray"> <!-- 중간에 회색 실선 -->

        <div id = "login-middle"><!-- 로그인 화면 중간 -->

        </div>    
        <footer id = "login-bottom"><!-- 로그인 화면 하단 -->

        </footer>
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
#login-top{
    
}
#epimint{
    width : 120px;
    height : 30px;
}
.back-button{

    font-size: 1em;
    margin-block-start: 3em;
    margin-block-end: 0.67em;
    margin-inline-start: -40em;
    margin-inline-end: 0px;
    font-weight: bold;
    
    display: inline-block;
    width: 90px;
    height: 30px;
    line-height: 30px;
    background: url(//storage.keepgrow.com/admin/campaign/20200611023439767.png) no-repeat 10px; 
    background-size: auto 12px;
    border: 1px solid #efefef;
    border-radius: 30px;
    font-size: 13px;
    cursor: pointer;
}
#go-home{
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: -1em;
    margin-inline-end: 0px;
    font-weight: bold;
}
dir{
    display: block;
}
hr{
  margin-left : auto;
  margin-right : auto;
}
</style>
