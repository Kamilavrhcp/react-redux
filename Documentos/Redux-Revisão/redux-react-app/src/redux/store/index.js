import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

const extension = window.devToolsExtension() || ((f) => f);
const store = createStore(rootReducer, compose(extension));

// createStore concentra tudo ( store, actions..)
// rootreducer recebe os reducers
export default store;