<style lang="scss">
  @import 'store-rating'
</style>
<template>
  <div>Hello from rating -> {{rating}} = {{ratingValues}}</div>
</template>
<script>

  import productHelper from '../../models/helpers/product-helper';

  export default {
    name: 'StoreRating',
    props: ['rating'],
    data() {
      return {
        ratingValues: []
      }
    },
    methods: {
      getRating() {
        this.ratingValues = productHelper.ratingCount(this.rating);
        console.log(this.ratingValues, ' final value!')
      }
    },
    created() {
      this.getRating(this.rating)
    }
  };

</script>
