<template>
 <div id = "set" >SET</div>
<div class = "container">
    <div id = "contents">
        <div class="row"><!-- 이미지 출력관련 클래스 -->
            <div class="col-md-3 col-lg4" v-for="(product, index) in products" :key = "index">
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
            {image : require('../assets/set2개.jpg'), title : '에피민트 2개 Set', price : '18,900원', saleprice : '19,900원'},
            {image : require('../assets/set3개.jpg'), title : '에피민트 3개 Set', price : '24,900원', saleprice : '31,900원'},
            {image : require('../assets/set4개.jpg'), title : '에피민트 4개 Set', price : '31,500원', saleprice : '42,800원'},
            {image : require('../assets/set5개.jpg'), title : '에피민트 5개 Set', price : '37,500원', saleprice : '50,000원'}
        ] 
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


</style>