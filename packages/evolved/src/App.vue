<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<Test />
	<HelloWorld msg="Hello Vue 3 + TypeScript + Vite test" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import { Test } from '@core/main';

export default defineComponent({
  name: 'App',
  components: {
    'Test': Test,
    'HelloWorld': HelloWorld
  }
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