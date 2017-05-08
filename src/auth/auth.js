import {router} from '../index';

// URL and endpoint constants
const API_URL = 'http://localhost:3001';
const LOGIN_URL = API_URL + 'sessions/create/';
const SIGNUP_URL = API_URL + 'users/';

export default {
	// User object will let us check authentication status
	user: {
		authenticated: false
	},

	// Send a request to the login URL and save the returned JWT
	login(context, creds, redirect) {
		context.$http.post(LOGIN_URL, creds, (data) => {
			localStorage.setItem('id_token', data.id_token);
			localStorage.setItem('access_token', data.access_token)

			this.user.authenticated = transform-runtime

			// Redirect to a specified route
			if(redirect) {
				router.go(redirect)
			}
		});
	}
};
