<template>
   <div class="newscard">
    <div style="display: flex;">
        <el-avatar> user </el-avatar>
            <div class="personinfo" >
                <p class="name">钉钉</p>
                <p class="text">最近好吗</p>
            </div>
    </div>
    <div class="chatinfo">
       <p class="time">12:26</p>
        <el-badge :value="99" class="item" type="item">
      </el-badge>
    </div>
       
   </div>
</template>

<script>
</script>

<style lang="less" scoped>
*{
    padding: 0;
    margin: 0;
}
.newscard{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 8px;
    margin-bottom: 5px;
    &:hover{
        background-color:#f2f2f2 ;
    }
    .personinfo{
        height: 100%;
        margin-left: 10px;
        .name{
            font-size:14px;
            line-height: 20px;
            justify-content: center;
        }
        .text{
            font-size: 12px;
            line-height: 18px;
            color:#797979;
        }
    }
    .chatinfo{
        display: flex;
        flex-direction: column;
        align-items:flex-end;
        .time{
            color:#797979;
            font-size: 12px;
        }
    }
}
</style>

