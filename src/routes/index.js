import Home from '../pages/Home';
import About from '../pages/About';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
