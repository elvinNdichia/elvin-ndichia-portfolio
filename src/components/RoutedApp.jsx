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
    </>
  );
}

function Chip({ svg, label }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "11px 16px",
        background: "#eee",
        borderRadius: "50px",
        marginRight: "8px",
      }}
    >
      <div
        style={{ marginRight: "10px", display: "flex", alignItems: "center" }}
      >
        {svg}
      </div>
      <p style={{ color: "rgba(0, 0, 0, 60)" }} className="body1">
        {label}
      </p>
    </div>
  );
}

/* -------------------- Logo animation start ---------------------------- */

const pathVariants = {
  hidden: { opacity: 0, x: 32 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
    },
  }),
};

const Logo = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="89"
      height="28"
      viewBox="0 0 89 28"
      fill="none"
    >
      <motion.path
        d="M0 27.9999V0.329346H13.8353V4.28229H3.95294V12.1882H11.5294V16.1411H3.95294V23.7176H13.5059V27.9999H0Z"
        fill="black"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={0}
      />
      <motion.path
        d="M17.7891 27.9999V0.329346H21.742V23.7176H31.6244V27.9999H17.7891Z"
        fill="black"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={1}
      />
      <motion.path
        d="M35.5781 27.9999V0.329346H39.5311V21.4117L52.0487 0.329346H56.6605L40.5193 27.9999H35.5781Z"
        fill="black"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={2}
      />
      <motion.path
        d="M59.293 27.9999V0.329346H63.2459V27.9999H59.293Z"
        fill="black"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={3}
      />
      <motion.path
        d="M67.8594 27.6706V0H72.1417L84.33 20.4235V0H88.2829V27.6706H84.0006L71.8123 7.24706V27.6706H67.8594Z"
        fill="black"
        variants={pathVariants}
        initial="hidden"
        animate="visible"
        custom={4}
      />
    </motion.svg>
  );
};

/* -------------------- Logo animation end ---------------------------- */

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
      <Logo />
      <br />
      <NavigateButton location="Projects" />
      <br />
      <Chip svg={htmlSVG} label="HTML" />
      <Chip svg={cssSVG} label="CSS" />
      <Chip svg={javascriptSVG} label="JavaScript" />
      <Chip svg={reactSVG} label="React" />
      <Chip svg={muiSVG} label="MUI" />
      <Chip svg={reactRouterSVG} label="React Router" />
      <Chip svg={framerSVG} label="Framer Motion" />
      <Chip svg={firebaseSVG} label="Firebase" />
      <Chip svg={figmaSVG} label="Figma" />
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
