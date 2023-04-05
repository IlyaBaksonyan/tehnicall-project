<script setup lang="ts">
import arrowDown from '~~/assets/Icons/arrowDown.vue'
import { gsap } from 'gsap'
const path = `/${import.meta.env.VITE_FREELANCER_PAGE}`
const defaultPath = 'main'
const navigation = ref()
const mainButton = ref()
function setDefaultValues() {
	const links = gsap.utils.toArray('.Fl-approach__nav-button')
	gsap.set(links, {
		autoAlpha: 0,
		position: 'absolute'
	})
}
function openNav() {
	const links: string[] = gsap.utils.toArray('.Fl-approach__nav-button')
	const firstLink = links[0]
	const secondLink = links[1]
	const thirdLink = links[2]
	gsap
		.timeline({ stagger: 0.5 })
		.to(navigation.value, {
			autoAlpha: 0,
			yPercent: -50
		})
		.to(
			firstLink,
			{
				y: '15vh',
				x: '-25vw',
				autoAlpha: 1
			},
			'<'
		)
		.to(secondLink, {
			y: '25vh',
			autoAlpha: 1
		})
		.to(thirdLink, {
			y: '15vh',
			x: '25vw',
			autoAlpha: 1
		})
}
function hideIntro() {
	gsap.to('.Fl-approach', {
		autoAlpha: 0,
		duration: 1
	})
}
onMounted(() => {
	setDefaultValues()
})
</script>

<template>
	<section class="Fl-approach">
		<div class="Fl-approach__introScreen">
			<div class="Fl-approach__header">
				<h2>Фриланс / Аутсорс</h2>
			</div>
			<div class="Fl-approach__content">
				<div class="Fl-approach__primaryButton">
					<nuxt-link ref="mainButton" :to="`${path}/${defaultPath}#freelance`" @click="hideIntro"
						>Перейти</nuxt-link
					>
					<div ref="navigation" class="Fl-approach__btnOpenNav" @click="openNav()">
						<h4>Показать навигацию</h4>
						<arrowDown width="30%" />
					</div>
				</div>

				<nuxt-link class="Fl-approach__nav-button" :to="`${path}/cms/definition`">CMS</nuxt-link>
				<nuxt-link class="Fl-approach__nav-button" :to="`${path}/studios/definition`"
					>Studios</nuxt-link
				>
				<nuxt-link class="Fl-approach__nav-button" :to="`${path}/freelancers/definition`"
					>Freelancers</nuxt-link
				>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.Fl-approach {
	scroll-snap-stop: always;

	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-image: url(/images/freelancerPage/intro.png);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: 50%;
		filter: blur(10px);
	}

	&__introScreen {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		height: 100%;
		width: 100%;
	}

	&__header {
		height: 45vh;
		display: flex;
		align-items: center;
		h2 {
			font-size: max(2rem, 7vmax);
			text-align: center;
		}
	}

	&__content {
		display: flex;
		align-items: start;
		flex-grow: 1;
		justify-content: center;
		font-weight: 500;

		a {
			background: var(--main-color);
			width: clamp(6rem, 32vmin, 13rem);
			text-align: center;
			padding-block: 1rem;
			border-radius: 1rem;
			color: #fff;

			&:hover {
				filter: brightness(0.75);
				scale: 1.01;
			}
		}
	}

	&__primaryButton {
		display: flex;
		flex-direction: column;

		a {
			width: 100%;
			padding-inline: 4rem;
		}
	}

	&__btnOpenNav {
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

	&__nav-button {
		position: absolute;
		font-size: max(0.7rem, 0.9vw);
	}
}
@media (max-width: 768px) {
	.Fl-approach::before {
		background-image: url(/images/freelancerPage/intro2x.png);
		background-position: 50%;
	}
}
</style>
