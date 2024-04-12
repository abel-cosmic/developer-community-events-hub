import Header from "../header/header";
import { Button } from "../ui/button";

const Banner = ({
  number,
  topic,
  title,
  desc,
}: {
  number: number;
  topic: string;
  title: string;
  desc: string;
}) => {
  const data = {
    number: 1,
    topic: "CODE NIGHT COMMUNITY",
    title: "Community of 🇪🇹 developers to showcase their projects",
    desc: "We're an international group of Bug Hunters keeping Google products and the Internet safe and secure.",
  };
  return (
    <div className="flex flex-col gap-6 p-6">
      <Header number={number} topic={topic} />
      <div className="text-4xl font-light tracking-tight">{title}</div>
      <p className="font-light">{desc}</p>
      <Button className="py-6">JOIN US NOW</Button>
    </div>
  );
};

export default Banner;
