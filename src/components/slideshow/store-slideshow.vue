<style lang="scss">
  @import 'store-slideshow';
</style>

<template>
  <div class="slideshow-content" v-if="sliderList.length">
    <div class="slideshow-list container">
      <div v-for="(item, index) in sliderList" class="slideshow-item" :key="index">
        <transition name="slide">
          <img :src="item.image" :alt="item.title" v-show="item.status">
        </transition>
        <transition name="fade">
          <div class="slideshow-label" v-show="item.status">
            <div class="slideshow-label-title">
              <h2>{{item.title}}</h2>
            </div>
            <div class="slideshow-label-desc">
              <h3>{{item.description}}</h3>
            </div>
          </div>
        </transition>
      </div>
      <div class="slideshow-control user-select">
        <div class="slideshow-control-prev pointer transition-slow" @click="changeActiveSlider('prev')">
          <img src="/images/layout/prev.png" :alt="prev">
        </div>
        <div class="slideshow-control-next pointer transition-slow" @click="changeActiveSlider('next')">
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
            const sliderList = response.data.sliders.map(item => slideshowHelper.createItem(item));
            this.sliderList = slideshowHelper.setInitialSliderStatus(sliderList);
          })
      },
      changeActiveSlider (control) {
        this.sliderList = slideshowHelper.changeActiveSlider(this.sliderList, control);
      }
    },
    created() {

      // On load get slider list of endpoint
      this.getSliderList();
    }
  };
</script>
