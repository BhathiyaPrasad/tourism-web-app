import React from "react";
import Navbar from "../common/header/Navbar";
import Footer from "../common/footer/Footer";
import Slider from "../common/slider/Slider";


const MainLayout: React.FC = () => {
    return (
        <div data-theme="light">
            <Navbar />
            <Slider />
            <Footer />
           </div>
    );
};

export default MainLayout;
