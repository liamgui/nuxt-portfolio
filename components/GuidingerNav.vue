<template>
	<header>
		<div
			ref="navButton"
			class="navButton"
			:class="{ xlose: navState && animateNavButton, times: navState && !animateNavButton, open: !navState && animateNavButton }"
			@click="navButtonClick()"
		>
			<div id="line1" class="line line1"></div>
			<div id="line2" class="line line2"></div>
		</div>

		<div ref="navOverlay" class="navOverlay" >
			<div
				ref="backgroundImgWrap"
				class="backgroundImgWrap"
			>
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
import { mapActions, mapGetters } from 'vuex'
export default {
	data() {
		return {
			animateNavButton: false
		}
	},
	computed: {
		navState() {
			return this.getNavState();
		}
	},
	created() {
		// console.log(line1);
	},
	methods: {
		...mapActions({
			toggle: 'navigation/toggleNavState',
		}),
		...mapGetters({
			getNavState: 'navigation/getNavState',
		}),
		animateNavButtonTimeout(duration) {
			this.animateNavButton = true;
			setTimeout(()=> {
				this.animateNavButton = false;
			}, duration);
		},
		navButtonClick() {
			this.toggle();
			const duration = 700;
			this.animateNavButtonTimeout(duration);
			if (process.client) {
				const nonNavs = document.querySelectorAll('.nonNav')
				const mainContent = document.querySelectorAll('.mainContent')[0]
				const container = document.querySelectorAll('.container')[0]

				const navOverlay = this.$refs.navOverlay
				const backgroundImgWrap = this.$refs.backgroundImgWrap
				if (this.navState === true) {
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
