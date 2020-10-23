import {Action} from "redux";

type TAction = Action | any;

export enum Actions {
    LOCATION = "location"
}

export function location(url: string) {
    return {type: Actions.LOCATION, location: url}
}

export interface StoreState {
    currentLocation: string
}

export const initState: StoreState = {
    currentLocation: "/"
};

export function reducer(state: StoreState = initState, action: TAction) {
    switch (action.type) {
        case Actions.LOCATION: {
            return {
                ...state,
                currentLocation: action.location
            }
        }
        default: {
            return {...state}
        }
    }
}
