<script lang="ts">
import firstScreen from './firstScreen/firstScreen.vue'
import noCode from './noCode/noCode.vue'
import freelancerApproach from './freelancerApproach/freelancerApproach.vue'
import developerApproach from './developerApproach/developerApproach.vue'

export default {
	name: 'FirstPage',
	components: {
		firstScreen,
		noCode,
		freelancerApproach,
		developerApproach
	},
	scrollToTop: true,
	data() {
		return {
			headerHeight: 64,
			mainState: false,
			developerState: false
		}
	},

	mounted() {
		document.styleSheets[0].insertRule(
			'body::-webkit-scrollbar { width: 1px; }',
			0
		)
		document.addEventListener('scroll', () => {
			if (window.scrollY === 0) {
				document.querySelector('.main')!.classList.remove('scrolled')
				document.styleSheets[0].insertRule(
					'body::-webkit-scrollbar { width: 1px; }',
					0
				)
			}
		})
	},
	unmounted() {
		document.body.removeAttribute('style')
	},
	methods: {
		ScrollToDeveloper(e: Event) {
			const scrollBottom: number =
				(e.target as HTMLDivElement).scrollHeight -
				(e.target as HTMLDivElement).scrollTop -
				(e.target as HTMLDivElement).offsetHeight
			const calcutaedHeightCrutch: number =
				(document.querySelector('.crutch') as HTMLElement).clientHeight / 2
			const elem = document.querySelector('.main')!
			if (scrollBottom <= calcutaedHeightCrutch) {
				elem.classList.add('scrolled'), elem.scrollBy(0, calcutaedHeightCrutch)
				document.styleSheets[0].deleteRule(0)
			}
		}
	}
}
</script>

<template>
	<main class="main" @scroll.passive="ScrollToDeveloper">
		<div class="container">
			<firstScreen />
			<noCode />
			<freelancerApproach />
			<div class="crutch"></div>
		</div>
	</main>
	<div class="crutch2"></div>
	<developerApproach id="developerApproach" />
</template>

<style scoped lang="scss">
.main {
	position: fixed;
	right: 0;
	left: 0;
	top: var(--header-size);
	scroll-snap-type: y mandatory;
	scroll-snap-stop: always;
	height: var(--C100vh);
	max-height: var(--C100vh);
	overflow-y: auto;
	overflow-x: hidden;

	section {
		height: var(--C100vh);
	}
}
.crutch {
	min-height: 10vh;
}

.crutch2 {
	height: var(--C100vh);
	pointer-events: none;
}
</style>

<style>
.scrolled {
	overflow: hidden !important;
}
</style>
