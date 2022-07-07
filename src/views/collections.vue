<template>
  <div class="collection">
    <section>
      <ImageComponent/>
      <SneakerDescription/>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>
import ImageComponent from '@/components/images.vue'
import SneakerDescription from '@/components/description.vue'
export default{
  name: 'collectionComponent',
  components: {
    ImageComponent,
    SneakerDescription
  }
}
</script>
<style scoped>
section {
  display: grid;
  grid-template-columns:1fr 1fr ;
  gap: 2em;
}
</style>


