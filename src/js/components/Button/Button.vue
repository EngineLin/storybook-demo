<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      defalut: false,
    },
    handleClick: {
      default: () => () => null,
    },
    color: {
      type: String,
      default: '#42b983',
    }
  },
}

</script>

<template>
<button
  class="button"
  :class="{rounded: rounded}"
  :style="{ color: color }"
  @click="handleClick"
>
<slot />
</button>

</template>

<style lang="sass" scoped>
.rounded
  border-radius: 5px

.button
  border: 3px solid
  padding: 10px 20px
  background-color: white
  outline: none
  &:hover
  cursor: pointer

</style>