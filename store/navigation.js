export const state = () => ({
	navState: false,
});

export const mutations = {
	toggle (state, status) {
		if (status) {
			state.navState = status;
		} else {
			state.navState = !state.navState;
		}
	}
}