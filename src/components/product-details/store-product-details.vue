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
              <div class="text-read-button-more" v-show="showMoreDescription && details.description.length > 100">
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
        <div class="intro-content-pricing flex-column-center flex-center align-center" v-if="details.prices">
          <p class="princing-digital-description text-uppercase" v-show="details.digitalRead">{{readOnlineDevice}}</p>
          <ul class="princing-values unstyled-list">
            <li
              v-for="(item, index) in details.prices"
              class="flex-column-between"
              :class="{'princing-more-values': index > 0}">
              <span class="princing-values-currency text-uppercase">$ {{item.price}}</span>
              <span class="princing-values-description text-uppercase" :class="item.type">
                {{item.type | priceType(digitalPurchasePrice, printPrice)}}
              </span>
            </li>
          </ul>
          <div class="pricing-purchase-button">
            <button type="button" class="btn btn-red text-white text-uppercase" @click="addProductToCart(details)">Add to cart</button>
          </div>
          <div class="princing-rating-description">
            <p class="text-uppercase">{{customerRating}}</p>
            <store-rating rating="4"></store-rating>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapActions } from 'vuex';
  import productHelper from '../../models/helpers/product-helper';
  import systemHelper from '../../models/helpers/system-helper';
  import StoreRating from '../rating/store-rating.vue';

  export default {
    name: 'StoreProductDetails',
    components: {
      StoreRating
    },
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
        digitalPurchasePrice: this.$appConfig.lang.TITLES.digitalPurchasePrice,
        printPrice: this.$appConfig.lang.TITLES.printPrice,
        showMoreDescription: true,
      }
    },
    methods: {
      ...mapActions([
        'addTocart'
      ]),
      addProductToCart(product) {

        // Scroll to top again
        systemHelper.scrollTo(document.documentElement);
        this.addTocart(product);
      }
    },
    filters: {

      // Change description
      cropDescription(description, status) {

        // Wait to get a description
        if (description) {
          return productHelper.cropDescription(description, status);
        }
      },
      priceType(type, digital, print) {
        if (type == 'printPrice') {

          return print;
        } else if (type == 'digitalPurchasePrice') {

          return digital;
        } else {

          return type;
        }
      }
    },
  };

</script>
