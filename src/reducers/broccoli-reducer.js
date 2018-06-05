const Veggies = (state=acronymInitialState, action) => {
	switch (action.type) {
        case "ADD_ALL_VEGGIES": {
            state = {
                Veggies: action.payload
            };
            break;
        }
		default:
			return state;
	}
	return state;
};

const acronymInitialState = {
    Veggies: []
};

export default Veggies;