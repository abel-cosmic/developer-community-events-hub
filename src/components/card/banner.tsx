import Header from "../header/header";
import { Button } from "../ui/button";
import banner from "../../../public/banner.png";

const Banner = ({
  number,
  topic,
  title,
  desc,
  hideimage = false,
}: {
  number: number;
  topic: string;
  title: string;
  desc: string;
  hideimage?: boolean;
}) => {
  return (
    <div className="md:flex md:flex-row md:gap-10 md:w-5/6 md:mx-auto">
      <div className="flex flex-col w-full gap-6 p-6">
        <Header number={number} topic={topic} />
        <div className="text-4xl font-light tracking-tight">{title}</div>
        <p className="font-light">{desc}</p>
        <Button className="py-6">JOIN US NOW</Button>
      </div>
      {!hideimage && <img src={banner} alt="" className="md:w-1/2" />}
    </div>
  );
};

export default Banner;
