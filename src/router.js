import Vue from 'vue'
import Router from 'vue-router'
import Bubble from './Views/Bubble.vue'
import VueChartJS from './Views/VueChart.vue'
import Home from './Views/Home.vue'



Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		{
			path: '/chartjs',
			name: 'VueChartJS',
			component: VueChartJS
		},
		{
			path: '/bubble',
			name: 'bubble',
			component: Bubble
		},

	]
})