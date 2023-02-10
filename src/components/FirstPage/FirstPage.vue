<script lang="ts">
import firstScreen from './firstScreen/firstScreen.vue'
import noCode from './noCode/noCode.vue'
import freelancerApproach from './freelancerApproach/freelancerApproach.vue'
import developerApproach from './developerApproach/developerApproach.vue'

export default {
	name: 'firstPage',
	components: {
		firstScreen,
		noCode,
		freelancerApproach,
		developerApproach
	},
	data() {
		return {
			headerHeight: 64,
			mainState: false,
			developerState: false
		}
	},
	methods: {
		ScrollToDeveloper(e: any) {
			const scrollBottom =
				e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight
			const calcutaedHeightCrutch =
				(document.querySelector('.crutch') as HTMLElement).clientHeight / 2

			const elem =
				window.scrollY +
				document.querySelector('#developerApproach')!.getBoundingClientRect()
					.top -
				this.headerHeight

			if (!this.mainState == true) {
				if (scrollBottom <= calcutaedHeightCrutch) {
					window.scrollTo({ top: elem, behavior: 'smooth' })
					document.body.style.overflow = 'auto'
					console.log(5)
					this.mainState = true
					setTimeout(() => (this.mainState = false), 1000)
				}
			}
		},

		ScrollToMain() {
			const mainHeight = (
				document.querySelector('.main') as HTMLElement
			).getBoundingClientRect().height
			const scrollTop = window.scrollY
			const elem =
				window.scrollY +
				document.querySelector('.main')!.getBoundingClientRect().top -
				this.headerHeight

			if (!this.developerState == true) {
				if (scrollTop <= mainHeight) {
					window.scrollTo({ top: elem, behavior: 'smooth' })

					console.log(1)
					this.developerState = true
					setTimeout(() => (this.developerState = false), 1000)
				}
			}
		}
	},

	mounted() {
		window.onscroll = () => {
			setTimeout(() => this.ScrollToMain(), 1000)
			if (document.documentElement.scrollTop == 0) {
				document.body.style.overflow = 'hidden'
			}
		}
	},
	unmounted() {
		document.body.removeAttribute('style')
	}
}
</script>

<template>
	<div class="main" @scroll.passive="ScrollToDeveloper">
		<div class="container">
			<firstScreen />
			<noCode />
			<freelancerApproach />
			<div class="crutch"></div>
		</div>
	</div>
	<developerApproach id="developerApproach" />
</template>

<style scoped lang="scss">
.main {
	scroll-snap-type: y mandatory;
	height: calc(100vh - var(--header-size));
	margin-top: var(--header-size);
	overflow-y: auto;
	overflow-x: hidden;
}
.crutch {
	min-height: 10vh;
}
</style>

<!-- <script>
// Get the current scroll position
let currentScrollPosition = window.scrollY

// Set the scroll position to the desired position
let desiredScrollPosition = 100

// Get the animation frame ID
let animationFrameId = window.requestAnimationFrame(function () {
	// Calculate the scroll amount
	let scrollAmount = (desiredScrollPosition - currentScrollPosition) / 10

	// Scroll the window
	window.scrollTo(0, currentScrollPosition + scrollAmount)

	// Update the current scroll position
	currentScrollPosition = window.scrollY

	// If the desired scroll position has not been reached, call the requestAnimationFrame() function again
	if (currentScrollPosition < desiredScrollPosition) {
		animationFrameId = window.requestAnimationFrame(arguments.callee)
	}
})
</script> -->
