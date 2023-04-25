<script setup lang="ts"></script>
<template>
	<div class="framework__usage">
		<div class="framework__usage__definition section">
			<div class="framework__usage__definition__heading">
				<h2>Использование</h2>
			</div>
		</div>
		<div class="framework__usage__separate section">
			<div class="framework__usage__separate__definition">
				<h2>Разделение задач между фронтендом и бекендом</h2>
				<p>
					чтобы создать интернет-магазин, нужны как фронтенд-разработчики, создающие
					пользовательский интерфейс, так и бекенд-разработчики, отвечающие за создание API для
					взаимодействия между клиентом и сервером.
				</p>
			</div>
		</div>
		<div class="framework__usage__interface section defaultSection">
			<div class="framework__usage__interface__definition defaultDefinition">
				<h2>Разработка пользовательского интерфейса в React:</h2>
				<p>
					на этом этапе фронтендер создает пользовательский интерфейс, используя фреймворк React,
					который будет отображать информацию о товарах, корзине и оформлении заказа.
				</p>
			</div>
		</div>
		<div class="framework__usage__dataBase section defaultSection">
			<div class="framework__usage__dataBase__definition defaultDefinition">
				<h2>Создание базы данных и определение схемы данных в NestJS:</h2>
				<p>
					для хранения информации о товарах, заказах и пользователях необходимо создать базу данных.
					На этом этапе мы определяем, какая информация будет храниться в базе данных и как она
					будет связана между собой.
				</p>
			</div>
		</div>
		<div class="framework__usage__Api section defaultSection">
			<div class="framework__usage__api__definition defaultDefinition">
				<h2>Разработка API для взаимодействия между клиентом и сервером в NestJS:</h2>
				<p>
					На этом этапе мы создаем API, который будет использоваться фронтендером для получения
					данных из базы данных и отправки запросов на сервер. Например для регистраций
				</p>
			</div>
		</div>
		<div class="framework__usage__adminPanel section defaultSection">
			<div class="framework__usage__adminPanel__definition defaultDefinition">
				<h2>Разработка API для взаимодействия между клиентом и сервером в NestJS:</h2>
				<p>
					На этом этапе мы создаем API, который будет использоваться фронтендером для получения
					данных из базы данных и отправки запросов на сервер. Например для регистраций
				</p>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
.section {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}
.framework {
	&__usage {
		&__definition {
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			&__heading {
				h2 {
					font-size: max(6vmin, 1rem);
				}
			}
		}
		&__separate {
			height: 100%;
			width: 100%;
			&__definition {
				display: flex;
				height: 100%;
				width: max(40vmin, 4rem);
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-inline: auto;

				h2 {
					font-size: max(2vmin, 0.4rem);
				}
				p {
					font-size: max(1.4vmin, 0.3rem);
				}
			}
		}
		.defaultDefinition {
			backdrop-filter: blur(12px) brightness(0.5);
			border-radius: 1rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: max(88vmin, 4rem);
			margin-inline: auto;

			h2 {
				font-size: max(4vmin, 1rem);
			}
			p {
				font-size: max(3vmin, 0.7rem);
			}
		}
		.defaultSection {
			flex-direction: column;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
@media (width <= 768px) {
	.framework__usage__separate__definition {
		height: 92%;
		width: max(22vmin, 4rem);
	}
}
</style>
