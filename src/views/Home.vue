<template>
  <div class="home">
   	<div class="con">
      <div class="con-con">
        <div><img src="../assets/lunbo1.jpg" /></div>
      </div>
   	</div>
    <div class="home">
      <div class="bottom-con">
        <div class="left">
            <div class="left-one">
                <div> <img src="../assets/01.jpg" />
                      <img src="../assets/01.jpg" />
                </div>
                <div>
                      <img src="../assets/02.jpg" />
                      <img src="../assets/02.jpg" />
                </div>
            </div>
            <div class="left-two">
                <div class="new">全新楼盘</div>
                <p class="p">-new Apartment-</p>
            </div>
        </div>
        <div class="rigth"></div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>

export default {
  
  data(){
    return{}
  },
  methods:{
  	
  }
}
</script>
<style>
.home{
  width:100%;
  height:auto;
}
.con {
	width:1200px;
  margin:0 auto;
  overflow:hidden;
}
.con-con div{
	width:3600px;
  overfloaw:hidde;
}
.con-con{
  float:left;
}
.con-con img{
	width:100%;
}
.bottom-con{
  width:1200px;
  margin:0 auto;
}
.left{
  width:75%;
  float:left;
  margin:30px 0;
}
.left-one{
  width:100%;
 
}
.left-one div{
  width:100%;
  overflow:hidden;
  margin-bottom:10px;
}
.left-one div img{
  width:45%;
  margin-left:15px;
  float:left;
}
.left-two{
  width:92%;
  margin-top:30px;
  margin-left:15px;
  background:#F7F7F7;
  padding:20px 10px; 
  box-sizing:border-box;
}
.rigth{
  width:22%;
  background:green;
  float:right;
}
footer{
  width:100%;
  height:300px;
}
.new,.p{
    text-align:center;
}.new{
  font-famliy:'微软雅黑';
  font-size:22px;
}.p{
  font-size:14px;
}
</style>