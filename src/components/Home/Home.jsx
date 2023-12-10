import React from 'react';
import Hader from '../Hader/Hader';
import { Outlet } from "react-router-dom"

const Home = () => {
    return (
        <div>

            <Hader></Hader>
            <Outlet />

        </div>
    );
};

export default Home;