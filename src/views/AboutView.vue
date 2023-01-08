<template>
  <div class="about">
    <!-- t头部部分的代码 -->
    <div class="main">
      <van-image
  width="100"
  round
  height="100"
  lazy-load
  src="https://img01.yzcdn.cn/vant/cat.jpeg"
/>
<span>立即登录</span>
    </div>
<!--卖座卷跟余额部分  -->
  <div class="paye">
    <div>
      <div>0张</div>
      <div>卖座卷</div>
    </div>
    <div>
      <div>￥0</div>
      <div>余额</div>
    </div>
  </div>
<!-- 写图标订单结合 -->
<div class="icon_list">
<div class="first_icons">
  <template >
    <div> <img src="../assets/订单.png" alt=""></div>
    <div>
      电影订单
    </div>
    <div>
      <van-icon name="arrow" />
    </div>
  </template>
</div>
<div class="first_icons">
  <template >
    <div> <img src="../assets/红包.png" alt=""></div>
    <div>
      组合红包
    </div>
    <div>
      <van-icon name="arrow" />
    </div>
  </template>
</div>
<div class="first_icons">
  <template >
    <div> <img src="../assets/客服.png" alt=""></div>
    <div>
      帮助与客服
    </div>
    <div>
      <van-icon name="arrow" />
    </div>
  </template>
</div>
<div class="first_icons">
  <template >
    <div> <img src="../assets/设置.png" alt=""></div>
    <div>
      设置
    </div>
    <div>
      <van-icon name="arrow" />
    </div>
  </template>
</div>

</div>
  </div>
</template>
<style scoped>
/* .about{
  background: #333333;
} */
.main{
  text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(../assets/bg.a5bdd690.png);
    background-size: cover;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    /* justify-content: space-around; */
  /* display: flex;
  text-align: center;
  line-height: 100px;
  width: 100%;
  height: 200px;
  align-items: center;
  background: url(../assets/bg.a5bdd690.png); */
}
.main>img{
  margin-top: 44px;
}
.main>span{
  margin-left: 30px;
}
.paye{
  width: 100%;
  height: 80px;
  background: #fff;
}
.paye>div:nth-child(1){
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
}
.paye>div:nth-child(2){
  float: left;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-evenly;
}
.icon_list{
  margin-top: 10px;
  width: 100%;
  /* height: 200px; */
  background: #fff;
}
.first_icons{
  display: flex;
  padding: 0 10px;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;

}
.first_icons>div:nth-child(1){
      width: 20px;
      height: 20px;
}
.first_icons>div:nth-child(1)>img{
  width: 100%;
  height: 100%;
}
.first_icons>div:nth-child(2){
  width: 80%;
}
</style>