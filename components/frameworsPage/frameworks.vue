<script setup lang="ts">
import frameworkDefinition from './ui/sections/frameworkDefinition.vue'
import frameworkApplication from './ui/sections/frameworkApplication.vue'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Logo from '~/assets/Icons/Logo.vue'

function animationBackground() {
	const windowHeight =
		parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--vh')) * 100 ||
		window.innerHeight
	const vh = (coef: number) => windowHeight * (coef / 100)

	let camera: any, scene: any, renderer: any
	let pointLight: any, ambientLight: any
	let lightHelper: any, gridHelper: any
	let spaceTexture: any, material: any, geometry: any
	let x: number, y: number, z: number
	let cube: any, cube2: any
	let far: any, near: any, fov: any, aspect: any

	createCube()
	createCube2()
	init()
	animate()
	handleCamera()
	animateTransition()
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
		pointLight.position.set(5, 5, 5)

		ambientLight = new THREE.AmbientLight(0x00000)
		lightHelper = new THREE.PointLightHelper(pointLight)

		gridHelper = new THREE.GridHelper(60, 100)
		spaceTexture = new THREE.TextureLoader().load('/images/developer/space.jpg')

		//const controls = new OrbitControls(camera, renderer.domElement)

		scene.add(cube)
		scene.add(cube2)
		scene.add(ambientLight, pointLight)
		scene.add(lightHelper, gridHelper)

		scene.background = spaceTexture
	}

	function createCube() {
		x = 0
		y = 0.2
		z = 4.59

		material = new THREE.MeshStandardMaterial({ color: 0x1a1919 })
		geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
		cube = new THREE.Mesh(geometry, material)
		cube.position.set(x, y, z)
		cube.rotation.y = 1.58
	}
	function createCube2() {
		x = 0
		y = 0.2
		z = 4

		material = new THREE.MeshStandardMaterial({ color: 0x1a1919 })
		geometry = new THREE.BoxGeometry(0.01, 0.4, 0.5)
		cube2 = new THREE.Mesh(geometry, material)
		cube2.position.set(x, y, z)
		cube2.rotation.y = 1.58
	}

	function animateTransition() {
		const scroller = '.framework'
		const definition = '.framework__definition'
		const tlAnimationTransition = gsap.timeline({
			scrollTrigger: {
				//markers: true,
				scroller: scroller,
				scrub: 1.5,
				start: 'start start',
				end: `${vh(170)} bottom`
			}
		})
		console.log(z)
		tlAnimationTransition
			.to(definition, {
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
			.fromTo(
				cube2.scale,
				{ y: 0, x: 0 },
				{
					y: 1,
					x: 1,
					duration: 1
				},
				'<'
			)
	}
	function handleCamera() {
		x = 0
		y = 0.2
		z = 4.7
		camera.position.set(x, y, z)
		//camera.up.set(1, 0, 0)
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
					<frameworkDefinition />
					<frameworkApplication />
				</div>
			</div>
		</div>
	</main>
</template>
<style scoped lang="scss">
a {
	position: absolute;
}
.framework {
	padding: 1.5rem;
	overflow-y: auto;
	right: 0;
	left: 0;
	top: 0;
	height: 100vh;
	width: 100vw;

	&__container {
		height: 100%;
		border: #ffffff33 solid 1px;
		border-radius: 1rem;
		position: sticky;
		top: 0;
	}
	&__wrapper {
		height: 500vh;
	}
	&__nav {
		border-bottom: #ffffff33 solid 1px;
		border-radius: 0.5rem 0.5rem 0 0;
		height: 4rem;
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
