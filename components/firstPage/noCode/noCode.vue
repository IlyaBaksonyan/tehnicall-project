<script lang="ts">
import { defineComponent } from 'vue'

import carousel from './ui/noCode-carousel/noCode-carousel.vue'
import type { Items } from './noCode-interfaces'

export default defineComponent({
	name: 'NoCode',
	components: {
		carousel
	},

	data(): {
		items: Array<Items>
	} {
		return {
			items: [
				{
					id: 0,
					text: `NoCode приложения / Веб сайты - это тип приложений, которые могут быть
			созданы без необходимости знания языков программирования что позволяет
			пользователям создавать  собственные приложения без необходимости написания
			кода. Приложения NoCode популярны среди предпринимателей, владельцев
			малого бизнеса и блоггеров, которые хотят быстро создавать прототипы и
			тестировать идеи или даже создавать огромные сайты без необходимости
			написания кода.`,
					title: 'NoCode способы',
					img: 'test.png'
				},
				{},
				{
					id: 3,
					text: `Чтобы создать свой сайт с помощью NoCode приложения все что вам нужно
				это зайти на NoCode веб-сайт, такой как например Glide, Adalo или Tilda.
				Выбрав платформу вы создаёте учетную запись и за несколько кнопок
				создаёте всю инфраструктуру, после чего инструментом drap-and-drop
				расскладываете готовые компоненты за несколько часов создавая полный
				сайт готовый к выкладыванию в интернет. Как только вы будете довольны
				дизайном вы нажимаете кнопку и сайт появляется в интернете с вашим
				доменном. Кроме того, большинство платформ NoCode предлагают
				дополнительные функции, такие как хостинг, аналитика и возможности
				электронной коммерции, которые вы можете использовать для дальнейшей
				настройки и улучшения вашего сайта.`,
					title: 'NoCode веб-сайт',
					img: 'test2.png'
				},
				{
					id: 4,
					text: `В наше время появились нейросети так что сейчас можно создать сайт даже
				почти ничего не делая. Создавая сайт искуственным интелектом все
				что вам нужно это - создать дизайн и код. чтобы создать дизайн набрать в
				гугле "как сгенерировать картинку в midjourney" или что то похожее. Вот
				только чтобы написать код, есть трудности так как ChatGpt в россии
				недоступен так что нужно зайти в телеграмм и набрать в поиск
				"ChatGptBot" там более менее хорошая модель или чтобы пообщаться с
				настоящим ChatGpt можете пройти по этой ссылке
				https://thecode.media/chat-discord/ и подключить ChatGpt к дискорду`,
					title: 'ChatGPT и MidJourney',
					img: 'gptj.png'
				},
				{
					id: 5,
					text: `Но на данный момент не все так просто.Сейчас ChatGPT может только помочь
				созданию сайта настоящему программисту, так как нужно обьяснять ему
				каждую вещь на странице что для человека не знающего кода будет почти
				невозможно. но не все так плохо так как он может помочь научиться их
				создавать или помочь в чем нибудь другом, так как в части обьяснения
				 он очень хорош`,
					title: 'AI еще развит не сильно',
					img: 'gpt2.png'
				}
			]
		}
	}
})
</script>

<template>
	<section id="noCode" class="noCode">
		<div class="noCode__wrapper">
			<carousel :carouselData="items" />
			<p></p>
		</div>
	</section>
</template>

<style scoped lang="scss">
.noCode {
	width: 99.1vw;
	margin-left: -50vw;
	left: 50.7%;

	&__wrapper {
		position: absolute;
		overflow: hidden;
	}

	&__btns {
		z-index: 1;
	}
}
</style>

<style lang="scss">
.noCode {
	--carouselTitle-first-color: #be9e35;
	--carouselTitle-second-color: initial;
	--carouselTitle-third-color: initial;
}
.carousel__section:nth-child(2) {
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: var(--article-bc);
	}
}
</style>
