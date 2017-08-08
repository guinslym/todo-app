import { combineReducers } from 'redux';
import todos from './todos';

const todoAppStore = combineReducers({ todos });

export default todoAppStore;
