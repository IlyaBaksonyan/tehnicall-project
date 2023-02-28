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
	scrollTop: true,
	data() {
		return {
			headerHeight: 64,
			stateDeveloper: true,
			stateMain: true,
			calcutaedHeightCrutch: 0,
			elem: document.body,
			FIREFOX: /Firefox/i.test(navigator.userAgent)
		}
	},

	mounted() {
		// delete scrollbar
		this.$nextTick(() => {
			if (window.scrollY === 0) {
				if (this.FIREFOX) {
					// delete scrollbar in firefox
					document.styleSheets[0].insertRule(
						'html { scrollBar-width: none } ',
						0
					)
				} else {
					document.styleSheets[0].insertRule(
						'body::-webkit-scrollbar { width: 1px } ',
						1
					)
				}

				this.elem.classList.remove('scrolled')
			}
		})

		this.elem = document.querySelector('.main')!

		this.calcutaedHeightCrutch =
			((document.querySelector('.crutch') as HTMLElement).clientHeight * 99) /
			100
		this.elem.classList.add('scrolled')

		document.addEventListener('scroll', () => {
			if (window.scrollY === 0) {
				if (this.stateMain) {
					if (this.FIREFOX) {
						document.styleSheets[0].insertRule(
							'html { scrollBar-width: none } ',
							0
						)
					} else {
						document.styleSheets[0].insertRule(
							'body::-webkit-scrollbar { width: 1px } ',
							1
						)
					}
					this.elem.classList.remove('scrolled')
					this.stateDeveloper = false
					setTimeout(() => (this.stateDeveloper = true), 1000)
				}
			}
		})
	},
	unmounted() {
		document.body.removeAttribute('style')
	},
	methods: {
		ScrollToDeveloper(e: Event) {
			let scrollBottom: number =
				(e.target as HTMLDivElement).scrollHeight -
				(e.target as HTMLDivElement).scrollTop -
				(e.target as HTMLDivElement).offsetHeight

			if (scrollBottom <= this.calcutaedHeightCrutch) {
				if (this.stateDeveloper) {
					this.elem.classList.add('scrolled')
					this.elem.scrollBy(0, this.calcutaedHeightCrutch * -1)
					document.documentElement.scrollBy(0, 500)

					if (this.FIREFOX) {
						document.styleSheets[0].deleteRule(0)
					} else {
						document.styleSheets[0].deleteRule(1)
					}
					this.stateDeveloper = false
					setTimeout(() => (this.stateDeveloper = true), 1000)
				}
			}
		}
	}
}
</script>

<template>
	<main
		class="main"
		@scroll="ScrollToDeveloper"
	>
		<div class="container">
			<firstScreen />
			<noCode />
			<freelancerApproach />
			<div class="crutch" />
		</div>
	</main>
	<developerApproach id="developerApproach" />
</template>

<style scoped lang="scss">
.main {
	position: sticky;
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
	background: var(--FirstP-Main-Background);
}
.crutch {
	min-height: 10vh;
	scroll-snap-align: start;

	::after {
		content: '';
	}
}

.scrolled {
	pointer-events: none;
	filter: blur(5px);
}
</style>
