<template>
<router-view/>
<main-tab-bar/>
</template>

<script>

import MainTabBar from './components/content/MainTabbar/MainTabBar'
export default{
  name: 'App',
  components: {
    MainTabBar
  }
}

</script>

<style>
  @import url("assets/css/base.css");
</style>
