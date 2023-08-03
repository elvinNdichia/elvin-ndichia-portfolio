import { createRef } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Box as MuiBox } from "@mui/system";
import {
  createBrowserRouter,
  RouterProvider,
  NavLink,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const Box = motion(MuiBox);

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

export function RoutedApp() {
  return <RouterProvider router={router} />;
}

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

  return (
    <>
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
      <div className="container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={400}
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
    </>
  );
}

const textLineVariants = {
  visible: { top: 0, transition: { duration: 0.5 } },
  hidden: { top: 16, transition: { duration: 6 } },
};
function Home() {
  return (
    <>
      <motion.h1
        style={{ position: "relative" }}
        initial={{ top: 16, opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        className="h1"
        transition={{ delay: 0.2 }}
        variants={{ textLineVariants }}
      >
        Hi, I am Elvin. A Frontend developer who turns complex designs into
        clean, user-friendly interfaces. I’m quick but I don’t let a single
        detail slip thanks to my background in UX design and deep knowledge on
        Frontend technologies, particularly React ecosystem
      </motion.h1>
    </>
  );
}
function Projects() {
  return (
    <>
      <AnimatedLines />
    </>
  );
}
function Contact() {
  return (
    <>
      <AnimatedLines />
    </>
  );
}

const sentenceVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedLines = () => {
  return (
    <motion.div variants={sentenceVariants} initial="hidden" animate="visible">
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
          interfaces. I’m quick but I don’t
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
  );
};
