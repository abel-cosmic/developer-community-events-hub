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
