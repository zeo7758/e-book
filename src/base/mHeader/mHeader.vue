<template>
  <section class="cm-fix header">
      <div class="cm-left-btn" v-show='isLeft' @click='leftBtn'></div>
      <p class="title">
        {{title}}
      </p>
      <div class="cm-right-btn" v-show='isRight'></div>
  </section>
</template>

<script>
export default {
  name: 'mHeader',
  props:{
    title: {
      type: String,
      default: ''
    },
    isLeft: {
      type: Boolean,
      default: false,
    },
    isRight: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
      leftBtn() {
          this.$router.back();
      }
  }
}
</script>

<style lang="styl">
@import '../../stylesheets/ui.styl';
  .header
      top 0
      height 40px
      width 100%
      background $bgc-blue-1
      .title
          text-align center
          margin 0 auto
          height 40px
          line-height 40px
          display inline-block
          color $clr-white
          width 100%
      .cm-left-btn
          top 14px
          left 14px
          position absolute
      .cm-right-btn
          top 14px
          right 14px
          position absolute
</style>
