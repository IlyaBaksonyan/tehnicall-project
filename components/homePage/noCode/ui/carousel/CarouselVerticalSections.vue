<script lang="ts" setup>
//components
import carouselItem from './CarouselItem.vue'
//components
//svg
import btnPrev from '@/assets/Icons/prevSlide.vue'
//svg
//types
import type { Items } from '@/assets/interfaces/noCode-interfaces'
//types

const props = defineProps({
	carouselData: {
		type: Array as PropType<Items[]>,
		default: () => []
	},
	SlideIndex: {
		type: Number,
		default: () => 0
	}
})
</script>
<template>
	<div class="carousel__verticalSections">
		<div class="carousel__verticalSections__inner">
			<button
				tabindex="-1"
				class="carousel__verticalSections__back"
				href="#carousel__navigation"
				@click="prevSlide"
			>
				<btnPrev stroke="white" width="max(1.5em, 5vmax)" />
			</button>
			<carouselItem
				v-for="(item, i) in props.carouselData.slice(1)"
				:key="i"
				:item_data="item"
				:currentSlideIndex="SlideIndex"
			/>
			<div class="carousel__customSection">
				<div class="carousel__customSection__leftPart qualities">
					<ul>
						<li><b>Доступность:</b> полностью не требуются глубокие знания программирования</li>
						<li>
							<b>Скорость:</b> быстрое создание сайтов и приложений с помощью перетаскивания модулей
						</li>
						<li><b>Экономичность:</b> значительно дешевле чем заказ</li>
						<li>
							<b>Техническая поддержка:</b> предоставление хостинга и обновлений сайта конструктором
						</li>
					</ul>
				</div>
				<div class="carousel__customSection__rightPart qualities">
					<ul>
						<li>
							<b>Ограниченная настройка:</b> невозможность полностью настроить сайт, особенно в
							случае нестандартных требований к дизайну и функциональности.
						</li>
						<li>
							<b>Сложность масштабирования:</b> подходят для создания простых сайтов, но являются
							посредственным выбором для средних и сложных проектов, требующих индивидуальной
							функциональности и масштабируемости.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped lang="scss">
.carousel__verticalSections {
	min-width: 100%;
	height: 100%;

	.carousel__customSection {
		display: flex;
		padding-inline: 7%;
		padding-block: 10%;
		height: 100%;
		gap: 5%;
		background: var(--article-bc);
		text-align: justify;

		.qualities {
			display: flex;
			width: 50%;
			font-weight: 400;
			ul {
				display: flex;
				flex-direction: column;
				gap: 7vh;
				font-size: max(1.8vmax, 0.6rem);
			}
		}

		&__leftPart {
			li {
				list-style: url(https://s.w.org/images/core/emoji/14.0.0/svg/2705.svg);
			}
		}

		&__rightPart {
			li {
				list-style: url(https://s.w.org/images/core/emoji/14.0.0/svg/274c.svg);
			}
		}
	}
	::-webkit-scrollbar-thumb {
		height: 80px;
		border-radius: 8px;
		background-color: #294488;
		border: 4px solid transparent;
		background-clip: content-box;
	}

	&__back {
		width: 20%;
		min-height: 20%;
		top: 0;
		position: fixed;
		border: 1px black solid;
		z-index: 510;
		border-bottom-right-radius: 23rem 21rem;
		transition: all 1s ease;
		box-shadow: -20px 2px 0px rgba(0, 0, 0, 0);
		* {
			transition: all 0.5s ease;
		}
		&:hover {
			background: #0f162a;
			box-shadow: 6px 13px 19px 4px rgb(34 60 80 / 60%);
		}

		&:active {
			background: #19264a;

			* {
				scale: 1.1;
			}
		}
	}
	&__inner {
		overflow: auto;
		height: 100%;
		overflow-x: hidden;
		scroll-snap-type: y mandatory;

		> div {
			scroll-snap-align: start;
		}
		.carousel__section {
			grid-template-rows: 1fr;

			:deep(*) {
				border: 0;
			}
			:deep(.carousel__img) {
				height: 80%;
				width: 80%;
				margin: auto auto;

				> img {
					border-radius: 15%;
				}
			}
			:deep(.carousel__title, carousel__nav) {
				display: none;
			}
		}
	}
}
</style>
