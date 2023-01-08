<template>
    <div id="Hot">
        <van-list v-model="loading" :finished="finished" finished-text="无更多电影了" @load="onLoad">
            <template>
                <div class="list_movies" @click="toinfo(item.filmId)" v-for="(item,index) in list " :key="index">
            <div class="left_movies">
                <img :src="item.poster"
                    alt="">
            </div>
            <div class="center_movies">
                <div><span>{{item.name}}</span><span>{{item.filmType.name}}</span></div>
                <div>
                    <span>观众评分</span><span>{{item.grade}}</span>
                </div>
                <div>
                    <!-- <span v-for="(ite) in item.actors" >{{ite.name}}</span> -->
                    <template v-for="(ite) in item.actors">
                        {{ite.name}}
                    </template>
                </div>
                <div>
                    <span>{{item.nation}}|{{item.runtime}}分钟</span>
                </div>
            </div>
            <div class="right_movies">
                <button>购票</button>
            </div>
        </div>
            </template>
        </van-list>
       
    </div>

</template>


<script>
import {Toast} from 'vant'
export default {
    data() {
        return { 
            list: [],
            loading: false,
            finished: false,
            // 记录自己当前在第几页
            pageNum:1,
            pageSize:10
        }
    },
    methods:{
        toinfo(item){
            console.log(item)
            this.$router.replace({name:'movie_info',query:{item}})

        },
        onLoad() {
            console.log('Hot-onload');
            this.loading=true;
            // this.finished = true
            // 我们发送请求，传入参数获取到相对应城市的id以及相对应的城市信息。
            // 想获取到具体的城市信息列表
            this.$axios('hot',{params:{pageNum:this.pageNum,cityId:this.$store.state.city.cityId}}).then(res=>{
                // 打印我们成功请求过来的数据
                console.log(res)
                // 判断当前的状态码
                // status = 0 是不是成功了,msg = 'ok'  也是成功的状态
                if(res.status==0){
                    // 计算的出的总页数、不再是当时页数
                    //  定义出一个变量：=》res.data(就是我们的数据)/total总的数据条数
                    // 总数据条数除以10 得出总页数 我一页10条数据  js 的 Math.ceil()方法进行运算
                    const maxpage = Math.ceil(res.data.total/10)
                    // 判断当前页数是否要小于总页数：小于总页数——数据没加载完，继续增加我的数据-增加我的页数。
                if(this.pageNum<maxpage){
                    this.pageNum++
                }
                // 页数计算完成-加载完成数据之后-把我们事件打开
                else{
                    this.finished =true
                }
                 // 记录当前的页数等于data定义出来的当前页面
                // 判断当前页数是否要大于总页数
                // 如果说是大于调起finished给他设置成true
                // 如果说小于：我当前页数进行一个累加
                // 接下来就是进行解构赋值
                // this.list = res.data
                this.list = this.list.concat(res.data.films)
                this.list = [...res.data.films,...this.list]
                // this.list = res.data
                // this.list = this.list.concat(r)
                // this.list = [...res.data,...this.list]
                this.loading = false
                // this.finished = true
                }
                else{
                    // 数据过多的时候,给他一个轻提示
                    Toast.fail({
                        message:'请求过多，请稍后重试'
                    })
                }
            //  你调起axios 请求失败的处理-基于promise  一个异步处理方式
            }).catch(err=>{
                Toast.fail({
                    message:'请求失败请重新请求'
                })
            })
        }
    }
}
</script>
<style scoped>
.list_movies {
    display: flex;
    min-height: 130px;
    width: 100%;border-top: 1px solid #ccc;

    /* background: pink; */
}

.left_movies {
    width: 88px;
    min-height: 100%;
    /* background: red; */
    padding: 5px;
}

.left_movies>img {
    width: 100%;
    height: 100%;
}

.center_movies {
    width: 220px;
    min-height: 100%;
    padding: 5px;
    /* background: red; */
    overflow: hidden;
}

.center_movies>div:nth-child(3) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.center_movies>div {
    padding: 10px 0;
    display: flex;
}

.center_movies>div:first-child>span:first-child {
    font-size: 18px;
    font-weight: 800;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.center_movies>div:first-child>span:nth-child(2) {
    margin-left: 5px;
    width: 20px;
    height: 20px;
    font-size: 14px;
    background: #ccc;
    text-align: center;
    line-height: 20px;
}

.center_movies>div:nth-child(2)>span:nth-child(2) {
    color: #ffb232;
    line-height: 21px;
    margin-left: 5px;
}

.right_movies {

    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 14px;
}

.right_movies>button {
    width: 50px;
    height: 20px;
    border: 1px solid #ff5f16;
    color: #ff5f16;
    background: #fff;
}
</style>