<template>
    <body>
        <div class="signupMain">
            
            <input type="button" class="btn btnBack" onclick="history.back()" value="< 뒤로가기">

            <a href="https://epimint.com/">
            <img id="logo" src="https://uneedcomms-keepgrow.s3.ap-northeast-2.amazonaws.com/18c401a3c2154dbb86ff87b47f30fda4/processes/1623922590774.png">
            </a>
            <hr/>
            
            <p class="text" id="sign">{{signUpMessage}}</p>
            <p class="text" id="message"><br>{{message}}<br>{{messageSecond}}</p>
            <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fis_popup%3Dfalse%26ka%3Dsdk%252F1.42.0%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FMacIntel%2520origin%252Fhttps%25253A%25252F%25252Fepimint.com%26auth_tran_id%3Dmg2m5lj69fsf73419b2103fed20961340e22f4d0e46l4a5tm37%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fepimint.com%252FApi%252FMember%252FOauth2ClientCallback%252Fkakao%252F%26client_id%3Df73419b2103fed20961340e22f4d0e46&talk_login=hidden" class="btn kakao-button">
            {{kakaoSignUp}}</a>
            <p>또는</p><br><br><br>
            <div class="btn btnUsual">
            <router-link to="/signupdetail">{{usualSignUp}}</router-link>
            <router-view />
            </div>
            <hr/>
            
            <p class="text" id="kakaoMessage">{{kakaoMessage}}</p><br>
            <p class="text" id="kakaoSecondMessage">{{kakaoMessageSecond}}</p><br><br>
            <p class="text" id="lastMessage">{{epimintWithKakao}}</p>
        </div>
    </body>
</template>

<script>
export default {
    name: 'SignUp',
  data(){
      return {
          backMessage: "< 뒤로가기",
          signUpMessage: "회원가입",
          message: "아이디, 비밀번호, 이름, 휴대번호 입력하기 귀찮으시죠?",
          messageSecond: "카카오로 1초 만에 회원가입 하세요.",
          kakaoSignUp: "카카오 1초 회원가입",
          usualSignUp: "일반회원가입",
          kakaoMessage: "카카오 1초 회원가입 이란?",
          kakaoMessageSecond: "카카오 싱크를 활용한 간편 가입 기능입니다.",
          epimintWithKakao: "epimint X 카카오싱크 부스터"
      }
  }

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&display=swap');

.signupMain {
    width:100%;
    height: 100%;
    padding:0;
}

/* 에피민트 로고 */
#logo {
    position: relative;
    object-fit: cover;
    top:-50%;
    
    width:8%;
    height:3%;
    display: block; 
    margin: 6% auto;
}

.text {
    font-family:'Noto Sans KR', sans-serif;
    text-align:left;
}

/* 회원가입 문구 */
#sign {
    display:flex;
    margin: 6% 27.6%;
    font-size:1.44em;
    font-weight: bold;
    text-align:left;
}

/* 회원가입 밑 안내메시지 */
#message {
    margin: -6.3% 33.5%;
    
    font-size:0.95em;
    font-weight: 300;
}

/* 선 설정 */
hr:nth-child(3) {
    margin: -4% auto;
    width:44%;
    color: rgb(154, 154, 154);
}

hr:nth-child(12) {
    margin: -0.5% auto;
    width:33%;
    border-top: 2px solid ;
    color:black;
}

/* '또는' 설정 */
p:nth-child(7) {
    margin:-7% auto;
    text-align: center;
    font-size:0.8em;
    color: rgb(154, 154, 154);
}

/* 카카오 싱크 버튼 */
.btn {
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;

  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
  color: #000000;
  font-size: 15px;
  
  background: #fee500;
  padding: 1.3% 5% 1.3% 5%;
  width: 32.5%;
  
  margin:9% auto;
  display: block;
}
.btn:hover {
    text-decoration: none;
}

/* 일반회원가입 버튼 */
.btnUsual {
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  
  font-family: "Noto Sans KR", sans-serif;
  color: #000000;
  font-size: 0.8em;
  font-weight: 500;

  background: #ffffff;
  padding: 1% 5% 1% 5%;
  width: 32.5%;

  margin: 3% auto;
  display: block;
  text-align: center;
  text-decoration-color:#000000;
  text-decoration-line:none;
}

/* 카카오 싱크 관련 하단 메시지 */
#kakaoMessage {
    margin: 2% 33.5%;
    
    font-size:0.85em;
    font-weight: bold;
}

#kakaoSecondMessage {
    margin: -3.8% 33.5%;
    
    font-size:0.85em;
    font-weight: 500;
}

#lastMessage {
    margin: 1% 33.5%;
    
    font-size:0.5em;
    font-weight: 500;
    color: rgb(154, 154, 154);
}

.btnBack {
  -webkit-border-radius: 21;
  -moz-border-radius: 21;
  border-radius: 21px;

  font-family: "Noto Sans KR", sans-serif;
  font-weight:300;
  color: #000000;
  font-size: 83%;
  background: #ffffff;
  padding: 0.2% 0.4%;
  border: solid #e8e5e8 1px;
  width:6%;
 
  position: fixed;
  top:-10%;
  left:28%;
}

.btnBack:hover {
  background: #fafafa;
  text-decoration: none;
}
.kakao-button {
    background-image: url("../assets/kakaotalk.png");
    background-position-x: 5%;
    background-position-y: 45%;
    background-size: 6%;
    background-repeat: no-repeat;
}

</style>