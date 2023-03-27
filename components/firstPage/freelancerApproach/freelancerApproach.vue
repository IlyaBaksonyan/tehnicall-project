<script setup lang="ts">
const path = `/${import.meta.env.VITE_FREELANCER_PAGE}`
const defaultPath = 'main'
</script>

<template>
	<section id="freelancerApproach" class="freelancerApproach">
		<div class="freelancerApproach__title">
			<div class="freelancerApproach__title-wrapper">
				<h2>Фриланс / Аутсорс</h2>
			</div>
		</div>
		<div class="btns">
			<NuxtLink class="btns__main" :to="`${path}/${defaultPath}`">freelance</NuxtLink>
			<NuxtLink class="other g" :to="`${path}/cms/definition`">CMS</NuxtLink>
			<NuxtLink class="other gg" :to="`${path}/studios/definition`">Studios</NuxtLink>
			<NuxtLink class="other ggg" :to="`${path}/freelancers/definition`">Freelancers</NuxtLink>
		</div>
	</section>
</template>

<style scoped lang="scss">
.freelancerApproach {
	--title-height: 25vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	scroll-snap-stop: always;

	&__title {
		height: var(--title-height);
		max-width: max(70vw, 30ch);
		margin-inline: auto;
		padding-inline: 1rem;
		width: 100%;
		&-wrapper {
			display: flex;
			align-items: center;
			height: 100%;

			* {
				font-size: max(3vmax, 1.5rem);
			}
		}
	}
	.btns {
		flex-grow: 1;
		display: flex;
		justify-content: space-around;
		align-items: center;
		padding-bottom: var(--title-height);
		font-weight: 500;

		a {
			background: var(--main-color);
			padding-inline: 4rem;
			padding-block: 1rem;
			border-radius: 1rem;
			color: #fff;
		}

		&__main {
			color: #753ceb;
			font-size: max(0.8rem, 1vw);
		}
		.other {
			position: absolute;
			font-size: max(0.7rem, 0.9vw);
		}

		.g {
			top: 40%;
			right: 15%;
		}

		.gg {
			bottom: 25%;
			right: 35%;
		}

		.ggg {
			left: 15%;
			bottom: 35%;
		}
	}
}
</style>
