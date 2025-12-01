import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonBase =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const buttonVariants = cva(
  `${buttonBase}`,
  {
    variants: {
      variant: {
        default:
          "border-[var(--btn-primary-bg)] bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-[0_10px_25px_rgba(39,231,236,0.35)] hover:brightness-105",
        secondary:
          "border-[var(--btn-secondary-bg)] bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] shadow-[0_10px_24px_rgba(20,168,188,0.35)] hover:brightness-105",
        outline:
          "border border-[rgba(39,231,236,0.6)] bg-transparent text-[var(--fluorescent-blue)] hover:bg-[var(--fluorescent-blue)]/10",
        ghost:
          "border border-[rgba(39,231,236,0.6)] bg-transparent text-[var(--fluorescent-blue)] hover:bg-[var(--fluorescent-blue)]/10",
        destructive:
          "bg-destructive text-white shadow-sm hover:bg-destructive/90",
        link: "text-[var(--link-color)] underline-offset-4 hover:text-[var(--link-hover)] hover:underline before:hidden",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
