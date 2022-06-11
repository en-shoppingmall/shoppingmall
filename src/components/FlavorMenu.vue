<template>
 <div id = "flavor" >FLAVOR</div>
<div class = "container">
    <div id = "contents">
        <div class="row"><!-- 이미지 출력관련 클래스 -->
            <div class="col-md-3 col-lg2" v-for="(product, index) in products" :key = "index">
            <img :src="product.image" class="img-fluid">
            <div id = "name">{{product.title}}</div> <!-- 상품명 -->
            <span id = "sale-price">{{product.saleprice}}</span><!-- 세일가격 -->
            <span id = "price">&nbsp;&nbsp;&nbsp;{{product.price}}</span><!-- 파는가격 -->
            <br><br><br><br>                
            </div>
        </div>
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
export default {
    data(){
    return{
        products:[ 
            {image : require('../assets/01초코칩.jpg'), title : '01 민트 초코칩(2개 set)', price : '18,900원', saleprice : '19,900원'},
            {image : require('../assets/02초코쿠키.jpg'), title : '02 민트 초코쿠키(2개 set)', price : '18,900원', saleprice : '19,900원'},
            {image : require('../assets/03더블초코.jpg'), title : '03 민트 더블초코(2개 set)', price : '18,900원', saleprice : '19,900원'},
            {image : require('../assets/04초코팝핑.jpg'), title : '04 민트 초코팝핑(2개 set)', price : '18,900원', saleprice : '19,900원'},
            {image : require('../assets/05멜츠.jpg'), title : '05 민트 레인보우멜츠(2개 set)', price : '18,900원', saleprice : '19,900원'}
        ] 
    }
  }
}
</script>

<style>
#flavor{/*상단 set 문구 */
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
#current-page{
    margin: 0 2 2-1px;
    padding-left : 10px;
    padding-right : 10px;
    border: 1px solid #e8e8e8;
    font-size: 21px;
    color: #757575;
    vertical-align: top;
    background : #f1f1f1;
}
.row{
    padding-top : 80px;
}
div {
    display: block;
}
a{
    text-decoration : none;
    color: #333;
}


</style>