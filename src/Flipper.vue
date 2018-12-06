<template>
  <div
    v-on="$listeners"
    v-bind="$attrs"
    :class="['Flipper', { 'Flipper--flipped': flipped }]"
    :style="styles.wrapper"
  >
    <div
      class="Flipper__face Flipper__face--front"
      :style="styles.face"
    >
      <slot name="front" />
    </div>
    <div
      class="Flipper__face Flipper__face--back"
      :style="styles.face"
    >
      <slot name="back" />
    </div>
  </div>
</template>

<script>
import { isCSSLength, isCSSTime } from './predicates';

export default {
  name: 'Flipper',
  props: {
    flipped: Boolean,
    width: {
      type: String,
      default: '100%',
      validator: isCSSLength
    },
    height: {
      type: String,
      default: '100%',
      validator: isCSSLength
    },
    duration: {
      type: String,
      default: '0.5s',
      validator: isCSSTime
    },
    transition: {
      type: String,
      default: 'ease-in'
    }
  },
  computed: {
    styles () {
      return {
        wrapper: { width: this.width, height: this.height },
        face: {
          transitionDuration: this.duration,
          transitionTimingFunction: this.transition
        }
      };
    }
  }
};
</script>

<style lang="stylus">
.Flipper
  overflow: hidden
  position: relative
  perspective: 1000px

  &__face
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    display: block
    overflow: hidden
    backface-visibility: hidden

  &__face--back
    transform: rotateY(180deg)
    visibility: hidden

  &--flipped
    & ^[0]__face--back
      transform: rotateY(360deg)
      visibility: visible

    & ^[0]__face--front
      transform: rotateY(180deg)
      visibility: hidden
</style>
