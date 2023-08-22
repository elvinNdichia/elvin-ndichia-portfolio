export function MobileHeader() {
  return (
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
    </Box>
  );
}
