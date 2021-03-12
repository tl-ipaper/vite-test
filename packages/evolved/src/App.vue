<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<Test />
	<HelloWorld :msg="myReactiveProperty" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { Test } from '@core/main';
import { scaleWithRounding } from "@evolved/utils/math";

export default defineComponent({
  name: 'App',
  components: {
    Test,
    HelloWorld
  },
  methods: {
    scaleSomething: (val: number) => scaleWithRounding(val, 0.5),
  },
  data: () => ({
    myReactiveProperty: 'Yarn 2/Vue 3/TypeScript/Jest/Playwright project template.'
  }),
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
