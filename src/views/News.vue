<template>
    <div id="news">

        <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <template>
    <div class="list" v-for="(item,index) in list " :key="index">
            <div>
                <span>{{ item.synopsis }}</span>
                <span>{{ item.director }}</span>
            </div>
            <div>
                <img :src="item.poster" alt="">
            </div>
        </div>
  </template>
</van-list>
    </div>
</template>

<script>
import {Toast} from 'vant'
export default {
    data(){
        return{
            finished:false,
            loading:false,
            list:[],
            pageNum:1
        }
    },
    methods:{
        onLoad(){
            this.loading =true
            this.$axios('hot',{params:{cityId:this.$store.state.city.cityId,pageNum:this.pageNum}}).then(res=>{
            console.log(res)
            if(res.status==0){
                // 请求成功的状态
                const maxpage = Math.ceil(res.data.total/10)
                if(this.pageNum<maxpage){
                    this.pageNum++
                }
                else{
                    this.finished=true
                }
                this.list = this.list.concat(res.data.films)
                this.list = [...res.data.films,...this.list]


                this.loading = false
            }
            else{
                Toast.loading({
                    message:'数据过多请稍后重试'
                })
            }
        }).catch(err=>{
            Toast.loading({
                message:'请求失败！'
            })
        })
        },


   
    },
    mounted(){
    this.onLoad()
    }
}

</script>


<style scoped>
.list{
    min-width: 100%;
    height: 80px;
    display:  flex;
    margin-top: 5px;
    border-top: 2px solid #ccc;
    justify-content: space-between;
}
.list>div:nth-child(1){
    /* flex:1; */
    display: flex;
    width: 80%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
}
.list>div:nth-child(1)>span:nth-child(1){
    text-indent: 30px;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list>div:nth-child(1)>span:nth-child(2){
    text-indent: 30px;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list>div:nth-child(2){
    width: 20%;
    height: 100%;
    padding: 5px 5px;
}
.list>div:nth-child(2)>img{
    width: 100%;
    height: 100%;
}
</style>