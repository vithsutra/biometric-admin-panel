import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-20 cursor-pointer overflow-hidden rounded-sm border bg- text-center font-semibold",
        className,
      )}
      {...props}
    >
      <div className="h-full w-full flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#4169E1] transition-all duration-300 group-hover:scale-[50]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-0 pb-1">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full  items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-100">
        <span className="pb-1 ">{children}</span>
        <ArrowRight className="h-5 w-4 pb-1"/>
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
