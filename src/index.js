import Vue from 'vue';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.use(VueRouter);

export var router = new VueRouter();

// set up router and match routes to components
router.map({
	'/home': {
		component: Home
	},
	'/signup': {
		component: Signup
	},
	'/login': {
		component: Login
	},
	'/profile': {
		component: Profile
	},
});

// Redirect to the home route if any routes are unmatched
router.redirect({
	'*': '/home'
});

// start the app on the #app div
router.start(App, '#app');
