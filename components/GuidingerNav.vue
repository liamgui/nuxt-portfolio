<template>
	<header>
		<div
			class="navButton"
			:class="{ xlose: navState }"
			ref="navButton"
			@click="navButtonClick()"
			>
			<div class="line line1" id="line1"></div>
			<div class="line line2" id="line2"></div>
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
			this.toggle()

			if (process.client) {
				const nonNavs = document.querySelectorAll('.nonNav')
				const mainContent = document.querySelectorAll('.mainContent')[0]
				const container = document.querySelectorAll('.container')[0]

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
				}
			}
		},
	},
}
</script>
