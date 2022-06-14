<template>
 <div id = "set" >SET</div>
<div class = "container">
    <div id = "contents">
        <transition appear name = "fade">
        <div class="row"><!-- 이미지 출력관련 클래스 -->
            <div class="col-md-3 col-lg4" v-for="(product, index) in products" :key = "index">
            <img :src="product.image" class="img-fluid">
            <div id = "name">{{product.title}}</div> <!-- 상품명 -->
            <span id = "sale-price">{{product.saleprice}}</span><!-- 세일가격 -->
            <span id = "price">&nbsp;&nbsp;&nbsp;{{product.price}}</span><!-- 파는가격 -->    
            <br><br><br><br>               
            </div>
        </div>
        </transition>
         <div class = "page-move">
            <a class="btn btn-outline-secondary btn-sm" href="https://epimint.com/product/list.html?cate_no=24">FIRST</a>
            <a class="btn btn-outline-secondary btn-sm" href="https://epimint.com/product/list.html?cate_no=24">PREV</a>
            <span id = "current-page">{{1}}</span>
            <a class="btn btn-outline-secondary btn-sm" href="https://epimint.com/product/list.html?cate_no=24">NEXT</a>
            <a class="btn btn-outline-secondary btn-sm" href="https://epimint.com/product/list.html?cate_no=24">LAST</a>
        </div>
    </div>
</div>
    
</template>


<script>
import axios from 'axios'
export default { 
    methods:{    
        data(){
    return {
            loginid :'',
            loginpw :'',
        }
    },

    async login() { // 로그인 함수 
        return (
        await axios({
          url:  "https://95efaac5-e1c6-43d1-b04a-e97f801c4e7e.mock.pstmn.io/test", //가상서버 주소
          method: "post", // post 명령어 
          data: {"id" : this.loginid, "pw": this.loginpw}

        }).then((res) => { // 데이터 준 다음 받은 응답
            console.log(res.status)
            alert("로그인에 성공했습니다.")
            if(res.status == 200){
                this.$router.push({name: 'main'})
            }
        })
        .catch((e) => {
          alert("로그인에 실패했습니다. 계정 정보를 확인해주세요.");
        })
      )
    }

  }
}
</script>

<style>
#set{/*상단 set 문구 */
    padding-top : 150px;
    font-size : 30px;
    font-weight : bold;
}
#name{/* 상품이름*/
    padding-top : 15px;
    font-weight : bold;
    font-size : 20px;
}
#price{/* 상품 가격*/
    font-size : 18px;
    font-weight : bold;
}
#sale-price{/*세일 가격*/
    text-decoration : line-through;
    
}
.row{
    padding-top : 80px;
}
div {
    display: block;
}

.fade-enter-from{
    opacity: 0;
  transform: translateY(30px);
}
.fade-enter-active{
    transition: all 2s ease;
}
.fade-leave-to{
    opacity: 0;
  transform: translateY(30px);
}
.fade-leave-active{
    transition: all 2s ease;
}
</style>