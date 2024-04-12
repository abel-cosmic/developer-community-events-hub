import Header from "../header/header";

const Topic = () => {
  return (
    <div className="flex flex-col gap-6 p-6 md:px-40">
      <Header number={1} topic={"GETTING STARTED"} />
      <div className="text-4xl font-light tracking-tight">
        The three steps to hunting security vulnerabilities
      </div>
    </div>
  );
};

export default Topic;
