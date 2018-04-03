<template>

  <div id="app">
     <header>
        <div class="hea">
          <div class="hea-left">REALSTATE地产，您居家置业最信赖的地产！</div>
          <div class="hea-rigth"><img src="./assets/fen.png"/></div>
        </div>
     </header>
     <nav>
        <div class="nav">
            <div class="nav-left">
                <img src="./assets/login.png"/>
            </div>
            <div class="nav-con">
                <router-link to="/">首页</router-link> 
                <router-link to="/new/0">全新楼盘</router-link>
                <router-link to="/new/1">二手楼盘</router-link>
                <router-link to="/new/2">全新商铺</router-link>

            </div>
            <div class="nac-rig">
                <span>1423454</span><span class="me">联系我们</span>
            </div>
        </div>
     </nav>
     <section>
        <div class="lujn">首页>{{}}</div>
     </section>
     <ul class="aa">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
     </ul>
     <nav>
       <router-view></router-view>
     </nav>
     
      
  </div>
</template>

<style>
*{
  margin:0; padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  height:auto;
}
.app{
  width:1200px;
  margin:0 auto;
}
  header{
    width:100%;
    height:50px;
    line-height:50px;
    background:#262626;
    color:#e8e8e8;
    font-size:10px;
  }
  .hea{
    width:1200px;
    margin:0 auto;
    overflow:hiddem;
  }
  .hea-left{
    width:30%;
    float:left
  }
  .hea-rigth{
    width:20%;
    padding-top:10px;
    float:right;
  }
  nav{
     width:100%;
  }
  .nav{
    width:1200px;
    margin:0 auto;
    overflow:hidden;
    padding:20px 0;
  }
  .nav-left{
      width:15%;
      float:left;
  }
  .nav-con{
      float:left;
      margin-left:50px;
      padding:25px 0;
      font-size:14px;
  }
  .nac-rig{
      float:right;
      margin-left:20px;
      padding-top:20px;
      font-size:18px;


  }
  .nac-rig span{
      padding:10px;
  }
  .nac-rig .me{
      background:rgb(58, 121, 232);
      border-radius:10px;
      color:#fff;
  }
  .nav-con a{
      padding-bottom:10px;
      margin:3px 20px;
      text-decoration:none;
      color:#000;
}
.nav-con a.router-link-exact-active {
  color: #42b983;
}

section{
  width:100%;
  background:#f4f4f4;
}
.lujn{
  width:1200px;
  line-height:80px;
  font-size:12px;
  margin:0 auto;
}
.aa{
    position:fixed;
    right:0;
    top:40%;
    background:red;
}
.aa li{
  display:block;
  width:30px;
  height:30px;
  padding:5px;
  line-height:30px;
  text-align:center;
}

</style>
