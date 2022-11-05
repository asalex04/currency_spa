import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICurrency, IRate} from "../../types";

export interface IState {
    currencies: ICurrency
    rates: IRate
}

const initialState: IState = {
    currencies: {},
    rates: {}
}

export const usersSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        getCurrencies(state, action: PayloadAction<ICurrency>) {
            state.currencies = action.payload
        },
        getRates(state, action: PayloadAction<IRate>) {
            state.rates = action.payload
        }
    }
})

export const {getCurrencies, getRates} = usersSlice.actions
export default usersSlice.reducer
