<script lang="ts" setup></script>
<template>
	<div class="framework__definition">
		<div class="framework__definition__heading">
			<h2>Высокоуровневый</h2>
			<h2>Метод</h2>
		</div>
		<p></p>
	</div>
</template>

<style lang="scss">
.framework {
	&__definition {
		display: flex;
		height: 100vh;
		align-items: center;
		justify-content: center;

		&__heading {
			translate: min(-10vmin, 2rem);
			h2 {
				text-transform: uppercase;
				font-size: max(5vmax, 1rem);
			}

			:nth-child(2) {
				translate: 7vw;
			}
		}
	}
}
@media (width <= 768px) {
	.framework__definition {
	}
}
</style>
