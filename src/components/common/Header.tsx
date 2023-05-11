import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const location = useLocation();

  return (
    <div>
      <StyledLink to="/" state={location.pathname === "/"}>
        Home{" "}
      </StyledLink>
      <Link to="/pools">Pools</Link>
      <Link to="/swap">Swap</Link>
    </div>
  );
}

const StyledLink = styled(Link)(({ state }) => ({
  color: "#000",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "150px",
  height: "50px",
  marginRight: "40px",
  marginLeft: "40px",
  alignItems: "center",
  background: `${
    state
      ? "linear-gradient(101.05deg, #36a9e8 -5.36%, #36dde9 29.46%, #39b6d8 56.03%, #34ceed 81.92%);"
      : "none"
  }`,
  borderRadius: "16px",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "16px",
  lineHeight: "24px",

  "&:hover": {
    color: "#fff",
  },

  "@media (max-width: 768px)": {
    marginTop: "10px",
  },
}));

export default Header;
