export default {
	toggleNavState(context) {
		context.commit('TOGGLE');
		context.dispatch('logNavState');
	},
	logNavState(context) {
		console.log(context.getters.getNavState);
	}
}