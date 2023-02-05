<script setup lang="ts">
import Header from './components/layout/Header/Header.vue'
import Footer from './components/layout/Footer/Footer.vue'
</script>

<script lang="ts">
import { RouterView } from 'vue-router'

export default {
	name: 'Vue',
	mounted() {
		let path = localStorage.getItem('path')
		if (path) {
			localStorage.removeItem('path')
			this.router.navigate([path])
		}
	}
}
</script>

<template>
	<div class="app">
		<Header />
		<div class="content">
			<RouterView />
		</div>
		<Footer />
	</div>
</template>

<style scoped lang="scss">
.app {
	display: flex;
	flex-direction: column;
}

.content {
	min-height: calc(100vh - var(--footer-height) - var(--header-size));
	display: flex;
	flex-direction: column;
}
</style>
