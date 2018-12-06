<script>
export default {
  functional: true,
  props: {
    flipped: Boolean,
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    duration: {
      type: String,
      default: "0.5s"
    },
    transition: {
      type: String,
      default: "ease-in"
    }
  },
  render(h, context) {
    const flipped = Boolean(context.props.flipped);
    const children = context.slots();

    const wrapper = () => ({
      on: context.data.on,
      attrs: context.data.attrs,
      class: [
        "Flipper",
        context.data.class,
        context.data.staticClass,
        { "Flipper--flipped": flipped }
      ],
      style: {
        width: context.props.width,
        height: context.props.height
      }
    });

    const face = (pos) => ({
      class: ["Flipper__face", "Flipper__face--" + pos],
      style: {
        transitionDuration: context.props.duration,
        transitionTimingFunction: context.props.transition
      }
    });

    return (
      <div {...wrapper()}>
        <div {...face("front")}>{children.front}</div>
        <div {...face("back")}>{children.back}</div>
      </div>
    );
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
