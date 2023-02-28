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
		this.elem.classList.add('scrolled')

		document.addEventListener('scroll', () => {
			this.ScrollMain()
			this.ScrollToDeveloper()
			if (window.scrollY === 200) {
				if (this.FIREFOX) {
					document.styleSheets[0].deleteRule(0)
				} else {
					document.styleSheets[0].deleteRule(1)
				}
			}
		})
	},
	unmounted() {
		document.body.removeAttribute('style')
	},
	methods: {
		ScrollMain() {
			if (window.scrollY === 0) {
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
			}
		},
		ScrollToDeveloper() {
			if (window.scrollY > 0 && window.scrollY < window.innerHeight) {
				this.elem.classList.add('scrolled')
				const filterBlur = window.scrollY * 0.01
				this.elem.style.filter = `blur(${filterBlur}px)`
			}
		}
	}
}
</script>

<template>
	<main class="main">
		<div class="container">
			<firstScreen />
			<noCode />
			<freelancerApproach />
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
	display: flex;
	justify-content: center;
	align-items: center;
}

.scrolled {
	pointer-events: none;
}
</style>
