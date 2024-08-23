import React from "react";
import Navbar from "../common/header/Navbar";
import Footer from "../common/footer/Footer";


const MainLayout: React.FC = () => {
    return (
        <div data-theme="light">
            <Navbar />
            <Footer />
           </div>
    );
};

export default MainLayout;
