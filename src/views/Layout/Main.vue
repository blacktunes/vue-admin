<template>
  <div class="main-wrapper">
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/layout.styl'

.main-wrapper
  position fixed
  top $header
  right 0
  bottom 0
  border 15px solid #f7f7f7
  border-bottom none
  box-sizing border-box
  transition left 0.3s ease
  .main-content
    padding 15px 15px 0px 15px

.open
  .main-wrapper
    left $navMenu
.close
  .main-wrapper
    left $navMenuMin
</style>
