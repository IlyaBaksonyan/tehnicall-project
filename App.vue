<script lang="ts">
export default {
	name: 'Vue',
	mounted() {
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01
			document.documentElement.style.setProperty('--vh', `${vh}px`)
		})
	}
}
</script>

<template>
	<LazyLayoutHeader />
	<NuxtPage />
	<LazyLayoutFooter />
</template>
