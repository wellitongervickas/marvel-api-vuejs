<style lang="scss">
  @import 'store-alerts-float';
</style>

<template>
  <div class="alert-float flex-around">
    <transition-group tag="div" class="alert-float-list" name="fade">
      <div
        class="alert-float-item"
        :class="`alert-float-item--${item.type}`"
        v-for="(item, index) in aletsFloat.list" :key="item.timestamp">
        <div class="alert-float-item-message align-center transition-slow" v-show="item.status">{{item.message}}</div>
      </div>
    </transition-group>
  </div>
</template>

<script>

  import { mapGetters, mapActions, mapState } from 'vuex';
  import alertHelper from '../../../models/helpers/alert-helper';

  export default {
    name: 'StoreAlertsFloat',
    computed: {
      ...mapGetters(['getAlertList']),
      ...mapState(['aletsFloat'])
    },
    methods: {
      ...mapActions([
        'updateAlertList'
      ])
    },
    watch: {

      /**
        * This function listener list of alerts
        * and remove after few seconds
        *
      */

      getAlertList: function() {
        this.updateAlertList = alertHelper.removeAlerts(this.aletsFloat.list);
      }
    }
  }
</script>
