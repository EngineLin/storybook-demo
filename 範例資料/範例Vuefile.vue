// template、script、style 標籤順序可以依照自己的喜好設定

<script>
export default {
  /**
   * 輸出的 Vue 物件，基本上放置 date、methods(方法)、computed、以及created(Vue 組件完成之前的行動)... 等等
   */
  name: 'Component name',

  date: function () {
    return {
      yourdata: 'yourdata',
    }
  },

  methdos: {
    fun01: function() {
      console.log('fun01')
    }
  }
}
</script>

<template>
  <!-- 放置組件的 HTML，能夠妥善使用 v-on、v-bind、v-if、v-else、v-for... 等等語法 -->
  <div id="main">
    ...
  </div>
</template>

<style lang="sass" scoped>
  // 預設 sass 格式，Webpack 已經寫好轉換機制。
  @mixin size($w, $h: $w)
    width: $w
    height: $w

  #main
    size(100px)
</style>