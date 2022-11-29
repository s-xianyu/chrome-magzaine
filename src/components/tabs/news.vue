<template>
  <div class="news">
    <template v-if="detailFlag">
      <el-timeline>
        <el-timeline-item
            v-for="item in list"
            :timestamp="item.createTimeName"
            placement="top">
          <el-card>
            <div class="card" @click="toDetail(item)">
              <img :src="item.cover" alt="">
              <h4>{{item.title}}</h4>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </template>
    <div class="detail" v-else>
      <el-page-header @back="detailFlag = true">
        <template #content>
          <span class="text-large font-600 mr-3">{{detail.title}}</span>
        </template>
      </el-page-header>
      <div class="detail-html" v-html="detail.content"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElTimeline, ElTimelineItem, ElCard, ElPageHeader } from "element-plus";
import { onMounted, ref, reactive } from "vue";
import { NewList } from '../../type/type'
const list: NewList[] = reactive([])
onMounted(async () => {
  await fetch('https://study.schbrain.com/admin/api/v1/news/page?pageSize=12&pageIndex=1&order=publish_time')
      .then(response => response.json())
      .then(({result}) => {
        result.list.forEach((item: any) => {
          item.createTimeName = filterTime(item.createTime)
          list.push(item)
        })
        console.log(list)
      })
})
const filterTime = (createTime: string| number) => {
  const date = new Date(createTime)
  const Y = date.getFullYear()
  const M = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  return Y + '/' + M + '/' + D
}
const toDetail = (info: any) => {
  fetch(`https://study.schbrain.com/admin/api/v1/news/${info.id}/get`)
      .then(response => response.json())
      .then(({result}) => {
        detailFlag.value = false
        if (result) {
          detail.value = result
        }
      })
}
// 详情
const detailFlag = ref(true)
const detail: any = ref({
  title: '暂无数据',
  content: '<div>测试</div>'
})
</script>
<style lang="scss" scoped>
::v-deep{
  .el-timeline-item__timestamp{
    text-align: left;
  }
}
.news{
  height:400px;
  overflow: scroll;
  .card{
    display: flex;
    align-items: flex-start;
    padding: 0;
    img{
      width:120px;
      height:100px;
      border-radius: 6px;
    }
    h4{
      margin:0 0 0 10px;
      font-size: 15px;
      text-align: left;
    }
  }
  .detail{
    &-html{
      width:100%;
      >>> img{
        width:100%;
      }
    }
  }
}
</style>
