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
			HeaderHeight: 60,
			state: false
		}
	},
	methods: {
		mainScroll(e: any) {
			const scrollBottom =
				e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight
			const crutchHeight =
				(document.querySelector('.crutch') as HTMLElement).clientHeight / 2
			if (this.state == true) {
				return false
			} else if (scrollBottom <= crutchHeight) {
				this.state = true
				this.scroll('#developerApproach')
				document.body.style.overflow = 'auto'
				this.smoothScroll(900)
			}
		},
		developerScroll() {
			const mainOffsetHeight = (document.querySelector('.main') as HTMLElement)
				.offsetHeight
			const scrollTop = document.documentElement.scrollTop

			if (this.state == true) {
				return false
			} else if (scrollTop <= mainOffsetHeight) {
				this.state = true
				window.scrollTo({ top: 0 })
				document.body.style.overflow = 'hidden'
				this.smoothScroll(900)
			}
		},
		scroll(e: string) {
			const elem =
				window.scrollY +
				document.querySelector(e)!.getBoundingClientRect().y -
				this.HeaderHeight!

			document.documentElement.scrollTo(0, elem)
		},

		smoothScroll(h: any) {
			let i = h || 0
			if (i < 200) {
				setTimeout(() => {
					window.scrollTo(0, i)
					this.smoothScroll(i + 100)
				}, 10)
			} else this.state = false
		}
	},
	mounted() {
		document.addEventListener('scroll', this.developerScroll)
		const a = () => {
			if (document.documentElement.scrollTop == 0) {
				document.body.style.overflow = 'hidden'
				console.log(2)
			} else if (document.documentElement.scrollTop > 0) {
				document.body.style.overflow = 'auto'
				console.log(1)
			}
		}

		setTimeout(a, 200)
	},
	unmounted() {
		document.body.removeAttribute('style')
	}
}
</script>

<template>
	<div class="main" @scroll.prevent="mainScroll">
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
