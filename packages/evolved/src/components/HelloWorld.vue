<template>
	<h1>{{ msg }}</h1>

	<p style="line-height: 1.5;">
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
		+
		<a
			href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
			target="_blank">Vetur</a>
		or
		<a
			href="https://github.com/johnsoncodehk/volar"
			target="_blank">Volar</a>
		(if using
		<code>&lt;script setup&gt;</code>)
    <br>
    You can also save yourself all the trouble of setting that up and simply use WebStorm.
	</p>

	<p>See <code>README.md</code> for more information.</p>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a> |
		<a href="https://github.com/vuejs/vue-test-utils-next" target="_blank">Vue Test Utils</a>
	</p>

	<button id="e2e-test" v-on:click="count++">Reactive counter: {{ count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const count = ref(0);
    return { count };
  }
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
