<template>
  <div>
    <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />

    <div class="banner">
      <img :src="info.poster" />
    </div>

    <div class="infobox">
      <div class="title">
        <div>{{ info.name }}</div>
        <div> <span>{{info.grade}}分</span></div>
      </div>

      <div class="item">{{ info.category }}</div>
      <div class="item">{{ toYME(info.premiereAt) }}上映</div>
      <div class="item">{{info.nation}} |{{info.runtime}}分钟</div>
      <div class="item">{{ info.synopsis }}</div>
    </div>

    <div class="imgbox">
      <div class="act">演员</div>
      <div class="actors swiper" id="actors">
        <ul v-if="info.actors" class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in info.actors" :key="index">
            <div>
              <img :src="item.avatarAddress">
            </div>  
            <span>{{ item.name }}</span>
            <span>{{ item.role }}</span>
          </li>
        </ul>


      </div>
    </div>

    <div class="imgbox">
      <div class="act">剧照</div>
      <div class="photos swiper" id="photos">
        <ul v-if="info.photos" class="swiper-wrapper">
          <li class="swiper-slide" v-for="(item,index) in info.photos" :key="index" >
            <div @click="showimg(index)">
              <img :src="item">
            </div>  
          </li>
        </ul>
      </div>
    </div>
    <div style="height:50px"></div>
    <a class="buybtn">在线选座</a>
  </div>
</template>


<script>
import fromtime from '@/utils/fromtime';
// import timeformat from '../utils/timeformat'
// 导入图片预览的方法
import { ImagePreview } from 'vant';

// 1.导入swiper插件
import Swiper from 'swiper'
// 2.导入swiper的样式
import 'swiper/dist/css/swiper.css'
export default {
  data(){
    return {
      info:{}
    }
  },
  methods:{
    // 使用展开运算符。
    ...fromtime,
    // ...timeformat,
    onClickLeft(){
      this.$router.replace('/')
      this.$router.back();
    },
    showimg(idx){
      // 点击剧照的时候,就显示预览的方法

      ImagePreview({
        images: this.info.photos,  // 所有要预览的图片数组
        startPosition: idx,  // 显示的时候要预览的第几张图片
      });
    }
  },
  mounted(){
    // console.log(Swiper)
    // console.log(this.$route)
    const fid = this.$route.query.item
    console.log(fid);
    this.$axios.get('filmInfo',{
      params:{
        filmId: fid
      }
    }).then(res=>{
      console.log(res)
      if(res.status==0){
        this.info = res.data.film
      
        // 3. 获取或数据后再创建swiper实例
        this.$nextTick(()=>{ // 等页面渲染完成之后再执行
          var swiper = new Swiper("#actors", {
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true
          });

          var swiper2 = new Swiper("#photos", {
            slidesPerView: 2,
            spaceBetween: 10,
            freeMode: true,
          });

        })
        
      }
    })

   
  }
}
</script>


<style scoped>
  .buybtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45px;
    background-color: orange;
    text-align: center;
    line-height: 45px;
    color: #fff;
    font-size: 13px;
    z-index: 2;
  }
  .photos>ul>li>div{
    width:150px;
    height: 100px;
    overflow: hidden;
  }
  .photos>ul>li>div>img{
    width: 100%;
  }
  .photos>ul>li{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
  }
  .photos>ul{
    display: flex;
  }
  .photos{
    margin-top: 5px;
  }



  .actors>ul>li>span{
    color: #191a1b;
    font-size: 13px;
    font-weight: 300;
  }
  .actors>ul>li>div{
    width:90px;
    height: 90px;
    overflow: hidden;
  }
  .actors>ul>li>div>img{
    width: 100%;
    transform: translateY(-8px);
  }
  .actors>ul>li{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
  }
  .actors>ul{
    display: flex;
  }
  .actors{
    margin-top: 5px;
  }
  .act{
    font-size: 16px;
    color: #000;
  }
  .imgbox{
    box-sizing: border-box;
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
    overflow: hidden;
  }
  .item{
    font-size: 13px;
    color: #797d82;
    margin-top: 5px;
  }
  .title{
    display: flex;
    justify-content: space-between;
  }
  .title>div:first-child{
    font-size: 18px;
    color: #191a1b;
  }
 
  .title>div:last-child{
    color: #ffb232;
    font-size: 18px;
    font-style: italic;
  }
  .title>div:last-child>span{
    font-size: 12px;
  }


  .banner{
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .banner>img{
    width: 100%;
    transform: translateY(-200px);
  }
  .infobox{
    box-sizing: border-box;
    background-color: #fff;
    padding: 15px 10px;
  }
</style>

