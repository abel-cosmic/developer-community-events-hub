import {CircleArrowRight} from "lucide-react";

const Content = ({
  img,
  topic,
  slogan,
  description,
  btn,
}: {
  img: string;
  topic: string;
  slogan: string;
  description: string;
  btn?: string;
}) => {
  return (
    <div className="flex flex-col w-full gap-10 px-4 py-8 transition-all duration-500 ease-linear rounded-xl bg-secondary-foreground group">
      <img src={img} alt={topic} className="w-full h-40" />
      <div>{topic}</div>
      <div className="text-4xl tracking-wider">{slogan}</div>
      <div className="font-light">{description}</div>
      {btn && <div className="flex flex-row items-center cursor-pointer group-hover:font-semibold">{btn} <CircleArrowRight className="ml-2 rounded-full group-hover:bg-white group-hover:text-black"/></div>}
    </div>
  );
};
export default Content;
