<script setup lang="ts">
interface IProps {
  name: string,
  link: string
}
const props = withDefaults(defineProps<IProps>(), {
  name: 'MenuPoint',
  link: '/'
})
</script>

<template>
  <router-link :to="props.link" class="menu-point" active-class="menu-point__active">
    <span class="menu-point__name">{{ props.name }}</span>
  </router-link>
</template>

<style lang="sass" scoped>
  .menu-point
    padding: 4px 16px
    margin: 0 4px
    border-radius: 4px
    &__name
      font-weight: 600
    &:hover
      background-color: hsla(27, 72%, 51%, 0.2)
    &__active
      background-color: hsla(153, 14%, 85%, 0.2)
</style>