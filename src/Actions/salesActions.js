import {DECREMENT_SALES, INCREMENT_SALES} from "../Constants/salesConstants";

export function addSale() {
    return {
        type: INCREMENT_SALES
    }
}

export function cancelSale() {
    return {
        type: DECREMENT_SALES
    }
}