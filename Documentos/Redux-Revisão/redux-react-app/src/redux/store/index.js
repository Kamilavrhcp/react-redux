import { createStore, compose } from 'redux';
import rootreducer from '../reducers';

const extension = window.devToolsExtension() || ((f) => f);
const store = createStore(rootreducer, compose(extension));

// createStore concentra tudo ( store, actions..)
// rootreducer recebe os reducers
export default store;