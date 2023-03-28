<template>
   <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane :label="item.label" :name="item.name" v-for="item in tabPaneData" :key="item.name"> 
        <div class="container" style="display: flex;justify-content: flex-start;flex-wrap: wrap;">
        <div class="card" v-for="item in goods_data">
            <div class="card-image"></div>
            <div style="display: flex;justify-content: space-between;"> 
            <span class="name">{{ item.goods_name }}</span><span>{{ item.concern }}+关注</span>
            </div>
            <div class="detail">{{ item.goods_descript }} </div>
            <div class="price"> ￥{{ item.goods_price }}</div>
        <footer >
            <el-icon :size="25"><Star /></el-icon>
            <el-button type="primary">去看看</el-button>
        </footer>
        </div>
        </div>
    </el-tab-pane>
  </el-tabs>
   
    <el-pagination background layout="prev, pager, next" :total="1000" />
</template>

<script setup>
import sellCard from '../SellCard.vue';
import {ref,onMounted} from 'vue'
import {Market}  from '../../../api/index'
const activeName=ref('first')
const tabPaneData=[
    {label:'最近',name:'first'},
    {label:'骨折价',name:'second'},
    {label:'最多关注',name:'third'}
]
const goods_data=ref()
const  getGoodsData=async()=>{
   const  {data:res}=await Market.fleaMarket.getRecentGoods('')
   goods_data.value=res.cheap_goods_data
}
onMounted(getGoodsData)
</script>

<style lang="less" scoped>
body{
  background-color: rgb(249,248,250);
}

.card {
  width: 190px;
  height: 270px;
  padding:10px;
  margin-right: 15px;
  margin-top: 20px;
  background: rgba(255,255,255, 1);
  box-shadow: 0px 1px 2px rgba( 0,0,0, 0.1),0px 2px 8px rgba(0,0,0, 0.08);
  border-radius: 13px;
  footer{
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }
}

.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 60%;
  border-radius: 6px 6px 0 0;
}

.card-image:hover {
  transform: scale(0.98);
}

.name{
  text-transform: uppercase;
  margin: 5px 0;
  font-size: 14px;
  font-weight: 600;
  color: rgb(63, 121, 230);
}

.name:hover {
  cursor: pointer;
}

.detail {
  font-weight: 600;
  color: rgb(88, 87, 87);
  font-size: 12px;
}

.detail:hover {
  cursor: pointer;
}
.price {
  color: gray;
  font-weight: 400;
  font-size: 12px;
  padding-top: 5px;
}

</style>