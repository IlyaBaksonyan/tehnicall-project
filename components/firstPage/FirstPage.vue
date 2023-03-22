<script lang="ts">
import firstScreen from './firstScreen/firstScreen.vue'
import noCode from './noCode/noCode.vue'
import freelancerApproach from './freelancerApproach/freelancerApproach.vue'
import developerApproach from './developerApproach/developerApproach.vue'
import ArrowDown from '~~/assets/Icons/arrowDown.vue'

export default {
	name: 'FirstPage',
	components: {
		firstScreen,
		noCode,
		freelancerApproach,
		developerApproach,
		ArrowDown
	},
	data() {
		return {
			stateMain: true,
			stateFilter: true,
			state1: true,
			elem: document.body,
			FIREFOX: /Firefox/i.test(navigator.userAgent)
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.elem = document.querySelector('.main')!
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
						0
					)
				}

				this.elem.classList.remove('scrolled')
				this.elem.style.filter = 'blur(0px)'
			}
		})

		document.addEventListener(
			'scroll',
			() => {
				this.ScrollMain()
				this.scrollDeveloper()
				this.SetBlur()
			},
			{ passive: true }
		)
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
				this.state1 = true
			}
		},
		scrollDeveloper() {
			if (window.scrollY > 0 && this.state1) {
				this.elem.classList.add('scrolled')
				if (this.FIREFOX) {
					document.styleSheets[0].deleteRule(0)
				} else {
					document.styleSheets[0].deleteRule(0)
					document.styleSheets[0].deleteRule(0)
				}
				this.state1 = false
			}
		},
		SetBlur() {
			if (window.scrollY === 0 || window.scrollY < window.innerHeight) {
				if (window.scrollY === 0) {
					this.elem.style.filter = 'blur(0px)'
					this.state1 = true
				} else {
					if (this.stateFilter) {
						const filterBlur = window.scrollY * 0.01
						this.elem.style.filter = `blur(${filterBlur}px)`
						this.stateFilter = false
						setTimeout(() => {
							this.stateFilter = true
						}, 400)
					}
				}
			}
		},
		ScrollButton() {
			window.scrollBy(0, window.innerHeight + 10)
		}
	}
}
</script>

<template>
	<main class="main">
		<firstScreen />
		<noCode />
		<freelancerApproach />
		<ArrowDown width="5rem" class="arrowDown" @click="ScrollButton" />
	</main>
	<developerApproach />
</template>

<style scoped lang="scss">
.main {
	position: sticky;
	right: 0;
	left: 0;
	z-index: 10;
	top: var(--header-size);
	scroll-snap-type: y mandatory;

	height: var(--C100vh);
	max-height: var(--C100vh);
	overflow-x: hidden;

	section {
		height: var(--C100vh);
	}
	background: var(--FirstP-Main-Background);
}
.arrowDown {
	cursor: pointer;
	transform: translate(-50%, -100%);
	left: 50%;
	position: absolute;

	&:hover {
		stroke: rgba(255, 255, 255, 0.579);
	}
}

.scrolled {
	pointer-events: none;
}
</style>
