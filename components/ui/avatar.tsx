import { cn } from "@/lib/utils";
import * as React from "react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className,
        )}
        {...props}
      >
        <div className="aspect-square h-full w-full bg-gray-200" />
      </div>
    );
  },
);
Avatar.displayName = "Avatar";

export { Avatar };
