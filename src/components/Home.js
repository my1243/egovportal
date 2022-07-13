import React from "react";
import Contact from "./Home/Contact";
import Graduation from "./Home/Graduation";
import Profile from "./Home/Profile";

const Home = () => {
    return(
        <>
            <Profile/>
            <div className="flex flex-col lg:flex-row gap-12 m-8 md:mx-12 mb-12">
                <Graduation/>
                <Contact/>
            </div>
        </>
    )
}

export default Home;