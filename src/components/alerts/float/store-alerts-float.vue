<style lang="scss">
  @import 'store-alerts-float';
</style>

<template>
  <div class="alert-float">
    <div class="alert-float-list">
      <div class="alert-float-item">hello from alert</div>
    </div>
  </div>
</template>

<script>

  import { mapGetters, mapState, mapActions  } from 'vuex';
  import alertHelper from '../../../models/helpers/alert-helper';

  export default {
    name: 'StoreAlertsFloat'
  }
</script>
