<script setup lang="ts">
//library
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
//library

const introParagraph = ref()
let letterCount = ref()
let interval: any
function animationParagraph(state = false) {
	letterCount.value = introParagraph.value?.innerHTML.split('').length

	state ? (interval = setInterval(setRandomPhrase, 7000)) : clearInterval(interval)

	function setRandomPhrase() {
		const phraseArray = ['Определение.', 'Применение.', 'Качества.']
		const randomIndex = Math.floor(Math.random() * phraseArray.length)
		const randomPhrase = phraseArray[randomIndex]

		introParagraph.value.innerHTML = randomPhrase
		letterCount.value = introParagraph.value?.innerHTML.split('').length
	}
}
function animationScroll() {
	const scroller = '.cmsSection'
	const container = '.CMS__intro'

	const tlAnimation = gsap.timeline({
		scrollTrigger: {
			//markers: true,
			trigger: container,
			scroller: scroller,
			start: 'start bottom',
			scrub: 1,
			snap: {
				snapTo: 0.5,
				duration: 0.5,
				directional: true,
				ease: 'ease'
			},
			end: 'bottom'
		}
	})
}

onMounted(() => {
	animationParagraph(true)
	gsap.registerPlugin(ScrollTrigger)
	animationScroll()
})
onUnmounted(() => {
	animationParagraph(false)
})
</script>
<template>
	<div class="CMS__intro">
		<div class="CMS__intro__content">
			<div class="CMS__intro__header">
				<h1>
					Среднеуровневые методы <br />
					(CMS)
				</h1>
			</div>
			<div class="CMS__intro__animatedInput">
				<div class="CMS__intro__animatedInput__paragraph">
					<p ref="introParagraph" :style="{ '--letterCount': letterCount }">Определение.</p>
				</div>
			</div>
		</div>
		<div class="CMS__intro__background">
			<img src="/images/freelancerPage/cmsIntro.jpg" alt="" />
		</div>
	</div>
</template>
<style lang="scss">
.CMS {
	&__intro {
		display: flex;
		align-items: center;
		justify-content: space-around;

		text-align: center;

		height: var(--C100vh);
		max-height: 95%;
		max-width: 100%;

		overflow-x: hidden;

		&__background {
			position: absolute;
			height: 100%;
			filter: blur(5px);
			overflow: hidden;

			img {
				height: 100%;
				width: 100vw;
			}
		}
		&__content {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			gap: 2vw;

			height: 45vmax;
			width: 45vmax;

			position: absolute;
			z-index: 5;

			border: 20px white solid;
			border-radius: 50%;

			box-shadow: 0px 0px 19px 4px black;
			backdrop-filter: brightness(0.4) blur(8px);
		}

		&__header {
			h1 {
				font-size: max(2vmax, 0.6rem) !important;
				color: white;
				margin: 0 !important;
			}
		}

		&__animatedInput {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30vw;
			border-bottom: 2px black solid;

			p {
				--typingColor: gray;
				overflow: hidden;

				width: 0;

				white-space: nowrap;
				color: white;
				letter-spacing: 0.15em;
				font-size: max(3vmax, 1rem) !important;

				border-right: 0.15em solid var(--typingColor);

				animation: typing 3.5s steps(var(--letterCount)) alternate infinite,
					cursor 0.5s step-end infinite;

				@keyframes typing {
					from {
						width: 0;
					}
					to {
						width: 100%;
					}
				}

				@keyframes cursor {
					from,
					to {
						border-color: transparent;
					}
					50% {
						border-color: var(--typingColor);
					}
				}
			}
		}
	}
}
</style>
