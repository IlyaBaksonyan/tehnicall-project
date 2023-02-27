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

			calcutaedHeightCrutch: 0,
			elem: document.body
		}
	},

	mounted() {
		this.elem = document.querySelector('.main')!
		this.calcutaedHeightCrutch =
			(document.querySelector('.crutch') as HTMLElement).clientHeight / 2
		this.elem.classList.add('scrolled'),
			document.addEventListener('scroll', () => {
				if (window.scrollY === 0) {
					document.styleSheets[0].insertRule(
						'body::-webkit-scrollbar { width: 1px } ',
						0
					)
					document.styleSheets[0].insertRule(
						'html { scrollBar-width: none } ',
						0
					)
					this.elem.classList.remove('scrolled')
				}
			})

		// delete scrollbar
		this.$nextTick(() => {
			if (window.scrollY === 0) {
				document.styleSheets[0].insertRule(
					'body::-webkit-scrollbar { width: 1px } ',
					0
				)
				// delete scrollbar in firefox
				document.styleSheets[0].insertRule('html { scrollBar-width: none } ', 0)
				this.elem.classList.remove('scrolled')
			}
		})
	},
	unmounted() {
		document.body.removeAttribute('style')
		// delete listener
		// for (let event_name of ['scroll']) {
		// 	window.addEventListener(
		// 		event_name,
		// 		function (event) {
		// 			event.stopImmediatePropagation()
		// 		},
		// 		true
		// 	)
		// }
	},
	methods: {
		ScrollToDeveloper(e: Event) {
			let scrollBottom: number =
				(e.target as HTMLDivElement).scrollHeight -
				(e.target as HTMLDivElement).scrollTop -
				(e.target as HTMLDivElement).offsetHeight

			if (scrollBottom <= this.calcutaedHeightCrutch) {
				this.elem.classList.add('scrolled')

				this.elem.scrollBy(0, this.calcutaedHeightCrutch * -1)

				document.styleSheets[0].deleteRule(0)
				document.styleSheets[0].deleteRule(0)
				document.styleSheets[0].deleteRule(0)
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
	scroll-snap-align: end;
}

.scrolled {
	pointer-events: none;
}
</style>
