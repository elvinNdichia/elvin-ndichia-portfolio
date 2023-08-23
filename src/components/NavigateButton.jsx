import { Box as MuiBox } from "@mui/system";
import { motion } from "framer-motion";
const Box = motion(MuiBox);
import { Link } from "react-router-dom";

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

export function NavigateButton({ location, link }) {
  return (
    <Link
      className="working-nav-link"
      to={link}
      style={{ textDecoration: "none" }}
    >
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
    </Link>
  );
}
