<script setup lang="ts">
import upwork from '~/assets/Icons/upwork.vue'
import compMan from '~/assets/Icons/CompMan.vue'
import twoComputers from '~/assets/Icons/twoComputers.vue'
import Monitor from '~/assets/Icons/monitor.vue'
import mouse from '~/assets/Icons/mouse.vue'
import man from '~/assets/Icons/man.vue'

import CresizeImage from '~~/utils/CresizeImage.vue'
</script>

<script lang="ts">
export default {
	name: 'FreelancerPage-main',

	computed: {
		echanges1() {
			const max = 47,
				min = 25
			return {
				left: Math.round(Math.random() * (max - min) + min) + '%'
			}
		},
		echanges2() {
			const max = 41,
				min = 29
			return {
				top: Math.round(Math.random() * (max - min) + min) + '%'
			}
		}
	}
}
</script>

<template>
	<div class="firstScreen">
		<div class="introduction-wrapper">
			<h1 id="freelance">
				<nuxt-link to="#freelance">Фриланс</nuxt-link>
			</h1>
			<h4>
				Работа из любой точки мира и место найма разработчиков любого уровня
			</h4>
		</div>
		<div class="echanges">
			<nuxt-img :style="echanges1" src="/images/freelancerPage/FL.png" alt="" />
			<div :style="echanges2">
				<upwork width="5vw" fill="white" class="upwork" />
			</div>
			<nuxt-img :style="echanges1" src="/images/freelancerPage/Q.png" alt="" />
			<nuxt-img
				:style="echanges2"
				src="/images/freelancerPage/webF.png"
				alt=""
			/>
		</div>
	</div>
	<div class="block">
		<h2 id="service">
			<nuxt-link to="#service">Сервисная разработка</nuxt-link>
		</h2>
		<p>
			Сервисная разработка это проекты где программист уходит после запуска
			продукта, то есть это все продукты на фрилансе
		</p>
	</div>
	<div class="block">
		<h2 id="freelance-marketplaces">
			<nuxt-link to="#freelance-marketplaces">Фриланс биржи</nuxt-link>
		</h2>
		<p>
			Фриланс биржи - это онлайн-платформы, на которых предприятия и частные
			лица могут нанимать фрилансеров для выполнения различных задач
		</p>
	</div>
	<div class="block">
		<h2 id="CMS">
			<nuxt-link to="#CMS">CMS / Система управления содержимым</nuxt-link>
		</h2>
		<compMan class="icon" />

		<div class="mini-block">
			<h3 id="regular-people">
				<nuxt-link to="#regular-people">Для обычных людей</nuxt-link>
			</h3>
			<man class="icon-mini icon" />

			<p>
				CMS - это система управления контентом, которая позволяет управлять
				созданием, редактированием и публикацией контента на веб-сайтах.
			</p>
		</div>
		<div class="mini-block">
			<h3 id="for-developers">
				<nuxt-link to="#for-developers">Для разработчиков</nuxt-link>
			</h3>
			<Monitor class="icon-mini icon" stroke="white" />
			<p>
				Система для упрощения процесса создания сайтов, используя готовые модули
				и инструменты.
			</p>
		</div>
	</div>
	<div class="block">
		<h2 id="freelancers">
			<nuxt-link to="#freelancers"> Фрилансеры</nuxt-link>
		</h2>
		<mouse class="icon" fill="white" />
		<p>
			Фрилансеры - Люди не находящиеся в постоянном рабочем отношении с
			какой-либо компанией, они работают на себя и выполняют заказы на
			разработку программного обеспечения для клиентов.
		</p>
	</div>
	<div class="block">
		<h2 id="studios"><nuxt-link to="#studios"> Студии</nuxt-link></h2>
		<twoComputers class="icon" stroke="white" />

		<p>
			Студии, это компании или коллективы фрилансеров, которые специализируются
			на создании сайтов для клиентов. Они могут предлагать различные услуги,
			например такие как веб-дизайн, разработку, оптимизацию и поддержку сайта.
		</p>
	</div>
	<div class="block conclusion">
		<h2 id="conclusion"><nuxt-link to="#conclusion">Вывод</nuxt-link></h2>
		<p>Разработать лендинг могут все! Но кто справится с этим лучше?</p>
		<div class="block">
			<nuxt-link to="#explanation"
				><CresizeImage
					id="explanation"
					class="explanation no"
					src="/images/freelancerPage/Compare.png"
				/>
			</nuxt-link>
			<p>
				Взято с
				<a
					href="https://vc.ru/clearmarketing/158785-skolko-dolzhna-stoit-razrabotka-sayta-i-k-komu-podatsya"
					target="_blank"
				>
					Ссылка
				</a>
			</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
:deep(.explanation) {
	--maxW: 57cqw;
	max-width: var(--maxW, 35vmin) !important;
	min-width: 100%;
}

.style .firstScreen .echanges img {
	all: unset;
}

.wrapper .style .firstScreen {
	display: flex;
	justify-content: space-between;
	margin-bottom: 3rem;
	height: 10rem;
	padding-right: 8vmin;

	.introduction-wrapper {
		flex-basis: 60%;
	}

	.echanges {
		width: 10rem;

		* {
			position: absolute;
			width: 3rem;
		}

		*:nth-child(1) {
			top: 0;
		}

		*:nth-child(2) {
			right: 0;
		}

		*:nth-child(3) {
			bottom: 0;
		}

		*:nth-child(4) {
			left: 0;
		}

		.upwork {
			background-color: #6dff59;
			fill: #fff;
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			padding: -30%;
			margin: -25%;
			background: radial-gradient(
				circle,
				rgb(92 194 94) 0%,
				rgba(0, 0, 0, 0) 70%
			);
		}
	}
}

@media (max-width: 768px) {
	.echanges {
		display: none;
	}

	body .wrapper .style .firstScreen {
		display: block;
		padding: initial;
	}
}
</style>
