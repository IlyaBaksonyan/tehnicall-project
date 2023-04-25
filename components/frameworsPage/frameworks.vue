<script setup lang="ts">
//components
import frameworkDefinition from './ui/sections/frameworkDefinition.vue'
import frameworkUsage from './ui/sections/frameworkUsage.vue'
import frameworkQualities from './ui/sections/frameworkQualities.vue'
//components
//library
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
//library
//icons
import Logo from '~/assets/Icons/mainLogo.vue'
//icons

function animationBackground() {
	const windowHeight =
		parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 ||
		window.innerHeight
	const vh = (coef: number) => windowHeight * (coef / 100)
	const mediaQuery1024 = window.matchMedia('(max-width: 1024px)').matches
	const mediaQuery768 = window.matchMedia('(max-width: 768px)').matches

	let camera: any, scene: any, renderer: any
	let pointLight: any, ambientLight: any
	let lightHelper: any, gridHelper: any
	let spaceTexture: any, material: any, geometry: any
	let x: number, y: number, z: number, rotation: number, size: number, width: number, height: number
	let cubeHero: any,
		cubeUsageDefintion: any,
		cubeUsageSeparation: any,
		cubeFrontEnd: any,
		cubeBackEnd: any,
		cubeUsageInterfaceDefinition: any,
		cubeUsageInterface: any
	let far: any, near: any, fov: any, aspect: any
	let model: any
	createCubes()

	init()
	animate()
	handleCamera()
	animateSections()
	function init() {
		const canvas = document.querySelector('#bg')
		renderer = new THREE.WebGLRenderer({ canvas: canvas })
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setSize(window.innerWidth, window.innerHeight)

		window.addEventListener('resize', onWindowResized)

		fov = 75
		near = 0.1
		far = 1000
		aspect = window.innerWidth / window.innerHeight

		camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

		scene = new THREE.Scene()

		pointLight = new THREE.PointLight(0xffffff)
		pointLight.position.set(0, 0, 7)

		ambientLight = new THREE.AmbientLight(0x00000)
		lightHelper = new THREE.PointLightHelper(pointLight)

		gridHelper = new THREE.GridHelper(60, 100)
		spaceTexture = new THREE.TextureLoader().load('/tehnicall-project/images/framework/space.jpg')

		const controls = new OrbitControls(camera, renderer.domElement)

		scene.add(cubeHero)
		scene.add(cubeUsageDefintion)
		scene.add(cubeUsageSeparation)
		scene.add(cubeFrontEnd)
		scene.add(cubeBackEnd)
		scene.add(cubeUsageInterfaceDefinition)
		scene.add(cubeUsageInterface)
		scene.add(ambientLight, pointLight)
		scene.add(lightHelper, gridHelper)

		scene.background = spaceTexture
	}
	function createCubes() {
		createCubeHero()
		createCubeUsageDefintion()
		createCubeUsageSeparation()
		createCubeFront_End()
		createCubeBack_End()
		createCubeInterfaceDefinition()
		createCubeInterface()

		function createCubeHero() {
			let cube
			x = 0
			y = 0.2
			z = 4.59
			rotation = 1.58
			size = 1
			height = 1
			width = mediaQuery768 ? 0.6 : 1
			material = new THREE.MeshStandardMaterial({ color: 0x1a1919 })
			geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
			cube = new THREE.Mesh(geometry, material)
			cube.position.set(x, y, z)
			cube.rotation.y = rotation
			cube.scale.set(size, height, width)
			cubeHero = cube
		}

		function createCubeUsageDefintion() {
			let cube
			x = 0
			y = 0.2
			z = 4
			rotation = 1.58
			size = 1
			height = 1
			width = mediaQuery768 ? 0.6 : 1
			material = new THREE.MeshStandardMaterial({ color: 0x1a1919 })
			geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
			cube = new THREE.Mesh(geometry, material)
			cube.position.set(x, y, z)
			cube.rotation.y = rotation
			cube.scale.set(size, height, width)
			cubeUsageDefintion = cube
		}

		function createCubeUsageSeparation() {
			let cube

			x = 0
			y = 0.2
			z = 3.5
			rotation = 1.58
			size = 1
			height = 1
			width = mediaQuery768 ? 0.6 : 0.7
			material = new THREE.MeshStandardMaterial({ color: 0x1a1919 })
			geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
			cube = new THREE.Mesh(geometry, material)
			cube.position.set(x, y, z)
			cube.rotation.y = rotation
			cube.scale.set(size, height, width)
			cubeUsageSeparation = cube
		}

		function createCubeFront_End() {
			let cube

			x = -0.3
			y = 0.2
			z = 3.6
			rotation = 2.1
			size = 1
			height = 0.5
			width = mediaQuery768 ? 0.6 : 0.4
			const loader = new THREE.TextureLoader()
			const material = new THREE.MeshBasicMaterial({
				color: 0xfffffff,
				map: loader.load('/tehnicall-project/images/framework/backEnd.png')
			})
			geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
			cube = new THREE.Mesh(geometry, material)
			cube.position.set(x, y, z)
			cube.rotation.y = rotation
			cube.scale.set(size, height, width)
			cubeFrontEnd = cube
		}
		function createCubeBack_End() {
			let cube

			x = 0.3
			y = 0.2
			z = 3.6
			rotation = 1.1
			size = 1
			height = 0.5
			width = mediaQuery768 ? 0.6 : 0.4
			const loader = new THREE.TextureLoader()

			const material = new THREE.MeshBasicMaterial({
				color: 0xfffffff,
				map: loader.load('/tehnicall-project/images/framework/frontEnd.png')
			})
			geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
			cube = new THREE.Mesh(geometry, material)
			cube.position.set(x, y, z)
			cube.rotation.y = rotation
			cube.scale.set(size, height, width)
			cubeBackEnd = cube
		}
		function createCubeInterfaceDefinition() {
			let cube
			x = 0
			y = 0.2
			z = 3
			rotation = 1.58
			size = 1
			height = 1
			width = mediaQuery768 ? 0.6 : 1
			material = new THREE.MeshStandardMaterial({ color: 0x1a1919 })
			geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
			cube = new THREE.Mesh(geometry, material)
			cube.position.set(x, y, z)
			cube.rotation.y = rotation
			cube.scale.set(size, height, width)
			cubeUsageInterfaceDefinition = cube
		}
		function createCubeInterface() {
			let cube
			x = 0
			y = 0.13
			z = 3.01
			rotation = 1.58
			size = 1
			height = 0.6
			width = mediaQuery768 ? 0.6 : 0.5
			const loader = new THREE.TextureLoader()
			const material = new THREE.MeshBasicMaterial({
				color: 0xfffffff,
				map: loader.load('/images/framework/interface.png')
			})
			geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
			cube = new THREE.Mesh(geometry, material)
			cube.position.set(x, y, z)
			cube.rotation.y = rotation
			cube.scale.set(size, height, width)
			cubeUsageInterface = cube
		}
	}
	function handleCamera() {
		x = 0
		y = 0.2
		z = 4.7
		camera.position.set(x, y, z)
		//camera.up.set(1, 0, 0)
	}
	function animateSections() {
		const scroller = '.framework'
		const definitionEnd = vh(170)
		const usageEnd = vh(900)
		animateDefintion()
		animateUsage()

		function animateDefintion() {
			const element = '.framework__definition'
			gsap.set([cubeUsageDefintion.scale], {
				y: 0,
				x: 0
			})

			const tlAnimateTransitionToUsage = gsap.timeline({
				scrollTrigger: {
					// markers: true,
					scroller: scroller,
					scrub: 1.5,
					start: 'start start',
					end: `${definitionEnd} bottom`
				}
			})
			tlAnimateTransitionToUsage
				.to(element, {
					autoAlpha: 0,
					y: -10,
					duration: 0.5
				})
				.to(camera.position, {
					y: 0.55,
					duration: 1
				})
				.to(
					camera.rotation,
					{
						x: -0.3,
						duration: 1
					},
					'<30%'
				)
				.to(camera.position, {
					z: z - 0.4,
					y: y + 0.01,
					duration: 1
				})
				.to(
					camera.rotation,
					{
						x: 0,
						duration: 1
					},
					'<'
				)
				.to(
					cubeUsageDefintion.scale,

					{
						y: 1,
						x: 1,
						duration: 1
					},
					'<'
				)
		}
		function animateUsage() {
			const usageDefinition = '.framework__usage__definition'
			const usageSeparationDefinition = '.framework__usage__separate__definition'
			const usageInterfaceDefinition = '.framework__usage__interface__definition'
			const usageDataBaseDefinition = '.framework__usage__dataBase__definition'
			const usageApiDefinition = '.framework__usage__api__definition'
			const usageAdminPanelDefinition = '.framework__usage__adminPanel__definition'

			const usageSeparationCubes = [
				cubeFrontEnd.scale,
				cubeUsageSeparation.scale,
				cubeBackEnd.scale
			]
			const usageCubesInterface = [cubeUsageInterface.scale, cubeUsageInterfaceDefinition.scale]
			const firstAnimationCameraPosition = mediaQuery1024 ? (mediaQuery768 ? 0.6 : 0.7) : 0.7
			const secondAnimationCameraPosition = mediaQuery1024 ? (mediaQuery768 ? 1.3 : 1.4) : 1.4

			gsap.set([usageDefinition, usageSeparationDefinition, usageInterfaceDefinition], {
				autoAlpha: 0
			})
			gsap.set(usageSeparationCubes, {
				y: 0,
				x: 0
			})
			gsap.set(usageCubesInterface, {
				y: 0,
				x: 0
			})

			const tlAnimateAnimation = gsap.timeline({
				scrollTrigger: {
					//	markers: true,
					scroller: scroller,
					scrub: 1.5,
					start: `${definitionEnd + vh(20)} center`,
					end: `${usageEnd} bottom`
				}
			})
			animateAppearUsageDefinition()
			animateDisappearUsageDefinition()
			animateTransitionToUsageSeparation()
			animateDisappearUsageSeparation()
			animateTransitionToUsageInterface()
			animateAppearUsageInterface()
			animateDisappearUsageInterface()
			animateUsageDataBase()
			animateUsageApi()
			animateUsageAdminPanel()
			function animateAppearUsageDefinition() {
				tlAnimateAnimation
					.fromTo(
						usageDefinition,
						{
							y: 10
						},
						{
							autoAlpha: 1,
							y: 0,
							duration: 0.3
						}
					)
					.addPause(1)
			}
			function animateDisappearUsageDefinition() {
				tlAnimateAnimation
					.to(
						usageDefinition,

						{
							autoAlpha: 0,
							y: -20,
							duration: 0.3
						}
					)
					.to(cubeUsageDefintion.scale, {
						y: 0,
						x: 0,
						duration: 0.5
					})
					.addPause()
			}
			function animateTransitionToUsageSeparation() {
				tlAnimateAnimation
					.to(cubeUsageSeparation.scale, {
						y: 1,
						x: 0,
						duration: 0.5
					})
					.to([cubeFrontEnd.scale, cubeBackEnd.scale], {
						y: 0.5,
						x: 0,
						duration: 0.5
					})
					.to(
						camera.position,
						{
							z: z - firstAnimationCameraPosition
						},
						'<'
					)
					.fromTo(
						usageSeparationDefinition,
						{
							y: 10
						},
						{
							autoAlpha: 1,
							y: 0
						}
					)
					.addPause(1)
			}
			function animateDisappearUsageSeparation() {
				tlAnimateAnimation
					.to(usageSeparationDefinition, {
						autoAlpha: 0,
						y: -10
					})
					.to(usageSeparationCubes, {
						y: 0,
						x: 0
					})
					.addPause()
			}
			function animateTransitionToUsageInterface() {
				tlAnimateAnimation.to(camera.position, {
					z: z - secondAnimationCameraPosition
				})
			}
			function animateAppearUsageInterface() {
				tlAnimateAnimation
					.to(cubeUsageInterfaceDefinition.scale, {
						y: 1,
						x: 1
					})
					.to(cubeUsageInterface.scale, {
						y: 0.6,
						x: 1
					})
					.fromTo(
						usageInterfaceDefinition,
						{
							y: 10
						},
						{
							autoAlpha: 1,
							y: -10
						}
					)
			}
			function animateDisappearUsageInterface() {
				tlAnimateAnimation
					.to(cubeUsageInterface.scale, {
						y: 0,
						x: 0
					})

					.to(usageInterfaceDefinition, {
						autoAlpha: 0,
						y: 10
					})
			}
			function animateUsageDataBase() {
				tlAnimateAnimation
					.fromTo(
						usageDataBaseDefinition,
						{
							y: 10,
							autoAlpha: 0
						},
						{
							autoAlpha: 1,
							y: -10
						}
					)
					.addPause(0.5)
					.to(usageDataBaseDefinition, {
						autoAlpha: 0,
						y: 10
					})
			}
			function animateUsageApi() {
				tlAnimateAnimation
					.fromTo(
						usageApiDefinition,
						{
							y: 10,
							autoAlpha: 0
						},
						{
							autoAlpha: 1,
							y: -10
						}
					)
					.addPause(0.5)
					.to(usageApiDefinition, {
						autoAlpha: 0,
						y: 10
					})
			}
			function animateUsageAdminPanel() {
				tlAnimateAnimation
					.fromTo(
						usageAdminPanelDefinition,
						{
							y: 10,
							autoAlpha: 0
						},
						{
							autoAlpha: 1,
							y: -10
						}
					)
					.addPause(0.5)
					.to(usageAdminPanelDefinition, {
						autoAlpha: 0,
						y: 10
					})
			}
		}
	}
	function animate() {
		requestAnimationFrame(animate)

		renderer.render(scene, camera)
	}
	function onWindowResized() {
		renderer.setSize(window.innerWidth, window.innerHeight)

		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	}
}

function deleteHeader(state: boolean = false) {
	const header: HTMLElement = document.querySelector('header')!
	state ? (header.style.display = 'none') : header?.removeAttribute('style')
}

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	animationBackground()
	deleteHeader(true)
})
onUnmounted(() => {
	deleteHeader(false)
})
onBeforeRouteLeave((to: any, from: any, next: () => void) => {
	ScrollTrigger.getAll().forEach((trigger: any) => {
		trigger.kill()
	})
	next()
})
</script>
<template>
	<canvas id="bg"></canvas>
	<main class="framework">
		<div class="framework__container">
			<div class="framework__wrapper">
				<nav class="framework__nav">
					<div class="framework__nav__logo">
						<nuxt-link to="/"><Logo fill="white" width="5rem" height="100%" /></nuxt-link>
					</div>
					<div class="framework__nav__left"></div>
				</nav>
				<div class="framework__content">
					<frameworkDefinition class="section" />
					<frameworkUsage class="section" />
					<frameworkQualities />
				</div>
			</div>
		</div>
	</main>
</template>
<style scoped lang="scss">
a {
	position: absolute;
}
main {
	//pointer-events: none;
}

.framework {
	--frameworkPadding: max(1.5rem, 1vmax);
	--heightNav: clamp(4rem, 4vmax, 8vmax);

	padding: var(--frameworkPadding, 1.5rem);
	overflow-y: auto;
	right: 0;
	left: 0;
	top: 0;
	height: 100vh;
	width: 100vw;

	.section {
		--sizePadding: (var(--frameworkPadding) * 2) - var(--heightNav);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: calc(100vh - var(--sizePadding));
	}

	&__container {
		height: 100%;
		border: #ffffff33 solid 1px;
		border-radius: 1rem;
		position: sticky;
		top: 0;
	}
	&__wrapper {
		height: 1000vh;
	}
	&__nav {
		border-bottom: #ffffff33 solid 1px;
		border-radius: 0.5rem 0.5rem 0 0;
		height: var(--heightNav, 4rem);
		display: flex;
		justify-content: flex-start;
		align-items: center;

		&__logo {
			height: 100%;
			border-right: rgba(255, 255, 255, 0.2) solid 1px;
			width: 6rem;
			display: flex;
			justify-content: center;
			align-items: center;

			> * {
				height: 100%;
			}
		}
	}
}

canvas {
	position: fixed;
	top: 0;
	left: 0;
}
.hidden {
	display: none;
}
</style>
