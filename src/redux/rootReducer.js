// Pure function
import {TABLE_RESIZE} from "@/redux/types";

export function rootReducer(state, action) {
    let field
    switch (action.type) {
        case TABLE_RESIZE:
            field = action.data.type === 'col' ? 'colState' : 'rowState'
            const prevState = state[field] || {}
            prevState[action.data.id] = action.data.value
            return {...state, [field]: prevState}
        default:
            return state
    }
}
