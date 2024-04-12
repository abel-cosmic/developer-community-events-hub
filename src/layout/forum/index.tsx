import Navbar from "@/components/navbar/navbar";
import logo from "../../../public/logo.png";
import { CircleHelp } from "lucide-react";
import Nav from "@/components/navbar/nav";

const ForumLayout = () => {
  return (
    <div className="flex flex-col">
      <Nav/>
      <Navbar />
      <footer className="flex flex-col gap-4 px-4 pt-6 pb-40 font-light border-t md:pt-4 md:flex-row md:pb-8 md:items-center md:justify-center mt-96">
        <img src={logo} alt="" className="w-20" />
        <div className="flex flex-row flex-wrap items-center gap-6">
          <div>Privacy</div>
          <div>Terms</div>
          <div>About CodeNight</div>
          <div>CodeNight Products</div>
          <div className="flex flex-row gap-2">
            <CircleHelp />
            Help
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForumLayout;
