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
	mounted() {
		document.body.style.overflow = 'hidden'
		document.body.style.margin = '0'
	},
	unmounted() {
		document.body.style.overflow = ''
		document.body.style.margin = ''
	}
}
</script>

<template>
	<div class="main">
		<div class="container">
			<firstScreen />
			<noCode />
			<freelancerApproach />
			<developerApproach />
		</div>
	</div>
</template>

<style scoped lang="scss">
.main {
	scroll-snap-type: y mandatory;
	height: calc(100vh - var(--header-size));
	margin-top: var(--header-size);
	overflow-y: auto;
	overflow-x: hidden;
}
</style>
