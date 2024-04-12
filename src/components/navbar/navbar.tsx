import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import logo from "../../../public/app-site-title → Link.png";
import {Button} from "../ui/button";

import google from "../../../public/google.svg"

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 right-0 flex flex-row gap-4 px-4 py-2 border-b border-border bg-white/5 backdrop-blur-xl md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-8 py-10 text-gray-300" side="left">
          <div className="flex flex-row px-4 py-2 border-b border-slate-400">
            <div>CodeNight</div>
          </div>
          <div>About</div>
          <div>Forum</div>
          <div>Leaderboard</div>
          <div>Events</div>
          <div>Blog</div>
          <Button>
            <img src={google} className="h-4 mr-2"/>
            Sign In</Button>
        </SheetContent>
      </Sheet>
      <img src={logo} className="h-12" />
    </div>
  );
};

export default Navbar;
