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

// set up router and match routes to components
var router = new VueRouter({
	routes: [
		{ path: '/', component: Home },
		{ path: '/signup', component: Signup },
		{ path: 'login', component: Login },
		{ path: '/profile', component: Profile },
		{ path: '*', component: Home }
	]
});

new Vue({
	el: '#app',
	router: router,
	template: '<router-view></router-view>'
});
