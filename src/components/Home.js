import React from "react";
import Contact from "./Home/Contact";
import Graduation from "./Home/Graduation";
import Profile from "./Home/Profile";
import Academic from "./Home/Academic";

const Home = () => {
  return (
    <>
      <Profile />
      <div className="res-text flex flex-col lg:flex-row gap-12 mx-2 md:mx-12 mb-12">
        <Graduation />
        <Contact />
      </div>
      <Academic />

    </>
  )
}

export default Home;
