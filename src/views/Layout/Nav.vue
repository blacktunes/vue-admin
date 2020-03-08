<template>
  <div class="nav-wrapper">
    <div class="logo">Logo</div>
    <el-menu :collapse="isCollapse"
             @open="handleOpen"
             @close="handleClose"
             background-color="#666"
             text-color="#fff"
             active-text-color="#fff">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>菜单1</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>菜单2</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'isCollapse'
    ])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/layout.styl'

.nav-wrapper
  position fixed
  top 0
  left 0
  height 100vh
  background #666
  transition all 0.3s ease
  .logo
    text-align center
    color #bbb
    transition all 0.3s ease
  & >>> .el-menu
    border-right none
  & >>> .el-menu-item-group__title
    padding 0 !important
  & >>> .el-submenu.is-opened.is-active
    .el-submenu__title
      background-color #444 !important
  .el-menu-item
    padding-left 48px !important
    font-size 14px
    &.is-active
      background-color #555 !important

.el-menu-item-group
  & >>> .el-menu-item-group__title
    padding 0 !important

.open
  .nav-wrapper
    width $navMenu
  .logo
    height 110px
    font-size 50px
    line-height 110px
.close
  .nav-wrapper
    width $navMenuMin
  .logo
    height $header
    font-size 20px
    line-height $header
</style>
