<template>
<div>

  <div class ="eventBox">
  <a href = "https://epimint.com/product/project.html?cate_no=62" 
  style = "color:rgb(255, 255, 255); text-decoration : none; padding : 7px; font-weight:bold;">{{eventsentence}}</a>
  </div>
  
  <top-menu></top-menu>
 

  <div> <!-- 이 div는 중앙화면 Div임 그니까 밑에 footer를 중앙화면 div만들고 안에 넣으면 됨-->
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <footer>
      <div class = "service-center-top-box">

        <div class = "service-contact-box">
        <span style="font-size:30px; font-weight:bold;">CONTACT &nbsp; &nbsp;</span>
        <br><br>
        <span>고객센터 010-4050-3135 &nbsp; l &nbsp;
          기타문의  zzuni3423@naver.com</span>
        </div>
        
        <ul class = "guide-list">
          <li>
             <a href = "https://epimint.com/index.html">guide</a>
          </li>
          <li>
              <a href = "https://epimint.com/index.html">privacy</a>
          </li>
          <li>
               <a href = "https://epimint.com/index.html">agreement</a>
          </li>
        </ul>

        <p class="address">
          <span>주식회사 En#</span>
          |<span>조형준</span>
          |<span>04036 서울 광진구 능동로 209 학생회관 304B</span><br>
          <span>개인정보책임자: 김영림 yxxngxix@gmail.com</span>
          |<span>License: [826-30-01091]</span>
          |<span>Online License: [2021-충남천안-1888]</span>
          <span><a href="#none" onclick="window.open('https://teht.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/ab/a/a/UTEABAAA13.xml', 'bizCommPop', 'width=980, height=950;');return false;">[사업자정보확인]</a>
          </span>
        </p>
       
      </div>
    </footer>
  </div>
</div>
</template> 

<script>
import TopMenu from './components/TopMenu.vue'


export default {
  components: { 
    'top-menu' : TopMenu 
    },
  name: 'App',
  data(){
    return{
      eventsentence : "2개 구매시 추가 3개 50% 할인 이벤트!"
    }
  },

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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


/*************************************************맨 밑에 안내 문구************************************************/
.service-contact-box{
  color : black;
}
.guide-list li{ /* 메뉴들 사이 간격 조정 */
  padding-right: 40px;
  font-size : 18px;
}
.address{
  color : black;
  opacity : 0.5;
}

</style>
