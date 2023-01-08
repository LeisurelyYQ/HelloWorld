<template>
    <div id="city">
        <van-nav-bar
  title="当前城市"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  
/>


<div class="search_citys">
  <van-search
  v-model="value"
  shape="round"
  background="#f4f4f4"
  placeholder="请输入城市名或拼音"
/>
</div>
<div class="hot_citys">
  <p>GPS定位你所在的城市</p>
  <div class="top_citys">
   
    <span>定位失败</span>
  </div>
  <p>热门城市</p>
  <div class="button_citys">
    <span v-for="(item,index) in hot" :key="index">{{ item.name }}</span>
    
  </div>
</div>




<div>
    <van-index-bar :index-list="Object.keys(cities)">
 <div v-for="(value,key,index) in cities" :key="index">
  <van-index-anchor   :index="key">{{ key }}</van-index-anchor>
  <van-cell @click="select(ite)" :title="ite.name" v-for="(ite,ind) in value" :key="ind" />
 </div>
</van-index-bar>
</div>
    </div>
</template>

<script>
// import { arrayBuffer } from 'stream/consumers';
import { Toast } from 'vant';

export default {
    data(){
        return{
            // indexList:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            cities:{},
            value:'',
            hot:[]
        }
    },
    methods:{
      select(city){
        console.log(city)
        this.$store.commit('changeCity',city)
        this.$router.replace({name:'cinema'})

      },
        onClickLeft() {
      Toast('返回');
      this.$router.push("/")
    },
    tozimu(data){
      // var data = this.list;
      var field = "pinyin";

      var letter_reg = /^[A-Z]$/;
      var list = new Array();
      for (var i = 0; i < data.length; i++) {
        // 添加 # 分组，用来 存放 首字母不能 转为 大写英文的 数据
        list["#"] = new Array();
        // 首字母 转 大写英文
        var letter = data[i][field].substr(0, 1).toUpperCase();
        // 是否 大写 英文 字母
        if (!letter_reg.test(letter)) {
          letter = "#";
        }
        // 创建 字母 分组
        if (!(letter in list)) {
          list[letter] = new Array();
        }
        // 字母 分组 添加 数据
        list[letter].push(data[i]);
      }
      // 转换 格式 进行 排序；
      var resault = new Array();
      for (var key in list) {
        resault.push({
          letter: key,
          list: list[key],
        });
      }
      resault.sort(function (x, y) {
        return x.letter.charCodeAt(0) - y.letter.charCodeAt(0);
      });
      // # 号分组 放最后
      var last_arr = resault[0];
      resault.splice(0, 1);
      resault.push(last_arr);

      // 转换 数据 格式
      var json_sort = {};
      for (var i = 0; i < resault.length; i++) {
        json_sort[resault[i].letter] = resault[i].list;
      }
      // console.log(json_sort);
      return json_sort;
      
    },
    // 获取接口
    getcitys(){
        this.$axios('city',{parmas:{cityId:this.$store.state.city.cityId}}).then(res=>{
            console.log(res)
            const cities = this.tozimu(res.data.cities)
            this.cities = cities   

            let arr = [] 
            for (let i = 0; i < res.data.cities.length; i++) {
            if(res.data.cities[i].isHot==1){
                arr.push(res.data.cities[i])
            }
            }
         this.hot = arr   
        })
    }
    
    },
    mounted(){
        this.getcitys()
    }
}
</script>
<style scoped>
#city{
    background: #f4f4f4;
}
p{
  margin: 0;
  padding: 0;color: #797d82;
  line-height: 40px;

}
.hot_citys{
  /* width: 100%; */
  height: 230px;
  background: #fff;
  padding: 5px 10px;
}
.top_citys{
  display:  flex;
  flex-direction: column;
}

.hot_citys>div>span{
  margin: 10px;
  width: 90px;
  height: 30px;
  background: #f4f4f4;
  text-align: center;
  line-height: 30px;
}
.button_citys{
  display:  flex;
  flex-wrap: wrap;
}

</style>