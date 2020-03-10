<template>
  <div class="header-wrapper">
    <div class="el-icon-menu icon" @click="changeCollapse"></div>
    <div class="el-icon-switch-button logout" @click="logout"></div>
    <div class="username">{{username}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUsername } from '@/assets/js/cookies'

export default {
  computed: {
    ...mapState([
      'isCollapse'
    ]),
    username () {
      return getUsername()
    }
  },
  methods: {
    changeCollapse () {
      this.$store.commit('SET_IS_COLLAPSE')
    },
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/layout.styl'

.header-wrapper
  position fixed
  top 0
  right 0
  height $header
  background #fff
  box-shadow 0 3px 16px 0 rgba(0, 0, 0, 0.1)
  z-index 1000
  transition left 0.3s ease
  .icon
    line-height $header
    font-size 20px
    color #666
    margin-left 15px
    cursor pointer
    &:hover
      color #bbb
  .username
    line-height $header
    float right
    font-size 20px
    margin-right 15px
  .logout
    line-height $header
    float right
    font-size 20px
    margin-right 15px
    cursor pointer
    &:hover
      color #bbb

.open
  .header-wrapper
    left $navMenu
.close
  .header-wrapper
    left $navMenuMin
</style>
