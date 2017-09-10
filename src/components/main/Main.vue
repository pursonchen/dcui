<template>
<div>

<ul class="mainmenu">
  <li id="DCSelf">
  <router-link to="/dcself">
    <p>
      <img src="./M1.png"><span>个人订餐</span>
    </p>
  </router-link>
 </li>
  <li id="DC4Mul">
  <router-link to="/dc4mul">
    <p>
      <img src="./M2.png"><span>批量订餐</span>
    </p>
  </router-link>
  </li>
   <li id="DCDetail">
  <router-link to="/dcdetail">
    <p>
      <img src="./M6.png"><span>订餐查询</span>
    </p>
  </router-link></li>
<li id="WeekDishs">
  <router-link to="/weekdishs">
    <p>
      <img src="./22.png"><span>每周菜谱</span>
    </p>
  </router-link></li>
  <li id="Reception">
  <router-link to="/reception">
    <p>
      <img src="./Reception.png"><span>接待登记</span>
    </p>
  </router-link></li>
  <li id="CTQues">
  <router-link to="/ctques">
    <p>
      <img src="./30.png"><span>满意度调查</span>
    </p>
  </router-link></li>
 </ul>
<br>
<div id="divMyGG">
  
  <div style=" width: 96%; margin-left: 2%;">
    <div style=" width: 96%; margin-left: 2%;">
   <el-alert
    title="关于食堂订餐时间的通知"
    type="info"
    description="文字说明文字说明文字说明文字说明文字说明文字说明"
    show-icon>
  </el-alert>
    </div>
  </div>
</div>

<div>
  <div class="copyright" style="color: black">Powered By Purson ©2017</div>
</div>
<!--下面加点高度，好滚动显示-->
<div style="height: 40px;"></div>
</div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
    border: 0;
}

ol, ul {
    list-style: none outside none;
    margin: 0;
    padding: 0;
}

a {
    color: #000000;
    text-decoration: none;
}

.clr {
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
}

.copyright {
    margin-top: 20px;
    padding: 8px;
    text-align: center;
    font-size: 14px;
    color: #fff;
    position: relative;
    z-index: 1;
}

    .copyright a {
        color: #fff;
    }

h2 {
    font-size: 16px;
}

 .mainbg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

     .mainbg img {
        width: 100%;
        height: 100%;
    }

 .mainmenu:after {
    text-align: center;
    clear: both;
    content: " ";
    display: block;
}



   



#insert1, #insert2 {
    position: relative;
}



.copyright {
    color: #000;
}

    .copyright a {
        color: #000;
    }


 .mainmenu li a img{ margin: 1px auto 8px;width: 40px;}
 .mainmenu:after { clear: both; content: " "; display: block; }
 .mainmenu li{ float:left;margin-left: 2.5%;margin-top: 3%;width: 46%;  border-radius:4px; overflow:hidden;}
 .mainmenu li p {text-align: center;color: #fff;margin: 20px 0;}
 .mainmenu li a {display: block;text-align: center;overflow: hidden;}
 .mainmenu li a img {width: 30%;height: 30%;}
 .mainmenu li a span{ display:block; height:5px; line-height:15px; font-size:14px; }

 .mainmenu li:nth-child(8n+1) {background-color: #36A1DB;}
 .mainmenu li:nth-child(8n+2) {background-color: #678ce1;}
 .mainmenu li:nth-child(8n+3) {background-color: #8c67df;}
 .mainmenu li:nth-child(8n+4) {background-color: #84d018;}
 .mainmenu li:nth-child(8n+5) {background-color: #14c760;}
 .mainmenu li:nth-child(8n+6) {background-color: #f3b613;}
 .mainmenu li:nth-child(8n+7) {background-color: #ff8a4a;}
 .mainmenu li:nth-child(8n+8) {background-color: #fc5366;}
</style>
