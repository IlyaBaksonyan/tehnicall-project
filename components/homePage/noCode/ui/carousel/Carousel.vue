<script setup lang="ts">
//components
import carouselItem from './CarouselItem.vue'
import qualitiesSection from './qualities/qualities.vue'
//components
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//library
//types
import type { Items, Blocks } from '@/assets/interfaces/noCode-interfaces'
//types

const props = defineProps({
	carouselData: {
		type: Array as PropType<Items[]>,
		default: () => []
	},
	blocksData: {
		type: Array as PropType<Blocks[]>,
		default: () => []
	}
})

function animationCarousel() {
	const scroller = '.main'
	const container = '.noCode'
	const section = '.carousel__section'
	const sectionsContainer = '.carousel__sections'
	const sectionsContainerElement: HTMLElement = document.querySelector('.carousel__sections')!
	const sections: HTMLElement[] = gsap.utils.toArray(section)
	const tlAppearanceAnimation = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scroller: scroller,
			start: 'center-=100 center'
		}
	})
	const tlAnimation = gsap.timeline({
		scrollTrigger: {
			//markers: true,
			trigger: container,
			scroller: scroller,
			start: 'start start',
			scrub: 1,
			snap: {
				snapTo: 1 / (sections.length - 1),
				duration: 1,
				ease: 'ease',
				directional: true
			},
			end: () => '+=' + sectionsContainerElement.offsetWidth
		}
	})

	ScrollTrigger.create({
		//markers: true,
		trigger: container,
		scroller: scroller,
		pin: true,
		scrub: false,
		anticipatePin: 1,
		end: () => '+=' + sectionsContainerElement.offsetWidth
	})
	tlAppearanceAnimation.to('.noCode__introScreen', {
		autoAlpha: 0
	})
	tlAnimation.to(sectionsContainer, {
		xPercent: -100 * (sections.length - 1),
		ease: 'none'
	})
}
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationCarousel()
})
</script>

<template>
	<div class="carousel">
		<div class="carousel__sections">
			<carouselItem
				v-for="(item, i) in props.carouselData"
				:key="i"
				:item_data="item"
			></carouselItem>
			<qualitiesSection />
		</div>
	</div>
</template>

<style scoped lang="scss">
.carousel {
	height: var(--C100vh);

	:deep(button:hover) {
		scale: 1;
	}
}
.carousel__sections {
	height: 100%;
	display: flex;
	will-change: transform;
}
</style>
