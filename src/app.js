import React from 'react';
import { useLocation } from 'react-router-dom';

import Settings from './components/Settings/Settings';

const App = () => {
    const currentUrl = window.location.href;
    document.querySelectorAll('#toplevel_page_catalog>ul>li>a').forEach((element) => {
        element.parentNode.classList.remove('current');
        if (element.href === currentUrl) {
            element.parentNode.classList.add('current');
        }
    });

    const location = new URLSearchParams(useLocation().hash);
    return (
        <>
            { location.get('tab') === 'settings' && <Settings initialTab='storeDisplay' /> }
        </>
    );
}

export default App;