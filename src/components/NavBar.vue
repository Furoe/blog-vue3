<template>
  <div class="fe-row-between fe-w-100 fe-lh-lg">
    <div class=" fe-cp fe-fc-base fe-ts-hl fe-fs-lg fe-ft-bold">{{blogName}}</div>
    <div class="fe-row-center fe-fc-base fe-ts-hr menu">
      <a href="#" class="fe-cp fe-header">首页</a>
      <a href="#" class="fe-cp fe-ml-sm fe-header">目录</a>
      <a href="ebooks" class="fe-cp fe-ml-sm fe-header">电子书</a>
      <a href="#" class="fe-cp fe-ml-sm fe-header">工具</a>
      <a href="#" class="fe-cp fe-ml-sm fe-header">词云</a>
      <a href="#" class="fe-cp fe-ml-sm fe-header">关于我</a>
    </div>
  </div>
  
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let blogName = ref('furoのBlog')
    let name: number[] = []
    let age: Array<number> = []
    let x: [number, string] = [1, '111']

    return {
      blogName
    }
    
  },
})
</script>
<style lang="scss" scoped>
.header{
  background: #655;
  background-image: radial-gradient(tan 30%, transparent 0),
                    radial-gradient(tan 30%, transparent 0);
  background-position: 0 0, 15px 15px;
  background-size: 30px 30px;
}
.menu{
  a{
      position: relative;
      color: #eee;
      text-decoration: none;
      &::after{
        position: absolute;
        content: '';
        z-index: -1;
        height: 3px;
        width: 0;
        left: 0;
        bottom: 0;
        background: #80c8f8;
        transition: all 0.3s ease-in-out;
      }
      &:hover::after{
        width: 100%;
      }
  }
}
</style>
