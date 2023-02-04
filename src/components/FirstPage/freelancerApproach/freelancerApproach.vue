<script setup lang="ts">
import { RouterLink } from 'vue-router'
import heading from '@/ui/heading.vue'
</script>

<script lang="ts">
export default {
	data() {
		return {
			path: '/freelancerPage'
		}
	},
	mounted() {}
}
</script>

<template>
	<section class="freelancerApproach" id="freelancerApproach">
		<heading class="heading">
			<template #h2> Подход фрилансера </template>
		</heading>
		<div class="btns">
			<RouterLink class="btns__main" :to="{ path }">freelance</RouterLink>
			<router-link class="other g" :to="{ path }">lorem</router-link>
			<router-link class="other gg" :to="{ path }">lorem</router-link>
			<router-link class="other ggg" :to="{ path }">lorem</router-link>
		</div>
	</section>
</template>

<style scoped lang="scss">
.freelancerApproach {
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 50.7%;
		width: 99.1vw;
		margin-left: -50vw;
		pointer-events: none;
		background: radial-gradient(
			circle,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.8589810924369747) 9%
		);
	}

	.heading {
		height: 10vh;
	}
	.btns {
		flex-grow: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-bottom: calc(10vh + var(--header-size));

		&__main {
			color: #753ceb;
			font-size: max(0.8rem, 1cqw);
		}
		.other {
			position: absolute;
			font-size: max(0.7rem, 0.9cqw);
		}

		.g {
			top: 22vh;
			right: 15vw;
		}

		.gg {
			right: 4vw;
		}

		.ggg {
			right: 23vw;
			bottom: 25vh;
		}
	}
}
</style>
