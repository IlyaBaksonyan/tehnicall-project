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
	}
}
</script>

<template>
	<firstScreen />
	<noCode />
	<freelancerApproach />
	<developerApproach />
</template>
