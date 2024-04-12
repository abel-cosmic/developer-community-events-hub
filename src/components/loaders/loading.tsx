import { LeapFrog } from "@uiball/loaders";

const LoadingElement = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LeapFrog size={100} speed={2} color="hsl(var(--primary))" />
    </div>
  );
};

export default LoadingElement;
