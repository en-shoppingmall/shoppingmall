<template>
    <div id = "login-frame">
        <div id = "login-top"><!-- 로그인 화면 상단-->
            <div class="back-button" onclick="history.back();return false;">뒤로가기</div>
            <h1 id = "go-home">
                <router-link to="/">
                <img src="../assets/epimint.jpg" art="에피민트" id="epimint">
                </router-link>   <!-- 홈 링크 --> 
                <router-view/>
            </h1>
        </div>

        <hr width = "100%" color = "gray"> <!-- 중간에 회색 실선 -->

        <div id = "login-middle"><!-- 로그인 화면 중간 -->
            <div id = "kakao-login">
                <h3>로그인</h3>
                <p id = "text">아이디와 비밀번호 입력하기 귀찮으시죠?<br>
                    카카오로 1초 만에 로그인 하세요.
                </p>
                <a class="Kakao-button" onclick="MemberAction.kakaosyncLogin('f73419b2103fed20961340e22f4d0e46')">
                카카오 1초 로그인/회원가입</a>
            </div>
            <br>
             <hr width = "100%" color = "gray"> <!-- 중간에 회색 실선 -->

             <div id = "member-login">
                <input id = "id" type = "text" v-model = "loginid" placeholder="아이디">
                <input id = "password" type = "password" v-model = "loginpw" placeholder="비밀번호">
                <!-- v-model은 양방향으로 입력값 교환 가능?, placeholder는 입력하면 써져있는 값 지워짐-->
            </div>
                <button type = "button" id = "login-button" @click = "userlist">기존 회원 로그인</button>
                <div class="de" v-for="(user, index) in userinfor" :key = "index">
                    {{user.product_name }}</div><br><br><br><br><br>

            <div id = "search-join">
                <a href = "https://epimint.com/index.html">아이디 찾기 | </a>
                <a href = "https://epimint.com/index.html">비밀번호 찾기</a>
                <a href = "https://epimint.com/index.html" id = "join">가입하기</a>
            </div>
            <hr width = "100%" color = "black; width = 1px;"> <!-- 중간에 회색 실선 -->
        </div>    

        <footer id = "login-bottom"><!-- 로그인 화면 하단 -->
        <p class = "description">
        <span style="font-weight : bold">카카오 1초 로그인/회원가입이란?</span><br>
        카카오 싱크를 활용한 간편 로그인/가입 기능입니다.
        </p>
        </footer>
    </div>
</template>

<script>      
import axios from 'axios'
export default {
    data(){
    return {
            userinfor : []
        }
    },
    methods:{      
        async userlist() {
        this.userinfor = await this.api(
        "https://95efaac5-e1c6-43d1-b04a-e97f801c4e7e.mock.pstmn.io/test",
        "get",
        {}
      )
      console.log(this.userinfor.id);
    },
    async api(url, method, data) {
      return (
        await axios({
          method: method,
          url: url,
          data: data,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
}
</script>

<style  scoped>
#login-frame{ /* 제일 큰 틀 */
    width: 600px;
    margin: 0 auto;
}
#epimint{ /* 홈 화면 가는 이미지 크기 조정 */
    width : 120px;
    height : 30px;
}
#go-home{ /* 홈으로 가는 문구(epimint) 조정 */
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0em;
    margin-inline-end: 0px;
    font-weight: bold;
}
.back-button{ /* 뒤로가기 */

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
#login-middle{ /* 중간 화면 여백 설정 */
    padding: 0 70px;
}
#kakao-login{ /* 카카오 로그인 위에 공간 설정*/
    margin-top : 50px;
}
#text{ /* 카카오 로그인 버튼 위에 글씨 왼쪽 정렬 */
    text-align : left;
}
.Kakao-button{ /* 카카오 로그인 버튼 */
    text-decoration : none;
    display: inline-block;
    margin-top: 15px;
    padding: 0 0 0 40px;
    background-color: #fee500;
    font-size: 15px;
    color: #111;
    background-image: url(//storage.keepgrow.com/admin/campaign/20200611043456590.svg);
    background-repeat: no-repeat;
    background-size: 18px;
    background-position: 15px;
    width: 100%;
    line-height: 60px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
}
#member-login{
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    overflow: hidden;
}
input{
    padding: 0 15px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    border: none;
    font-size: 14px;
    color: #000;
    box-sizing: border-box;
}
#id{
 border-bottom: 1px solid #e1e1e1; /* 아이디 칸에 선 그어줌*/
}
#search-or-join{ /* 아이디 비밀번호 찾기, 회원가입 링크 줄*/
    width : 100%;
}
#search-join{ /* 아이디 비밀번호 찾기, 회원가입 링크묶은 것*/
    margin-top : 20px;
    text-align : left;
}
#join{/* 회원가입 링크*/
    float: right;
}
#login-button{ /* 로그인 버튼*/
    width: 100%;
    height: 50px;
    background : #31363d;
    color: #fff;
    border-radius: 5px;
    margin-top : 20px;
    border : 0;
    font-weight : bold;
}
#login-bottom{ /* 카카오 관련 설명 박스*/
    margin-top : 50px;
    padding: 0 70px;
    width : 100%;
}
.description{
    text-align : left;
}
dir{
    display: block;
}
hr{
  margin-left : auto;
  margin-right : auto;
}
h3{
    color: #222;
    text-align : left;
}
a{
    text-decoration : none;
    color : black;
    font-size : 13px;
}
</style>
