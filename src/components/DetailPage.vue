<template>
<body>
<div class="row position">
    <div class="left" v-for="(products, index) in imageList" :key ="index">
        <img :src="products.image">
        <img :src="products.gif" >
        <img src="https://epimint.com/web/upload/NNEditor/20210817/copy-1629200984-scooping_gif2Blogo.gif">
        <img src="https://epimint.com/web/upload/NNEditor/20210824/%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-(%ED%95%98%EB%8B%A8)-%EC%A0%80%EC%9A%A9%EB%9F%89_shop1_143603.gif">
        <img src="https://epimint.com/web/upload/NNEditor/20210824/3_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80(%EA%B3%B5%ED%86%B5)_pc_shop1_143622.jpg">
        <img src="https://epimint.com/web/upload/NNEditor/20210616/0%EA%B3%B5%ED%86%B5_5%EB%B2%88gif_shop1_134428.gif">
        <img src="https://epimint.com/web/upload/NNEditor/20210824/4_%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%B5%9C%ED%95%98%EB%8B%A8-(%EB%B0%B0%EC%86%A1)_pc_shop1_143742.jpg">
        <img src="https://epimint.com/web/upload/NNEditor/20210824/%EC%B5%9C%ED%95%98%EB%8B%A8_%EA%B3%A0%EA%B0%9D%EC%84%BC%ED%84%B0_shop1_143745.jpg">
    </div>
    <aside class="right">
        <div class="form korean-text" v-for="(product, index) in productlist.slice(0,1)" :key ="index">
            <span class="title-text">{{product.set_name}}</span><br><br>
            <span id="productPrice">{{product.price}}원</span><br>
            <span id="saleprice">{{product.saled_price}}원</span><br><br>
            <span class="small-text">필수1</span><br>
            <select class="form-design small-text" @change="changeSelectBox"> 
                <option selected disabled >- [필수] 옵션을 선택해 주세요 -</option>
                            <option value="1" disabled>--------------------</option>
                            <option id="value" value="2">{{product_name}}</option>
            </select><br>
            <span class="small-text">선택1</span><br>
            <select class="form-design small-text" @change="showList($event)">
                <option selected disabled>- [필수] 옵션을 선택해 주세요 -</option>
                            <option value="1" disabled>--------------------</option>
                            <option id="additionalList" v-for="(product, index) in list" :key = "index" :value="product">{{product}}</option>
            </select><br><br>

            <div>
                <li class="list" id="chipList" >{{set_name}}<img @click="foldSelectedProduct($event)" :value="selectedProduct[0]" class="close-button" id="closeChipButton" src="https://img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif"><br>{{product_name}}/{{selectedProduct[0]}}<br></li>
                <li class="list" id="cookieList">{{set_name}}<img @click="foldSelectedProduct($event)" :value="selectedProduct[1]" class="close-button" id="closeCookieButton" src="https://img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif"><br>{{product_name}}/{{selectedProduct[1]}}<br></li>
                <li class="list" id="doublechocoList">{{set_name}}<img @click="foldSelectedProduct($event)" :value="selectedProduct[2]" class="close-button" id="closeDoublechocoButton" src="https://img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif"><br>{{product_name}}/{{selectedProduct[2]}}<br></li>
                <li class="list" id="poppingList">{{set_name}}<img @click="foldSelectedProduct($event)" :value="selectedProduct[3]" class="close-button" id="closePoppingButton" src="https://img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif"><br>{{product_name}}/{{selectedProduct[3]}}<br></li>
                <li class="list" id="rainbowList">{{set_name}}<img @click="foldSelectedProduct($event)" :value="selectedProduct[4]" class="close-button" id="closeRainbowButton" src="https://img.echosting.cafe24.com/design/skin/default/product/btn_price_delete.gif"><br>{{product_name}}/{{selectedProduct[4]}}<br></li>
            </div>

            
            <span class="english-text">TOTAL : </span><span class="price-text">{{priceCount}}</span><span class="middle-text"> ({{count}}개)</span>
            <br><br>
            <input type="button" value="구매하기" class="bottom-button purchase-button">
            <input type="button" value="장바구니" class="botton-button bucket-button">

        </div>
    </aside>
</div>
</body>
</template>

<script>
var pattern=/,/gi;

import axios from 'axios'
export default {
    
    data(){
        
    return{
        imageList :[],
        productlist :[],

        list:['01 민트 초코칩', '02 민트 초코쿠키', '03 민트 더블초코', '04 민트 초코팝핑', '05 민트 레인보우멜츠'],
        product_name: "01 민트 초코칩",
        price: "19,900",
        saled_price: "18,900",
        selectedProduct: [],

        priceCount:0,
        count:0,
    }
    },
    methods:{    
        countPrice() {
            var countNumber = Number(this.priceCount);

            countNumber += Number(saled_price.replace(',', ""));
            this.priceCount = String(countNumber);
        },
        foldSelectedProduct(event) {
            switch(event.target.value) {
                case(this.list[0]):
                    document.querySelector('#chipList').style.display = "none";
                    break;
                 case(this.list[1]):
                    document.querySelector('#cookieList').style.display = "none";
                    break;
                 case(this.list[2]):
                    document.querySelector('#doublechocoList').style.display = "none";
    
                    break;
                 case(this.list[3]):
                    document.querySelector('#poppingList').style.display = "none";
                    break;
                 case(this.list[4]):
                    document.querySelector('#rainbowList').style.display = "none";
                    break;
            }
        },

        changeSelectBox() {
            $('#additionalList').show(); 
        },

        showList(event) {
            switch(event.target.value) {
                case(this.list[0]):
                    document.querySelector('#chipList').style.display = "block";
                    this.selectedProduct[0] = event.target.value;
                    this.count++;
                    this.priceCount += Number(this.saled_price.replace(',', ""));
                    break;
                 case(this.list[1]):
                    document.querySelector('#cookieList').style.display = "block";
                    this.selectedProduct[1] = event.target.value;
                    this.count++;
                    this.priceCount += Number(this.saled_price.replace(',', ""));
                    break;
                 case(this.list[2]):
                    document.querySelector('#doublechocoList').style.display = "block";
                    this.selectedProduct[2] = event.target.value;
                    this.count++;
                    this.priceCount += Number(this.saled_price.replace(',', ""));
                    break;
                 case(this.list[3]):
                    document.querySelector('#poppingList').style.display = "block";
                    this.selectedProduct[3] = event.target.value;
                    this.count++;
                    this.priceCount += Number(this.saled_price.replace(',', ""));
                    break;
                 case(this.list[4]):
                    document.querySelector('#rainbowList').style.display = "block";
                    this.selectedProduct[4] = event.target.value;
                    this.count++;
                    this.priceCount += Number(this.saled_price.replace(',', ""));
                    break;
            }
        }

    },
   mounted() { 
        this.imageList = axios({
          method: "post",
          url: "http://13.209.68.70:3000/product/flavor/Detail",
          data: {"param": "01 민트 초코칩"}
        }).then(res =>  {
        console.log(res.data)
        this.imageList = res.data
        
        }).catch((e) => {
          console.log(e);
        })
        .data,

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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400&family=Poppins:wght@300&display=swap');

.korean-text {
    font-family: 'Noto Sans KR', sans-serif;
}

.english-text {
    font-family: 'Poppins', sans-serif;
    font-size:90%;
}

.title-text {
    font-size: 130%;
}

.price-text {
    font-size: 150%;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
}

.middle-text {
    font-size:85%;
    font-family: 'Poppins', sans-serif;
}

.small-text {
    font-size:70%;
}

.row {
    width: 100%;
}

.position {
    padding-top: 10%;
}

.left {
    padding:0%;
    width: 70%;
    position:relative;
    display: inline-block;

}

.right {
    margin: auto 69.4%;
    width: 30%;
    height: 100%;
    position: fixed;   
    display:inline-block;
}

.form {
    margin: 1% 12%;
    text-align: left;
}

.form-design {
    width: 109%;
    height: 0.1%;
}

.purchase-button {
  color: #ffffff;
  font-size: 13px;
  background: #000000;
  width:110%;
  padding: 4% 35%;
  border: solid #d4d4d4 1px;
  margin:1%;
}

.purchase-button:hover {
  background: #ebebeb;
  color:#000000;
}

.bucket-button {
  color:#000000;
  font-size: 13px;
  background: #fff;
  width:110%;
  padding: 4% 35%;
  border: solid #d4d4d4 1px;
  text-decoration: none;
  margin:1%;
}

.bucket-button:hover {
  background: #ebebeb;
  color:#000000;
}

#productPrice {
    color:#9c9c9c;
    text-decoration:line-through;
    font-family: 'Poppins', sans-serif;
    font-size: 110%;
}

#saleprice {
    font-family: 'Poppins', sans-serif;
    font-size: 110%;
}

select {
    border: none;
    padding: 1.5%; 
    margin: 2%;
    background-color:#f6f5f5;
    border: solid #fefcfc 1px;
}

#numberFormDesign {
    width: 16%;
    height: 0.1%;
}

.list {
    width: 110%;
    display:none;
    font-size:70%;
    margin: 3% 0%;
}

.close-button {
    position:relative;
    top:-3%;
    left:62%;
}


</style>