<template>
  <div class="fe-main">
    <div class="fe-row-between fe-w-100 fe-px-36 fe-py-10">
      <NavBar />
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './NavBar.vue'

export default defineComponent({
  components: {
    NavBar
  },
  setup() {
    
  },
})
</script>
