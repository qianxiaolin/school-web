<template>
    <div class="taskcard-container">
        <header> 
            <div class="header-left">
                <strong class="taskname">提交青年大学习</strong>
                <span class="ongoing">进行中</span>
            </div>
            <div class="commit">已提交：35/43</div>
           
        </header>
        <body>
            <div class="body-left">    
                <p class="publisher">发布人:季冰羽</p>
                <p class="date">截止时间:2021-5-5</p>
            </div>
            <div class="body-right">
                <el-button type="primary">去提交</el-button>
                <RouterLink to="">详情</RouterLink>
            </div>   
        </body>
    </div>
</template>

<script>
</script>

<style lang="less" scoped>
.taskcard-container {
    header {
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #959595;
        .header-left{
            display: flex;
            align-items: center;
            .taskname{
                font-size:25px;
                font-weight: 900;
                margin-right: 15px;
            }
            .ongoing {
                font-size: 18px;
                font-weight: 700;
                color: green;
            }
        }
    }

    body {
        display: flex;
        justify-content: space-between;
        .body-left {
            p {
                color: #959595;
            }
            .publisher{
                margin-bottom: 5px;
            }
        }
        .body-right{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }


}</style>