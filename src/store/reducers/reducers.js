
//imports
import { combineReducers } from 'redux';
import transactions from './transactions';
import operations from './operations';
//initial states

let userLoggedIn = {};
let userWallets = {};

//reducers
const jwt = (state = '', action) => {
  switch (action.type) {
  case 'SET_TOKEN':
    return action.data || state;
  default:
    return state;
  }
};

const userLogged = (state = userLoggedIn, action) => {
  switch (action.type) {
  case 'USER_LOGGED':
    userLoggedIn = action.data;
    return userLoggedIn || state;
  case 'USER_LOGOUT':
    return {};
  case 'FETCH_LOGIN':
    return state;
  case 'FETCH_LOGIN_SUCCESS':
    return action.data || state;
  case 'FETCH_CREATE_USER':
    return state;
  case 'FETCH_CREATE_USER_SUCCESS':
    return action.data || state;
  default:
    return state;
  }
};

const getWallets = (state = userWallets, action) => {
  switch (action.type) {
  case 'FETCH_GET_WALLETS':
    return state;
  case 'FETCH_GET_WALLETS_SUCCESS':
    return action.data || state;
  case 'FETCH_CREATE_WALLET':
    return state;
  case 'FETCH_CREATE_WALLET_SUCCESS':
    return {...state, ...action.data} || state;
  case 'RESET_WALLETS':
    return [];
  default:
    return state;

  }
};

//export reducers
export const reducers = combineReducers({
  jwt,
  userLogged,
  operations,
  getWallets,
  transactions
});
