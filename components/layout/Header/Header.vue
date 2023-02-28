<template>
	<header
		id="header"
		class="header"
		@wheel.prevent
		@touchmove.prevent
		@scroll.prevent
	>
		<div class="header__container">
			<div class="header__body">
				<div class="header__logo">
					<nuxt-link
						tabindex="1"
						class="icon-style"
						to="/"
						>Project</nuxt-link
					>
				</div>
				<div class="header__nav">
					<ul>
						<li>about</li>
						<li>p</li>
						<li>p</li>
						<li>p</li>
						<li>p</li>
						<li>p</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	padding-bottom: var(--header-padding);
	position: sticky;
	z-index: 100;
	top: 0;
	left: 0;
	right: 0;
	background: #090b0bcf;
	box-shadow: -4px 7px 11px 1px rgb(0 0 0 / 21%);
}
.header__container {
	max-width: 80vw;
	margin: 0 auto;
	padding: 0px 15px;
}

.header__body {
	height: var(--header-height);
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.2rem;
	font-weight: 700;

	.header__logo {
		a {
			font-size: max(1.3rem, 1.4vw);
			filter: drop-shadow(0px 0px 1rem #753ceb);
		}
	}
}

.header__nav ul {
	display: flex;
	justify-content: space-between;
}

.header__nav ul li:not(:last-child) {
	margin-right: 1rem;
}
</style>
