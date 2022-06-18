<template>
 <div id = "flavor" >
        FLAVOR
    </div>
<div class = "container">
    <div id = "contents">
        <transition appear name = "fade">
        <div class="row"><!-- 이미지 출력관련 클래스 -->
            <div class="col-md-3 col-lg4" v-for="(product, index) in productlist" :key = "index">
                <router-link to="detailPage">
            <img :src="product.image" class="img-fluid">
            <div id = "name">{{product.set_name}}</div> <!-- 상품명 -->
            <span id = "sale-price">{{product.price}}</span><!-- 세일가격 -->
            <span id = "price">&nbsp;&nbsp;&nbsp;{{product.saled_price}}원</span><!-- 파는가격 -->    
            <br><br><br><br>          
                </router-link>
            <router-view/>    
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
    data(){
        
    return{
        productlist :[]
    }
    },
    methods:{    
    
},
   mounted() { 
        this.productlist = axios({
          method: "get",
          url: "http://13.209.68.70:3000/product/flavor",
          data: {}
        }).then(res => {
        console.log(res.data)
        this.productlist = res.data
        
        }).catch((e) => {
          console.log(e);
        })
        .data
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