<template>
	<section class="firstScreen">
		<div class="firstScreen-wrapper">
			<div class="firstScreen-wrapper__logo">
				<h1 class="icon-style">project</h1>
				<h2>Затеев Илья</h2>
				<h2>Front-end Developer</h2>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.firstScreen {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.firstScreen-wrapper {
	display: flex;
	justify-content: space-between;
	position: relative;
}

@media (max-width: 991px) {
	.firstScreen-wrapper {
		flex-direction: column;
		align-items: center;
	}
}
</style>
