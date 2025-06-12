import { memo, useCallback } from "react";
import { Button } from "../ui/button";

interface SwitchNetworkButtonProps {
  onClick: () => void;
}

const SwitchNetworkButton = memo(({ onClick }: SwitchNetworkButtonProps) => {
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <Button onClick={handleClick} className="cursor-pointer">
      Switch network
    </Button>
  );
});

SwitchNetworkButton.displayName = "SwitchNetworkButton";

export { SwitchNetworkButton };
