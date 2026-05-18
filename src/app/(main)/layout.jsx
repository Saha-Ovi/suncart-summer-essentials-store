import Banner from '@/components/Banner.jsx/Banner';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MainLayout;