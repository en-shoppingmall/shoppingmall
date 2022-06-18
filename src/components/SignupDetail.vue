<template>
<body>
    <div>
        <div class="top">
        <p id="mainText">JOIN US</p>
        <a href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fis_popup%3Dfalse%26ka%3Dsdk%252F1.42.0%2520os%252Fjavascript%2520sdk_type%252Fjavascript%2520lang%252Fko-KR%2520device%252FMacIntel%2520origin%252Fhttps%25253A%25252F%25252Fepimint.com%26auth_tran_id%3Dmoahl6uvkpjf73419b2103fed20961340e22f4d0e46l4b54jsd%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fepimint.com%252FApi%252FMember%252FOauth2ClientCallback%252Fkakao%252F%26client_id%3Df73419b2103fed20961340e22f4d0e46&talk_login=hidden" class="btn kakao">
        카카오 로그인
        </a>
        </div>
        
        <div class="memberSelection">
          <table>
            <tbody>
                <tr>
                    <td class="form-width" id="backgroundColor"><span>회원구분 </span>
                    <img src="https://img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"></td>
                    <td>
                            <input id="position" type="radio" checked>
                            <label>개인회원</label>
                    </td>
                </tr>
            </tbody>
          </table>
        </div>

        <div class="form">   
        <table>
            <caption align="top" class="captionText">필수정보</caption>
            <caption id="essentialPosition"><img src="https://img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"> 필수입력사항</caption>
           
             <tbody>
                <tr>
                    <td class="form-width" id="backgroundColor"><span>아이디 </span>
                    <img src="https://img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"></td>
                    <td><input type="text" @change="checkId" class="box" v-model="inputId"><span>&nbsp;{{idMessage}} (영문소문자/숫자, 4~16자)</span></td>
                </tr>
                <tr>
                    <td id="backgroundColor"><span>비밀번호 </span>
                    <img src="https://img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"></td>
                    <td><input type="password" class="box" v-model="password"><span> (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)</span></td>
                </tr>
                <tr>
                    <td id="backgroundColor"><span>비밀번호 확인 </span>
                    <img src="https://img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"></td>
                    <td><input type="password" @change="checkPasswordDouble" class="box" v-model="doublePassword"><span>&nbsp;{{doublePasswordMessage}}</span></td>
                </tr>
                <tr>
                    <td id="backgroundColor"><span>이름 </span>
                    <img src="https://img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"></td>
                    <td><input type="text" class="box" v-model="name"></td>
                </tr>
                <tr>
                    <td id="backgroundColor"><span>주소</span></td>
                    <td>
                        <input type="text" class="box middleSize address-position" v-model="postcode" disabled>
                        <input type="button" class="btn zipcode" id="zipcodeButtonPosition" v-on:click="executeDaumPostcode" value="우편번호"><br>
                        
                        <input type="text" class="box address-position longSize" id="address" v-model="address" disabled><span> 기본주소</span><br>
                        <input type="text" class="box address-position longSize" v-model="addressdetail"><span> 나머지주소(선택입력가능)</span>
                    </td>
                </tr>
                <tr>
                    <td id="backgroundColor"><span>일반전화</span></td>
                    <td>
                        <select class ="form-design" v-model="firstHomeNumber"> 
                            <option selected>02</option>
                            <option :key="i" :value="d.v" v-for="(d, i) in options">{{ d.t }}</option>
                        </select>
                        <span> - </span>
                        <input type="text" class="box middleSize" maxlength="4" v-model="middleHomeNumber"><span> - </span>
                        <input type="text" class="box middleSize" maxlength="4" v-model="lastHomeNumber">
                    </td>
                </tr>
                <tr>
                    <td id="backgroundColor"><span>휴대전화 </span>
                    <img src="https://img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"></td>
                    <td>
                        <select class="form-design" v-model="firshPhoneNumber"> 
                            <option selected>010</option>
                            <option value="1">011</option>
                            <option value="2">016</option>
                            <option value="3">017</option>
                            <option value="4">018</option>
                            <option value="5">019</option>
                        </select>
                        <span> - </span>
                        <input type="text" class="box middleSize" maxlength="4" v-model="middlePhoneNumber"><span> - </span>
                        <input type="text" class="box middleSize" maxlength="4" v-model="endPhoneNumber"><br>
                    </td>
                </tr>
                <tr>
                    <td id="backgroundColor"><span>이메일 </span>
                    <img src="https://img.echosting.cafe24.com/skin/base/common/ico_required_blue.gif"></td>
                    <td><input type="text" @change="checkEmail" class="box" v-model="email"><span>&nbsp;{{emailMessage}}</span></td>
                </tr>
            </tbody>
        </table>
        </div>

        <div class="additionalForm">
         <table>
             <caption align="top" class="captionText">추가정보</caption>
            <tbody>
                <tr>
                    <td class="form-width" id="backgroundColor"><span>성별</span></td>
                    <td>
                        <input id="position" type="radio" name="sex" v-model="man">
                            <label>남자</label>
                            &nbsp;
                        <input id="position" type="radio" name="sex" v-model="woman">
                            <label>여자</label>
                    </td>
                </tr>
                <tr>
                    <td id="backgroundColor"><span>생년월일 ㅤㅤ</span></td>
                    <td>
                        <input type="text" class="box middleSize" v-model="year">&nbsp;&nbsp;년
                        <input type="text" class="box smallSize" v-model="month">&nbsp;&nbsp;월
                        <input type="text" class="box smallSize" v-model="day">&nbsp;&nbsp;일
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <input id="position" type="radio" name="luna" checked>
                            <label>양력</label>
                            &nbsp;
                        <input id="position" type="radio" name="luna">
                            <label>음력</label>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>

    <div class="information">
        <table>
            <caption align="top" class="captionText">전체 동의</caption>
            <tbody>
                <tr>
                    <td id="backgroundColor">
                        <input type="checkbox" id="checkboxPosition" v-model="checkAll">&nbsp;<label>이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</label>
                    </td>
                </tr>
                <tr id="backgroundColor">
                    <td>
                    <span>[필수] 이용약관 동의</span>
                    <div class="informationBox">
                        <p></p>
                    </div>
                    <span>이용약관에 동의하십니까?</span>&nbsp;
                        <input type="checkbox" id="checkboxPosition" v-model="check.checkboxFirst">
                        <label>&nbsp;&nbsp;동의함</label>
                    </td>
                </tr>
                <tr id="backgroundColor">
                    <td id="backgroundColor">
                    <span>[필수] 개인정보 수집 및 이용 동의</span>
                    <div class="informationBox">
                        <p></p>
                    </div>
                    <span>개인정보 수집 및 이용에 동의하십니까?</span>&nbsp;
                        <input type="checkbox" id="checkboxPosition" v-model="check.checkboxSecond">
                        <label>&nbsp;&nbsp;동의함</label>
                    </td>
                </tr>
                <tr>
                    <td id="backgroundColor">
                    <span>[선택] 쇼핑정보 수신 동의</span>
                    <div class="informationBox">
                        <p></p>
                    </div>
                    <span>SMS 수신을 동의하십니까? &nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" id="checkboxPosition" v-model="check.checkboxThird">
                        <label>&nbsp;&nbsp;동의함</label>
                    <br>
                    <span>이메일 수신을 동의하십니까?  &nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   <input type="checkbox" id="checkboxPosition" v-model="check.checkboxFourth">
                        <label>&nbsp;&nbsp;동의함</label>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <input type="button" id = "login-button" @click="[checkText(), checkDataTwice(), submit()]" class="btn completion" value="회원가입" >
    </div>
</body>
</template>


<script>
import axios from 'axios'
var emailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
var idPattern = /^[a-z]{1}[a-z0-9]{3,15}$/;

export default {
  data: function(){
      return {

          // 회원가입시 필요한 정보들
          inputId: "",
          password: "",
          doublePassword: "",
          name: "",
          firshPhoneNumber:"",
          middlePhoneNumber: "",
          endPhoneNumber: "",
          email: "",
          addressdetail : "",

          // 우편번호 및 주소는 선택하면 자동으로 채워지게 함
          postcode: "",
          address: "",

          // 예외처리 후 메시지를 띄워야 함
          idMessage: "",
          passwordMessage: "",
          doublePasswordMessage: "",
          emailMessage: "",

          // 비밀번호 체크할 때 필요한 요소
          count: 0,

          //성별
          man : "",
          woman : "",
          gender : "",

          //일반전화
          firstHomeNumber:"",
          middleHomeNumber:"",
          lastHomeNumber:"",

          //생년월일
          year:"",
          month:"",
          day:"",

          // 일반 전화번호 앞자리
          options: [
        { t: "031" },
        { t: "032" },
        { t: "033" },
        { t: "041" },
        { t: "042" },
        { t: "043" },
        { t: "044" },
        { t: "051" },
        { t: "052" },
        { t: "053" },
        { t: "054" },
        { t: "055" },
        { t: "061" },
        { t: "062" },
        { t: "063" },
        { t: "064" },
        { t: "0502" },
        { t: "0503" },
        { t: "0504" },
        { t: "0505" },
        { t: "0506" },
        { t: "0507" },
        { t: "070" },
        { t: "010" },
        { t: "011" },
        { t: "016" },
        { t: "017" },
        { t: "018" },
        { t: "019" },
        { t: "0508" }
      ],

      // 이용약관 체크 박스 v-model
      check: {
          checkboxFirst: false,
          checkboxSecond: false,
          checkboxThird: false,
          checkboxFourth: false,
      }
      };
  },

  computed: {
      // 전체 동의 박스 누르면 전부 다 눌려지고, 또 전부 다 안눌려지게 하는 기능
      checkAll: {
          get: {

          },
          set: function(e) {
              if (e) {
                  this.check.checkboxFirst = true;
                  this.check.checkboxSecond = true;
                  this.check.checkboxThird = true;
                  this.check.checkboxFourth = true;
              }
              else {
                  this.check.checkboxFirst = false;
                  this.check.checkboxSecond = false;
                  this.check.checkboxThird = false;
                  this.check.checkboxFourth = false;
              }
          }
      }

  },
  
  methods: {
      // 다음 주소 불러오기
       executeDaumPostcode() {
           new window.daum.Postcode({
               oncomplete: (data) => {
                   if (this.extraAddress !== "") {
                       this.extraAddress = "";
                       }
                       if (data.userSelectedType === "R") {
                           // 사용자가 도로명 주소를 선택했을 경우
                           this.address = data.roadAddress;
                           } else {
                               // 사용자가 지번 주소를 선택했을 경우(J)
                               this.address = data.jibunAddress;
                           }
                           // 우편번호를 입력한다.
                           
                    this.postcode = data.zonecode;
               },
            }).open();
       },

       // id 예외처리
        checkId() {
           if(idPattern.test(this.inputId)) {
               this.idMessage = this.inputId.toString() + "는 사용 가능한 아이디입니다.";
           }
           else if(this.inputId.length == 0) {
               this.idMessage = "아이디를 입력해 주세요.";
           }
           else {
               this.idMessage = "대문자/공백/특수문자가 포함되었거나, 숫자로 시작 또는 숫자로만 이루어진 아이디는 사용할 수 없습니다.";
           }
       },

       // 비밀번호 예외처리
       isPassword() {
           this.count = 0;
           var passwordNumberPattern = /[0-9]+/;
           var passwordSmallPattern = /[a-z]+/;
           var passwordBigPattern = /[A-Z]+/;
           var passwordSignPattern = /[~`!@#$%^()_=|;:<>,.?-{}\\/\\[\\]]+/;

           if (passwordNumberPattern.test(this.password)) {
               this.count++;
           }
           if (passwordSmallPattern.test(this.password)) {
               this.count++;
           }
           if(passwordBigPattern.test(this.password)) {
               this.count++;
           }
           if(passwordSignPattern.test(this.password)) {
               this.count++;
           }
       },

       // 비밀번호 한번 더 입력할 때 이전 비밀번호와 맞는지 체크
       checkPasswordDouble() {
           if(this.doublePassword != this.password) {
               this.doublePasswordMessage = "비밀번호가 일치하지 않습니다.";
           }
           else {
               this.doublePasswordMessage = " ";
           }
       },

       // 이메일 예외처리
       checkEmail() {
           if(emailPattern.test(this.email)) {
               this.emailMessage = " ";
           }
           else {
               this.emailMessage = "유효한 이메일을 입력해 주세요.";
           }
       },

       // 빈칸에 필수 입력값들이 잘 입력되어있는지 살피고, 입력 안됐을 경우 alert
       checkText() {
           if(this.name.length == 0) {
               alert("이름 항목은 필수 입력값입니다.");
           }
           else if(this.password.length == 0 || this.doublePassword.length == 0) {
               alert("비밀번호 항목은 필수 입력값입니다.");
           }
           else if(this.inputId.length == 0) {
               alert("아이디 항목은 필수 입력값입니다.");
           }
           else if(this.email.length == 0) {
               alert("이메일을 입력하세요.");
           }
           else if(this.middlePhoneNumber.length == 0 || this.endPhoneNumber.length == 0) {
               alert("휴대전화를 입력해주세요.")
           }
           else if(this.check.checkboxFirst == false || this.check.checkboxSecond == false) {
               alert("이용약관에 동의 하세요")
           }
       },

       // 한번 더 정규식 등을 이용해 예외 검사 -> alert로 경고
       checkDataTwice() {
           var middleNumberPattern = /^[0-9]{3,4}$/;
           var endNumberPattern = /^[0-9]{4}$/;

           if(this.inputId.length > 0 && this.inputId.length < 4) {
               alert("아이디 항목이 4자(개) 이상으로 해주십시오.");
           }

           else if(this.password.length > 0 && !(this.count > 2 || (this.password.length >= 8 && this.password.length <= 16))) {
               alert("비밀번호 입력 조건을 다시 한번 확인해주세요.\n\n※ 비밀번호 입력 조건\n- 대소문자/숫자/특수문자 중 2가지 이상 조합,8자~16자\n- 입력 가능 특수문자\n  ~`!@#$%^()_-={}[]|;:<>,.?/\n- 공백 입력 불가능");
           }
           
           else if(this.inputId.length > 0 && !idPattern.test(this.inputId)) {
               alert("대문자/공백/특수문자가 포함되었거나, 숫자로 시작 또는 숫자로만 이루어진 아이디는 사용할 수 없습니다.");
           }

           else if(this.middlePhoneNumber.length > 0 && this.endPhoneNumber.length > 0 &&
           (!middleNumberPattern.test(this.middlePhoneNumber) || !endNumberPattern.test(this.endPhoneNumber))) {
               alert("올바른 휴대전화번호를 입력하세요.");
           }

           else if(this.email.length > 0 && !emailPattern.test(this.email)) {
               alert("입력하신 이메일을 사용할 수 없습니다.");
           }
       },
       async submit() { // 회원가입 제출
        if(this.man == "") this.gender = this.woman;
        else if(this.woman =="") this.gender = this.man;
        return (
        await axios({
          url:  "http://13.209.68.70:3000/customer/signUp/insert", //가상서버 주소
          method: "post", // post 명령어 
          data: {"param":{"ID" : this.inputId, "PW": this.password,"NAME": this.name,"PHONE": this.firstHomeNumber+this.middleHomeNumber+this.lastHomeNumber,
                "CELLPHONE": this.firshPhoneNumber+this.middlePhoneNumber+this.endPhoneNumber, "EMAIL": this.email,"ADRESS_NUM": this.postcode,
                "ADRESS": this.address,"ADRESS_DETAIL": this.addressdetail,"GENDER": this.gender, "BIRTH": this.year+this.month+this.day}}

        }).then((res) => { // 데이터 준 다음 받은 응답
        if(res.data == "OK") {
             alert("회원가입에 성공했습니다.");
        }
        else {
            alert("회원가입에 실패했습니다. 다시 시도해주세요!");
        }
        })
        .catch((e) => {
            console.log(e);
          alert("로그인에 실패했습니다. 계정 정보를 확인해주세요.");
        })
      );
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&family=Poppins:wght@300&display=swap');

.top {
    margin:9% auto;
    text-align:center;
}

/* JOIN US */
#mainText {
    font-family:'Poppins', sans-serif;
    font-size:1.5em;
    font-weight: 500;
    text-align:center;
}

/* 테이블의 캡션 글자 디자인 */
.captionText {
    font-family:'Poppins', sans-serif;
    
    font-weight: 500;
}

/* 기본 버튼 디자인 */
.btn {
    -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0px;
  color: #ffffff;
  font-family:'Noto Sans KR', sans-serif;
  font-size: 0.8em;
  font-weight: bold;
  padding: 1.1% 9%;
  width:27%;
}

/* 네이버버튼 디자인 */
.naver {
  background: #4bba2d;

  margin: 3% auto;
  display: block;
}

.naver:hover {
  background: #85d574;
  color: #ffffff;
}

/* 페이스북버튼 디자인 */
.facebook {
  background: #5a6ea7;
  
  margin: -2.5% auto;
  display: block;
}

.facebook:hover {
  background: #788bb9;
  color: #ffffff;
}

/* 카카오버튼 디자인 */
.kakao {
  background: #fee500;

  margin: 3% auto;
  display: block;
}

.kakao:hover {
  background: #f8ee80;
  color: #ffffff;
}

/* 테이블 조절 */
table {
    width: 80%;
    border: 1px solid #e4e2e2;
    border-collapse: collapse;
}
td {
    border: 1px solid #e4e2e2;
    padding: 0.6%;
    font-size:0.8em;
    font-family: 'Noto Sans KR', sans-serif;
}

/* 폼 배경색 */
#backgroundColor {
    background-color: #faf9f9;
}

/* text 써넣는 곳 기본 크기 지정 */
.box {
    height: 1%;
    width: 15%;
    border-radius:0;
    border: solid #e8e5e8 1px;
    background: #fff;
    font-size: 13px;
    font-family:'Noto Sans KR', sans-serif;
}
/* 주소 칸 */ 
.longSize {
    width: 30%;
}

/* text 써넣는 곳 중간 크기 ex) 폰번호 */
.middleSize {
    width: 7%;
}

/* text 써넣는 곳 제일 작은 크기 ex) 생년월일 중 월, 일 받을 때 */
.smallSize {
    width: 3%;
}

/* 회원구분란 위치 조절 */
.memberSelection {
    display: flex;
  justify-content: center;
    margin: -8% auto;
}

/* 필수정보란 위치 조절 */
.form {
    display: flex;
  justify-content: center;
    margin: 10% auto;
}

/* 추가정보란 위치 조절 */
.additionalForm {
    display: flex;
  justify-content: center;
    margin: -8% auto;
}

/* 전체동의란 위치 조절 */
.information {
    display: flex;
  justify-content: center;
    margin: 11% auto;
}

.informationBox {
    width:100%;
    height:100px;
    overflow:auto;  
    border:1px solid #e4e2e2;
    padding: 0 0.5em;
    background-color: #fff;
}

/* 우편번호 버튼 디자인 */
.zipcode {
  -webkit-border-radius: 2.5;
  -moz-border-radius: 2.5;
  border-radius: 2.5px;
  color: #000000;
  font-size: 12px;
  background: #ffffff;
  padding: 0.1% 0.5%;
  width: 6%;
  border: solid #e4e2e2 1px;

  margin:0.3%;
}

.zipcode:hover {
  background: #faf9f9;
}

/* 회원가입 버튼 */
.completion {
  -webkit-border-radius: 2.5;
  -moz-border-radius: 2.5;
  border-radius: 2.5px;
  color: #ffffff;
  font-size: 13px;
  font-family:'Noto Sans KR', sans-serif;
  background: #2b2a2b;
  padding: 0.7% 0.1%;
  width:10%;

  margin: -10% auto;
  display: block;
}

.completion:hover {
    border: solid #e4e2e2 1px;
  background: #faf9f9;
  color:black;
  text-decoration: none;
}

/* 라디오, 체크 버튼이 옆 글자와 안맞는 경우가 있어 position을 이용해 위치 보정 */
#position {
    margin-top: -0.5%;
	vertical-align: middle;
}

/* 전화번호 셀렉박스 디자인 */
.form-design {
    border: solid #e4e2e2;
    width: 7%;
    height: 0.1%;
}

/* 테이블 정보 칸 넓이 ex) 이름 */
.form-width {
    width:12%;
}

/* 주소란에는 정보 입력 칸이 많음 -> 위치 조절 */
.address-position {
    margin: 0.3%;
}

td{
    text-align : left;
}



#zipcodeButtonPosition {
    margin-top:-0.3%;
}

</style>