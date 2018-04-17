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
            <button
            type="button"
            class="btn btn-red text-white text-uppercase"
            @click="addProductToCart(details)">
              {{addToCart}}
            </button>
          </div>
          <div class="princing-rating-description">
            <p class="text-uppercase">{{customerRating}}</p>
            <store-rating rating="3.5"></store-rating>
          </div>
        </div>
      </div>
    </div>
    <div class="details container">
      <div class="details-header">
        <h2 class="text-uppercase text-red">{{moreDetails}}</h2>
      </div>
      <div class="details-tabs">
        <div class="details-tabs-header">
          <ul class="unstyled-list flex">
            <li
              class="transition-slow text-uppercase pointer"
              :class="{'active': item.status}"
              @click="changeActiveTab(item)"
              v-for="(item, index) in tabList"
              :key="item.id">
              {{item.title}}
            </li>
          </ul>
        </div>
        <div class="details-tabs-content">
          <div class="tabs-content-info" v-show="tabList[0].status" :key="1">
            <ul class="content-info-list unstyled-list">
              <li><b>Rating:</b> 3.5</li>
              <li><b>Format:</b> {{details.format}}</li>
              <li><b>Price:</b> {{details.modified}}</li>
              <li><b>Upc:</b> {{details.upc}}</li>
              <li><b>FOC Date:</b> {{details.modified}}</li>
            </ul>
            <div class="content-info-text flex-around-center">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt dignissim mi, ac eleifend quam scelerisque eu. Donec at arcu in sapien ultricies posuere. Fusce mattis rutrum imperdiet. Quisque finibus massa quis imperdiet vestibulum. Aliquam metus nisl, finibus et ex at, commodo molestie turpis. Nam ut mattis lectus. Donec convallis arcu nec nibh sagittis, a mollis mi ullamcorper. Ut tristique arcu vel felis fermentum elementum.</p>
            </div>
          </div>
          <div class="tabs-content-cover" v-show="tabList[1].status" :key="2">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt dignissim mi, ac eleifend quam scelerisque eu. Donec at arcu in sapien ultricies posuere. Fusce mattis rutrum imperdiet. Quisque finibus massa quis imperdiet vestibulum. Aliquam metus nisl, finibus et ex at, commodo molestie turpis. Nam ut mattis lectus. Donec convallis arcu nec nibh sagittis, a mollis mi ullamcorper. Ut tristique arcu vel felis fermentum elementum.</p>
          </div>
          <div class="tabs-content-stories" v-show="tabList[2].status" :key="3">
            <ul v-if="details.stories">
              <li class="text-uppercase" v-for="(item, index) in details.stories.items">{{item.name}}</li>
            </ul>
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
        moreDetails: this.$appConfig.lang.TITLES.moreDetails,
        addToCart: this.$appConfig.lang.TITLES.addToCart,
        printPrice: this.$appConfig.lang.TITLES.printPrice,
        showMoreDescription: true,
        tabList: []
      }
    },
    methods: {

      ...mapActions([
        'addTocart'
      ]),

      addProductToCart(product) {

        systemHelper.scrollTo(document.documentElement);
        this.addTocart(product);
      },

      changeActiveTab(item) {
        this.tabList = productHelper.changeActiveTab(this.tabList, item);
      },
    },
    created() {
      this.tabList = productHelper.createTabList();
    },
    watch: {
      details: function () {

        // Reset active tab
        this.tabList = productHelper.changeActiveTab(this.tabList, this.tabList[0]);
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
