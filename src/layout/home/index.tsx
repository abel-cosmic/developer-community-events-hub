import Banner from "@/components/card/banner";
import Topic from "@/components/card/topic";
import Navbar from "@/components/navbar/navbar";
import figure from "../../../public/Figure.png";
import Content from "@/components/card/content";
import Linker from "@/components/header/linker";
import logo from "../../../public/logo.png";
import {CircleHelp} from "lucide-react";

const HomeLayout = () => {
  const data = [
    {
      id: 1,
      img: figure,
      topic: "TOPIC HERE",
      slogan: "SLOGAN HERE",
      description: "A small  description you want to put for an overview card",
      btn: "Explore codenight",
    },
    {
      id: 2,
      img: figure,
      topic: "TOPIC HERE",
      slogan: "SLOGAN HERE",
      description: "A small  description you want to put for an overview card",
      btn: "Explore codenight",
    },
    {
      id: 3,
      img: figure,
      topic: "TOPIC HERE",
      slogan: "SLOGAN HERE",
      description: "A small  description you want to put for an overview card",
      btn: "Explore codenight",
    },
  ];

  const links = [
    {
      id: 1,
      topic: "LEARN MORE",
      title: "How to become a Developer",
      btn: "Start now",
    },
    {
      id: 2,
      topic: "TARGETS",
      title: "UI/UX basics you need to know",
      btn: "Explore",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <Banner
        number={1}
        topic={"CODE NIGHT COMMUNITY"}
        title={"Community of 🇪🇹 developers to showcase their projects"}
        desc={
          "We're an international group of Bug Hunters keeping Google products and the Internet safe and secure."
        }
      />
      <Topic />
      <div className="flex flex-col items-center gap-10 px-6">
        {data.map((cards) => (
          <Content
            key={cards.id}
            img={cards.img}
            topic={cards.topic}
            slogan={cards.slogan}
            btn={cards.btn}
            description={cards.description}
          />
        ))}
      </div>
      <Banner
        number={1}
        topic={"BUG HUNTER UNIVERSITY"}
        title={"Grow with the community and learn (even) more"}
        desc={
          "CodeNight Developers Community: Uniting passionate developers from diverse backgrounds to learn, share, and innovate together in the world of coding, software development, and technology."
        }
      />
      <div className="flex flex-col gap-0 px-6 font-light">
        {links.map((link) => (
          <Linker
            key={link.id}
            topic={link.topic}
            title={link.title}
            btn={link.btn}
          />
        ))}
      </div>
      <footer className="flex flex-col gap-4 px-4 pt-6 pb-40 font-light border-t-2">
        <img src={logo} alt="" className="w-20" />
        <div className="flex flex-row flex-wrap items-center gap-6">
            <div>Privacy</div>
            <div>Terms</div>
            <div>About CodeNight</div>
            <div>CodeNight Products</div>
            <div className="flex flex-row gap-2"><CircleHelp/>Help</div>
        </div>
      </footer>
    </div>
  );
};

export default HomeLayout;
