<template>
  <publish-info>

  </publish-info>
  <el-row>
    <el-col style="margin-bottom: 20px;display: flex;flex-wrap: wrap;" :span="24">
      <div class="card-container" v-for="item in 10">
        <el-card
          :body-style="{ padding: '0', display: 'flex', 'flex-direction': 'column', 'justify-content': 'space-between', 'height': '100%' }">
          <main>
            <div style="display: flex;flex-direction: column;margin-right: 10px;">
              <span style="font-weight: 700;">丢失一个小钱包</span>
              <span>时间：12:26</span>
              <span>地点：7号楼</span>
            </div>
          </main>
          <footer style="color: #5f5f5f;font-size: 12px;display: flex;justify-content: flex-end;"><span>2021年4月5日发布</span>
          </footer>
        </el-card>
      </div>
    </el-col>

  </el-row>
</template>
<script setup>
import publishInfo from '../PublishInfo.vue';
const url =
  'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style lang="less" scoped>
.card-container {
  width: 40%;
  padding: 15px;

  .el-card {
    padding: 15px 20px 10px !important;
    height: 80px;
    justify-content: space-between;

    main {
      height: 50px;

      span {
        font-size: 14px;
        margin-bottom: 3px;
      }
    }
  }
}</style>