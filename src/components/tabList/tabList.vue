<template>
  <article class="tabList cm-fix">
      <ul class="cm-flex-col">
        <li class=" cm-flex1">
          <router-link to="/bookStage">书架</router-link>
        </li>
        <li class=" cm-flex1 rank">
          <router-link to="/bookRank">排行榜</router-link>
        </li>
        <li class=" cm-flex1">
          <router-link to="/personCenter">个人中心</router-link>
        </li>
      </ul>
  </article>
</template>

<script>
export default {
  name: 'tabList',
}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';
.tabList
    width: 100%
    height: 40px
    bottom: 0
    background $bgc-blue-1
    color: #fff
    z-index: 30
    .cm-flex1
        height: 40px
        line-height: 40px
        text-align: center
        a
            display inline-block
            width 100%
            height 40px
        .router-link-active
            background rgb(11, 115, 167)
    .rank
        border-right: 1px solid #fff
        border-left: 1px solid #fff

</style>
