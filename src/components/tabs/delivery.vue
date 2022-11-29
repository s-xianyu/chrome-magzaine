<template>
  <div class="delivery">
    <ElForm :model="form" label-width="60px">
      <ElFormItem label="标题">
        <ElInput v-model="form.name" placeholder="请输入标题名"/>
      </ElFormItem>
      <ElFormItem label="链接">
        <ElInput v-model="form.url" placeholder="请输入分享链接"/>
      </ElFormItem>
      <ElFormItem label="内容">
        <ElInput v-model="form.content"
                 :rows="5"
                 type="textarea"
                 placeholder="请输入内容"/>
      </ElFormItem>
      <ElFormItem label="投稿人">
        <ElSelect syyle="width:100%" v-model="form.userName" placeholder="请选择投稿人(花名)">
          <ElOption label="七里香" value="qilixiang" />
          <ElOption label="暗号" value="anhao" />
          <ElOption label="夜的第七章" value="diqizhang" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="分类">
        <ElSelect syyle="width:100%" v-model="form.classify" placeholder="请选择分类">
          <ElOption label="Node" value="node" />
          <ElOption label="Vue" value="vue" />
          <ElOption label="Vite" value="vite" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="commit">投稿</ElButton>
        <ElButton type="primary" @click="remove">删除</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup lang="ts">
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElOption,
  ElButton,
    ElMessage
} from "element-plus";
import {reactive, ref} from "vue";
const form: any = reactive({
  name: '',
  url: '',
  content: '',
  userName: '',
  classify: ''
})
const commit = () => {
  console.log(form)
  ElMessage(JSON.stringify(form))
  chrome.contextMenus.create({
    id: 'contextMenus-123',
    title: '右键”', // 内容
    contexts: ['selection'], // 右键内容 => 该右键出现的时机(全部、页面、选定内容、链接...)
    onclick (params) {
      console.log(params)
    }
  }, () => {});
}
const remove = () => {
  chrome.contextMenus.remove('contextMenus-123');
}
</script>

<style lang="scss" scoped>
::v-deep{
  .el-select{
    width:100%;
  }
}
.delivery{
  height: 400px;
}
</style>
