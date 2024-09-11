import {
    Suspense
} from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import './index.css';

import Loading from './components/Global/Loading/index.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Suspense fallback={<Loading />}>
        <App />
    </Suspense>
);
