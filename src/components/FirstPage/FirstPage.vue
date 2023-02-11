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
			if (!this.mainState == true) {
				const scrollBottom =
					e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight
				const calcutaedHeightCrutch =
					(document.querySelector('.crutch') as HTMLElement).clientHeight / 2

				const elem =
					window.scrollY +
					document.querySelector('#developerApproach')!.getBoundingClientRect()
						.y -
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
				const mainHeight = (
					document.querySelector('.main') as HTMLElement
				).getBoundingClientRect().height
				const scrollTop = window.scrollY
				const elem =
					window.scrollY +
					document.querySelector('.main')!.getBoundingClientRect().top -
					this.headerHeight
				if (scrollTop <= mainHeight) {
					window.scrollTo({ top: elem })

					this.developerState = true
					setTimeout(() => (this.developerState = false), 1000)
				}
			}
		}
	},

	mounted() {
		const a = () => {
			if (window.scrollY == 0) {
				document.body.style.overflow = 'hidden'
			}
		}
		setTimeout(a, 500)
		document.addEventListener('scroll', () => {
			this.ScrollToMain()
			if (window.scrollY == 0) {
				document.body.style.overflow = 'hidden'
			}
		})
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
