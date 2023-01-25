<script setup lang="ts">
import Header from './components/layout/Header/Header.vue'
import Footer from './components/layout/Footer/Footer.vue'
</script>

<script lang="ts">
import { RouterView } from 'vue-router'

export default {
	name: 'Vue'
}
</script>

<template>
	<div class="app">
		<Header />
		<RouterView />
		<Footer />
	</div>
</template>

<style scoped lang="scss">
.app {
	scroll-snap-type: y mandatory;
	height: 100vh;
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
