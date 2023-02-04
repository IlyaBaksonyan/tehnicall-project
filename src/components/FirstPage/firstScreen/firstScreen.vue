<template>
	<section class="firstScreen">
		<div class="firstScreen-wrapper">
			<div class="firstScreen-wrapper__logo">
				<h1 class="icon-style">project</h1>
				<h2>Затеев Илья</h2>
				<h2>Front-end Developer</h2>
			</div>
			<div class="firstScreen-wrapper__nav">
				<nav>
					<a href="#noCode">noCode</a>
					<a href="#freelancerApproach">freelancer</a>
					<a href="#developerApproach">front-end</a>
				</nav>
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

	&__nav {
		position: absolute;
		left: 54vw;
		top: 21vh;

		nav {
			display: flex;
			flex-direction: column;
			text-align: center;
			border: 0.2rem solid #753ceb;
			border-radius: 50px;
			box-shadow: 0px 0px 11px 6px rgba(90, 10, 255, 0.77);

			a:not(:last-child) {
				border-bottom: solid 0.2rem #753ceb;
			}

			a:first-child {
				border-radius: 3rem 3rem 0 0;
			}

			a:last-child {
				border-radius: 0 0 3rem 3rem;
			}

			a {
				padding: 2vw;
				text-transform: uppercase;
				padding-inline: 3.5vw;
				position: relative;
			}
		}
	}
}

@media (max-width: 991px) {
	.firstScreen-wrapper {
		flex-direction: column;
		align-items: center;
		gap: 4vh;

		&__nav {
			gap: 4vh;
			position: relative;
			top: unset;
			left: unset;

			nav {
				a {
					padding: 3vh;
					padding-inline: 12vw;
				}
			}
		}
	}
}
</style>
