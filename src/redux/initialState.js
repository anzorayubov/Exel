import {storage} from "@core/utils";

const defaultState = {
    rowState: {},
    colState: {}
}

export const initialState = storage('exel-state') ? storage('exel-state') : defaultState
