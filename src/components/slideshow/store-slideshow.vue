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
        <div class="slideshow-label">
          <div class="slideshow-label-title">{{item.title}}</div>
          <div class="slideshow-label-desc">{{item.description}}</div>
        </div>
      </div>
      <div class="slideshow-control">
        <div class="slideshow-control-prev">
          <img src="/images/layout/prev.png" :alt="prev">
        </div>
        <div class="slideshow-control-next">
          <img src="/images/layout/next.png" :alt="next">
        </div>
      </div>
      <div class="slideshow-dots">
        <ul>
          <li>1</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StoreSlideshow',
    data() {
      return {
        next: this.$appConfig.lang.TITLES.next,
        prev: this.$appConfig.lang.TITLES.prev,
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
