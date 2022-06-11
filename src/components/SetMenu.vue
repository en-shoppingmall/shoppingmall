<template>
<div class = "container">
    <div id = "contents">
    <span class = "title" >SET</span>
  
  <div class="row">
        <div class="col-md-4 col-lg4" v-for="(product, index) in products" :key = "index">
           <img :src="product.image" class="img-fluid">                    
        </div>
</div>
        
    </div>

</div>
    
</template>


<script>
export default {
    data(){
    return{
        products:[ 
            {image : require('../assets/set2개.jpg'), title : '에피민트 2개 Set', price : '18,900원', salsprice : '19,900원'},
            {image : require('../assets/set3개.jpg'), title : '에피민트 3개 Set', price : '24,900원', salsprice : '31,900원'},
            {image : require('../assets/set4개.jpg'), title : '에피민트 4개 Set', price : '31,500원', salsprice : '42,800원'},
            {image : require('../assets/set5개.jpg'), title : '에피민트 5개 Set', price : '37,500원', salsprice : '50,000원'}
        ] 
    }
  }
}
</script>
<style>

.title{
    margin-top : 50px;
    font-size : 30px;
    font-weight : bold;
}
.col-md-2{
	width: 300px;
    height : 300px;
}
div {
    display: block;
}

#contents{
    margin: 0 auto;
    padding: 0 80px;
   
}
</style>