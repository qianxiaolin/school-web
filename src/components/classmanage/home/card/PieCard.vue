<template>
    <div class="finish-box" ref="pie" style="height:200px;">
       
    </div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
import * as echarts from 'echarts'
const finishData=[
    {name:"青年大学习",allnumber:43,finshnumber:10},
    {name:"离散",allnumber:82,finshnumber:40},
    {name:"模电作业",allnumber:20,finshnumber:16}
]
//加工数据
const centerArr=[{x:'10%',y:'65%'},{x:'40%',y:'65%'},{x:'70%',y:'65%'}]
const gaugeData=finishData.map((item,index) => {
    return{
        type:'pie',
        radius:['50%','60%'],
        center:[centerArr[index].x,centerArr[index].y],
        hoverAnimation:false,
        labelLine:{
            show:false,
        },
        label:{
                show:true,
                position:'center',
        },
        data:[{
            name:item.name+'\n'+item.finshnumber,
            value:item.finshnumber,
            itemStyle:{
                color:'green'
            }
        },
            {value:item.allnumber,
                itemStyle:{
                    color:'red'
                }
            }
        ],
        
    }
});
const option={
    series:gaugeData,
    title:{
        text:'▎任务完成情况',
        left:0,
        top:10
    }
}
const pie=ref()
const drawPie=()=>{
    const myEcharts1=echarts.init(pie.value,'chalk')
    myEcharts1.setOption(option)

}
onMounted(drawPie)
</script>

<style lang="less" scoped>
.unfinsh-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    .number{
        font-size: 40px;
        color: red;
    }
}
</style>