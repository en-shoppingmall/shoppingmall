<template>
    <div class = "container">
        <div top-box>
        <div id = "title">FIND ID</div>
        <p id = "description">가입하신 방법에 따라 아이디 찾기가 가능합니다.<br>
        법인사업자 회원 또는 외국인 회원의 경우 법인명과 법인번호 또는 이름과 등록번호를 입력해 주세요.</p>
        </div><br>

        <div class = "content-box">
            <form id = "user-select">    
                <div class = "user-area">
                    <div id = "user">회원유형</div>
                        <select class ="search" v-model ="name" @change = "chageSelect($event)">
                            <option disabled value="">선택</option>
                            <br>
                            <option value="id">아이디찾기</option>
                            <option value="pw">비밀번호찾기</option>
                        </select>    
                </div>
                <div class = "user-area">
                    <div id = "id" style = "margin-top : 35px;">{{optionName}}</div>
                    <input type="text" class="search" v-model="id" style = "margin-top : 30px;">&nbsp;{{idMessage}}
                </div>
                <div class = "user-area">
                    <div id = "email" style = "margin-top : 10px;">이메일</div>
                    <input type="text" class="search" v-model="email">&nbsp;{{emailMessage}}
                </div>
                <button type = "button" class = "enter" @click="submit">확인</button>
            </form>
        </div>
        
    </div>
</template>



<script>
import axios from 'axios'
export default { 
        data(){
        return{
            nameMessage : '',
            idMessage : '',
            emailMessage : '',
            searchOption : '',
            name : '',
            optionName:"이름",
            id:'',
            email:'',
            searchNameOrId:''   
        }
        },
        methods:{    
        chageSelect(event){
            if(event.target.value == "id"){
                this.optionName = "이름"
            }
            else{
                this.optionName = "아이디";
            }
            this.searchNameOrId = this.optionName;
        },
        submit(){
            if(this.id == '' || this.email == '')
            {
                alert("누락된 입력이 있습니다.");
            }
            else this.searchInformation();
        },
        async searchInformation() { // 로그인 함수 
        return (
        await axios({
          url:  "http://13.209.68.70:3000/customer/find/ID", //가상서버 주소
          method: "post", // post 명령어 
          data: {"param": [this.id, this.email]}
        }).then((res) => { // 데이터 준 다음 받은 응답
            alert(JSON.stringify(res.data))
        })
        .catch((e) => {
          alert("일치하는 계정이 없습니다.");
        })
      )
    }
    },  
}
</script>


<style scoped>
#user{
    padding-right : 26%;
}
#description{
    font-size : 13px;
    opacity : 0.5;
    font-weight : bold;
    padding-top : 20px;
}
#id{
    padding-right : 102px;
}
#email{
    padding-right : 30%;
}
.user-select{
    margin : 0;
}
.container{
    padding-top : 150px;
    font-size : 30px;
}
.user-area{
    font-size : 14px;
    width : 300px;
    margin: 0 auto;
    display : flex;
}
.search{
    display : flex;
    flex : 2;
    text-align : left;
    width : 40%;
    padding : 3px;
    margin : 3px;
    opacity : 0.5;
}
.enter{
    width : 300px;
    margin: 0 auto;
    margin-top : 2%;
    padding : 0.5%;
    font-size : 20px;
    border : 1px;
    color : white;
    background : #333;
}
.enter:hover{
    background : #ddd;
    color : #333;
}
</style>
