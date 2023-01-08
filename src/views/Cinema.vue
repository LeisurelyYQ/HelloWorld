<template>
  <div id="cinema">
    <van-nav-bar title="影院" left-text="">
      <template #left>
        <span @click="tocity">{{ $store.state.city.name }}</span>
        <van-icon name="arrow-down" />
      </template>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <van-dropdown-menu v-model="city_lists">
      <van-dropdown-item title="全城" ref="item">
        <div class="city_sx">
          <span class="city_small" @click="tocitys(item)" v-for="(item,index) in city_lists" :key="index">{{ item.district.name }}</span>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="APP订单" ref="item">
        <van-cell center title="APP订单">
          <van-icon name="success" />
        </van-cell>
        <van-cell center title="前台兑换" icon="">
          <van-icon name="success" />
        </van-cell>
      </van-dropdown-item>
      <van-dropdown-item title="最近去过" ref="item">
        <van-cell center title="最近去过" icon> </van-cell>
        <van-cell center title="离我最近"> </van-cell>
      </van-dropdown-item>
    </van-dropdown-menu>

    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <template>
        <div class="movies_list" v-for="(item, index) in list" :key="index">
          <div class="top_movies">
            <span style="font-weight: 600">{{ item.name }}</span>
            <span>{{ item.address }}</span>
          </div>
          <div class="button_movies">
            <div>
              <span>￥</span><span>{{ item.lowPrice / 100 }}</span
              >起
            </div>
            <span>距离{{ Math.ceil(item.Distance) }}公里</span>
          </div>
        </div>
      </template>
    </van-list>
  </div>
</template>
<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      finished: false,
      loading: false,
      list: {},
      city_lists:[

      ]
      
    };
  },
  methods: {
    tocitys(city){
        console.log(city)
        this.$store.commit('changeCity',city)
    },
    // getCityinfo(){
    //     this.$axios('city',{parmas:{cityId:this.$store.state.city.cityId}}).then(res=>{
    //         console.log(res)
    //         this.city_lists = res.data.cities
    //     })
    // },
    onConfirm() {
      this.$refs.item.toggle();
    },
    tocity(e) {
      // 逻辑路由跳转
      console.log(e);
      this.$router.replace({ name: "city" });
    },

    // ------------------------我们的数据逻辑
    onLoad() {
      console.log("aaaaaaaaaaaaaaaaaaaaaa------------");
      this.loading = true;
      this.$axios("/cinemaList", {
        params: { cityId: this.$store.state.city.cityId },
      })
        .then((res) => {
            console.log(res)
          // console.log(res.data.lenght)
          if (res.status == 0) {
            this.list = res.data.cinemas;
            this.city_lists = res.data.cinemas
          } else {
            Toast.loading({
              message: "请求数据过多",
            });
          }
          this.loading = false;
          this.finished = true;
          // console.log(res)
          // this.list = res.data.cinemas
        })
        .catch((err) => {
          Toast.loading({
            message: "请求过多请稍后重试",
          });
        });
    },
  },
  mounted() {
    // this.getCityinfo()
    this.onLoad();
  },
};
</script>
<style scoped>
.city_sx {
  width: 100%;
  background: #f4f4f4;
}

.city_small {
  line-height: 30px;
  text-align: center;
  height: 30px;
  background: #fff;
  width: 85px;
  display: inline-block;
  margin: 5px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.movies_list {
  /* background: pink; */
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  padding: 5px 5px;
  height: 60px;
  border-top: 1px solid #ccc;
  justify-content: space-around;
}

.top_movies {
  width: calc(100% - 100px);
  text-align: left;
  /* padding-right: 15px; */
  display: flex;
  flex-direction: column;
}

/* .top_movies>span:first{
    font-weight: 600;
 } */
.top_movies > span {
  padding: 5px 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.button_movies {
  padding: 5px;
  display: flex;
  flex-direction: column;
}

.button_movies > div {
  /* padding: 5px; */
  color: #ff5f16;
}

.button_movies > span {
  /* padding: 5px; */
  padding-top: 9px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>>

</style>