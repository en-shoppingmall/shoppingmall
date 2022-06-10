<template>
<div class = "topmenu">
    <h3>
      <router-link to="/">
      <img src="../assets/epimint.jpg" art="에피민트" class="homeblack">
      <img src="../assets/epimintWhite.jpg" art="에피민트" class="homewhite">
      </router-link>   <!-- 홈 링크 --> 
      <router-view/>
    </h3>
    <ul class = "leftmenu">
        <li>
           <router-link to="/set">SET</router-link>
            <router-view/>
        </li>
        <li>
          <a href = "https://epimint.com/index.html">FLAVOR</a>
        </li>
        <li>
          <a href = "https://epimint.com/index.html">EVENT</a>
        </li>
        <li>
          <a href = "https://epimint.com/index.html">REVIEW</a>
        </li>
      </ul>

    <div class = "rightmenu">
      <ul>
        <li>
            <a href = "https://epimint.com/index.html">LOGIN</a>
        </li>
        <li>
            <a href = "https://epimint.com/index.html">JOIN</a>
        </li>
      </ul>    
    </div>
  </div>
</template>
    
<script setup lang='ts'>
</script>
    
<style>
.homeblack:hover{ /* epimint 제목 누르면 연하게 호버됨*/
  opacity : 0.75
}
.homewhite{ /* epimint사진 하얀색 글씨*/
  display : none;
}
.topmenu{ /* 메뉴 + 로그인 회원가입 묶은 것 */
  display : flex;
  top : 20px;
  font-size : 25px;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 100;
}
.rightmenu{ /* 로그인 회원가입 설정*/
  padding-right: 60px;
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
  flex-grow: 1;
}
.eventBox { /* 가장 상단에 있는 이벤트 문구 박스*/
    display: flex;
    justify-content: center;     
    position: fixed;
    width: 100%;
    height: 50px;
    z-index: 1000;
    font-size: 25px;
    background : rgb(51, 51, 51);
}
.leftmenu{ /* SET, FLAVOR, EVENT, REVIEW 메뉴들 설정*/
  display: block;
  list-style:none;
  margin-block-start: 2em;
  margin-block-end: 1em;
}
.leftmenu li{ /* 메뉴들 사이 간격 조정 */
  padding-right: 40px;
}
body {
    margin: 0;
    padding: 0;
}
h3{ /* 메인페이지로 이동하는 epimint문구 링크*/
    display: block;
    font-size: 2em;
    margin-block-start: 1.5em;
    margin-block-end: 0.67em;
    margin-inline-start: 30px;
    margin-inline-end: 0px;
    font-weight: bold;
}
ul{
    display: block;
    list-style:none;
    margin-block-start: 2.2em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
 
li{
    margin : 0;
    padding : 0;
    display: inline-block;
    padding-left: 10px;
    font-size: 20px;
    letter-spacing: 3px;
    transition: font-weight 0.5s;
}
a{ /* 링크 밑줄 없애기, 색상 붙이기*/
  text-decoration: none;
  color: #333;
}
a:-webkit-any-link { /*링크 위에 마우스 올렸을 때 커서 아이콘 변경*/ 
    cursor: pointer;
}
a:hover{ /* 링크 위에 마우스 올렸을 때 글씨 진하게 변경*/
  font-weight:bold;
}
</style>