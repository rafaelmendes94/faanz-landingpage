import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}

/**
 * Realistic iPhone-style frame with notch, soft shadow and rounded corners.
 * Aspect ratio is locked so child screen content scales nicely.
 */
export default function PhoneFrame({ children, className, elevated }: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative aspect-[9/19] rounded-[2.4rem] bg-[#0b0b0f] p-[6px] ring-1 ring-black/10",
        elevated
          ? "shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35),0_10px_25px_-10px_rgba(15,23,42,0.25)]"
          : "shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)]",
        className,
      )}
    >
      {/* Side buttons */}
      <div className="absolute left-[-2px] top-[18%] h-7 w-[3px] rounded-l-sm bg-[#0b0b0f]" />
      <div className="absolute left-[-2px] top-[28%] h-12 w-[3px] rounded-l-sm bg-[#0b0b0f]" />
      <div className="absolute right-[-2px] top-[24%] h-16 w-[3px] rounded-r-sm bg-[#0b0b0f]" />

      {/* Inner screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-1.5 z-30 h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-[#0b0b0f]" />
        {children}
      </div>
    </div>
  );
}