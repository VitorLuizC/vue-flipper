# vue-flipper

![License](https://badgen.net/github/license/VitorLuizC/vue-flipper)
![Library size](https://badgen.net/bundlephobia/minzip/vue-flipper)
![Dependencies](https://badgen.net/david/dep/VitorLuizC/vue-flipper)

A component to flip elements with a nice transition.

<p align="center">
  <img
    src="https://media.giphy.com/media/XKSCnlDkjbaXEkSODW/giphy.gif"
    alt="vue-flipper GIF"
    title="A GIF shows VueFlipper example."
  />
</p>

- :zap: It is really small, JavaScript + CSS (min + gzip) is smaller than 1KB

- :art: CSS uses Stylus + BEM + Autoprefixer

- :package: There are ESM, CommonJS and UMD distributions

You can se by youself on [Codepen](https://codepen.io/VitorLuizC/pen/GPJEEN) or [CodeSandbox](https://codesandbox.io/s/m7lowxvwm9).

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install vue-flipper --save

# For Yarn, use the command below.
yarn add vue-flipper
```

## Usage

Just import `Flipper` component from `'vue-flipper'` and use it like any other Vue component.

```vue
<template>
  <flipper
    width="270px"
    height="300px"
    :flipped="flipped"
    @click="onClick"
  >
    <div slot="front">Frontface</div>

    <div slot="back">Backface</div>
  </flipper>
</template>

<script>
import Flipper from 'vue-flipper';

export default {
  components: { Flipper },
  data () {
    return {
      flipped: false
    };
  },
  methods: {
    onClick () {
      this.flipped = !this.flipped;
    }
  }
};
</script>

<style src="vue-flipper/dist/vue-flipper.css" />
```

### Usage as global component

If you need `<flipper />` available everywhere, you can register it as a global component.

> And don't forget to import its CSS.

```js
import 'vue-flipper/dist/vue-flipper.css';
import Vue from 'vue';
import Flipper from 'vue-flipper';

Vue.component('flipper', Flipper);
```

### Usage from CDN

`vue-flipper` has an UMD bundle and CSS available through JSDelivr and Unpkg CDNs.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-flipper/dist/vue-flipper.css" />

<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-flipper"></script>

<script>
  /**
   * vue-flipper is available through VueFlipper.
   */
  console.dir(VueFlipper);

  /**
   * Vue.use will add flipper as global component.
   */
  Vue.component('flipper', VueFlipper);
</script>
```

## Props

| Name | Description | Type | Default
|:---- |:----------- |:---- |:-------
| flipped | If `true` flips to backface, otherwise to frontface. | `Boolean` | `false`
| width | Component's width. | `CSSLength (String)` | `'100%'`
| height | Component's height. | `CSSLength (String)` | `'100%'`
| duration | Component's transition duration. | `CSSTime (String)` | `'0.5s'`
| transition | Component's transition timing function. | `CSSTransitionFunction (String)` | `'ease-in'`

## Events

`Flipper` component pass up every `HTMLElement` event. So, you can use `@click`, `@mouseover` etc.

## License

Released under [MIT License](./LICENSE).
