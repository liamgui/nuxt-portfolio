export default {
	TOGGLE(state, status) {
		if (status) {
			state.navState = status;
		} else {
			state.navState = !state.navState;
		}
	}
}
