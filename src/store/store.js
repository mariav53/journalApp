import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

//para usar redux devtools y middlewares
const composeEnhancers =
	(typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;

//al store solo podemos pasar un reducer asi que los combinamos
const reducer = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	notes: notesReducer,
});

//creamos el store y la llamamos en el punto mas alto de la app
export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
