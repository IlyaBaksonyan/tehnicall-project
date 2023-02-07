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
			HeaderHeight: 60
		}
	},
	methods: {
		mainScroll(e: any) {
			const scrollBottom =
				e.target.scrollHeight - e.target.scrollTop - e.target.offsetHeight
			const crutchHeight =
				(document.querySelector('.crutch') as HTMLElement).clientHeight / 2

			if (scrollBottom <= crutchHeight) {
				document.querySelector('#natural') as HTMLElement
				this.scrollTo('#natural')
				document.body.style.overflow = 'auto'
			}
		},
		developerScroll() {
			const main = document.querySelector('.main') as HTMLElement
			const scrollTop = document.documentElement.scrollTop
			const offsetHeight = main.offsetHeight
			if (scrollTop <= offsetHeight) {
				window.scrollTo(0, 0)
				document.body.style.overflow = 'hidden'
			}
		},
		scrollTo(e: any) {
			const top =
				window.scrollY +
				document.querySelector(e).getBoundingClientRect().y -
				this.HeaderHeight

			document.documentElement.scrollTo(0, top)
		}
	},
	mounted() {
		if (document.documentElement.scrollTop == 0) {
			document.body.style.overflow = 'hidden'
		}
		document.addEventListener('scroll', this.developerScroll)
	},
	unmounted() {
		document.body.removeAttribute('style')
	}
}
</script>

<template>
	<div class="main" @scroll="mainScroll">
		<div class="container">
			<firstScreen />
			<noCode />
			<freelancerApproach />
			<div class="crutch"></div>
		</div>
	</div>
	<developerApproach id="natural" />
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
