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
			developerState: false,
			calcutaedHeightCrutch: 0,
			elem: document.body
		}
	},

	mounted() {
		document.addEventListener('scroll', () => {
			if (window.scrollY === 0) {
				document.styleSheets[0].insertRule(
					'body::-webkit-scrollbar { width: 1px } ',
					0
				)
				document.styleSheets[0].insertRule('html { scrollBar-width: none } ', 0)
				document.querySelector('.main')!.classList.remove('scrolled')
			}
		})
		// delete scrollbar
		document.styleSheets[0].insertRule(
			'body::-webkit-scrollbar { width: 1px } ',
			0
		)
		// delete scrollbar in firefox
		document.styleSheets[0].insertRule('html { scrollBar-width: none } ', 0)
		this.calcutaedHeightCrutch =
			(document.querySelector('.crutch') as HTMLElement).clientHeight / 2

		this.elem = document.querySelector('.main')!
	},
	unmounted() {
		document.body.removeAttribute('style')
		// delete listener
		for (let event_name of ['scroll']) {
			window.addEventListener(
				event_name,
				function (event) {
					event.stopImmediatePropagation()
				},
				true
			)
		}
	},
	methods: {
		ScrollToDeveloper(e: Event) {
			let scrollBottom: number =
				(e.target as HTMLDivElement).scrollHeight -
				(e.target as HTMLDivElement).scrollTop -
				(e.target as HTMLDivElement).offsetHeight

			if (scrollBottom <= this.calcutaedHeightCrutch) {
				this.elem.classList.add('scrolled'),
					setTimeout(() => {
						this.elem.scrollBy(0, this.calcutaedHeightCrutch * -1)
					}, 1)
				document.styleSheets[0].deleteRule(0)
				document.styleSheets[0].deleteRule(0)
				document.styleSheets[0].deleteRule(0)
			}
		}
	}
}
</script>

<template>
	<main class="main" @scroll="ScrollToDeveloper">
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
	scroll-snap-align: end;
}

.crutch2 {
	height: var(--C100vh);
	pointer-events: none;
}
</style>

<style>
.scrolled {
	pointer-events: none;
}
</style>
