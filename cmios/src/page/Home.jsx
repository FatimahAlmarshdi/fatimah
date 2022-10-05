import React from "react";
import {useContext} from "react";
import { themeContext } from "../Context";
import About from "./About";
// import image
import img from "../img/heder.jpg";
import {useScrollToTop} from "./utils.jsX";
import Contact from "./Contact";
function Home() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const setScrollToTop = useScrollToTop(true);

  return (
    <>
      <div
        class="relative 
       
      max-h-screen   overflow-hidden"
      >
        <img src={img} alt="Avatar" class="object-cover w-full h-full" />
        <div
          style={{
            background: darkMode ? "black" : "",
            color: darkMode ? "white" : "",
          }}
          class="absolute xl:w-1/3 md:w-2/4 w-full md:mx-6  h-40  bottom-2 md:bottom-52 opacity-75 right-1   md:left-14 bg-white text-lg text-center "
        >
          <h1 class=" mt-4 font-bold">
            {" "}
            You have to be burning with an idea or a problem of a wrong that you
            want to right. If you're not passionate enough from the start,
            you'll never stick it out
          </h1>
          <h1 className="flex float-right mx-5"> -steve jobs</h1>
        </div>
      </div>
      <About />
      <Contact/>
      <button
        className="
        fixed bottom-10 right-10
        hover:bg-amber-400
              mt-9 ml-4
                py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        onClick={() => setScrollToTop(true)}
      >
        scroll to top
      </button>
    </>
  );
}

export default Home;
