import {DECREMENT_SALES, INCREMENT_SALES} from "../Constants/salesConstants";

const initialState = {
    numberOfSales: 0
}

export default function salesReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_SALES:
            return {numberOfSales: state.numberOfSales + 1};

        case DECREMENT_SALES:
            return {numberOfSales: state.numberOfSales === 0? 0: state.numberOfSales - 1};
    }

    return state;
}