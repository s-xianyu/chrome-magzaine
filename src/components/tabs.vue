<template>
  <div class="tabs">
    <ElTabs v-model="activeName" type="border-card" class="border-tabs" @tab-click="handleClick">
      <ElTabPane v-for="item in tabsList" :label="item.label" :name="item.name">
        <component :is="item.tabComp"/>
      </ElTabPane>
    </ElTabs>
  </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import type { TabsPaneContext } from 'element-plus'
import { TabsList } from "../type/type";
import News from './tabs/news.vue'
import Delivery from './tabs/delivery.vue'
import Game from './tabs/game.vue'
// tabs
const activeName: any = ref('Delivery')
const tabsList: TabsList[] = [
  { name: 'News', label: '资讯', tabComp: markRaw(News) },
  { name: 'Delivery', label: '投稿', tabComp: markRaw(Delivery) },
  { name: 'Game', label: '小游戏', tabComp: markRaw(Game) },
]
const handleClick = (tab: TabsPaneContext, event: Event) => {
  activeName.value = tab.paneName
}
</script>

<style lang="scss" scoped>
.tabs{
  margin-top:20px;
  .list{
    color:#444;
  }
}
</style>
