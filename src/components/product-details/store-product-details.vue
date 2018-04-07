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
            <li v-if="details.modified">
              <b>{{published}}:</b> {{details.modified}}
            </li>
            <li v-if="details.creator">
              <b>{{creator}}:</b> {{details.creator}}
            </li>
            <li v-if="details.writer">
              <b>{{writer}}:</b> {{details.writer}}
            </li>
            <li v-if="details.penciler">
              <b>{{penciller}}:</b> {{details.penciler}}
            </li>
            <li v-if="details.coverArtist">
              <b>{{coverArtist}}:</b> {{details.coverArtist}}
            </li>
          </ul>
          <p class="description-text" v-if="details.description">
            {{details.description | cropDescription(showMoreDescription)}}
            <button class="description-text-read pointer" @click="showMoreDescription = !showMoreDescription">
              <div class="text-read-button-more" v-show="showMoreDescription">
                <span>[ + ]</span>
                <span class="text-red">{{readMore}}</span>
              </div>
              <div class="text-read-button-less" v-show="!showMoreDescription">
                <span>[ - ]</span>
                <span class="text-red">{{readLess}}</span>
              </div>
            </button>
          </p>
          <p v-else>{{noDescription}}</p>
        </div>
        <div class="intro-content-pricing align-center">
          <p>{{readOnlineDevice}}</p>
          <div class="princing-values">
            <ul class="unstyled-list">
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
        published: this.$appConfig.lang.TITLES.published,
        creator: this.$appConfig.lang.TITLES.creator,
        writer: this.$appConfig.lang.TITLES.writer,
        penciller: this.$appConfig.lang.TITLES.penciller,
        coverArtist: this.$appConfig.lang.TITLES.coverArtist,
        readMore: this.$appConfig.lang.TITLES.readMore,
        readLess: this.$appConfig.lang.TITLES.readLess,
        noDescription: this.$appConfig.lang.TITLES.noDescription,
        showMoreDescription: true,
      }
    },
    filters: {

      // Change description
      cropDescription(description, status) {

        // Wait to get a description
        if (description) {
          return productHelper.cropDescription(description, status);
        }
      }
    },
  };

</script>
