<style lang="scss">
  @import 'store-product-details';
</style>

<template>
  <div class="store-product-details">
    <div class="details-intro">
      <div class="intro-content container">
        <div class="intro-content-img flex-around-center">
          <img :src="details.image" :alt="details.title">
        </div>
        <div class="intro-content-description"></div>
        <div class="intro-content-pricing"></div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'StoreProductDetails',
    props: ['details'],
  };

</script>
