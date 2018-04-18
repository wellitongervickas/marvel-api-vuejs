<style lang="scss">
  @import 'store-slideshow';
</style>

<template>
  <div class="slideshow-content relative" v-if="sliderList.length">
    <div class="slideshow-list container relative">
      <div v-for="(item, index) in sliderList" class="slideshow-item">
        <transition name="slide">
          <img :src="item.image" :alt="item.title" v-show="item.status" :key="index">
        </transition>
      </div>
    </div>
    <div class="slideshow-control container user-select">
      <div class="slideshow-control-btn container">
        <div class="slideshow-control-prev pointer transition-slow" @click="changeActiveSlider('prev')">
          <img src="/images/layout/prev.png" :alt="langTitles.prev">
        </div>
        <div class="slideshow-control-next pointer transition-slow" @click="changeActiveSlider('next')">
          <img src="/images/layout/next.png" :alt="langTitles.next">
        </div>
      </div>
      <div class="slideshow-control-num container">
        <ul class="unstyled-list text-white">
          <li
            v-for="(item, index) in sliderList"
            :class="{'active': item.status }"
            class="slideshow-control-num-item pointer"
            @click="changeActiveSliderNum(index)">
            {{index}}
          </li>
        </ul>
      </div>
    </div>
    <transition-group tag="div" class="container relative" name="fade">
      <div class="slideshow-label" v-for="(item, index) in sliderList" :key="index" v-show="item.status">
        <div class="slideshow-label-content align-center text-uppercase">
          <h2 class="slideshow-label-title">{{item.title}}</h2>
          <h3 class="slideshow-label-desc">{{item.description}}</h3>
        </div>
        <div class="slideshow-label-btn align-center">
          <a href="#" class="btn btn-large btn-red text-white transition-slow">{{langTitles.readUp}}</a>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>

  import slideshowHelper from '../../models/helpers/slideshow-helper';
  import Slider from '../../models/class/slider-class';

  export default {
    name: 'StoreSlideshow',
    data() {
      return {
        langTitles: this.$appConfig.lang.TITLES,
        timeToNextSlide: 5000,
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
        this.$http.get('/local-api/slideshow/slideshow.json')
        .then(response => {

          const sliderList = response.data.sliders.map(item => new Slider(item));
          this.sliderList = slideshowHelper.setInitialSliderStatus(sliderList);
        })
        .catch(err => {

          console.error(err)
        })
      },

      /**
        * Change active slide item to set
        * a new to active in the list
        *
      */

      changeActiveSlider (control) {

        const updatedSlideshowList = slideshowHelper.changeActiveSlider(this.sliderList, control);
        this.sliderList = [...updatedSlideshowList];
      },

      /**
        * Change active slide item to set
        * a new to active in the list using
        * a "num" of Array index
        *
      */

      changeActiveSliderNum (num) {

        // Passing null in second parameter to disable control and using number to set new active
        const updatedSlideshowList = slideshowHelper.changeActiveSlider(this.sliderList, null, num);
        this.sliderList = [...updatedSlideshowList];
      },

      /**
        * On called this method change a
        * new slider to active (next)
        *
      */

      autoChangeSlider () {
        setInterval(() => {
          this.changeActiveSlider('next');
        }, this.timeToNextSlide)
      }
    },
    created() {

      // On load get slider list of endpoint
      this.getSliderList();

      // Auto change slider
      this.autoChangeSlider();
    }
  };
</script>
