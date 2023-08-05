import { createRef } from "react";
import { createRoot } from "react-dom/client";
import { AnimatePresence, motion } from "framer-motion";
import { Box as MuiBox } from "@mui/system";
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
import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const Box = motion(MuiBox);
const MotionBox = motion(Box);

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

  // Getting Lenis in the Game
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <LoaderView />
      <ReactLenis root>
        {/* Header START */}
        <header
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              position: "relative",
              width: "400px",
              background: "#000",
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
                color: "#fff",
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
        </header>
        {/* Header END */}
        <div className="container">
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={800}
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
      </ReactLenis>
    </>
  );
}
/* -------------------- App END ---------------------------- */

/* -------------------- Home START ---------------------------- */
function Home() {
  return <Box sx={{ border: "2px dashed red", height: "200vh" }}>Home</Box>;
}
/* -------------------- Home END ---------------------------- */
/* -------------------- Projects START ---------------------------- */
function Projects() {
  return <>Home</>;
}
/* -------------------- Projects END ---------------------------- */
/* -------------------- Contact START ---------------------------- */
function Contact() {
  return <>Home</>;
}
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
