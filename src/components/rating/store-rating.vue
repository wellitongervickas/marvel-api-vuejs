<style lang="scss">
  @import 'store-rating'
</style>
<template>
  <div class="store-rating flex-column-center relative">
    <div
    class="store-rating-start store-rating-start-bg"
    :style="`background-image: url(${location + ratingBackground})`">
    </div>
    <div
    class="store-rating-start store-rating-start-count"
    :style="`background-image: url(${location + ratingCount}); width: ${counterWidth}px`"></div>
  </div>
</template>
<script>

  import productHelper from '../../models/helpers/product-helper';

  export default {
    name: 'StoreRating',
    props: ['rating'],
    data() {
      return {
        location: this.$appConfig.base,
        counterWidth: 0
      }
    },
    computed: {
      ratingBackground: (() => require('../../assets/images/layout/start-rating-bg.png')),
      ratingCount: (() => require('../../assets/images/layout/start-rating-count.png')),
    },
    methods: {

      /**
        * This function change div width
        * based on value of rating
        *
      */

      getRating() {
        this.counterWidth = productHelper.ratingCount(this.rating);
      }
    },
    created() {

      // when component is initialized call this functions
      this.getRating(this.rating)
    }
  };

</script>
