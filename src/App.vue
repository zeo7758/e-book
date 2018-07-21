<template>
  <div id="app">
    <m-header :title='title' :isLeft='isLeft' :isRight='isRight'></m-header>
    <div class="cm-main">
      <router-view/>
    </div>
    <tabList v-if='isTab'></tabList>
  </div>
</template>

<script>
import axios from 'axios';
import tabList from './components/tabList/tabList';
import mHeader from './base/mHeader/mHeader';
export default {
  name: 'App',
  components: {tabList,mHeader},
  computed: {
    title() {
      return this.$route.meta.title;
    },
    isTab() {
      return this.$route.meta.isTab;
    },
    isRight() {
      return this.$route.meta.isRight;
    },
    isLeft() {
      return this.$route.meta.isLeft;
    },
  }
}
</script>

<style>

</style>
