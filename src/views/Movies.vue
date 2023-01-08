<template>
    <div>
        <div class="top_tab">
            <van-tabs v-model="active" @click="to_toptab">
                <van-tab title="正在热映"></van-tab>
                <van-tab title="即将上映"></van-tab>
            </van-tabs>
        </div>
        <router-view/>
    </div>
</template>
 
<script>
    export default {
        data(){
            return{
                active:0     
            }
        },
        methods:{
            // 事件类型定义在我们的methods这一个选项里面
            // 拿到data里面的数据：用this指向来拿
            to_toptab(){
                // console.log(this.active)
                if(this.active==0){
                    // 路由跳转：push replace 
                    this.$router.replace({name:'hot'})
                }
                if(this.active==1){
                    this.$router.replace({name:'son'})
                }
            }
        },
        // 生命周期。 mounted 钩子函数 ：我们页面挂载完的时候会执行的函数。
        mounted(){
            // console.log('哈哈哈我执行了')
            // 获取到路由信息  当前路由信息，以及路由表里面的信息
            // 通过this来拿到
            console.log(this.$route)  //当前路由信息
            console.log(this.$router) //路由信息配置表，提供了路由的方法，以及路由实列给我们
            const name = this.$route.name
            switch (name) {
                case 'hot':
                  this.active = 0  
                    break;
                case 'son':
                    this.active = 1
                    break
                default:
                    this.active = 0
                    break;
            }
        }
    }
</script>