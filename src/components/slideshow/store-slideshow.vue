<style lang="scss">
  @import 'store-slideshow';
</style>

<template>
  <div class="slideshow-content">
    <div class="slideshow-list container">
      <div
        class="slideshow-item"
        v-for="(item, index) in sliderList"
        :key="index"
        :style="{ 'background-image': `url(${item.image})` }">
        <div class="slideshow-item-title">{{item.title}}</div>
        <div class="slideshow-item-desc">{{item.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StoreSlideshow',
    data() {
      return {
        sliderList: [],
      }
    },
    methods: {
      getSliderList() {
        this
          .$http.get('/local-api/slideshow/slideshow.json')
          .then(response => {
            this.sliderList = response.data.sliders;
          })
      }
    },
    created() {
      this.getSliderList()
    }
  };
</script>
