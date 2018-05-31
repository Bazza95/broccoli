const Acronym = (state=acronymInitialState, action) => {
	switch (action.type) {
        case "ADD_ALL_ACRONYMS": {
            state = {
                Acronyms: action.payload
            };
            break;
        }
		default:
			return state;
	}
	return state;
};

const acronymInitialState = {
    Acronyms: []
};

export default Acronym;