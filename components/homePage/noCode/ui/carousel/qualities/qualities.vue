<script setup lang="ts"></script>
<template>
	<div class="carousel__section constructors">
		<div class="constructors__leftPart">
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
		<div class="constructors__rightPart">
			<ul>
				<li>
					<b>Ограниченная настройка:</b> невозможность полностью настроить сайт, особенно в случае
					нестандартных требований к дизайну и функциональности.
				</li>
				<li>
					<b>Сложность масштабирования:</b> подходят для создания простых сайтов, но являются
					посредственным выбором для средних и сложных проектов, требующих индивидуальной
					функциональности и масштабируемости.
				</li>
			</ul>
		</div>
	</div>
</template>
<style lang="scss">
.constructors {
	display: flex;
	padding-inline: 7%;
	min-width: 100%;
	padding-block: 10%;
	height: 100%;
	gap: 5%;
	background: var(--article-bc);
	text-align: justify;

	&__leftPart,
	&__rightPart {
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
</style>
