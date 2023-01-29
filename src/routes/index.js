import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '~/pages/Portfolio';
import Contact from '~/pages/Contact';

// Public Routes
const publicRoutes = [
    { path: '/', element: <Home /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
