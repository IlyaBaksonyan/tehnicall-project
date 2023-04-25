<script setup lang="ts">
//components
import cmsUsingSection from '../blocks/cmsUsingSection.vue'
//components
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
//library
//types
import { UsingSection } from '~/assets/interfaces/usingSection'
//types
//json
import json from '~/assets/letters/cmsUsage.json'
//json

const usingSections = ref<Array<UsingSection>>(json.cmsUsage)

function animationScroll() {
	const scroller = '.cmsSection'
	const container = '.CMS__using'

	const tlAnimation = gsap.timeline({
		scrollTrigger: {
			//markers: true,
			trigger: container,
			scroller: scroller,
			start: 'start start',
			scrub: 1,
			snap: {
				snapTo: 1,
				duration: 30,
				// directional: true,
				ease: 'ease'
			},
			end: 'bottom bottom'
		}
	})
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationScroll()
})
onUnmounted(() => {})
</script>
<template>
	<div class="CMS__using">
		<cmsUsingSection v-for="(item, i) in usingSections" :key="i" :item_data="item" />
	</div>
</template>
<style scoped lang="scss">
.CMS {
	&__using {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		padding-block: 2rem;
		gap: 1rem;
	}
}
</style>
