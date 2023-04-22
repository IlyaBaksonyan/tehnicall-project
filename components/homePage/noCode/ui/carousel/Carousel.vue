<script setup lang="ts">
//components
import carouselItem from './CarouselItem.vue'
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

let currentSlideIndex = ref<number>(0)

function animationCarousel() {
	const sectionsContainer = '.carousel__sections'
	const sectionsContainerElement: HTMLElement = document.querySelector('.carousel__sections')!
	const section = '.carousel__section'
	const container = '.noCode'
	const scroller = '.main'
	const sections = gsap.utils.toArray(section)
	const tlAnimation = gsap.timeline({
		scrollTrigger: {
			//markers: true,
			trigger: container,
			scroller: scroller,
			start: 'start start',
			scrub: 0.001,
			snap: {
				snapTo: 1 / (sections.length - 1),
				duration: 0.1,
				directional: true
			},
			end: () => '+=' + sectionsContainerElement.offsetWidth
		}
	})
	const tlAppearanceAnimation = gsap.timeline({
		scrollTrigger: {
			trigger: container,
			scroller: scroller,
			start: 'center-=100 center'
		}
	})
	ScrollTrigger.create({
		//markers: true,
		trigger: container,
		scroller: scroller,
		pin: true,
		scrub: false,
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
		<div class="carousel__sections" :style="`transform: translateX(-${currentSlideIndex * 100}%)`">
			<carouselItem
				v-for="(item, i) in props.carouselData"
				:key="i"
				:item_data="item"
				:currentSlideIndex="currentSlideIndex"
			>
			</carouselItem>

			<div class="carousel__section constructors">
				<div class="carousel__customSection__leftPart qualities">
					<ul>
						<li><b>Доступность:</b> полностью не требуются глубокие знания программирования</li>
						<li>
							<b>Скорость:</b> быстрое создание сайтов и приложений с помощью перетаскивания модулей
						</li>
						<li><b>Экономичность:</b> значительно дешевле чем заказ</li>
						<li>
							<b>Техническая поддержка:</b> предоставление хостинга и обновлений сайта конструктором
						</li>
					</ul>
				</div>
				<div class="carousel__customSection__rightPart qualities">
					<ul>
						<li>
							<b>Ограниченная настройка:</b> невозможность полностью настроить сайт, особенно в
							случае нестандартных требований к дизайну и функциональности.
						</li>
						<li>
							<b>Сложность масштабирования:</b> подходят для создания простых сайтов, но являются
							посредственным выбором для средних и сложных проектов, требующих индивидуальной
							функциональности и масштабируемости.
						</li>
					</ul>
				</div>
			</div>
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
	transition: all cubic-bezier(0.65, 0.04, 0, 0.92) 0.5s;
}
.constructors {
	display: flex;
	padding-inline: 7%;
	min-width: 100%;
	padding-block: 10%;
	height: 100%;
	gap: 5%;
	background: var(--article-bc);
	text-align: justify;

	.qualities {
		display: flex;
		width: 50%;
		font-weight: 400;
		ul {
			display: flex;
			flex-direction: column;
			gap: 7vh;
			font-size: max(1.8vmax, 0.6rem);
		}
	}

	&__leftPart {
		li {
			list-style: url(https://s.w.org/images/core/emoji/14.0.0/svg/2705.svg);
		}
	}

	&__rightPart {
		li {
			list-style: url(https://s.w.org/images/core/emoji/14.0.0/svg/274c.svg);
		}
	}
}
</style>

<!-- <carouselVerticalSections -->
<!-- :carouselData="props.carouselData" -->
<!-- :currentSlideIndex="currentSlideIndex" -->
<!-- /> -->
