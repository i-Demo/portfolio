import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

import DefaultLayout from './layouts/DefaultLayout';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, []);
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        return <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
