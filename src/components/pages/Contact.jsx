import { CursorContextProvider } from "../CursorContext";
import { useCursorContext } from "../CursorContext";
import { Box as MuiBox } from "@mui/system";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavigateButton } from "../NavigateButton";
import { useState } from "react";

const Box = motion(MuiBox);

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
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
};
const imageVariants = {};

const AnimatedLines = ({ openEnter, openLeave, quickEnter, quickLeave }) => {
  const [thingBeingHovered, setThingBeingHovered] = useState("");

  const getOpacity = (hoverKey) => {
    return thingBeingHovered === hoverKey || thingBeingHovered === "" ? 1 : 0.5;
  };

  return (
    <>
      {/* Mobile Below */}
      <Box
        sx={{
          paddingTop: "80px",
          ".h1": { textAlign: "center" },
          ".h5": {
            textShadow: `
          -1px -1px 0 #fff,  
          1px -1px 0 #fff,
          -1px 1px 0 #fff,
          1px 1px 0 #fff
        `,
          },
          display: { xs: "block", md: "block" },
        }}
      >
        <motion.div
          variants={sentenceVariants}
          initial="hidden"
          animate="visible"
        >
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                Tell me how I can help you
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                Tell me how I can
              </Box>
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                make the world a little
              </Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                help you make
              </Box>
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "none", md: "block" } }}>better</Box>
              <Box sx={{ display: { xs: "block", md: "none" } }}>
                the world a little
              </Box>
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden" }}>
            <motion.h1 variants={lineVariants} className="h1">
              <Box sx={{ display: { xs: "block", md: "none" } }}>better</Box>
            </motion.h1>
          </div>
          <div
            style={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <motion.div
              variants={boxVariants}
              style={{
                position: "relative",
                display: "block",
                marginTop: "14px",
              }}
            >
              <div onMouseEnter={openEnter} onMouseLeave={openLeave}>
                <NavigateButton location="Home" link="/" />
              </div>
            </motion.div>
          </div>
          <div style={{ marginTop: "56px" }} />
          <a
            href="mailto:elvinndichia@gmail.com"
            style={{ color: "#000", textDecoration: "none" }}
          >
            <div
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                opacity: getOpacity("gmail"),
              }}
              onMouseEnter={() => {
                setThingBeingHovered("gmail");
                openEnter();
              }}
              onMouseLeave={() => {
                setThingBeingHovered("");
                openLeave();
              }}
            >
              <motion.div
                variants={boxVariants}
                style={{
                  position: "relative",
                  display: "block",
                  marginTop: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {gmailSVG}
                <Box>
                  <p className="h5">elvinndichia@gmail.com</p>
                </Box>
              </motion.div>
            </div>
          </a>
          <a
            href="tel:+237670907115"
            style={{ color: "#000", textDecoration: "none" }}
          >
            <div
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                opacity: getOpacity("phone"),
              }}
              onMouseEnter={() => {
                setThingBeingHovered("phone");
                openEnter();
              }}
              onMouseLeave={() => {
                setThingBeingHovered("");
                openLeave();
              }}
            >
              <motion.div
                variants={boxVariants}
                style={{
                  position: "relative",
                  display: "block",
                  marginTop: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {phoneSVG}
                <Box>
                  <p className="h5">+237 670907115</p>
                </Box>
              </motion.div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/elvin-ndichia-ab9aa31a5/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            <div
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                opacity: getOpacity("linkedin"),
              }}
              onMouseEnter={() => {
                setThingBeingHovered("linkedin");
                openEnter();
              }}
              onMouseLeave={() => {
                setThingBeingHovered("");
                openLeave();
              }}
            >
              <motion.div
                variants={boxVariants}
                style={{
                  position: "relative",
                  display: "block",
                  marginTop: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {linkedInSVG}
                <Box>
                  <p className="h5">LinkedIN</p>
                </Box>
              </motion.div>
            </div>
          </a>
          <a
            href="https://twitter.com/elvinNdichia"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#000", textDecoration: "none" }}
          >
            <div
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                opacity: getOpacity("twitter"),
              }}
              onMouseEnter={() => {
                setThingBeingHovered("twitter");
                openEnter();
              }}
              onMouseLeave={() => {
                setThingBeingHovered("");
                openLeave();
              }}
            >
              <motion.div
                variants={boxVariants}
                style={{
                  position: "relative",
                  display: "block",
                  marginTop: "14px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {twitterSVG}
                <Box>
                  <p className="h5">Twitter | X</p>
                </Box>
              </motion.div>
            </div>
          </a>
        </motion.div>
      </Box>
    </>
  );
};

export function Contact() {
  const { quickEnter, quickLeave, openEnter, openLeave } = useCursorContext();
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          position: "fixed",
          width: "100%",
          top: "1rem",
          left: 0,
          right: 0,
        }}
      >
        <Box
          sx={{
            background: "#aaa",
            display: "flex",
            borderRadius: "60px",
            ".working-nav-link": {
              width: "130px",
              height: "36px",
              cursor: "pointer",
            },
          }}
        >
          <Link
            className="working-nav-link"
            to="/"
            onMouseEnter={openEnter}
            onMouseLeave={openLeave}
          >
            <Box></Box>
          </Link>
          <Link
            className="working-nav-link"
            to="/projects"
            onMouseEnter={openEnter}
            onMouseLeave={openLeave}
          >
            <Box></Box>
          </Link>
          <Link
            className="working-nav-link"
            to="/contact"
            onMouseEnter={openEnter}
            onMouseLeave={openLeave}
          >
            <Box></Box>
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100vw",
          height: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ zIndex: 1 }}>
          <AnimatedLines
            openEnter={openEnter}
            openLeave={openLeave}
            quickEnter={quickEnter}
            quickLeave={quickLeave}
          />
          <Box
            sx={{
              height: { xs: "64px", md: "0" },
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: "-50px", md: "-150px" },
          right: { xs: "-10px", md: "-50px" },
        }}
      >
        <motion.div variants={imageVariants}>
          <Box
            component="img"
            sx={{ width: { xs: "160px", md: "250px" } }}
            src="wave-hand.png"
          />
        </motion.div>
      </Box>
    </Box>
  );
}

const gmailSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="19"
    viewBox="0 0 29 23"
    fill="none"
    style={{ marginRight: "1rem" }}
  >
    <g clip-path="url(#clip0_2705_43)">
      <path
        d="M6.53915 22.2026V10.9267L3.09155 7.72749L0 5.95215V20.2127C0 21.3137 0.879462 22.2026 1.96179 22.2026H6.53915Z"
        fill="#4285F4"
      />
      <path
        d="M22.2344 22.2025H26.8117C27.8973 22.2025 28.7735 21.3103 28.7735 20.2126V5.95215L25.2719 7.98559L22.2344 10.9266V22.2025Z"
        fill="#34A853"
      />
      <path
        d="M6.53943 10.9268L6.07031 6.52099L6.53943 2.3042L14.3864 8.27376L22.2333 2.3042L22.7581 6.29333L22.2333 10.9268L14.3864 16.8964L6.53943 10.9268Z"
        fill="#EA4335"
      />
      <path
        d="M22.2344 2.30404V10.9266L28.7735 5.95208V3.29893C28.7735 0.838209 26.0042 -0.564578 24.0655 0.911169L22.2344 2.30404Z"
        fill="#FBBC04"
      />
      <path
        d="M0 5.95213L3.00748 8.24014L6.53915 10.9267V2.30409L4.70807 0.911222C2.76595 -0.564639 0 0.838261 0 3.29887V5.95202V5.95213Z"
        fill="#C5221F"
      />
    </g>
    <defs>
      <clipPath id="clip0_2705_43">
        <rect
          width="28.7722"
          height="22.0023"
          fill="white"
          transform="translate(0 0.308594)"
        />
      </clipPath>
    </defs>
  </svg>
);

const twitterSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    style={{ marginRight: "16px" }}
  >
    <path
      fill="currentColor"
      d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231l5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z"
    />
  </svg>
);

const linkedInSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="25"
    viewBox="0 0 28 28"
    fill="none"
    style={{ marginRight: "16px" }}
  >
    <g clip-path="url(#clip0_2705_57)">
      <path
        d="M24.7852 0.722266H2.78295C2.28373 0.717185 1.80289 0.910352 1.44593 1.25938C1.08897 1.60841 0.885044 2.08479 0.878906 2.58399V24.6751C0.886154 25.1736 1.09056 25.6489 1.4474 25.997C1.80424 26.3451 2.28445 26.5377 2.78295 26.5326H24.7852C25.2844 26.5366 25.765 26.3427 26.1217 25.9935C26.4785 25.6442 26.6825 25.168 26.6892 24.6688V2.57765C26.6803 2.07991 26.4753 1.6058 26.1188 1.25837C25.7623 0.910945 25.283 0.718284 24.7852 0.722266Z"
        fill="#0076B2"
      />
      <path
        d="M4.70308 10.397H8.53444V22.7246H4.70308V10.397ZM6.61982 4.26172C7.05926 4.26172 7.48882 4.39205 7.85417 4.63624C8.21952 4.88042 8.50424 5.22748 8.67231 5.6335C8.84038 6.03953 8.88425 6.48628 8.79836 6.91725C8.71248 7.34821 8.5007 7.74402 8.18982 8.0546C7.87895 8.36518 7.48294 8.57658 7.05189 8.66206C6.62085 8.74753 6.17413 8.70324 5.76827 8.53478C5.3624 8.36632 5.01561 8.08128 4.77178 7.71569C4.52795 7.35011 4.39802 6.92042 4.39844 6.48098C4.399 5.8922 4.63328 5.32773 5.04981 4.9116C5.46634 4.49547 6.03104 4.26172 6.61982 4.26172ZM10.9378 10.397H14.6104V12.0894H14.6612C15.1732 11.1205 16.4214 10.0987 18.2852 10.0987C22.1653 10.0902 22.8846 12.6437 22.8846 15.9546V22.7246H19.0532V16.7268C19.0532 15.2988 19.0278 13.4604 17.0624 13.4604C15.097 13.4604 14.7628 15.0174 14.7628 16.6338V22.7246H10.9378V10.397Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2705_57">
        <rect
          width="27.0797"
          height="27.0797"
          fill="white"
          transform="translate(0.246094 0.0876465)"
        />
      </clipPath>
    </defs>
  </svg>
);

const phoneSVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    style={{ marginRight: "16px" }}
  >
    <path
      d="M13.2786 2.427C12.4961 2.427 11.7456 2.73785 11.1923 3.29117C10.639 3.84448 10.3281 4.59494 10.3281 5.37745V7.34441H29.0143V5.37745C29.0143 4.59494 28.7034 3.84448 28.1501 3.29117C27.5968 2.73785 26.8463 2.427 26.0638 2.427H13.2786ZM13.2786 29.9645C12.4961 29.9645 11.7456 29.6536 11.1923 29.1003C10.639 28.547 10.3281 27.7965 10.3281 27.014V25.0471H29.0143V27.014C29.0143 27.7965 28.7034 28.547 28.1501 29.1003C27.5968 29.6536 26.8463 29.9645 26.0638 29.9645H13.2786Z"
      fill="#7167A4"
    />
    <path
      d="M10.3281 6.36084H29.0143V26.0305H10.3281V6.36084Z"
      fill="#321B41"
    />
    <path
      d="M17.7065 10.295C17.7065 10.0342 17.8101 9.78402 17.9945 9.59958C18.179 9.41514 18.4291 9.31152 18.6899 9.31152H20.6569C20.9177 9.31152 21.1679 9.41514 21.3523 9.59958C21.5368 9.78402 21.6404 10.0342 21.6404 10.295V12.262C21.6404 12.5228 21.5368 12.773 21.3523 12.9574C21.1679 13.1418 20.9177 13.2454 20.6569 13.2454H18.6899C18.4291 13.2454 18.179 13.1418 17.9945 12.9574C17.8101 12.773 17.7065 12.5228 17.7065 12.262V10.295ZM12.7891 15.2124C12.7891 14.9516 12.8927 14.7014 13.0771 14.517C13.2616 14.3325 13.5117 14.2289 13.7725 14.2289H15.7395C16.0003 14.2289 16.2505 14.3325 16.4349 14.517C16.6194 14.7014 16.723 14.9516 16.723 15.2124V17.1794C16.723 17.4402 16.6194 17.6904 16.4349 17.8748C16.2505 18.0592 16.0003 18.1629 15.7395 18.1629H13.7725C13.5117 18.1629 13.2616 18.0592 13.0771 17.8748C12.8927 17.6904 12.7891 17.4402 12.7891 17.1794V15.2124ZM18.6899 19.1463C18.4291 19.1463 18.179 19.25 17.9945 19.4344C17.8101 19.6188 17.7065 19.869 17.7065 20.1298V22.0968C17.7065 22.3576 17.8101 22.6078 17.9945 22.7922C18.179 22.9766 18.4291 23.0803 18.6899 23.0803H20.6569C20.9177 23.0803 21.1679 22.9766 21.3523 22.7922C21.5368 22.6078 21.6404 22.3576 21.6404 22.0968V20.1298C21.6404 19.869 21.5368 19.6188 21.3523 19.4344C21.1679 19.25 20.9177 19.1463 20.6569 19.1463H18.6899Z"
      fill="#00A6ED"
    />
    <path
      d="M12.7891 10.295C12.7891 10.0342 12.8927 9.78402 13.0771 9.59958C13.2616 9.41514 13.5117 9.31152 13.7725 9.31152H15.7395C16.0003 9.31152 16.2505 9.41514 16.4349 9.59958C16.6194 9.78402 16.723 10.0342 16.723 10.295V12.262C16.723 12.5228 16.6194 12.773 16.4349 12.9574C16.2505 13.1418 16.0003 13.2454 15.7395 13.2454H13.7725C13.5117 13.2454 13.2616 13.1418 13.0771 12.9574C12.8927 12.773 12.7891 12.5228 12.7891 12.262V10.295ZM12.7891 20.1298C12.7891 19.869 12.8927 19.6188 13.0771 19.4344C13.2616 19.25 13.5117 19.1463 13.7725 19.1463H15.7395C16.0003 19.1463 16.2505 19.25 16.4349 19.4344C16.6194 19.6188 16.723 19.869 16.723 20.1298V22.0968C16.723 22.3576 16.6194 22.6078 16.4349 22.7922C16.2505 22.9766 16.0003 23.0803 15.7395 23.0803H13.7725C13.5117 23.0803 13.2616 22.9766 13.0771 22.7922C12.8927 22.6078 12.7891 22.3576 12.7891 22.0968V20.1298ZM23.6074 14.2289C23.3465 14.2289 23.0964 14.3325 22.9119 14.517C22.7275 14.7014 22.6239 14.9516 22.6239 15.2124V17.1794C22.6239 17.4402 22.7275 17.6904 22.9119 17.8748C23.0964 18.0592 23.3465 18.1629 23.6074 18.1629H25.5743C25.8352 18.1629 26.0853 18.0592 26.2697 17.8748C26.4542 17.6904 26.5578 17.4402 26.5578 17.1794V15.2124C26.5578 14.9516 26.4542 14.7014 26.2697 14.517C26.0853 14.3325 25.8352 14.2289 25.5743 14.2289H23.6074Z"
      fill="#FF822D"
    />
    <path
      d="M11.3914 15.7828L6.92639 11.721C6.85308 11.653 6.7614 11.6082 6.66277 11.592C6.56414 11.5757 6.46292 11.5889 6.37172 11.6298C6.28051 11.6707 6.20334 11.7375 6.14983 11.8219C6.09632 11.9063 6.06882 12.0046 6.07076 12.1045V13.8846C6.07076 14.1699 5.84456 14.3961 5.55935 14.3961H3.70057C3.50234 14.3961 3.31222 14.4748 3.17205 14.615C3.03187 14.7552 2.95312 14.9453 2.95312 15.1435V17.1891C2.95312 17.6022 3.28751 17.9366 3.70057 17.9366H5.55935C5.84456 17.9366 6.07076 18.1628 6.07076 18.448V20.2281C6.07076 20.6707 6.60184 20.9067 6.92639 20.6117L11.3914 16.5499C11.6176 16.3434 11.6176 15.9893 11.3914 15.7828Z"
      fill="#00A6ED"
    />
    <path
      d="M22.6244 10.295C22.6244 10.0342 22.7281 9.78402 22.9125 9.59958C23.0969 9.41514 23.3471 9.31152 23.6079 9.31152H25.5749C25.8357 9.31152 26.0859 9.41514 26.2703 9.59958C26.4547 9.78402 26.5584 10.0342 26.5584 10.295V12.262C26.5584 12.5228 26.4547 12.773 26.2703 12.9574C26.0859 13.1418 25.8357 13.2454 25.5749 13.2454H23.6079C23.3471 13.2454 23.0969 13.1418 22.9125 12.9574C22.7281 12.773 22.6244 12.5228 22.6244 12.262V10.295ZM17.707 15.2124C17.707 14.9516 17.8106 14.7014 17.9951 14.517C18.1795 14.3325 18.4297 14.2289 18.6905 14.2289H20.6575C20.9183 14.2289 21.1685 14.3325 21.3529 14.517C21.5373 14.7014 21.641 14.9516 21.641 15.2124V17.1794C21.641 17.4402 21.5373 17.6904 21.3529 17.8748C21.1685 18.0592 20.9183 18.1629 20.6575 18.1629H18.6905C18.4297 18.1629 18.1795 18.0592 17.9951 17.8748C17.8106 17.6904 17.707 17.4402 17.707 17.1794V15.2124ZM23.6079 19.1463C23.3471 19.1463 23.0969 19.25 22.9125 19.4344C22.7281 19.6188 22.6244 19.869 22.6244 20.1298V22.0968C22.6244 22.3576 22.7281 22.6078 22.9125 22.7922C23.0969 22.9766 23.3471 23.0803 23.6079 23.0803H25.5749C25.8357 23.0803 26.0859 22.9766 26.2703 22.7922C26.4547 22.6078 26.5584 22.3576 26.5584 22.0968V20.1298C26.5584 19.869 26.4547 19.6188 26.2703 19.4344C26.0859 19.25 25.8357 19.1463 25.5749 19.1463H23.6079Z"
      fill="#FCD53F"
    />
  </svg>
);
