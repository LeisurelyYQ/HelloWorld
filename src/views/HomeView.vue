<template>
  <div class="home">
    <router-view/>
    <van-tabbar v-model="active" @change="topages">
  <van-tabbar-item icon="home-o">电影</van-tabbar-item>
  <van-tabbar-item icon="search">影院</van-tabbar-item>
  <van-tabbar-item icon="friends-o">资讯</van-tabbar-item>
  <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
</van-tabbar>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
  
  },
  data(){
    return{
      active:0
    }
  },
  mounted(){
    console.log(this.$route)
      console.log(this.$router)
      // 需要进行判断
    const name = this.$route.name
    switch (name) {
      case 'movie':
      this.active = 0
        break;
        case 'movie':
      this.active = 1
        break;
        case 'movie':
      this.active = 2
        break;
        case 'movie':
      this.active = 3
        break;
      default:
        this.active = 0
        break;
    }
  },
  methods:{
    topages(e){
      console.log(e)
      // console.log(this.active)
      console.log(this.$route)
      console.log(this.$router)
      if(e==0){
        this.$router.replace({name:'movie'})
      }
      if(e==1){
        this.$router.replace({name:'cinema'})
      }
      if(e==2){
        this.$router.replace({name:'news'})
      }
      if(e==3){
        this.$router.replace({name:'about'})
      }
    }
  }
}
</script>
