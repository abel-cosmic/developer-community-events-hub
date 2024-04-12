import { CircleArrowRight } from "lucide-react";

const Linker = ({
  topic,
  title,
  btn,
}: {
  topic: string;
  title: string;
  btn: string;
}) => {
  return (
    <div className="flex flex-col gap-4 pt-4 pb-10 transition-all duration-500 ease-in border-t group">
      <div>{topic}</div>
      <div className="text-2xl">{title}</div>
      <div className="flex flex-row items-center cursor-pointer group-hover:font-semibold">
        {btn} <CircleArrowRight className="ml-2 rounded-full group-hover:bg-white group-hover:text-black" />
      </div>
    </div>
  );
};

export default Linker;
