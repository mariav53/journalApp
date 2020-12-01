import { types } from '../types/types';
/*
{
    uid: 'jahshh3hsh3h',
    name: "Maria"
}
*/

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
			};

		case types.logout:
			return {};

		default:
			return state;
	}
};
