<template>
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
</template>
<script>

</script>

<style  scoped>
a{ /* 링크 밑줄 없애기, 색상 붙이기*/
  text-decoration: none;
  color: #333;
}
.service-center-top-box{
    display: block;
    list-style:none;
    margin-block-start: 10em;
    margin-inline-start: 2.2em;
}
.service-contact-box{
  color : black;
}
.address{
  color : black;
  opacity : 0.5;
}
.guide-list{
    display: block;
    list-style:none;
    margin-block-start: 2.2em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.guide-list li{ /* 메뉴들 사이 간격 조정 */
    margin : 0;
    padding : 0;
    display: inline-block;
    padding-right: 40px;
    font-size: 18px;
    letter-spacing: 3px;
    transition: font-weight 0.5s;
}
a:-webkit-any-link { /*링크 위에 마우스 올렸을 때 커서 아이콘 변경*/ 
    cursor: pointer;
}
a:hover{ /* 링크 위에 마우스 올렸을 때 글씨 진하게 변경*/
  font-weight:bold;
}
body {
    margin: 0;
    padding: 0;
}
</style>