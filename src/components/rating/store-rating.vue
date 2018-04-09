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
      getRating() {
        this.counterWidth = productHelper.ratingCount(this.rating);
      }
    },
    created() {
      this.getRating(this.rating)
    }
  };

</script>
