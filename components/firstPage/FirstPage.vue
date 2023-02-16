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
		;() => {
			if (window.scrollY >= 0) {
				document.body.style.overflow = 'auto'
			}
		}
		document.addEventListener('scroll', () => {
			this.ScrollToMain()
			if (window.scrollY === 0) {
				document.body.style.overflow = 'hidden'
			}
		})
		document.body.style.overflow = 'hidden'
	},
	unmounted() {
		document.body.removeAttribute('style')
	},
	methods: {
		ScrollToDeveloper(e: Event) {
			if (!this.mainState == true) {
				const scrollBottom: number =
					(e.target as HTMLDivElement).scrollHeight -
					(e.target as HTMLDivElement).scrollTop -
					(e.target as HTMLDivElement).offsetHeight
				const calcutaedHeightCrutch: number =
					(document.querySelector('.crutch') as HTMLElement).clientHeight / 2

				const elem: number =
					window.scrollY +
					(
						document.querySelector('#developerApproach') as HTMLDivElement
					).getBoundingClientRect().y -
					this.headerHeight

				if (scrollBottom <= calcutaedHeightCrutch) {
					window.scrollTo({ top: elem })
					document.body.style.overflow = 'auto'

					this.mainState = true
					setTimeout(() => (this.mainState = false), 500)
				}
			}
		},

		ScrollToMain() {
			if (!this.developerState == true) {
				const main: HTMLDivElement = document.querySelector(
					'.main'
				) as HTMLDivElement
				const mainHeight: number = main.getBoundingClientRect().height
				const scrollTop: number = window.scrollY
				const elem: number =
					window.scrollY + main.getBoundingClientRect().top - this.headerHeight
				if (scrollTop <= mainHeight) {
					window.scrollTo({ top: elem })

					this.developerState = true
					setTimeout(() => (this.developerState = false), 1000)
				}
			}
		}
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

	overflow-y: auto;
	overflow-x: hidden;

	section {
		height: calc(100vh - var(--header-size));
		margin-bottom: calc(var(--header-size) * -1);
	}
}
.crutch {
	min-height: 10vh;
}
</style>
