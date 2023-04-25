<script setup lang="ts">
//components
import particles from '~~/ui/particles/particles.vue'
//components
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
//library
function animationScroll() {
	const scroller = '.main'
	const container = '.firstScreen'
	const tlAnimation = gsap.timeline({
		scrollTrigger: {
			//markers: true,
			trigger: container,
			scroller: scroller,
			start: 'start start',
			scrub: 1,
			snap: {
				snapTo: 1,
				duration: 1,
				directional: true,
				ease: 'ease'
			},
			end: 'bottom'
		}
	})
}
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationScroll()
})
</script>

<template>
	<section class="firstScreen">
		<div id="app">
			<particles />
		</div>
		<div class="container">
			<div class="firstScreen__wrapper">
				<div class="firstScreen__intro">
					<h1 class="icon-style">project</h1>
					<h2>Затеев Илья</h2>
					<h2>Front-end Developer</h2>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.firstScreen {
	&__wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100vh;
		h2 {
			font-weight: 400;
		}
	}
}
</style>
