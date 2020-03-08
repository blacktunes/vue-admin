<template>
  <div :class="[isCollapse ? 'close' : 'open']">
    <layout-header></layout-header>
    <layout-nav></layout-nav>
    <layout-main></layout-main>
  </div>
</template>

<script type="text/ecmascript-6">
import LayoutHeader from './Layout/Header'
import LayoutNav from './Layout/Nav'
import LayoutMain from './Layout/Main'
import { mapState } from 'vuex'

export default {
  components: {
    LayoutHeader,
    LayoutNav,
    LayoutMain
  },
  computed: {
    ...mapState([
      'isCollapse'
    ])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
