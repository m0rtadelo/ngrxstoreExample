import { Counter } from './../blockchain/counter.model';
import { Action } from '@ngrx/store';

export function counterReducer(state: Counter = { value: 0 }, action) {
    switch (action.type) {
        case 'COUNTER':
            state.value = state.value + action.payload.value;
            return state;
        default:
            return state;
    }
}
