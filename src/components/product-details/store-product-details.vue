<style lang="scss">
  @import 'store-product-details';
</style>

<template>
  <div class="store-product-details">
    <div class="details-intro">
      <div class="intro-content container text-white">
        <div class="intro-content-img flex-around-center">
          <img :src="details.image" :alt="details.title">
        </div>
        <div class="intro-content-description">
          <h1 class="description-title text-uppercase">{{details.title}}</h1>
          <ul class="description-creators unstyled-list">
            <li v-if="details.modified">Published: {{details.modified}}</li>
            <li v-if="details.creator">Creator: {{details.creator}}</li>
            <li v-if="details.writer">Writer: {{details.writer}}</li>
            <li v-if="details.penciler">Penciller: {{details.penciler}}</li>
            <li v-if="details.coverArtist">Cover Artist: {{details.coverArtist}}</li>
          </ul>
          <div>
            <p>{{details.description | cropDescription(showFullDescription)}}</p>
            <div @click="showFullDescription = !showFullDescription">
              <span v-show="showFullDescription">Read More</span>
              <span v-show="!showFullDescription">Read Less</span>
            </div>
          </div>
        </div>
        <div class="intro-content-pricing">
          <p>{{readOnlineDevice}}</p>
          <div class="princing-values">
            <ul>
              <li v-for="(item, index) in details.prices" :class="item.type">{{item.price}}</li>
            </ul>
          </div>
          <p>{{customerRating}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapState, mapActions, mapGetters } from 'vuex';
  import productHelper from '../../models/helpers/product-helper';

  export default {
    name: 'StoreProductDetails',
    props: ['details'],
    data() {
      return {
        readOnlineDevice: this.$appConfig.lang.TITLES.readOnlineDevice,
        customerRating: this.$appConfig.lang.TITLES.customerRating,
        showFullDescription: false,
      }
    },
    filters: {

      // Change creator name
      cropDescription(description, status) {

        // Wait to get a description
        if (description) {
          return productHelper.readDescription(description, status);
        }
      }
    },
  };

</script>
