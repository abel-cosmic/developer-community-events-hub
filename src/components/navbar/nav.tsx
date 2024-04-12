import { useNavigate } from "react-router-dom";

import logo from "../../../public/app-site-title → Link.png";
import { Button } from "../ui/button";

import google from "../../../public/google.svg";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 left-0 right-0 flex flex-row justify-between gap-4 px-20 py-2 font-light border-b max-md:hidden border-border bg-white/5 backdrop-blur-xl">
      <div className="flex flex-row items-center gap-8">
        <div onClick={() => navigate("/")}>
          <img src={logo} className="h-12" alt="Logo" />
        </div>

        <NavItem path="/about">About</NavItem>
        <NavItem path="/forum">Forum</NavItem>
        <NavItem path="/leader">Leaderboard</NavItem>
        <NavItem path="/event">Events</NavItem>
        <NavItem path="/blog">Blog</NavItem>
      </div>
      <Button>
        <img src={google} className="h-4 mr-2" alt="Google Logo" />
        Sign In
      </Button>
    </div>
  );
};

const NavItem = ({ path, children }: { path: string; children: any }) => {
  const navigate = useNavigate();

  return <div onClick={() => navigate(path)}>{children}</div>;
};

export default Nav;
