import React from 'react';
import { Provider } from 'react-redux';

//provider es in HOC que provee de info a toda la app

import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const JournalApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
