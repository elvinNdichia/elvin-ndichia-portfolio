import { CursorContext, CursorProvider } from "./helpers/CursorContext";
import Scrollbar from "smooth-scrollbar";

import React, { useEffect } from "react";
import { Lines } from "./components/Lines";
import Menu from "./components/Menu";
import { Header } from "./components/Header";
import { FluidHeader } from "./components/FluidHeader";
import { AnimatingBackground } from "./components/AnimatingBackground";
import { NewPF } from "./components/NewPF";
import { RoutedApp } from "./components/RoutedApp";
import { AppRouted } from "./components/AppRouted";

export default function App() {
  return <AppRouted />;
}
/* 
    <>
    <RoutedApp />
      <CursorProvider>
        <AnimatingBackground />
        <Lines />
        <FirstChildren />
        <FluidHeader />
      </CursorProvider>
    </>*/

function FirstChildren() {
  const { ref, projectEnter, projectLeave, contactEnter, contactLeave } =
    React.useContext(CursorContext);

  useEffect(() => {
    const scrollbar = document.querySelector("#my-scrollbar");

    if (scrollbar) {
      Scrollbar.init(scrollbar);
    }
  }, []);
  return (
    <>
      <div
        ref={ref}
        id="my-scrollbar"
        style={{ height: "100vh", width: "100%" }}
      >
        <div>Hello world</div>
      </div>
    </>
  );
}

/* <div
        onMouseEnter={projectEnter}
        onMouseLeave={projectLeave}
        style={{
          width: "100px",
          height: "400vh",
          background: "#eee",
          border: "2px dashed black",
        }}
      ></div>
      <div
        onMouseEnter={contactEnter}
        onMouseLeave={contactLeave}
        style={{
          width: "50vw",
          left: "300px",
          position: "relative",
          bottom: "50px",
          cursor: "pointer",
        }}
      >
        elvinndichia@gmail.com      >

      </div>

      */
