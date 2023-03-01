<script setup lang="ts">
import heading from '@/ui/heading.vue'
</script>

<script lang="ts">
export default {
	data() {
		return {
			path: `/${import.meta.env.VITE_FREELANCER_PAGE}`,
			defaultPath: 'main'
		}
	}
}
</script>

<template>
	<section
		id="freelancerApproach"
		class="freelancerApproach"
	>
		<heading class="heading">
			<template #h2>
				Фриланс <br />
				/ <br />
				Аутсорс
			</template>
		</heading>
		<div class="btns">
			<NuxtLink
				class="btns__main"
				:to="`${path}/${defaultPath}`"
				>freelance</NuxtLink
			>
			<NuxtLink
				class="other g"
				:to="`${path}/cms/definition`"
				>CMS</NuxtLink
			>
			<NuxtLink
				class="other gg"
				:to="`${path}/studios/definition`"
				>Studios</NuxtLink
			>
			<NuxtLink
				class="other ggg"
				:to="`${path}/freelancers/definition`"
				>Freelancers</NuxtLink
			>
		</div>
	</section>
</template>

<style scoped lang="scss">
.freelancerApproach {
	--heading-height: 10vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	scroll-snap-stop: always;

	&::before {
		content: '';
		background: #090b0b;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 99.1vw;
		margin-left: -50vw;
		left: 50.7%;
		pointer-events: none;
	}

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
		background-image: radial-gradient(
			circle,
			rgba(255, 255, 255, 0.05) 4%,
			rgba(0, 0, 0, 0.3) 9%,
			rgba(0, 0, 0, 0.82) 56%
		);
		animation: shine 1.2s linear alternate infinite;

		@keyframes shine {
			to {
				background-color: rgba(0, 0, 0, 0.308);
			}
		}
	}

	.heading {
		height: var(--heading-height);
		z-index: 1;
	}
	.btns {
		flex-grow: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-bottom: var(--heading-height);
		font-weight: 500;

		&__main {
			color: #753ceb;
			font-size: max(0.8rem, 1vw);
		}
		.other {
			position: absolute;
			font-size: max(0.7rem, 0.9vw);
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
