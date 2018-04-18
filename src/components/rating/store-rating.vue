<style lang="scss">
  @import 'store-rating'
</style>
<template>
  <div class="store-rating flex-column-center relative">
    <div class="store-rating-start store-rating-start-bg"></div>
    <div class="store-rating-start store-rating-start-count" :style="{ width: counterWidth + 'px'}"></div>
  </div>
</template>
<script>

  import productHelper from '../../models/helpers/product-helper';

  export default {
    name: 'StoreRating',
    props: ['rating'],
    data() {
      return {
        counterWidth: 0
      }
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
