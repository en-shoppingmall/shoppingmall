<template>
 <div class = "top-menu">
    <h3 class = "top-head">
      <router-link to="/">
      <img src="../assets/epimint.jpg" art="에피민트" class="home-black">
      <img src="../assets/epimintWhite.jpg" art="에피민트" class="home-white">
      </router-link>   <!-- 홈 링크 --> 
      <router-view/>
    </h3>
    <ul class = "top-left-menu">
        <li>
           <router-link to="/set">SET</router-link>
            <router-view />
        </li>
        <li>
           <router-link to="/flavor">FLAVOR</router-link>
            <router-view/>
        </li>
        <li>
          <router-link to="/event">EVENT</router-link>   <!--이벤트 페이지 링크 --> 
          <router-view/>
        </li>
        <li>
          <a href = "https://epimint.com/index.html">REVIEW</a>
        </li>
      </ul>

    <div class = "right-menu">
      <ul>
        <li>
            <router-link to="/login">LOGIN</router-link>   <!--로그인 페이지 링크--> 
            <router-view/>
        </li>
        <li>
            <router-link to="/signup">JOIN</router-link>
            <router-view />
        </li>
      </ul>    
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {   
    data(){
    return{
        
        }
    },
    methods:{    
    
},
  
  }

</script>

<style>

</style>