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
    <div className="flex flex-col w-full gap-10 px-4 py-8 bg-secondary-foreground">
      <img src={img} alt={topic} className="w-full h-40" />
      <div>{topic}</div>
      <div className="text-4xl tracking-wider">{slogan}</div>
      <div className="font-light">{description}</div>
      {btn && <div className="flex flex-row items-center cursor-pointer">{btn} <CircleArrowRight className="ml-2"/></div>}
    </div>
  );
};
export default Content;
