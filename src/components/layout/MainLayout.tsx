import React from "react";
import Navbar from "../common/header/Navbar";

import Slider from "../common/slider/Slider";


const MainLayout: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Slider />
        </div>
    );
};

export default MainLayout;
