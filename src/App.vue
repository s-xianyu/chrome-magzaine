<script setup lang="ts">
import { ElSwitch } from 'element-plus'
import {onMounted, ref} from 'vue'
import Title from './components/title.vue'
import Tabs from './components/tabs.vue'
const themeFLag = ref(false)
const toggleTheme = () => {
  const html: HTMLElement = document.documentElement
  const theme: string|null = html.getAttribute('data-theme')
  html.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light')
}
</script>

<template>
  <div class="container" data-theme="light">
    <!-- 暗黑模式切换 -->
    <ElSwitch
        class="switch"
        v-model="themeFLag"
        size="small"
        @change="toggleTheme" />
    <!-- 标题 -->
    <Title title="小报2222 - 分享你的内容"/>
    <!-- tabs -->
    <Tabs/>
    <div class="footer">
      <a href="mailto:shangs@schbrain.com" >联系邮箱：@s-xianyu</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container{
  width:500px;
  position: relative;
  .switch{
    position: absolute;
    top:0;
    right:0;
  }
  .footer{
    text-align: right;
    margin-top:10px;
    padding-right: 10px;
    font-size: 12px;
  }
}
</style>

