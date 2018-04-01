<style lang="scss">
  @import 'store-slideshow';
</style>

<template>
  <div class="slideshow-content">
    <div class="slideshow-list container">
      <transition-group name="fade">
        <div
          v-if="sliderList.length"
          v-for="(item, index) in sliderList"
          class="slideshow-item"
          :key="index"
          :style="{ 'background-image': `url(${item.image})` }"
          v-show="item.status">
          <div class="slideshow-label">
            <div class="slideshow-label-title">{{item.title}} -> Status: {{item.status}}</div>
            <div class="slideshow-label-desc">{{item.description}}</div>
          </div>
        </div>
      </transition-group>
      <div class="slideshow-control" v-if="sliderList.length">
        <div class="slideshow-control-prev pointer transition-slow">
          <img src="/images/layout/prev.png" :alt="prev">
        </div>
        <div class="slideshow-control-next pointer transition-slow">
          <img src="/images/layout/next.png" :alt="next">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Slider from '../../models/class/slider-class';
  import slideshowHelper from '../../models/helpers/slideshow-helper';

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

      /**
        * This function is responsible for assigning
        * service values ​​to the component
        *
      */

      getSliderList() {
        this
          .$http.get('/local-api/slideshow/slideshow.json')
          .then(response => {
            const sliderList = response.data.sliders.map(item => {

              const sliderItem = new Slider(item);
              return sliderItem.getSliderList;
            });

            this.sliderList = slideshowHelper.setInitialSliderStatus(sliderList);
          })
      },
    },
    created() {

      // On load get slider list of endpoint
      this.getSliderList();
    }
  };
</script>
