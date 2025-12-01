"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useCallback } from "react";

type OrviaOpenChatButtonProps = {
  label: string;
  presetMessage?: string;
} & ButtonProps;

export function OrviaOpenChatButton({
  label,
  presetMessage = "",
  ...buttonProps
}: OrviaOpenChatButtonProps) {
  const handleClick = useCallback(() => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("open-orvia-chat", {
          detail: { text: presetMessage },
        }),
      );
    }
  }, [presetMessage]);

  return (
    <Button type="button" onClick={handleClick} {...buttonProps}>
      {label}
    </Button>
  );
}
