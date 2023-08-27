import { createRef } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { Box as MuiBox } from "@mui/system";
import useMouse from "@react-hook/mouse-position";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
  Link,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
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
import { CursorContextProvider } from "./CursorContext";
import { useCursorContext } from "./CursorContext";

const Box = motion(MuiBox);
const MotionBox = motion(MuiBox);

/* -------------------- Routes Definition start ---------------------------- */
const routes = [
  { path: "/", name: "Home", element: <Home />, nodeRef: createRef() },
  {
    path: "/projects",
    name: "Projects",
    element: <Projects />,
    nodeRef: createRef(),
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
    nodeRef: createRef(),
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
/* -------------------- Routes Definition end ---------------------------- */
/* -------------------- App Routed Start ---------------------------- */
export function AppRouted() {
  return <RouterProvider router={router} />;
}
/* -------------------- App Routed end ---------------------------- */
/* -------------------- App Start ---------------------------- */
export function App() {
  const location = useLocation();
  const [showApp, setShowApp] = useState(false);
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

  // Getting Lenis in the Game
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  /* Container Padding */
  let containerPadding = "0 16px";
  if (isTablet) containerPadding = "0 32px";
  if (isLaptop) containerPadding = "0 64px";

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 5000);

    return () => clearTimeout(timer); // this will clear the timer if the component is unmounted
  }, []);

  return (
    <>
      <LoaderView />
      <Lines />

      {/* Header START */}
      {/* Starting with mobile header */}
      <Box
        sx={{
          position: "fixed",
          display: {
            xs: "flex",
            md: "none",
          },
          bottom: "1rem",
          left: 0,
          right: 0,
          width: "100%",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              position: "relative",
              width: "306px",
              background: "#000",
              height: "42px",
              color: "#fff",
              borderRadius: "50px",
              padding: "3px",
            }}
          >
            <div></div>

            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                height: "auto",
                " .smooth-nav-container": {
                  width: "100px",
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
        </Box>
      </Box>
      {/* Ending with mobile header */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 3fr 1fr" },
          pointerEvents: "none",
          zIndex: "20",
          top: ".5rem",
          width: "100vw",
          padding: containerPadding,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            sx={{ width: { xs: "79px", md: "89px" } }}
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
          </Box>
        </div>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              position: "relative",
              width: "399px",
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
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="profile-header.png"
            sx={{ height: { xs: "40px", md: "48px" } }}
          />
        </div>
      </Box>
      {/* Header END */}
      {showApp && (
        <CursorContextProvider>
          <div className="container">
            <SwitchTransition>
              <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={500}
                classNames="page"
                unmountOnExit
              >
                {(state) => (
                  <div ref={nodeRef} className="page">
                    {currentOutlet}
                  </div>
                )}
              </CSSTransition>
            </SwitchTransition>
          </div>
        </CursorContextProvider>
      )}
    </>
  );
}
/* -------------------- App END ---------------------------- */

/* -------------------- Home START ---------------------------- */

const sentenceVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

const boxVariants = {
  hidden: { height: "0px" },
  visible: {
    height: "100px",
    transition: {
      duration: 0.5,
    },
  },
};

function AnimatedProjectsTitle() {
  return (
    <Box sx={{ h1: { textAlign: "center" } }}>
      <motion.div
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            My next projects will always be
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            significantly better than these 2
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            side works
          </motion.h1>
        </div>
        <div>
          <motion.div
            variants={boxVariants}
            style={{
              width: "100px",
              background: "#ddd",
              position: "relative",
              display: "block",
            }}
          >
            Hello
          </motion.div>
        </div>
      </motion.div>
    </Box>
  );
}

const AnimatedLines = ({ openEnter, openLeave, quickEnter, quickLeave }) => {
  return (
    <Box sx={{ paddingTop: "80px", ".h1": { textAlign: "center" } }}>
      <motion.div
        variants={sentenceVariants}
        initial="hidden"
        animate="visible"
      >
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            Hi, I am Elvin. A Frontend
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            developer who turns complex
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            designs into clean, user-friendly
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            interfaces. I’m{" "}
            <a
              onMouseEnter={quickEnter}
              onMouseLeave={quickLeave}
              style={{ textDecoration: "underline" }}
            >
              quick
            </a>{" "}
            but I don’t
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            let a single detail slip thanks to
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            my background in UX design and
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            deep knowledge on Frontend
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            technologies, particularly React
          </motion.h1>
        </div>
        <div style={{ overflow: "hidden" }}>
          <motion.h1 variants={lineVariants} className="h1">
            ecosystem
          </motion.h1>
        </div>
      </motion.div>
    </Box>
  );
};

/* -------------------- Home END ---------------------------- */
/* -------------------- Projects START ---------------------------- */
function Projects() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "90vw",
      }}
    >
      <Box sx={{ height: "200vh", background: "#eee" }}>
        <AnimatedProjectsTitle />
      </Box>
    </Box>
  );
}
/* -------------------- Projects END ---------------------------- */
/* -------------------- Contact START ---------------------------- */

/* -------------------- Contact END ---------------------------- */

/* -------------------- Logo animation start ---------------------------- */

function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        "> div": {
          marginRight: "3.9px",
        },
      }}
    >
      <Box position="relative" width={14} height={28} overflow="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="28"
          viewBox="0 0 14 28"
          fill="none"
        >
          <path
            d="M0 27.6706V0H13.8353V3.95294H3.95294V11.8588H11.5294V15.8118H3.95294V23.3882H13.5059V27.6706H0Z"
            fill="white"
          />
        </svg>
        <Box
          as={motion.div}
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            times: [0, 1],
            delay: 0.3,
          }} // Added delay here
          sx={{
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </Box>
      <Box position="relative" width={15} height={28} overflow="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="28"
          viewBox="0 0 15 28"
          fill="white"
        >
          <path
            d="M0.789062 27.6706V0H4.742V23.3882H14.6244V27.6706H0.789062Z"
            fill="white"
          />
        </svg>
        <Box
          as={motion.div}
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            times: [0, 1],
            delay: 0.4,
          }} // Added delay here
          sx={{
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </Box>
      <Box position="relative" width={22} height={28} overflow="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="28"
          viewBox="0 0 22 28"
          fill="white"
        >
          <path
            d="M0.578125 27.6706V0H4.53107V21.0824L17.0487 0H21.6605L5.5193 27.6706H0.578125Z"
            fill="white"
          />
        </svg>
        <Box
          as={motion.div}
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            times: [0, 1],
            delay: 0.5,
          }} // Added delay here
          sx={{
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </Box>
      <Box position="relative" width={5} height={28} overflow="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="28"
          viewBox="0 0 5 28"
          fill="white"
        >
          <path
            d="M0.292969 27.6706V0H4.24591V27.6706H0.292969Z"
            fill="white"
          />
        </svg>
        <Box
          as={motion.div}
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            times: [0, 1],
            delay: 0.48,
          }} // Added delay here
          sx={{
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </Box>
      <Box position="relative" width={22} height={28} overflow="hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="28"
          viewBox="0 0 22 28"
          fill="white"
        >
          <path
            d="M0.859375 27.6706V0H5.14173L17.33 20.4235V0H21.2829V27.6706H17.0006L4.81232 7.24706V27.6706H0.859375Z"
            fill="white"
          />
        </svg>
        <Box
          as={motion.div}
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.95],
            times: [0, 1],
            delay: 0.52,
          }} // Added delay here
          sx={{
            backgroundColor: "#000",
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </Box>
    </Box>
  );
}

/* -------------------- Logo animation end ---------------------------- */
/* -------------------- Loader Start ---------------------------- */
export function LoaderView() {
  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 500,
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4.5, duration: 0.4 }}
            layout
          >
            <Box initial={{}}>
              <Logo />
            </Box>
            <Box
              sx={{
                color: "rgba(255, 255, 255, .7)",
                marginTop: "8px",
                fontWeight: 400,
                fontSize: 14,
                textShadow: "0 0 3px #fff",
                textAlign: "center",
              }}
              className="body1"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [
                  0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                  0, 0, 1, 0, 1, 0, 0, 1, 0, 1,
                ],
                textShadow: [
                  "0 0 6px #fff",
                  "0 0 2px #fff",
                  "0 0 6px #fff",
                  "0 0 2px #fff",
                  "0 0 6px #fff",
                ],
              }}
              transition={{
                opacity: { delay: 1, duration: 1.3 },
                textShadow: { duration: 5 },
              }}
            >
              Let's make the world significantly better
            </Box>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
}
/* -------------------- Loader End ---------------------------- */
/* -------------------- NavigateButton Start ---------------------------- */
function NavigateButton({ location }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        className="navigate-button"
        sx={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          background:
            "linear-gradient(54deg, #EC0D78 0%, #FD2944 43.24%, #F84E37 72.80%, #FE880E 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="27"
          viewBox="0 0 19 27"
          fill="none"
          style={{ marginRight: "8px" }}
        >
          <path
            d="M17.7187 13.1914H0.84375"
            stroke="url(#paint0_linear_2413_4019)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.9141 6.41382C10.9141 6.41382 17.7203 10.0824 17.7203 13.1896C17.7203 16.2991 10.9141 19.9689 10.9141 19.9689"
            stroke="url(#paint1_linear_2413_4019)"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2413_4019"
              x1="5.33963"
              y1="14.0798"
              x2="11.0003"
              y2="8.76642"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EC0D78" />
              <stop offset="0.43243" stop-color="#FD2944" />
              <stop offset="0.728046" stop-color="#F84E37" />
              <stop offset="1" stop-color="#FE880E" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_2413_4019"
              x1="12.7274"
              y1="18.4555"
              x2="17.0188"
              y2="18.3356"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#EC0D78" />
              <stop offset="0.43243" stop-color="#FD2944" />
              <stop offset="0.728046" stop-color="#F84E37" />
              <stop offset="1" stop-color="#FE880E" />
            </linearGradient>
          </defs>
        </svg>
        <p className="subtitle1">{location}</p>
      </Box>
    </Box>
  );
}
/* -------------------- NavigateButton End ---------------------------- */
