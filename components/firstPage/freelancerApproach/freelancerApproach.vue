<script setup lang="ts">
import arrowDown from '~~/assets/Icons/arrowDown.vue'
import { gsap } from 'gsap'
const path = `/${import.meta.env.VITE_FREELANCER_PAGE}`
const defaultPath = 'main'
const navigation = ref()

function setDefaultValues() {
	const links = gsap.utils.toArray('.other')
	gsap.set(links, {
		autoAlpha: 0,
		position: 'absolute'
	})
}

function openNav() {
	const links: string[] = gsap.utils.toArray('.other')
	gsap
		.timeline({ stagger: 0.5 })
		.to(navigation.value, {
			autoAlpha: 0,
			yPercent: -50
		})
		.to(
			links[0],
			{
				y: '15vh',
				x: '25vw',
				autoAlpha: 1
			},
			'<'
		)
		.to(links[1], {
			y: '25vh',
			autoAlpha: 1
		})
		.to(links[2], {
			y: '15vh',
			x: '-25vw',
			autoAlpha: 1
		})
}
onMounted(() => {
	setDefaultValues()
})
</script>

<template>
	<section id="freelancerApproach" class="freelancerApproach">
		<div class="freelancerApproach__title">
			<div class="freelancerApproach__title-wrapper">
				<h2>Фриланс / Аутсорс</h2>
			</div>
		</div>

		<div class="btns">
			<div class="btns__main">
				<nuxt-link class="btns__main__a" :to="`${path}/${defaultPath}`">freelance</nuxt-link>
				<div ref="navigation" class="btns__main__navigation" @click="openNav()">
					<h4>Показать навигацию</h4>
					<arrowDown width="30%" />
				</div>
			</div>

			<nuxt-link class="other" :to="`${path}/cms/customers`">CMS</nuxt-link>
			<nuxt-link class="other" :to="`${path}/studios/definition`">Studios</nuxt-link>
			<nuxt-link class="other" :to="`${path}/freelancers/definition`">Freelancers</nuxt-link>
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
			padding-inline: max(4rem, 3.5vmax);
			padding-block: 1rem;
			border-radius: 1rem;
			color: #fff;

			&:hover {
				filter: brightness(0.75);
				scale: 1.01;
			}
		}

		&__main {
			display: flex;
			flex-direction: column;
			&__a {
				color: #753ceb;
				font-size: max(0.8rem, 1vw);
			}

			&__navigation {
				position: absolute;
				top: 130%;
				width: 100%;
				left: 0;
				right: 0;
				text-align: center;
				color: #9c9c9c;
				stroke: #9c9c9c;
				cursor: pointer;

				> * {
					transition: all ease 0.5s;
				}

				&:hover {
					svg {
						translate: 0% 10%;
					}
				}
			}
		}
		.other {
			position: absolute;
			font-size: max(0.7rem, 0.9vw);
		}
	}
}
</style>
