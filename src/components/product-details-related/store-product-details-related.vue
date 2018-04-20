<style lang="scss">
  @import 'store-product-details-related';
</style>

<template>
  <div class="store-product-details-related text-white">

    <div class="details-related-header container" v-show="characters && characters.available > 0">
      <h2 class="text-uppercase">More from: <span class="text-white">{{characters | getFirstCharacterName}}</span></h2>
    </div>

    <div class="details-related-content container relative">
      <transition-group name="list" tag="div" class="details-related-list">
        <div
          class="related-item flex-column-center transition-fast"
          :class="{'set-invisible': !item.status, 'set-visible': item.status}"
          v-for="(item, index) in relatedList"
          :key="item.id"
          :data-id="item.id"
          v-show="item.status">
          <div class="related-item-thumbnail flex-around-center">
            <router-link :to="{ name: 'product', params: { id: item.id }}">
              <img :src="item.image" :alt="item.title">
            </router-link>
          </div>
          <div class="related-item-title flex-column-between align-center">
            <h3 class="related-item-title-name">
              <router-link :to="{ name: 'product', params: { id: item.id }}">
                {{item.title}} - {{item.status}}
              </router-link>
            </h3>
            <span class="details-related-item-title-creator text-uppercase" v-if="item.creator">
              {{item.creator | inverseCreator}}
            </span>
          </div>
        </div>
      </transition-group>

      <div class="details-related-controls">
        <div @click.stop.prevent="prevSlide()">Prev</div>
        <div @click.stop.prevent="nextSlide()">Next</div>
      </div>


    </div>
  </div>
</template>

<script>

  import requestHelper from '../../models/helpers/request-helper';
  import productHelper from '../../models/helpers/product-helper';
  import productRelatedHelper from '../../models/helpers/product-related-helper';

  export default {
    name: 'StoreProductDetailsRelated',
    props: ['characters'],
    data() {
      return {
        relatedList: [],
        apikey: this.$appConfig.api.publicKey,
        privateKey: this.$appConfig.api.privateKey
      }
    },
    methods: {

      /**
        * This method together with the search method in the api makes
        * the initial insertion of the products on the screen
        *
      */

      getProducts () {

        // Create a object of parameters
        const ts = Date.now();
        const apikey = this.$appConfig.api.publicKey;
        const privateKey = this.$appConfig.api.privateKey;
        const hash = requestHelper.getHash(ts, privateKey, apikey);
        const url = `${this.$appConfig.api.url}/comics`;
        const params = {
          hasDigitalIssue: false,
          orderBy: '-focDate',
          limit: 8,
          ts,
          apikey,
          hash
        };

        return this.$http.get(url, {
          params
        })
        .then(response => {

          // Get products from api and return new list
          const productsList = productHelper.createList(response.data.data.results);
          this.relatedList = productRelatedHelper.init(productsList);

          // Disable loading
          this.loadingStatus = false;
        })
        .catch(err => {

          this.loadingStatus = false;
          console.error(err)
        });
      },

      nextSlide() {
        this.relatedList = productRelatedHelper.next(this.relatedList)
      },

      prevSlide() {
        this.relatedList = productRelatedHelper.prev(this.relatedList)
      },

    },
    created() {

      // when component is initialized call this functions
      this.getProducts();
    },
    watch: {

      // Reload products if will main product is changed
      characters: function () {

        this.getProducts();
      }
    },
    filters: {

      inverseCreator(name) {
        if (name) return productHelper.inverseCreator(name);
      },

      getFirstCharacterName(list) {
        if (list && list.available > 0) return list.items[0].name;
      }
    },
  };

</script>
