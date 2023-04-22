<script setup lang="ts">
//icons
import arrowDown from '~~/assets/Icons/arrowDown.vue'
//icons
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
//library

const path = `/${import.meta.env.VITE_FREELANCER_PAGE}`
const defaultPath = 'main'
const navigationButton = ref()

function setDefaultValues() {
	const links = gsap.utils.toArray('.Fl-approach__navButton')
	gsap.set(links, {
		autoAlpha: 0,
		position: 'absolute'
	})
}
function openNav() {
	const links: string[] = gsap.utils.toArray('.Fl-approach__navButton')

	const tl = gsap.timeline({ stagger: 0.5 }).to(navigationButton.value, {
		autoAlpha: 0,
		yPercent: -50
	})
	links.forEach((link, index) => {
		tl.to(link, {
			y: '15vh',
			x: `${index === 0 ? '-' : ''}25vw`
		})
	})
}
console.log(1)
function animationScroll() {
	console.log(1)
	const scroller = '.main'
	const container = '.Fl-approach'
	const tlAnimation = gsap.timeline({
		scrollTrigger: {
			markers: true,
			trigger: container,
			scroller: scroller,
			start: 'start start',
			scrub: 1,
			snap: {
				snapTo: 1,
				duration: 1,
				directional: true,
				ease: 'ease'
			},
			end: 'bottom'
		}
	})
}
onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationScroll()
	console.log(1)
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
					<nuxt-link :to="`${path}/${defaultPath}`">Перейти</nuxt-link>
					<div ref="navigationButton" class="Fl-approach__btnOpenNav" @click="openNav()">
						<h4>Показать навигацию</h4>
						<arrowDown width="30%" />
					</div>
				</div>

				<nuxt-link class="Fl-approach__navButton" :to="`${path}/cms/definition`">CMS</nuxt-link>
				<nuxt-link class="Fl-approach__navButton" :to="`${path}/studios/definition`"
					>Studios</nuxt-link
				>
				<nuxt-link class="Fl-approach__navButton" :to="`${path}/freelancers/definition`"
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

	&__navButton {
		position: absolute;
		font-size: max(0.7rem, 0.9vw);
	}
}
@media (max-width: 768px) {
	.Fl-approach::before {
		background-image: url(/images/freelancerPage/intro2x.png);
		background-position: 0%;
	}
}
</style>
