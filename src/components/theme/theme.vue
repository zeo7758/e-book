<template>
  <section class="theme">
      <ul class="theme-wrap">
          <li class='theme-item' v-for="item in themeConfig" :style='{"color": item.color,"border": "1px solid " + item.color}'>
              <div class="tag" :style='{background: item.color}'></div>
              <p class='theme-name'>
                  {{item.name}}
              </p>
          </li>
      </ul>
  </section>
</template>

<script>
import {themeConfig} from '../../config/theme';

export default {
    name: 'theme',
    data() {
        return {
            themeConfig,

        }
    }

}
</script>
<style lang="styl">
@import '../../stylesheets/ui.styl';

.theme
    width 100%
    height 100%
    background $clr-white
    .theme-wrap
        padding 24px
        display flex
        flex-wrap wrap
        justify-content space-between
        .theme-item
            border 1px solid red
            width 30%
            margin-top 20px
            padding 10px 0
            font-size $font-12
            .tag
                width 20%
                padding-top 20%
                background red
                margin 0 auto 10px
            .theme-name
                text-align center
        /*.theme-blue

        .theme-green

        .theme-purple

        .theme-red*/


</style>
