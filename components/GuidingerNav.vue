<template>
	<header>
		<div id="navButton" ref="navButton" @click="navButtonClick()">
			<svg
				id="navButtonOverlay"
				data-name="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 45.23 45.23"
			>
				<title>navButton</title>
				<g class="menuButton">
					<line
						ref="line1"
						id="line1"
						class="cls-1"
						y1="18.46"
						x2="63.03"
						y2="18.46"
					/>
					<line
						ref="line2"
						id="line2"
						class="cls-1"
						y1="0.47"
						x2="63.03"
						y2="0.47"
					/>
				</g>
			</svg>
		</div>

		<div class="navOverlay">
			<div class="backgroundImgWrap">
				<div class="backgroundImg"></div>
				<div class="backgroundNav"></div>
			</div>
			<div class="nav">
				<ul class="navUL">
					<li id="home">
						<a href="/">Home</a>
					</li>
					<li id="work">
						<a href="work">Work</a>
					</li>
					<li id="about">
						<a href="about">About</a>
					</li>
					<li id="contact">
						<a href="contact">Contact</a>
					</li>
				</ul>
			</div>
			<div id="guidinger_design">
				<h1>guidinger <span class="wrapNextLine">design</span></h1>
			</div>
		</div>
	</header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			nav: false,
		}
	},
	computed: {
		// navState() {
		// 	return this.getNavState()
		// }
	},
	created() {},
	methods: {
		...mapActions({
			toggle: 'navigation/toggleNavState'
		}),
		...mapGetters({
			navState: 'navigation/getNavState'
		}),
		navButtonClick() {
			this.toggle();
			if (process.client) {
				const nonNavs = document.querySelectorAll('.nonNav')
				const mainContent = document.querySelectorAll('.mainContent')[0]
				const navOverlay = document.querySelector('.navOverlay')
				const container = document.querySelectorAll('.container')[0]
				// const backgroundImg = document.querySelector('.backgroundImg')
				const backgroundImgWrap = document.querySelector('.backgroundImgWrap')
				if (this.nav === false) {
					line1.setAttribute('x1', '0.33')
					line1.setAttribute('y1', '0.33')
					line1.setAttribute('x2', '44.9')
					line1.setAttribute('y2', '44.9')

					line2.setAttribute('x1', '44.9')
					line2.setAttribute('y2', '44.9')
					line2.setAttribute('x2', '0.33')
					line2.setAttribute('y1', '0.33')
					// container.classList.remove('container');
					container.classList.add('containerNavShown')
					navOverlay.classList.add('navShown')
					// backgroundImg.classList.add('backgroundNav');
					backgroundImgWrap.classList.add('backgroundWrapNav')
					if (mainContent !== undefined) {
						console.log('this is one of the portfolio pages')
					}
					for (let i = 0; i < nonNavs.length; i++) {
						nonNavs[i].classList.add('goodbye')
					}

					this.nav = true
				} else {
					line1.removeAttribute('x1')
					line1.setAttribute('y1', '20.48')
					line1.setAttribute('x2', '63.03')
					line1.setAttribute('y2', '20.48')

					line2.removeAttribute('x1')
					line2.setAttribute('y1', '0.47')
					line2.setAttribute('x2', '63.03')
					line2.setAttribute('y2', '0.47')
					// let container = document.getElementsByClassName("containerNav")[0];
					container.classList.remove('containerNavShown')
					// container.classList.add('container');
					navOverlay.classList.remove('navShown')
					// backgroundImg.classList.remove('backgroundNav');
					backgroundImgWrap.classList.remove('backgroundWrapNav')
					if (mainContent !== undefined) {
						console.log('this is one of the portfolio pages')
						for (let i = 0; i < nonNavs.length; i++) {
							nonNavs[i].classList.remove('goodbye')
						}
					}

					this.nav = false
				}
			}
		},
	},
}
</script>

<style lang="scss">
@import '@/assets/scss/_nav.scss';
</style>
