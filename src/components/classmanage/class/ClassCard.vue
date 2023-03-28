<template>
    <el-row>
        <el-col :span="24">
            <div class="card-container">
                <div class="card" v-for="item in 4">
                    <div class="card-img">
                        <el-image style="width: 100%; height: 100%" :src="url" :fit="fit" />
                    </div>
                    <div class="card-info">
                        <p class="text-title">AI2102 </p>
                        <p class="text-body">人数：18</p>
                        <p class="text-body">创建时间：2021-6-19</p>
                    </div>
                    <div class="card-footer">
                       
                        <el-link style="margin-left: 15px;" type="primary
                        ">退出</el-link>
                        <RouterLink to="/classmanage/class/table"> <el-link type="primary">查看</el-link></RouterLink>
                       
                    </div>
                </div>
            </div>
        </el-col>
</el-row>
</template>
<script  setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const activeName = ref('first')

const handleClick = (tab, event) => {
    console.log(tab, event)
}
const changeTabVisable = () => { store.commit('tabModule/changeTabVisable') }
</script>


<style lang="less" scoped>
* {
    padding: 0;
    margin: 0;
}


.card-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .card {
        width: 190px;
        height: 250px;
        padding: 12px;
        overflow: visible;
        display: flex;
        flex-direction: column;
        border: 1px solid #f2f2f2;

        .card-img {
            height: 50%;
            width: 100%;
            border-radius: .5rem;
            transition: .3s ease;
        }

        .card-info {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            .text-title {
                font-weight: 900;
                font-size: 18px;
                line-height: 1.5;
            }

            .text-body {
                font-size: 12px;
                margin-bottom: 10px;
                color:rgb(0,0,0,0.85);
            }
        }


    }


    .card-footer {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding-top: 10px;
        border-top: 1px solid #ddd;
    }
    .card-img:hover {
        transform: translateY(-25%);
        box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
    }



}</style>