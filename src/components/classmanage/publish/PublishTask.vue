<template>
<home-work v-if="taskType==='0'" ></home-work>
<pool v-else-if="taskType==='1'"></pool>
</template>
<script setup>
import homeWork from './HomeWork.vue'
import pool from './Pool.vue'
import {ref,computed} from 'vue'
import {useStore} from 'vuex'
const store=useStore()
const taskType=computed(()=>{return store.state.taskModule.type})

</script>