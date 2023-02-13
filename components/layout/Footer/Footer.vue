<script setup lang="ts"></script>

<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="made-with">
				<p class="comment">// Made with</p>
				<div class="cols">
					<ul class="col">
						<li>&lt;/&gt;</li>
						<li>Vue</li>
						<li>Vue-router</li>
						<li></li>
					</ul>
					<ul class="col">
						<li>Другое</li>
						<li>Я и последняя нервная клетка</li>
						<li></li>
						<li></li>
					</ul>
					<ul class="col">
						<li>Музыка</li>
						<li>
							<a
								target="_blank"
								href="https://www.youtube.com/watch?v=VZUKrrYbavE&t=1422s"
								>Kaela BGM</a
							>
						</li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	--footer-margin-top: 7vh;
	--footer-main-color: #753ceb;
	display: flex;
	align-items: center;
	background-color: var(--footer-bc);
	font-size: max(1rem, 0.8vw);

	margin-top: var(--footer-margin-top);
	padding: 5vh 0;

	&__container {
		max-width: max(100ch, 56vw);
		margin: 0 auto;
	}
	.comment {
		color: #b2aca29a;
	}
	.cols {
		display: flex;
		gap: 7vmin;
		color: var(--footer-main-color);
	}
	.col {
		a {
			color: var(--footer-main-color);
		}

		li:first-child {
			margin-bottom: 2vh;
			text-align: center;

			&::after {
				content: '';
				position: absolute;
				right: 0;
				left: 0;
				bottom: 0;
				height: 2px;
				background: linear-gradient(
					90deg,
					rgb(0 0 0 / 0%) 10%,
					rgba(108, 42, 255, 1) 53%,
					rgb(0 0 0 / 0%) 90%
				);
			}
		}
	}
}

@media (max-width: 1000px) {
	.cols {
		flex-direction: column;
	}
}
</style>
