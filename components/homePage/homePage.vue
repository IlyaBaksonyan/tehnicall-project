<script setup lang="ts">
//components
import firstScreen from './firstScreen/firstScreen.vue'
//components
onBeforeRouteLeave((to: any, from: any, next: () => void) => {
	ScrollTrigger.getAll().forEach((trigger: any) => {
		trigger.kill()
	})
	next()
})
</script>

<template>
	<main class="main">
		<firstScreen />
		<HomePageNoCode />
		<IntrosFreelancer />
		<LayoutFooter />
	</main>
</template>

<style scoped lang="scss">
.main {
	filter: blur(0px);
	z-index: 10;

	//scroll-snap-type: y mandatory;
	scroll-snap-align: always;

	height: var(--C100vh);
	overflow-x: hidden;
	section {
		height: var(--C100vh);
		scroll-snap-align: start;
	}
	background: var(--FirstP-Main-Background);
}
</style>
