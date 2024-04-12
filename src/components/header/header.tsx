const Header = ({ number, topic }: { number: number; topic: string }) => {
  return (
    <div className="text-xs font-light tracking-wide uppercase opacity-65 text-foreground">
      {number}. {topic} {"----------------------------------"}
    </div>
  );
};

export default Header;
