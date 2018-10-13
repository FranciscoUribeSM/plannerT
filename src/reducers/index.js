import { combineReducers } from 'redux';
import { initial } from './initial'; 
import {login} from './login';
import {getUser} from './lista';
export default combineReducers({ 
    initial,
    login,
    getUser 
});
