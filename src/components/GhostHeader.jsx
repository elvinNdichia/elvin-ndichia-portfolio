import { createRef } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { Box as MuiBox } from "@mui/system";
import useMouse from "@react-hook/mouse-position";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import {
  htmlSVG,
  cssSVG,
  javascriptSVG,
  reactSVG,
  muiSVG,
  reactRouterSVG,
  framerSVG,
  firebaseSVG,
  figmaSVG,
} from "./svgLogos";
import React, { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { Lines } from "./Lines";

const Box = motion(MuiBox);

export function GhostHeader() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  const navAnimation = {
    Home: { left: "3px" },
    Projects: { left: "133px" },
    Contact: { left: "266px" },
  };
  const currentRoute = routes.find(
    (route) => route.path === location.pathname
  )?.name;

  return (
    <header
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
        pointerEvents: "none",
        zIndex: "20",
        top: "1rem",
        width: "100vw",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="89"
        height="28"
        viewBox="0 0 89 28"
        fill="none"
      >
        <path
          d="M0 27.9999V0.329346H13.8353V4.28229H3.95294V12.1882H11.5294V16.1411H3.95294V23.7176H13.5059V27.9999H0Z"
          fill="black"
        />
        <path
          d="M17.7891 27.9999V0.329346H21.742V23.7176H31.6244V27.9999H17.7891Z"
          fill="black"
        />
        <path
          d="M35.5781 27.9999V0.329346H39.5311V21.4117L52.0487 0.329346H56.6605L40.5193 27.9999H35.5781Z"
          fill="black"
        />
        <path
          d="M59.293 27.9999V0.329346H63.2459V27.9999H59.293Z"
          fill="black"
        />
        <path
          d="M67.8594 27.6706V0H72.1417L84.33 20.4235V0H88.2829V27.6706H84.0006L71.8123 7.24706V27.6706H67.8594Z"
          fill="black"
        />
      </svg>
      <Box
        style={{
          position: "relative",
          width: "400px",
          background: "#000",
          height: "42px",
          color: "#fff",
          borderRadius: "50px",
          padding: "3px",
        }}
      >
        <Box
          layout
          animate={navAnimation[currentRoute]}
          initial={navAnimation[currentRoute]}
          transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
          sx={{
            width: "130px",
            height: "36px",
            background: "#fff",
            borderRadius: "50px",
            position: "absolute",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            height: "auto",
            " .smooth-nav-container": {
              width: "130px",
              height: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            " p": { textDecoration: "none" },
          }}
        >
          {routes.map((route) => (
            <NavLink
              key={route.path}
              as={NavLink}
              to={route.path}
              style={{ textDecoration: "none" }}
              className={({ isActive }) =>
                isActive ? "smooth-nav-active" : "smooth-nav-link"
              }
            >
              <div className="smooth-nav-container body1">
                <p>{route.name}</p>
              </div>
            </NavLink>
          ))}
        </Box>
      </Box>
      <Box component="img" src="profile-header.png" sx={{ height: "54px" }} />
    </header>
  );
}
