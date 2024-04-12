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
    <div className="flex flex-col gap-4 pt-4 pb-10 border-t ">
      <div>{topic}</div>
      <div className="text-2xl">{title}</div>
      <div className="flex flex-row items-center cursor-pointer">
        {btn} <CircleArrowRight className="ml-2" />
      </div>
    </div>
  );
};

export default Linker;
