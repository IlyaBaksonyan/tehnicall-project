<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger)

function addScrollClass() {
	gsap.from('.intro', {
		duration: 1,
		perspective: '200px',

		x: '-50vw',
		opacity: 0,
		ease: 'linear',
		scrollTrigger: {
			trigger: '.intro',
			markers: true,
			start: 'top bottom-=100', //when top of herman passes 75% viewport height
			//when bottom of herman passes 25% viewport height
			//events: onEnter onLeave onEnterBack onLeaveBack
			toggleActions: 'play none none none'
			//options: play, pause, resume, reset, restart, complete, reverse,none
		}
	})
}

onMounted(() => {
	addScrollClass()
})
</script>

<script lang="ts">
export default {
	name: 'Developer',
	mounted() {}
}
</script>
<template>
	<section class="developerApproach">
		<section class="intro">
			<div class="wrapper-text">
				<p>Когда компании занимаются развитием какого-то продукта</p>
				<h1>
					Офис / <br />
					Продуктовая компания
				</h1>
			</div>
		</section>
		<div class="gap"></div>
		<div class="container"></div>
	</section>
</template>

<style scoped lang="scss">
.developerApproach {
	z-index: 15;
	background: #000;
	margin-top: var(--header-size);
	margin-bottom: calc(var(--footer-margin-top) * -1);
}

.gap {
	min-height: 25vh;
}

.intro {
	display: flex;
	align-items: center;

	background-image: url(/tehnicall-project/images/developer/intro.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	.wrapper-text {
		margin-left: 10vw;
		backdrop-filter: blur(6px);
		box-shadow: 0 6px 18px rgb(0 0 0 / 20%), 0 16px 28px rgb(0 0 0 / 20%);
		text-shadow: 0 0 12px rgb(0 0 0 / 60%);
		border-radius: 20px;
		h1 {
			color: var(--FP-Developer-intro-color);
			text-transform: uppercase;
		}
	}
}
</style>
