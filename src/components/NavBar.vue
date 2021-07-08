<template>
  <div class="fe-row-between fe-w-100 fe-lh-lg">
    <div class="fe-font-bold fe-cp fe-fc-base fe-ts-hl fe-fs-lg">{{blogName}}</div>
    <div class="fe-row-center fe-fc-base fe-ts-hr">
      <div class="fe-cp">首页</div>
      <div class="fe-cp">首页</div>
      <div class="fe-cp">首页</div>
      <div class="fe-cp">首页</div>
    </div>
  </div>
  
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    let blogName = ref('furoのBlog')

    return {
      blogName
    }
    
  },
})
</script>
