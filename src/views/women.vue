<template>
  <div class="women">
    <h2>woman</h2>
    <SneakerDescription/>
  </div>
</template>
<script>
import SneakerDescription from '@/components/description.vue'
export default{
  name: 'womenComponent',
  components: {
    SneakerDescription
  }
}
</script>