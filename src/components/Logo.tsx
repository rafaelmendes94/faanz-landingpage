import faanzLogo from "@/assets/faanz-logo.png";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
  variant?: "brand" | "white";
  className?: string;
};

const HEIGHTS: Record<NonNullable<LogoProps["size"]>, string> = {
  sm: "h-8",
  md: "h-12",
  lg: "h-16",
};

const Logo = ({ size = "md", variant = "brand", className = "" }: LogoProps) => {
  const isWhite = variant === "white";
  return (
    <div className={"inline-flex items-center " + className}>
      <img
        src={faanzLogo}
        alt="Faanz Real Estate"
        className={
          HEIGHTS[size] +
          " w-auto select-none " +
          (isWhite ? "brightness-0 invert" : "")
        }
        draggable={false}
      />
    </div>
  );
};

export default Logo;
