import FooterPag from '../components/FooterPag';
import HeadPag from '../components/HeadPag';

import { Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <div>
           <HeadPag/> 
           <div>
            <Outlet/>
           </div>
           <FooterPag/>
           

        </div>
    );
}

export default MainLayout;