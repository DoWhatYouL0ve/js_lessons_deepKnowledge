import {ACTIONS_TYPE, CurrencyReducersTypes} from './actions';
import {IGlobalState} from "./state";


export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
    // @ts-ignore
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
            return {...state, ...action.payload}
        case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
        case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                ...action.payload,
                // if client changed sell to buy or vice versa the input data will be cleared
                // if currency is changed, inputs should be cleared
                amountOfCurrency: '',
                amountOfBYN: ''}
        // this is described above
        /*case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                ...action.payload,
                // if currency is changed, inputs should be cleared
                amountOfCurrency: '',
                amountOfBYN: ''
            }*/
        default:
            return state;
    }
};

// export const selectCurrencies = (store: IGlobalState) => (store.currency.currencies) =>
export const selectAll = (store: IGlobalState) => store.currency
